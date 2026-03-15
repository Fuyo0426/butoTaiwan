import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '搜尋',
}

export default function SearchPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div className="max-w-2xl">
        <h1 className="font-serif text-4xl font-black text-kendo-black tracking-tight mb-8">搜尋</h1>
        <div className="relative">
          <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-kendo-black/40" />
          <input
            type="search"
            placeholder="搜尋文章、人物、道場..."
            className="w-full pl-12 pr-4 py-4 border border-border bg-transparent font-sans text-base focus:outline-none focus:border-kendo-red transition-colors"
          />
        </div>
        <p className="font-sans text-sm text-kendo-black/40 mt-4">輸入關鍵字搜尋週報文章、月刊內容、道場資訊、人物誌</p>
      </div>
    </div>
  )
}
