import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Lightning, Users, Shield } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'kendoTI 劍道人格測驗',
  description: '你是哪一型劍士?45 題找出你的劍道 MBTI,從攻/受、術/氣、理/情、守/變四軸判讀你的道場人格,配 16 型專屬分析、剋星搭檔、名人對應、六邊形能力圖。',
  openGraph: {
    title: 'kendoTI 劍道人格測驗 | 武道台灣',
    description: '45 題找出你的劍道 MBTI,16 型專屬分析,讓道場同伴截圖轉發的身份徽章',
    url: 'https://buto-taiwan.vercel.app/kendoti',
  },
}

export default function KendoTIIntroPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-8 py-14">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="inline-block px-2 py-0.5 mb-5 text-[10px] font-sans font-medium text-kendo-red bg-kendo-red/10 rounded-sm tracking-[0.2em]">
          kendoTI · 劍道人格測驗
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-black text-kendo-black leading-tight mb-5">
          你是
          <span className="text-kendo-red"> 哪一型 </span>
          劍士?
        </h1>
        <p className="font-sans text-base md:text-lg text-kendo-black/70 leading-relaxed max-w-xl mx-auto">
          45 題從你的攻守節奏、理合直覺、心境應變,對應 16 型劍道人格。
          <br className="hidden md:inline" />
          做完截圖,標記你道場的那個他。
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center mb-16">
        <Link
          href="/kendoti/quiz"
          className="inline-flex items-center gap-3 px-8 py-4 bg-kendo-red text-white font-serif text-lg font-semibold rounded-sm hover:bg-kendo-red/90 active:scale-[0.98] transition-all"
        >
          開始測驗
          <ArrowRight size={20} weight="bold" />
        </Link>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Lightning, label: '45 題 · 約 5 分鐘', desc: '四軸判讀:攻/受、術/氣、理/情、守/變' },
          { icon: Users, label: '16 型專屬分析', desc: '性格、剋星、搭檔、戀愛相性全包' },
          { icon: Shield, label: '六邊形能力圖', desc: '面、小手、胴、氣合、間合、殘心六技雷達' },
        ].map((f, i) => (
          <div key={i} className="p-6 border border-border bg-paper">
            <f.icon size={24} className="text-kendo-red mb-3" weight="regular" />
            <p className="font-serif text-base font-bold text-kendo-black mb-2">{f.label}</p>
            <p className="font-sans text-sm text-kendo-black/60 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Four Axes */}
      <div className="bg-kendo-black text-white p-6 md:p-10 mb-16">
        <p className="font-serif text-xs text-white/50 tracking-[0.2em] mb-4">— 四軸系統 —</p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">kendoTI 的四個維度</h2>
        <div className="grid sm:grid-cols-2 gap-5 text-sm">
          {[
            { left: '攻 A', right: '受 U', note: '主動仕掛先手 vs 等破綻出頭小手' },
            { left: '術 J', right: '氣 K', note: '姿勢節奏理合派 vs 間合殺氣直覺派' },
            { left: '理 R', right: '情 S', note: '冷靜分析弱點 vs 氣魄熱血壓場' },
            { left: '守 G', right: '變 H', note: '基本功至上 vs 比賽隨機應變' },
          ].map((a, i) => (
            <div key={i} className="border-l-2 border-kendo-red pl-4">
              <p className="font-serif text-xl font-bold mb-1">
                {a.left} <span className="text-white/40">/</span> {a.right}
              </p>
              <p className="font-sans text-xs text-white/60">{a.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore before quiz */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <Link
          href="/kendoti/hall-of-fame"
          className="group p-6 border border-border hover:border-kendo-red bg-paper transition-colors"
        >
          <p className="font-serif text-base font-bold text-kendo-black group-hover:text-kendo-red mb-1 transition-colors">
            名人劍道館 →
          </p>
          <p className="font-sans text-sm text-kendo-black/60">
            宮本武藏、坂本龍馬、緋村劍心,他們各是哪一型?
          </p>
        </Link>
        <Link
          href="/kendoti/compat"
          className="group p-6 border border-border hover:border-kendo-red bg-paper transition-colors"
        >
          <p className="font-serif text-base font-bold text-kendo-black group-hover:text-kendo-red mb-1 transition-colors">
            相性查詢表 →
          </p>
          <p className="font-sans text-sm text-kendo-black/60">
            16 型剋星 / 搭檔 / 戀愛相性完整對照
          </p>
        </Link>
      </div>

      {/* Final CTA */}
      <div className="text-center">
        <Link
          href="/kendoti/quiz"
          className="inline-flex items-center gap-2 text-kendo-red font-sans text-sm hover:gap-3 transition-all"
        >
          準備好了,開始 45 題
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
