import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '關於我們',
}

const FB_PAGE_URL = 'https://www.facebook.com/Wudedian'

export default function AboutPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
        {/* Main */}
        <div>
          <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-3">About</p>
          <h1 className="font-serif text-5xl font-black text-kendo-black tracking-tight mb-8">關於武道台灣</h1>

          <div className="prose font-sans text-kendo-black/70 leading-relaxed space-y-6">
            <p className="text-lg text-kendo-black">
              武道台灣（ButoTaiwan）是台灣第一份以劍道為核心的週報媒體，由台南武德殿製作，製作人張復堯主持。
            </p>
            <p>
              我們相信，劍道不只是一種武術，而是一種生命的修煉。台灣有許多默默在道場耕耘數十年的前輩，他們的故事值得被記錄、被傳承。
            </p>
            <p>
              武道台灣每週精選全球劍道資訊，包含技法研究、賽事報導、文化探討與器具知識。每月發行一期月刊，深度訪談台灣各地劍道前輩，探問習劍路上的生命哲學。
            </p>
            <div className="border-l-2 border-kendo-red pl-6 py-2">
              <p className="font-serif text-xl text-kendo-black italic">
                「竹刀一揮，心意相通。」
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="font-sans text-sm text-kendo-black/50">製作單位：台南武德殿</p>
              <p className="font-sans text-sm text-kendo-black/50">製作人：張復堯</p>
              <p className="font-sans text-sm text-kendo-black/50">聯絡：butotaiwan@outlook.com</p>
            </div>
          </div>
        </div>

        {/* Sidebar — FB Page embed */}
        <aside className="space-y-4">
          <p className="font-sans text-xs text-kendo-black/40 tracking-[0.15em] uppercase">台南武德殿 Facebook</p>
          <div className="border border-border overflow-hidden">
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FB_PAGE_URL)}&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
              width="340"
              height="500"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <a
            href={FB_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-sans text-xs text-kendo-black/40 hover:text-kendo-red transition-colors"
          >
            前往 Facebook 粉專 →
          </a>
        </aside>
      </div>
    </div>
  )
}
