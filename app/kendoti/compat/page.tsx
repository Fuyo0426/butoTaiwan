import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { kendoTypes } from '@/lib/kendoti/data'
import { buildCompatMatrix } from '@/lib/kendoti/compatibility'
import type { TypeCode } from '@/lib/kendoti/types'

export const metadata: Metadata = {
  title: 'kendoTI 相性查詢表',
  description: '16 型劍道人格的剋星、最佳搭檔、戀愛相性完整對照',
  openGraph: { title: 'kendoTI 相性查詢表 | 武道台灣', description: '16 型劍道人格剋星 / 搭檔 / 戀愛相性完整對照' },
}

function TypeLink({ code }: { code: TypeCode }) {
  const t = kendoTypes[code]
  return (
    <Link href={`/kendoti/result/${code}`} className="inline-flex flex-col hover:text-kendo-red transition-colors group">
      <span className="font-serif text-sm font-semibold">{t.nickname}</span>
      <span className="font-sans text-[10px] text-kendo-black/40 group-hover:text-kendo-red/60">{t.name}</span>
    </Link>
  )
}

export default function CompatPage() {
  const rows = buildCompatMatrix()
  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10">
      <Link href="/kendoti" className="inline-flex items-center gap-2 font-sans text-xs text-kendo-black/50 hover:text-kendo-red transition-colors mb-6">
        <ArrowLeft size={12} />
        回 kendoTI 首頁
      </Link>

      <header className="mb-10">
        <p className="font-sans text-xs text-kendo-red tracking-[0.3em] mb-2">COMPATIBILITY</p>
        <h1 className="font-serif text-3xl md:text-5xl font-black text-kendo-black mb-3">16 型相性查詢表</h1>
        <p className="font-sans text-sm text-kendo-black/60">
          點任一型進入完整頁面。表內的剋星/搭檔/戀愛相性由四軸對比與性格衝突矩陣推導。
        </p>
      </header>

      <div className="overflow-x-auto -mx-4 md:-mx-8 px-4 md:px-8">
        <table className="w-full min-w-[760px] text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-kendo-black">
              <th className="font-serif text-xs text-kendo-black/60 tracking-wider py-3 pr-4">自型</th>
              <th className="font-serif text-xs text-kendo-red tracking-wider py-3 pr-4">剋星</th>
              <th className="font-serif text-xs text-kendo-red tracking-wider py-3 pr-4">搭檔</th>
              <th className="font-serif text-xs text-kendo-red tracking-wider py-3 pr-4">戀愛最搭</th>
              <th className="font-serif text-xs text-kendo-black/60 tracking-wider py-3">戀愛最雷</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.self} className="border-b border-border hover:bg-kendo-red/5 transition-colors">
                <td className="py-4 pr-4">
                  <Link href={`/kendoti/result/${r.self}`} className="group">
                    <p className="font-serif text-base font-bold text-kendo-black group-hover:text-kendo-red transition-colors">
                      {kendoTypes[r.self].nickname}
                    </p>
                    <p className="font-sans text-[10px] text-kendo-black/40 tracking-wider">{r.self}</p>
                  </Link>
                </td>
                <td className="py-4 pr-4"><TypeLink code={r.nemesis} /></td>
                <td className="py-4 pr-4"><TypeLink code={r.partner} /></td>
                <td className="py-4 pr-4"><TypeLink code={r.loveMatch} /></td>
                <td className="py-4"><TypeLink code={r.loveAvoid} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 text-center">
        <Link href="/kendoti/quiz" className="inline-block px-6 py-3 bg-kendo-red text-white font-sans text-sm rounded-sm hover:bg-kendo-red/90 transition-colors">
          開始測驗看看你是哪一型
        </Link>
      </div>
    </div>
  )
}
