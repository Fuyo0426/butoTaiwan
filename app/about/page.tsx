import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '關於我們',
}

export default function AboutPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div className="max-w-[65ch]">
        <p className="font-sans text-xs text-kendo-red tracking-[0.2em] uppercase mb-3">About</p>
        <h1 className="font-serif text-5xl font-black text-kendo-black tracking-tight mb-8">關於武道台灣</h1>

        <div className="prose font-sans text-kendo-black/70 leading-relaxed space-y-6">
          <p className="text-lg text-kendo-black">
            武道台灣（butoTaiwan）是台灣第一份以劍道為核心的週報媒體，由台南武德殿製作，製作人張復堯主持。
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
            <p className="font-sans text-sm text-kendo-black/50">聯絡：contact@butotaiwan.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
