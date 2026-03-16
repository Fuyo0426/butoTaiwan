import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '聯絡編輯部',
}

export default function ContactPage() {
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
          <div className="space-y-4">
            <div>
              <label className="block font-sans text-xs text-kendo-black/50 mb-2 uppercase tracking-wider">姓名</label>
              <input type="text" className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm focus:outline-none focus:border-kendo-red transition-colors" />
            </div>
            <div>
              <label className="block font-sans text-xs text-kendo-black/50 mb-2 uppercase tracking-wider">電子信箱</label>
              <input type="email" className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm focus:outline-none focus:border-kendo-red transition-colors" />
            </div>
            <div>
              <label className="block font-sans text-xs text-kendo-black/50 mb-2 uppercase tracking-wider">主旨</label>
              <input type="text" className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm focus:outline-none focus:border-kendo-red transition-colors" />
            </div>
            <div>
              <label className="block font-sans text-xs text-kendo-black/50 mb-2 uppercase tracking-wider">內容</label>
              <textarea rows={6} className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm focus:outline-none focus:border-kendo-red transition-colors resize-none" />
            </div>
            <button className="w-full py-3 bg-kendo-red text-white font-sans text-sm font-medium hover:bg-kendo-red/90 active:scale-[0.98] transition-all">
              送出訊息
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
