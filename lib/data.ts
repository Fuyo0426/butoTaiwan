export type Article = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: 'technique' | 'culture' | 'competition' | 'interview' | 'equipment'
  format: 'F1' | 'F2' | 'F3' | 'F4' | 'F5'
  author: string
  publishedAt: string
  coverImage: string
  imageCredit?: { name: string; url: string; license: string }
  tags: string[]
  readTime: number
  issueNumber?: number
  content?: string[]
  references?: { label: string; url?: string }[]
}

export type Issue = {
  id: string
  number: number
  title: string
  subtitle: string
  coverImage: string
  publishedAt: string
  articles: string[]
  featurePersonName: string
  featurePersonTitle: string
  status: 'published' | 'upcoming'
}

export type Event = {
  id: string
  name: string
  organizer: string
  date: string
  location: string
  city: string
  registrationDeadline: string
  category: 'tournament' | 'seminar' | 'grading' | 'camp'
  officialLink: string
  description: string
}

export type DojoCourse = {
  name: string
  schedule: string
  description?: string
}

export type Dojo = {
  id: string
  name: string
  instructor: string
  instructorRank: string
  assistants?: { name: string; rank: string }[]
  address: string
  city: string
  phone?: string
  schedule: string
  courses?: DojoCourse[]
  targetAudience: string[]
  established: number
  memberCount: number
  website?: string
  facebook?: string
}

export type Person = {
  id: string
  slug: string
  name: string
  rank: string
  title: string
  dojo: string
  entryYear: number
  speciality: string
  bio: string
  achievements: string[]
  relatedArticles: string[]
  photo: string
}

export const articles: Article[] = [
  {
    id: 'a1',
    slug: 'kiri-otoshi-waza-mastery',
    title: '斬落技的本質：從「無心」到「無形」',
    excerpt: '斬落技不只是格開對手的竹刀，而是在對方力量達到頂點的瞬間，以最小的力量完成最大的破壞。本文深入剖析斬落技的物理原理與精神層次。',
    category: 'technique',
    format: 'F1',
    author: '張復堯',
    publishedAt: '2026-03-14',
    coverImage: 'https://live.staticflickr.com/7109/7818732432_43f13573ce_b.jpg',
    imageCredit: { name: 'Eddiepics', url: 'https://www.flickr.com/photos/66881345@N03/7818732432', license: 'CC BY-ND 2.0' },
    tags: ['技法', '斬落技', '打擊理論'],
    readTime: 8,
    content: [
      '斬落技的名字裡藏著一個悖論：「斬落」聽起來是主動的施力，但真正掌握這門技術的劍士會告訴你，斬落的瞬間幾乎感覺不到力量的存在。那一刻，彷彿不是人在揮刀，而是刀自己找到了路。',
      '從物理學的角度看，斬落技的精妙在於時機的精準性遠比力量的大小更重要。當對手的竹刀在揮擊弧線的頂點時，其慣性已幾乎耗盡，此刻接觸點上的阻力最小，只需極小的側向分力，便能將對方的軌跡徹底破壞。許多初學者誤以為斬落是「用力格開」，結果反被對方的竹刀彈回，正是因為選錯了接觸時機。',
      '心理狀態上，斬落技要求的是一種被稱為「無心」的境界——不帶預判、不帶期待，讓身體在感知到對方動作的瞬間即時反應。這與現代神經科學中的「無意識自動化動作」高度吻合：當技術被練習到一定深度，大腦皮層的決策迴路會讓位給更快速的小腦反射系統。問題在於，達到這個狀態之前，你必須先經歷漫長而枯燥的有意識練習。',
      '七段師範田中宏志在一次座談中曾描述他第一次真正理解斬落技的感覺：「那天稽古結束後，我問自己剛才到底做了什麼，但我完全記不起來。只記得對方的面打到一半，我的竹刀已經在正確的位置上了。」這種「事後才意識到」的感覺，被許多高段位劍士視為斬落技「活了」的標誌。',
      '初學者最常見的錯誤是把斬落技練成「攔截技」：企圖在對方竹刀運動到一半時橫向格擋。這個方法偶爾成功，但不穩定，因為它依賴的是力量對抗而非時機選擇。正確的訓練方式應從木刀的形稽古開始，反覆感受對方施力的節奏與頂點，讓身體學會「等那一秒」，而非主動出擊。',
      '從精神層面看，斬落技其實是一種對「虛實」的深刻理解。對方全力揮擊的竹刀，在速度最快的那一刻，內部實際上是最空的——能量已完全輸出，防守已然開門。劍道古語說「虛中有實，實中有虛」，斬落技正是將這句話從哲學命題轉化為身體動作的具體實踐。',
      '最終，斬落技的修練不只是技術的精進，更是一種世界觀的培養。它要求你放棄主動控制的執念，學會在對方創造的空隙中行動。這與武道中「後之先」的概念一脈相承：不是比對手更早出手，而是在對手出手之後，仍然能夠先到達。這種看似矛盾的時間感，是劍道深度吸引人的核心之一。',
    ],
    references: [
      { label: '全日本剣道連盟《剣道指導要領》（2020年改訂版）', url: 'https://www.kendo.or.jp' },
      { label: '中村太郎《斬落技の理論と実践》剣道日本, 2018年3月号' },
      { label: 'Fitts, P.M. & Posner, M.I. (1967). Human Performance. Brooks/Cole.' },
    ],
  },
  {
    id: 'a2',
    slug: 'tainan-budoden-history',
    title: '台南武德殿百年傳承：從日治到今日的劍道脈絡',
    excerpt: '1902年竣工的台南武德殿，見證了台灣劍道從殖民地武術訓練場到現代競技道場的完整演變。我們走訪現任館長，探尋這百年建築的記憶與未來。',
    category: 'culture',
    format: 'F3',
    author: '編輯部',
    publishedAt: '2026-03-12',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/1/10/%E5%8F%B0%E5%8D%97%E6%AD%A6%E5%BE%B7%E6%AE%BF_Tainan_Wude_Hall_-_panoramio.jpg',
    imageCredit: { name: 'Wikimedia Commons / Panoramio', url: 'https://commons.wikimedia.org/wiki/File:%E5%8F%B0%E5%8D%97%E6%AD%A6%E5%BE%B7%E6%AE%BF_Tainan_Wude_Hall_-_panoramio.jpg', license: 'CC BY 3.0' },
    tags: ['歷史', '台南', '武德殿', '文化資產'],
    readTime: 12,
    issueNumber: 1,
    content: [
      '走進台南武德殿的瞬間，你會感受到一種與現代道場截然不同的氛圍。木造結構的屋梁在頭頂撐開一個高闊的空間，陽光從側窗斜入，落在磨損卻乾淨的木板地上。這棟建於1902年的建築，比台灣許多城市的現代地標都要年長，卻仍在每週數次見證竹刀劃破空氣的聲音。',
      '台南武德殿由日本政府於明治三十五年興建，隸屬大日本武德會台南支部，設計融合了明治時期日本神社建築的傳統樣式與西式磚造技術，是台灣現存最完整的武德殿建築之一。當時的用途是推廣劍道、柔道等武道作為殖民地官員與警察的體能與精神訓練場所，政治意涵濃厚。然而建築本身的工藝水準極高，大木構架的榫卯細節至今仍讓建築史學者稱道。',
      '1945年日本戰敗撤台後，武德殿的命運一度岌岌可危。政權更迭使許多日式建築遭到拆除或改建，武德殿先後被用作倉庫、法院宿舍等用途，武道訓練功能幾乎完全中斷。直到1990年代台灣社會對日治遺址的重新評估，武德殿才在文化界與劍道社群的聯合倡議下獲得歷史建物的認定，啟動了漫長的修復工程。',
      '現任武德殿管理負責人張復堯在接受本刊採訪時表示，他認為武德殿最珍貴的不是建築本身，而是「這個空間承載的時間厚度」。他在此練劍超過三十年，見過學生從孩童成長為父母再帶著自己的孩子回來稽古。「這種傳承在現代場館幾乎不可能發生，因為場館會搬遷、會關閉，但這裡不會。」',
      '在歷史建築中練劍，帶來的體驗與現代鏡面牆道場截然不同。木地板的共鳴讓每一次打擊的聲音更加飽滿，高聳的天花板讓氣合聲在空中迴盪而不是立即消散。更重要的是，劍士知道這同一片地板曾承載過無數代人的足步，這種知覺會在不知不覺中影響你站立的方式、行禮的角度、握竹刀的鄭重感。',
      '武德殿的修復過程並非沒有爭議。部分文資學者主張應以「凍結保存」為原則，避免任何現代化改動；但劍道社群則強調武德殿作為「活的武道場」的使用價值，認為空著的歷史建築比每天有人在裡面打竹刀更快死亡。最終採取的折衷方案是保留原有木構架與外觀，在不破壞歷史要素的前提下改善採光與防潮，讓場館得以持續使用。',
      '對台灣劍道社群而言，台南武德殿的存在有著超越實用性的象徵意義。在一個劍道人口逐漸萎縮、道場逐漸商業化的時代，這棟百年建築提醒著每一位走進來的人：武道從來都不只是競技，它是一種跨越世代的對話，是一條必須有人持續走下去才不會消失的路。',
    ],
    references: [
      { label: '台南市文化局《台南武德殿調查研究及修復計畫》，2004年' },
      { label: '大日本武德会史料研究会《武德会の歴史》, 1992年' },
      { label: '文化部文化資產局——台南武德殿登錄資料', url: 'https://nchdb.boch.gov.tw' },
      { label: '張復堯（台南武德殿），本刊專訪，2026年3月' },
    ],
  },
  {
    id: 'a3',
    slug: 'world-kendo-championships-2024-review',
    title: '第19屆世界劍道選手權大賽完整報告：日本隊的戰術演變',
    excerpt: '2024年米蘭世錦賽，日本男子隊以壓倒性的戰術紀律再度奪冠。本文整合現場觀察與數據分析，拆解日本隊在決賽前三場的比賽策略。',
    category: 'competition',
    format: 'F2',
    author: '編輯部',
    publishedAt: '2026-03-10',
    coverImage: 'https://www.kendo-fik.org/wp-content/uploads/2024/07/19th-World-Kendo-Championships_1926.jpg',
    imageCredit: { name: 'FIK / 19th World Kendo Championships', url: 'http://www.kendo-fik.org/wkc/the-19th-world-kendo-championships-19wkc', license: '© FIK 2024' },
    tags: ['世界大賽', '國際賽事', '戰術分析'],
    readTime: 15,
    content: [
      '2024年7月，第十九屆世界劍道選手權大賽在義大利米蘭 Mediolanum Forum Assago 落幕。日本男子團體隊以五戰全勝的姿態再度奪冠，這個結果本身並不令人意外，但日本隊這一屆的戰術面貌，與過去歷屆相比出現了若干值得深入分析的變化，也為國際劍道社群提供了豐富的討論素材。',
      '觀察日本隊在小組賽至決賽前三場的比賽錄像，可以發現一個貫穿全隊的戰術核心：極端的間合管理。日本選手在整場比賽中幾乎不主動進入對方的有效打擊距離，而是透過持續的足捌步法調整，誘使對手率先跨入一足一刀之間，再以預備好的應技或出鼻技反應。這種「讓對手來找你」的策略需要極高的距離感知能力，也需要心理上對「不主動出擊」的高度忍耐力。',
      '日本隊長山田雄一在決賽前的媒體採訪中透露，本屆備戰特別強調「拍子」的訓練——也就是節奏感的刻意培養。他表示現代國際劍道選手的個人技術水準已非常接近，勝負往往取決於能否在正確的節奏點出手，而非技術本身的優劣。這與日本隊在過去兩屆因節奏過於單一而被韓國隊針對性破解的教訓直接相關。',
      '本屆最令人矚目的非日本選手，是代表法國出賽的 Julien Pommeret，以及韓國隊的朴俊赫。Pommeret 以其罕見的左手主導劍型配合快速的後退誘引打法，在小組賽中擊敗多名亞洲種子選手；朴俊赫則以極快的起手速度和連續技著稱，是全場唯一讓日本主將明顯提高防守層次的對手。',
      '台灣男子隊在本屆止步八強，整體表現穩定但缺乏突破。教練組賽後坦承，與日本隊的核心差距並非技術，而是「戰術紀律」——台灣選手在壓力下容易退回自己習慣的打法，而不能依場上情況靈活切換策略。這直指台灣劍道訓練體系的結構性問題：平日稽古著重個人技術精進，但模擬高壓比賽情境的戰術演練相對不足。',
      '從歷史演變角度看，日本隊在世錦賽的戰術從1970年代的力強型全攻，到1990年代的技術細膩型，再到近兩屆的間合主導型，每一次轉型都對應著國際競爭格局的變化。如今韓國、法國的崛起迫使日本必須以更高的戰術複雜度維持領先，這對全球劍道水準的整體提升是好事，也預示著未來世錦賽的競爭將愈來愈激烈。',
      '世界劍道選手權賽的意義，終究不只是一面金牌的歸屬。它是全球劍道社群每三年一次的技術總覽與文化交流。米蘭賽場上，來自五十多個國家的劍士同場稽古，共同行禮、共同汗水，這個畫面本身就是劍道創始者們最希望看到的——武道跨越語言與國界，成為一種普世的人類實踐。',
    ],
    references: [
      { label: 'FIK 第19屆世界劍道選手權大賽官方結果', url: 'http://www.kendo-fik.org/wkc/the-19th-world-kendo-championships-19wkc' },
      { label: 'Kendo Jidai International — Results of the 19th World Kendo Championships', url: 'https://kendojidai.com/2024/07/11/results-of-the-19th-world-kendo-championships/' },
    ],
  },

  {
    id: 'a5',
    slug: 'shinai-maintenance-guide',
    title: '竹刀的壽命管理：從選材到收納的完整指南',
    excerpt: '一把好的竹刀平均能承受多少次完整打擊？竹刀油該怎麼用？茶道師父保養茶器的邏輯，其實可以直接套用在竹刀維護上。',
    category: 'equipment',
    format: 'F5',
    author: '器具研究室',
    publishedAt: '2026-03-05',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Shinai.jpg',
    imageCredit: { name: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/w/index.php?curid=587623', license: 'CC BY-SA 3.0' },
    tags: ['竹刀', '器具', '保養', '新手必讀'],
    readTime: 6,
    content: [
      '一把新竹刀握在手中時，你能感受到竹子細緻的紋理與恰到好處的彈性。那種手感，是數十年的竹林培育、工匠手工分割與精心組裝的結果。然而多數劍士對竹刀的態度，遠比對自己的道衣粗心——稽古結束隨手一扔，不擦汗水，不看裂紋，直到竹刀在場上崩裂才後悔沒有好好照顧它。',
      '竹刀的核心材料是「真竹」或「淡竹」，其中以九州鹿兒島及宮崎一帶產的竹材評價最高。好的竹刀竹材需在適當季節採收、陰乾三到五年，讓纖維充分定型後才能使用。工廠量產的低價竹刀往往縮短這個乾燥期，導致竹刀在使用數月後即出現扭曲或劈裂。辨別竹材品質的方法之一，是看竹節的間距是否均勻，以及竹皮的色澤是否帶有自然的光澤感。',
      '使用中的竹刀應在每次稽古後以乾布擦去汗水與污垢，特別是握革包覆的中節部位。汗液中的鹽分長期積累會腐蝕竹纖維，從內部加速劣化。每個月至少一次，應鬆開弦與皮革，仔細檢查四片竹條的表面是否出現細小裂紋、毛刺或變形。發現毛刺應立即以細砂紙磨除，因為比賽中斷裂的竹刺一旦刺入對手眼睛或面具縫隙，後果不堪設想。',
      '竹刀油的使用是許多劍士忽視的環節。正確做法是在清潔後以棉布沾取少量椿油或亞麻仁油，薄薄塗抹於竹條表面，讓竹纖維保持適度的油脂滋潤。用量寧少勿多——過多的油脂反而會軟化竹纖維並吸附灰塵。塗油後需靜置一夜讓油分充分滲透。這個邏輯與茶道師父養護茶碗的方式驚人地相似：器物也需定期「養」，讓使用者的體溫與日常接觸讓它逐漸與人合一。',
      '一把品質良好、保養得宜的竹刀，在正常稽古強度下大約能承受一萬到一萬五千次完整的打擊，換算成每次稽古兩百次基本打擊的頻率，大約是五十到七十五次稽古的壽命。判斷是否該汰換竹刀，最可靠的標準不是時間而是狀態：當竹條出現長度超過五公分的縱向裂紋、或弦側竹條明顯扭曲無法回正時，應立即停止使用。',
      '竹刀的收納同樣不可輕忽。台灣氣候潮濕，竹刀若長期存放在密閉的竹刀袋中，內部容易積累濕氣導致發霉甚至蟲蛀。理想的收納方式是將竹刀平放於通風良好的陰涼處，避免陽光直射，並在梅雨季前後加放除濕包。若要長期不使用，建議先拆下弦與皮革，讓竹條在自然狀態下呼吸。',
      '退役竹刀的處置，也是一個值得認真對待的環節。許多資深劍士選擇將用到盡頭的竹刀焚燒，或舉行簡單的「供養」儀式。這看似迷信，實則是一種對物件的道德關係的確認——你曾經用它練習，它以破損換取你的成長，這個交換值得一個終結的儀式。道具與人之間的這種關係，是武道文化中「物心一如」精神的日常體現。',
    ],
    references: [
      { label: '全日本剣道連盟《竹刀・木刀について》使用規則及び安全基準', url: 'https://www.kendo.or.jp' },
      { label: '田島義博《竹刀の科学》体育とスポーツ出版社, 2015年' },
      { label: '中華民國劍道協會《劍道競技規則》第4條（竹刀規格）' },
    ],
  },
  {
    id: 'a7',
    slug: 'national-student-kendo-50th-2026',
    title: '第50屆全國學生劍道錦標賽：竹劍新制上路、3/29亞錦賽國家隊合同稽古開放參加',
    excerpt: '114學年度第50屆全國學生劍道錦標賽即將登場。本屆新增竹劍檢驗器檢測制度，國中以上組別正式列入器材審查。賽程結束後，大會將邀請所有劍友參與1AOKC亞洲大洋洲錦標賽國家代表隊合同稽古，免費入場。',
    category: 'competition',
    format: 'F2',
    author: '編輯部',
    publishedAt: '2026-03-23',
    coverImage: 'https://live.staticflickr.com/65535/51515460454_b0e13d7ae4_b.jpg',
    imageCredit: { name: 'Flickr / Kendo action', url: 'https://www.flickr.com/photos/196867823@N05/', license: 'CC BY 2.0' },
    tags: ['全國學生劍道', '竹劍檢驗', '賽事公告', 'AOKC', '合同稽古', '中華民國劍道協會'],
    readTime: 5,
    content: [
      '中華民國劍道協會已發布「114學年度第50屆全國學生劍道錦標賽」注意事項暨各組報到時間，請所有參加單位代表、教練及選手務必詳細閱讀官方公告。完整場地賽程圖已於協會官網同步更新。',
      '【新制重點：竹劍檢驗器正式上路】本屆最重要的規則更新，是國中以上所有組別將正式使用竹劍檢驗器，針對兩個項目進行標準化測量：其一為竹劍劍尖皮（先革）的規格；其二為竹劍最小直徑的粗細標準。這代表過去依賴人工目測的劍具審查方式，在本屆起進一步走向器材化、客觀化。參賽選手應在賽前確認手中竹刀符合現行競技規定，建議攜帶備用竹刀以備臨時更換。小學及以下組別本次不在竹劍檢驗器測量範圍內，但仍需接受一般器材審查。',
      '【賽後亮點：1AOKC國家代表隊合同稽古，全員開放參加】3月29日（週日）賽程結束後，大會將舉辦「第1回亞洲大洋洲劍道錦標賽（1AOKC）國家代表隊合同稽古大會」。1AOKC是亞洲劍道史上首屆獨立洲際錦標賽，將於2026年5月30至31日在東京武道館揭幕，台灣已完成代表隊最終選拔，即將代表中華台北出征。本次合同稽古對所有在場劍友開放參加，換裝即可上場，免報名費，唯保險費用需由個人自理。這是難得一見的近距離觀摩與共同稽古機會，大會特別鼓勵各位劍友主動換裝共襄盛舉。',
      '【行前清單】前往比賽前，請確認以下事項：（一）詳閱協會官網公告的報到時間，各組別時程不同；（二）確認竹刀規格符合現行競技規定，國中以上組別請特別注意劍尖皮與最小直徑；（三）若有意參加3/29合同稽古，請自備有效保險，並預留換裝時間；（四）場地賽程圖已於公告同步更新，建議提前確認場館動線。',
      '完整公告、各組報到時間及場地賽程圖，請參閱中華民國劍道協會官網正式公告：http://www.rocka.org.tw/info/2026/students_details.html',
    ],
    references: [
      { label: '中華民國劍道協會——114學年度第50屆全國學生劍道錦標賽公告', url: 'http://www.rocka.org.tw/info/2026/students_details.html' },
      { label: '武道台灣——亞太首次洲際賽：1AOKC首屆亞洲大洋洲錦標賽5月東京武道館揭幕', url: '/weekly/2026-03-21_international-kendo-aokc-wkc2027' },
    ],
  },
  {
    id: 'a6',
    slug: 'taiwan-kendo-youth-program',
    title: '台灣少年劍道的困境與破局：人口斷層下的道場生存術',
    excerpt: '台灣劍道人口在2015年後開始出現結構性下滑。我們訪問了北中南七個道場，整理出三種在逆境中維持道場運作的有效模式。',
    category: 'culture',
    format: 'F3',
    author: '謝宛庭',
    publishedAt: '2026-03-03',
    coverImage: 'https://live.staticflickr.com/3690/11165754226_104ec937e5_b.jpg',
    imageCredit: { name: 'Nippon Budokan Kendo', url: 'https://www.flickr.com/photos/22539273@N00/11165754226', license: 'CC BY 2.0' },
    tags: ['少年劍道', '道場經營', '台灣劍道'],
    readTime: 11,
    content: [
      '台灣劍道的人口問題，在統計數字上有一個清晰的轉捩點：2015年前後，全國登記有案的青少年劍道人口開始出現年均百分之三到五的結構性下滑。這不是景氣循環造成的短暫波動，而是少子化、課後活動多元化以及道場經營模式老化多重因素疊加的結果。對許多在台灣深耕多年的道場而言，這是一場沒有明顯敵人的消耗戰。',
      '本刊過去半年走訪北中南共七個道場，從台北市區的百年劍道場到台南鄉鎮的社區道場，試圖釐清這個困境的真實面貌。各地道場的情況不盡相同，但共同的感受是招募新生的成本愈來愈高，而留住學生的時間愈來愈短。台中一家道場負責人坦言：「以前招一個學生，他會帶來三個朋友。現在招十個，最後能留下兩個就算成功。」',
      '七家道場中，有三種模式在逆境中展現出相對穩定的生命力。第一種是「親子共學計畫」。高雄鳳山一家道場五年前開始推動父母與孩子同時入班的制度，親子在同一個時段稽古，初學班由家長陪同、進階班則逐步分開。這個設計解決了家長接送時間的問題，也讓家長成為孩子學習的同行者而非旁觀者，流失率較傳統模式降低了將近四成。',
      '第二種有效模式是「企業健康福利合作」。台北有道場成功與三家科技公司簽訂員工健身合作協議，每週開設企業專班，由企業支付團體課程費用，員工下班後到道場稽古。這個模式的優點是收入穩定，不依賴招募大量散客；缺點是企業合約具有不確定性。儘管如此，對於擁有良好場地設施的道場而言，這仍是值得嘗試的方向。',
      '第三種模式最具文化深度：與學校的「文化傳承課程」合作。幾個縣市的道場與地方國中小學建立了正式的課程合作，將劍道納入學校的本土文化或體育選修課，道場師範擔任特約講師。這個模式把劍道從「課外才藝」重新定位為「歷史文化實踐」，在教育部推動本土文化課程的政策背景下具有合法性優勢，也更容易獲得家長支持。',
      '若這三種模式都不介入，現有趨勢持續下去，台灣在十五年後可能面臨的景象是：全國具備完整傳承能力的道場從現在的約八十家縮減到三十家以下，高段位師範的斷層更加明顯，國際賽事的競爭力進一步下滑。這不是危言聳聽，而是幾個已在日本與韓國農村地區部分實現的趨勢在台灣的可能重演。',
      '然而悲觀之外，仍有值得珍視的訊號。走訪過程中，記者在每一個道場都遇到了仍在稽古的中年乃至老年劍士，他們是學生時代入門、數十年未曾間斷的人。他們不靠劍道維生，純粹因為熱愛而繼續打下去。只要這樣的人還在，道場就不會真正死去。台灣劍道的問題不是熱情消失，而是組織化與制度化需要一次認真的更新。',
    ],
    references: [
      { label: '中華民國劍道協會年度會員統計報告，2015–2025年' },
      { label: '教育部體育署《全國各級學校運動團隊調查》，2023年' },
      { label: '謝宛庭，北中南七道場田野訪談，2025年9月至2026年2月' },
    ],
  },
]

export const issues: Issue[] = [
  {
    id: 'i1',
    number: 1,
    title: '根·源·道',
    subtitle: '台南武德殿創刊號：重返劍道的本源，探問百年之後',
    coverImage: 'https://live.staticflickr.com/8028/7126739267_72e214f0ec_b.jpg',
    publishedAt: '2026-03-01',
    articles: ['a2'],
    featurePersonName: '',
    featurePersonTitle: '',
    status: 'upcoming',
  },
]

export const events: Event[] = [
  {
    id: 'ev-交流',
    name: '國際城市劍道文化交流大會',
    organizer: '主辦單位待公告',
    date: '2026-03-20',
    location: '待確認',
    city: '待確認',
    registrationDeadline: '待公告',
    category: 'seminar',
    officialLink: '#',
    description: '3/20–3/22 跨城市國際劍道文化交流活動。',
  },
  {
    id: 'ev1',
    name: '全國學生盃劍道錦標賽',
    organizer: '主辦單位待公告',
    date: '2026-03-28',
    location: '台北市體育館',
    city: '台北',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '3/28–3/29 兩日賽程，台北市體育館。',
  },
  {
    id: 'ev2',
    name: '基隆市長盃劍道錦標賽',
    organizer: '基隆市劍道協會',
    date: '2026-04-11',
    location: '西定國小',
    city: '基隆',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '4/11（六）西定國小。',
  },
  {
    id: 'ev3',
    name: '高雄市長盃劍道錦標賽',
    organizer: '高雄市劍道協會',
    date: '2026-04-11',
    location: '高苑工商',
    city: '高雄',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '4/11（六）高苑工商。',
  },
  {
    id: 'ev4',
    name: '桃園市長盃劍道錦標賽',
    organizer: '桃園市劍道協會',
    date: '2026-04-18',
    location: '經國國中',
    city: '桃園',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '4/18（六）團體賽、4/19（日）個人賽，經國國中。',
  },
  {
    id: 'ev5',
    name: '彰化教育盃劍道錦標賽',
    organizer: '彰化縣劍道協會',
    date: '2026-04-19',
    location: '二林國小',
    city: '彰化',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '4/19（日）二林國小。',
  },
  {
    id: 'ev6',
    name: '臺北市青年盃劍道錦標賽',
    organizer: '臺北市劍道協會',
    date: '2026-04-25',
    location: '待確認',
    city: '台北',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '4/25（六），場地待公告。',
  },
  {
    id: 'ev7',
    name: '桃園議長盃劍道錦標賽',
    organizer: '桃園市議會',
    date: '2026-04-26',
    location: '平鎮高中',
    city: '桃園',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '4/26（日）平鎮高中。',
  },
  {
    id: 'ev8',
    name: '嘉義市長盃劍道錦標賽',
    organizer: '嘉義市劍道協會',
    date: '2026-05-03',
    location: '待確認',
    city: '嘉義',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '5/3（日），場地待公告。',
  },
  {
    id: 'ev9',
    name: '全國菁英盃劍道錦標賽',
    organizer: '主辦單位待公告',
    date: '2026-05-09',
    location: '東山高中',
    city: '台南',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '5/9（六）東山高中。',
  },
  {
    id: 'ev10',
    name: '臺中市清水區長盃劍道錦標賽',
    organizer: '臺中市清水區公所',
    date: '2026-05-23',
    location: '清水國中',
    city: '台中',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '5/23（六）清水國中。',
  },
  {
    id: 'ev11',
    name: '韓國國際劍道賽',
    organizer: '韓國劍道協會',
    date: '2026-06-26',
    location: '韓國',
    city: '韓國',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '6/26–6/30 國際賽事，地點韓國。',
  },
  {
    id: 'ev12',
    name: '花蓮縣長盃劍道錦標賽',
    organizer: '花蓮縣劍道協會',
    date: '2026-08-01',
    location: '待確認',
    city: '花蓮',
    registrationDeadline: '待公告',
    category: 'tournament',
    officialLink: '#',
    description: '8/1–8/2 兩日賽程，場地待公告。',
  },
]

export const dojos: Dojo[] = [
  {
    id: 'd1',
    name: '台南武德殿',
    instructor: '李亮樟',
    instructorRank: '七段',
    assistants: [{ name: '李秩嘉', rank: '三段' }],
    address: '700臺南市中西區忠義路二段2號',
    city: '台南',
    schedule: '週六 13:00-17:00，週日 08:00-12:00',
    courses: [
      { name: '劍道', schedule: '週六 13:00-17:00，週日 08:00-12:00' },
      { name: '居合道', schedule: '週六 13:00-17:00，週日 08:00-12:00' },
    ],
    targetAudience: ['幼兒', '兒童', '青少年', '大學生', '成人', '社會人士'],
    established: 1902,
    memberCount: 47,
    facebook: 'https://www.facebook.com/Wudedian',
  },
]

export const people: Person[] = []

export const categoryLabels: Record<Article['category'], string> = {
  technique: '技法研究',
  culture: '劍道文化',
  competition: '賽事報導',
  interview: '人物專訪',
  equipment: '器具知識',
}

export const categoryColors: Record<Article['category'], string> = {
  technique: 'bg-kendo-red text-white',
  culture: 'bg-kendo-blue text-white',
  competition: 'bg-kendo-black text-white',
  interview: 'bg-amber-800 text-white',
  equipment: 'bg-stone-600 text-white',
}
