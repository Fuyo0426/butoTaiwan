import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: {
    default: '武道台灣 butoTaiwan',
    template: '%s | 武道台灣',
  },
  description: '台灣劍道週報。由台南武德殿製作，每週精選全球劍道資訊，每月深度月刊訪談台灣劍道前輩。',
  keywords: ['劍道', '台灣劍道', '武道台灣', '台南武德殿', '劍道週報'],
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    siteName: '武道台灣 butoTaiwan',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="bg-paper min-h-[100dvh] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
