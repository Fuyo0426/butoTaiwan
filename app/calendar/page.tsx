import { events } from '@/lib/data'
import { CalendarBlank, MapPin, Clock } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '賽事日曆',
  description: '台灣劍道賽事、審查、講習會完整日曆',
}

const categoryMap = {
  tournament: { label: '錦標賽', color: 'bg-kendo-red' },
  grading: { label: '段級審查', color: 'bg-kendo-blue' },
  seminar: { label: '講習會', color: 'bg-amber-800' },
  camp: { label: '訓練營', color: 'bg-stone-600' },
}

export default function CalendarPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div className="mb-10 pb-8 border-b border-border">
        <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-2">持續更新</p>
        <h1 className="font-serif text-5xl font-black text-kendo-black tracking-tight">賽事日曆</h1>
        <p className="font-sans text-base text-kendo-black/60 mt-3">台灣劍道錦標賽、段位審查、講習會、訓練營完整資訊。</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-8">
        {Object.entries(categoryMap).map(([key, { label, color }]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${color}`} />
            <span className="font-sans text-sm text-kendo-black/70">{label}</span>
          </div>
        ))}
      </div>

      {/* Event list */}
      <div className="space-y-4">
        {events.map((event) => {
          const cat = categoryMap[event.category]
          return (
            <div key={event.id} className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 md:gap-8 p-6 border border-border hover:border-kendo-red transition-colors">
              {/* Date */}
              <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0">
                <p className="font-serif text-3xl font-bold text-kendo-black">
                  {new Date(event.date).getDate()}
                </p>
                <p className="font-sans text-sm text-kendo-black/50">
                  {new Date(event.date).toLocaleDateString('zh-TW', { year: 'numeric', month: 'long' })}
                </p>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-0.5 text-[10px] font-sans text-white font-medium ${cat.color}`}>
                    {cat.label}
                  </span>
                  <span className="font-sans text-xs text-kendo-black/40">{event.organizer}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-kendo-black mb-2">{event.name}</h3>
                <p className="font-sans text-sm text-kendo-black/60 leading-relaxed">{event.description}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-kendo-black/50 font-sans">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    報名截止：{event.registrationDeadline}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center">
                <a
                  href={event.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-kendo-red text-kendo-red font-sans text-sm hover:bg-kendo-red hover:text-white transition-colors active:scale-[0.98]"
                >
                  報名資訊
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
