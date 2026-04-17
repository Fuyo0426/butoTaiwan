import { articles, categoryLabels, categoryColors } from '@/lib/data'

const BASE_URL = 'https://buto-taiwan.vercel.app'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, ArrowLeft, Tag, BookOpen } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return { title: '找不到文章' }
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage,
    datePublished: `${article.publishedAt}T00:00:00+08:00`,
    dateModified: `${article.publishedAt}T00:00:00+08:00`,
    author: { '@type': 'Person', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: '武道台灣 ButoTaiwan',
      url: BASE_URL,
    },
    url: `${BASE_URL}/article/${article.slug}`,
    keywords: article.tags.join(', '),
    articleSection: categoryLabels[article.category],
    inLanguage: 'zh-TW',
    timeRequired: `PT${article.readTime}M`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
      {/* Back */}
      <Link href="/weekly" className="inline-flex items-center gap-2 font-sans text-sm text-kendo-black/50 hover:text-kendo-red transition-colors mb-8">
        <ArrowLeft size={14} />
        返回週報
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
        {/* Main */}
        <article>
          {/* Category + meta */}
          <div className="mb-5">
            <span className={`inline-block px-2 py-0.5 text-[10px] font-sans font-medium rounded-sm mb-4 ${categoryColors[article.category]}`}>
              {categoryLabels[article.category]}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-black text-kendo-black tracking-tight leading-snug mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-kendo-black/50">
              <span>{article.author}</span>
              <span>·</span>
              <span>{article.publishedAt}</span>
              <span>·</span>
              <Clock size={12} />
              <span>閱讀約 {article.readTime} 分鐘</span>
            </div>
          </div>

          {/* Cover image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-3">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Image credit */}
          <p className="font-sans text-[11px] text-kendo-black/35 mb-8 text-right">
            {article.imageCredit ? (
              <>
                圖片來源：
                <a
                  href={article.imageCredit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-kendo-red transition-colors underline underline-offset-2"
                >
                  © {article.imageCredit.name}
                </a>
                {' '}·{' '}{article.imageCredit.license}
              </>
            ) : (
              '圖片來源：編輯部自製或版權待確認'
            )}
          </p>

          {/* Article body */}
          <div className="border-t border-border pt-8">
            <p className="font-serif text-xl text-kendo-black/70 italic mb-8 leading-relaxed border-l-2 border-kendo-red pl-5">
              {article.excerpt}
            </p>
            {article.content && article.content.length > 0 ? (
              <div className="space-y-6">
                {article.content.map((para, i) => (
                  <p key={i} className="font-sans text-base text-kendo-black/80 leading-[1.9]">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <div className="font-sans text-base text-kendo-black/40 leading-relaxed border border-dashed border-border p-6">
                <p>— 文章內容待編輯部填入 —</p>
              </div>
            )}
          </div>

          {/* References */}
          {article.references && article.references.length > 0 && (
            <div className="mt-10 pt-6 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={14} className="text-kendo-black/40" />
                <span className="font-sans text-xs text-kendo-black/40 tracking-[0.15em] uppercase">參考資料</span>
              </div>
              <ol className="space-y-2">
                {article.references.map((ref, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-sans text-xs text-kendo-black/30 flex-shrink-0 mt-0.5 w-4">{i + 1}.</span>
                    {ref.url ? (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs text-kendo-black/55 hover:text-kendo-red transition-colors leading-relaxed underline underline-offset-2 decoration-kendo-black/20"
                      >
                        {ref.label}
                      </a>
                    ) : (
                      <span className="font-sans text-xs text-kendo-black/55 leading-relaxed">{ref.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-border">
              <Tag size={14} className="text-kendo-black/30" />
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${tag}`}
                  className="px-3 py-1 border border-border font-sans text-xs text-kendo-black/60 hover:border-kendo-red hover:text-kendo-red transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* More articles */}
          <div>
            <p className="font-serif text-sm font-semibold text-kendo-black mb-4 pb-2 border-b border-border">更多文章</p>
            <div className="space-y-4">
              {articles
                .filter((a) => a.id !== article.id)
                .slice(0, 4)
                .map((a) => (
                  <Link key={a.id} href={`/article/${a.slug}`} className="group flex gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-sm">
                      <Image src={a.coverImage} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block px-1.5 py-0.5 text-[9px] font-sans font-medium rounded-sm mb-1 ${categoryColors[a.category]}`}>
                        {categoryLabels[a.category]}
                      </span>
                      <p className="font-serif text-sm font-medium text-kendo-black group-hover:text-kendo-red transition-colors leading-snug line-clamp-2">
                        {a.title}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Subscribe block */}
          <div className="bg-kendo-black p-5">
            <p className="font-serif text-base font-bold text-white mb-2">訂閱武道台灣</p>
            <p className="font-sans text-xs text-white/60 mb-4 leading-relaxed">每月月刊直送信箱，不漏接重要賽事與深度訪談。</p>
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
