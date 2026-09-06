function mapsQuery(q: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

export const SITE = {
  name: "啟揚機電",
  legalName: "啟揚機電有限公司",
  phoneDisplay: "07-353-8504",
  phoneTel: "+88673538504",
  faxDisplay: "07-353-5947",
  freePhoneDisplay: "0800-000-362",
  freePhoneTel: "0800000362",
  email: "chi.yang7039@gmail.com",
  address: "高雄市大社區民族路15-10號",
  mapsUrl: mapsQuery("高雄市大社區民族路15-10號"),
  formUrl: "https://forms.gle/uCqMDaTfuiHCuHvw8",
  formEmbed:
    "https://docs.google.com/forms/d/e/1FAIpQLSc_x3GjKPbV5HJPzPIkE6RjVgxlVF9yDOQAufMpg62_97D3uQ/viewform",
  formSourceEntry: "1632618831",
  facebook: "https://www.facebook.com/profile.php?id=100064054864315",
  instagram: "https://www.instagram.com/chiyang.elevator/",
  reel: "https://www.facebook.com/reel/1033082013055204",
  line: "",
} as const;

export const LEAD_SOURCES = [
  { id: "site", label: "官方網站", value: "啟揚官方網站" },
  { id: "fb", label: "臉書", value: "Facebook 粉專" },
  { id: "ig", label: "Instagram", value: "其他" },
  { id: "google", label: "Google", value: "Google 搜尋" },
  { id: "friend", label: "親友介紹", value: "親友或合作夥伴介紹" },
] as const;

export function formWithSource(sourceValue: string, embedded = true) {
  const u = new URL(SITE.formEmbed);
  u.searchParams.set("usp", "pp_url");
  u.searchParams.set(`entry.${SITE.formSourceEntry}`, sourceValue);
  if (embedded) u.searchParams.set("embedded", "true");
  return u.toString();
}

export const LOCATIONS = [
  {
    id: "kh",
    name: "高雄總公司",
    address: "高雄市大社區民族路15-10號",
    phoneDisplay: "07-353-8504",
    phoneTel: "+88673538504",
    faxDisplay: "07-353-5947",
    mapsUrl: mapsQuery("高雄市大社區民族路15-10號"),
  },
  {
    id: "tn",
    name: "台南展銷中心",
    address: "台南市永康區中山北路343號",
    phoneDisplay: "06-231-3662",
    phoneTel: "+88662313662",
    faxDisplay: "06-231-9772",
    mapsUrl: mapsQuery("台南市永康區中山北路343號"),
  },
  {
    id: "tc",
    name: "台中清水展銷中心",
    address: "台中市清水區民族路三段63號1樓",
    phoneDisplay: "",
    phoneTel: "",
    faxDisplay: "",
    mapsUrl: mapsQuery("台中市清水區民族路三段63號1樓"),
  },
  {
    id: "ty",
    name: "桃園展銷中心",
    address: "桃園市八德區仁德一路138號",
    phoneDisplay: "",
    phoneTel: "",
    faxDisplay: "",
    mapsUrl: mapsQuery("桃園市八德區仁德一路138號"),
  },
] as const;

export const SLOGANS = {
  install: { line1: "電梯不好裝，", line2: "啟揚就來裝。" },
  maintain: { line1: "電梯不好養，", line2: "啟揚就來養。" },
  floor: { line1: "地板不能挖，", line2: "啟揚有辦法。" },
} as const;

export const STORY = {
  kicker: "為什麼找啟揚",
  title: "別家說裝不了的家，我們來看現場。",
  body: "這不是樣品屋。是已經住進去的透天：樓梯窄、位置怪、地板不能大挖。先看這個家怎麼住，能裝才說怎麼裝。裝完，保養也找我們。",
} as const;

export const ABOUT = {
  kicker: "關於啟揚",
  title: "先會裝，才開了這家公司。",
  lead: "洪國峰做電梯二十五年。前十五年在現場，後來開了啟揚。來看已經住進去的家。能裝才說怎麼裝。裝完也養。",
  stages: [
    {
      n: "01",
      title: "先看這個家",
      body: "樓梯窄、位置怪、地板不能大挖。先看怎麼住，再談電梯怎麼放。",
    },
    {
      n: "02",
      title: "能裝才說怎麼裝",
      body: "樓層、位置、開門、防水，以現勘為準。不是每戶都能少動地板。",
    },
    {
      n: "03",
      title: "裝完也養",
      body: "新梯與保養都做。不是裝完就走。",
    },
  ],
} as const;

export const PEOPLE = [
  {
    id: "hong",
    name: "洪國峰",
    role: "創辦人",
    bio: "做電梯二十五年。前十五年在現場，後來開了啟揚，把電梯裝進已經住著的家。",
    image: "/images/team/hong-guofeng.webp",
  },
] as const;

export const TEAM_PHOTOS = [
  { src: "/images/team/IMG_3556.webp", alt: "啟揚團體" },
  { src: "/images/team/sales-3589.webp", alt: "業務開會" },
  { src: "/images/team/sales-3590.webp", alt: "業務開會" },
  { src: "/images/team/sales-3591.webp", alt: "業務開會" },
  { src: "/images/team/sales-meeting.webp", alt: "工務開會" },
  { src: "/images/team/works-3586.webp", alt: "工務開會" },
  { src: "/images/team/works-3584.webp", alt: "工務開會" },
  { src: "/images/team/works-3577.webp", alt: "工務開會" },
  { src: "/images/team/works-3569.webp", alt: "工務開會" },
  { src: "/images/team/IMG_3579.webp", alt: "工務開會" },
] as const;

export const STORIES = [
  {
    id: "ep01",
    kind: "同仁",
    title: "啟揚同仁 EP.01｜徐景祥",
    note: "現場怎麼裝，工程師自己講。",
    image: "/images/stories/ep01-cover.webp",
    href: "https://www.facebook.com/profile.php?id=100064054864315",
    status: "上架",
  },
  {
    id: "ep02",
    kind: "同仁",
    title: "啟揚同仁 EP.02｜王上萂",
    note: "在這行七年。保養、現場、客人怎麼問。",
    image: "/images/stories/ep02-cover.webp",
    href: "https://www.facebook.com/profile.php?id=100064054864315",
    status: "上架",
  },
] as const;

export const SURVEY = [
  "幾樓到幾樓",
  "梯放樓梯中間、旁邊，還是室外",
  "一次幾個人，要不要坐輪椅或載貨",
  "門要開哪一邊，能不能雙向",
  "地板、防水能不能動，能動多少",
] as const;

export const PAINS = [
  {
    id: "narrow",
    title: "空間太窄",
    body: "樓梯旁、畸零地、沒有現成井道。別家說塞不進去的，先拍照給我們看。",
  },
  {
    id: "floor",
    title: "地板不能挖",
    body: "怕動到防水、管線、地基。有的現場能少動地板，做法以現勘為準。",
  },
  {
    id: "refused",
    title: "別家不接",
    body: "案子小、位置難、結構不好拆。我們專門看這類已經住進去的家。",
  },
  {
    id: "elders",
    title: "長輩爬樓",
    body: "膝蓋、輪椅、日常上下樓。先說家人怎麼住，再談電梯怎麼放。",
  },
] as const;

export const STEPS = [
  { n: "01", title: "拍照傳圖", body: "樓梯、預計位置、各樓層出入口。沒有尺寸也可以先傳。" },
  { n: "02", title: "說明能不能裝", body: "先講生活需求與現場限制，能做、不能做、下一步怎麼走。" },
  { n: "03", title: "到府現勘", body: "結構、動線、出入口與施工界面，以現場為準。" },
  { n: "04", title: "圖說與合約", body: "規格、範圍、保養怎麼接，寫進文件再進場。" },
] as const;

export const FAQS = [
  {
    id: "installable",
    q: "我家到底能不能裝？",
    a: "不能只看屋齡或一張照片。先確認房屋類型、樓層、預定位置、結構與出入口，再整理可行方向。",
  },
  {
    id: "space",
    q: "空間夠不夠？",
    a: "寬深以外，梁柱、樓板、管線、門向和施工通道都會影響。照片可先談，正式判斷仍要現勘。",
  },
  {
    id: "pit",
    q: "一定要大挖地板嗎？",
    a: "不一定。有的現場能少動地板，用較淺的做法或墊高。深度與做法以現勘、圖說和合約為準，網站不寫死規格。",
  },
  {
    id: "sequence",
    q: "裝修跟電梯誰先？",
    a: "若正在翻修，提早把電梯放進整體規劃，先對齊井道、出入口與裝修界面，再決定施工順序。",
  },
  {
    id: "prepare",
    q: "詢問前要準備什麼？",
    a: "縣市、房屋類型、樓層、想裝的位置，以及樓梯周邊照片。沒有完整尺寸也能先說明需求。",
  },
  {
    id: "maintenance",
    q: "裝完之後誰養？",
    a: "新梯與保養是兩件事，我們都接。依設備現況與正式服務內容確認，可先說目前的問題。",
  },
] as const;

export const CATALOG = [
  { id: "CAT-01", title: "主機系統", image: "/images/catalog/cat-01.webp" },
  { id: "CAT-02", title: "主機系統", image: "/images/catalog/cat-02.webp" },
  { id: "CAT-03", title: "變頻門機", image: "/images/catalog/cat-03.webp" },
  { id: "CAT-04", title: "門機與光幕", image: "/images/catalog/cat-04.webp" },
  { id: "CAT-05", title: "車廂裝潢", image: "/images/catalog/cat-05.webp" },
  { id: "CAT-06", title: "車廂裝潢", image: "/images/catalog/cat-06.webp" },
  { id: "CAT-07", title: "轎廂天花", image: "/images/catalog/cat-07.webp" },
  { id: "CAT-08", title: "轎廂天花", image: "/images/catalog/cat-08.webp" },
  { id: "CAT-09", title: "型錄", image: "/images/catalog/cat-09.webp" },
  { id: "CAT-10", title: "型錄", image: "/images/catalog/cat-10.webp" },
  { id: "CAT-11", title: "型錄", image: "/images/catalog/cat-11.webp" },
  { id: "CAT-12", title: "型錄", image: "/images/catalog/cat-12.webp" },
  { id: "CAT-13", title: "車廂", image: "/images/catalog/cat-13.webp" },
  { id: "CAT-14", title: "車廂", image: "/images/catalog/cat-14.webp" },
  { id: "CAT-15", title: "車廂", image: "/images/catalog/cat-15.webp" },
  { id: "CAT-16", title: "車廂", image: "/images/catalog/cat-16.webp" },
  { id: "CAT-17", title: "車廂", image: "/images/catalog/cat-17.webp" },
  { id: "CAT-18", title: "車廂", image: "/images/catalog/cat-18.webp" },
  { id: "CAT-19", title: "門套", image: "/images/catalog/cat-19.webp" },
  { id: "CAT-20", title: "門套", image: "/images/catalog/cat-20.webp" },
  { id: "CAT-21", title: "門套", image: "/images/catalog/cat-21.webp" },
  { id: "CAT-22", title: "按鈕", image: "/images/catalog/cat-22.webp" },
  { id: "CAT-23", title: "操作盤", image: "/images/catalog/cat-23.webp" },
  { id: "CAT-24", title: "門機", image: "/images/catalog/cat-24.webp" },
  { id: "CAT-25", title: "門機", image: "/images/catalog/cat-25.webp" },
  { id: "CAT-26", title: "門機", image: "/images/catalog/cat-26.webp" },
] as const;

export type CaseKind = "home" | "freight" | "kitchen" | "access" | "renovate" | "other" | "show";

export type CaseItem = {
  id: string;
  area: string;
  title: string;
  kind: CaseKind;
  image: string;
  hidden?: boolean;
};

export const CASE_FILTERS = [
  { id: "home", label: "客梯／家用梯" },
  { id: "freight", label: "貨梯" },
  { id: "kitchen", label: "菜梯／小型送貨梯" },
  { id: "access", label: "無障礙" },
  { id: "renovate", label: "整修／更新" },
  { id: "other", label: "其他工程" },
] as const;

export const MAINTAIN = [
  { title: "保養", body: "定期保養，讓設備可以長期運作。" },
  { title: "點檢", body: "機件連動、電路測試、主吊鋼索點檢。" },
  { title: "潤滑", body: "開門機清理上油、添加導軌油。" },
  { title: "清潔", body: "機房、升降路、控制盤與主機清潔。" },
  { title: "調整", body: "停車水平、開關門異音調整。" },
  { title: "更換", body: "消耗品與零件更換先報價再做。" },
] as const;

export const CASES: CaseItem[] = [
  {
    id: "QY-750",
    area: "高雄三民",
    title: "高雄三民｜家用梯",
    kind: "home",
    image: "/images/works/qy-750.webp",
  },
  {
    id: "QY-720",
    area: "台南東區",
    title: "台南東區｜電梯",
    kind: "other",
    image: "/images/works/qy-720.webp",
  },
  {
    id: "QY-770",
    area: "高雄楠梓",
    title: "高雄楠梓｜客梯",
    kind: "home",
    image: "/images/works/qy-770.webp",
  },
  {
    id: "QY-730",
    area: "台南南區",
    title: "台南南區｜家用梯",
    kind: "home",
    image: "/images/works/qy-730.webp",
  },
  {
    id: "QY-740",
    area: "桃園龜山",
    title: "桃園龜山｜家用梯",
    kind: "home",
    image: "/images/works/qy-740.webp",
  },
  {
    id: "QY-760",
    area: "新竹",
    title: "新竹｜家用梯",
    kind: "home",
    image: "/images/works/qy-760.webp",
  },
  {
    id: "QY-715",
    area: "高雄梓官",
    title: "高雄梓官｜家用梯",
    kind: "home",
    image: "/images/works/qy-715.webp",
  },
  {
    id: "QY-709",
    area: "台南新化",
    title: "台南新化｜電梯",
    kind: "other",
    image: "/images/works/qy-709.webp",
  },
  {
    id: "QY-699",
    area: "高雄燕巢",
    title: "高雄燕巢｜貨梯",
    kind: "freight",
    image: "/images/works/qy-699.webp",
  },
  {
    id: "QY-689",
    area: "高雄鳳山",
    title: "高雄鳳山｜客梯",
    kind: "home",
    image: "/images/works/qy-689.webp",
  },
  {
    id: "QY-679",
    area: "台南北區",
    title: "台南北區｜家用梯",
    kind: "home",
    image: "/images/works/qy-679.webp",
  },
  {
    id: "QY-549",
    area: "台南東區",
    title: "台南東區｜電梯",
    kind: "other",
    image: "/images/works/qy-549.webp",
  },
  {
    id: "QY-591",
    area: "台南安平",
    title: "台南安平｜電梯",
    kind: "other",
    image: "/images/works/qy-591.webp",
  },
  {
    id: "QY-615",
    area: "高雄旗山",
    title: "高雄旗山｜客梯",
    kind: "home",
    image: "/images/works/qy-615.webp",
  },
  {
    id: "QY-567",
    area: "高雄鳳山",
    title: "高雄鳳山｜電梯",
    kind: "other",
    image: "/images/works/qy-567.webp",
  },
  {
    id: "QY-651",
    area: "新竹",
    title: "新竹｜家用梯",
    kind: "home",
    image: "/images/works/qy-651.webp",
  },
  {
    id: "QY-555",
    area: "高雄仁武",
    title: "高雄仁武｜電梯",
    kind: "other",
    image: "/images/works/qy-555.webp",
  },
  {
    id: "QY-639",
    area: "高雄小港",
    title: "高雄小港｜電梯",
    kind: "other",
    image: "/images/works/qy-639.webp",
  },
  {
    id: "QY-627",
    area: "雲林虎尾",
    title: "雲林虎尾｜電梯",
    kind: "other",
    image: "/images/works/qy-627.webp",
  },
  {
    id: "QY-579",
    area: "高雄林園",
    title: "高雄林園｜客梯",
    kind: "home",
    image: "/images/works/qy-579.webp",
  },
  {
    id: "QY-603",
    area: "桃園",
    title: "桃園｜菜梯",
    kind: "kitchen",
    image: "/images/works/qy-603.webp",
  },
  {
    id: "QY-663",
    area: "高雄楠梓",
    title: "高雄楠梓｜電梯",
    kind: "other",
    image: "/images/works/qy-663.webp",
  },
  {
    id: "QY-675",
    area: "台北內湖",
    title: "台北內湖｜電梯",
    kind: "other",
    image: "/images/works/qy-675.webp",
  },
  {
    id: "QY-543",
    area: "新竹",
    title: "新竹｜家用梯",
    kind: "home",
    image: "/images/works/qy-543.webp",
  },
  {
    id: "QY-531",
    area: "雲林虎尾",
    title: "雲林虎尾｜電梯",
    kind: "other",
    image: "/images/works/qy-531.webp",
  },
  {
    id: "QY-480",
    area: "台南",
    title: "台南｜無障礙",
    kind: "access",
    image: "/images/works/qy-480.webp",
  },
  {
    id: "QY-504",
    area: "高雄苓雅",
    title: "高雄苓雅｜貨梯",
    kind: "freight",
    image: "/images/works/qy-504.webp",
  },
  {
    id: "QY-468",
    area: "台北內湖",
    title: "台北內湖｜電梯",
    kind: "other",
    image: "/images/works/qy-468.webp",
  },
  {
    id: "QY-492",
    area: "高雄鳥松",
    title: "高雄鳥松｜客梯",
    kind: "home",
    image: "/images/works/qy-492.webp",
  },
  {
    id: "QY-516",
    area: "高雄岡山",
    title: "高雄岡山｜貨梯",
    kind: "freight",
    image: "/images/works/qy-516.webp",
  },
  {
    id: "QY-444",
    area: "高雄路竹",
    title: "高雄路竹｜客梯",
    kind: "home",
    image: "/images/works/qy-444.webp",
  },
  {
    id: "QY-441",
    area: "高雄大寮",
    title: "高雄大寮｜電梯",
    kind: "other",
    image: "/images/works/qy-441.webp",
  },
  {
    id: "QY-437",
    area: "嘉義東區",
    title: "嘉義東區｜客梯",
    kind: "home",
    image: "/images/works/qy-437.webp",
  },
  {
    id: "QY-456",
    area: "高雄仁武",
    title: "高雄仁武｜電梯",
    kind: "other",
    image: "/images/works/qy-456.webp",
  },
  {
    id: "QY-528",
    area: "高雄三民",
    title: "高雄三民｜無障礙",
    kind: "access",
    image: "/images/works/qy-528.webp",
  },
  {
    id: "QY-428",
    area: "台南中西區",
    title: "台南中西區｜客梯",
    kind: "home",
    image: "/images/works/qy-428.webp",
  },
  {
    id: "QY-408",
    area: "高雄左營",
    title: "高雄左營｜貨梯",
    kind: "freight",
    image: "/images/works/qy-408.webp",
  },
  {
    id: "QY-432",
    area: "桃園龍潭",
    title: "桃園龍潭｜貨梯",
    kind: "freight",
    image: "/images/works/qy-432.webp",
  },
  {
    id: "QY-354",
    area: "台南北區",
    title: "台南北區｜客梯",
    kind: "home",
    image: "/images/works/qy-354.webp",
  },
  {
    id: "QY-387",
    area: "高雄楠梓",
    title: "高雄楠梓｜客梯",
    kind: "home",
    image: "/images/works/qy-387.webp",
  },
  {
    id: "QY-395",
    area: "高雄鼓山",
    title: "高雄鼓山｜電梯",
    kind: "other",
    image: "/images/works/qy-395.webp",
  },
  {
    id: "QY-370",
    area: "高雄鳳山",
    title: "高雄鳳山｜客梯",
    kind: "home",
    image: "/images/works/qy-370.webp",
  },
  {
    id: "QY-383",
    area: "台南永康",
    title: "台南永康｜貨梯",
    kind: "freight",
    image: "/images/works/qy-383.webp",
  },
  {
    id: "QY-398",
    area: "台東達仁",
    title: "台東達仁｜客梯",
    kind: "home",
    image: "/images/works/qy-398.webp",
  },
  {
    id: "QY-403",
    area: "嘉義鹿草",
    title: "嘉義鹿草｜無障礙",
    kind: "access",
    image: "/images/works/qy-403.webp",
  },
  {
    id: "QY-362",
    area: "高雄前金",
    title: "高雄前金｜客梯",
    kind: "home",
    image: "/images/works/qy-362.webp",
  },
  {
    id: "QY-418",
    area: "屏東",
    title: "屏東｜客梯",
    kind: "home",
    image: "/images/works/qy-418.webp",
  },
  {
    id: "QY-378",
    area: "屏東潮州",
    title: "屏東潮州｜小型送貨梯",
    kind: "kitchen",
    image: "/images/works/qy-378.webp",
  },
  {
    id: "QY-352",
    area: "公司",
    title: "展示設備",
    kind: "show",
    image: "/images/works/qy-352.webp",
  },
  {
    id: "QY-344",
    area: "楠梓",
    title: "楠梓｜客梯",
    kind: "home",
    image: "/images/works/qy-344.webp",
  },
  {
    id: "QY-339",
    area: "台南安南",
    title: "台南安南｜新設貨梯",
    kind: "freight",
    image: "/images/works/qy-339.webp",
  },
  {
    id: "QY-336",
    area: "鳳山",
    title: "鳳山｜新設客梯",
    kind: "home",
    image: "/images/works/qy-336.webp",
  },
  {
    id: "QY-333",
    area: "路竹",
    title: "路竹｜新設客梯",
    kind: "home",
    image: "/images/works/qy-333.webp",
  },
  {
    id: "QY-327",
    area: "台南安南",
    title: "台南安南｜新設貨梯",
    kind: "freight",
    image: "/images/works/qy-327.webp",
  },
  {
    id: "QY-321",
    area: "橋頭",
    title: "橋頭｜新設客梯",
    kind: "home",
    image: "/images/works/qy-321.webp",
  },
  {
    id: "QY-315",
    area: "高雄",
    title: "高雄｜無障礙",
    kind: "access",
    image: "/images/works/qy-315.webp",
  },
  {
    id: "QY-309",
    area: "東港",
    title: "東港｜新設客梯",
    kind: "home",
    image: "/images/works/qy-309.webp",
  },
  {
    id: "QY-303",
    area: "苗栗",
    title: "苗栗｜新設客貨梯",
    kind: "freight",
    image: "/images/works/qy-303.webp",
  },
  {
    id: "QY-297",
    area: "鳥松",
    title: "鳥松｜新設客梯",
    kind: "home",
    image: "/images/works/qy-297.webp",
  },
  {
    id: "QY-291",
    area: "左營",
    title: "左營｜整修",
    kind: "renovate",
    image: "/images/works/qy-291.webp",
  },
  {
    id: "QY-285",
    area: "燕巢",
    title: "燕巢｜整修",
    kind: "renovate",
    image: "/images/works/qy-285.webp",
  },
  {
    id: "QY-279",
    area: "旗津",
    title: "旗津｜新設貨梯",
    kind: "freight",
    image: "/images/works/qy-279.webp",
  },
  {
    id: "QY-267",
    area: "台南",
    title: "台南｜鋼構",
    kind: "other",
    image: "/images/works/qy-267.webp",
  },
  {
    id: "QY-261",
    area: "岡山",
    title: "岡山｜新設客梯",
    kind: "home",
    image: "/images/works/qy-261.webp",
  },
  {
    id: "QY-255",
    area: "新北",
    title: "新北｜新設小型送貨梯",
    kind: "kitchen",
    image: "/images/works/qy-255.webp",
  },
  {
    id: "QY-243",
    area: "台南永康",
    title: "台南永康｜新設客梯",
    kind: "home",
    image: "/images/works/qy-243.webp",
  },
  {
    id: "QY-237",
    area: "楠梓",
    title: "楠梓｜新設菜梯",
    kind: "kitchen",
    image: "/images/works/qy-237.webp",
  },
  {
    id: "QY-231",
    area: "鳥松",
    title: "鳥松｜新設貨梯",
    kind: "freight",
    image: "/images/works/qy-231.webp",
  },
  {
    id: "QY-225",
    area: "左營",
    title: "左營｜無障礙",
    kind: "access",
    image: "/images/works/qy-225.webp",
  },
  {
    id: "QY-219",
    area: "岡山",
    title: "岡山｜新設貨梯",
    kind: "freight",
    image: "/images/works/qy-219.webp",
  },
  {
    id: "QY-213",
    area: "新北",
    title: "新北｜新設小型送貨梯",
    kind: "kitchen",
    image: "/images/works/qy-213.webp",
  },
  {
    id: "QY-207",
    area: "鳳山",
    title: "鳳山｜客梯",
    kind: "home",
    image: "/images/works/qy-207.webp",
  },
  {
    id: "QY-201",
    area: "楠梓",
    title: "楠梓｜客梯",
    kind: "home",
    image: "/images/works/qy-201.webp",
  },
  {
    id: "QY-195",
    area: "台中梧棲",
    title: "台中梧棲｜新設貨梯",
    kind: "freight",
    image: "/images/works/qy-195.webp",
  },
  {
    id: "QY-189",
    area: "台南",
    title: "台南｜鋼構",
    kind: "other",
    image: "/images/works/qy-189.webp",
  },
  {
    id: "QY-183",
    area: "里港",
    title: "里港｜新設貨梯",
    kind: "freight",
    image: "/images/works/qy-183.webp",
  },
  {
    id: "QY-177",
    area: "左營",
    title: "左營｜車廂裝潢",
    kind: "renovate",
    image: "/images/works/qy-177.webp",
  },
  {
    id: "QY-171",
    area: "地區匿名",
    title: "小型送貨梯",
    kind: "kitchen",
    image: "/images/works/qy-171.webp",
  },
  {
    id: "QY-165",
    area: "",
    title: "整修",
    kind: "renovate",
    image: "/images/works/qy-165.webp",
    hidden: true,
  },
  {
    id: "QY-159",
    area: "台南安定",
    title: "台南安定｜貨梯",
    kind: "freight",
    image: "/images/works/qy-159.webp",
  },
  {
    id: "QY-153",
    area: "台南",
    title: "台南｜更新",
    kind: "renovate",
    image: "/images/works/qy-153.webp",
  },
];
