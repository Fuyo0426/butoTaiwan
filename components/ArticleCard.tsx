import Link from 'next/link'
import Image from 'next/image'
import { Clock } from '@phosphor-icons/react/dist/ssr'
import { Article, categoryLabels, categoryColors } from '@/lib/data'
import { ImageCredit } from '@/components/ImageCredit'

type Props = {
  article: Article
  variant?: 'default' | 'horizontal' | 'featured'
}

export function ArticleCard({ article, variant = 'default' }: Props) {
  if (variant === 'horizontal') {
    return (
      <Link href={`/article/${article.slug}`} className="group flex gap-4 py-4 border-b border-border last:border-0">
        <div className="flex-1 min-w-0">
          <span className={`inline-block px-2 py-0.5 text-[10px] font-sans font-medium rounded-sm mb-2 ${categoryColors[article.category]}`}>
            {categoryLabels[article.category]}
          </span>
          <h3 className="font-serif text-base font-medium text-kendo-black group-hover:text-kendo-red transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>
          <p className="font-sans text-xs text-kendo-black/50 mt-2 flex items-center gap-2">
            <span>{article.author}</span>
            <span>&middot;</span>
            <Clock size={12} />
            <span>{article.readTime} 分鐘</span>
          </p>
        </div>
        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link href={`/article/${article.slug}`} className="group block relative overflow-hidden rounded-sm aspect-[4/5] md:aspect-auto md:h-full">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-103 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kendo-black/90 via-kendo-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className={`inline-block px-2 py-0.5 text-[10px] font-sans font-medium rounded-sm mb-3 ${categoryColors[article.category]}`}>
            {categoryLabels[article.category]}
          </span>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-kendo-red/80 transition-colors">
            {article.title}
          </h2>
          <p className="font-sans text-xs text-white/60 mt-2">{article.author}</p>
        </div>
      </Link>
    )
  }

  // default card
  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-sm aspect-[16/10] mb-3">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <span className={`inline-block px-2 py-0.5 text-[10px] font-sans font-medium rounded-sm mb-2 ${categoryColors[article.category]}`}>
        {categoryLabels[article.category]}
      </span>
      <h3 className="font-serif text-lg font-medium text-kendo-black group-hover:text-kendo-red transition-colors leading-snug">
        {article.title}
      </h3>
      <p className="font-sans text-sm text-kendo-black/60 mt-2 line-clamp-2 leading-relaxed">
        {article.excerpt}
      </p>
      <p className="font-sans text-xs text-kendo-black/40 mt-3 flex items-center gap-2">
        <span>{article.author}</span>
        <span>&middot;</span>
        <span>{article.publishedAt}</span>
        <span>&middot;</span>
        <Clock size={12} />
        <span>{article.readTime} 分鐘</span>
      </p>
    </Link>
  )
}
