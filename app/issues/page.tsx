import Image from 'next/image'
import Link from 'next/link'
import { issues, articles } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '月刊',
  description: '武道台灣月刊——每月深度訪談台灣劍道前輩',
}

export default function IssuesPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div className="mb-10 pb-8 border-b border-border">
        <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-2">每月一刊</p>
        <h1 className="font-serif text-5xl font-black text-kendo-black tracking-tight">月刊</h1>
        <p className="font-sans text-base text-kendo-black/60 mt-3">深度訪談台灣各地劍道前輩，分享道場文化與人生哲學。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {issues.map((issue) => {
          if (issue.status === 'upcoming') {
            return (
              <article key={issue.id} className="group">
                {/* 封面：灰底預告 */}
                <div className="relative aspect-[2/3] overflow-hidden rounded-sm mb-5 bg-border/60 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-[1px] bg-kendo-black/20" />
                  <p className="font-serif text-4xl font-black text-kendo-black/15">創刊號</p>
                  <div className="w-12 h-[1px] bg-kendo-black/20" />
                  <div className="absolute top-4 left-4 bg-kendo-black/30 px-3 py-1">
                    <span className="font-sans text-white text-xs font-medium">No.{issue.number}</span>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="font-sans text-xs text-kendo-black/40 tracking-[0.15em] uppercase">即將發行</span>
                  </div>
                </div>
                <p className="font-sans text-xs text-kendo-black/30 mb-2 uppercase tracking-wider">準備中</p>
                <h2 className="font-serif text-2xl font-bold text-kendo-black/40 tracking-tight">
                  {issue.title}
                </h2>
                <p className="font-sans text-sm text-kendo-black/40 mt-2 leading-relaxed">{issue.subtitle}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-sans text-xs text-kendo-black/30">
                    本期人物：{issue.featurePersonName}·{issue.featurePersonTitle}
                  </p>
                </div>
              </article>
            )
          }

          return (
            <article key={issue.id} className="group">
              <Link href={`/issues/${issue.number}`} className="block">
                <div className="relative aspect-[2/3] overflow-hidden rounded-sm mb-5">
                  <Image
                    src={issue.coverImage}
                    alt={issue.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-kendo-red px-3 py-1">
                    <span className="font-sans text-white text-xs font-medium">No.{issue.number}</span>
                  </div>
                </div>
                <p className="font-sans text-xs text-kendo-black/40 mb-2">{issue.publishedAt}</p>
                <h2 className="font-serif text-2xl font-bold text-kendo-black group-hover:text-kendo-red transition-colors tracking-tight">
                  {issue.title}
                </h2>
                <p className="font-sans text-sm text-kendo-black/60 mt-2 leading-relaxed">{issue.subtitle}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-sans text-xs text-kendo-black/40">本期特輯：{issue.featurePersonName}&middot;{issue.featurePersonTitle}</p>
                </div>
              </Link>
            </article>
          )
        })}

        {/* 未來期數佔位 */}
        {[2, 3].map((n) => (
          <div key={n}>
            <div className="relative aspect-[2/3] overflow-hidden rounded-sm mb-5 bg-border/40 flex items-center justify-center">
              <p className="font-serif text-2xl text-kendo-black/15">No.{n}</p>
            </div>
            <p className="font-sans text-xs text-kendo-black/25 mb-2 uppercase tracking-wider">即將發行</p>
            <h2 className="font-serif text-2xl font-bold text-kendo-black/25 tracking-tight">第 {n} 期</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
