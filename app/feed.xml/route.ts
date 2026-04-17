import { articles } from '@/lib/data'

export async function GET() {
  const baseUrl = 'https://buto-taiwan.vercel.app'

  const items = articles
    .slice()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map((article) => {
      const url = `${baseUrl}/article/${article.slug}`
      return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <author><![CDATA[${article.author}]]></author>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
    </item>`
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>武道台灣 ButoTaiwan</title>
    <link>${baseUrl}</link>
    <description>台灣劍道週報。由台南武德殿製作，每週精選全球劍道資訊，每月深度月刊訪談台灣劍道前輩。</description>
    <language>zh-TW</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
