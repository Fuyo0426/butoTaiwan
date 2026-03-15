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
  alternates: {
    types: {
      'application/rss+xml': 'https://buto-taiwan.vercel.app/feed.xml',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    siteName: '武道台灣 butoTaiwan',
    title: '武道台灣 butoTaiwan',
    description: '台灣劍道週報。由台南武德殿製作，每週精選全球劍道資訊，每月深度月刊訪談台灣劍道前輩。',
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/%E5%8F%B0%E5%8D%97%E6%AD%A6%E5%BE%B7%E6%AE%BF_Tainan_Wude_Hall_-_panoramio.jpg',
        width: 1024,
        height: 768,
        alt: '台南武德殿',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '武道台灣 butoTaiwan',
    description: '台灣劍道週報。由台南武德殿製作，每週精選全球劍道資訊，每月深度月刊訪談台灣劍道前輩。',
    images: ['https://upload.wikimedia.org/wikipedia/commons/1/10/%E5%8F%B0%E5%8D%97%E6%AD%A6%E5%BE%B7%E6%AE%BF_Tainan_Wude_Hall_-_panoramio.jpg'],
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
