'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export function NicknameGreeting() {
  const searchParams = useSearchParams()
  const queryName = searchParams.get('name')?.trim().slice(0, 20) || ''
  const [name, setName] = useState(queryName)

  useEffect(() => {
    if (queryName) {
      setName(queryName)
      return
    }
    try {
      const saved = localStorage.getItem('kendoti.nickname.v1')
      if (saved) setName(saved.trim().slice(0, 20))
    } catch {}
  }, [queryName])

  if (!name) return null

  return (
    <p className="font-serif text-base md:text-lg text-kendo-black/75 mb-3">
      <span className="font-bold text-kendo-red">{name}</span>
      <span className="text-kendo-black/50">,你的 kendoTI 是</span>
    </p>
  )
}
