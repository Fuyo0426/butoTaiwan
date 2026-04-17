import { Resend } from 'resend'

export function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY missing')
  return new Resend(key)
}

export function getFrom() {
  return process.env.RESEND_FROM ?? '武道台灣 <no-reply@skyrealm.com.tw>'
}

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_BASE_URL ?? 'https://buto-taiwan.vercel.app'
}

export function welcomeEmailHtml(name: string, unsubscribeUrl: string) {
  return `<!DOCTYPE html>
<html lang="zh-TW">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#F8F6F1;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F6F1;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#F8F6F1;max-width:560px;width:100%;padding:0 24px;">
        <tr><td style="padding-bottom:32px;">
          <p style="font-size:11px;letter-spacing:0.2em;color:#8B1A1A;text-transform:uppercase;margin:0;">武道台灣 ButoTaiwan</p>
        </td></tr>
        <tr><td>
          <h1 style="font-size:28px;font-weight:900;line-height:1.1;margin:0 0 16px;color:#1A1A1A;">
            ${name ? `${name}，` : ''}訂閱成功。
          </h1>
        </td></tr>
        <tr><td style="padding-bottom:24px;">
          <p style="font-size:15px;line-height:1.9;color:#4A4A4A;margin:0;">
            感謝你訂閱武道台灣月刊。<br>
            由台南武德殿製作，每月深度訪談台灣劍道前輩，<br>
            每週精選全球劍道資訊，創刊號即將發行。
          </p>
        </td></tr>
        <tr><td style="border-left:3px solid #8B1A1A;padding-left:16px;margin:32px 0;display:block;">
          <p style="font-size:16px;font-style:italic;color:#1A1A1A;margin:0;">「竹刀一揮，心意相通。」</p>
        </td></tr>
        <tr><td style="padding-top:32px;">
          <p style="font-size:13px;color:#4A4A4A;margin:0 0 4px;">製作單位：台南武德殿</p>
          <p style="font-size:13px;color:#4A4A4A;margin:0;">製作人：張復堯</p>
        </td></tr>
        <tr><td style="padding-top:32px;border-top:1px solid #E8E4DC;margin-top:32px;">
          <p style="font-size:11px;color:#9A9A9A;margin:0;">
            如不希望繼續收到信件，<a href="${unsubscribeUrl}" style="color:#8B1A1A;">點此取消訂閱</a>。
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}
