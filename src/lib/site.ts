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
  facebook: "https://www.facebook.com/profile.php?id=100064054864315",
  instagram: "",
  reel: "https://www.facebook.com/reel/1033082013055204",
} as const;

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

export type CaseItem = {
  id: string;
  area: string;
  title: string;
  stage: string;
  image: string;
  note: string;
};

export const CASES: CaseItem[] = [
  {
    id: "QY-040",
    area: "地區匿名",
    title: "樓梯旁井道與入口",
    stage: "完成面",
    image: "/images/branded/qy-040-finished-qy-logo.jpg",
    note: "完成畫面可見井道、入口與既有樓梯相鄰。",
  },
  {
    id: "QY-013",
    area: "地區匿名",
    title: "從材料進場到入口",
    stage: "工程階段",
    image: "/images/branded/qy-013-finished-qy-logo.jpg",
    note: "可見設備材料進場與完成入口，不代替尺寸或施工方法。",
  },
  {
    id: "QY-006",
    area: "台南",
    title: "入口與內裝銜接",
    stage: "入口完成面",
    image: "/images/branded/qy-006-finished-qy-logo.jpg",
    note: "工程前與完成入口的階段差異，正式條件以個案文件為準。",
  },
  {
    id: "QY-022",
    area: "地區匿名",
    title: "井道施工與採光車廂",
    stage: "採光完成面",
    image: "/images/branded/qy-022-finished-qy-logo.jpg",
    note: "畫面可見井道與採光車廂，規格不由照片推定。",
  },
  {
    id: "QY-060",
    area: "地區匿名",
    title: "有限空間完成面",
    stage: "有限空間",
    image: "/images/branded/qy-060-finished-qy-logo.jpg",
    note: "既有空間內的完成銜接，實際空間限制待個案確認。",
  },
  {
    id: "QY-002",
    area: "地區匿名",
    title: "室外與入口",
    stage: "室外施工",
    image: "/images/case-preview/qy-002-finished.jpg",
    note: "室外與入口完成畫面，僅描述可見內容。",
  },
  {
    id: "QY-030",
    area: "地區匿名",
    title: "入口完成面",
    stage: "入口",
    image: "/images/case-preview/qy-030-finished.jpg",
    note: "入口與周邊動線的完成畫面。",
  },
  {
    id: "QY-034",
    area: "地區匿名",
    title: "採光入口",
    stage: "採光",
    image: "/images/case-preview/qy-034-finished.jpg",
    note: "採光入口完成畫面，用途與完成狀態不由單張照片推定。",
  },
  {
    id: "QY-055",
    area: "地區匿名",
    title: "既有空間整合",
    stage: "既有空間",
    image: "/images/case-preview/qy-055-finished.jpg",
    note: "既有建物內的完成銜接。",
  },
  {
    id: "QY-076",
    area: "地區匿名",
    title: "施工中的井道",
    stage: "施工中",
    image: "/images/case-preview/qy-076-progress.jpg",
    note: "施工階段現場，不作為驗收或許可證明。",
  },
  {
    id: "QY-OLD-01",
    area: "地區匿名",
    title: "透天完成面",
    stage: "完成面",
    image: "/images/legacy/qy-old-finished-home.jpg",
    note: "舊站工程照。既有透天內的完成車廂與門。",
  },
  {
    id: "QY-OLD-02",
    area: "地區匿名",
    title: "室外井道",
    stage: "室外",
    image: "/images/legacy/qy-old-outdoor-day.jpg",
    note: "舊站工程照。外掛井道與建物外牆。",
  },
  {
    id: "QY-OLD-03",
    area: "地區匿名",
    title: "夜間室外井道",
    stage: "室外",
    image: "/images/legacy/qy-old-outdoor-night.jpg",
    note: "舊站工程照。夜間外觀，僅描述可見畫面。",
  },
  {
    id: "QY-OLD-04",
    area: "地區匿名",
    title: "車廂完成面",
    stage: "車廂",
    image: "/images/legacy/qy-old-cabin.jpg",
    note: "舊站工程照。車廂內裝完成畫面。",
  },
  {
    id: "QY-OLD-05",
    area: "地區匿名",
    title: "鋼構現場",
    stage: "施工中",
    image: "/images/legacy/qy-old-steel.jpg",
    note: "舊站工程照。鋼構組立，不由照片推定規格。",
  },
  {
    id: "QY-OLD-06",
    area: "地區匿名",
    title: "外掛井道",
    stage: "室外",
    image: "/images/legacy/qy-old-outdoor-shaft.jpg",
    note: "舊站工程照。建物外的井道與鷹架。",
  },
  {
    id: "QY-OLD-07",
    area: "地區匿名",
    title: "車廂木紋",
    stage: "車廂",
    image: "/images/legacy/qy-old-cabin-wood.jpg",
    note: "舊站工程照。車廂內完成面。",
  },
];
