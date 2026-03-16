'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()

    if (data.success) {
      setStatus('done')
      setForm({ name: '', email: '', subject: '', message: '' })
    } else {
      setStatus('error')
      setErrorMsg(data.error ?? '發生錯誤，請稍後再試')
    }
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 items-start">
        <div>
          <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-3">聯絡我們</p>
          <h1 className="font-serif text-5xl font-black text-kendo-black tracking-tight mb-6">編輯部信箱</h1>
          <p className="font-sans text-base text-kendo-black/60 leading-relaxed mb-8 max-w-[45ch]">
            無論是投稿、道場收錄申請、廣告合作或任何問題，都歡迎來信。
          </p>
          <div className="border-t border-border pt-6">
            <p className="font-sans text-xs text-kendo-black/40 uppercase tracking-wider mb-2">信箱</p>
            <a href="mailto:butotaiwan@outlook.com" className="font-sans text-sm text-kendo-red hover:underline">
              butotaiwan@outlook.com
            </a>
            <p className="font-sans text-xs text-kendo-black/40 mt-2 leading-relaxed">
              投稿、道場收錄、廣告合作均來此信箱，請在主旨註明類別。
            </p>
          </div>
        </div>

        <div>
          {status === 'done' ? (
            <div className="border border-border p-8 text-center">
              <p className="font-serif text-2xl font-bold text-kendo-black mb-2">訊息已送出。</p>
              <p className="font-sans text-sm text-kendo-black/60 mb-6">編輯部收到後會盡快回覆。</p>
              <button
                onClick={() => setStatus('idle')}
                className="font-sans text-sm text-kendo-red hover:underline"
              >
                再送一則
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-xs text-kendo-black/50 mb-2 uppercase tracking-wider">姓名</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm focus:outline-none focus:border-kendo-red transition-colors"
                />
              </div>
              <div>
                <label className="block font-sans text-xs text-kendo-black/50 mb-2 uppercase tracking-wider">電子信箱</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm focus:outline-none focus:border-kendo-red transition-colors"
                />
              </div>
              <div>
                <label className="block font-sans text-xs text-kendo-black/50 mb-2 uppercase tracking-wider">主旨</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm focus:outline-none focus:border-kendo-red transition-colors"
                />
              </div>
              <div>
                <label className="block font-sans text-xs text-kendo-black/50 mb-2 uppercase tracking-wider">內容</label>
                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm focus:outline-none focus:border-kendo-red transition-colors resize-none"
                />
              </div>
              {status === 'error' && (
                <p className="font-sans text-xs text-red-600">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-kendo-red text-white font-sans text-sm font-medium hover:bg-kendo-red/90 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {status === 'sending' ? '送出中⋯' : '送出訊息'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
