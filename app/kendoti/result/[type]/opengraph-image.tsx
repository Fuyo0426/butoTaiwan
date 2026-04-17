import { ImageResponse } from 'next/og'
import { kendoTypes } from '@/lib/kendoti/data'
import type { TypeCode, SixStats } from '@/lib/kendoti/types'

export const runtime = 'edge'
export const alt = 'kendoTI 劍道人格測驗結果'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const AXIS_LABELS = ['面', '小手', '胴', '氣合', '間合', '殘心'] as const
const AXIS_KEYS: (keyof SixStats)[] = ['men', 'kote', 'do', 'kiai', 'maai', 'zanshin']

function hexPoints(stats: SixStats, cx: number, cy: number, radius: number, scale = 1) {
  return AXIS_KEYS.map((key, i) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
    const v = Math.max(0, Math.min(10, stats[key])) / 10 * scale
    return `${cx + Math.cos(angle) * radius * v},${cy + Math.sin(angle) * radius * v}`
  }).join(' ')
}

function gridPolygon(cx: number, cy: number, radius: number, scale: number) {
  return AXIS_KEYS.map((_, i) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
    return `${cx + Math.cos(angle) * radius * scale},${cy + Math.sin(angle) * radius * scale}`
  }).join(' ')
}

export default async function Image({ params }: { params: { type: string } }) {
  const code = params.type.toUpperCase() as TypeCode
  const t = kendoTypes[code]
  if (!t) {
    return new ImageResponse(<div style={{ width: '100%', height: '100%', background: '#F8F6F1' }}>404</div>, size)
  }

  const hexCx = 950
  const hexCy = 315
  const hexR = 180

  const hexSvg = `
    <svg width="420" height="420" viewBox="770 135 380 380" xmlns="http://www.w3.org/2000/svg">
      ${[0.25, 0.5, 0.75, 1]
        .map(
          (s) =>
            `<polygon points="${gridPolygon(hexCx, hexCy, hexR, s)}" fill="none" stroke="#E8E4DC" stroke-width="1.5" />`,
        )
        .join('')}
      ${AXIS_KEYS.map((_, i) => {
        const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
        const x = hexCx + Math.cos(angle) * hexR
        const y = hexCy + Math.sin(angle) * hexR
        return `<line x1="${hexCx}" y1="${hexCy}" x2="${x}" y2="${y}" stroke="#E8E4DC" stroke-width="1.5" />`
      }).join('')}
      <polygon points="${hexPoints(t.stats, hexCx, hexCy, hexR)}" fill="#8B1A1A" fill-opacity="0.28" stroke="#8B1A1A" stroke-width="3" stroke-linejoin="round" />
      ${AXIS_KEYS.map((key, i) => {
        const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
        const labelR = hexR * 1.22
        const lx = hexCx + Math.cos(angle) * labelR
        const ly = hexCy + Math.sin(angle) * labelR
        return `<text x="${lx}" y="${ly + 6}" font-size="22" font-weight="700" fill="#1A1A1A" text-anchor="middle">${AXIS_LABELS[i]}</text>`
      }).join('')}
      ${AXIS_KEYS.map((key, i) => {
        const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
        const v = Math.max(0, Math.min(10, t.stats[key])) / 10
        const px = hexCx + Math.cos(angle) * hexR * v
        const py = hexCy + Math.sin(angle) * hexR * v
        return `<circle cx="${px}" cy="${py}" r="6" fill="#8B1A1A" />`
      }).join('')}
    </svg>
  `

  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(hexSvg)}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#F8F6F1',
          padding: '60px 70px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, paddingRight: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
              <div
                style={{
                  fontSize: 18,
                  letterSpacing: 6,
                  color: '#8B1A1A',
                  fontWeight: 700,
                  padding: '6px 14px',
                  background: 'rgba(139,26,26,0.08)',
                }}
              >
                kendoTI
              </div>
              <div style={{ fontSize: 16, color: 'rgba(26,26,26,0.5)', letterSpacing: 4 }}>{t.code}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 10 }}>
              <div style={{ fontSize: 42, fontWeight: 700, color: 'rgba(26,26,26,0.55)', letterSpacing: 8 }}>
                {t.nickname}
              </div>
            </div>
            <div style={{ fontSize: 96, fontWeight: 900, color: '#8B1A1A', lineHeight: 1.05 }}>{t.name}</div>
            <div
              style={{
                fontSize: 26,
                color: 'rgba(26,26,26,0.75)',
                marginTop: 22,
                lineHeight: 1.45,
                maxWidth: 620,
                fontStyle: 'italic',
              }}
            >
              {t.slogan}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 14, color: 'rgba(26,26,26,0.4)', letterSpacing: 4 }}>BUTOTAIWAN</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#1A1A1A' }}>武道台灣 · 劍道人格測驗</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 420 }}>
          <img src={dataUri} width={420} height={420} style={{ display: 'block' }} alt="hex" />
        </div>
      </div>
    ),
    size,
  )
}
