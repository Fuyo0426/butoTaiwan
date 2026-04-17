import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Warning, Heart, Sword, Handshake, Books, Target } from '@phosphor-icons/react/dist/ssr'
import { kendoTypes } from '@/lib/kendoti/data'
import type { TypeCode } from '@/lib/kendoti/types'
import { HexChart } from '@/components/kendoti/HexChart'
import { ShareButtons } from '@/components/kendoti/ShareButtons'
import { NicknameGreeting } from '@/components/kendoti/NicknameGreeting'

const BASE_URL = 'https://buto-taiwan.vercel.app'

type Props = { params: { type: string } }

export function generateStaticParams() {
  return Object.keys(kendoTypes).map((type) => ({ type }))
}

export function generateMetadata({ params }: Props): Metadata {
  const code = params.type.toUpperCase() as TypeCode
  const t = kendoTypes[code]
  if (!t) return { title: '找不到此劍道人格型' }
  const title = `${t.nickname} · ${t.name} — kendoTI ${t.code}`
  const description = t.slogan
  const url = `${BASE_URL}/kendoti/result/${t.code}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images: [{ url: `${url}/opengraph-image`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${url}/opengraph-image`],
    },
  }
}

export default function ResultPage({ params }: Props) {
  const code = params.type.toUpperCase() as TypeCode
  const t = kendoTypes[code]
  if (!t) notFound()

  const partner = kendoTypes[t.partner.code]
  const nemesis = kendoTypes[t.nemesis.code]
  const loveMatch = kendoTypes[t.loveMatch.code]
  const loveAvoid = kendoTypes[t.loveAvoid.code]

  const url = `${BASE_URL}/kendoti/result/${t.code}`

  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${t.nickname} · ${t.name}`,
    description: t.slogan,
    author: { '@type': 'Organization', name: '武道台灣 ButoTaiwan' },
    publisher: { '@type': 'Organization', name: '武道台灣 ButoTaiwan', url: BASE_URL },
    url,
    inLanguage: 'zh-TW',
    about: { '@type': 'Thing', name: `劍道人格 ${t.code}`, description: t.description },
    keywords: ['劍道', '劍道人格', 'kendoTI', t.nickname, t.name, ...['宮本武藏', '坂本龍馬'].filter((k) => t.historicalFigure.includes(k))],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }} />

      <div className="max-w-[960px] mx-auto px-4 md:px-8 py-10">
        <Link href="/kendoti" className="inline-flex items-center gap-2 font-sans text-xs text-kendo-black/50 hover:text-kendo-red transition-colors mb-6">
          <ArrowLeft size={12} />
          回 kendoTI 首頁
        </Link>

        {/* Hero */}
        <header className="text-center mb-12 pb-10 border-b border-border">
          <Suspense fallback={null}>
            <NicknameGreeting />
          </Suspense>
          <p className="font-sans text-xs text-kendo-black/50 tracking-[0.3em] mb-3">YOUR KENDO-TI</p>
          <div className="flex items-baseline justify-center gap-3 mb-3">
            <span className="font-serif text-sm text-kendo-black/40 tracking-[0.2em]">{t.code}</span>
            <span className="text-kendo-black/20">·</span>
            <span className="font-serif text-sm text-kendo-black/60 tracking-[0.3em]">{t.nickname}</span>
          </div>
          <div className="flex justify-center mb-5">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src={t.portrait}
                alt={`${t.nickname} · ${t.name}`}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                priority
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-kendo-red leading-tight mb-4">
            {t.name}
          </h1>
          <p className="font-serif text-lg md:text-xl text-kendo-black/80 italic max-w-2xl mx-auto leading-relaxed">
            {t.slogan}
          </p>
        </header>

        {/* Description */}
        <section className="mb-14">
          <p className="font-sans text-base md:text-lg text-kendo-black/80 leading-[1.95]">
            {t.description}
          </p>
        </section>

        {/* Hex chart */}
        <section className="mb-16 bg-paper border border-border p-6 md:p-10">
          <div className="flex items-center gap-2 mb-6">
            <Target size={18} className="text-kendo-red" />
            <h2 className="font-serif text-xl font-bold text-kendo-black">劍道六技能力圖</h2>
          </div>
          <HexChart stats={t.stats} size={360} />
        </section>

        {/* Strengths / Weaknesses */}
        <section className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="p-6 border border-kendo-red/20 bg-kendo-red/5">
            <p className="font-serif text-xs text-kendo-red tracking-[0.2em] mb-3">STRENGTHS · 優勢</p>
            <ul className="space-y-2">
              {t.strengths.map((s, i) => (
                <li key={i} className="font-sans text-sm text-kendo-black/85 leading-relaxed">
                  <span className="text-kendo-red mr-2">◆</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 border border-border bg-paper">
            <div className="flex items-center gap-2 mb-3">
              <Warning size={14} className="text-kendo-black/60" />
              <p className="font-serif text-xs text-kendo-black/60 tracking-[0.2em]">WEAKNESSES · 盲點</p>
            </div>
            <ul className="space-y-2">
              {t.weaknesses.map((s, i) => (
                <li key={i} className="font-sans text-sm text-kendo-black/75 leading-relaxed">
                  <span className="text-kendo-black/30 mr-2">◇</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Peer review */}
        <section className="mb-14 border-l-2 border-kendo-red pl-6">
          <p className="font-serif text-xs text-kendo-red tracking-[0.2em] mb-2">PEER REVIEW · 館友銳評</p>
          <p className="font-serif text-base md:text-lg text-kendo-black/80 italic leading-relaxed">
            {t.peerReview}
          </p>
        </section>

        {/* Prescription */}
        <section className="mb-14 bg-kendo-black text-white p-6 md:p-8">
          <p className="font-serif text-xs text-white/40 tracking-[0.2em] mb-3">PRESCRIPTION · 修行處方</p>
          <p className="font-sans text-base leading-relaxed">{t.prescription}</p>
        </section>

        {/* Nemesis / Partner */}
        <section className="grid md:grid-cols-2 gap-6 mb-14">
          <Link href={`/kendoti/result/${nemesis.code}`} className="group block p-6 border border-border hover:border-kendo-red bg-paper transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Sword size={16} className="text-kendo-red" />
              <p className="font-serif text-xs text-kendo-red tracking-[0.2em]">NEMESIS · 剋星型</p>
            </div>
            <p className="font-serif text-2xl font-bold text-kendo-black group-hover:text-kendo-red mb-1 transition-colors">
              {nemesis.nickname} · {nemesis.name}
            </p>
            <p className="font-sans text-xs text-kendo-black/40 tracking-wider mb-3">{nemesis.code}</p>
            <p className="font-sans text-sm text-kendo-black/70 leading-relaxed">{t.nemesis.reason}</p>
          </Link>

          <Link href={`/kendoti/result/${partner.code}`} className="group block p-6 border border-border hover:border-kendo-red bg-paper transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Handshake size={16} className="text-kendo-red" />
              <p className="font-serif text-xs text-kendo-red tracking-[0.2em]">PARTNER · 最佳搭檔</p>
            </div>
            <p className="font-serif text-2xl font-bold text-kendo-black group-hover:text-kendo-red mb-1 transition-colors">
              {partner.nickname} · {partner.name}
            </p>
            <p className="font-sans text-xs text-kendo-black/40 tracking-wider mb-3">{partner.code}</p>
            <p className="font-sans text-sm text-kendo-black/70 leading-relaxed">{t.partner.reason}</p>
          </Link>
        </section>

        {/* Hall of Fame */}
        <section className="mb-14 p-6 md:p-8 border border-border bg-paper">
          <div className="flex items-center gap-2 mb-5">
            <Books size={16} className="text-kendo-red" />
            <p className="font-serif text-xs text-kendo-red tracking-[0.2em]">HALL OF FAME · 名人對應</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <p className="font-sans text-[10px] text-kendo-black/40 tracking-wider mb-1">歷史人物</p>
              <p className="font-serif text-base font-semibold text-kendo-black leading-snug">{t.historicalFigure}</p>
            </div>
            <div>
              <p className="font-sans text-[10px] text-kendo-black/40 tracking-wider mb-1">漫畫角色</p>
              <p className="font-serif text-base font-semibold text-kendo-black leading-snug">{t.mangaCharacter}</p>
            </div>
            <div>
              <p className="font-sans text-[10px] text-kendo-black/40 tracking-wider mb-1">現代代表</p>
              <p className="font-serif text-base font-semibold text-kendo-black leading-snug">{t.modernExample}</p>
            </div>
          </div>
        </section>

        {/* Injuries */}
        <section className="mb-14">
          <p className="font-serif text-xs text-kendo-red tracking-[0.2em] mb-3">PROFESSIONAL INJURY · 職業病診斷</p>
          <div className="grid md:grid-cols-[1fr_1fr] gap-6">
            <div>
              <p className="font-sans text-xs text-kendo-black/50 mb-2">容易受傷部位</p>
              <ul className="space-y-1">
                {t.injuries.map((x, i) => (
                  <li key={i} className="font-sans text-sm text-kendo-black/80">· {x}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-xs text-kendo-black/50 mb-2">預防處方</p>
              <p className="font-sans text-sm text-kendo-black/80 leading-relaxed">{t.prevention}</p>
            </div>
          </div>
        </section>

        {/* Evolution */}
        <section className="mb-14">
          <p className="font-serif text-xs text-kendo-red tracking-[0.2em] mb-4">EVOLUTION · 段位演化路徑</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.evolution.map((e) => (
              <div key={e.stage} className="p-4 border border-border bg-paper">
                <p className="font-serif text-sm font-bold text-kendo-red mb-1">{e.stage}</p>
                <p className="font-sans text-sm text-kendo-black/80 leading-relaxed">{e.state}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Love */}
        <section className="mb-14 p-6 md:p-8 bg-kendo-red/5 border border-kendo-red/20">
          <div className="flex items-center gap-2 mb-5">
            <Heart size={16} className="text-kendo-red" weight="fill" />
            <p className="font-serif text-xs text-kendo-red tracking-[0.2em]">DOJO LOVE · 道場戀愛相性</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Link href={`/kendoti/result/${loveMatch.code}`} className="group">
              <p className="font-sans text-[10px] text-kendo-black/50 tracking-wider mb-1">最搭型</p>
              <p className="font-serif text-lg font-bold text-kendo-black group-hover:text-kendo-red transition-colors">
                {loveMatch.nickname} · {loveMatch.name}
              </p>
              <p className="font-sans text-sm text-kendo-black/70 mt-1 leading-relaxed">{t.loveMatch.reason}</p>
            </Link>
            <Link href={`/kendoti/result/${loveAvoid.code}`} className="group">
              <p className="font-sans text-[10px] text-kendo-black/50 tracking-wider mb-1">最雷型</p>
              <p className="font-serif text-lg font-bold text-kendo-black group-hover:text-kendo-red transition-colors">
                {loveAvoid.nickname} · {loveAvoid.name}
              </p>
              <p className="font-sans text-sm text-kendo-black/70 mt-1 leading-relaxed">{t.loveAvoid.reason}</p>
            </Link>
          </div>
          <p className="font-sans text-xs text-kendo-black/50 italic mt-5 pt-4 border-t border-kendo-red/15">
            彩蛋:{t.loveBonus}
          </p>
        </section>

        {/* Share */}
        <section className="mb-14 p-6 md:p-8 bg-kendo-black text-white">
          <p className="font-serif text-xs text-white/50 tracking-[0.2em] mb-3">SHARE · 分享文案</p>
          <pre className="font-sans text-sm text-white/90 leading-relaxed whitespace-pre-wrap mb-6">{t.shareText}{'\n#kendoTI #butoTaiwan'}</pre>
          <ShareButtons url={url} title={`${t.nickname} · ${t.name} — kendoTI`} shareText={`${t.shareText}\n#kendoTI #butoTaiwan`} />
        </section>

        {/* Footer nav */}
        <div className="flex flex-wrap justify-center gap-3 pt-6 border-t border-border">
          <Link href="/kendoti/quiz" className="px-5 py-2.5 bg-kendo-red text-white font-sans text-sm rounded-sm hover:bg-kendo-red/90 transition-colors">
            重新測驗
          </Link>
          <Link href="/kendoti/compat" className="px-5 py-2.5 border border-border font-sans text-sm text-kendo-black hover:border-kendo-red hover:text-kendo-red transition-colors">
            查看 16 型相性表
          </Link>
          <Link href="/kendoti/hall-of-fame" className="px-5 py-2.5 border border-border font-sans text-sm text-kendo-black hover:border-kendo-red hover:text-kendo-red transition-colors">
            名人劍道館
          </Link>
        </div>
      </div>
    </>
  )
}
