import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { kendoTypes } from '@/lib/kendoti/data'

export const metadata: Metadata = {
  title: '名人劍道館 · kendoTI',
  description: '宮本武藏、坂本龍馬、緋村劍心、竈門炭治郎等歷史與漫畫劍道人物各是哪一型?kendoTI 16 型全名人對應。',
  keywords: ['宮本武藏 MBTI', '坂本龍馬 劍道', '緋村劍心 人格', '劍道名人', 'kendoTI'],
  openGraph: { title: '名人劍道館 · kendoTI', description: '宮本武藏、坂本龍馬、緋村劍心…16 型劍道名人對應全收錄' },
}

export default function HallOfFamePage() {
  const types = Object.values(kendoTypes)
  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10">
      <Link href="/kendoti" className="inline-flex items-center gap-2 font-sans text-xs text-kendo-black/50 hover:text-kendo-red transition-colors mb-6">
        <ArrowLeft size={12} />
        回 kendoTI 首頁
      </Link>

      <header className="mb-12">
        <p className="font-sans text-xs text-kendo-red tracking-[0.3em] mb-2">HALL OF FAME</p>
        <h1 className="font-serif text-3xl md:text-5xl font-black text-kendo-black mb-4">名人劍道館</h1>
        <p className="font-sans text-sm md:text-base text-kendo-black/70 leading-relaxed max-w-2xl">
          從宮本武藏到緋村劍心,16 型劍道人格各有對應的歷史人物、漫畫角色與現代代表。點進任一型看完整分析。
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {types.map((t) => (
          <Link key={t.code} href={`/kendoti/result/${t.code}`} className="group block p-6 border border-border hover:border-kendo-red bg-paper transition-colors">
            <div className="flex items-center gap-4 mb-3 pb-3 border-b border-border group-hover:border-kendo-red/30 transition-colors">
              <div className="relative w-20 h-20 shrink-0 bg-kendo-red/5 rounded-sm overflow-hidden">
                <Image
                  src={t.portrait}
                  alt={`${t.nickname} · ${t.name}`}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-serif text-xl font-bold text-kendo-black group-hover:text-kendo-red transition-colors">
                  {t.nickname} · {t.name}
                </p>
                <p className="font-sans text-[10px] text-kendo-black/40 tracking-wider">{t.code}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <p className="text-kendo-black/40 mb-1">歷史</p>
                <p className="font-serif text-kendo-black/85 leading-snug">{t.historicalFigure.split('(')[0]}</p>
              </div>
              <div>
                <p className="text-kendo-black/40 mb-1">漫畫</p>
                <p className="font-serif text-kendo-black/85 leading-snug">{t.mangaCharacter}</p>
              </div>
              <div>
                <p className="text-kendo-black/40 mb-1">現代</p>
                <p className="font-serif text-kendo-black/85 leading-snug line-clamp-2">{t.modernExample}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/kendoti/quiz" className="inline-block px-6 py-3 bg-kendo-red text-white font-sans text-sm rounded-sm hover:bg-kendo-red/90 transition-colors">
          我想知道我是哪一型
        </Link>
      </div>
    </div>
  )
}
