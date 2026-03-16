import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarBlank } from '@phosphor-icons/react/dist/ssr'
import { articles, issues, events } from '@/lib/data'
import { ArticleCard } from '@/components/ArticleCard'
import { MarqueeStrip } from '@/components/MarqueeStrip'

export default function HomePage() {
  const latestIssue = issues[0]
  const featuredArticle = articles[0]

  // 本月訪談：只在 published 狀態才抓
  const monthlyInterview = latestIssue.status === 'published'
    ? articles.find((a) => a.category === 'interview' && a.issueNumber === latestIssue.number)
    : undefined

  // 左欄主打文章：有訪談用訪談，否則用賽事或最新非訪談文章
  const featuredLeft = monthlyInterview
    ?? articles.find((a) => a.category === 'competition')
    ?? articles.find((a) => a.category !== 'interview')

  // 週報文章：排除左欄主打，右欄顯示
  const weeklyArticles = articles.filter(
    (a) => a.id !== featuredLeft?.id && a.category !== 'interview'
  )

  const upcomingEvents = events.slice(0, 3)

  return (
    <>
      {/* Hero — asymmetric 55/45 split */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-6 md:gap-10 min-h-[70dvh] md:min-h-[75dvh]">
          {/* Left */}
          <div className="flex flex-col justify-between">
            {/* Issue badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-kendo-black/30" />
              <span className="font-sans text-xs text-kendo-black/40 tracking-[0.2em] uppercase">
                創刊號 準備中
              </span>
            </div>

            <div>
              <p className="font-sans text-sm text-kendo-black/40 mb-3 tracking-wide uppercase">
                武道台灣 創刊號
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-black text-kendo-black tracking-tighter leading-[0.9] mb-4">
                {latestIssue.title}
              </h1>
              <p className="font-sans text-base text-kendo-black/60 leading-relaxed max-w-[55ch] mb-6">
                {latestIssue.subtitle}
              </p>
              {latestIssue.featurePersonName && (
                <div className="flex items-center gap-3 mb-8 text-sm font-sans text-kendo-black/50">
                  <span>人物：{latestIssue.featurePersonName}</span>
                  <span>·</span>
                  <span>{latestIssue.featurePersonTitle}</span>
                </div>
              )}
              <div className="flex items-center gap-4">
                <Link
                  href="/subscribe"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-kendo-red text-white font-sans text-sm font-medium hover:bg-kendo-red/90 active:scale-[0.98] transition-all"
                >
                  訂閱，搶先收到創刊號
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/issues"
                  className="font-sans text-sm text-kendo-black/50 hover:text-kendo-red transition-colors kendo-link"
                >
                  期刊頁面
                </Link>
              </div>
            </div>

            {/* 底部說明 */}
            <div className="mt-10 pt-6 border-t border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-kendo-black/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-kendo-black/30 font-bold text-lg">刊</span>
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-kendo-black/50">創刊號即將發行</p>
                  <p className="font-sans text-xs text-kendo-black/30 mt-1">訪談進行中，敬請期待</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 創刊號背景圖 */}
          <div className="relative rounded-sm overflow-hidden min-h-[300px] md:min-h-0">
            <Image
              src="https://live.staticflickr.com/7109/7818732432_43f13573ce_b.jpg"
              alt="創刊號"
              fill
              priority
              className="object-cover"
            />
            {/* 深色遮罩讓文字清晰 */}
            <div className="absolute inset-0 bg-kendo-black/65" />

            {/* 置中文字 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="w-12 h-[1px] bg-white/30" />
              <div className="text-center px-8">
                <p className="font-sans text-xs text-white/40 tracking-[0.3em] uppercase mb-3">Vol.{latestIssue.number}</p>
                <p className="font-serif text-5xl md:text-6xl font-black text-white tracking-tighter leading-none mb-3">
                  {latestIssue.title}
                </p>
                <p className="font-sans text-sm text-white/50 leading-relaxed max-w-[28ch] mx-auto">
                  {latestIssue.subtitle}
                </p>
              </div>
              <div className="w-12 h-[1px] bg-white/30" />
              <p className="font-sans text-xs text-white/30 tracking-[0.2em] uppercase">訪談進行中，敬請期待</p>
            </div>

            <div className="absolute top-4 right-4 bg-kendo-red px-3 py-1">
              <span className="font-serif text-white text-xs font-medium">月刊 No.{latestIssue.number}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeStrip />

      {/* 本週精選：左欄固定月刊訪談，右欄週報文章 */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-14">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-kendo-black tracking-tight">本週精選</h2>
            <p className="font-sans text-sm text-kendo-black/50 mt-1">每週四更新，全球劍道資訊策展</p>
          </div>
          <Link href="/weekly" className="font-sans text-sm text-kendo-red flex items-center gap-1 hover:gap-2 transition-all">
            全部文章 <ArrowRight size={14} />
          </Link>
        </div>

        {/* Asymmetric 60/40: 左欄月刊訪談（份量最重），右欄週報 */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-12">
          {/* Left: 主打文章（訪談已發布時顯示訪談，否則顯示賽事/最新文章） */}
          {featuredLeft && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-kendo-red" />
                <span className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase font-medium">
                  {monthlyInterview ? '創刊號人物訪談' : '本週焦點'}
                </span>
              </div>
              <ArticleCard article={featuredLeft} variant="default" />
            </div>
          )}

          {/* Right: 週報文章列表 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-kendo-black/20" />
              <span className="font-sans text-xs text-kendo-black/40 tracking-[0.2em] uppercase">本週週報</span>
            </div>
            <div className="divide-y divide-border">
              {weeklyArticles.slice(0, 4).map((a) => (
                <ArticleCard key={a.id} article={a} variant="horizontal" />
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <Link href="/weekly" className="font-sans text-sm text-kendo-black/50 hover:text-kendo-red flex items-center gap-1 transition-colors">
                查看本週所有文章 <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events strip */}
      <section className="bg-kendo-black py-14">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-baseline justify-between mb-8">
            <div className="flex items-center gap-3">
              <CalendarBlank size={20} className="text-kendo-red" />
              <h2 className="font-serif text-2xl font-bold text-white tracking-tight">近期賽事</h2>
            </div>
            <Link href="/calendar" className="font-sans text-sm text-white/60 flex items-center gap-1 hover:text-white transition-colors">
              完整日曆 <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-kendo-black p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-sans text-xs text-kendo-red uppercase tracking-wider">
                    {event.category === 'tournament' ? '錦標賽' :
                     event.category === 'grading' ? '段審' :
                     event.category === 'seminar' ? '講習會' : '訓練營'}
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold text-white mb-2 leading-snug">{event.name}</h3>
                <p className="font-sans text-sm text-white/50">{event.date}</p>
                <p className="font-sans text-sm text-white/50">{event.location}</p>
                <p className="font-sans text-xs text-white/30 mt-3">報名截止：{event.registrationDeadline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 items-center">
          <div>
            <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-3">每月月刊</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-kendo-black tracking-tight leading-[1.1] mb-4">
              訂閱武道台灣<br />每月直送你的信箱
            </h2>
            <p className="font-sans text-base text-kendo-black/60 leading-relaxed max-w-[50ch]">
              每月精選文章直送信箱。我們只寄真正值得讀的內容。
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm focus:outline-none focus:border-kendo-red transition-colors"
            />
            <button className="w-full px-4 py-3 bg-kendo-red text-white font-sans text-sm font-medium hover:bg-kendo-red/90 active:scale-[0.98] transition-all">
              立即訂閱
            </button>
            <p className="font-sans text-xs text-kendo-black/40 text-center">免費訂閱，隨時取消</p>
          </div>
        </div>
      </section>
    </>
  )
}
