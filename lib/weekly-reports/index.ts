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
    slug: '2026-03-16_taiwan-kendo-international-2026',
    title: '首戰亞洋洲、赴京都演武——台灣劍道2026春季國際部署',
    subtitle: '首屆亞洲大洋洲錦標賽代表隊選拔完成、京都大會招募啟動、蘇裕成案後的選手資格新標準',
    date: '2026-03-16',
    issue_number: 2,
    category: 'taiwan',
    tags: ['亞洲大洋洲錦標賽', '台灣代表隊', '京都大會', '國際交流', '選手資格', 'FIK'],
    excerpt: '2026年台灣劍道進入春季國際備戰期。首屆亞洲大洋洲劍道錦標賽5月底於東京武道館登場，台灣代表隊決選已完成；京都大會招募同步啟動；蘇裕成代表中國案引發的身份認定爭議，促使協會建立更嚴格的選手資格審查機制。',
    newsCount: 4,
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
    newsCount: 5,
  },
]
