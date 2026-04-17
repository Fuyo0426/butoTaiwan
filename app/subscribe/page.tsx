'use client'

import { useState, useEffect } from 'react'

export default function SubscribePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [visitorCount, setVisitorCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/visitors', { method: 'POST' })
      .then((r) => r.json())
      .then((d) => setVisitorCount(d.count))
      .catch(() => {})
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '訂閱失敗')
      setStatus('success')
    } catch (err: any) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 items-start">
        {/* Left: benefits */}
        <div>
          <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-3">訂閱</p>
          <h1 className="font-serif text-5xl font-black text-kendo-black tracking-tight mb-6">
            每月月刊<br />直送信箱
          </h1>
          <p className="font-sans text-base text-kendo-black/60 leading-relaxed mb-8 max-w-[50ch]">
            訂閱武道台灣月刊，每月第一週收到完整電子刊，包含深度訪談、技法專題與全台賽事整理。
          </p>
          <div className="space-y-4">
            {[
              '每月深度訪談，探訪台灣劍道前輩',
              '全台賽事日曆，不漏接任何重要比賽',
              '技法深度專題，每期鎖定一個主題拆解',
              '免費訂閱，隨時取消',
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <div className="w-4 h-4 mt-0.5 flex-shrink-0 border border-kendo-red flex items-center justify-center">
                  <div className="w-2 h-2 bg-kendo-red" />
                </div>
                <p className="font-sans text-sm text-kendo-black/70">{benefit}</p>
              </div>
            ))}
          </div>

          {visitorCount !== null && (
            <div className="mt-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-kendo-red/60 rounded-full" />
              <p className="font-sans text-xs text-kendo-black/40 tracking-wider">
                已有 <span className="text-kendo-black/60">{visitorCount.toLocaleString()}</span> 位劍友造訪
              </p>
            </div>
          )}
        </div>

        {/* Right: form */}
        <div className="bg-kendo-black p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 border border-kendo-red mx-auto flex items-center justify-center mb-6">
                <div className="w-2 h-2 bg-kendo-red rounded-full" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white mb-3">訂閱成功</h2>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                確認信已寄到 <span className="text-white">{email}</span>。<br />
                創刊號發行時，我們會第一時間通知你。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white mb-6">立即訂閱</h2>
              <div>
                <label className="block font-sans text-xs text-white/60 mb-2 uppercase tracking-wider">姓名</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="你的名字"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-kendo-red transition-colors"
                />
              </div>
              <div>
                <label className="block font-sans text-xs text-white/60 mb-2 uppercase tracking-wider">電子信箱 *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-kendo-red transition-colors"
                />
              </div>

              {status === 'error' && (
                <p className="font-sans text-xs text-red-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-kendo-red text-white font-sans font-medium hover:bg-kendo-red/90 active:scale-[0.98] transition-all mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? '寄送中...' : '確認訂閱'}
              </button>
              <p className="font-sans text-xs text-white/30 text-center">免費訂閱，隨時取消。我們尊重你的信箱。</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
