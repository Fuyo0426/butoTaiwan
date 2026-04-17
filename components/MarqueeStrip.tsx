export function MarqueeStrip() {
  const items = [
    '竹刀一揮，心意相通',
    '台南武德殿製作',
    '劍道文化傳承',
    '武道台灣 ButoTaiwan',
    '全台劍道資訊',
    '每週四更新',
  ]

  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-border bg-kendo-black py-3">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-serif text-sm text-white/80 tracking-wider">{item}</span>
            <span className="text-kendo-red font-serif text-lg">一</span>
          </span>
        ))}
      </div>
    </div>
  )
}
