import { articles, categoryLabels, categoryColors } from '@/lib/data'
import { ArticleCard } from '@/components/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '週報',
  description: '武道台灣週報——每週精選全球劍道資訊',
}

const categories = ['all', 'technique', 'culture', 'competition', 'interview', 'equipment'] as const

export default function WeeklyPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      {/* Header */}
      <div className="mb-10 pb-8 border-b border-border">
        <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-2">每週三次更新</p>
        <h1 className="font-serif text-5xl font-black text-kendo-black tracking-tight">週報</h1>
        <p className="font-sans text-base text-kendo-black/60 mt-3">全球劍道資訊策展，技法研究、賽事報導、文化深度。</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button className="px-4 py-2 bg-kendo-black text-white font-sans text-sm">全部</button>
        {(['technique', 'culture', 'competition', 'interview', 'equipment'] as const).map((cat) => (
          <button key={cat} className="px-4 py-2 border border-border font-sans text-sm text-kendo-black/70 hover:border-kendo-red hover:text-kendo-red transition-colors">
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-8">
        {articles.map((article, i) => (
          <div key={article.id} className={i === 0 ? 'lg:col-span-1 lg:row-span-2' : ''}>
            <ArticleCard article={article} variant="default" />
          </div>
        ))}
      </div>
    </div>
  )
}
