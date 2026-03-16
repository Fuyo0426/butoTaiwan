import { NextRequest, NextResponse } from 'next/server'
import { getResend, getFrom } from '@/lib/email'

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: '請填寫所有欄位' }, { status: 400 })
  }
  if (!email.includes('@')) {
    return NextResponse.json({ error: '請輸入有效的電子信箱' }, { status: 400 })
  }

  try {
    const resend = getResend()
    const { error } = await resend.emails.send({
      from: getFrom(),
      to: 'butotaiwan@outlook.com',
      replyTo: email,
      subject: `[武道台灣聯絡表單] ${subject}`,
      html: `
        <p><strong>姓名：</strong>${name}</p>
        <p><strong>信箱：</strong>${email}</p>
        <p><strong>主旨：</strong>${subject}</p>
        <hr/>
        <p style="white-space:pre-wrap;">${message}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error: '寄信失敗，請稍後再試' }, { status: 500 })
    }
  } catch {
    return NextResponse.json({ error: '寄信失敗，請稍後再試' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
