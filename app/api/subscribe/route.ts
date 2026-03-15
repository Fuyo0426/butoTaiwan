import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: '請輸入有效的電子信箱' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: '武道台灣 <no-reply@butotaiwan.com>',
      to: email,
      subject: '歡迎訂閱武道台灣 — 創刊號即將送達',
      html: `
        <div style="font-family: serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; background: #F8F6F1; color: #1A1A1A;">
          <p style="font-size: 11px; letter-spacing: 0.2em; color: #8B1A1A; text-transform: uppercase; margin-bottom: 32px;">
            武道台灣 butoTaiwan
          </p>
          <h1 style="font-size: 28px; font-weight: 900; line-height: 1.1; margin-bottom: 16px;">
            ${name ? `${name}，` : ''}訂閱成功。
          </h1>
          <p style="font-size: 15px; line-height: 1.8; color: #4A4A4A; margin-bottom: 24px;">
            感謝你訂閱武道台灣月刊。<br/>
            創刊號即將發行，我們會在第一時間將連結送到你的信箱。
          </p>
          <div style="border-left: 3px solid #8B1A1A; padding-left: 16px; margin: 32px 0;">
            <p style="font-size: 16px; font-style: italic; color: #1A1A1A; margin: 0;">
              「竹刀一揮，心意相通。」
            </p>
          </div>
          <p style="font-size: 13px; color: #4A4A4A; margin-bottom: 4px;">製作單位：台南武德殿</p>
          <p style="font-size: 13px; color: #4A4A4A;">製作人：張復堯</p>
          <hr style="border: none; border-top: 1px solid #E8E4DC; margin: 32px 0;" />
          <p style="font-size: 11px; color: #9A9A9A;">
            如不希望繼續收到信件，請回覆此信即可取消訂閱。
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: '寄信失敗，請稍後再試' }, { status: 500 })
  }
}
