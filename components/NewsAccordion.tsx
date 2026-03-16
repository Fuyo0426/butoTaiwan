import type { KendoNewsItem } from '@/lib/weekly-reports'

export function NewsAccordion({ news }: { news: KendoNewsItem[] }) {
  return (
    <div className="font-sans text-sm text-kendo-black/75 leading-[2] space-y-4">
      {news.map((item, i) => (
        <p key={i}>
          {item.summary}{' '}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-kendo-black/30 hover:text-kendo-red transition-colors text-xs"
          >
            （{item.source}）
          </a>
        </p>
      ))}
    </div>
  )
}
