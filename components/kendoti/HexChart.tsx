import type { SixStats } from '@/lib/kendoti/types'

const AXES: { key: keyof SixStats; label: string; jp: string }[] = [
  { key: 'men',     label: '面',   jp: 'MEN' },
  { key: 'kote',    label: '小手', jp: 'KOTE' },
  { key: 'do',      label: '胴',   jp: 'DO' },
  { key: 'kiai',    label: '氣合', jp: 'KIAI' },
  { key: 'maai',    label: '間合', jp: 'MAAI' },
  { key: 'zanshin', label: '殘心', jp: 'ZANSHIN' },
]

export function HexChart({ stats, size = 320 }: { stats: SixStats; size?: number }) {
  const center = size / 2
  const radius = size * 0.38
  const labelRadius = radius * 1.28

  const angle = (i: number) => (Math.PI * 2 * i) / 6 - Math.PI / 2

  const gridPoints = (scale: number) =>
    AXES.map((_, i) =>
      `${center + Math.cos(angle(i)) * radius * scale},${center + Math.sin(angle(i)) * radius * scale}`,
    ).join(' ')

  const valuePoints = AXES.map((a, i) => {
    const v = Math.max(0, Math.min(10, stats[a.key])) / 10
    return `${center + Math.cos(angle(i)) * radius * v},${center + Math.sin(angle(i)) * radius * v}`
  }).join(' ')

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block mx-auto">
      {[0.25, 0.5, 0.75, 1].map((s) => (
        <polygon
          key={s}
          points={gridPoints(s)}
          fill="none"
          stroke="#E8E4DC"
          strokeWidth={1}
        />
      ))}
      {AXES.map((_, i) => (
        <line
          key={i}
          x1={center}
          y1={center}
          x2={center + Math.cos(angle(i)) * radius}
          y2={center + Math.sin(angle(i)) * radius}
          stroke="#E8E4DC"
          strokeWidth={1}
        />
      ))}
      <polygon
        points={valuePoints}
        fill="#8B1A1A"
        fillOpacity={0.22}
        stroke="#8B1A1A"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {AXES.map((a, i) => {
        const v = Math.max(0, Math.min(10, stats[a.key])) / 10
        return (
          <circle
            key={a.key}
            cx={center + Math.cos(angle(i)) * radius * v}
            cy={center + Math.sin(angle(i)) * radius * v}
            r={4}
            fill="#8B1A1A"
          />
        )
      })}
      {AXES.map((a, i) => {
        const x = center + Math.cos(angle(i)) * labelRadius
        const y = center + Math.sin(angle(i)) * labelRadius
        return (
          <g key={a.key}>
            <text
              x={x}
              y={y - 2}
              fontSize={14}
              fontWeight={700}
              fill="#1A1A1A"
              textAnchor="middle"
              fontFamily="'Noto Serif TC', serif"
            >
              {a.label}
            </text>
            <text
              x={x}
              y={y + 13}
              fontSize={9}
              fill="#1A1A1A"
              fillOpacity={0.45}
              textAnchor="middle"
              letterSpacing="1"
              fontFamily="'Noto Sans TC', sans-serif"
            >
              {stats[a.key]}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
