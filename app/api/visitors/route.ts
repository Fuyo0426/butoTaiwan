import { NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/supabase'

const PAGE_ID = 'buto-taiwan'

export async function GET() {
  try {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('visitors')
      .select('count')
      .eq('id', PAGE_ID)
      .single()
    if (error) throw error
    return NextResponse.json({ count: data.count })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}

export async function POST() {
  try {
    const supabase = getSupabaseClient()
    // Read current count
    const { data: current } = await supabase
      .from('visitors')
      .select('count')
      .eq('id', PAGE_ID)
      .single()
    const newCount = (current?.count ?? 0) + 1
    // Write incremented count
    await supabase
      .from('visitors')
      .update({ count: newCount })
      .eq('id', PAGE_ID)
    return NextResponse.json({ count: newCount })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
