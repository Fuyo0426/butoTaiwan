'use client'

import { FacebookLogo, TwitterLogo, LinkSimple, Check } from '@phosphor-icons/react'
import { useState } from 'react'

export function ShareButtons({
  url,
  title,
  shareText,
}: {
  url: string
  title: string
  shareText: string
}) {
  const [copied, setCopied] = useState(false)
  const encoded = encodeURIComponent(url)
  const encodedText = encodeURIComponent(`${title}\n${shareText}`)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${url}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(shareText)
      alert('分享文案已複製,可貼到 IG Story / 限動')
    } catch {}
  }

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1877F2] text-white font-sans text-sm rounded-sm hover:opacity-90 transition-opacity"
      >
        <FacebookLogo size={18} weight="fill" />
        Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-kendo-black text-white font-sans text-sm rounded-sm hover:opacity-90 transition-opacity"
      >
        <TwitterLogo size={18} weight="fill" />
        X / Twitter
      </a>
      <a
        href={`https://social-plugins.line.me/lineit/share?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#06C755] text-white font-sans text-sm rounded-sm hover:opacity-90 transition-opacity"
      >
        LINE
      </a>
      <button
        onClick={copyText}
        className="inline-flex items-center gap-2 px-4 py-2.5 border border-kendo-red text-kendo-red font-sans text-sm rounded-sm hover:bg-kendo-red hover:text-white transition-colors"
      >
        複製 IG 文案
      </button>
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-2 px-4 py-2.5 border border-border text-kendo-black font-sans text-sm rounded-sm hover:border-kendo-red hover:text-kendo-red transition-colors"
      >
        {copied ? <Check size={16} weight="bold" /> : <LinkSimple size={16} />}
        {copied ? '已複製' : '複製連結'}
      </button>
    </div>
  )
}
