import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/supabase'
import { getBaseUrl } from '@/lib/email'

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (!token) return NextResponse.redirect(new URL('/?unsub=invalid', getBaseUrl()))

  const supabase = getSupabaseClient()
  await supabase
    .from('subscribers')
    .update({ confirmed: false, unsubscribed_at: new Date().toISOString() })
    .eq('token', token)

  return NextResponse.redirect(new URL('/?unsub=done', getBaseUrl()))
}
