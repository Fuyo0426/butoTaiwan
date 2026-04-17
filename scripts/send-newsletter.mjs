// 執行方式：node scripts/send-newsletter.mjs
// 由 GitHub Action 在每次 deploy 後自動觸發

import nodemailer from 'nodemailer'
import { createClient } from '@supabase/supabase-js'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://buto-taiwan.vercel.app'
const OUTLOOK_USER = process.env.OUTLOOK_USER
const OUTLOOK_PASSWORD = process.env.OUTLOOK_PASSWORD
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY

if (!OUTLOOK_USER || !OUTLOOK_PASSWORD || !SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Missing required environment variables')
  process.exit(1)
}

// 1. 抓最新文章（從 RSS Feed）
const rssRes = await fetch(`${BASE_URL}/feed.xml`)
const rssText = await rssRes.text()

const titleMatch = rssText.match(/<item>[\s\S]*?<title><!\[CDATA\[(.*?)\]\]><\/title>/)
const linkMatch = rssText.match(/<item>[\s\S]*?<link>(.*?)<\/link>/)
const descMatch = rssText.match(/<item>[\s\S]*?<description><!\[CDATA\[(.*?)\]\]><\/description>/)
const pubDateMatch = rssText.match(/<item>[\s\S]*?<pubDate>(.*?)<\/pubDate>/)

if (!titleMatch || !linkMatch) {
  console.log('No articles found in RSS feed')
  process.exit(0)
}

const article = {
  title: titleMatch[1],
  url: linkMatch[1],
  excerpt: descMatch?.[1] ?? '',
  pubDate: pubDateMatch?.[1] ? new Date(pubDateMatch[1]) : new Date(),
}

// 2. 只寄 24 小時內的新文章
const hoursSincePublish = (Date.now() - article.pubDate.getTime()) / 1000 / 60 / 60
if (hoursSincePublish > 25) {
  console.log(`Article "${article.title}" is ${Math.round(hoursSincePublish)}h old, skipping`)
  process.exit(0)
}

// 3. 取得所有確認的訂閱者
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)
const { data: subscribers, error } = await supabase
  .from('subscribers')
  .select('email, token')
  .eq('confirmed', true)

if (error) {
  console.error('Supabase error:', error)
  process.exit(1)
}

if (!subscribers || subscribers.length === 0) {
  console.log('No confirmed subscribers')
  process.exit(0)
}

// 4. Outlook SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: { user: OUTLOOK_USER, pass: OUTLOOK_PASSWORD },
  tls: { rejectUnauthorized: false },
})

// 5. 逐一寄信
let sent = 0
for (const sub of subscribers) {
  const unsubscribeUrl = `${BASE_URL}/api/unsubscribe?token=${sub.token}`

  const html = `<!DOCTYPE html>
<html lang="zh-TW"><head><meta charset="UTF-8"></head>
<body style="background:#F8F6F1;font-family:Georgia,serif;padding:40px 24px;">
  <p style="font-size:11px;letter-spacing:0.2em;color:#8B1A1A;text-transform:uppercase;">武道台灣 — 新文章上線</p>
  <h1 style="font-size:24px;font-weight:900;color:#1A1A1A;margin:16px 0;">${article.title}</h1>
  <p style="font-size:15px;color:#4A4A4A;line-height:1.9;">${article.excerpt}</p>
  <a href="${article.url}" style="display:inline-block;margin:24px 0;padding:12px 28px;background:#8B1A1A;color:#fff;text-decoration:none;font-size:14px;font-family:sans-serif;">
    閱讀全文
  </a>
  <hr style="border:none;border-top:1px solid #E8E4DC;margin:32px 0;">
  <p style="font-size:11px;color:#9A9A9A;">
    武道台灣 · 台南武德殿 ·
    <a href="${unsubscribeUrl}" style="color:#8B1A1A;">取消訂閱</a>
  </p>
</body></html>`

  try {
    await transporter.sendMail({
      from: `"武道台灣" <${OUTLOOK_USER}>`,
      to: sub.email,
      subject: `武道台灣：${article.title}`,
      html,
      headers: {
        'List-Unsubscribe': `<${unsubscribeUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
    })
    sent++
    await new Promise((r) => setTimeout(r, 300))
  } catch (err) {
    console.error(`Failed to send to ${sub.email}:`, err)
  }
}

console.log(`Newsletter sent to ${sent}/${subscribers.length} subscribers`)
