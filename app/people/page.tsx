import Image from 'next/image'
import Link from 'next/link'
import { people } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '人物誌',
  description: '台灣劍道前輩人物資料庫',
}

export default function PeoplePage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div className="mb-10 pb-8 border-b border-border">
        <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-2">人物誌</p>
        <h1 className="font-serif text-5xl font-black text-kendo-black tracking-tight">台灣劍道前輩</h1>
        <p className="font-sans text-base text-kendo-black/60 mt-3">記錄台灣劍道人的生命故事與技術傳承。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {people.map((person) => (
          <Link key={person.id} href={`/people/${person.slug}`} className="group">
            <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
              <Image
                src={person.photo}
                alt={person.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-kendo-black/70 to-transparent">
                <p className="font-sans text-xs text-white/70">{person.rank}</p>
              </div>
            </div>
            <h3 className="font-serif text-xl font-bold text-kendo-black group-hover:text-kendo-red transition-colors">
              {person.name}
            </h3>
            <p className="font-sans text-sm text-kendo-black/60 mt-1">{person.title}</p>
            <p className="font-sans text-sm text-kendo-black/40 mt-1">{person.dojo}</p>
            <p className="font-sans text-sm text-kendo-black/60 mt-3 line-clamp-3 leading-relaxed">{person.bio}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
