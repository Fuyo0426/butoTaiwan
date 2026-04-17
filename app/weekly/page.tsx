import { articles, categoryLabels, categoryColors } from '@/lib/data'
import { ArticleCard } from '@/components/ArticleCard'
import { weeklyReports } from '@/lib/weekly-reports'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '週報',
  description: '武道台灣週報——每週精選全球劍道資訊',
}

const categoryColor: Record<string, string> = {
  technique: 'bg-kendo-red text-white',
  culture: 'bg-kendo-blue text-white',
  competition: 'bg-kendo-black text-white',
  global: 'bg-stone-600 text-white',
  taiwan: 'bg-amber-800 text-white',
}

const categoryLabel: Record<string, string> = {
  technique: '技法研究',
  culture: '劍道文化',
  competition: '賽事報導',
  global: '國際動態',
  taiwan: '台灣劍道',
}

export default function WeeklyPage() {
  const sortedReports = [...weeklyReports].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      {/* Header */}
      <div className="mb-10 pb-8 border-b border-border">
        <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-2">每週三次更新</p>
        <h1 className="font-serif text-5xl font-black text-kendo-black tracking-tight">週報</h1>
        <p className="font-sans text-base text-kendo-black/60 mt-3">全球劍道資訊策展，技法研究、賽事報導、文化深度。</p>
      </div>

      {/* Weekly reports — auto-generated briefs */}
      {sortedReports.length > 0 && (
        <section className="mb-14">
          <p className="font-sans text-xs text-kendo-black/40 tracking-[0.15em] uppercase mb-6">最新情報週報</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedReports.map((report) => (
              <Link key={report.slug} href={`/weekly/${report.slug}`} className="group border border-border hover:border-kendo-red transition-colors p-6 block">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-sans font-medium rounded-sm ${categoryColor[report.category]}`}>
                    {categoryLabel[report.category]}
                  </span>
                  <span className="font-sans text-xs text-kendo-black/30">第 {report.issue_number} 期</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-kendo-black group-hover:text-kendo-red transition-colors leading-snug mb-2">
                  {report.title}
                </h3>
                <p className="font-sans text-sm text-kendo-black/60 line-clamp-2 leading-relaxed mb-4">
                  {report.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs font-sans text-kendo-black/40">
                  <span>{report.date}</span>
                  <span>{report.newsCount} 則訊息</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button className="px-4 py-2 bg-kendo-black text-white font-sans text-sm">全部</button>
        {(['technique', 'culture', 'competition', 'interview', 'equipment'] as const).map((cat) => (
          <button key={cat} className="px-4 py-2 border border-border font-sans text-sm text-kendo-black/70 hover:border-kendo-red hover:text-kendo-red transition-colors">
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Asymmetric grid — hand-written articles */}
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
