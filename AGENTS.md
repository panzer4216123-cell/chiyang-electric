# 啟揚機電｜Codex 工作憲章

你只做啟揚機電。不准混入個人品牌、戀愛、私人生活。不要另做一個站。不要重開定位。不要給替代口號。

回覆用繁體中文。時區 Asia/Taipei。一則只做指定的一件事。沒被擋住不要問。

## 唯一底稿

- 程式唯一底稿：https://github.com/panzer4216123-cell/chiyang-electric
- 峰哥可點（現行公開預覽）：https://panzer4216123-cell.github.io/
- 舊站（只當對照，不抄行銷句）：http://www.chiyang7039.com/
- ChatGPT 舊審稿站「啟揚來幫忙」已作廢，不准接回去。

改完底稿，必須同步讓峰哥網址看得到：
1. 改 `docs/index.html`（以及需要的 `docs/images/`）
2. 把同一份 `index.html` + 圖片推到 `panzer4216123-cell.github.io` 的根目錄
3. 用 curl 或瀏覽器核 HTTP 200，再回報峰哥網址

不要新建第二個品牌站、不要換網域、不要把預覽做成另一套口號。

## 已鎖定，不准重開、不准替代句

電梯不好裝，啟揚就來裝。
電梯不好養，啟揚就來養。
地板不能挖，啟揚有辦法。

第三句是痛點句，不是品牌憲法。後面必須接：
以現勘為準，不是每戶都能少動地板。

創辦人：洪國峰。不准寫成 洪國鋒／洪國峯／洪峰／郭峰。

品類：家用電梯／老屋透天加裝。
可講：空間窄、別家不接、少動地板、怕漏水、長輩爬樓。深度與做法以現勘為準。

## 主標、廣告、頁尾、meta、按鈕不准寫

無機坑、零基坑、免檢查、免申請、專利、數百台、徹底杜絕漏水、一站式全包、固定 20 公分。

數字、合法、檢查、台數，沒核過不准寫成事實。

## 不准公開（網站、commit、README、issue、對話回給客人的句子）

黃大姐、田大哥、對帳、拍攝行程。
不准用 P3／P5／P6 當標題。
給模型的備註、本憲章、Drive 路徑，不准印到官網。

## 視覺（已定）

對聯直書、印泥紅 `#c41a2b`、紙色 `#f3eee4`、墨 `#141414`。
圖號印章（如 QY-040）、直角（radius 2px）、工程圖紙裁切標記。
不要改回圓角卡片、膠囊按鈕、墨綠套版。

## 聯絡（已核）

- 公司：啟揚機電有限公司
- 高雄總公司：高雄市大社區民族路15-10號
- 電話：07-353-8504
- 傳真：07-353-5947
- 免付費：0800-000-362
- 信箱：chi.yang7039@gmail.com
- 需求表：https://forms.gle/uCqMDaTfuiHCuHvw8
- 台南展銷中心：台南市永康區中山北路343號／06-231-3662
- 台中清水展銷中心：台中市清水區民族路三段63號1樓
- 桃園展銷中心：桃園市八德區仁德一路138號
- Facebook：https://www.facebook.com/profile.php?id=100064054864315
- Instagram：https://www.instagram.com/chiyang.elevator/

## 改哪個檔

- 文案、口號、FAQ、案例、電話：`src/lib/site.ts`（若存在）
- 頁面結構：`src/routes/`
- 對聯／頁首頁尾／裁切框：`src/components/`
- 印泥紅／對聯直書：`src/styles.css`
- 峰哥實際看到的靜態頁：`docs/index.html`
- 圖片：`public/` 與 `docs/images/`（兩邊要對得上）

這個 repo 目前以靜態 `docs/` 對外。沒有被要求，不要另外 scaffold Vite／Next／新品牌站。
完整可跑框架若尚未進這個 repo，不要假裝它在這裡。

## Drive（內部作業，不准寫進網站）

主資料夾：1Vvw5n0Q2QHPNSSc1ble3yyxmZFINc0k5
RAW：14cI3MQwAvWYN90FaoarioJ-WIgnVKVjv
交付：10ohW6w3s-fye4MIUNSGVnojcnNJEWqUr
CURRENT：1A67Hm3j6KOYUeK7cIvMtFztdB_lO1dUroW07RMTNzDI
INDEX：1gAsXxLMYtOXykzGexY8NCgyJZL3RTxrcqvMsbOFZVOg

CURRENT 讀不到仍先交卷，回「任務完成｜Drive 尚未讀到」。
Drive 寫入失敗回「任務完成｜Drive 尚未同步」。禁止假裝已寫入。

## 完成標準

- 三句鎖定口號原文還在
- 痛點句後面有「以現勘為準，不是每戶都能少動地板」
- 創辦人是洪國峰
- 全站搜不到：無機坑、零基坑
- 峰哥網址可點、不用登入
- 本則只做一件事；做完用 curl 核過再回報
