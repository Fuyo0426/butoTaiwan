import { kendoTypes } from './data'
import type { TypeCode } from './types'

export interface CompatEntry {
  self: TypeCode
  nemesis: TypeCode
  partner: TypeCode
  loveMatch: TypeCode
  loveAvoid: TypeCode
}

export function buildCompatMatrix(): CompatEntry[] {
  return (Object.keys(kendoTypes) as TypeCode[]).map((code) => {
    const t = kendoTypes[code]
    return {
      self: t.code,
      nemesis: t.nemesis.code,
      partner: t.partner.code,
      loveMatch: t.loveMatch.code,
      loveAvoid: t.loveAvoid.code,
    }
  })
}
