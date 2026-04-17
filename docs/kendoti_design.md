# kendoTI — butoTaiwan 劍道人格測驗完整版

> 設計文件 v2 · 2026-04-17
> 規劃者：Jack & Harrison (L1)
> 專案業主：Yao
>
> **v2 變更**：參考對岸 KDTI（ltmsmjd.rest）後調整
> - 題數 60 → **45**（減寫作時間、提高完成率）
> - 每題 2 選 → **3 選**（含「表面X內心Y」曖昧選項 ±1 分）
> - 16 型加 **Public Nickname 台灣劍道在地化梗代碼**（學 KDTI 傳播策略但用繁中 + 台灣文化護城河）
> - 保留 5 創意模組（剋星/搭檔/名人/職業病/演化/戀愛），這是差異化關鍵

---

## Context

**為什麼做這個**
butoTaiwan 目前靠 weekly/issues 內容取流量，缺一個**病毒擴散的身份徽章型內容**。kendoTI 把 MBTI 移植到劍道領域，讓劍友做完想截圖標記道場同伴，導流回站且持續提升 SEO 長尾詞（「坂本龍馬 劍道」「宮本武藏 MBTI」等）。

**交付目標（完整版：全 5 創意模組）**
- `/kendoti` 入口 + `/kendoti/quiz` 60 題互動 + 16 型結果頁
- 5 創意模組：剋星相性、名人對應、職業病診斷、段位演化、道場戀愛相性
- Next.js 14 `ImageResponse` 動態 OG 分享圖卡
- 題目由 Jack 代筆草稿，Yao 審稿定版

**技術棧**（已探勘 butoTaiwan 專案）
Next.js 14.1.0 App Router｜Tailwind 3.4.1｜Vercel｜zh-TW 單語｜kendo-red (#8B1A1A) / paper (#F8F6F1) design tokens 既有｜Framer Motion 10.17 既有｜內容採 TS 檔案（lib/data.ts pattern），無 CMS。

---

## 四軸系統設計

| 軸 | 代碼 | 對應 MBTI | 劍道行為判讀 |
|---|---|---|---|
| 攻 A / 受 U | A/U | E/I | 主動仕掛先手壓制 vs 等破綻出端小手 |
| 術 J / 氣 K | J/K | S/N | 姿勢節奏理合派 vs 間合殺氣直覺派 |
| 理 R / 情 S | R/S | T/F | 冷靜分析弱點 vs 氣魄熱血壓場 |
| 守 G / 變 H | G/H | J/P | 基本功至上 vs 比賽隨機應變 |

16 型代碼組合：AJRG / AJRH / AJSG / AJSH / AKRG / AKRH / AKSG / AKSH / UJRG / UJRH / UJSG / UJSH / UKRG / UKRH / UKSG / UKSH

---

## 45 題結構（v2）

- **總題數 45**（攻/受 12 題 + 術/氣 11 題 + 理/情 11 題 + 守/變 11 題）
- **每題 3 個選項**：
  - 選項 A：軸左極值（±2 分）
  - 選項 B：軸右極值（±2 分）
  - 選項 C：曖昧選項「表面 X 內心 Y」（±1 分，抓邊角案例）
- 題型分配（約各 11 題）：
  - 道場黑歷史題（護具忘帶 / 素面打不好 / 面紐解不開）
  - 人性弱點題（師範說休息你偷幹嘛 / 被夸後心裡怎麼想）
  - 中二病題（試合前的內心小劇場 / 殘心的幻想台詞）
  - 現實殘酷題（對手段位比你高三段 / 狀態爛到爆）
- **題目風格參考**：學 KDTI 的自嘲、直球、接地氣，但用繁中 + 台灣劍道慣用語（「試合」而非「比賽」、「稽古」而非「練習」、「面打ち」而非「打頭」）

---

## 16 型結果頁內容結構（v2 加 Public Nickname）

每型必備欄位（共 11 欄）：

1. **型代碼（內部）**：AJRG（攻/術/理/守 四軸字母）
2. **Public Nickname（梗代碼）**：4 字台灣劍道在地化短語 — 這是對外傳播的主角
   - 學 KDTI：`FUCK`(干就完了) / `OJBK`(瞎JB得本) / `HHHH`(快樂菜雞)
   - 我們改：例如 `KNTN`（劍聖投胎）/ `BLMC`（半身迷戀者）/ `TDOA`（打到恩愛）…命名規則待 brainstorm
3. **化身名 + 標語**（例：AJRG / KNTN / 道場孔明 · 打你之前已經預測你下三手）
4. **性格敘述**（約 300 字，幽默中帶洞察）
5. **優勢 / 盲點** 各 3 條
6. **馆友銳評 / 道場觀察**（學 KDTI「馆友锐评」） — 朋友視角吐槽
7. **服藥指南 / 修行處方**（學 KDTI「服药指南」） — 諷刺式建議
8. **剋星型** + **最佳搭檔型**（一句原因）
9. **名人對應**：歷史人物（武藏/卜傳/龍馬）+ 漫畫角色（鬼滅/劍心/赤胴鈴之助）
10. **職業病診斷** + **段位演化**（初段→三段→五段人格可能變化）
11. **道場戀愛相性**（最搭 / 最雷型，18+ 幽默彩蛋）+ **預寫分享文案**（學 KDTI 一鍵複製）
12. **⭐ 劍道六技雷達圖**（新增 v3）— 六邊形能力數值

---

## ⭐ 劍道六技雷達圖（v3 新增）

**目的**：每型一張獨一無二的六邊形能力圖，RPG 角色卡質感，**辨識度最高的視覺分享資產**。

### 六維度設計

| 維度 | 日文 | 含義 | 範圍 |
|---|---|---|---|
| **面打** | Men | 正面壓制、直給殺傷、主動攻擊力 | 1-10 |
| **小手** | Kote | 精細技術、狙擊出頭、反應速度 | 1-10 |
| **胴** | Dō | 反擊、變招、身體靈活度 | 1-10 |
| **氣合** | Kiai | 氣勢強度、心理壓迫感 | 1-10 |
| **間合** | Maai | 距離感、節奏判讀、戰術眼 | 1-10 |
| **殘心** | Zanshin | 收尾穩定、持續力、抗壓性 | 1-10 |

### 資料策略（推薦 MVP 選項 1）

| 選項 | 描述 | 複雜度 | 病毒性 |
|---|---|---|---|
| **1. 型 Preset（推薦）** | 16 型各預設一組六值，同型共享 | 低 | 中 — 圖形獨特但人人相同 |
| 2. 軸向映射 | 從使用者 4 軸分數算出 6 維，每人都不同 | 中 | 高 — 真正個人化 |
| 3. Hybrid | 型 baseline ± 個人分數 10% 微調 | 高 | 最高 — 兼顧型辨識 + 個人差異 |

**MVP 先採選項 1**，v2 升級至選項 3。

### 技術實作

| 場景 | 工具 | 原因 |
|---|---|---|
| 結果頁 UI | **Recharts `<RadarChart>`** | butoTaiwan 已用 React，互動性好 |
| Dynamic OG 圖卡 | **純 SVG `<polygon>` 自幹** | `@vercel/og` 不支援 canvas 圖表庫，必須用 SVG primitives |

兩個場景**共享同一組數據**（定義於 `lib/kendoti/types.ts` 的 `stats` 欄位），只是渲染方式不同。

### 資料層追加（lib/kendoti/types.ts）

```ts
export interface KendoTIType {
  code: string;          // AJRG
  nickname: string;      // KING
  name: string;          // 道場王者
  // ... 既有 11 欄
  stats: {
    men: number;         // 1-10
    kote: number;
    do: number;
    kiai: number;
    maai: number;
    zanshin: number;
  };
}
```

### SVG 六邊形實作骨架（給 components/kendoti/HexChart.tsx）

```tsx
// 六頂點座標：360° / 6 = 60° 間距
// value 1-10 映射到半徑
const axes = ['men', 'kote', 'do', 'kiai', 'maai', 'zanshin'];
const angle = (i: number) => (Math.PI * 2 * i) / 6 - Math.PI / 2;
const point = (i: number, value: number) => ({
  x: Math.cos(angle(i)) * value * 10,
  y: Math.sin(angle(i)) * value * 10,
});
// 渲染外框六邊形 grid + 數值 polygon + 頂點標籤
```

### 16 型能力數值草案（階段 1C 批量定稿時填完）

| 型 | Nickname | 面 | 小手 | 胴 | 氣合 | 間合 | 殘心 | 形狀特徵 |
|---|---|---|---|---|---|---|---|---|
| AJRG | KING | 8 | 7 | 7 | 7 | 9 | 9 | 均衡偏後段（全能王） |
| AJRH | BOSS | 9 | 8 | 7 | 6 | 10 | 6 | 前鋒尖 + 間合超強 |
| AJSG | MEN! | 10 | 3 | 4 | 8 | 6 | 6 | 面打極值單尖 |
| AJSH | SON | 9 | 4 | 5 | 10 | 4 | 3 | 熱血突出、殘心弱 |
| AKRG | SIFU | 6 | 9 | 7 | 5 | 10 | 9 | 後段雙峰（腦袋派） |
| AKRH | HUNT | 8 | 8 | 9 | 7 | 5 | 4 | 前中段尖（野獸） |
| AKSG | KIAI | 7 | 3 | 4 | 10 | 5 | 6 | 氣合獨尖 |
| AKSH | BAKA | 10 | 3 | 4 | 10 | 3 | 2 | 前段雙尖（燃燒型） |
| UJRG | 2DAN | 5 | 8 | 7 | 4 | 9 | 9 | 後段厚實（考試機） |
| UJRH | ZZZZ | 3 | 10 | 7 | 4 | 9 | 7 | 小手 + 間合雙尖 |
| UJSG | OYAJ | 6 | 7 | 6 | 7 | 8 | 9 | 穩定均衡偏後段 |
| UJSH | OKLA | 6 | 7 | 8 | 6 | 7 | 7 | 極均衡（全方位） |
| UKRG | NOZK | 4 | 7 | 6 | 6 | 8 | 10 | 殘心獨尖 |
| UKRH | LAST | 3 | 10 | 7 | 5 | 10 | 8 | 小手/間合雙十（狙擊手） |
| UKSG | BUDO | 5 | 6 | 5 | 9 | 7 | 10 | 氣合 + 殘心（傳統派） |
| UKSH | FOMO | 4 | 7 | 6 | 8 | 8 | 10 | 後段高（佛系氣場） |

（數值待階段 1C 最終校稿時由 Yao 親自複審）

---

## 目錄與路由（Next.js App Router）

```
app/kendoti/
  page.tsx                         # 入口 / 介紹 / 開始按鈕
  quiz/page.tsx                    # 客戶端 60 題流程（useState + localStorage）
  result/[type]/page.tsx           # 16 型結果頁（generateStaticParams）
  result/[type]/opengraph-image.tsx# 動態 OG (ImageResponse, 1200x630)
  compat/page.tsx                  # 剋星 / 搭檔 相性查詢表
  hall-of-fame/page.tsx            # 名人對應館（SEO 長尾詞入口）

lib/kendoti/
  questions.ts                     # 60 題題庫（含軸向、權重、題型標記）
  types.ts                         # 16 型完整定義（含 5 模組資料）
  scoring.ts                       # 四軸計分邏輯
  compatibility.ts                 # 剋星/搭檔/戀愛相性矩陣

components/kendoti/
  QuizCard.tsx                     # 單題卡片（Framer Motion 切換）
  ProgressBar.tsx                  # 進度條 + 軸向提示
  ResultHero.tsx                   # 型代碼大字首屏
  HexChart.tsx                     # ⭐ 劍道六技雷達圖（Recharts / SVG）
  ShareButtons.tsx                 # FB/LINE/Twitter/IG Story 分享
```

---

## 關鍵檔案修改清單

| 檔案 | 變更 |
|---|---|
| `package.json` | 新增 `@vercel/og` 依賴（ImageResponse 必備） |
| `components/Navbar.tsx` | 主選單加 `/kendoti` 入口（複用既有 hover 樣式） |
| `app/layout.tsx:22-55` | 沿用既有 metadata pattern，勿動 |
| `tailwind.config.ts:20-23` | 沿用既有 kendo-red/paper token，勿動 |

---

## 可複用既有程式碼

- **Form/state pattern**：`app/contact/page.tsx:6-8`, `app/subscribe/page.tsx:6-10` → Quiz state 照搬
- **Static params pattern**：`app/article/[slug]/page.tsx:12-14` → 16 型 result/[type] 照搬
- **Metadata pattern**：`app/article/[slug]/page.tsx:16-23` → 結果頁 SEO 照搬
- **ArticleCard 卡片樣式**：`components/ArticleCard.tsx` → ResultHero 複用邊框/漸層風格
- **Framer Motion**：已安裝 10.17，可直接用於題目切換動畫

---

## 實作階段 WBS（總工期 4-6 週）

| 階段 | 工時 | 交付 |
|---|---|---|
| 1. 資料層 | 4-6 天 | Jack 代筆 **45 題（3 選）**+ 16 型全欄位（含 Public Nickname）草稿 → Yao 審稿定版 |
| 2. Quiz UI | 2-3 天 | `/kendoti/quiz` 互動流程 + localStorage 續答 |
| 3. 結果頁 | 2 天 | `/kendoti/result/[type]` 16 頁 SSG |
| 4. 5 創意模組 | 3 天 | 相性矩陣、名人館、職業病、演化、戀愛相性 UI |
| 5. Dynamic OG | 1-2 天 | `opengraph-image.tsx` + `@vercel/og` 字型載入 |
| 6. SEO + 分享 | 1 天 | Metadata、JSON-LD、FB/LINE/Twitter/IG Story 分享按鈕 |
| 7. 驗收 + 上線 | 1 天 | Lighthouse、跨瀏覽器、分享圖卡實測 |

---

## 驗證方法（End-to-End）

1. `cd D:/YaoClaude/Repos/butoTaiwan && npm run dev`，走完 60 題 → 驗證型代碼計算正確（手算比對 3 組 edge case）
2. `npm run build` → 確認 16 型 result page 全部 SSG 成功（output 應有 16 個 static HTML）
3. 部署 preview 到 Vercel → 分別用 FB Debugger / Twitter Card Validator / LINE Messaging API preview 驗證 OG 動態圖卡
4. localStorage 測試：答到一半關頁面 → 重開瀏覽器能否續答
5. Lighthouse：Performance ≥ 90、Accessibility ≥ 95、SEO = 100
6. 實測裝置：iOS Safari、Android Chrome、桌面 Chrome / Firefox

---

## 風險與緩解

| 風險 | 緩解 |
|---|---|
| 題目不夠幽默 / 文化違和 | 階段 1 審稿後找 2-3 位實際劍友試填，收質化回饋再調 |
| `ImageResponse` 中文字型載入失敗 | 預先在 `opengraph-image.tsx` 用 `fetch` 載入 Noto Serif TC TTF；有風險即 fallback 靜態圖卡 |
| 16 型內容撐不起 5 模組（特別是道場戀愛）| 階段 1 先生第一型 AJRG 完整版做 template，確認內容密度可行再批量產 |
| SEO 收錄慢 | 結果頁 JSON-LD `Quiz` schema + Sitemap 主動推送 Google Search Console |

---

## 階段 1 執行順序（v2）

1. **AJRG template + Public Nickname 命名系統草案** — 先定調 16 個 public nickname 命名規則（自嘲 + 台灣劍道在地化），再做一型完整 11 欄內容作為密度樣本
2. **攻/受軸 12 題（3 選）** 供 Yao 審稿調語感
3. 審稿通過後批量產：剩餘 33 題 + 15 型全欄位

---

## v1 → v2 差異對照表

| 項目 | v1 | v2 |
|---|---|---|
| 題數 | 60 | **45**（12+11+11+11） |
| 每題選項 | 2 選 | **3 選**（含曖昧 ±1） |
| 型代碼 | 僅 4 軸字母 AJRG | **AJRG + Public Nickname 梗代碼 + 化身名**（三層命名） |
| 結果頁欄位 | 9 欄 | **11 欄**（加「馆友銳評」+「服藥指南」+「預寫分享文案」） |
| 總工期 | 4-6 週 | **3-5 週**（題數減少、結構更清晰） |

---

## Public Nickname 命名原則（重要）

參考 KDTI 爆紅關鍵：**梗代碼 > MBTI 式代碼**。

命名策略：
- 4 個英文/拼音字母（方便記憶、分享、變成 meme）
- 自嘲 > 自誇（KDTI 的 `FUCK`、`GTMD`、`KPI畜生` 都是貶義反而爆紅）
- 台灣劍道在地化詞彙優先（護具遺忘者、萬年二段、道場愛情）
- 避免簡體中國梗（GTMD、OJBK、LYBB）

備選命名池（階段 1 從中選 16 個對應）：
- `KNTN` 劍聖投胎 / `BLMC` 半身迷戀症 / `HMWN` 護面無能 / `TDNG` 段審查常客
- `MNED` 萬年二段 / `SNSH` 殘心忘我 / `KJKS` 稽古奇術 / `BHBD` 被動出手
- `RYRY` 熱血熔岩 / `DJLA` 道場戀愛 / `KOKN` 氣勢口腔炎 / `SBST` 試合迷戀症
- `GTJJ` 過頭熱心 / `FMHM` 防具面紐魔咒 / `KKYD` 快狠準狂 / `NSNS` 軟散散步派

（階段 1 由 Jack 依四軸特性精準對應，此處僅供風格參考）
