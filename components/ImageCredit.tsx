'use client'

type Props = {
  name: string
  url: string
  license: string
}

export function ImageCredit({ name, url, license }: Props) {
  return (
    <span
      role="link"
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        window.open(url, '_blank', 'noopener,noreferrer')
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') window.open(url, '_blank', 'noopener,noreferrer')
      }}
      className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/40 text-white/60 font-sans text-[9px] hover:text-white transition-colors cursor-pointer"
    >
      © {name} · {license}
    </span>
  )
}
