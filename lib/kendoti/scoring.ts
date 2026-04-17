import type { AxisKey, AxisScore, Question, TypeCode } from './types'

export function createEmptyScore(): AxisScore {
  return { strategy: 0, mode: 0, mind: 0, style: 0 }
}

export function scoreAnswers(
  questions: Question[],
  answers: Record<number, 0 | 1 | 2>,
): AxisScore {
  const total = createEmptyScore()
  for (const q of questions) {
    const idx = answers[q.id]
    if (idx === undefined) continue
    const opt = q.options[idx]
    if (!opt) continue
    for (const k of Object.keys(opt.score) as AxisKey[]) {
      const v = opt.score[k]
      if (typeof v === 'number') total[k] += v
    }
  }
  return total
}

export function resolveTypeCode(score: AxisScore): TypeCode {
  const strategy = score.strategy <= 0 ? 'A' : 'U'
  const mode = score.mode <= 0 ? 'J' : 'K'
  const mind = score.mind <= 0 ? 'R' : 'S'
  const style = score.style <= 0 ? 'G' : 'H'
  return `${strategy}${mode}${mind}${style}` as TypeCode
}

export function axisIntensity(score: AxisScore, axis: AxisKey): number {
  const max: Record<AxisKey, number> = {
    strategy: 24,
    mode: 22,
    mind: 22,
    style: 22,
  }
  return Math.min(100, Math.round((Math.abs(score[axis]) / max[axis]) * 100))
}

export const AXIS_LABELS: Record<AxisKey, { left: string; right: string; leftCode: string; rightCode: string }> = {
  strategy: { left: '攻', right: '受', leftCode: 'A', rightCode: 'U' },
  mode:     { left: '術', right: '氣', leftCode: 'J', rightCode: 'K' },
  mind:     { left: '理', right: '情', leftCode: 'R', rightCode: 'S' },
  style:    { left: '守', right: '變', leftCode: 'G', rightCode: 'H' },
}
