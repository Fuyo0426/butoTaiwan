'use client'

import { ArrowSquareOut } from '@phosphor-icons/react'
import type { KendoNewsItem } from '@/lib/weekly-reports'

export function NewsAccordion({ news }: { news: KendoNewsItem[] }) {
  return (
    <div className="divide-y divide-border">
      {news.map((item, i) => (
        <div key={i} className="py-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h2 className="font-serif text-base font-semibold text-kendo-black leading-snug">
              {item.title}
            </h2>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-kendo-black/30 hover:text-kendo-red transition-colors mt-0.5"
            >
              <ArrowSquareOut size={14} />
            </a>
          </div>
          <div className="flex items-center gap-2 font-sans text-[11px] text-kendo-black/30 mb-3">
            <span>{item.source}</span>
            <span>·</span>
            <span>{item.date}</span>
          </div>
          <p className="font-sans text-sm text-kendo-black/70 leading-[1.9]">
            {item.summary}
          </p>
        </div>
      ))}
    </div>
  )
}
