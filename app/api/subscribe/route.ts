import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: '請輸入有效的電子信箱' }, { status: 400 })
  }

  const apiKey = process.env.MAILERLITE_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: '服務設定錯誤' }, { status: 500 })
  }

  try {
    const body: Record<string, unknown> = { email }
    if (name) body.fields = { name }

    const groupId = process.env.MAILERLITE_GROUP_ID
    if (groupId) body.groups = [groupId]

    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('MailerLite error:', err)
      return NextResponse.json({ error: '訂閱失敗，請稍後再試' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: '訂閱失敗，請稍後再試' }, { status: 500 })
  }
}
