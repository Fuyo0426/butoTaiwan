'use client'

import { AXIS_LABELS } from '@/lib/kendoti/scoring'
import type { AxisKey } from '@/lib/kendoti/types'

export function ProgressBar({
  current,
  total,
  axis,
}: {
  current: number
  total: number
  axis: AxisKey
}) {
  const percent = Math.round((current / total) * 100)
  const a = AXIS_LABELS[axis]
  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-2">
        <span className="font-sans text-xs text-kendo-black/50 tracking-wider">
          第 {current} / {total} 題 · {a.left}{a.leftCode} / {a.right}{a.rightCode} 軸
        </span>
        <span className="font-serif text-xs text-kendo-red font-semibold">{percent}%</span>
      </div>
      <div className="h-1 w-full bg-border overflow-hidden rounded-sm">
        <div
          className="h-full bg-kendo-red transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
