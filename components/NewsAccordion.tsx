'use client'

import { useState } from 'react'
import { ArrowSquareOut, CaretDown } from '@phosphor-icons/react'
import type { KendoNewsItem } from '@/lib/weekly-reports'

export function NewsAccordion({ news }: { news: KendoNewsItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-border">
      {news.map((item, i) => (
        <div key={i}>
          {/* 預設顯示：標題 + 洞察 */}
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left py-5 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="font-serif text-base font-semibold text-kendo-black group-hover:text-kendo-red transition-colors leading-snug mb-2">
                  {item.title}
                </h2>
                <div className="inline-flex items-start gap-2">
                  <span className="font-sans text-[10px] text-kendo-red tracking-[0.15em] uppercase flex-shrink-0 mt-0.5">洞察</span>
                  <p className="font-sans text-xs text-kendo-black/70 leading-relaxed">{item.insight}</p>
                </div>
              </div>
              <CaretDown
                size={14}
                className={`flex-shrink-0 mt-1 text-kendo-black/30 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              />
            </div>
            <div className="flex items-center gap-2 font-sans text-[11px] text-kendo-black/30 mt-2">
              <span>{item.source}</span>
              <span>·</span>
              <span>{item.date}</span>
            </div>
          </button>

          {/* 展開後：完整摘要 + 原文連結 */}
          {open === i && (
            <div className="pb-5 pl-0">
              <p className="font-sans text-sm text-kendo-black/65 leading-[1.9] mb-3">
                {item.summary}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-xs text-kendo-black/40 hover:text-kendo-red transition-colors"
              >
                閱讀原文
                <ArrowSquareOut size={12} />
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
