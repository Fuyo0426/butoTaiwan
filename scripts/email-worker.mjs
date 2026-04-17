/**
 * 武道台灣 Email Worker
 * 輪詢 Supabase，用本地 Outlook 桌面程式自動寄確認信 + 歡迎信
 * 執行：node scripts/email-worker.mjs
 */

import { createClient } from '@supabase/supabase-js'
import { execSync } from 'child_process'
import { readFileSync, writeFileSync, unlinkSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { tmpdir } from 'os'

// 載入 .env.local
const __dirname = dirname(fileURLToPath(import.meta.url))
const envPath = join(__dirname, '../.env.local')
for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
  const trimmed = line.trim()
  if (!trimmed || trimmed.startsWith('#')) continue
  const eqIdx = trimmed.indexOf('=')
  if (eqIdx === -1) continue
  const key = trimmed.slice(0, eqIdx).trim()
  const val = trimmed.slice(eqIdx + 1).trim()
  if (key) process.env[key] = val
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://buto-taiwan.vercel.app'
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌ Supabase env vars missing')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

// 用 Outlook COM 寄信（Windows 桌面程式）
function sendViaOutlook(to, subject, htmlBody) {
  const base64Html = Buffer.from(htmlBody, 'utf-8').toString('base64')
  const base64Subject = Buffer.from(subject, 'utf-8').toString('base64')
  const psScript = `
$subjectBytes = [System.Convert]::FromBase64String('${base64Subject}')
$subject = [System.Text.Encoding]::UTF8.GetString($subjectBytes)
$htmlBytes = [System.Convert]::FromBase64String('${base64Html}')
$html = [System.Text.Encoding]::UTF8.GetString($htmlBytes)
$outlook = New-Object -ComObject Outlook.Application
$mail = $outlook.CreateItem(0)
$mail.To = '${to}'
$mail.Subject = $subject
$mail.HTMLBody = $html
$mail.Send()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($mail) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($outlook) | Out-Null
`
  const tmpFile = join(tmpdir(), `outlook-send-${Date.now()}.ps1`)
  // PowerShell 需要 UTF-16LE BOM
  const bom = Buffer.from([0xFF, 0xFE])
  const content = Buffer.from(psScript, 'utf16le')
  writeFileSync(tmpFile, Buffer.concat([bom, content]))
  try {
    execSync(`powershell -NoProfile -ExecutionPolicy Bypass -File "${tmpFile}"`, { stdio: 'pipe' })
  } finally {
    try { unlinkSync(tmpFile) } catch {}
  }
}

// 確認信 HTML
function confirmEmailHtml(name, confirmUrl, unsubscribeUrl) {
  return `<!DOCTYPE html>
<html lang="zh-TW"><head><meta charset="UTF-8"></head>
<body style="background:#F8F6F1;font-family:Georgia,serif;padding:40px 24px;">
  <p style="font-size:11px;letter-spacing:0.2em;color:#8B1A1A;text-transform:uppercase;">武道台灣 butoTaiwan</p>
  <h1 style="font-size:24px;color:#1A1A1A;">請點擊確認訂閱</h1>
  <p style="font-size:15px;color:#4A4A4A;line-height:1.8;">
    ${name ? `${name}，你好。` : '你好。'}<br>
    請點擊下方按鈕完成訂閱，之後每有新文章會第一時間通知你。
  </p>
  <a href="${confirmUrl}" style="display:inline-block;margin:16px 0;padding:12px 28px;background:#8B1A1A;color:#fff;text-decoration:none;font-size:14px;font-family:sans-serif;">
    確認訂閱
  </a>
  <p style="font-size:11px;color:#9A9A9A;margin-top:32px;">
    如果這不是你的操作，請忽略此信。<br>
    <a href="${unsubscribeUrl}" style="color:#8B1A1A;">取消訂閱</a>
  </p>
</body></html>`
}

// 歡迎信 HTML
function welcomeEmailHtml(name, unsubscribeUrl) {
  return `<!DOCTYPE html>
<html lang="zh-TW"><head><meta charset="UTF-8"></head>
<body style="background:#F8F6F1;font-family:Georgia,serif;padding:40px 24px;">
  <p style="font-size:11px;letter-spacing:0.2em;color:#8B1A1A;text-transform:uppercase;">武道台灣 butoTaiwan</p>
  <h1 style="font-size:28px;font-weight:900;color:#1A1A1A;">${name ? `${name}，` : ''}訂閱成功。</h1>
  <p style="font-size:15px;color:#4A4A4A;line-height:1.9;">
    感謝你訂閱武道台灣月刊。<br>
    由台南武德殿製作，每月深度訪談台灣劍道前輩，<br>
    每週精選全球劍道資訊，創刊號即將發行。
  </p>
  <p style="font-size:16px;font-style:italic;color:#1A1A1A;border-left:3px solid #8B1A1A;padding-left:16px;margin:24px 0;">
    「竹刀一揮，心意相通。」
  </p>
  <p style="font-size:13px;color:#4A4A4A;">製作單位：台南武德殿　製作人：張復堯</p>
  <p style="font-size:11px;color:#9A9A9A;margin-top:32px;">
    如不希望繼續收到信件，<a href="${unsubscribeUrl}" style="color:#8B1A1A;">點此取消訂閱</a>。
  </p>
</body></html>`
}

async function processEmails() {
  // 1. 寄確認信給新訂閱者
  const { data: newSubs } = await supabase
    .from('subscribers')
    .select('id, email, name, token')
    .is('confirmation_sent_at', null)
    .eq('confirmed', false)

  for (const sub of newSubs ?? []) {
    const confirmUrl = `${BASE_URL}/api/confirm?token=${sub.token}`
    const unsubscribeUrl = `${BASE_URL}/api/unsubscribe?token=${sub.token}`
    try {
      sendViaOutlook(
        sub.email,
        '請確認你的武道台灣訂閱',
        confirmEmailHtml(sub.name ?? '', confirmUrl, unsubscribeUrl)
      )
      await supabase
        .from('subscribers')
        .update({ confirmation_sent_at: new Date().toISOString() })
        .eq('id', sub.id)
      console.log(`✅ 確認信已寄：${sub.email}`)
    } catch (err) {
      console.error(`❌ 確認信失敗 ${sub.email}：`, err.message)
    }
  }

  // 2. 寄歡迎信給剛確認的訂閱者
  const { data: confirmedSubs } = await supabase
    .from('subscribers')
    .select('id, email, name, token')
    .eq('confirmed', true)
    .is('welcome_sent_at', null)

  for (const sub of confirmedSubs ?? []) {
    const unsubscribeUrl = `${BASE_URL}/api/unsubscribe?token=${sub.token}`
    try {
      sendViaOutlook(
        sub.email,
        '歡迎加入武道台灣 — 創刊號即將送達',
        welcomeEmailHtml(sub.name ?? '', unsubscribeUrl)
      )
      await supabase
        .from('subscribers')
        .update({ welcome_sent_at: new Date().toISOString() })
        .eq('id', sub.id)
      console.log(`✅ 歡迎信已寄：${sub.email}`)
    } catch (err) {
      console.error(`❌ 歡迎信失敗 ${sub.email}：`, err.message)
    }
  }
}

console.log('🗡️  武道台灣 Email Worker 啟動')
console.log(`📡 輪詢間隔：30 秒　目標：${BASE_URL}`)

// 立即執行一次，之後每 30 秒
await processEmails()
setInterval(processEmails, 30_000)
