import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { NewsAccordion } from '@/components/NewsAccordion'
import { weeklyReports } from '@/lib/weekly-reports'
import type { WeeklyReport } from '@/lib/weekly-reports'

const BASE_URL = 'https://buto-taiwan.vercel.app'

const categoryLabel: Record<WeeklyReport['category'], string> = {
  technique: '技法研究',
  culture: '劍道文化',
  competition: '賽事報導',
  global: '國際動態',
  taiwan: '台灣劍道',
}

const categoryColor: Record<WeeklyReport['category'], string> = {
  technique: 'bg-kendo-red text-white',
  culture: 'bg-kendo-blue text-white',
  competition: 'bg-kendo-black text-white',
  global: 'bg-stone-600 text-white',
  taiwan: 'bg-amber-800 text-white',
}

interface Props {
  params: { slug: string }
}

async function getReport(slug: string): Promise<WeeklyReport | null> {
  try {
    const data = await import(`@/lib/weekly-reports/${slug}.json`)
    return data.default as WeeklyReport
  } catch {
    return null
  }
}

export function generateStaticParams() {
  return weeklyReports.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const report = await getReport(params.slug)
  if (!report) return { title: '找不到週報' }

  const url = `${BASE_URL}/weekly/${params.slug}`
  return {
    title: report.title,
    description: report.subtitle,
    keywords: report.tags,
    openGraph: {
      title: report.title,
      description: report.subtitle,
      type: 'article',
      publishedTime: `${report.date}T00:00:00+08:00`,
      url,
      siteName: '武道台灣 ButoTaiwan',
      locale: 'zh_TW',
    },
    alternates: { canonical: url },
  }
}

export default async function WeeklyReportPage({ params }: Props) {
  const report = await getReport(params.slug)
  if (!report) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: report.title,
    description: report.subtitle,
    datePublished: `${report.date}T00:00:00+08:00`,
    author: { '@type': 'Organization', name: '武道台灣 ButoTaiwan', url: BASE_URL },
    publisher: { '@type': 'Organization', name: '武道台灣 ButoTaiwan', url: BASE_URL },
    url: `${BASE_URL}/weekly/${params.slug}`,
    keywords: report.tags.join(', '),
    inLanguage: 'zh-TW',
  }

  const faqSchema = report.faq && report.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: report.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
        {/* Back */}
        <Link href="/weekly" className="inline-flex items-center gap-2 font-sans text-sm text-kendo-black/50 hover:text-kendo-red transition-colors mb-8">
          <ArrowLeft size={14} />
          返回週報
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
          {/* Main */}
          <main>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block px-2 py-0.5 text-[10px] font-sans font-medium rounded-sm ${categoryColor[report.category]}`}>
                  {categoryLabel[report.category]}
                </span>
                <span className="font-sans text-xs text-kendo-black/40">第 {report.issue_number} 期</span>
                <span className="font-sans text-xs text-kendo-black/40">{report.date}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-black text-kendo-black tracking-tight leading-snug mb-4">
                {report.title}
              </h1>
              <p className="font-serif text-xl text-kendo-black/60 italic leading-relaxed border-l-2 border-kendo-red pl-5">
                {report.subtitle}
              </p>
            </div>

            {/* Editorial note */}
            <div className="bg-kendo-black/5 border-l-2 border-kendo-red p-5 mb-10">
              <p className="font-sans text-xs text-kendo-black/50 tracking-[0.15em] uppercase mb-2">編輯的話</p>
              <p className="font-sans text-sm text-kendo-black/80 leading-relaxed">{report.editorial_note}</p>
            </div>

            {/* News items — accordion */}
            <NewsAccordion news={report.news} />

            {/* Takeaways */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="font-sans text-xs text-kendo-black/40 tracking-[0.15em] uppercase mb-4">本期重點</p>
              <ul className="space-y-3">
                {report.takeaways.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-serif text-kendo-red font-bold flex-shrink-0">→</span>
                    <span className="font-sans text-sm text-kendo-black/80 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ — Answer Capsule (first Q highlighted for AI visibility) */}
            {report.faq && report.faq.length > 0 && (
              <div className="mt-10 pt-8 border-t border-border">
                <p className="font-sans text-xs text-kendo-black/40 tracking-[0.15em] uppercase mb-6">常見問題</p>
                <div className="space-y-5">
                  {report.faq.map((item, i) => (
                    <div key={i} className={i === 0 ? 'bg-kendo-black/5 border border-border p-5' : ''}>
                      <p className="font-sans text-sm font-semibold text-kendo-black mb-2">{item.question}</p>
                      <p className="font-sans text-sm text-kendo-black/70 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="flex flex-wrap gap-2">
              {report.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 border border-border font-sans text-xs text-kendo-black/60">
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-kendo-black p-5">
              <p className="font-serif text-base font-bold text-white mb-2">訂閱武道台灣</p>
              <p className="font-sans text-xs text-white/60 mb-4 leading-relaxed">每週三次週報直送信箱，不漏接賽事與深度資訊。</p>
              <Link href="/subscribe" className="block w-full py-2.5 bg-kendo-red text-white font-sans text-sm text-center hover:bg-kendo-red/90 transition-colors">
                立即訂閱
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
