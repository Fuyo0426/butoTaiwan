export type AxisStrategy = 'A' | 'U'
export type AxisMode = 'J' | 'K'
export type AxisMind = 'R' | 'S'
export type AxisStyle = 'G' | 'H'

export type TypeCode = `${AxisStrategy}${AxisMode}${AxisMind}${AxisStyle}`

export interface SixStats {
  men: number
  kote: number
  do: number
  kiai: number
  maai: number
  zanshin: number
}

export interface KendoTIType {
  code: TypeCode
  nickname: string
  name: string
  slogan: string
  description: string
  strengths: string[]
  weaknesses: string[]
  peerReview: string
  prescription: string
  nemesis: { code: TypeCode; reason: string }
  partner: { code: TypeCode; reason: string }
  historicalFigure: string
  mangaCharacter: string
  modernExample: string
  injuries: string[]
  prevention: string
  evolution: { stage: string; state: string }[]
  loveMatch: { code: TypeCode; reason: string }
  loveAvoid: { code: TypeCode; reason: string }
  loveBonus: string
  shareText: string
  stats: SixStats
  portrait: string
}

export interface AxisScore {
  strategy: number
  mode: number
  mind: number
  style: number
}

export type AxisKey = keyof AxisScore

export interface QuestionOption {
  label: string
  score: Partial<AxisScore>
}

export interface Question {
  id: number
  axis: AxisKey
  genre: '道場黑歷史' | '人性弱點' | '中二病' | '現實殘酷'
  prompt: string
  options: [QuestionOption, QuestionOption, QuestionOption]
}

export const TYPE_CODES: TypeCode[] = [
  'AJRG', 'AJRH', 'AJSG', 'AJSH',
  'AKRG', 'AKRH', 'AKSG', 'AKSH',
  'UJRG', 'UJRH', 'UJSG', 'UJSH',
  'UKRG', 'UKRH', 'UKSG', 'UKSH',
]
