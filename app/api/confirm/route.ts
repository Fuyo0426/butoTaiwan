import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/supabase'
import { getResend, getFrom, welcomeEmailHtml, getBaseUrl } from '@/lib/email'

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (!token) return NextResponse.redirect(new URL('/?sub=invalid', getBaseUrl()))

  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('subscribers')
    .select('email, name, confirmed')
    .eq('token', token)
    .single()

  if (error || !data) return NextResponse.redirect(new URL('/?sub=invalid', getBaseUrl()))
  if (data.confirmed) return NextResponse.redirect(new URL('/?sub=already', getBaseUrl()))

  await supabase.from('subscribers').update({ confirmed: true }).eq('token', token)

  const baseUrl = getBaseUrl()
  const unsubscribeUrl = `${baseUrl}/api/unsubscribe?token=${token}`

  const resend = getResend()
  await resend.emails.send({
    from: getFrom(),
    to: data.email,
    subject: '歡迎加入武道台灣 — 創刊號即將送達',
    html: welcomeEmailHtml(data.name ?? '', unsubscribeUrl),
  })

  return NextResponse.redirect(new URL('/?sub=confirmed', getBaseUrl()))
}
