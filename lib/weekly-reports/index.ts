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
    slug: '2026-04-01_kendo-technique-ki-ken-tai',
    title: '氣劍體一致的再發現——從紙上特集到場上足捌，技法訓練正在回歸身體',
    subtitle: '《劍道時代》四月號 Ki-Ken-Tai 特集、Kendo Jidai 足捌集訓教程、AJKF 四月剣窓技術指引',
    date: '2026-04-01',
    issue_number: 9,
    category: 'technique',
    tags: ['氣劍體一致', 'ki-ken-tai', '足捌', 'ashi-sabaki', '間合', 'maai', '劍道時代', 'Kendo Jidai', 'AJKF', '剣窓', '技法研究'],
    excerpt: '本期技法週報從三個層次切入同一個命題：身體才是技法的根。《劍道時代》四月號以「氣劍體一致」為封面特集，重新解構攻防一體的本質；Kendo Jidai International 三月刊出足捌集訓教程，強調步法是所有技法的前提；AJKF 四月剣窓則從制度面提供技術發展方向。三者匯聚的訊號明確——2026年的技法討論，正從「招式」回歸「身體」。',
    newsCount: 3,
  },
  {
    slug: '2026-03-30_taiwan-kendo-media-mainstream',
    title: '竹刀上了中央社——當台灣劍道走進主流媒體的鏡頭',
    subtitle: '中央通訊社、聯合報系正式報導國際城市劍道大賽，武德殿劍道推廣邁入第21年',
    date: '2026-03-30',
    issue_number: 8,
    category: 'taiwan',
    tags: ['中央社', '聯合報', '主流媒體', '高雄武德殿', '國際城市劍道大賽', '劍道文化推廣', '百年古蹟', '亞洲大洋洲錦標賽'],
    excerpt: '本期新聞量不多，但訊號值得細品：中央通訊社以完整報導篇幅記錄高雄國際城市劍道大賽，聯合報系同步跟進——對長年在小眾圈裡默默修行的台灣劍道社群而言，這是一次難得的主流破圈。高雄武德殿自2005年起連續21年承辦國際劍道交流，百年古蹟化身亞太劍道文化重鎮的軌跡，終於被寫進國家級新聞。',
    newsCount: 2,
  },
  {
    slug: '2026-03-28_international-kendo-20wkc-global',
    title: '備戰2027：當劍道地圖從米蘭翻回東京，全球劍士開始移動',
    subtitle: 'FIK 20WKC東京進入倒數、美國史上最系統化選拔機制啟動、全日本青少年邀請賽今日迎接海外劍士',
    date: '2026-03-28',
    issue_number: 7,
    category: 'global',
    tags: ['20WKC', '世界劍道錦標賽', '東京', 'Team USA', 'FIK', '全日本邀請青少年大賽', '國際劍道', '2027'],
    excerpt: '2024年米蘭世界錦標賽結束不到兩年，全球劍道機器已悄然重啟。FIK確認20WKC於2027年5月東京登場，美國啟動史上最透明選拔機制，今日全日本邀請青少年賽則讓海外劍士親身踏上日本稽古場。備戰鐘聲在三個地方同時響起。',
    newsCount: 3,
  },
  {
    slug: '2026-03-25_kendo-technique-maai-waza',
    title: '九十回稽古的積累：歐洲劍道如何把間合與技法練成一體',
    subtitle: 'Kozaki Sensei「Maai & Waza」研習里程碑、ki-ken-tai-no-ichi 的精神底層、AJKF 三月指引',
    date: '2026-03-25',
    issue_number: 6,
    category: 'technique',
    tags: ['間合', '技法', 'ki-ken-tai', 'Maai', 'Waza', 'Kozaki Sensei', '歐洲劍道', 'AJKF', '剣窓', '劍道哲學'],
    excerpt: '本期技法週報從三個視角切入：德國美因茨第90回劍道研習以「間合與技法」為主題；2026年初深度文章重新詮釋 ki-ken-tai-no-ichi；AJKF 三月剣窓提供日本劍道聯盟一線指引。三者共同指向：技法不是孤立招式，是身心整合的表達。',
    newsCount: 3,
  },
  {
    slug: '2026-03-23_taiwan-kendo-kaohsiung-2026',
    title: '400刀在高雄交鋒、獨臂劍王宣誓——台灣三月最熱的劍道週',
    subtitle: '國際城市劍道大賽7國齊聚、柳生制剛流現身武德殿、亞大洋洲代表隊名單封盤',
    date: '2026-03-23',
    issue_number: 5,
    category: 'taiwan',
    tags: ['國際城市劍道大賽', '高雄武德殿', '獨臂劍王', '菊池雅樹', '柳生制剛流', '亞洲大洋洲錦標賽', '京都大會', '台灣劍道'],
    excerpt: '高雄武德殿到中山大學，3月20至22日間400把竹刀的碰擊聲代表台灣劍道最熱的一週。日本獨臂劍王菊池雅樹擔任開幕宣誓代表，柳生制剛流百年古流現場演示。同時，首屆亞洲大洋洲錦標賽台灣代表隊已決選定案，京都大會名額也在倒數中。',
    newsCount: 3,
  },
  {
    slug: '2026-03-21_international-kendo-aokc-2026',
    title: '亞太首次洲際賽、澳洲錦標賽在即——2026是劍道國際格局的轉捩點',
    subtitle: '首屆亞洲大洋洲錦標賽5月東京登場、美國備戰20WKC、澳洲錦標賽4月開打',
    date: '2026-03-21',
    issue_number: 4,
    category: 'global',
    tags: ['亞洲大洋洲錦標賽', '1AOKC', 'FIK', '世界劍道錦標賽', '澳洲劍道', 'Team USA', '東京武道館', '國際賽事'],
    excerpt: '2026年國際劍道賽事格局正式成形。首屆亞洲大洋洲劍道錦標賽5月底於東京武道館登場，美國代表隊啟動2027世界錦標賽長期備戰計畫，澳洲全國錦標賽4月初率先揭幕，三條國際戰線同步推進。',
    newsCount: 3,
  },
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
