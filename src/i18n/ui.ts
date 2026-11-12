// Site copy, written separately for each language (not a line-by-line translation).
// Any text containing "[확인 필요: ...]" is rendered as a highlighted placeholder.

export const languages = {
  en: 'English',
  ja: '日本語',
  ko: '한국어',
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

export const htmlLang: Record<Lang, string> = { en: 'en', ja: 'ja', ko: 'ko' };

const en = {
  meta: {
    siteName: 'Good&Well',
    home: 'Good&Well | Korean seaweed manufacturer and exporter',
    homeDescription:
      'Roasted nori, seasoned seaweed and seaweed flakes made in Icheon, Korea. Export and private label supply by Jaewon Global Net.',
    products: 'Products',
    productsDescription:
      'Roasted seaweed for sushi and gimbap, seasoned seaweed snacks, full-size seasoned laver and seaweed flakes. Specifications and pack options.',
  },
  nav: {
    products: 'Products',
    factory: 'Factory & Quality',
    oem: 'OEM / Private Label',
    news: 'News',
    contact: 'Contact',
    menu: 'Menu',
    language: 'Language',
    skip: 'Skip to content',
  },
  hero: {
    eyebrow: 'Good&Well · Jaewon Global Net',
    title: 'We roast and pack Korean seaweed in our own factory, for importers and private label brands abroad.',
    lead: 'Roasted nori for sushi, seasoned seaweed snacks and flakes. More than 90% of our business is export, with Japan as our main market.',
    ctaSample: 'Request a sample',
    ctaCatalog: 'Catalog (PDF)',
    catalogPending: '[확인 필요: 새 카탈로그 PDF]',
    videoPending: '[확인 필요: 공장 영상 — 받으면 배경 영상으로 교체]',
  },
  stats: [
    { value: '90%+', label: 'Share of export in our business' },
    { value: 'Japan · France', label: 'Main markets (roasted seaweed to France)' },
    { value: '[확인 필요: 월 생산 능력]', label: 'Monthly production capacity' },
    { value: '[확인 필요: 설립 연도]', label: 'Established' },
  ],
  productsSection: {
    eyebrow: 'Products',
    title: 'What we make',
    lead: 'Each product is available in standard packs or in your own packaging.',
    viewAll: 'All products and specifications',
    details: 'Details and specs',
  },
  factory: {
    eyebrow: 'Factory & Quality',
    title: 'From raw sheet to carton on our own lines',
    lead: 'Feeding, sorting, roasting, seasoning, cutting and packing all happen in our factory in Icheon, Gyeonggi-do. Every pack passes a metal detector before it is boxed.',
    steps: {
      sorting: 'Sorting',
      roasting: 'Roasting',
      cutting: 'Cutting',
      innerPack: 'Inner packing',
    },
    certTitle: 'Certifications',
    certValue: '[확인 필요: 보유 인증 (HACCP 등)]',
  },
  oem: {
    eyebrow: 'OEM / Private Label',
    title: 'Five steps to your own label',
    lead: 'We produce under your brand, with your pack size and design.',
    steps: [
      { title: 'Inquiry', body: 'Tell us the product, pack size, target market and expected volume.' },
      { title: 'Sample', body: 'We send samples to your spec so you can check taste, size and texture.' },
      { title: 'Quotation', body: 'You receive a price based on your packaging and order volume.' },
      { title: 'Production', body: 'We produce with your approved packaging design and pack count.' },
      { title: 'Shipment', body: 'We prepare the export documents and ship from Korea.' },
    ],
    moqLabel: 'Minimum order',
    moqValue: '[확인 필요: MOQ]',
    leadLabel: 'Lead time',
    leadValue: '[확인 필요: 납기]',
  },
  news: {
    eyebrow: 'News',
    title: 'Latest news',
    empty: 'No news yet.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Ask for a quote or a sample',
    lead: 'Tell us what you are looking for. We reply in English, Japanese or Korean.',
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      country: 'Country',
      product: 'Product of interest',
      productAny: 'Not decided / several',
      oem: 'Private label (OEM)',
      message: 'Message',
      messageHint: 'Pack size, volume, destination port, etc.',
      submit: 'Send inquiry',
      sending: 'Sending…',
      success: 'Thank you. Your inquiry has been sent and we will reply by email.',
      error: 'Sorry, the message could not be sent. Please email us directly.',
      notReady: '[확인 필요: 문의 폼 키(Web3Forms) 발급 전 — 지금은 이메일로 문의]',
      subject: 'Website inquiry (EN)',
    },
    person: {
      title: 'Export sales',
      name: 'Suhyun Lee',
      role: 'Manager',
    },
    office: {
      title: 'Office and factory',
      company: 'Jaewon Global Net',
    },
    tel: 'Tel',
    fax: 'Fax',
    mobile: 'Mobile',
    email: 'Email',
  },
  footer: {
    brands: 'Brands',
    notice: 'Test version. Some values are still being confirmed.',
  },
  productPage: {
    title: 'Products',
    lead: 'Roasted and seasoned seaweed made in our factory in Korea. Packs and specifications can be adjusted for your market.',
    breadcrumb: 'Products',
    specTitle: 'Specifications',
    specCols: {
      label: 'Pack',
      sheetSize: 'Sheet size',
      netWeight: 'Net weight',
      perCarton: 'Packs per carton',
      containerLoad: 'Container load',
      shelfLife: 'Shelf life',
    },
    specNote: 'Other sheet counts and pack formats are available on request.',
    specSheet: 'Spec sheet (PDF)',
    specSheetPending: '[확인 필요: 스펙시트 PDF]',
    requestSample: 'Request a sample',
    askQuote: 'Ask for a quote',
    markets: 'Exported to',
    flavours: 'Flavours',
    overview: 'At a glance',
    otherProducts: 'Other products',
    photoPending: '[확인 필요: 제품 사진]',
    gallery: 'Photos',
    tbd: '[확인 필요]',
  },
  flavours: { Original: 'Original', Kimchi: 'Kimchi', Wasabi: 'Wasabi' } as Record<string, string>,
  roasted: {
    features: [
      'Laver only. No oil, no salt.',
      'Roasted at high temperature for a crisp sheet.',
      'Full sheets and half sheets, packed to the count you need.',
      'Available under your own label.',
    ],
    uses: 'Made for',
    usesList: ['Sushi rolls', 'Hand rolls', 'Onigiri', 'Gimbap'],
    overview: [
      { k: 'Ingredients', v: 'Roasted laver (no oil, no salt)' },
      { k: 'Origin', v: 'Laver from the southern coast of Korea, roasted in Icheon' },
      { k: 'Formats', v: 'Full sheet, half sheet' },
      { k: 'Grade', v: '[확인 필요: 등급 구분]' },
      { k: 'Storage', v: '[확인 필요: 보관 방법]' },
      { k: 'Packaging', v: '[확인 필요: 개별 포장·외포장 사양]' },
    ],
    alt: {
      'roasted-sheets.jpg': 'Stack of roasted seaweed sheets',
      'roasted-packs.jpg': 'Four retail packs of roasted sushi nori',
      'use-gimbap.jpg': 'Sliced gimbap rolled in roasted seaweed',
      'use-onigiri.jpg': 'Rice balls wrapped in roasted seaweed',
    } as Record<string, string>,
    packsCaption: 'Pack examples. [확인 필요: 사진 속 브랜드 공개 가능 여부]',
  },
};

type Dict = typeof en;

const ja: Dict = {
  meta: {
    siteName: 'Good&Well',
    home: 'Good&Well | 韓国の海苔メーカー・輸出',
    homeDescription:
      '韓国・利川の自社工場で焼き海苔、味付け海苔、ふりかけ海苔を製造しています。OEM・プライベートブランドのご相談も承ります。',
    products: '商品一覧',
    productsDescription:
      '寿司・キンパ用の焼き海苔、お弁当サイズの味付け海苔、全形味付け海苔、ドルジャバン。商品規格と包装形態のご案内です。',
  },
  nav: {
    products: '商品',
    factory: '工場・品質',
    oem: 'OEM・PB',
    news: 'お知らせ',
    contact: 'お問い合わせ',
    menu: 'メニュー',
    language: '言語',
    skip: '本文へ移動',
  },
  hero: {
    eyebrow: 'Good&Well・Jaewon Global Net',
    title: '韓国の自社工場で、海苔を焼き上げてから包装まで一貫して行っています。',
    lead: '寿司用の焼き海苔、味付け海苔、ふりかけ海苔を製造しており、売上の9割以上が輸出です。主な輸出先は日本です。',
    ctaSample: 'サンプルのご依頼',
    ctaCatalog: 'カタログ(PDF)',
    catalogPending: '[확인 필요: 새 카탈로그 PDF]',
    videoPending: '[확인 필요: 공장 영상 — 받으면 배경 영상으로 교체]',
  },
  stats: [
    { value: '90%以上', label: '売上に占める輸出の割合' },
    { value: '日本・フランス', label: '主な輸出先(焼き海苔はフランスへも出荷)' },
    { value: '[확인 필요: 월 생산 능력]', label: '月間生産能力' },
    { value: '[확인 필요: 설립 연도]', label: '設立' },
  ],
  productsSection: {
    eyebrow: 'Products',
    title: '取り扱い商品',
    lead: 'いずれの商品も、標準包装のほか、お客さまご指定の包装で製造いたします。',
    viewAll: '商品一覧と規格を見る',
    details: '詳細・規格',
  },
  factory: {
    eyebrow: 'Factory & Quality',
    title: '原料の投入から箱詰めまで、自社ラインで',
    lead: '投入、選別、焼き、味付け、裁断、包装までを京畿道利川市の自社工場で行っています。すべての製品は金属探知機を通してから箱詰めいたします。',
    steps: {
      sorting: '選別',
      roasting: '焼き',
      cutting: '裁断',
      innerPack: '個包装',
    },
    certTitle: '認証',
    certValue: '[확인 필요: 보유 인증 (HACCP 등)]',
  },
  oem: {
    eyebrow: 'OEM / Private Label',
    title: 'OEM・プライベートブランドの流れ',
    lead: 'お客さまのブランド名、内容量、パッケージデザインで製造いたします。',
    steps: [
      { title: 'お問い合わせ', body: 'ご希望の商品、内容量、販売国、おおよそのご発注量をお知らせください。' },
      { title: 'サンプル', body: 'ご希望の仕様に合わせたサンプルをお送りします。味やサイズ、食感をご確認ください。' },
      { title: 'お見積り', body: '包装仕様とご発注量をもとに、お見積りをご提示いたします。' },
      { title: '生産', body: 'ご承認いただいたデザインと入数で生産いたします。' },
      { title: '出荷', body: '輸出書類を整え、韓国より出荷いたします。' },
    ],
    moqLabel: '最小ロット',
    moqValue: '[확인 필요: MOQ]',
    leadLabel: '納期',
    leadValue: '[확인 필요: 납기]',
  },
  news: {
    eyebrow: 'News',
    title: 'お知らせ',
    empty: 'お知らせはまだありません。',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'お見積り・サンプルのご依頼',
    lead: 'ご希望の内容をお知らせください。日本語でご対応いたします。',
    form: {
      name: 'お名前',
      company: '会社名',
      email: 'メールアドレス',
      country: '国名',
      product: 'ご希望の商品',
      productAny: '未定・複数',
      oem: 'OEM・プライベートブランド',
      message: 'お問い合わせ内容',
      messageHint: '内容量、ご発注量、仕向港など',
      submit: '送信する',
      sending: '送信中…',
      success: 'お問い合わせありがとうございます。担当者よりメールにてご連絡いたします。',
      error: '送信できませんでした。お手数ですが、メールにて直接ご連絡ください。',
      notReady: '[확인 필요: 문의 폼 키(Web3Forms) 발급 전 — 지금은 이메일로 문의]',
      subject: 'ウェブサイトからのお問い合わせ(JA)',
    },
    person: {
      title: '輸出担当',
      name: 'イ・スヒョン',
      role: 'マネージャー',
    },
    office: {
      title: '本社・工場',
      company: 'Jaewon Global Net',
    },
    tel: 'TEL',
    fax: 'FAX',
    mobile: '携帯',
    email: 'メール',
  },
  footer: {
    brands: 'ブランド',
    notice: '試験公開中です。一部の数値は確認中です。',
  },
  productPage: {
    title: '商品一覧',
    lead: '韓国の自社工場で製造する焼き海苔と味付け海苔です。内容量や包装は、販売先に合わせてご相談いただけます。',
    breadcrumb: '商品',
    specTitle: '商品規格',
    specCols: {
      label: '規格',
      sheetSize: 'サイズ',
      netWeight: '内容量',
      perCarton: '入数(外装1箱)',
      containerLoad: 'コンテナ積載量',
      shelfLife: '賞味期限',
    },
    specNote: '上記以外の枚数・包装形態もご相談ください。',
    specSheet: '商品規格書(PDF)',
    specSheetPending: '[확인 필요: 스펙시트 PDF]',
    requestSample: 'サンプルのご依頼',
    askQuote: 'お見積りのご依頼',
    markets: '主な輸出先',
    flavours: '味',
    overview: '概要',
    otherProducts: 'その他の商品',
    photoPending: '[확인 필요: 제품 사진]',
    gallery: '写真',
    tbd: '[확인 필요]',
  },
  flavours: { Original: 'プレーン', Kimchi: 'キムチ', Wasabi: 'わさび' },
  roasted: {
    features: [
      '原材料は海苔のみ。油も塩も使っていません。',
      '高温で焼き上げ、パリッとした食感に仕上げています。',
      '全形・半切を、ご希望の枚数で包装いたします。',
      'お客さまのブランドでの製造も承ります。',
    ],
    uses: '用途',
    usesList: ['巻き寿司', '手巻き寿司', 'おにぎり', 'キンパ'],
    overview: [
      { k: '原材料', v: '海苔(油・塩不使用)' },
      { k: '原産地', v: '韓国南海岸産の原藻を利川工場で焼成' },
      { k: '形状', v: '全形、半切' },
      { k: '等級', v: '[확인 필요: 등급 구분]' },
      { k: '保存方法', v: '[확인 필요: 보관 방법]' },
      { k: '包装', v: '[확인 필요: 個包装・外装 사양]' },
    ],
    alt: {
      'roasted-sheets.jpg': '重ねた焼き海苔',
      'roasted-packs.jpg': '寿司用焼き海苔の小売パッケージ4種',
      'use-gimbap.jpg': '焼き海苔で巻いたキンパ',
      'use-onigiri.jpg': '焼き海苔を巻いたおにぎり',
    },
    packsCaption: '包装例です。[확인 필요: 사진 속 브랜드 공개 가능 여부]',
  },
};

const ko: Dict = {
  meta: {
    siteName: 'Good&Well',
    home: 'Good&Well | 김 수출 전문 제조사, 재원글로벌넷',
    homeDescription:
      '이천 공장에서 구운김, 조미김, 김자반을 만들어 해외로 수출합니다. OEM·PB 생산을 함께 합니다.',
    products: '제품',
    productsDescription:
      '스시·김밥용 구운김, 도시락김, 전장 조미김, 돌자반. 제품별 규격과 포장 옵션.',
  },
  nav: {
    products: '제품',
    factory: '공장·품질',
    oem: 'OEM·PB',
    news: '소식',
    contact: '문의',
    menu: '메뉴',
    language: '언어',
    skip: '본문 바로가기',
  },
  hero: {
    eyebrow: 'Good&Well · 재원글로벌넷',
    title: '이천 공장에서 김을 굽고 포장까지 직접 하는 수출 전문 제조사입니다.',
    lead: '스시용 구운김, 조미김, 김자반을 만듭니다. 수출 비중이 90%를 넘고, 주력 시장은 일본입니다.',
    ctaSample: '샘플 요청',
    ctaCatalog: '카탈로그(PDF)',
    catalogPending: '[확인 필요: 새 카탈로그 PDF]',
    videoPending: '[확인 필요: 공장 영상 — 받으면 배경 영상으로 교체]',
  },
  stats: [
    { value: '90% 이상', label: '수출 비중' },
    { value: '일본 · 프랑스', label: '주력 수출국 (구운김은 프랑스 수출)' },
    { value: '[확인 필요: 월 생산 능력]', label: '월 생산 능력' },
    { value: '[확인 필요: 설립 연도]', label: '설립' },
  ],
  productsSection: {
    eyebrow: 'Products',
    title: '만드는 제품',
    lead: '모든 제품은 기본 포장 외에 바이어가 원하는 포장으로도 생산합니다.',
    viewAll: '전체 제품과 규격 보기',
    details: '상세·규격',
  },
  factory: {
    eyebrow: 'Factory & Quality',
    title: '원초 투입부터 박스 포장까지 자체 라인에서',
    lead: '투입, 선별, 굽기, 조미, 절단, 포장을 모두 경기도 이천 공장에서 합니다. 모든 제품은 금속검출기를 통과한 뒤 박스에 담깁니다.',
    steps: {
      sorting: '선별',
      roasting: '굽기',
      cutting: '절단',
      innerPack: '개별 포장',
    },
    certTitle: '인증',
    certValue: '[확인 필요: 보유 인증 (HACCP 등)]',
  },
  oem: {
    eyebrow: 'OEM / Private Label',
    title: 'OEM·PB 진행 5단계',
    lead: '바이어 브랜드로, 원하는 중량과 디자인에 맞춰 생산합니다.',
    steps: [
      { title: '문의', body: '원하는 제품, 중량, 판매 국가, 예상 물량을 알려 주세요.' },
      { title: '샘플', body: '요청 사양에 맞춘 샘플을 보내 드립니다. 맛과 크기, 식감을 확인하세요.' },
      { title: '견적', body: '포장 사양과 물량을 기준으로 견적을 드립니다.' },
      { title: '생산', body: '확정된 디자인과 입수대로 생산합니다.' },
      { title: '선적', body: '수출 서류를 준비하고 한국에서 선적합니다.' },
    ],
    moqLabel: '최소 주문량',
    moqValue: '[확인 필요: MOQ]',
    leadLabel: '납기',
    leadValue: '[확인 필요: 납기]',
  },
  news: {
    eyebrow: 'News',
    title: '소식',
    empty: '아직 소식이 없습니다.',
  },
  contact: {
    eyebrow: 'Contact',
    title: '견적·샘플 문의',
    lead: '필요한 내용을 남겨 주세요. 한국어, 영어, 일본어로 답변합니다.',
    form: {
      name: '이름',
      company: '회사명',
      email: '이메일',
      country: '국가',
      product: '관심 제품',
      productAny: '미정·여러 품목',
      oem: 'OEM·PB 생산',
      message: '문의 내용',
      messageHint: '중량, 물량, 도착항 등',
      submit: '문의 보내기',
      sending: '보내는 중…',
      success: '문의가 접수되었습니다. 담당자가 이메일로 답변드리겠습니다.',
      error: '전송하지 못했습니다. 아래 이메일로 직접 연락해 주세요.',
      notReady: '[확인 필요: 문의 폼 키(Web3Forms) 발급 전 — 지금은 이메일로 문의]',
      subject: '웹사이트 문의 (KO)',
    },
    person: {
      title: '수출 담당',
      name: '이수현',
      role: '매니저',
    },
    office: {
      title: '본사·공장',
      company: '재원글로벌넷',
    },
    tel: '전화',
    fax: '팩스',
    mobile: '휴대전화',
    email: '이메일',
  },
  footer: {
    brands: '브랜드',
    notice: '시험판입니다. 일부 수치는 확인 중입니다.',
  },
  productPage: {
    title: '제품',
    lead: '이천 공장에서 만드는 구운김과 조미김입니다. 중량과 포장은 판매처에 맞춰 조정할 수 있습니다.',
    breadcrumb: '제품',
    specTitle: '제품 규격',
    specCols: {
      label: '규격',
      sheetSize: '김 크기',
      netWeight: '중량',
      perCarton: '박스 입수',
      containerLoad: '컨테이너 적재',
      shelfLife: '유통기한',
    },
    specNote: '표에 없는 매수와 포장 형태도 상담해 드립니다.',
    specSheet: '스펙시트(PDF)',
    specSheetPending: '[확인 필요: 스펙시트 PDF]',
    requestSample: '샘플 요청',
    askQuote: '견적 문의',
    markets: '수출국',
    flavours: '맛',
    overview: '한눈에 보기',
    otherProducts: '다른 제품',
    photoPending: '[확인 필요: 제품 사진]',
    gallery: '사진',
    tbd: '[확인 필요]',
  },
  flavours: { Original: '오리지널', Kimchi: '김치', Wasabi: '와사비' },
  roasted: {
    features: [
      '원재료는 김뿐입니다. 기름도 소금도 쓰지 않습니다.',
      '고온에서 구워 바삭합니다.',
      '전장과 반장을 원하는 매수로 포장합니다.',
      '바이어 브랜드로도 생산합니다.',
    ],
    uses: '용도',
    usesList: ['스시 롤', '핸드롤', '오니기리', '김밥'],
    overview: [
      { k: '원재료', v: '김 (기름·소금 무첨가)' },
      { k: '원산지', v: '남해안 원초, 이천 공장에서 구움' },
      { k: '형태', v: '전장, 반장' },
      { k: '등급', v: '[확인 필요: 등급 구분]' },
      { k: '보관', v: '[확인 필요: 보관 방법]' },
      { k: '포장', v: '[확인 필요: 개별 포장·외포장 사양]' },
    ],
    alt: {
      'roasted-sheets.jpg': '겹쳐 놓은 구운김',
      'roasted-packs.jpg': '스시용 구운김 소매 포장 4종',
      'use-gimbap.jpg': '구운김으로 만 김밥',
      'use-onigiri.jpg': '구운김을 두른 오니기리',
    },
    packsCaption: '포장 예시. [확인 필요: 사진 속 브랜드 공개 가능 여부]',
  },
};

export const ui: Record<Lang, Dict> = { en, ja, ko };

export function t(lang: Lang) {
  return ui[lang];
}

/** Build a localized path. `path` is the part after the language, e.g. "products/roasted-seaweed/". */
export function localize(lang: Lang, path = '') {
  const clean = path.replace(/^\/+/, '');
  return `/${lang}/${clean}`;
}

export function formatDate(date: Date, lang: Lang) {
  const locale = { en: 'en-GB', ja: 'ja-JP', ko: 'ko-KR' }[lang];
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Asia/Seoul' }).format(date);
}

export const company = {
  address: '87, Cheongbaengni-ro 697beon-gil, Baeksa-myeon, Icheon-si, Gyeonggi-do, Republic of Korea',
  addressKo: '경기도 이천시 백사면 청백리로697번길 87',
  tel: '+82-31-631-7223',
  fax: '+82-31-629-7226',
  contactMobile: '+82-10-3210-2101',
  // Personal address for now; replace with the company-domain address when it is issued.
  contactEmail: 'suhyun@ik.me',
  brands: ['Good&Well', '서우령', 'HaoQHaoP'],
};
