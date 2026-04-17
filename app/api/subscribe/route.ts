import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { getSupabaseClient } from '@/lib/supabase'
import { getResend, getFrom, welcomeEmailHtml, getBaseUrl } from '@/lib/email'

export async function POST(req: NextRequest) {
  const { name, email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: '請輸入有效的電子信箱' }, { status: 400 })
  }

  const supabase = getSupabaseClient()
  const token = crypto.randomBytes(32).toString('hex')
  const baseUrl = getBaseUrl()

  const { error } = await supabase.from('subscribers').upsert(
    { email, name: name ?? null, token, confirmed: true },
    { onConflict: 'email' }
  )

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: '訂閱失敗，請稍後再試' }, { status: 500 })
  }

  const unsubscribeUrl = `${baseUrl}/api/unsubscribe?token=${token}`

  try {
    const resend = getResend()
    const { error: emailError } = await resend.emails.send({
      from: getFrom(),
      to: email,
      subject: '歡迎加入武道台灣 — 創刊號即將送達',
      html: welcomeEmailHtml(name ?? '', unsubscribeUrl),
    })
    if (emailError) {
      console.error('Resend error:', emailError)
      return NextResponse.json({ error: '寄信失敗', detail: emailError.message }, { status: 500 })
    }
  } catch (err) {
    console.error('Email error:', err)
    return NextResponse.json({ error: '寄信失敗，請稍後再試' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
