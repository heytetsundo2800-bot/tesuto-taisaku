// テスト対策のデータ（科目・テスト日・カード）。Claudeが更新する。
window.TT_DATA = {
 "version": "2026-10-20",
 "subjects": [
  {
   "name": "地域行政原論",
   "order": 1,
   "slot": "水2 E206",
   "teacher": "大本晋也",
   "tests": [
    {
     "date": "2026-10-21",
     "id": "t1",
     "info": "授業開始から最初の30分・30点・遅刻しても延長なし。去年は穴埋め＋「簡単に説明せよ」の7問",
     "label": "第1回講義内試験",
     "range": "第1〜4回（ワークシート第2〜4回）",
     "seat": "窓際ブロック・11列・いちばん窓側",
     "time": "2限（10:50〜）"
    },
    {
     "date": "2026-11-25",
     "id": "t2",
     "info": "30点",
     "label": "第2回講義内試験",
     "time": "2限"
    },
    {
     "date": "2027-01-20",
     "id": "t3",
     "info": "40点",
     "label": "第3回講義内試験",
     "time": "2限"
    }
   ],
   "id": "chiiki-gyosei",
   "note": "去年の第2回（11/25）の過去問メモ：2つの査定方式／神奈川県の予算編成方針の7つの視点のうち2つ／条例と規則の違い／土光臨調のスローガン／民営化されたもの2つ／2008年の社会教育法改正の内容2つ／2014年の教育委員会制度改革"
  },
  {
   "name": "英語コミュニケーションⅡ",
   "order": 2,
   "slot": "金2 B424",
   "teacher": "VILLARROEL, Aldo",
   "tests": [
    {
     "date": "2026-10-23",
     "id": "q4",
     "info": "① FFD 4 の5文を覚えて書く（5点）② 単語：意味→単語3問・単語→意味2問（5点）",
     "label": "Quiz 4",
     "range": "Word Set 4（20語）・Form-Focused Dictation 4（can / can't）",
     "time": "2限・授業の最初（出席コードは開始4分以内）"
    },
    {
     "date": "2026-11-06",
     "id": "q5",
     "info": "① FFD 5 の5文を覚えて書く（5点）② 単語：意味→単語3問・単語→意味2問（5点）",
     "label": "Quiz 5",
     "range": "Word Set 5（20語）・Form-Focused Dictation 5（th / s）",
     "time": "2限・授業の最初"
    },
    {
     "date": "2026-11-13",
     "id": "mid",
     "info": "テスト（中間＋期末）で成績の40%",
     "label": "中間テスト",
     "range": "Word Set 1〜5（100語）＋Form-Focused Dictation 1〜5",
     "time": "2限"
    }
   ],
   "id": "eng-comm2"
  }
 ],
 "cards": [
  {
   "id": "chiiki-kako-1",
   "sid": "chiiki-gyosei",
   "tests": [
    "t1"
   ],
   "sec": "去年の過去問",
   "q": "【去年の過去問】地方自治は（　　　）制。",
   "a": "**二元代表**制",
   "star": true,
   "ord": 0.01,
   "h": "議会の議員と首長を、別々の選挙で選ぶ"
  },
  {
   "id": "chiiki-kako-2",
   "sid": "chiiki-gyosei",
   "tests": [
    "t1"
   ],
   "sec": "去年の過去問",
   "q": "【去年の過去問】ブライスは地方自治を（　　　）と定めた。",
   "a": "「**民主主義の学校**」",
   "star": true,
   "ord": 0.02
  },
  {
   "id": "chiiki-kako-3",
   "sid": "chiiki-gyosei",
   "tests": [
    "t1"
   ],
   "sec": "去年の過去問",
   "q": "【去年の過去問】「地方自治の本旨」とは何か、簡単に説明せよ。",
   "a": "**団体自治**と**住民自治**の2つ（憲法92条）。\n団体自治：国から独立した地方公共団体が、その地域の行政を自らの責任で行うこと。\n住民自治：地域の住民が、自らの意思に基づいて地域の行政を行うこと。",
   "star": true,
   "ord": 0.03
  },
  {
   "id": "chiiki-kako-4",
   "sid": "chiiki-gyosei",
   "tests": [
    "t1"
   ],
   "sec": "去年の過去問",
   "q": "【去年の過去問】国と地方公共団体との関係を簡単に説明せよ。",
   "a": "**上下・主従の関係ではなく、対等・協力の関係**。国の関与は法律で定めたものに限られる（関与の法定主義）。",
   "star": true,
   "ord": 0.04
  },
  {
   "id": "chiiki-kako-5",
   "sid": "chiiki-gyosei",
   "tests": [
    "t1"
   ],
   "sec": "去年の過去問",
   "q": "【去年の過去問】地方分権推進委員会で検討することになった主な政治課題のうち、2つを答えよ。",
   "a": "次のうち2つ：\n**変動する国際社会への対応**／**東京一極集中の是正**／少子高齢化への対応／機関委任事務制度の見直し",
   "star": true,
   "ord": 0.05,
   "h": "ゴロ：こ・と・し・き"
  },
  {
   "id": "chiiki-kako-6",
   "sid": "chiiki-gyosei",
   "tests": [
    "t1"
   ],
   "sec": "去年の過去問",
   "q": "【去年の過去問】地方分権一括法により規定された事務の名称をそれぞれ答えよ。",
   "a": "国から任された事務＝**法定受託事務**\n地方公共団体独自の事務＝**自治事務**",
   "star": true,
   "ord": 0.06
  },
  {
   "id": "chiiki-kako-7",
   "sid": "chiiki-gyosei",
   "tests": [
    "t1"
   ],
   "sec": "去年の過去問",
   "q": "【去年の過去問】2007年からの「第二次分権改革」で進められた2つの方向を書け。",
   "a": "**権限移譲**と**規制緩和**",
   "star": true,
   "ord": 0.07
  },
  {
   "id": "chiiki-kako-8",
   "sid": "chiiki-gyosei",
   "tests": [
    "t1"
   ],
   "sec": "去年の過去問",
   "q": "【去年の過去問】中核市の特徴を簡単に説明せよ。",
   "a": "**人口20万人以上**の市の**申し出**で政令指定（1996年度〜）。都道府県の事務の一部が移され、**保健所の設置**や**保育所・養護老人ホームの認可・監督**など、住民に身近な行政を行う。",
   "star": true,
   "ord": 0.08
  },
  {
   "a": "**第92条**",
   "h": "「地方公共団体の組織及び運営に関する事項は、地方自治の本旨に基いて、法律でこれを定める」",
   "ord": 1,
   "q": "地方自治の本旨を定めているのは、日本国憲法の第何条？",
   "sec": "第1回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-001"
  },
  {
   "a": "**団体自治**と**住民自治**",
   "ord": 2,
   "q": "地方自治の本旨をつくる2つの考え方は？",
   "sec": "第1回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-002"
  },
  {
   "a": "国から独立した**地域団体（地方公共団体）**を設け、その団体が地域行政を行うという考え方",
   "ord": 3,
   "q": "団体自治とは？",
   "sec": "第1回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-003"
  },
  {
   "a": "地域の**住民が自らの意思に基づいて**、自主的に地域行政を行うという考え方",
   "ord": 4,
   "q": "住民自治とは？",
   "sec": "第1回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-004"
  },
  {
   "a": "**民主主義**の学校（イギリスの政治学者**ブライス**）",
   "ord": 5,
   "q": "地方自治は「◯◯の学校」。言ったのは誰？",
   "sec": "第1回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-005"
  },
  {
   "a": "**二元代表制**（首長と議員を別々の選挙で選ぶ）",
   "h": "良い点：抑制と均衡が保ちやすい\n悪い点：対立すると行政が滞る／責任の所在があいまいになる",
   "ord": 6,
   "q": "国は議会制民主主義。では地方自治は？",
   "sec": "第1回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-006"
  },
  {
   "a": "**立法・行政・司法**。互いに「**抑制と均衡**」の関係",
   "ord": 7,
   "q": "権力分立（三権分立）の3つと、その関係は？",
   "sec": "第1回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-007"
  },
  {
   "a": "権力者を**法で拘束**して恣意的な支配を防ぎ、国民の権利・自由を守ること",
   "ord": 8,
   "q": "「法の支配」とは？",
   "sec": "第1回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-008"
  },
  {
   "a": "人民の同意（**人民と政府が結ぶ社会契約**）によって政府が成り立ち、**人民の意思に基づいて政治を行う**とする学説",
   "h": "ゴロ：「みんなの同意で政府ができる」\n唱えた人：ホッブズ・ロック・ルソー",
   "ord": 9,
   "q": "社会契約説とは？",
   "sec": "第2回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-009"
  },
  {
   "a": "**一般意志**",
   "h": "私有財産制の文明 →「富の偏在・不自由・不平等」→ 社会契約で回復",
   "ord": 10,
   "q": "ルソーが指導原理とすべきだとした、公共の利益をめざす普遍的な意思は？",
   "sec": "第2回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-010"
  },
  {
   "a": "昔は**流血**を伴うことが多かった。普通選挙が確立して以降は、**平和裏に**人民の意思に支持された政府が成立する",
   "h": "ゴロ：「昔は血、今は選挙」\n選挙＝最も平和的な政権交代の制度",
   "ord": 11,
   "q": "政権交代の今と昔、何がちがう？",
   "sec": "第2回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-011"
  },
  {
   "a": "**1925年**（女性参政権は戦後）",
   "ord": 12,
   "q": "日本で男子普通選挙が実現した年は？",
   "sec": "第2回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-012"
  },
  {
   "a": "自由権＝国家**からの**自由\n社会権＝国家**による**自由",
   "ord": 13,
   "q": "自由権と社会権、それぞれ「国家◯◯の自由」？",
   "sec": "第2回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-013"
  },
  {
   "a": "人民が国家（政府）による**不当な干渉や強制を受けない**権利",
   "ord": 14,
   "q": "自由権とは？",
   "sec": "第2回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-014"
  },
  {
   "a": "国家（政府）が人民の**人間らしい生活を保障する**権利。**憲法第25条**（健康で文化的な最低限度の生活）",
   "ord": 15,
   "q": "社会権とは？ 代表的な条文は？",
   "sec": "第2回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-015"
  },
  {
   "a": "**国民主権・平和主義・基本的人権の尊重**",
   "h": "国家（政府）はこれらを具現化するために政治（行政）を行っている",
   "ord": 16,
   "q": "日本国憲法の三大原理は？",
   "sec": "第2回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-016"
  },
  {
   "a": "安心して生活するために守るべきもの（**家・土地・財産・家族**）を守ってくれる公的な存在だから",
   "ord": 17,
   "q": "なぜ行政が必要？",
   "sec": "第2回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-017"
  },
  {
   "a": "**大綱**",
   "ord": 18,
   "q": "地方自治法第1条：地方公共団体の組織・運営に関する事項の「◯◯」を定める",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-018"
  },
  {
   "a": "**民主的**にして**能率的**な行政の確保",
   "ord": 19,
   "q": "地方自治法第1条：地方公共団体における「◯◯にして◯◯な行政の確保」",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-019"
  },
  {
   "a": "**住民の福祉の増進**",
   "ord": 20,
   "q": "地方公共団体の基本（いちばんの使命）は？（第1条の2）",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-020"
  },
  {
   "a": "役務（行政サービス）の提供を**等しく受ける権利**と、その**負担を分任する義務**",
   "ord": 21,
   "q": "住民の権利と義務（第10条）",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-021"
  },
  {
   "a": "**条例の制定・改廃請求**／首長・議員などの**解職請求（リコール）**／**議会の解散請求**",
   "h": "国会の解散請求はできないが、地方議会はできる",
   "ord": 22,
   "q": "住民の直接請求の例を3つ",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-022"
  },
  {
   "a": "**議決権**・**議案提出権**・首長の**不信任決議**・**百条委員会**",
   "ord": 23,
   "q": "地方議会の権限",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-023"
  },
  {
   "a": "**統括代表権**・**管理執行権**・**職員の指揮監督権**",
   "ord": 24,
   "q": "首長（知事・市町村長）の強い権限3つ",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-024"
  },
  {
   "a": "**地方財政法**（地財法）。**地方交付税交付金**と**目的別補助金**",
   "ord": 25,
   "q": "財務を規定する法律と、主な財源2つ",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-025"
  },
  {
   "a": "**上下・主従**の関係ではなく、**対等・協力**の関係",
   "h": "3回の授業で毎回出た。先生「しっかり覚えて」",
   "ord": 26,
   "q": "「国と地方」「地方公共団体相互」の関係は？",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-026"
  },
  {
   "a": "**関与の法定主義**（もう一つは関与の基本原則）",
   "ord": 27,
   "q": "国の関与は法律で定めたものに限る、という原則は？",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-027"
  },
  {
   "a": "戦前は**知事が国から任命**される中央集権だった。戦後は住民の**直接選挙**で首長・議会を選ぶ形に変わったから",
   "ord": 28,
   "q": "なぜ「対等・協力」をわざわざ言うのか？",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-028"
  },
  {
   "a": "**公職選挙法／地方公務員法／地方財政法／地方税法／地方交付税法／住民基本台帳法**",
   "h": "ゴロ：「選んで、人が、お金3つ、名簿」",
   "ord": 29,
   "q": "「基本的一般事項を定める法律」6つ",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-029"
  },
  {
   "a": "**地方公営企業法／地方教育行政の組織及び運営に関する法律／警察法／消防組織法／災害対策基本法／農業委員会等に関する法律**",
   "h": "ゴロ：「水・学・警・消・災・田んぼ」",
   "ord": 30,
   "q": "「特定の行政分野に関する法律」6つ",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-030"
  },
  {
   "a": "地方自治法は**地方自治の大綱**を定める法律だから。選挙・職員・財政などの基本事項、警察・消防、**首長から独立した行政委員会**などは個別の法律で定める",
   "ord": 31,
   "q": "なぜ地方自治法以外にも法律が要る？",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-031"
  },
  {
   "a": "**学問の自由**（政治権力に振り回されないため）",
   "ord": 32,
   "q": "教育委員会が首長部局から独立している理由は？",
   "sec": "第3回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-032"
  },
  {
   "a": "**都道府県の条例**（地方自治法第8条第2項）。村には要件なし",
   "ord": 33,
   "q": "「町」の要件を定めているのは？",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-033"
  },
  {
   "a": "**人口5,000人以上**／**連たん区域**（家が連なる市街地）／**商工業従事者が5割以上**／**病院・診療所**",
   "h": "ゴロ：「人・家・仕事・病院」",
   "ord": 34,
   "q": "町の要件4つ（熊本県条例）",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-034"
  },
  {
   "a": "**20**市。人口**50万**以上（実際は70万くらい）",
   "ord": 35,
   "q": "指定都市の数と人口要件",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-035"
  },
  {
   "a": "**都道府県と同等の行財政能力**。児童福祉・生活保護・保健・**都市計画**などの権限。**区役所**を置く。**教員採用試験**も自前",
   "ord": 36,
   "q": "指定都市の特徴",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-036"
  },
  {
   "a": "**62**市。人口**20万**以上＋市の**申し出**（1996年度〜）",
   "h": "授業中は口頭で60と言っていたが、範囲PDFは62",
   "ord": 37,
   "q": "中核市の数と人口要件",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-037"
  },
  {
   "a": "**保健所**の設置／**保育所・養護老人ホーム**の認可監督／身体障害者手帳の交付／教員の**研修**を自前で（採用は都道府県）",
   "ord": 38,
   "q": "中核市の特徴",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-038"
  },
  {
   "a": "1993 **地方分権推進決議**\n1995 **地方分権推進法**\n1999 **地方分権一括法**\n2007〜 **第二次分権改革**",
   "h": "ゴロ：決めて→進めて→まとめて→さらに",
   "ord": 39,
   "q": "分権の流れ：1993・1995・1999・2007",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-039"
  },
  {
   "a": "**変動する国際社会への対応／東京一極集中の是正／少子高齢化への対応／機関委任事務制度の見直し**",
   "h": "ゴロ：「こ・と・し・き」＝今年は気をつけろ",
   "ord": 40,
   "q": "地方分権推進委員会（1995）が検討した課題4つ",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-040"
  },
  {
   "a": "**阪神・淡路大震災**（1/17）→ **ボランティア元年**。縦割り行政から住民主導の行政へ",
   "ord": 41,
   "q": "1995年は何があった年？",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-041"
  },
  {
   "a": "**国と地方の役割の明確化／特例市制度の創設／合併特例債の創設**",
   "h": "ゴロ：「役得合併（やくとく がっぺい）」\n475の法律を一括改正",
   "ord": 42,
   "q": "地方分権一括法（1999）の施策3つ",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-042"
  },
  {
   "a": "国から＝**法定受託事務**\n独自＝**自治事務**",
   "h": "一括法で機関委任事務を廃止。昔は「3割自治」",
   "ord": 43,
   "q": "国から委任された事務／自治体独自の事務の名前",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-043"
  },
  {
   "a": "**戸籍・国政選挙・旅券（パスポート）・生活保護**",
   "h": "「全国どこでも同じじゃないと困るもの」",
   "ord": 44,
   "q": "法定受託事務の例",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-044"
  },
  {
   "a": "**都市計画の決定・病院等の開設許可・福祉**",
   "h": "「その町が自分で決めること」",
   "ord": 45,
   "q": "自治事務の例",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-045"
  },
  {
   "a": "①**国際社会における国家の存立**にかかわる事務\n②**全国的に統一**して定めることが望ましい基本的な準則\n③**全国的な規模・視点**で行う施策・事業",
   "h": "「外と付き合う・全国ルール・全国規模の事業」",
   "ord": 46,
   "q": "国が本来果たすべき役割3つ",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-046"
  },
  {
   "a": "地方への**権限移譲**と**規制緩和**",
   "h": "先生「特にこの言葉は理解してほしい」",
   "ord": 47,
   "q": "第二次分権改革（2007〜）で国と地方の関係はどう発展した？",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": true,
   "test": "t1",
   "id": "chiiki-t1-047"
  },
  {
   "a": "福祉国家で行政が肥大化 → 人件費削減・**小さな政府**をめざす行政改革 → 国の権限・事務を地方へ",
   "ord": 48,
   "q": "なぜ地方分権が進んだ？（背景）",
   "sec": "第4回",
   "sid": "chiiki-gyosei",
   "star": false,
   "test": "t1",
   "id": "chiiki-t1-048"
  },
  {
   "a": "**announcement**　/əˈnaʊns.mɛnt/",
   "ja": "お知らせ・発表",
   "ord": 1,
   "q": "act of informing people about something publicly\n（noun）",
   "say": "announcement",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "announcement",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-announcement"
  },
  {
   "a": "**assign**　/əˈsaɪn/",
   "ja": "割り当てる",
   "ord": 2,
   "q": "to give someone a particular job or something to do\n（verb）",
   "say": "assign",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "assign",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-assign"
  },
  {
   "a": "**attendance**　/əˈtɛn.dəns/",
   "h": "最後は -ance",
   "ja": "出席",
   "ord": 3,
   "q": "state of being present at a place or event\n（noun）",
   "say": "attendance",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "attendance",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-attendance"
  },
  {
   "a": "**compose**　/kəmˈpoʊz/",
   "h": "composition（名詞）とセット",
   "ja": "構成する・作る",
   "ord": 4,
   "q": "to come together to form or make something\n（verb）",
   "say": "compose",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "compose",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-compose"
  },
  {
   "a": "**composition**　/ˌkɑm.pəˈzɪʃ.ən/",
   "h": "compose（動詞）とセット",
   "ja": "作品・構成・作文",
   "ord": 5,
   "q": "something that is created from different parts to make something new\n（noun）",
   "say": "composition",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "composition",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-composition"
  },
  {
   "a": "**cough**　/kɑf/",
   "h": "-ough で「コフ」",
   "ja": "咳をする",
   "ord": 6,
   "q": "to force air through your throat with a short, loud noise\n（verb）",
   "say": "cough",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "cough",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-cough"
  },
  {
   "a": "**evaluation**　/ɪˌvæl.juˈeɪ.ʃən/",
   "ja": "評価",
   "ord": 7,
   "q": "judgment about the value or condition of something\n（noun）",
   "say": "evaluation",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "evaluation",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-evaluation"
  },
  {
   "a": "**firstly**　/ˈfɜrst.li/",
   "ja": "まず第一に",
   "ord": 8,
   "q": "before anything else\n（adv）",
   "say": "firstly",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "firstly",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-firstly"
  },
  {
   "a": "**format**　/ˈfɔr.mæt/",
   "ja": "形式",
   "ord": 9,
   "q": "form, design, or arrangement of something\n（noun）",
   "say": "format",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "format",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-format"
  },
  {
   "a": "**gesture**　/ˈdʒɛs.tʃər/",
   "h": "g は「ジェ」",
   "ja": "身ぶり・ジェスチャー",
   "ord": 10,
   "q": "a hand or body movement that expresses a particular idea or feeling\n（noun）",
   "say": "gesture",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "gesture",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-gesture"
  },
  {
   "a": "**grammar**　/ˈgræm.ər/",
   "h": "最後は -ar（-er ではない）",
   "ja": "文法",
   "ord": 11,
   "q": "rules that explain how words are used in a language\n（noun）",
   "say": "grammar",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "grammar",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-grammar"
  },
  {
   "a": "**greet**　/grit/",
   "ja": "あいさつする・迎える",
   "ord": 12,
   "q": "to meet someone with friendly words and actions; to welcome\n（verb）",
   "say": "greet",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "greet",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-greet"
  },
  {
   "a": "**guideline**　/ˈgaɪdˌlaɪn/",
   "h": "gui-（グ）",
   "ja": "指針・ガイドライン",
   "ord": 13,
   "q": "rule, instruction or principle\n（noun）",
   "say": "guideline",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "guideline",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-guideline"
  },
  {
   "a": "**margin**　/ˈmɑr.dʒɪn/",
   "h": "g は「ジ」",
   "ja": "余白",
   "ord": 14,
   "q": "edge or border of a page on above, below\n（noun）",
   "say": "margin",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "margin",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-margin"
  },
  {
   "a": "**paragraph**　/ˈpɛr.əˌɡræf/",
   "ja": "段落",
   "ord": 15,
   "q": "section of writing that usually deals with one subject\n（noun）",
   "say": "paragraph",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "paragraph",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-paragraph"
  },
  {
   "a": "**participation**　/pɑrˌtɪs.əˈpeɪ.ʃən/",
   "ja": "参加",
   "ord": 16,
   "q": "act of being involved in something\n（noun）",
   "say": "participation",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "participation",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-participation"
  },
  {
   "a": "**registration**　/ˌrɛdʒ.əˈstreɪ.ʃən/",
   "ja": "登録",
   "ord": 17,
   "q": "act of recording information on an official list\n（noun）",
   "say": "registration",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "registration",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-registration"
  },
  {
   "a": "**substitute**　/ˈsʌb.stɪˌtut/",
   "ja": "代わりの人・物",
   "ord": 18,
   "q": "person or thing that takes the place of something\n（noun）",
   "say": "substitute",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "substitute",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-substitute"
  },
  {
   "a": "**summarize**　/ˈsʌm.əˌraɪz/",
   "ja": "要約する",
   "ord": 19,
   "q": "to state the main or most important ideas of something\n（verb）",
   "say": "summarize",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "summarize",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-summarize"
  },
  {
   "a": "**verb**　/vɜrb/",
   "ja": "動詞",
   "ord": 20,
   "q": "word that expresses an action or state\n（noun）",
   "say": "verb",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "spell": "verb",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s1-verb"
  },
  {
   "a": "**acceptable**　/ækˈsɛp.tə.bəl/",
   "ja": "受け入れられる・まずまずの",
   "ord": 21,
   "q": "satisfactory; good enough\n（adj）",
   "say": "acceptable",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "acceptable",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-acceptable"
  },
  {
   "a": "**awareness**　/əˈwɛər.nɪs/",
   "ja": "意識・認識",
   "ord": 22,
   "q": "having knowledge of something\n（noun）",
   "say": "awareness",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "awareness",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-awareness"
  },
  {
   "a": "**beneath**　/bɪˈniθ/",
   "h": "th で終わる",
   "ja": "〜の下に",
   "ord": 23,
   "q": "under; in or to a lower position; below\n（prep）",
   "say": "beneath",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "beneath",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-beneath"
  },
  {
   "a": "**continuous**　/kənˈtɪn.ju.əs/",
   "ja": "絶え間ない・連続した",
   "ord": 24,
   "q": "happening without stops\n（adj）",
   "say": "continuous",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "continuous",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-continuous"
  },
  {
   "a": "**correspond**　/ˌkɔr.əˈspɑnd/",
   "ja": "一致する・対応する",
   "ord": 25,
   "q": "to have similarity or equality with something\n（verb）",
   "say": "correspond",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "correspond",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-correspond"
  },
  {
   "a": "**counter**　/ˈkaʊn.tər/",
   "ja": "カウンター・調理台",
   "ord": 26,
   "q": "a long, flat surface in a shop or kitchen where work is done\n（noun）",
   "say": "counter",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "counter",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-counter"
  },
  {
   "a": "**fiction**　/ˈfɪk.ʃən/",
   "ja": "小説・作り話",
   "ord": 27,
   "q": "book or story including ideas, people, and events that are not real\n（noun）",
   "say": "fiction",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "fiction",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-fiction"
  },
  {
   "a": "**float**　/fləʊt/",
   "ja": "浮かぶ",
   "ord": 28,
   "q": "to stay on the surface of a liquid and not sink\n（verb）",
   "say": "float",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "float",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-float"
  },
  {
   "a": "**illustration**　/ˌɪl.əˈstreɪ.ʃən/",
   "ja": "イラスト・図解",
   "ord": 29,
   "q": "picture that helps explain something\n（noun）",
   "say": "illustration",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "illustration",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-illustration"
  },
  {
   "a": "**measurement**　/ˈmɛʒ.ər.mənt/",
   "ja": "測定・寸法",
   "ord": 30,
   "q": "the finding of the size or amount of something or someone\n（noun）",
   "say": "measurement",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "measurement",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-measurement"
  },
  {
   "a": "**modify**　/ˈmɑd.əˌfaɪ/",
   "ja": "修正する",
   "ord": 31,
   "q": "to make small change to something\n（verb）",
   "say": "modify",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "modify",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-modify"
  },
  {
   "a": "**motivate**　/ˈmoʊ.təˌveɪt/",
   "ja": "やる気にさせる",
   "ord": 32,
   "q": "to make someone excited about doing something\n（verb）",
   "say": "motivate",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "motivate",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-motivate"
  },
  {
   "a": "**mutual**　/ˈmju.tʃu.əl/",
   "h": "mu-tu-al",
   "ja": "相互の・共通の",
   "ord": 33,
   "q": "shared between two or more people\n（adj）",
   "say": "mutual",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "mutual",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-mutual"
  },
  {
   "a": "**narrative**　/ˈnær.ə.tɪv/",
   "ja": "物語・語り",
   "ord": 34,
   "q": "the telling of a story\n（noun）",
   "say": "narrative",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "narrative",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-narrative"
  },
  {
   "a": "**opponent**　/əˈpoʊ.nənt/",
   "ja": "対戦相手",
   "ord": 35,
   "q": "person that you are competing against in a game or contest\n（noun）",
   "say": "opponent",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "opponent",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-opponent"
  },
  {
   "a": "**permission**　/pərˈmɪʃ.ən/",
   "ja": "許可",
   "ord": 36,
   "q": "right to do something as allowed by another\n（noun）",
   "say": "permission",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "permission",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-permission"
  },
  {
   "a": "**random**　/ˈræn.dəm/",
   "ja": "無作為の・ランダムな",
   "ord": 37,
   "q": "chosen or done without a plan or pattern\n（adj）",
   "say": "random",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "random",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-random"
  },
  {
   "a": "**scope**　/ˈskəʊp/",
   "ja": "範囲",
   "ord": 38,
   "q": "range of things that something includes\n（noun）",
   "say": "scope",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "scope",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-scope"
  },
  {
   "a": "**supplement**　/ˈsʌp.lə.mənt/",
   "ja": "補足・サプリ",
   "ord": 39,
   "q": "something added to another thing to make it better\n（noun）",
   "say": "supplement",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "supplement",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-supplement"
  },
  {
   "a": "**visible**　/ˈvɪz.ə.bəl/",
   "ja": "目に見える",
   "ord": 40,
   "q": "easily seen or understood\n（adj）",
   "say": "visible",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "spell": "visible",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s2-visible"
  },
  {
   "a": "**absolute**　/ˈæb.səˌlut/",
   "ja": "絶対的な・完全な",
   "ord": 41,
   "q": "complete and total\n（adj）",
   "say": "absolute",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "absolute",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-absolute"
  },
  {
   "a": "**architecture**　/ˈɑr.kɪˌtɛk.tʃər/",
   "ja": "建築",
   "ord": 42,
   "q": "design and construction of buildings\n（noun）",
   "say": "architecture",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "architecture",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-architecture"
  },
  {
   "a": "**barrier**　/ˈbær.i.ər/",
   "ja": "障壁・バリア",
   "ord": 43,
   "q": "structure or object that stops free movement\n（noun）",
   "say": "barrier",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "barrier",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-barrier"
  },
  {
   "a": "**burst**　/bərst/",
   "ja": "破裂する",
   "ord": 44,
   "q": "to break in a sudden and violent way\n（verb）",
   "say": "burst",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "burst",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-burst"
  },
  {
   "a": "**bury**　/ˈbɛr.i/",
   "h": "u を「エ」と読む",
   "ja": "埋める",
   "ord": 45,
   "q": "to put something into the ground and cover it\n（verb）",
   "say": "bury",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "bury",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-bury"
  },
  {
   "a": "**capability**　/ˌkeɪ.pəˈbɪl.ɪ.ti/",
   "ja": "能力",
   "ord": 46,
   "q": "means, ability, or potential to do something\n（noun）",
   "say": "capability",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "capability",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-capability"
  },
  {
   "a": "**dare**　/dɛər/",
   "ja": "あえて〜する",
   "ord": 47,
   "q": "to have enough courage to do something\n（verb）",
   "say": "dare",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "dare",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-dare"
  },
  {
   "a": "**dedicate**　/ˈdɛd.ɪˌkeɪt/",
   "ja": "捧げる",
   "ord": 48,
   "q": "to give your energy, time, etc. completely to someone\n（verb）",
   "say": "dedicate",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "dedicate",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-dedicate"
  },
  {
   "a": "**divorce**　/dɪˈvɔrs/",
   "ja": "離婚",
   "ord": 49,
   "q": "legal ending of a marriage\n（noun）",
   "say": "divorce",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "divorce",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-divorce"
  },
  {
   "a": "**fulfill**　/fʊlˈfɪl/",
   "h": "l が2つ（最後）",
   "ja": "果たす・満たす",
   "ord": 50,
   "q": "to do something that was promised or required\n（verb）",
   "say": "fulfill",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "fulfill",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-fulfill"
  },
  {
   "a": "**laboratory**　/ˈlæb.rəˌtɔr.i/",
   "ja": "実験室・研究所",
   "ord": 51,
   "q": "a place for doing research and experiments\n（noun）",
   "say": "laboratory",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "laboratory",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-laboratory"
  },
  {
   "a": "**passion**　/ˈpæʃ.ən/",
   "ja": "情熱",
   "ord": 52,
   "q": "powerful, positive feeling about something\n（noun）",
   "say": "passion",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "passion",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-passion"
  },
  {
   "a": "**possess**　/pəˈzɛs/",
   "h": "s が2組：po-ss-e-ss。Set 5 の possession とセット",
   "ja": "所有する",
   "ord": 53,
   "q": "to have or own something\n（verb）",
   "say": "possess",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "possess",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-possess"
  },
  {
   "a": "**resist**　/rɪˈzɪst/",
   "ja": "抵抗する",
   "ord": 54,
   "q": "to try to stop or prevent something\n（verb）",
   "say": "resist",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "resist",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-resist"
  },
  {
   "a": "**rid**　/ˈrɪd/",
   "h": "get rid of ＝ 取り除く",
   "ja": "取り除く",
   "ord": 55,
   "q": "to no longer be wanted so you throw it away\n（verb）",
   "say": "rid",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "rid",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-rid"
  },
  {
   "a": "**roughly**　/ˈrʌf.li/",
   "ja": "おおよそ",
   "ord": 56,
   "q": "in an inexact or imprecise manner\n（adv）",
   "say": "roughly",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "roughly",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-roughly"
  },
  {
   "a": "**ruin**　/ˈru.ɪn/",
   "ja": "台無しにする",
   "ord": 57,
   "q": "to spoil something, to make it useless\n（verb）",
   "say": "ruin",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "ruin",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-ruin"
  },
  {
   "a": "**slave**　/sleɪv/",
   "ja": "奴隷",
   "ord": 58,
   "q": "someone who is legally owned by another person\n（noun）",
   "say": "slave",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "slave",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-slave"
  },
  {
   "a": "**tendency**　/ˈtɛn.dən.si/",
   "ja": "傾向",
   "ord": 59,
   "q": "quality that something happens or someone behaves in a particular way\n（noun）",
   "say": "tendency",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "tendency",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-tendency"
  },
  {
   "a": "**wealthy**　/ˈwɛl.θi/",
   "ja": "裕福な",
   "ord": 60,
   "q": "having a great amount of money or property\n（adj）",
   "say": "wealthy",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "spell": "wealthy",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-s3-wealthy"
  },
  {
   "a": "**accomplish**　/əˈkɑm.plɪʃ/",
   "h": "c が2つ：a-cc-omplish",
   "ja": "成し遂げる",
   "ord": 61,
   "q": "to succeed in doing; complete successfully\n（verb）",
   "say": "accomplish",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "accomplish",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-accomplish"
  },
  {
   "a": "**celebration**　/ˌsɛl.əˈbreɪ.ʃən/",
   "ja": "お祝い",
   "ord": 62,
   "q": "special event where people show the importance of something\n（noun）",
   "say": "celebration",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "celebration",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-celebration"
  },
  {
   "a": "**compromise**　/ˈkɑm.prəˌmaɪz/",
   "h": "定義は名詞っぽいが、表では verb",
   "ja": "妥協（する）",
   "ord": 63,
   "q": "an agreement in which each side must give up some things\n（verb）",
   "say": "compromise",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "compromise",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-compromise"
  },
  {
   "a": "**embarrass**　/ɛmˈbær.əs/",
   "h": "r が2つ、s が2つ：emba-rr-a-ss",
   "ja": "恥ずかしい思いをさせる",
   "ord": 64,
   "q": "to cause someone to feel uncomfortable about something\n（verb）",
   "say": "embarrass",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "embarrass",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-embarrass"
  },
  {
   "a": "**embrace**　/ɛmˈbreɪs/",
   "ja": "抱きしめる",
   "ord": 65,
   "q": "to hold someone closely\n（verb）",
   "say": "embrace",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "embrace",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-embrace"
  },
  {
   "a": "**entertain**　/ˌɛn.tərˈteɪn/",
   "ja": "もてなす・楽しませる",
   "ord": 66,
   "q": "to take care of guests by helping them enjoy their time\n（verb）",
   "say": "entertain",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "entertain",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-entertain"
  },
  {
   "a": "**fantastic**　/fænˈtæs.tɪk/",
   "ja": "空想的な・すばらしい",
   "ord": 67,
   "q": "very fanciful in design, construction, or appearance\n（adj）",
   "say": "fantastic",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "fantastic",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-fantastic"
  },
  {
   "a": "**flash**　/flæʃ/",
   "ja": "閃光・フラッシュ",
   "ord": 68,
   "q": "sudden bright light\n（noun）",
   "say": "flash",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "flash",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-flash"
  },
  {
   "a": "**gallery**　/ˈgæl.ə.ri/",
   "ja": "美術館・画廊",
   "ord": 69,
   "q": "place to look at various types of art\n（noun）",
   "say": "gallery",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "gallery",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-gallery"
  },
  {
   "a": "**genetic**　/dʒəˈnɛt.ɪk/",
   "ja": "遺伝の",
   "ord": 70,
   "q": "concerning the parts of a cell that determine particular characteristics\n（adj）",
   "say": "genetic",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "genetic",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-genetic"
  },
  {
   "a": "**glance**　/glɑns/",
   "ja": "ちらっと見る",
   "ord": 71,
   "q": "to look at someone or something quickly\n（verb）",
   "say": "glance",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "glance",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-glance"
  },
  {
   "a": "**historic**　/hɪˈstɔr.ɪk/",
   "ja": "歴史的な（有名な）",
   "ord": 72,
   "q": "belonging to the past; of what is important or famous in the past\n（adj）",
   "say": "historic",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "historic",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-historic"
  },
  {
   "a": "**literally**　/ˈlɪt.ər.ə.li/",
   "h": "literary（文学の）と取り違え注意",
   "ja": "文字どおり",
   "ord": 73,
   "q": "in a way that expresses the exact meaning of something\n（adv）",
   "say": "literally",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "literally",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-literally"
  },
  {
   "a": "**literary**　/ˈlɪt.əˌrɛr.i/",
   "h": "literally（文字どおり）と取り違え注意",
   "ja": "文学の",
   "ord": 74,
   "q": "concerned with written works\n（adj）",
   "say": "literary",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "literary",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-literary"
  },
  {
   "a": "**opera**　/ˈɑp.ər.ə/",
   "ja": "オペラ",
   "ord": 75,
   "q": "play with music in which all the words are sung\n（noun）",
   "say": "opera",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "opera",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-opera"
  },
  {
   "a": "**praise**　/preɪz/",
   "ja": "ほめる",
   "ord": 76,
   "q": "to express approval of something or someone\n（verb）",
   "say": "praise",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "praise",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-praise"
  },
  {
   "a": "**publisher**　/ˈpʌb.lɪ.ʃər/",
   "ja": "出版社",
   "ord": 77,
   "q": "business that produces books or magazines\n（noun）",
   "say": "publisher",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "publisher",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-publisher"
  },
  {
   "a": "**therapy**　/ˈθɛr.ə.pi/",
   "h": "th で始まる",
   "ja": "治療・セラピー",
   "ord": 78,
   "q": "treatment intended to help fix your problem or medical illness\n（noun）",
   "say": "therapy",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "therapy",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-therapy"
  },
  {
   "a": "**twist**　/twɪst/",
   "ja": "ねじる",
   "ord": 79,
   "q": "to turn something in opposite directions at the same time\n（verb）",
   "say": "twist",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "twist",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-twist"
  },
  {
   "a": "**versus**　/ˈvɜr.səs/",
   "ja": "〜対〜（vs.）",
   "ord": 80,
   "q": "used to show that a thing or person is against another thing or person\n（prep）",
   "say": "versus",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "spell": "versus",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-s4-versus"
  },
  {
   "a": "**boost**　/bust/",
   "ja": "押し上げる・高める",
   "ord": 81,
   "q": "to help increasing progress or growth\n（verb）",
   "say": "boost",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "boost",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-boost"
  },
  {
   "a": "**ceremony**　/ˈsɛr.əˌmoʊ.ni/",
   "h": "c で始まる（セ）",
   "ja": "式典・儀式",
   "ord": 82,
   "q": "special social or religious event\n（noun）",
   "say": "ceremony",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "ceremony",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-ceremony"
  },
  {
   "a": "**curious**　/ˈkjʊər.i.əs/",
   "ja": "好奇心のある",
   "ord": 83,
   "q": "wanting to know more about something\n（adj）",
   "say": "curious",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "curious",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-curious"
  },
  {
   "a": "**democratic**　/ˌdɛm.əˈkræt.ɪk/",
   "ja": "民主的な",
   "ord": 84,
   "q": "of democracy; entitling the people to power\n（adj）",
   "say": "democratic",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "democratic",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-democratic"
  },
  {
   "a": "**disagree**　/ˌdɪs.əˈgri/",
   "ja": "反対する・意見が違う",
   "ord": 85,
   "q": "to have a different opinion from someone\n（verb）",
   "say": "disagree",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "disagree",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-disagree"
  },
  {
   "a": "**evolve**　/ɪˈvɑlv/",
   "ja": "進化する・発展する",
   "ord": 86,
   "q": "to slowly change or develop into something better\n（verb）",
   "say": "evolve",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "evolve",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-evolve"
  },
  {
   "a": "**exceed**　/ɪkˈsid/",
   "h": "e が2つ：exc-ee-d",
   "ja": "超える",
   "ord": 87,
   "q": "to be greater in number than something\n（verb）",
   "say": "exceed",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "exceed",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-exceed"
  },
  {
   "a": "**fortune**　/ˈfɔr.tʃən/",
   "ja": "運・幸運",
   "ord": 88,
   "q": "chance or luck, particularly good luck\n（noun）",
   "say": "fortune",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "fortune",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-fortune"
  },
  {
   "a": "**insight**　/ˈɪnˌsaɪt/",
   "ja": "洞察・見抜く力",
   "ord": 89,
   "q": "a clear idea about how something works\n（noun）",
   "say": "insight",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "insight",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-insight"
  },
  {
   "a": "**mixture**　/ˈmɪks.tʃər/",
   "ja": "混合物",
   "ord": 90,
   "q": "something made by combining two or more things\n（noun）",
   "say": "mixture",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "mixture",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-mixture"
  },
  {
   "a": "**partnership**　/ˈpɑrt.nərˌʃɪp/",
   "ja": "協力関係",
   "ord": 91,
   "q": "working with others for some purpose\n（noun）",
   "say": "partnership",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "partnership",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-partnership"
  },
  {
   "a": "**personnel**　/ˌpɜr.səˈnɛl/",
   "h": "n が2つ＋el。personal（個人の）とは別",
   "ja": "職員・人事",
   "ord": 92,
   "q": "group of people who work for a company\n（noun）",
   "say": "personnel",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "personnel",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-personnel"
  },
  {
   "a": "**pile**　/paɪl/",
   "ja": "山・積み重ね",
   "ord": 93,
   "q": "group of things one on top of another\n（noun）",
   "say": "pile",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "pile",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-pile"
  },
  {
   "a": "**possession**　/pəˈzɛʃ.ən/",
   "h": "s が2組＋ion：po-ss-e-ss-ion",
   "ja": "所有・所持品",
   "ord": 94,
   "q": "having or owning something\n（noun）",
   "say": "possession",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "possession",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-possession"
  },
  {
   "a": "**pregnant**　/ˈprɛg.nənt/",
   "h": "g を忘れない",
   "ja": "妊娠している",
   "ord": 95,
   "q": "when women carry a child inside them that is not yet born\n（adj）",
   "say": "pregnant",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "pregnant",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-pregnant"
  },
  {
   "a": "**psychological**　/ˌsaɪ.kəˈlɑdʒ.ɪ.kəl/",
   "h": "最初の p は読まない（サイコ）",
   "ja": "心理的な",
   "ord": 96,
   "q": "having to do with the mind\n（adj）",
   "say": "psychological",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "psychological",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-psychological"
  },
  {
   "a": "**sake**　/seɪk/",
   "h": "for the sake of ＝ 〜のために",
   "ja": "ため・利益（for the sake of）",
   "ord": 97,
   "q": "interest or benefit of someone or something\n（noun）",
   "say": "sake",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "sake",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-sake"
  },
  {
   "a": "**scholar**　/ˈskɑl.ər/",
   "h": "sch で「スク」",
   "ja": "学者",
   "ord": 98,
   "q": "a person who studies and knows a lot about a particular subject\n（noun）",
   "say": "scholar",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "scholar",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-scholar"
  },
  {
   "a": "**stake**　/steɪk/",
   "h": "steak（ステーキ）とは別",
   "ja": "杭（くい）",
   "ord": 99,
   "q": "a strong stick with a pointed end that you push into the ground\n（verb）",
   "say": "stake",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "stake",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-stake"
  },
  {
   "a": "**tackle**　/ˈtæk.əl/",
   "ja": "取り組む",
   "ord": 100,
   "q": "to take action to solve a difficult problem\n（verb）",
   "say": "tackle",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "spell": "tackle",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-s5-tackle"
  },
  {
   "a": "Do you mind if I sit here?",
   "h": "「Do you」は弱く速く「ジュ /djuː/」とつながる",
   "ja": "ここに座ってもいいですか？",
   "ord": 101,
   "q": "この文を英語で書く：\n「ここに座ってもいいですか？」\n（FFD 1：Do you）",
   "say": "Do you mind if I sit here?",
   "sec": "FFD 1",
   "sid": "eng-comm2",
   "spell": "Do you mind if I sit here?",
   "star": true,
   "tests": [
    "mid"
   ],
   "id": "eng-f1-1"
  },
  {
   "a": "When do you think you'll have the time?",
   "h": "「Do you」は弱く速く「ジュ /djuː/」とつながる",
   "ja": "いつ時間ができると思う？",
   "ord": 102,
   "q": "この文を英語で書く：\n「いつ時間ができると思う？」\n（FFD 1：Do you）",
   "say": "When do you think you'll have the time?",
   "sec": "FFD 1",
   "sid": "eng-comm2",
   "spell": "When do you think you'll have the time?",
   "star": true,
   "tests": [
    "mid"
   ],
   "id": "eng-f1-2"
  },
  {
   "a": "Didn't you think his writing was bad?",
   "h": "「Do you」は弱く速く「ジュ /djuː/」とつながる",
   "ja": "彼の文章、ひどいと思わなかった？",
   "ord": 103,
   "q": "この文を英語で書く：\n「彼の文章、ひどいと思わなかった？」\n（FFD 1：Do you）",
   "say": "Didn't you think his writing was bad?",
   "sec": "FFD 1",
   "sid": "eng-comm2",
   "spell": "Didn't you think his writing was bad?",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-f1-3"
  },
  {
   "a": "Did you find out what area it's in?",
   "h": "「Do you」は弱く速く「ジュ /djuː/」とつながる",
   "ja": "それがどの地域にあるか分かった？",
   "ord": 104,
   "q": "この文を英語で書く：\n「それがどの地域にあるか分かった？」\n（FFD 1：Do you）",
   "say": "Did you find out what area it's in?",
   "sec": "FFD 1",
   "sid": "eng-comm2",
   "spell": "Did you find out what area it's in?",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-f1-4"
  },
  {
   "a": "Do you know how to use it?",
   "h": "「Do you」は弱く速く「ジュ /djuː/」とつながる",
   "ja": "使い方わかる？",
   "ord": 105,
   "q": "この文を英語で書く：\n「使い方わかる？」\n（FFD 1：Do you）",
   "say": "Do you know how to use it?",
   "sec": "FFD 1",
   "sid": "eng-comm2",
   "spell": "Do you know how to use it?",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-f1-5"
  },
  {
   "a": "Have you ever been to that place at night?",
   "h": "「you」は弱く「ヤ／ユ」。前の音とくっつく（have you →ハヴュ）",
   "ja": "夜にあの場所に行ったことある？",
   "ord": 106,
   "q": "この文を英語で書く：\n「夜にあの場所に行ったことある？」\n（FFD 2：you）",
   "say": "Have you ever been to that place at night?",
   "sec": "FFD 2",
   "sid": "eng-comm2",
   "spell": "Have you ever been to that place at night?",
   "star": true,
   "tests": [
    "mid"
   ],
   "id": "eng-f2-1"
  },
  {
   "a": "How do you like your new job?",
   "h": "「you」は弱く「ヤ／ユ」。前の音とくっつく（have you →ハヴュ）",
   "ja": "新しい仕事はどう？",
   "ord": 107,
   "q": "この文を英語で書く：\n「新しい仕事はどう？」\n（FFD 2：you）",
   "say": "How do you like your new job?",
   "sec": "FFD 2",
   "sid": "eng-comm2",
   "spell": "How do you like your new job?",
   "star": true,
   "tests": [
    "mid"
   ],
   "id": "eng-f2-2"
  },
  {
   "a": "I'm sorry you believe him, but I didn't change my number because of you.",
   "h": "「you」は弱く「ヤ／ユ」。前の音とくっつく（have you →ハヴュ）",
   "ja": "彼を信じているのは残念だけど、君のせいで番号を変えたわけじゃない",
   "ord": 108,
   "q": "この文を英語で書く：\n「彼を信じているのは残念だけど、君のせいで番号を変えたわけじゃない」\n（FFD 2：you）",
   "say": "I'm sorry you believe him, but I didn't change my number because of you.",
   "sec": "FFD 2",
   "sid": "eng-comm2",
   "spell": "I'm sorry you believe him, but I didn't change my number because of you.",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-f2-3"
  },
  {
   "a": "Would you like anything else?",
   "h": "「you」は弱く「ヤ／ユ」。前の音とくっつく（have you →ハヴュ）",
   "ja": "ほかに何かいかがですか？",
   "ord": 109,
   "q": "この文を英語で書く：\n「ほかに何かいかがですか？」\n（FFD 2：you）",
   "say": "Would you like anything else?",
   "sec": "FFD 2",
   "sid": "eng-comm2",
   "spell": "Would you like anything else?",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-f2-4"
  },
  {
   "a": "You're getting on in years, you know, and you're not as bad as you used to be.",
   "h": "「you」は弱く「ヤ／ユ」。前の音とくっつく（have you →ハヴュ）",
   "ja": "年を取ってきたし、昔ほどひどくはないよ",
   "ord": 110,
   "q": "この文を英語で書く：\n「年を取ってきたし、昔ほどひどくはないよ」\n（FFD 2：you）",
   "say": "You're getting on in years, you know, and you're not as bad as you used to be.",
   "sec": "FFD 2",
   "sid": "eng-comm2",
   "spell": "You're getting on in years, you know, and you're not as bad as you used to be.",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-f2-5"
  },
  {
   "a": "We'll need about twelve seats for the members who are coming to the meeting today.",
   "h": "sh＝「シ」、s＝「ス（スィ）」の聞き分け：seats / sheets、sew / show、sort / short",
   "ja": "今日の会議に来るメンバー用に12席ほど必要だ",
   "ord": 111,
   "q": "この文を英語で書く：\n「今日の会議に来るメンバー用に12席ほど必要だ」\n（FFD 3：sh / s）",
   "say": "We'll need about twelve seats for the members who are coming to the meeting today.",
   "sec": "FFD 3",
   "sid": "eng-comm2",
   "spell": "We'll need about twelve seats for the members who are coming to the meeting today.",
   "star": true,
   "tests": [
    "mid"
   ],
   "id": "eng-f3-1"
  },
  {
   "a": "I believe each report took about eighty sheets using both sides.",
   "h": "sh＝「シ」、s＝「ス（スィ）」の聞き分け：seats / sheets、sew / show、sort / short",
   "ja": "各レポートは両面で約80枚使ったと思う",
   "ord": 112,
   "q": "この文を英語で書く：\n「各レポートは両面で約80枚使ったと思う」\n（FFD 3：sh / s）",
   "say": "I believe each report took about eighty sheets using both sides.",
   "sec": "FFD 3",
   "sid": "eng-comm2",
   "spell": "I believe each report took about eighty sheets using both sides.",
   "star": true,
   "tests": [
    "mid"
   ],
   "id": "eng-f3-2"
  },
  {
   "a": "She sells seashells by the seashore.",
   "h": "sh＝「シ」、s＝「ス（スィ）」の聞き分け：seats / sheets、sew / show、sort / short",
   "ja": "彼女は海辺で貝殻を売っている",
   "ord": 113,
   "q": "この文を英語で書く：\n「彼女は海辺で貝殻を売っている」\n（FFD 3：sh / s）",
   "say": "She sells seashells by the seashore.",
   "sec": "FFD 3",
   "sid": "eng-comm2",
   "spell": "She sells seashells by the seashore.",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-f3-3"
  },
  {
   "a": "Can you show me how to do it, so I can sew it myself?",
   "h": "sh＝「シ」、s＝「ス（スィ）」の聞き分け：seats / sheets、sew / show、sort / short",
   "ja": "自分で縫えるように、やり方を見せてくれる？",
   "ord": 114,
   "q": "この文を英語で書く：\n「自分で縫えるように、やり方を見せてくれる？」\n（FFD 3：sh / s）",
   "say": "Can you show me how to do it, so I can sew it myself?",
   "sec": "FFD 3",
   "sid": "eng-comm2",
   "spell": "Can you show me how to do it, so I can sew it myself?",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-f3-4"
  },
  {
   "a": "She's short and sort of round.",
   "h": "sh＝「シ」、s＝「ス（スィ）」の聞き分け：seats / sheets、sew / show、sort / short",
   "ja": "彼女は背が低くて、ちょっと丸い",
   "ord": 115,
   "q": "この文を英語で書く：\n「彼女は背が低くて、ちょっと丸い」\n（FFD 3：sh / s）",
   "say": "She's short and sort of round.",
   "sec": "FFD 3",
   "sid": "eng-comm2",
   "spell": "She's short and sort of round.",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-f3-5"
  },
  {
   "a": "He can work, but he can't do it for very long.",
   "h": "can＝弱く短く「クン」、can't＝強く「キャーン(t)」。t はほぼ聞こえない → 強さで判断",
   "ja": "彼は働けるけど、長くは続けられない",
   "ord": 116,
   "q": "この文を英語で書く：\n「彼は働けるけど、長くは続けられない」\n（FFD 4：can / can't）",
   "say": "He can work, but he can't do it for very long.",
   "sec": "FFD 4",
   "sid": "eng-comm2",
   "spell": "He can work, but he can't do it for very long.",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-f4-1"
  },
  {
   "a": "I can't get it to start at all.",
   "h": "can＝弱く短く「クン」、can't＝強く「キャーン(t)」。t はほぼ聞こえない → 強さで判断",
   "ja": "全然動かせない",
   "ord": 117,
   "q": "この文を英語で書く：\n「全然動かせない」\n（FFD 4：can / can't）",
   "say": "I can't get it to start at all.",
   "sec": "FFD 4",
   "sid": "eng-comm2",
   "spell": "I can't get it to start at all.",
   "star": true,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-f4-2"
  },
  {
   "a": "I can't remember if anything like that is around this area.",
   "h": "can＝弱く短く「クン」、can't＝強く「キャーン(t)」。t はほぼ聞こえない → 強さで判断",
   "ja": "この辺りにそういうのがあったか思い出せない",
   "ord": 118,
   "q": "この文を英語で書く：\n「この辺りにそういうのがあったか思い出せない」\n（FFD 4：can / can't）",
   "say": "I can't remember if anything like that is around this area.",
   "sec": "FFD 4",
   "sid": "eng-comm2",
   "spell": "I can't remember if anything like that is around this area.",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-f4-3"
  },
  {
   "a": "I don't know how people can do that stuff.",
   "h": "can＝弱く短く「クン」、can't＝強く「キャーン(t)」。t はほぼ聞こえない → 強さで判断",
   "ja": "みんながどうやってそれをやれるのか分からない",
   "ord": 119,
   "q": "この文を英語で書く：\n「みんながどうやってそれをやれるのか分からない」\n（FFD 4：can / can't）",
   "say": "I don't know how people can do that stuff.",
   "sec": "FFD 4",
   "sid": "eng-comm2",
   "spell": "I don't know how people can do that stuff.",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-f4-4"
  },
  {
   "a": "But how can we do it if we don't know what it is.",
   "h": "can＝弱く短く「クン」、can't＝強く「キャーン(t)」。t はほぼ聞こえない → 強さで判断",
   "ja": "でも、それが何か分からないのにどうやってやるの",
   "ord": 120,
   "q": "この文を英語で書く：\n「でも、それが何か分からないのにどうやってやるの」\n（FFD 4：can / can't）",
   "say": "But how can we do it if we don't know what it is.",
   "sec": "FFD 4",
   "sid": "eng-comm2",
   "spell": "But how can we do it if we don't know what it is.",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-f4-5"
  },
  {
   "a": "I take a bus around ten o'clock.",
   "h": "th＝舌を軽くかむ音、s＝「ス」。bath / bus、thing / sing、path / pass、three / free に注意",
   "ja": "10時ごろバスに乗る",
   "ord": 121,
   "q": "この文を英語で書く：\n「10時ごろバスに乗る」\n（FFD 5：th / s）",
   "say": "I take a bus around ten o'clock.",
   "sec": "FFD 5",
   "sid": "eng-comm2",
   "spell": "I take a bus around ten o'clock.",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-f5-1"
  },
  {
   "a": "How often do you take a bath every day?",
   "h": "th＝舌を軽くかむ音、s＝「ス」。bath / bus、thing / sing、path / pass、three / free に注意",
   "ja": "毎日何回お風呂に入る？",
   "ord": 122,
   "q": "この文を英語で書く：\n「毎日何回お風呂に入る？」\n（FFD 5：th / s）",
   "say": "How often do you take a bath every day?",
   "sec": "FFD 5",
   "sid": "eng-comm2",
   "spell": "How often do you take a bath every day?",
   "star": true,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-f5-2"
  },
  {
   "a": "I have to sing because I'm having a problem.",
   "h": "th＝舌を軽くかむ音、s＝「ス」。bath / bus、thing / sing、path / pass、three / free に注意",
   "ja": "問題を抱えているから歌わなきゃ",
   "ord": 123,
   "q": "この文を英語で書く：\n「問題を抱えているから歌わなきゃ」\n（FFD 5：th / s）",
   "say": "I have to sing because I'm having a problem.",
   "sec": "FFD 5",
   "sid": "eng-comm2",
   "spell": "I have to sing because I'm having a problem.",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-f5-3"
  },
  {
   "a": "I have three fours, so I think I've got this hand.",
   "h": "th＝舌を軽くかむ音、s＝「ス」。bath / bus、thing / sing、path / pass、three / free に注意",
   "ja": "4が3枚あるから、この手は勝ったと思う",
   "ord": 124,
   "q": "この文を英語で書く：\n「4が3枚あるから、この手は勝ったと思う」\n（FFD 5：th / s）",
   "say": "I have three fours, so I think I've got this hand.",
   "sec": "FFD 5",
   "sid": "eng-comm2",
   "spell": "I have three fours, so I think I've got this hand.",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-f5-4"
  },
  {
   "a": "If you find the path, you'll pass him on his way to work.",
   "h": "th＝舌を軽くかむ音、s＝「ス」。bath / bus、thing / sing、path / pass、three / free に注意",
   "ja": "その道を見つけたら、通勤中の彼とすれ違うよ",
   "ord": 125,
   "q": "この文を英語で書く：\n「その道を見つけたら、通勤中の彼とすれ違うよ」\n（FFD 5：th / s）",
   "say": "If you find the path, you'll pass him on his way to work.",
   "sec": "FFD 5",
   "sid": "eng-comm2",
   "spell": "If you find the path, you'll pass him on his way to work.",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-f5-5"
  },
  {
   "a": "act of informing people about something publicly\n**お知らせ・発表**",
   "ord": 201,
   "q": "**announcement** の意味は？（noun）",
   "say": "announcement",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-announcement"
  },
  {
   "a": "to give someone a particular job or something to do\n**割り当てる**",
   "ord": 202,
   "q": "**assign** の意味は？（verb）",
   "say": "assign",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-assign"
  },
  {
   "a": "state of being present at a place or event\n**出席**",
   "ord": 203,
   "q": "**attendance** の意味は？（noun）",
   "say": "attendance",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-attendance"
  },
  {
   "a": "to come together to form or make something\n**構成する・作る**",
   "ord": 204,
   "q": "**compose** の意味は？（verb）",
   "say": "compose",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-compose"
  },
  {
   "a": "something that is created from different parts to make something new\n**作品・構成・作文**",
   "ord": 205,
   "q": "**composition** の意味は？（noun）",
   "say": "composition",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-composition"
  },
  {
   "a": "to force air through your throat with a short, loud noise\n**咳をする**",
   "ord": 206,
   "q": "**cough** の意味は？（verb）",
   "say": "cough",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-cough"
  },
  {
   "a": "judgment about the value or condition of something\n**評価**",
   "ord": 207,
   "q": "**evaluation** の意味は？（noun）",
   "say": "evaluation",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-evaluation"
  },
  {
   "a": "before anything else\n**まず第一に**",
   "ord": 208,
   "q": "**firstly** の意味は？（adv）",
   "say": "firstly",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-firstly"
  },
  {
   "a": "form, design, or arrangement of something\n**形式**",
   "ord": 209,
   "q": "**format** の意味は？（noun）",
   "say": "format",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-format"
  },
  {
   "a": "a hand or body movement that expresses a particular idea or feeling\n**身ぶり・ジェスチャー**",
   "ord": 210,
   "q": "**gesture** の意味は？（noun）",
   "say": "gesture",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-gesture"
  },
  {
   "a": "rules that explain how words are used in a language\n**文法**",
   "ord": 211,
   "q": "**grammar** の意味は？（noun）",
   "say": "grammar",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-grammar"
  },
  {
   "a": "to meet someone with friendly words and actions; to welcome\n**あいさつする・迎える**",
   "ord": 212,
   "q": "**greet** の意味は？（verb）",
   "say": "greet",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-greet"
  },
  {
   "a": "rule, instruction or principle\n**指針・ガイドライン**",
   "ord": 213,
   "q": "**guideline** の意味は？（noun）",
   "say": "guideline",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-guideline"
  },
  {
   "a": "edge or border of a page on above, below\n**余白**",
   "ord": 214,
   "q": "**margin** の意味は？（noun）",
   "say": "margin",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-margin"
  },
  {
   "a": "section of writing that usually deals with one subject\n**段落**",
   "ord": 215,
   "q": "**paragraph** の意味は？（noun）",
   "say": "paragraph",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-paragraph"
  },
  {
   "a": "act of being involved in something\n**参加**",
   "ord": 216,
   "q": "**participation** の意味は？（noun）",
   "say": "participation",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-participation"
  },
  {
   "a": "act of recording information on an official list\n**登録**",
   "ord": 217,
   "q": "**registration** の意味は？（noun）",
   "say": "registration",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-registration"
  },
  {
   "a": "person or thing that takes the place of something\n**代わりの人・物**",
   "ord": 218,
   "q": "**substitute** の意味は？（noun）",
   "say": "substitute",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-substitute"
  },
  {
   "a": "to state the main or most important ideas of something\n**要約する**",
   "ord": 219,
   "q": "**summarize** の意味は？（verb）",
   "say": "summarize",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-summarize"
  },
  {
   "a": "word that expresses an action or state\n**動詞**",
   "ord": 220,
   "q": "**verb** の意味は？（noun）",
   "say": "verb",
   "sec": "Set 1",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r1-verb"
  },
  {
   "a": "satisfactory; good enough\n**受け入れられる・まずまずの**",
   "ord": 221,
   "q": "**acceptable** の意味は？（adj）",
   "say": "acceptable",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-acceptable"
  },
  {
   "a": "having knowledge of something\n**意識・認識**",
   "ord": 222,
   "q": "**awareness** の意味は？（noun）",
   "say": "awareness",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-awareness"
  },
  {
   "a": "under; in or to a lower position; below\n**〜の下に**",
   "ord": 223,
   "q": "**beneath** の意味は？（prep）",
   "say": "beneath",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-beneath"
  },
  {
   "a": "happening without stops\n**絶え間ない・連続した**",
   "ord": 224,
   "q": "**continuous** の意味は？（adj）",
   "say": "continuous",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-continuous"
  },
  {
   "a": "to have similarity or equality with something\n**一致する・対応する**",
   "ord": 225,
   "q": "**correspond** の意味は？（verb）",
   "say": "correspond",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-correspond"
  },
  {
   "a": "a long, flat surface in a shop or kitchen where work is done\n**カウンター・調理台**",
   "ord": 226,
   "q": "**counter** の意味は？（noun）",
   "say": "counter",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-counter"
  },
  {
   "a": "book or story including ideas, people, and events that are not real\n**小説・作り話**",
   "ord": 227,
   "q": "**fiction** の意味は？（noun）",
   "say": "fiction",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-fiction"
  },
  {
   "a": "to stay on the surface of a liquid and not sink\n**浮かぶ**",
   "ord": 228,
   "q": "**float** の意味は？（verb）",
   "say": "float",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-float"
  },
  {
   "a": "picture that helps explain something\n**イラスト・図解**",
   "ord": 229,
   "q": "**illustration** の意味は？（noun）",
   "say": "illustration",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-illustration"
  },
  {
   "a": "the finding of the size or amount of something or someone\n**測定・寸法**",
   "ord": 230,
   "q": "**measurement** の意味は？（noun）",
   "say": "measurement",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-measurement"
  },
  {
   "a": "to make small change to something\n**修正する**",
   "ord": 231,
   "q": "**modify** の意味は？（verb）",
   "say": "modify",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-modify"
  },
  {
   "a": "to make someone excited about doing something\n**やる気にさせる**",
   "ord": 232,
   "q": "**motivate** の意味は？（verb）",
   "say": "motivate",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-motivate"
  },
  {
   "a": "shared between two or more people\n**相互の・共通の**",
   "ord": 233,
   "q": "**mutual** の意味は？（adj）",
   "say": "mutual",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-mutual"
  },
  {
   "a": "the telling of a story\n**物語・語り**",
   "ord": 234,
   "q": "**narrative** の意味は？（noun）",
   "say": "narrative",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-narrative"
  },
  {
   "a": "person that you are competing against in a game or contest\n**対戦相手**",
   "ord": 235,
   "q": "**opponent** の意味は？（noun）",
   "say": "opponent",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-opponent"
  },
  {
   "a": "right to do something as allowed by another\n**許可**",
   "ord": 236,
   "q": "**permission** の意味は？（noun）",
   "say": "permission",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-permission"
  },
  {
   "a": "chosen or done without a plan or pattern\n**無作為の・ランダムな**",
   "ord": 237,
   "q": "**random** の意味は？（adj）",
   "say": "random",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-random"
  },
  {
   "a": "range of things that something includes\n**範囲**",
   "ord": 238,
   "q": "**scope** の意味は？（noun）",
   "say": "scope",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-scope"
  },
  {
   "a": "something added to another thing to make it better\n**補足・サプリ**",
   "ord": 239,
   "q": "**supplement** の意味は？（noun）",
   "say": "supplement",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-supplement"
  },
  {
   "a": "easily seen or understood\n**目に見える**",
   "ord": 240,
   "q": "**visible** の意味は？（adj）",
   "say": "visible",
   "sec": "Set 2",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r2-visible"
  },
  {
   "a": "complete and total\n**絶対的な・完全な**",
   "ord": 241,
   "q": "**absolute** の意味は？（adj）",
   "say": "absolute",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-absolute"
  },
  {
   "a": "design and construction of buildings\n**建築**",
   "ord": 242,
   "q": "**architecture** の意味は？（noun）",
   "say": "architecture",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-architecture"
  },
  {
   "a": "structure or object that stops free movement\n**障壁・バリア**",
   "ord": 243,
   "q": "**barrier** の意味は？（noun）",
   "say": "barrier",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-barrier"
  },
  {
   "a": "to break in a sudden and violent way\n**破裂する**",
   "ord": 244,
   "q": "**burst** の意味は？（verb）",
   "say": "burst",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-burst"
  },
  {
   "a": "to put something into the ground and cover it\n**埋める**",
   "ord": 245,
   "q": "**bury** の意味は？（verb）",
   "say": "bury",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-bury"
  },
  {
   "a": "means, ability, or potential to do something\n**能力**",
   "ord": 246,
   "q": "**capability** の意味は？（noun）",
   "say": "capability",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-capability"
  },
  {
   "a": "to have enough courage to do something\n**あえて〜する**",
   "ord": 247,
   "q": "**dare** の意味は？（verb）",
   "say": "dare",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-dare"
  },
  {
   "a": "to give your energy, time, etc. completely to someone\n**捧げる**",
   "ord": 248,
   "q": "**dedicate** の意味は？（verb）",
   "say": "dedicate",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-dedicate"
  },
  {
   "a": "legal ending of a marriage\n**離婚**",
   "ord": 249,
   "q": "**divorce** の意味は？（noun）",
   "say": "divorce",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-divorce"
  },
  {
   "a": "to do something that was promised or required\n**果たす・満たす**",
   "ord": 250,
   "q": "**fulfill** の意味は？（verb）",
   "say": "fulfill",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-fulfill"
  },
  {
   "a": "a place for doing research and experiments\n**実験室・研究所**",
   "ord": 251,
   "q": "**laboratory** の意味は？（noun）",
   "say": "laboratory",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-laboratory"
  },
  {
   "a": "powerful, positive feeling about something\n**情熱**",
   "ord": 252,
   "q": "**passion** の意味は？（noun）",
   "say": "passion",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-passion"
  },
  {
   "a": "to have or own something\n**所有する**",
   "ord": 253,
   "q": "**possess** の意味は？（verb）",
   "say": "possess",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-possess"
  },
  {
   "a": "to try to stop or prevent something\n**抵抗する**",
   "ord": 254,
   "q": "**resist** の意味は？（verb）",
   "say": "resist",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-resist"
  },
  {
   "a": "to no longer be wanted so you throw it away\n**取り除く**",
   "ord": 255,
   "q": "**rid** の意味は？（verb）",
   "say": "rid",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-rid"
  },
  {
   "a": "in an inexact or imprecise manner\n**おおよそ**",
   "ord": 256,
   "q": "**roughly** の意味は？（adv）",
   "say": "roughly",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-roughly"
  },
  {
   "a": "to spoil something, to make it useless\n**台無しにする**",
   "ord": 257,
   "q": "**ruin** の意味は？（verb）",
   "say": "ruin",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-ruin"
  },
  {
   "a": "someone who is legally owned by another person\n**奴隷**",
   "ord": 258,
   "q": "**slave** の意味は？（noun）",
   "say": "slave",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-slave"
  },
  {
   "a": "quality that something happens or someone behaves in a particular way\n**傾向**",
   "ord": 259,
   "q": "**tendency** の意味は？（noun）",
   "say": "tendency",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-tendency"
  },
  {
   "a": "having a great amount of money or property\n**裕福な**",
   "ord": 260,
   "q": "**wealthy** の意味は？（adj）",
   "say": "wealthy",
   "sec": "Set 3",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "mid"
   ],
   "id": "eng-r3-wealthy"
  },
  {
   "a": "to succeed in doing; complete successfully\n**成し遂げる**",
   "ord": 261,
   "q": "**accomplish** の意味は？（verb）",
   "say": "accomplish",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-accomplish"
  },
  {
   "a": "special event where people show the importance of something\n**お祝い**",
   "ord": 262,
   "q": "**celebration** の意味は？（noun）",
   "say": "celebration",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-celebration"
  },
  {
   "a": "an agreement in which each side must give up some things\n**妥協（する）**",
   "ord": 263,
   "q": "**compromise** の意味は？（verb）",
   "say": "compromise",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-compromise"
  },
  {
   "a": "to cause someone to feel uncomfortable about something\n**恥ずかしい思いをさせる**",
   "ord": 264,
   "q": "**embarrass** の意味は？（verb）",
   "say": "embarrass",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-embarrass"
  },
  {
   "a": "to hold someone closely\n**抱きしめる**",
   "ord": 265,
   "q": "**embrace** の意味は？（verb）",
   "say": "embrace",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-embrace"
  },
  {
   "a": "to take care of guests by helping them enjoy their time\n**もてなす・楽しませる**",
   "ord": 266,
   "q": "**entertain** の意味は？（verb）",
   "say": "entertain",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-entertain"
  },
  {
   "a": "very fanciful in design, construction, or appearance\n**空想的な・すばらしい**",
   "ord": 267,
   "q": "**fantastic** の意味は？（adj）",
   "say": "fantastic",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-fantastic"
  },
  {
   "a": "sudden bright light\n**閃光・フラッシュ**",
   "ord": 268,
   "q": "**flash** の意味は？（noun）",
   "say": "flash",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-flash"
  },
  {
   "a": "place to look at various types of art\n**美術館・画廊**",
   "ord": 269,
   "q": "**gallery** の意味は？（noun）",
   "say": "gallery",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-gallery"
  },
  {
   "a": "concerning the parts of a cell that determine particular characteristics\n**遺伝の**",
   "ord": 270,
   "q": "**genetic** の意味は？（adj）",
   "say": "genetic",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-genetic"
  },
  {
   "a": "to look at someone or something quickly\n**ちらっと見る**",
   "ord": 271,
   "q": "**glance** の意味は？（verb）",
   "say": "glance",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-glance"
  },
  {
   "a": "belonging to the past; of what is important or famous in the past\n**歴史的な（有名な）**",
   "ord": 272,
   "q": "**historic** の意味は？（adj）",
   "say": "historic",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-historic"
  },
  {
   "a": "in a way that expresses the exact meaning of something\n**文字どおり**",
   "ord": 273,
   "q": "**literally** の意味は？（adv）",
   "say": "literally",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-literally"
  },
  {
   "a": "concerned with written works\n**文学の**",
   "ord": 274,
   "q": "**literary** の意味は？（adj）",
   "say": "literary",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-literary"
  },
  {
   "a": "play with music in which all the words are sung\n**オペラ**",
   "ord": 275,
   "q": "**opera** の意味は？（noun）",
   "say": "opera",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-opera"
  },
  {
   "a": "to express approval of something or someone\n**ほめる**",
   "ord": 276,
   "q": "**praise** の意味は？（verb）",
   "say": "praise",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-praise"
  },
  {
   "a": "business that produces books or magazines\n**出版社**",
   "ord": 277,
   "q": "**publisher** の意味は？（noun）",
   "say": "publisher",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-publisher"
  },
  {
   "a": "treatment intended to help fix your problem or medical illness\n**治療・セラピー**",
   "ord": 278,
   "q": "**therapy** の意味は？（noun）",
   "say": "therapy",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-therapy"
  },
  {
   "a": "to turn something in opposite directions at the same time\n**ねじる**",
   "ord": 279,
   "q": "**twist** の意味は？（verb）",
   "say": "twist",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-twist"
  },
  {
   "a": "used to show that a thing or person is against another thing or person\n**〜対〜（vs.）**",
   "ord": 280,
   "q": "**versus** の意味は？（prep）",
   "say": "versus",
   "sec": "Set 4",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q4",
    "mid"
   ],
   "id": "eng-r4-versus"
  },
  {
   "a": "to help increasing progress or growth\n**押し上げる・高める**",
   "ord": 281,
   "q": "**boost** の意味は？（verb）",
   "say": "boost",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-boost"
  },
  {
   "a": "special social or religious event\n**式典・儀式**",
   "ord": 282,
   "q": "**ceremony** の意味は？（noun）",
   "say": "ceremony",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-ceremony"
  },
  {
   "a": "wanting to know more about something\n**好奇心のある**",
   "ord": 283,
   "q": "**curious** の意味は？（adj）",
   "say": "curious",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-curious"
  },
  {
   "a": "of democracy; entitling the people to power\n**民主的な**",
   "ord": 284,
   "q": "**democratic** の意味は？（adj）",
   "say": "democratic",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-democratic"
  },
  {
   "a": "to have a different opinion from someone\n**反対する・意見が違う**",
   "ord": 285,
   "q": "**disagree** の意味は？（verb）",
   "say": "disagree",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-disagree"
  },
  {
   "a": "to slowly change or develop into something better\n**進化する・発展する**",
   "ord": 286,
   "q": "**evolve** の意味は？（verb）",
   "say": "evolve",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-evolve"
  },
  {
   "a": "to be greater in number than something\n**超える**",
   "ord": 287,
   "q": "**exceed** の意味は？（verb）",
   "say": "exceed",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-exceed"
  },
  {
   "a": "chance or luck, particularly good luck\n**運・幸運**",
   "ord": 288,
   "q": "**fortune** の意味は？（noun）",
   "say": "fortune",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-fortune"
  },
  {
   "a": "a clear idea about how something works\n**洞察・見抜く力**",
   "ord": 289,
   "q": "**insight** の意味は？（noun）",
   "say": "insight",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-insight"
  },
  {
   "a": "something made by combining two or more things\n**混合物**",
   "ord": 290,
   "q": "**mixture** の意味は？（noun）",
   "say": "mixture",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-mixture"
  },
  {
   "a": "working with others for some purpose\n**協力関係**",
   "ord": 291,
   "q": "**partnership** の意味は？（noun）",
   "say": "partnership",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-partnership"
  },
  {
   "a": "group of people who work for a company\n**職員・人事**",
   "ord": 292,
   "q": "**personnel** の意味は？（noun）",
   "say": "personnel",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-personnel"
  },
  {
   "a": "group of things one on top of another\n**山・積み重ね**",
   "ord": 293,
   "q": "**pile** の意味は？（noun）",
   "say": "pile",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-pile"
  },
  {
   "a": "having or owning something\n**所有・所持品**",
   "ord": 294,
   "q": "**possession** の意味は？（noun）",
   "say": "possession",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-possession"
  },
  {
   "a": "when women carry a child inside them that is not yet born\n**妊娠している**",
   "ord": 295,
   "q": "**pregnant** の意味は？（adj）",
   "say": "pregnant",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-pregnant"
  },
  {
   "a": "having to do with the mind\n**心理的な**",
   "ord": 296,
   "q": "**psychological** の意味は？（adj）",
   "say": "psychological",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-psychological"
  },
  {
   "a": "interest or benefit of someone or something\n**ため・利益（for the sake of）**",
   "ord": 297,
   "q": "**sake** の意味は？（noun）",
   "say": "sake",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-sake"
  },
  {
   "a": "a person who studies and knows a lot about a particular subject\n**学者**",
   "ord": 298,
   "q": "**scholar** の意味は？（noun）",
   "say": "scholar",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-scholar"
  },
  {
   "a": "a strong stick with a pointed end that you push into the ground\n**杭（くい）**",
   "ord": 299,
   "q": "**stake** の意味は？（verb）",
   "say": "stake",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-stake"
  },
  {
   "a": "to take action to solve a difficult problem\n**取り組む**",
   "ord": 300,
   "q": "**tackle** の意味は？（verb）",
   "say": "tackle",
   "sec": "Set 5",
   "sid": "eng-comm2",
   "star": false,
   "tests": [
    "q5",
    "mid"
   ],
   "id": "eng-r5-tackle"
  }
 ]
};
