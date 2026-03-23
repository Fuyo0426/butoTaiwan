import Link from 'next/link'
import { FacebookLogo } from '@phosphor-icons/react/dist/ssr'

export function Footer() {
  return (
    <footer className="border-t border-border bg-kendo-black text-white/70 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <p className="font-serif text-2xl font-bold text-white tracking-tight">武道台灣</p>
              <p className="font-sans text-xs text-white/40 tracking-[0.2em] uppercase mt-1">ButoTaiwan</p>
            </div>
            <p className="font-sans text-sm leading-relaxed text-white/60 max-w-sm">
              台灣唯一以劍道為核心的週報媒體。每週精選全球劍道資訊，每月深度月刊。由台南武德殿製作，製作人：張復堯。
            </p>
            <a
              href="https://www.facebook.com/Wudedian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-white/50 hover:text-white transition-colors group"
            >
              <FacebookLogo size={18} weight="fill" className="text-white/40 group-hover:text-[#1877F2] transition-colors" />
              <span className="font-sans text-sm">台南武德殿</span>
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="font-serif text-sm text-white font-medium mb-4">內容</p>
            <ul className="space-y-2">
              {[
                ['週報', '/weekly'],
                ['月刊', '/issues'],
                ['賽事日曆', '/calendar'],
                ['道場地圖', '/dojo'],
                ['人物誌', '/people'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="font-sans text-sm text-white/60 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="font-serif text-sm text-white font-medium mb-4">關於</p>
            <ul className="space-y-2">
              {[
                ['關於我們', '/about'],
                ['聯絡編輯部', '/contact'],
                ['訂閱月刊', '/subscribe'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="font-sans text-sm text-white/60 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30">
            &copy; 2026 武道台灣 ButoTaiwan. 台南武德殿製作.
          </p>
          <p className="font-sans text-xs text-white/30">製作人：張復堯</p>
        </div>
      </div>
    </footer>
  )
}
