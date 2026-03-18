export interface KendoNewsItem {
  title: string
  source: string
  date: string
  url: string
  summary: string
  insight: string
}

export interface WeeklyReport {
  slug: string
  title: string
  subtitle: string
  date: string
  issue_number: number
  category: 'technique' | 'culture' | 'competition' | 'global' | 'taiwan'
  tags: string[]
  excerpt: string
  query: string
  editorial_note: string
  news: KendoNewsItem[]
  takeaways: string[]
  faq?: { question: string; answer: string }[]
}

export interface WeeklyReportMeta {
  slug: string
  title: string
  subtitle: string
  date: string
  issue_number: number
  category: WeeklyReport['category']
  tags: string[]
  excerpt: string
  newsCount: number
}

// 登記表 — 執行 /kendo-brief 後，將新報告加到這裡
export const weeklyReports: WeeklyReportMeta[] = [
  {
    slug: '2026-03-18_kendo-technique-maai-seme-2026',
    title: '間合與先——世界頂尖劍士如何用距離感贏得一本',
    subtitle: '有馬博之上段間合心法、高橋健太郎稽古前強化法、宮崎正裕初太刀哲學——技法三連發',
    date: '2026-03-18',
    issue_number: 3,
    category: 'technique',
    tags: ['間合', '攻め', '宮崎正裕', '上段', '腳腰強化', '稽古法', '技法研究', 'Kendo Jidai'],
    excerpt: '本期技法週報聚焦三篇來自 Kendo Jidai International 的頂尖劍士洞察：有馬博之教士八段解析上段的間合心法；高橋健太郎強調腳腰是打擊根源；宮崎正裕揭示19年競技生涯的身體管理底層邏輯。',
    newsCount: 3,
  },
  {
    slug: '2026-03-16_taiwan-kendo-international-2026',
    title: '首戰亞洋洲、赴京都演武——台灣劍道2026春季國際部署',
    subtitle: '首屆亞洲大洋洲錦標賽代表隊選拔完成、京都大會招募啟動',
    date: '2026-03-16',
    issue_number: 2,
    category: 'taiwan',
    tags: ['亞洲大洋洲錦標賽', '台灣代表隊', '京都大會', '國際交流', 'FIK'],
    excerpt: '2026年台灣劍道進入春季國際備戰期。首屆亞洲大洋洲劍道錦標賽5月底於東京武道館登場，台灣代表隊決選已完成；京都大會招募同步啟動，名額有限請儘速確認。',
    newsCount: 2,
  },
  {
    slug: '2026-03-16_taiwan-kendo-spring-2026',
    title: '2026春季台灣劍道賽事全覽',
    subtitle: '全國審判講習、大學聯賽首戰、段位審查時程一次掌握',
    date: '2026-03-16',
    issue_number: 1,
    category: 'taiwan',
    tags: ['台灣賽事', '大學劍道', '段位審查', '春季賽程'],
    excerpt: '2026年春季台灣劍道賽事密集展開。大學聯賽首場於3月底登場，全國段位審查名額縮減引發討論，審判員資格講習新增線上課程，海外歸台選手首次獲得直接參賽資格。',
    newsCount: 4,
  },
]
