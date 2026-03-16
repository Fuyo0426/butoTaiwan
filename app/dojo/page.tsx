import { dojos } from '@/lib/data'
import { MapPin, Phone, Clock, Users } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'

const BASE_URL = 'https://buto-taiwan.vercel.app'

export const metadata: Metadata = {
  title: '道場地圖',
  description: '台灣劍道道場完整資料庫',
}

export default function DojoPage() {
  const dojoListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '台灣劍道道場資料庫',
    description: '台灣各縣市劍道道場完整資料庫',
    url: `${BASE_URL}/dojo`,
    numberOfItems: dojos.length,
    itemListElement: dojos.map((dojo, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SportsOrganization',
        name: dojo.name,
        sport: '劍道',
        address: {
          '@type': 'PostalAddress',
          streetAddress: dojo.address,
          addressLocality: dojo.city,
          addressCountry: 'TW',
        },
        telephone: dojo.phone,
        url: dojo.website ?? dojo.facebook,
        foundingDate: String(dojo.established),
        memberOf: {
          '@type': 'SportsOrganization',
          name: '中華民國劍道協會',
        },
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dojoListSchema) }}
      />
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div className="mb-10 pb-8 border-b border-border">
        <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-2">全台收錄</p>
        <h1 className="font-serif text-5xl font-black text-kendo-black tracking-tight">道場地圖</h1>
        <p className="font-sans text-base text-kendo-black/60 mt-3">台灣各縣市劍道道場資料庫。找到離你最近的地方，開始習劍。</p>
      </div>

      {/* City filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {['全部', '台北', '台南', '高雄', '台中', '新北'].map((city) => (
          <button key={city} className={`px-4 py-2 font-sans text-sm border transition-colors ${city === '全部' ? 'bg-kendo-black text-white border-kendo-black' : 'border-border text-kendo-black/70 hover:border-kendo-red hover:text-kendo-red'}`}>
            {city}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dojos.map((dojo) => (
          <div key={dojo.id} className="border border-border hover:border-kendo-red transition-colors p-6 group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-kendo-black group-hover:text-kendo-red transition-colors">
                  {dojo.name}
                </h3>
                <p className="font-sans text-sm text-kendo-black/50 mt-1">
                  創立於 {dojo.established} 年
                </p>
              </div>
              <div className="bg-kendo-red/10 px-2 py-1 flex-shrink-0">
                <span className="font-sans text-xs text-kendo-red font-medium">{dojo.city}</span>
              </div>
            </div>

            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-2 text-sm font-sans text-kendo-black/70">
                <Users size={14} className="mt-0.5 flex-shrink-0 text-kendo-black/40" />
                <span>
                  指導：{dojo.instructor}{dojo.instructorRank ? ` ${dojo.instructorRank}` : ''}
                  {dojo.assistants && dojo.assistants.map(a => (
                    <span key={a.name} className="ml-2 text-kendo-black/50">助教：{a.name} {a.rank}</span>
                  ))}
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm font-sans text-kendo-black/70">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-kendo-black/40" />
                <span>{dojo.address}</span>
              </div>
              <div className="flex items-start gap-2 text-sm font-sans text-kendo-black/70">
                <Clock size={14} className="mt-0.5 flex-shrink-0 text-kendo-black/40" />
                <span>{dojo.schedule}</span>
              </div>
              {dojo.phone && (
                <div className="flex items-start gap-2 text-sm font-sans text-kendo-black/70">
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-kendo-black/40" />
                  <span>{dojo.phone}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {dojo.targetAudience.map((t) => (
                <span key={t} className="px-2 py-0.5 bg-border font-sans text-xs text-kendo-black/60">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="font-sans text-xs text-kendo-black/40">
                {dojo.memberCount} 位成員
              </span>
              {dojo.website && (
                <a href={dojo.website} className="font-sans text-xs text-kendo-red hover:underline">
                  官網
                </a>
              )}
              {dojo.facebook && (
                <a href={dojo.facebook} target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-kendo-red hover:underline">
                  Facebook
                </a>
              )}
            </div>
          </div>
        ))}

        {/* Submit your dojo */}
        <div className="border border-dashed border-border hover:border-kendo-red transition-colors p-6 flex flex-col items-center justify-center text-center group min-h-[300px]">
          <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center mb-4 group-hover:border-kendo-red transition-colors">
            <span className="font-serif text-2xl text-kendo-black/30">+</span>
          </div>
          <h3 className="font-serif text-base font-semibold text-kendo-black/50 mb-2">收錄你的道場</h3>
          <p className="font-sans text-sm text-kendo-black/40 max-w-[24ch]">聯絡我們，將你的道場加入資料庫</p>
          <a href="/contact" className="mt-4 font-sans text-sm text-kendo-red hover:underline">聯絡編輯部</a>
        </div>
      </div>
    </div>
    </>
  )
}
