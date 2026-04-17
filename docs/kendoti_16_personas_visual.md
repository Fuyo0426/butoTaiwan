# kendoTI 16 人格視覺化規格 v4 · 浮誇化身版

> 交付:Jack & Harrison (L1)
> v4 · 2026-04-17
> 目的:Yao 用這份文件丟進 Midjourney / DALL-E / SDXL / 外包插畫師,生成 16 個人格全身角色插畫
> 對應:`Repos/butoTaiwan/lib/kendoti/data.ts`
> v4 重大變更:從「人類加招牌元素」→「**直接是該原型的化身**」
> 野獸 = 老虎 / 睡覺 = 趴地 / 佛系 = 佛 / 火山 = 噴發 / 少年 = 小朋友 / 國王 = 國王

---

## 設計哲學轉向:從「戴皇冠」到「就是國王」

**v3 問題**:扁平 low-poly 人物 + 2-3 個招牌元素,16 張並排仍像「穿道着的 16 個人」,辨識度不夠。

**v4 解方**:**角色直接變形成為該原型的化身**。該是老虎就畫老虎、該趴地就趴地、該是佛就是佛、該噴火山就噴火山、該是小朋友就是小朋友。

**核心原則**:
1. 如果某型有明確動物/神祇/物件原型 → **直接變形**成該原型(擬人化)
2. 如果某型有明確身體狀態 → **動作張到最大**(趴著睡就是真的趴著,不是靠著)
3. 如果某型有場景氛圍 → **氛圍物直接炸開**(火山噴發、旭日放射、佛光萬丈)
4. 扁平 low-poly 向量風格維持不變,浮誇但不寫實

---

## 系列統一視覺規範(全 16 張共用)

### 風格基底維持不變

- 扁平 low-poly 向量幾何(不寫實、不 3D、不浮世繪)
- 純米白 #F8F6F1 背景
- 地面淺灰橢圓投影
- 頭身比 3.5-4(近 Q 版)
- MBTI 海報文法

### 浮誇化程度分級

| 等級 | 定義 | v4 型別 |
|---|---|---|
| **L0 標準人** | 人類樣 + 招牌元素 | 01 KING, 09 2DAN, 11 OYAJ, 15 BUDO |
| **L1 戲劇化人** | 人類但姿勢/表情/場景誇大 | 03 MEN!, 04 SON, 08 BAKA, 12 OKLA |
| **L2 原型融合** | 人類 + 部分變形(獸耳/獸尾/光環) | 02 BOSS, 05 SIFU, 07 KIAI, 10 ZZZZ, 14 LAST |
| **L3 完全化身** | **直接是該原型** | 06 HUNT(老虎人)、13 NOZK(僧侶)、16 FOMO(佛像) |

### 色彩系統(4 群組識別,不變)

| 群組 | 前綴 | 成員 | 主色 |
|---|---|---|---|
| **AJ 攻術** | A+J | 01-04 KING/BOSS/MEN!/SON | `#8B1A1A` 朱紅 |
| **AK 攻氣** | A+K | 05-08 SIFU/HUNT/KIAI/BAKA | `#C26A2E` 土橙 |
| **UJ 受術** | U+J | 09-12 2DAN/ZZZZ/OYAJ/OKLA | `#2F4858` 鐵青 |
| **UK 受氣** | U+K | 13-16 NOZK/LAST/BUDO/FOMO | `#4D6B4A` 竹綠 |

### 🎯 16 型浮誇化身總表(v4 核心)

| # | 代碼 | 化身 | 浮誇級 | 核心變形 |
|---|---|---|---|---|
| 01 | AJRG | **KING** | L0 | 完整國王造型:大皇冠 + 長紅披風拖地 + 王座背景剪影 |
| 02 | AJRH | **BOSS** | L2 | 黑道大哥臉:墨鏡 + 嘴叼煙管 + 金牙 + 西裝翻領套在道着外 |
| 03 | AJSG | **MEN!** | L1 | 整個畫面被「面」字爆破,背後放射「面」字幾何圍圈 |
| 04 | AJSH | **SON** | L1 | 真的是小朋友(10-12 歲),身體小但氣合聲超大,誇張張嘴 |
| 05 | AKRG | **SIFU** | L2 | 諸葛亮版:綸巾 + 羽扇 + 長袍披在道着外,手持兵法書 |
| 06 | AKRH | **HUNT** | **L3** | **直接變成擬人化老虎**(虎頭人身),穿道着,虎尾從袴下伸出 |
| 07 | AKSG | **KIAI** | L1 | 整個頭頂變成噴發中的火山,熔岩從面內噴出,臉紅發熱 |
| 08 | AKSH | **BAKA** | L1 | 獨眼眼罩 + 繃帶纏滿手腳 + 背後紫色扭曲風暴 + 暗黑羽翼半展 |
| 09 | UJRG | **2DAN** | L0 | 站在一大堆段審證書堆上,胸前滿滿段審章,頭頂文憑光環 |
| 10 | UJRH | **ZZZZ** | **L3** | **直接趴在地上睡覺**,竹劍當枕頭,頭頂 ZZZ 超大,口水滴 |
| 11 | UJSG | **OYAJ** | L0 | 老人化到底:全白頭髮鬍子 + 腰微駝 + 老花眼鏡 + 手提護具袋鼓起 |
| 12 | UJSH | **OKLA** | L1 | 夾腳拖配道着 + 珍奶 + 台灣國旗徽章 + 台客風聳肩翻白眼 |
| 13 | UKRG | **NOZK** | **L3** | **直接是和尚**:剃度光頭 + 袈裟披在道着外 + 佛珠滿身 + 竹劍當禪杖 |
| 14 | UKRH | **LAST** | L2 | 仙人版:白鬍長過胸 + 飄在雲上 + 身後兩朵大雲 + 手持漂浮竹劍 |
| 15 | UKSG | **BUDO** | L0 | 宗師版:長白髮過肩 + 長白鬍 + 大型武道掛軸背景 + 正坐跪姿捧劍 |
| 16 | UKSH | **FOMO** | **L3** | **直接是一尊佛像**:盤腿打坐 + 頭頂巨大光環放光 + 佛像手印 + 竹劍橫於腿上 |

### 必要統一元素(不變)

1. 劍道服 + 袴(依群組主色,可以用披風/袈裟/綸巾等**蓋在外面**)
2. 竹劍(shinai)某處出現
3. 面(men)某處出現(戴著 / 拿著 / 腳邊 / 獸頭取代)
4. 地面淺灰橢圓投影
5. 純米白 #F8F6F1 背景

### 必避雷區

- 超寫實照片風、3D 渲染
- 血、暴力、色情、商標、文字
- 多人構圖(L3 化身型例外,該是誰就是誰)
- 浮誇但不能失去「能打劍道」的合理性(佛像手上還是要有劍)

### 推薦 AI 生圖工具

| 工具 | 推薦參數 | 備註 |
|---|---|---|
| **Midjourney v6** | `flat low-poly vector character, MBTI style, exaggerated transformation --ar 3:4 --style raw --stylize 250 --v 6` | 浮誇版 stylize 拉到 250 |
| **DALL-E 3** | 開頭寫 `Exaggerated character transformation, flat low-poly vector, MBTI style, white background` | ChatGPT Plus |
| **SDXL / ComfyUI** | 模型 `dreamshaper-xl` + LoRA `vector-illustration-style` | 本地批次 |
| **外包 Fiverr** | 搜 "MBTI style character illustrator" | 單張 $20-50 |

---

# 16 型詳細規格(浮誇版)

---

## 01 · AJRG / KING / 道場王者

**四軸**:攻(A) + 術(J) + 理(R) + 守(G)
**群組色**:🔴 AJ 攻術 · `#8B1A1A` 朱紅
**浮誇級**:**L0 · 完整國王造型**
**標語**:你是那種打一場就會有人默默截圖上傳的劍士

### 🎯 浮誇變形
**直接就是一位國王,只是手拿竹劍、戴著劍道面**。大皇冠、長披風、王座背景一個不能少。

### 視覺方向
- 姿勢:昂首站姿,竹劍斜立地面(**像拿權杖一樣**)
- 面的狀態:戴著面,但面金閃亮如王冠裝飾
- 身上裝備:
  - 👑 **巨大金色皇冠**(5 個大尖 + 紅寶石,扁平幾何)戴在面頂
  - 🧥 **及地紅色長披風**(內裡金邊,扁平幾何垂墜感)
  - 💠 **金色王冠胸章** + 厚重金項鍊
  - 🪑 **背景有王座剪影**(扁平幾何,朱紅底金邊)

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位劍道國王全身入鏡,
頭身比 3.5,極度威嚴王者氣質,
身穿深朱紅 #8B1A1A 劍道服與黑袴,
雙手握黑色竹劍立於地面如權杖,身體直立挺胸,
戴著黑色劍道面,面頂戴巨大金色扁平皇冠(5 個大尖加紅寶石),
肩上披著及地朱紅色長披風內裡金邊(垂墜到腳踝),
胸前掛金色王冠幾何胸章加厚重金項鍊,
背景後方扁平幾何王座剪影(朱紅底金邊),
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色深朱紅 + 黑,皇冠金 #D4A73A,王座朱紅金,
風格參考 16 MBTI 人格圖,3:4 直式構圖,浮誇王者登場。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a kendo KING full body, 3.5 head ratio, extreme royal authoritative aura,
wearing deep crimson #8B1A1A kendogi and black hakama,
both hands holding black shinai planted on ground like a royal scepter, body upright,
wearing black kendo men helmet with a massive flat golden crown (5 large spikes with ruby gems) on top,
draped in floor-length crimson royal cape with gold-trim interior (flowing to ankles),
thick gold chain and flat golden crown emblem on chest,
a flat geometric throne silhouette (crimson with gold trim) in background,
plain #F8F6F1 off-white background, gray elliptical ground shadow, flat lighting,
deep crimson + black primary, gold #D4A73A crown and throne accents,
16 MBTI poster reference, 3:4 portrait, dramatic king entrance.
```

### 六技
面 8 / 小手 7 / 胴 7 / 氣合 7 / 間合 9 / 殘心 9

---

## 02 · AJRH / BOSS / 試合大魔王

**四軸**:攻(A) + 術(J) + 理(R) + 變(H)
**群組色**:🔴 AJ 攻術 · `#8B1A1A` 朱紅
**浮誇級**:**L2 · 黑道大哥融合**
**標語**:練習 70 分,比賽 120 分

### 🎯 浮誇變形
**黑道大哥穿道着**。墨鏡遮臉、嘴叼煙管、西裝領套在道着外、金鍊粗到誇張、旁邊有保鑣氣場的暗影。

### 視覺方向
- 姿勢:雙手插袖,身體微後仰跩姿,竹劍扛右肩或夾腋下
- 面的狀態:拿在左手(露臉)戴黑色墨鏡叼煙管
- 身上裝備:
  - 🕶️ **大黑色墨鏡**(遮半臉)
  - 🚬 **嘴叼扁平幾何煙管**(冒幾何化白煙)
  - 💼 **黑色西裝翻領披在道着領外**(幾何化)
  - 💰 **超粗金鍊**(4-5 節大金塊)
  - 🎽 腰間紅白襷斜跨
  - 🌑 **身後黑色扁平陰影剪影**(保鑣氣場)

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位劍道黑幫大哥全身入鏡,
頭身比 3.5,黑道大哥跩姿氣場,身穿深朱紅 #8B1A1A 劍道服與黑袴,
黑色西裝翻領披覆道着領外,身體微後仰雙手插袖,
黑色竹劍扛右肩,劍道面拿在左手,
戴大黑色扁平墨鏡遮半臉,嘴叼扁平幾何煙管冒白煙,
胸前掛超粗金色扁平幾何鍊條(4-5 節大金塊),腰間斜跨紅白襷,
身後 2-3 個黑色扁平陰影剪影(保鑣氣場),
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色深朱紅 + 黑,西裝領深黑,金鍊金 #D4A73A,煙白色,
風格參考 16 MBTI 人格圖,3:4 直式,黑道大哥跩姿。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a kendo yakuza-boss full body, 3.5 head ratio, mafia-boss swagger,
wearing deep crimson #8B1A1A kendogi and black hakama,
black suit lapels draped over kendogi collar (flat geometric),
body slightly leaning back both hands tucked in sleeves,
black shinai slung over right shoulder, men helmet in left hand,
wearing large flat black sunglasses covering half face,
smoking a flat geometric pipe emitting white smoke puff,
thick flat golden chain (4-5 large gold blocks) on chest, red-white diagonal tasuki at waist,
2-3 flat black shadow silhouettes behind figure (bodyguard aura),
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
deep crimson + black primary, suit-lapel black, gold #D4A73A chain, white smoke,
16 MBTI poster reference, 3:4 portrait, mafia-boss swagger pose.
```

### 六技
面 9 / 小手 8 / 胴 7 / 氣合 6 / 間合 10 / 殘心 6

---

## 03 · AJSG / MEN! / 面打狂熱者

**四軸**:攻(A) + 術(J) + 情(S) + 守(G)
**群組色**:🔴 AJ 攻術 · `#8B1A1A` 朱紅
**浮誇級**:**L1 · 面字炸開全畫面**
**標語**:三本打突只記得 MEN,但 MEN 打得又直又狠

### 🎯 浮誇變形
**整個背景被「面」字爆破**。背後放射狀圍一圈扁平化「面」字(像宗教圖騰),頭頂一個超大「面」字在發光。

### 視覺方向
- 姿勢:飛び込み面跳躍定格,雙腳離地誇張高
- 面的狀態:戴著面,面金爆發出紅色光束
- 身上裝備:
  - 🌀 **頭頂一個超巨大「面」字**(發紅光)
  - ⭕ **背後放射環 8-12 個小「面」字**(像宗教曼陀羅)
  - 💥 **爆炸火焰幾何 5 瓣**
  - ➡️ **身後 5-7 條粗速度線**

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位劍道面打狂熱者全身入鏡,
頭身比 3.5,飛身躍進熱血爆發,身穿深朱紅 #8B1A1A 劍道服與黑袴,
雙手高舉黑色竹劍過頭劈擊,雙腳誇張離地跳躍定格,
戴著黑色劍道面,面金正向鏡頭噴出紅色光束,
頭頂漂浮一個超巨大扁平書法體「面」字符(發紅光),
背後放射環狀排列 8-12 個小「面」字(像曼陀羅圖騰),
身後 5 瓣扁平紅橘爆炸火焰幾何,
身後 5-7 條粗深灰速度線,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色深朱紅 + 黑,火焰紅橘,光束朱紅發光,
風格參考 16 MBTI 人格圖,3:4 直式,面字宗教感爆發。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a kendo MEN-strike fanatic full body, 3.5 head ratio,
mid-air leaping attack with explosive passion,
wearing deep crimson #8B1A1A kendogi and black hakama,
both hands raising black shinai overhead for MEN strike,
both feet dramatically airborne, wearing black men with red light beams from men-gane,
a gigantic calligraphic 「面」 character floating above head glowing red,
8-12 smaller 「面」 characters radiating in a mandala ring behind figure,
5 flat red-orange explosion flame polygons behind,
5-7 thick dark gray motion lines,
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
deep crimson + black primary, red-orange flames, glowing crimson beams,
16 MBTI poster reference, 3:4 portrait, religious-zealot MEN explosion pose.
```

### 六技
面 10 / 小手 5 / 胴 6 / 氣合 10 / 間合 7 / 殘心 7

---

## 04 · AJSH / SON / 熱血少年篇

**四軸**:攻(A) + 術(J) + 情(S) + 變(H)
**群組色**:🔴 AJ 攻術 · `#8B1A1A` 朱紅
**浮誇級**:**L1 · 真的是小朋友**
**標語**:每次試合都像最後一戰,但明天還是會進道場

### 🎯 浮誇變形
**年齡直接拉到 10-12 歲小學生**。身體比例小(3 頭身)、道着寬鬆、大眼睛、誇張張嘴氣合、聲音大到臉紅。

### 視覺方向
- 姿勢:小孩跳起握拳,竹劍斜舉,雙腳離地
- 面的狀態:素面(小孩戴面太大),面放腳邊或背後
- 身上裝備:
  - 👶 **3 頭身小朋友比例**(小身體大頭)
  - 🎌 額頭紅色鉢卷(相對頭太大)
  - ☀️ 背後放射旭日 12 條線
  - 👊 握拳高舉
  - 😤 誇張張嘴氣合到臉紅
  - 👀 **超大漫畫眼**(發光水汪汪)

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位劍道小學生少年全身入鏡,
頭身比 3(小朋友比例小身體大頭),10-12 歲熱血小孩氣質,
身穿寬鬆深朱紅 #8B1A1A 劍道服與黑袴(衣服對身體顯大),
右手高舉黑色竹劍斜指前方,左手握拳舉起,雙腳跳起離地,
劍道面放腳邊(素面狀態),露出整張臉,
超大漫畫水汪汪眼睛發光,誇張張大嘴氣合到臉紅,
額頭綁朱紅鉢卷(相對頭顯大),
身後扁平幾何放射旭日 12 條線(淡紅),
胸前斜繫朱紅襷帶,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色深朱紅 + 黑,旭日淡紅,臉紅粉,
風格參考 16 MBTI 人格圖,3:4 直式,超年輕小孩熱血爆發。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a kid kendo practitioner full body, 3 head ratio (small-body-big-head kid proportion),
10-12 years old passionate child aura,
wearing oversized deep crimson #8B1A1A kendogi and black hakama (clothes too big for body),
right hand raising black shinai diagonally forward, left hand clenched fist raised,
both feet jumping airborne,
men helmet on ground by feet (unmasked), full face visible,
huge shiny sparkling manga eyes, mouth dramatically wide open shouting kiai face flushed red,
deep crimson hachimaki tied around forehead (appearing large against small head),
flat geometric radiating sunburst 12 rays (pale red) behind figure,
crimson diagonal tasuki across chest,
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
deep crimson + black primary, pale red sunburst, pink flushed cheeks,
16 MBTI poster reference, 3:4 portrait, super-young kid explosive passion pose.
```

### 六技
面 8 / 小手 6 / 胴 7 / 氣合 10 / 間合 7 / 殘心 6

---

## 05 · AKRG / SIFU / 道場孔明

**四軸**:攻(A) + 氣(K) + 理(R) + 守(G)
**群組色**:🟠 AK 攻氣 · `#C26A2E` 土橙
**浮誇級**:**L2 · 諸葛亮融合**
**標語**:打你之前已經預測你下三手

### 🎯 浮誇變形
**諸葛亮版劍道家**。頭戴綸巾(代替面)、手持羽扇(代替竹劍揮動)、身披道袍披在道着外、腰繫兵法書。

### 視覺方向
- 姿勢:一手搖羽扇,另一手持竹劍垂於身側,仙風道骨
- 面的狀態:**換成綸巾**(黑色高冠)掛頸或腋下
- 身上裝備:
  - 👳 **黑色綸巾**(扁平方形冠)
  - 🪶 **手持白羽扇**(扁平幾何羽毛片狀)
  - 👘 **土橙色長袍披在道着外**(垂到膝蓋)
  - 📜 腰間繫 2-3 卷兵法竹簡(棕色扁平筒)
  - 🤓 小圓眼鏡
  - 💭 頭頂思考泡泡內含 3x3 棋盤

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位諸葛亮版劍道軍師全身入鏡,
頭身比 3.5,仙風道骨軍師氣質,
身穿土橙色 #C26A2E 劍道服與深灰袴,外披同色土橙長袍到膝,
頭戴黑色扁平方形綸巾冠,
右手搖扁平幾何白羽扇,左手垂持黑色竹劍於身側,
腰間繫 2-3 卷棕色扁平兵法竹簡,
戴小圓金屬框眼鏡,頭頂漂浮雲朵思考泡泡內含 3x3 棋盤格,
劍道面掛在脖子後,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色土橙 + 深灰,綸巾深黑,羽扇白,竹簡棕 #8B5A2B,
風格參考 16 MBTI 人格圖,3:4 直式,諸葛亮軍師 pose。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a Zhuge-Liang-fused kendo strategist full body, 3.5 head ratio,
serene Taoist-sage strategist aura,
wearing burnt orange #C26A2E kendogi and dark gray hakama, long burnt-orange robe draped over to knees,
wearing a black flat geometric lunjin scholar headdress,
right hand waving a flat geometric white feather fan, left hand holding black shinai at side,
2-3 brown rolled war-strategy bamboo scrolls tied at waist,
small round metal-frame glasses, a flat cloud thought-bubble with 3x3 go-board above head,
men helmet hanging behind neck,
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
burnt orange + dark gray primary, black lunjin, white fan, brown #8B5A2B scrolls,
16 MBTI poster reference, 3:4 portrait, Zhuge-Liang strategist pose.
```

### 六技
面 7 / 小手 9 / 胴 8 / 氣合 6 / 間合 10 / 殘心 8

---

## 06 · AKRH / HUNT / 野獸先鋒型 🐅

**四軸**:攻(A) + 氣(K) + 理(R) + 變(H)
**群組色**:🟠 AK 攻氣 · `#C26A2E` 土橙
**浮誇級**:**L3 · 完全變成擬人化老虎**
**標語**:你還沒準備好我就撲上來

### 🎯 浮誇變形
**直接是一隻擬人化老虎穿道着**。虎頭人身、橙黑條紋毛、虎尾從袴下伸出、虎爪代替手指、獠牙露出。

### 視覺方向
- 姿勢:蹲踞四肢著地起跑狀 or 直立張牙舞爪
- 面的狀態:**沒有面,就是虎頭**(虎頭本身就是面)
- 身上裝備:
  - 🐅 **虎頭**(扁平幾何化的虎臉,大黃色眼睛,獠牙露出)
  - 🟧 **橙黑條紋毛覆蓋手臂與腳**
  - 🐾 **虎爪代替手**(扁平幾何爪形,持竹劍)
  - 🌀 **虎尾從袴後伸出**(扁平條紋長尾)
  - 💨 腳下塵土揚起線
  - 👕 身穿土橙色劍道服與黑袴(與毛融合)

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一隻擬人化老虎劍道家全身入鏡,
頭身比 3.5,蓄勢撲襲野獸氣質,
扁平幾何虎頭人身:虎頭大黃色眼睛獠牙外露,身體穿土橙色 #C26A2E 劍道服與黑袴,
手臂與腿露出部分有橙黑虎紋條紋毛,
虎爪代替手(扁平幾何爪形)握黑色竹劍,
袴後伸出長長扁平虎尾帶條紋,
身體深度前傾蹲踞起步姿勢,竹劍斜持右下,
腳下 5-6 條扁平幾何塵土揚起弧線,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色土橙 + 黑虎紋 + 黃眼,虎毛橙黑,
風格參考 16 MBTI 人格圖,3:4 直式,擬人化老虎撲襲 pose。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
an anthropomorphic tiger kendo fighter full body, 3.5 head ratio,
coiled pouncing feral energy,
flat geometric tiger head with big yellow eyes and exposed fangs on human body,
body wearing burnt orange #C26A2E kendogi and black hakama,
arms and legs showing orange-black tiger-striped fur,
tiger paw-claws (flat geometric) instead of hands gripping black shinai,
long flat striped tiger tail extending from behind hakama,
body deeply crouched in launch stance, shinai diagonally lowered right,
5-6 flat geometric dust streaks at feet,
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
burnt orange + black stripes + yellow eyes primary, orange-black fur,
16 MBTI poster reference, 3:4 portrait, anthropomorphic tiger pounce pose.
```

### 六技
面 8 / 小手 10 / 胴 7 / 氣合 8 / 間合 9 / 殘心 5

---

## 07 · AKSG / KIAI / 氣合熔岩 🌋

**四軸**:攻(A) + 氣(K) + 情(S) + 守(G)
**群組色**:🟠 AK 攻氣 · `#C26A2E` 土橙
**浮誇級**:**L1 · 頭就是活火山**
**標語**:氣合聲傳到隔壁道場

### 🎯 浮誇變形
**整個頭部變成活火山在噴發**。面上方火山口噴出熔岩,岩漿從面金縫隙流出,身周紅光四射,地面腳邊有岩漿池。

### 視覺方向
- 姿勢:雙手握竹劍中段構え,胸口上挺吼叫
- 面的狀態:戴著面,但**面頂變成火山口**在噴發
- 身上裝備:
  - 🌋 **頭頂火山口大噴發**(扁平幾何,熔岩噴到半空)
  - 🔥 **橘紅熔岩從面金下方縫隙流出**(流到胸前)
  - 💢 身周 5-7 條波浪熱氣
  - 📣 口前聲波扇 4-5 條
  - 🟥 **腳邊岩漿池幾何**(扁平橘紅漸層)

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位劍道火山氣合型全身入鏡,
頭身比 3.5,頭頂變成噴發火山,
身穿土橙色 #C26A2E 劍道服與深灰袴,
雙手握黑色竹劍呈中段構え胸口挺起,
戴著黑色劍道面,面頂扁平幾何火山口大噴發(熔岩扁平幾何噴到半空),
橘紅扁平熔岩從面金下方縫隙流出延伸到胸前,
面前方 4-5 條扁平扇形聲波弧線,
身周 5-7 條橘紅波浪熱氣線,
腳邊 1-2 塊扁平橘紅岩漿池幾何,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色土橙 + 黑 + 橘紅熔岩,聲波深橙,
風格參考 16 MBTI 人格圖,3:4 直式,頭頂火山大噴發。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a kendo volcano-kiai type full body, 3.5 head ratio,
head becoming an actively erupting volcano,
wearing burnt orange #C26A2E kendogi and dark gray hakama,
both hands on black shinai in chudan-no-kamae, chest thrust out,
wearing black men with a flat geometric volcano crater erupting from the top (lava spewing high),
orange-red flat lava flowing out from men-gane lower gaps down to chest,
4-5 flat fan-shaped sound wave arcs in front of face,
5-7 orange-red wavy heat lines encircling body,
1-2 flat orange-red lava pool geometric shapes at feet,
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
burnt orange + black + orange-red lava primary, deep orange sound waves,
16 MBTI poster reference, 3:4 portrait, erupting-volcano-head pose.
```

### 六技
面 9 / 小手 7 / 胴 8 / 氣合 10 / 間合 7 / 殘心 7

---

## 08 · AKSH / BAKA / 燃燒中二病 🔥

**四軸**:攻(A) + 氣(K) + 情(S) + 變(H)
**群組色**:🟠 AK 攻氣 · `#C26A2E` 土橙
**浮誇級**:**L1 · 中二全套大爆發**
**標語**:我這招自創必殺技叫...(對手已經打完了)

### 🎯 浮誇變形
**中二病全套配件**:獨眼眼罩 + 繃帶纏滿手腳 + 背後巨大紫黑風暴 + 暗黑羽翼半展 + 身後漂浮奇怪封印符。

### 視覺方向
- 姿勢:誇張自創構え,竹劍橫持,左手結劍印,身體後仰張狂
- 面的狀態:戴著面,面金右半被眼罩蓋住
- 身上裝備:
  - 🩹 **黑色大眼罩**(蓋住面金右半)
  - 💪 **繃帶纏滿雙手雙腳**(螺旋纏至肘與膝)
  - 🦇 **背後黑紫色半展羽翼**(扁平幾何 5 片尖羽)
  - 🌀 **身周漂浮 3-5 個奇怪符文封印**(扁平幾何圓形 + 符號)
  - 🔥 背後紫黑風暴漩渦幾何

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位劍道中二病全套爆發型全身入鏡,
頭身比 3.5,誇張中二狂妄姿態,
身穿土橙色 #C26A2E 劍道服與深灰袴,
右手橫持黑色竹劍於身前,左手捏奇怪劍印手勢高舉,身體後仰張狂,雙腳交錯,
戴著黑色劍道面,面金右半被黑色大眼罩遮蓋(加黑繩繞頭),
雙手雙腳螺旋纏繞白色繃帶直到肘與膝,
背後展開黑紫色扁平半展羽翼(5 片尖羽幾何),
身周漂浮 3-5 個扁平奇怪符文封印(圓形加符號),
背後紫黑色風暴漩渦幾何,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色土橙 + 深灰 + 紫黑,眼罩黑,繃帶白,羽翼黑紫,符文紫,
風格參考 16 MBTI 人格圖,3:4 直式,中二病全套大爆發。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a full-spec chuunibyou kendo type full body, 3.5 head ratio,
exaggerated cocky cool pose,
wearing burnt orange #C26A2E kendogi and dark gray hakama,
right hand holding black shinai horizontally in front,
left hand forming weird sword-seal raised high, body leaning back dramatically legs split,
wearing black men with right half of men-gane covered by large black eye-patch (with black cord around head),
white bandages spiral-wrapping both arms and legs up to elbows and knees,
dark purple-black half-spread flat wings behind figure (5 pointed feather polygons),
3-5 flat weird rune-seal circles floating around body,
purple-black storm vortex geometric behind,
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
burnt orange + dark gray + purple-black primary, black patch + white bandages + purple-black wings + purple runes,
16 MBTI poster reference, 3:4 portrait, full-chuunibyou explosion pose.
```

### 六技
面 8 / 小手 6 / 胴 7 / 氣合 9 / 間合 6 / 殘心 5

---

## 09 · UJRG / 2DAN / 萬年二段達人

**四軸**:受(U) + 術(J) + 理(R) + 守(G)
**群組色**:🔵 UJ 受術 · `#2F4858` 鐵青
**浮誇級**:**L0 · 段審章滿身**
**標語**:段審官很愛我,試合卻老是一回戰

### 🎯 浮誇變形
**站在一大堆段審證書堆上**,胸前全是段審章滿滿滿,頭頂文憑光環,背後「二段」兩字巨大。

### 視覺方向
- 姿勢:完美中段構え,站在證書堆頂
- 面的狀態:戴著面
- 身上裝備:
  - 📜 **腳下 5-7 張段審證書堆**(扁平米色長方形疊起)
  - 🎖️ **胸前 8-10 枚段審章**(扁平幾何圓章排滿胸)
  - 📃 **頭頂漂浮「二段」巨大書法字**(光環狀)
  - 🏆 **背後扁平幾何大獎章**(幾何光芒放射)

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位劍道萬年二段型全身入鏡,
頭身比 3.5,站在證書堆上無表情氣質,
身穿鐵青色 #2F4858 劍道服與黑袴,
雙手標準握黑色竹劍呈完美中段構え,雙腳穩站在一堆 5-7 張扁平米色段審證書上,
戴著黑色劍道面,
胸前密集別 8-10 枚扁平幾何段審章圓形(金邊紅底),
頭頂漂浮巨大「二段」扁平書法字(光環狀發光),
身後扁平幾何大獎章加放射光芒,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色鐵青 + 黑,證書米色,段審章金紅,獎章金,
風格參考 16 MBTI 人格圖,3:4 直式,段審章滿身 pose。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a kendo eternal-2nd-dan type full body, 3.5 head ratio,
expressionless standing on a stack of certificates,
wearing steel blue #2F4858 kendogi and black hakama,
both hands on black shinai in flawless chudan, feet firmly on a stack of 5-7 flat beige dan-审 certificates,
wearing black men helmet,
8-10 flat geometric circular dan-审 medallions (gold-rim red-base) densely pinned on chest,
a giant 「二段」 flat calligraphy character floating above head glowing like a halo,
a flat geometric large trophy medallion with radiating light rays behind figure,
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
steel blue + black primary, beige certificates + gold-red medallions + gold trophy,
16 MBTI poster reference, 3:4 portrait, certificate-pile-mountain pose.
```

### 六技
面 6 / 小手 6 / 胴 6 / 氣合 5 / 間合 9 / 殘心 10

---

## 10 · UJRH / ZZZZ / 裝死觀察者 💤

**四軸**:受(U) + 術(J) + 理(R) + 變(H)
**群組色**:🔵 UJ 受術 · `#2F4858` 鐵青
**浮誇級**:**L3 · 直接趴地睡覺**
**標語**:看起來像躺著實際上在掃描你

### 🎯 浮誇變形
**整個人趴在地上側躺睡覺**,竹劍當枕頭,頭頂 ZZZ 超大,嘴角口水滴,但一眼瞇開(眯著觀察)。

### 視覺方向
- 姿勢:**側躺趴地**,頭枕在竹劍上,手托腮
- 面的狀態:面放旁邊
- 身上裝備:
  - 💤 **頭頂 3 個超大 Z 符號**(大中小,淺藍色扁平)
  - 💧 **嘴角口水滴**(扁平水滴幾何)
  - 👁️ **一眼閉一眼瞇開**(另一眼在「裝睡觀察」)
  - 🌀 **身旁漂浮小放大鏡 + 問號幾何**(表示在觀察)
  - 😴 道着有點皺

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位劍道裝死觀察者全身入鏡,
頭身比 3.5,側躺趴地睡覺姿勢,
身穿鐵青色 #2F4858 劍道服與黑袴(有點皺),
整個人側躺在地上,頭枕在黑色竹劍上,左手托腮,右手自然垂放,
劍道面放身旁地上,
一眼閉一眼眯開(裝睡實在觀察),嘴角有小口水滴扁平水滴幾何,
頭頂漂浮 3 個超大淺藍色扁平 Z 符號大中小排列,
身旁漂浮扁平小放大鏡加問號幾何,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影延伸到側躺身形,平光,
主色鐵青 + 黑,Z 淺藍,口水淺藍,
風格參考 16 MBTI 人格圖,3:4 直式,側躺裝睡 pose。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a kendo play-dead observer full body, 3.5 head ratio,
lying on ground side-sleeping pose,
wearing steel blue #2F4858 kendogi and black hakama (slightly wrinkled),
entire body lying sideways on the ground, head resting on black shinai as pillow,
left hand propping cheek, right hand relaxed,
men helmet placed on ground beside,
one eye closed one eye squinted-open (pretending to sleep while observing),
a small flat water-drop drool at mouth corner,
3 giant flat pale-blue Z symbols (large medium small) floating above head,
a small flat magnifying glass and question-mark geometric floating nearby,
plain #F8F6F1 background, gray elliptical ground shadow extending to lying figure, flat lighting,
steel blue + black primary, pale blue Z + drool,
16 MBTI poster reference, 3:4 portrait, lying-down fake-sleep pose.
```

### 六技
面 6 / 小手 9 / 胴 7 / 氣合 4 / 間合 10 / 殘心 7

---

## 11 · UJSG / OYAJ / 道場老爸型 👴

**四軸**:受(U) + 術(J) + 情(S) + 守(G)
**群組色**:🔵 UJ 受術 · `#2F4858` 鐵青
**浮誇級**:**L0 · 老化到底**
**標語**:後輩出包時會默默幫收拾護具

### 🎯 浮誇變形
**完全老人化**:全白頭髮白鬍子 + 腰微駝 + 竹劍當拐杖撐著 + 手提好幾袋護具袋鼓起 + 額頭三條皺紋。

### 視覺方向
- 姿勢:稍駝背站姿,竹劍當拐杖
- 面的狀態:面拿在手中
- 身上裝備:
  - 👴 **全白頭髮加白鬍子**(長及胸)
  - 🪪 **額頭 3 條深色皺紋幾何**
  - 🥽 **脖掛老花眼鏡**(兩個圓鏡片)
  - 🎒 **雙手各提 1 個鼓起的藏青護具袋**(扁平鼓包幾何)
  - 🦯 **竹劍當拐杖撐地**
  - 🧓 腰微駝

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位劍道老爸老人型全身入鏡,
頭身比 3.5,溫暖長者微彎腰微笑,
身穿鐵青色 #2F4858 劍道服與黑袴,
全白頭髮加白色扁平長鬍子及胸,額頭 3 條深色扁平皺紋幾何,
左手提鼓起的藏青色扁平護具袋,右手撐著黑色竹劍當拐杖,身體稍駝,
脖子掛扁平老花眼鏡兩個圓鏡片加繩,
劍道面放在左手護具袋旁地上,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色鐵青 + 黑,鬍髮全白,護具袋藏青 #1F3A5F,
風格參考 16 MBTI 人格圖,3:4 直式,老人駝背 pose。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a kendo old-dad elder full body, 3.5 head ratio,
warm elderly slightly-hunched smiling aura,
wearing steel blue #2F4858 kendogi and black hakama,
fully white hair and long flat white beard reaching chest, 3 dark flat wrinkle lines on forehead,
left hand carrying a puffy navy flat bogu bag, right hand leaning on black shinai as walking cane, body slightly stooped,
flat reading glasses hanging from neck (two circular lenses with cord),
men helmet placed on ground next to bogu bag,
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
steel blue + black primary, all white hair-beard, navy #1F3A5F bag,
16 MBTI poster reference, 3:4 portrait, elderly hunched-caretaker pose.
```

### 六技
面 7 / 小手 7 / 胴 7 / 氣合 7 / 間合 8 / 殘心 9

---

## 12 · UJSH / OKLA / OK 啦台灣人 🧋

**四軸**:受(U) + 術(J) + 情(S) + 變(H)
**群組色**:🔵 UJ 受術 · `#2F4858` 鐵青
**浮誇級**:**L1 · 台客滿點**
**標語**:試合開始前還在跟對手聊天

### 🎯 浮誇變形
**台客裝備全開**:夾腳拖配道着 + 珍奶大杯 + 台灣旗徽章 + 翻白眼聳肩 + 嘴裡叼牙籤(或夾根菜脯)。

### 視覺方向
- 姿勢:聳肩翻白眼,竹劍扛右肩
- 面的狀態:面推到頭頂後方
- 身上裝備:
  - 🧋 **左手拿超大珍珠奶茶杯**(扁平,杯身超誇張)
  - 🩴 **腳穿夾腳拖**(扁平幾何人字拖)
  - 🇹🇼 **胸前台灣國旗徽章**(扁平)
  - 🍢 **嘴叼牙籤 or 小雞腿幾何**
  - 😒 **翻白眼 + 聳肩手勢**

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位劍道台客全身入鏡,
頭身比 3.5,台味滿點聳肩翻白眼氣質,
身穿鐵青色 #2F4858 劍道服與黑袴,腳穿扁平幾何人字夾腳拖(腳趾外露),
黑色竹劍扛右肩,左手拿著扁平超大珍珠奶茶杯加粗吸管(杯身超誇張),
劍道面推到頭頂後方未戴,露整張臉翻白眼嘴角嚼牙籤(扁平小幾何),
胸前別扁平幾何台灣國旗徽章(紅白藍小方),
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色鐵青 + 黑,奶茶淺棕,國旗紅白藍,
風格參考 16 MBTI 人格圖,3:4 直式,台客翻白眼聳肩 pose。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a Taiwanese kendo taike full body, 3.5 head ratio,
shoulder-shrugging eye-rolling laid-back Taiwanese swagger,
wearing steel blue #2F4858 kendogi and black hakama,
wearing flat geometric flip-flop slippers (toes exposed),
black shinai slung over right shoulder, left hand holding a massive flat bubble-tea cup with thick straw (cup oversized),
men helmet pushed back on head unworn, full face visible rolling eyes with a toothpick/snack chewed in mouth corner,
flat geometric Taiwan flag pin on chest (small red-white-blue square),
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
steel blue + black primary, light brown bubble tea, red-white-blue flag,
16 MBTI poster reference, 3:4 portrait, taike eye-rolling shrug pose.
```

### 六技
面 6 / 小手 7 / 胴 7 / 氣合 8 / 間合 7 / 殘心 6

---

## 13 · UKRG / NOZK / 殘心修行僧 🙏

**四軸**:受(U) + 氣(K) + 理(R) + 守(G)
**群組色**:🟢 UK 受氣 · `#4D6B4A` 竹綠
**浮誇級**:**L3 · 直接是和尚**
**標語**:打完一本之後還要站三秒半

### 🎯 浮誇變形
**直接就是剃度和尚穿道着**:剃光頭 + 袈裟披在道着外 + 念珠掛脖 + 手腕纏念珠 + 竹劍當禪杖 + 腳下蓮花漂浮。

### 視覺方向
- 姿勢:立禪姿,竹劍當禪杖立於身前
- 面的狀態:**沒戴面**(和尚不戴),面放腳邊
- 身上裝備:
  - 👨‍🦲 **剃光頭**(幾何圓頭,頭頂 6 個戒疤點)
  - 🟤 **袈裟披在道着右肩**(深褐色扁平長條斜掛)
  - 📿 **大念珠圈掛脖**(20-25 顆扁平圓珠)
  - 🟫 **手腕念珠串**(小圓珠繞腕)
  - 🪷 **腳下蓮花幾何漂浮**(淺粉 5 瓣)
  - 🍂 **腳邊落葉 2 片**

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位剃度和尚版劍道家全身入鏡,
頭身比 3.5,禪定肅穆和尚氣質,
身穿竹綠色 #4D6B4A 劍道服與黑袴,右肩斜披深褐色扁平袈裟長條,
雙手合握黑色竹劍立於身前如禪杖,身體端正立禪姿,
剃光頭(幾何圓頭,頭頂 6 個戒疤點幾何),
脖子掛大扁平幾何念珠圈 20-25 顆圓珠,手腕纏繞 8-10 顆小念珠,
劍道面放腳邊地面,
腳下扁平幾何淺粉 5 瓣蓮花漂浮,腳邊散落 2 片扁平竹葉,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色竹綠 + 黑,袈裟深褐 #6B4423,念珠深棕,蓮花淺粉,
風格參考 16 MBTI 人格圖,3:4 直式,和尚立禪 pose。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a shaven-monk kendo practitioner full body, 3.5 head ratio,
serene meditative Buddhist monk aura,
wearing bamboo green #4D6B4A kendogi and black hakama, a dark brown flat kesa sash draped diagonally over right shoulder,
both hands clasping black shinai held upright like a monk staff in front, body upright standing-meditation pose,
fully shaven head (geometric round head with 6 burn-mark dots on top),
a large flat geometric prayer-bead necklace (20-25 beads) around neck, 8-10 small beads wrapping wrist,
men helmet placed on ground by feet,
a flat geometric pale-pink 5-petal lotus floating under feet, 2 fallen bamboo leaves scattered,
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
bamboo green + black primary, dark brown #6B4423 kesa, dark brown beads, pale pink lotus,
16 MBTI poster reference, 3:4 portrait, Buddhist monk standing-meditation pose.
```

### 六技
面 7 / 小手 7 / 胴 7 / 氣合 7 / 間合 10 / 殘心 10

---

## 14 · UKRH / LAST / 後發先至仙人 🧙

**四軸**:受(U) + 氣(K) + 理(R) + 變(H)
**群組色**:🟢 UK 受氣 · `#4D6B4A` 竹綠
**浮誇級**:**L2 · 漂浮仙人化**
**標語**:你先打,你先打,你先...唉我贏了

### 🎯 浮誇變形
**仙人化**:白眉白鬍長過胸 + 雙腳離地漂浮在雲上 + 身後兩朵大雲 + 竹劍懸浮不握 + 頭頂仙氣光環。

### 視覺方向
- 姿勢:**雙腳離地盤腿漂浮**(禪坐狀半空),身體微側
- 面的狀態:戴著面,白鬍從面下方飄出
- 身上裝備:
  - 🧙 **白眉白鬍長過胸**(飄逸感)
  - ☁️ **腳下踩一朵大雲**(扁平幾何雲朵)
  - ☁️ **身後兩朵大雲幾何**(淺灰白)
  - 🌀 **竹劍漂浮在身側**(不握,幾何化浮力感)
  - ✨ **頭頂淡金色仙氣光環**(扁平圓環)

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位漂浮仙人劍道家全身入鏡,
頭身比 3.5,仙風道骨時機大師氣質,
身穿竹綠色 #4D6B4A 劍道服與黑袴,
雙腳離地盤腿漂浮在扁平幾何大雲朵上半空中,身體微側,
戴著黑色劍道面,面下方垂出扁平白色長眉與長鬍及胸飄逸,
黑色竹劍漂浮在右側身旁(不握,幾何浮力感),
身後兩朵扁平大雲幾何淺灰白,
頭頂淡金色扁平仙氣光環圓,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影(對應雲朵下方),平光,
主色竹綠 + 黑,白鬚眉 + 雲淺灰白,光環淡金,
風格參考 16 MBTI 人格圖,3:4 直式,漂浮仙人 pose。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a floating sage kendo master full body, 3.5 head ratio,
ethereal timing-master immortal-sage aura,
wearing bamboo green #4D6B4A kendogi and black hakama,
both feet off the ground floating cross-legged on a large flat geometric cloud mid-air, body slightly turned,
wearing black kendo men, a long flat white flowing beard and brow extending from below men-gane down to chest,
black shinai floating beside right body (not gripped, geometric levitation),
2 large flat geometric clouds (light gray-white) behind figure,
a pale gold flat halo ring above head,
plain #F8F6F1 background, gray elliptical ground shadow below floating cloud, flat lighting,
bamboo green + black primary, white beard-brow + light gray clouds, pale gold halo,
16 MBTI poster reference, 3:4 portrait, floating immortal sage pose.
```

### 六技
面 6 / 小手 10 / 胴 8 / 氣合 5 / 間合 10 / 殘心 9

---

## 15 · UKSG / BUDO / 武道傳承者 📋

**四軸**:受(U) + 氣(K) + 情(S) + 守(G)
**群組色**:🟢 UK 受氣 · `#4D6B4A` 竹綠
**浮誇級**:**L0 · 宗師全套**
**標語**:你打的是剣,我打的是道

### 🎯 浮誇變形
**古典武道宗師**:長白髮過肩(不綁)+ 長白鬍 + 背後巨大武道書法掛軸 + 正座跪姿 + 雙手捧劍舉至額前。

### 視覺方向
- 姿勢:**正坐跪姿**(日式正坐),雙手捧劍舉至額前
- 面的狀態:面放身側地上
- 身上裝備:
  - 👴 **長白髮過肩(披散)+ 長白鬍**
  - 📋 **背後巨大書法掛軸**(扁平長條,中央黑色幾何墨塊寫著武道兩字暗示)
  - 🎗️ **白色鉢卷頭帶**
  - 🪨 **腳下榻榻米**(扁平幾何方格)
  - 🙇 **身體微前傾捧劍**(正坐姿)

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一位武道傳承宗師全身入鏡,
頭身比 3.5,肅穆恭敬古典宗師氣質,
身穿竹綠色 #4D6B4A 劍道服與黑袴,正座跪姿身體微前傾,
雙手平舉捧著黑色竹劍至額前(獻劍姿),
長白髮披散過肩加長白鬍及胸,額頭綁白色扁平鉢卷頭帶,
劍道面放身側地上,腳下扁平幾何淺米色榻榻米方格,
身後巨大扁平書法掛軸從頂垂至身後地面(上端捲軸加下端流蘇,中央黑色幾何墨塊暗示「武道」兩字),
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色竹綠 + 黑,白髮鬚,掛軸深米色加深墨,榻榻米淺米,
風格參考 16 MBTI 人格圖,3:4 直式,正座獻劍宗師 pose。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a budo grandmaster kendo heritage keeper full body, 3.5 head ratio,
solemn classical grandmaster aura,
wearing bamboo green #4D6B4A kendogi and black hakama,
in formal seiza kneeling pose, body slightly forward,
both hands raising black shinai horizontally to forehead level (sword-offering pose),
long white loose hair past shoulders and long white beard to chest, white flat hachimaki around forehead,
men helmet placed on ground beside,
flat geometric pale beige tatami-mat squares under figure,
a massive flat calligraphy hanging scroll from top to behind-figure ground (top scroll-roll + bottom tassels, dark ink blocks center suggesting 武道 kanji),
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
bamboo green + black primary, white hair-beard, warm beige scroll with ink blocks, pale tatami,
16 MBTI poster reference, 3:4 portrait, seiza sword-offering grandmaster pose.
```

### 六技
面 7 / 小手 7 / 胴 8 / 氣合 8 / 間合 9 / 殘心 10

---

## 16 · UKSH / FOMO / 佛系氣魄型 🕉️

**四軸**:受(U) + 氣(K) + 情(S) + 變(H)
**群組色**:🟢 UK 受氣 · `#4D6B4A` 竹綠
**浮誇級**:**L3 · 直接就是一尊佛**
**標語**:看場子學氣氛,打不打得中順緣

### 🎯 浮誇變形
**整個人就是一尊佛**:盤腿打坐 + 頭頂巨大光環放光 + 閉目微笑 + 手結禪定印 + 竹劍橫於腿上 + 蓮花座 + 背後放射佛光。

### 視覺方向
- 姿勢:**盤腿禪定坐**(結跏趺坐)
- 面的狀態:**沒戴面**(佛不戴),面放蓮花座前
- 身上裝備:
  - ☸️ **頭頂超大光環**(扁平金圓環 + 向外放射光芒 8-12 條)
  - 🪷 **身下蓮花寶座**(扁平幾何多層蓮瓣)
  - 🙏 **雙手結禪定印**(一手疊一手,掌心向上)
  - ⚔️ **竹劍橫放於盤腿上**(不握)
  - 😌 閉目微笑
  - ✨ **背後放射佛光 8-12 條**

### AI 生圖 Prompt

**中文**:
```
扁平低多邊形幾何向量插畫,MBTI 人格角色風格,一尊佛像版劍道家全身入鏡,
頭身比 3.5,佛陀禪定慈悲氣質,
身穿竹綠色 #4D6B4A 劍道服與黑袴,盤腿結跏趺坐於扁平幾何多層蓮花寶座,
雙手結禪定印於腹前(一手疊一手掌心向上),
閉目微笑慈悲相,
黑色竹劍橫放於盤腿上(不握),
頭頂巨大扁平金色光環圓加向外放射 8-12 條光芒,
身後放射 8-12 條扁平佛光(淡金),
劍道面放在蓮花座前地面,
純色 #F8F6F1 米白背景,地面淺灰橢圓投影,平光,
主色竹綠 + 黑,蓮花座淺粉綠,光環金 #D4A73A,佛光淡金,
風格參考 16 MBTI 人格圖,3:4 直式,盤腿佛像 pose。
```

**EN**:
```
Flat low-poly geometric vector MBTI-style character,
a Buddha-statue kendo practitioner full body, 3.5 head ratio,
transcendent serene Buddha meditative compassion aura,
wearing bamboo green #4D6B4A kendogi and black hakama,
sitting in full-lotus meditation pose on a flat geometric multi-layer lotus throne,
both hands forming dhyana mudra at belly (one hand on the other, palms up),
eyes gently closed with compassionate smile,
black shinai laid horizontally across folded legs (not gripped),
a giant flat golden halo ring with 8-12 radiating light rays above head,
8-12 flat pale-gold Buddha-light rays radiating behind figure,
men helmet placed on ground in front of lotus throne,
plain #F8F6F1 background, gray elliptical ground shadow, flat lighting,
bamboo green + black primary, pale pink-green lotus throne, gold #D4A73A halo, pale gold rays,
16 MBTI poster reference, 3:4 portrait, Buddha-statue lotus pose.
```

### 六技
面 6 / 小手 7 / 胴 7 / 氣合 7 / 間合 8 / 殘心 8

---

# 批次生圖建議工作流(v4)

## 方法 A · Midjourney v6(強烈推薦浮誇版)

1. 訂閱 Midjourney 基本方案 $10
2. **Prompt 尾巴加 `--stylize 250`**(v4 浮誇風需要更高 stylize 值)
3. 完整尾綴:`--ar 3:4 --style raw --stylize 250 --v 6`
4. 難處理的 L3 化身型(06 HUNT 老虎、10 ZZZZ 趴地、13 NOZK 和尚、16 FOMO 佛像)建議**多生 8-16 張**挑最符合概念的

## 方法 B · ComfyUI + SDXL

1. 浮誇版建議搭配 LoRA:
   - `cartoon-vector-style`(卡通扁平)
   - `mbti-character-lora`(若找得到)
2. Negative 加:`realistic photo, 3d render, serious photorealism`(避免 AI 回歸寫實)

## 方法 C · DALL-E 3(ChatGPT Plus)

1. Prompt 開頭強調:`Extremely exaggerated stylized character transformation, flat low-poly vector, MBTI poster style, white background`
2. 化身型(L3)若生不出來,可多試 3-5 次
3. 中英 prompt 都試

## 方法 D · 外包向量插畫師

1. 這份 v4 比 v3 更適合外包(浮誇轉化概念對人類插畫師好理解)
2. 浮誇型單張 $30-60 USD × 16 = $480-960
3. **建議先外包 16 FOMO(佛像)當最大挑戰 benchmark**,如果佛像過關,其他都不會是問題

---

# 生圖後整合(同 v3)

## 1. 圖片入庫
`Repos/butoTaiwan/public/kendoti/personas/{code}.png`

## 2. 更新型資料
`lib/kendoti/types.ts` 加 `portrait: string` 欄位
`lib/kendoti/data.ts` 每型加 `portrait: '/kendoti/personas/AJRG.png'`

## 3. 結果頁嵌入
`app/kendoti/result/[type]/page.tsx`:
```tsx
<img src={t.portrait} alt={t.nickname} className="w-80 h-auto mx-auto" />
```

## 4. OG 圖片
`app/kendoti/result/[type]/opengraph-image.tsx` 左側人像放大

## 5. 16 型海報
4×4 拼圖放 `/kendoti` 首頁 Hero

---

# 審核 Checklist(Yao 填 · v4)

- [ ] 16 張**視覺風格一致**(都是扁平 low-poly,不能有一張變寫實)
- [ ] 4 群組**顏色正確**(AJ 紅 / AK 橙 / UJ 青 / UK 綠)
- [ ] **L3 化身型成功變形**:
  - [ ] 06 HUNT 真的變成老虎(虎頭人身)
  - [ ] 10 ZZZZ 真的趴在地上
  - [ ] 13 NOZK 是剃度和尚
  - [ ] 16 FOMO 是盤腿佛像
- [ ] **L2 融合型顯著差異化**:BOSS 黑道、SIFU 諸葛亮、LAST 仙人漂浮
- [ ] **L1 戲劇型夠誇張**:MEN! 面字爆炸、SON 真小孩、KIAI 頭頂火山、BAKA 全套中二、OKLA 夾腳拖
- [ ] L0 標準型有招牌元素堆滿(KING 皇冠披風王座、2DAN 證書堆、OYAJ 全白老人、BUDO 宗師掛軸)
- [ ] 招牌元素**幾何化不寫實**
- [ ] 沒有血、沒有文字、沒有商標、沒有多人
- [ ] 16 張**並排一看能立刻辨別**(看老虎知 HUNT、看佛像知 FOMO、看趴地知 ZZZZ)

---

**交付完畢。Yao 下一步:**
1. 選生圖方法(A/B/C/D)
2. 先挑 3 張當 benchmark:**06 HUNT(老虎)+ 13 NOZK(和尚)+ 16 FOMO(佛像)**,這 3 張是 L3 化身型最難生,過關代表其他都能過
3. 確認風格後批量生剩 13 張
