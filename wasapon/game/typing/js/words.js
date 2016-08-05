var string;
var string_comt;
var words_1=["RINGO", "BANANA", "HIGUCHI", "HIRUNE", "BO-RU", "TUBASA", "OPERA", "KASITU", "TONBO", "HUNKA", "GYAKU", "MINATO", "KANRI", "SITTO", "RINKU", "GA-DO", "MEBAE", "ANKO", "UTUSI", "TAIPU", "HUTAE", "HUMOU", "YUBIWA", "KASIKA", "NADARE", "SO-TO", "KINSI", "BUNPU", "SHUTO", "TANOMI", "SITATE", "SAGANN", "MABUTA", "SADORU", "MOROHA", "KAYOU", "WASEDA", "KEIJI", "ONAKA", "HIZASI", "CHIDORI", "IDENN", "NAMARI", "KIPPU", "NAMAE", "MAGUMA", "KAERU", "TOROI", "KUTUU", "SATOU", "YOUSUKE", "KIRENAGA", "IDOBATA", "SAIKOU", "SIMAUMA", "AMIDANA", "HANBAI", "CHENJI", "AIBIKI", "HANGETU", "RITA-NN", "MANGETU", "YUUHANN", "MANZAI", "HANSOKU", "GESHUKU", "SHOUKO", "ZABUTONN", "TAIKINN", "UWAZUMI", "SIKIKANN", "NAISOU", "OKARINA", "GAKURANN", "GA-TA-", "OBUJE", "GAKKOU", "NENGETU", "DORYOKU", "SUTAHHU", "KAMAMESI", "MIRYOKU", "SHOKUMU", "TAIKANN", "GAISHA", "WAREMONO", "INSOTU", "TORIKAJI", "NUKADOKO", "URAGOE", "ARAKATA", "KODAKARA", "FEISU", "INOKORI", "ORENJI", "MENTOSU", "HANNNINN", "DAISUU", "NINGYO", "EDAMAME", "SEIKYOU", "DAIMEISI", "GO-RUDENN", "MONOSIZUKA", "DENPYOU", "APURO-CHI", "IYAKUHINN", "AMERIKANN", "EBERESUTO", "WATABOKORI", "NICHIYOUBI", "SUISANKI", "KI-BO-DO", "MANEKINEKO", "AMARIRISU", "WANPI-SU", "SHOUJO", "WASHOKKI", "RABURAIBU", "MUSIMEGANE", "IRITAMAGO", "CHIZUCHOU", "MUJINNEKI", "KESSHOU", "NATUMATURI", "SHOKUNIN", "KONNNICHIHA", "KUBUKURINN", "AIRAINN", "ENMA-KU", "BIRIYA-DO", "TA-MINARU", "KIRITANPO", "KAGEMUSHA", "WATASIBUNE", "KYOUYUU", "DAKKYAKU", "SURO-GANN", "ENSHUTU", "BOUKENKA", "HIRAISINN", "NIHONKAI", "SUTEZERIHU", "KIMITUSEI", "SANJIGENN", "ABURAAGE", "HIMATUBUSI", "TAMABUKURO", "KUREIJI-", "KONSHASU"];
var words_1_comt=["りんご", "バナナ", "樋口", "昼寝", "ボール", "翼", "オペラ", "加湿、過失", "トンボ", "噴火", "逆", "港", "管理", "嫉妬", "リンク", "ガード", "芽生え", "餡子", "写し", "タイプ", "二重", "不毛", "指輪", "可視化", "雪崩", "ソート", "禁止、近視、金糸", "分布", "首都", "頼み", "仕立て", "砂岩", "まぶた", "サドル", "諸刃", "火曜", "早稲田", "刑事", "お腹", "日差し", "千鳥", "遺伝", "鉛", "切符", "名前", "マグマ", "蛙", "トロイ", "苦痛", "砂糖", "陽祐", "切れ長", "井戸端", "最高", "シマウマ", "網棚", "販売", "チェンジ", "逢い引き、合い挽き", "半月", "リターン", "満月", "夕飯", "漫才", "反則、販促", "下宿", "証拠", "座布団", "大金", "上澄み", "指揮官", "内装", "オカリナ", "学ラン", "ガーター", "オブジェ", "学校", "年月", "努力", "スタッフ", "釜飯", "魅力", "職務", "体感", "外車", "割れ物", "引率", "取り舵", "糠床", "裏声", "粗方", "子宝", "フェイス", "居残り", "オレンジ", "メントス", "犯人", "代数、台数", "人魚", "枝豆", "盛況", "代名詞", "ゴールデン", "物静か", "伝票", "アプローチ", "医薬品", "アメリカン", "エベレスト", "綿埃", "日曜日", "水酸基", "キーボード", "招き猫", "アマリリス", "ワンピース", "少女", "和食器", "ラブライブ", "虫眼鏡", "炒り卵", "地図帳", "無人駅", "結晶、決勝、血漿", "夏祭り", "職人", "こんにちは", "九分九厘", "アイライン", "円マーク", "ビリヤード", "ターミナル", "きりたんぽ", "影武者", "渡し舟", "共有", "脱却", "スローガン", "演出", "冒険家", "避雷針", "日本海", "捨て台詞", "気密性、機密性", "三次元", "油揚げ", "暇つぶし", "玉袋", "クレイジー", "コンシャス"];
var words_2=["AMANATTOU", "RINBUKYOKU", "UNTENSHU", "A-THISUTO", "KYOUWAKOKU", "DEDDOBO-RU", "U-RONCHA", "BA-BEKYU-", "HYAKUJUU", "KITUNEUDONN", "AIKOKUSINN", "ARUZENCHINN", "KYANPE-NN", "GINESUBUKKU", "GURAFIKKU", "CHIKARABUSOKU", "HOUKOUSEI", "BO-TORE-SU", "HOURYUUJI", "MI-THINGU", "KO-DHINGU", "KURAIANTO", "SI-TOBERUTO", "ZASIKIWARASI", "CHINPANJI-", "SONOHIGURASI", "TUKINOWAGUMA", "ANDOROMEDA", "KUWAZUGIRAI", "SANKAKUKEI", "SISISONSONN", "BOUKENSHA", "TAIGADORAMA", "SO-SUKO-DO", "CHOUONPA", "KURARINETTO", "HACHUURUI", "SHABONDAMA", "RIMODERINGU", "HONYUUBINN", "BODHIBURO-", "CHOKORE-TO", "O-KESUTORA", "RONGUKO-TO", "NAUMANZOU", "NEKOJARASI", "KICHOUMENN", "NO-BERIUMU", "DAIYAMONDO", "MIZUYOUKANN", "SHOUGAKUSEI", "DHUARURAIHU", "O-DHISHONN", "TAISIBOURITU", "DHIFENDA-", "ANNNAIJOU", "GUNJOUIRO", "AKUSENKUTOU", "GAZOUSIKIBETU", "HANSINHANGI", "INDOKUJAKU", "TAKADANOBABA", "TOKUSITUTENSA", "NYUURYOKUCHI", "AKO-DHIONN", "NOANOHAKOBUNE", "ABOGADOROSUU", "KONSHERUJU", "SHOUGIDAOSI", "URASIMATAROU", "HANABITAIKAI", "AKURYOKUKEI", "OSECHIRYOURI", "SANGENSHOKU", "JIZENJUNBI", "AMAMIOOSIMA", "KISHAKAIKEN", "GURI-NRANDO", "HATTOTORIKKU", "DOUKYUUSEI", "CHOKUEITENN", "PAUDA-SUNO-", "KYUUSEISHU", "KYOUIKUPAPA", "YAKUSOKUPAPA", "TEIKUUHIKOU", "ME-RUMAGAJINN", "KATTA-NAIHU", "KAPPURA-MEN", "USUBAKAGEROU", "GE-MUSENTA-", "ZEKKOUCHOU", "TORIPURUPUREI", "O-BA-RAPPU", "HAISUINOJINN", "TORISIMARIYAKU", "ARUTHIMETTO", "YAKOURESSHA", "SANTAKURO-SU", "SHOKUINSITU", "BANJI-JANPU", "ANZENNUNTENN", "WERUKAMUBUKKU", "JUUGYOUINN", "ORENJIJU-SU", "KACHOUHUUGETU", "KARAOKEBOKKUSU", "TOUKYOUTAWA-", "SAIKOROSUTE-KI", "KOKINWAKASHUU", "TENMONGAKUSHA", "SOUJOUKOUKA", "KITUNENOYOMEIRI", "ISIKAWAGOEMONN", "ARUKO-RURANPU", "KURI-MUSICHU-", "KO-HI-ME-KA-", "KENSAKUENJINN", "ICHINICHIICHIZENN", "TAROTTOURANAI", "TAIKANOKAISINN", "DEJITARUSHOMEI", "AUTOOBUPURE-", "KOUSHUUDENWA", "KYOUDORYOURI", "SAITEICHINGINN", "SHOKUBAHOUMONN", "EIPURIRUHU-RU", "IPPIKIOOKAMI", "HANTOKEIMAWARI", "SAKURANOHANABIRA", "SINBUNHAITATU", "JABASUKURIPUTO", "ANTACCHABURU", "SOUTAIHYOUKA", "ENTORI-SI-TO", "SURO-MO-SHONN", "HITTOENDORANN", "SAISHOKUKENBI", "SEKAIISSHUU", "ZETTAIONKANN", "KYASSHUKA-DO", "YUURYOUDOURO", "KYUUSHOUGATU", "KEIYAKUSHAINN", "HURENCHITO-SUTO", "BI-KYUUEIGA", "HEIJOUKYOU", "NITOROGURISERINN", "TUUKINNRASSHU"];
var words_2_comt=["甘納豆", "輪舞曲", "運転手", "アーティスト", "共和国", "デッドボール", "ウーロン茶", "バーベキュー", "百獣", "きつねうどん", "愛国心", "アルゼンチン", "キャンペーン", "ギネスブック", "グラフィック", "力不足", "方向性", "ボートレース", "法隆寺", "ミーティング", "コーディング", "クライアント", "シートベルト", "座敷わらし", "チンパンジー", "その日暮らし", "月の輪熊", "アンドロメダ", "食わず嫌い", "三角形", "子々孫々", "冒険者", "大河ドラマ", "ソースコード", "超音波", "クラリネット", "は虫類", "シャボン玉", "リモデリング", "ほ乳瓶", "ボディブロー", "チョコレート", "オーケストラ", "ロングコート", "ナウマン象", "猫じゃらし", "几帳面", "ノーベリウム", "ダイヤモンド", "水ようかん", "小学生、奨学生", "デュアルライフ", "オーディション", "体脂肪率", "ディフェンダー", "案内状", "群青色", "悪戦苦闘", "画像識別", "半信半疑", "インドクジャク", "高田馬場", "得失点差", "入力値", "アコーディオン", "ノアの方舟", "アボガドロ数", "コンシェルジュ", "将棋倒し", "浦島太郎", "花火大会", "握力計", "おせち料理", "三原色", "事前準備", "奄美大島", "記者会見", "グリーンランド", "ハットトリック", "同級生", "直営店", "パウダースノー", "救世主", "教育パパ", "約束手形", "低空飛行", "メールマガジン", "カッターナイフ", "カップラーメン", "ウスバカゲロウ", "ゲームセンター", "絶好調", "トリプルプレイ", "オーバーラップ", "背水の陣", "取締役", "アルティメット", "夜行列車", "サンタクロース", "職員室", "バンジージャンプ", "安全運転", "ウェルカムブック", "従業員", "オレンジジュース", "花鳥風月", "カラオケボックス", "東京タワー", "サイコロステーキ", "古今和歌集", "天文学者", "相乗効果", "狐の嫁入り", "石川五右衛門", "アルコールランプ", "クリームシチュー", "コーヒーメーカー", "検索エンジン", "一日一善", "タロット占い", "大化の改新", "デジタル署名", "アウトオブプレー", "公衆電話", "郷土料理", "最低賃金", "職場訪問", "エイプリルフール", "一匹狼", "反時計回り", "桜の花びら", "新聞配達", "ジャバスクリプト (Javascript))", "アンタッチャブル", "相対評価", "エントリーシート", "スローモーション", "ヒットエンドラン", "才色兼備", "世界一周", "絶対音感", "キャッシュカード", "有料道路", "旧正月", "契約社員", "フレンチトースト", "B級映画", "平城京", "ニトログリセリン", "通勤ラッシュ"];
var words_3=["DAISHUKIHO-RUDO", "HAROUCHUUIHOU", "IRIOMOTEYAMANEKO", "CHISIKIROUDOUSHA", "SEISOUKOUJOU", "HIDUKEHENKOUSENN", "SUKURANBURUEGGU", "ITUKUSIMAJINJA", "ITTOURYOUDANN", "EMERARUDOGURI-NN", "HINSHUKAIRYOU", "IPPANJOUSIKI", "OHAYOUGOZAIMASU", "GURANDOKYANIONN", "RIHABIRITE-SHONN", "KARUCHA-SHOKKU", "OUYOUBUTURIGAKU", "KOMYUNIKE-SHONN", "SHUNKASHUUTOU", "ISOPPUMONOGATARI", "FIGYUASUKE-TO", "HYAKUNINNISSHU", "WARASIBECHOUJA", "HUROPPI-DHISUKU", "MAKKUBUKKUEA-", "GEKIOKOPUNPUNMARU", "KENCHOUSHOZAICHI", "KOSUTOPAFO-MANSU", "WANWANNNYA-NYA-", "AISUKURI-MUSO-DA", "KAIYOUSEIBUTUGAKU", "KAISANSOUSENKYO", "TENKAICHIBUDOUKAI", "AIMAINAHYOUGENN", "NYUUJOUSEIGENN", "KOUTOUSAIBANSHO", "AKUMANODAIBENSHA", "ASECHIRUSARICHIRUSANN", "ARUKIMEDESUNOGENRI", "TAIPINGUTUKARETAYO-", "IRASSHARANAKATTA", "SEKIGAISENTUUSINN", "INTA-NETTOKAFE", "INFOME-SHONN", "EIGAPURODHU-SA-", "EIJIANNAMERIKANN", "BENKEINONAKIDOKORO", "OMATURISAWAGIWOSURU", "KAKUYUUGOUHANNNOU", "KAMUCHAKKAHANTOU", "KOKURITUKYOUGIJOU", "TOUKYOUSUKAITURI-", "NAIKAKUSOURIDAIJINN", "KASAIRINKAIKOUENN", "RYOKUOUSHOKUYASAI", "SAISHOUKOUBAISUU", "AMERIKAGASSHUUKOKU", "KYOUHUSHOUKYOUHU", "INGURISSHUMAFINN", "UNTENMENKYOSHOU", "EKISHOUDHISUPUREI", "EMERARUDOGOKIBURIBACHI", "ERUNI-NYOGENSHOU", "KYOUSINREPO-TOYABAI", "KAMANGANSANKARIUMU", "KIKYUUSONBOUNOTOKI", "KUORITHI-OBURAIHU", "GURO-BARIZE-SHONN", "KEIEIKONSARUTANTO", "MAINICHISINBUNNNOKIJI", "ASAGOHANHATEKITOUNI", "TOUMEIKOUSOKUDOURO", "A-ONSENNNIIKITAI", "AIUEOKAKIKUKEKOSA", "NOROINOWARANINGYOU", "PA-SONARUKONPYU-TA", "SEIKATUSHUUKANBYOU", "DAIHYOUTORISIMARIYAKU", "METABORIKKUSINDORO-MU", "AMERIKADOKURITUSENSOU", "INSPIRE-SHONNNOMOTO", "INFO-MUDOKONSENTO", "UTTORISASERUUTUKUSISA", "EGASIRANIJIGOJUPPUNN", "OPERE-THINGUSISUTEMU", "GASSOUKYOUSOUKYOKU", "MISISIPPIAKAMIMIGAME", "BURAINDOTATTIWOYATTE", "OTOKONINIGONHANAIMONN", "IKIOIYOKUNAGARERUKAWA", "WEBUAKUSESIBIRITHI-", "ONPASUICHUUTANSAKUKI", "KITAIBUNSIUNDOURONN", "KIHONTEKININCHIPUROSESU", "KUUSOUKAGAKUSHOUSETU", "GURU-PUDHISUKASSHONN", "GENSIRYOKUSENSUIKANN", "KOKUMINNIRYOUHOSHOU", "KOMAKANAKEIKAKUWOTATERU", "KOMYUNIKE-SHONNTU-RU", "SHOUNENYOTAISIWOIDAKE", "ATAMAKAKUSITESIRIKAKUSAZU", "ICHINANSATTEMATAICHINANN", "MITUGONOTAMASIIHYAKUMADE", "HYAKUGAIATTEICHIRINASI", "KOINOJOUGENIHEDATENASI", "KYOUNONASAKEHAASUNOKATAKI", "ASITAHAASITANOKAZEGAHUKU", "SUKIKOSOMONONOJOUZUNINARE", "INUMOARUKEBABOUNIATARU", "NOUARUTAKAHATUMEWOKAKUSU", "KAWAIIKONIHATABIWOSASEYO", "AIDENTHIFIKE-SHONN", "ASUPERUGA-SHOUKOUGUNN", "GARIREISIKIBOUENKYOU", "KIKENNNOGENNINTONARUMONO", "KINKYUUTUUHOUSISUTEMU", "KONPYU-TA-PUROGURAMA-", "SAISIYOUKANOUPUROGURAMU", "SICHOUSHASANKABANGUMI", "SITURYOUHOZONNNOHOUSOKU", "SISSITTOITTEOIHARAU", "JINSHUSABETUWOHAISISURU", "CHOKORE-TOCHIPPUKUKKI-", "NOIMANGATAKONPYU-TA-", "ITARIKKUTAIDEINSATUSURU", "SAIKOUSIKKOUSEKININSHA", "WATASINONAMAEHAHIGUCHIYOUSUKEDESU", "JIBUNNNOSONZAIWOISIKISURU", "JOUHOUAKUSESIBIRITHI-", "WASEDADAIGAKUKIKANRIKOUGAKUBU", "TANNIMENSEKIATARINOCHIKARA", "NASHONARUAIDENTHITHI-", "NYU-TONSIKIBOUENKYOU", "NO-BERUSHOUJUSHOUSHA", "HUDOUSHOUSUUTENNENZANN", "MARUCHIPUROSESSAKONPYU-TA", "DOMESUTHIKKUBAIORENSU", "ROUJINKAIGOSIENSENTA-", "AMINOANSOKUSANNECHIRU", "KAKOYORIMOOOKINAYUMEWOMOTOU", "KYOUHUHATUNENIMUCHIKARASHOUJIRU", "CHISIKIHACHIKARANARI", "WAGAHAIHANINGENDEARU", "SHOKURYOUWOKYOUKYUUSURU", "MASACHU-SETTUKOUKADAIGAKU", "OBUJEKUTOSIKOUPUROGURAMINGU", "KOKUMINKENKOUDUKURIUNDOU", "ROKETTOENJINNNOSUISINZAI", "KANJINOGESHUTARUTOHOUKAI"];
var words_3_comt=["だいしゅきホールド", "波浪注意報", "イリオモテヤマネコ", "知識労働者", "清掃工場", "日付変更線", "スクランブルエッグ", "厳島神社", "一刀両断", "エメラルドグリーン", "品種改良", "一般常識", "おはようございます", "グランドキャニオン", "リハビリテーション", "カルチャーショック", "応用物理学", "コミュニケーション", "春夏秋冬", "イソップ物語", "フィギュアスケート", "百人一首", "わらしべ長者", "フロッピーディスク", "マックブックエアー (MacBook Air)", "激おこぷんぷん丸", "県庁所在地", "コストパフォーマンス", "ワンワンニャーニャー", "アイスクリームソーダ", "海洋生物学", "解散総選挙", "天下一武道会", "曖昧な表現", "入場制限", "高等裁判所", "悪魔の代弁者", "アセチルサリチル酸", "アルキメデスの原理", "タイピング疲れたよー", "いらっしゃらなかった", "赤外線通信", "インターネットカフェ", "インフォメーション", "映画プロデューサー", "エイジアンアメリカン", "弁慶の泣き所", "お祭り騒ぎをする", "核融合反応", "カムチャッカ半島", "国立競技場", "東京スカイツリー", "内閣総理大臣", "葛西臨海公園", "緑黄色野菜", "最小公倍数", "アメリカ合衆国", "恐怖症恐怖", "イングリッシュマフィン", "運転免許証", "液晶ディスプレイ", "エメラルドゴキブリバチ", "エルニーニョ現象", "共振レポートやばい", "過マンガン酸カリウム", "危急存亡の時", "クオリティーオブライフ", "グローバリゼーション", "経営コンサルタント", "毎日新聞の記事", "朝ご飯は適当に", "東名高速道路", "あー温泉に行きたい", "あいうえおかきくけこさ", "呪いのわら人形", "パーソナルコンピュータ", "生活習慣病", "代表取締役", "メタボリックシンドローム", "アメリカ独立戦争", "インスピレーションの素", "インフォームドコンセント", "うっとりさせる美しさ", "江頭２：５０", "オペレーティングシステム", "合奏協奏曲", "ミシシッピアカミミガメ", "ブラインドタッチをやって", "男に二言はないもん", "勢いよく流れる川", "ウェブアクセシビリティー", "音波水中探索機", "気体分子運動論", "基本的認知プロセス", "空想科学小説", "グループディスカッション", "原子力潜水艦", "国民医療保障", "細かな計画を立てる", "コミュニケーションツール", "少年よ大志を抱け", "頭隠して尻隠さず", "一難去ってまた一難", "三つ子の魂百まで", "百害あって一利なし", "恋の上下に隔てなし", "今日の情けは明日の仇", "明日は明日の風が吹く", "好きこそものの上手になれ", "犬も歩けば棒に当たる", "能ある鷹は爪を隠す", "可愛い子には旅をさせよ", "アイデンティフィケーション", "アスペルガー症候群", "ガリレイ式望遠鏡", "危険の原因となるもの", "緊急通報システム", "コンピュータープログラマー", "再使用可能プログラム", "視聴者参加番組", "質量保存の法則", "シッシッと言って追い払う", "人種差別を廃止する", "チョコレートチップクッキー", "ノイマン型コンピューター", "イタリック体で印刷する", "最高執行責任者", "私の名前は樋口陽祐です", "自分の存在を意識する", "情報アクセシビリティー", "早稲田大学基幹理工学部", "単位面積当たりの力", "ナショナルアイデンティティー", "ニュートン式望遠鏡", "ノーベル賞受賞者", "浮動小数点演算", "マルチプロセッサコンピュータ", "ドメスティックバイオレンス", "老人介護支援センター", "アミノ安息香酸エチル", "過去よりも大きな夢を持とう", "恐怖は常に無知から生じる", "知識は力なり", "我輩は人間である", "食料を供給する", "マサチューセッツ工科大学", "オブジェクト指向プログラミング", "国民健康づくり運動", "ロケットエンジンの推進剤", "漢字のゲシュタルト崩壊" ];



function getword_index(){
  var n=Math.floor(Math.random ()*150);
  return n;
}

var string_bef=-1; //for n -> nn
function change_word(i){
  switch (i){
    //si -> shi s:83 h:72 i:73
    case 72:
      if (string.charCodeAt(string_at-1)==83&&string.charCodeAt(string_at)==73)
        string=string.substring(0, string_at)+"H"+string.substring(string_at, string.length);
      break;
    //tu -> tsu t:84 s:83 u:85
    case 83:
      if (string.charCodeAt(string_at-1)==84&&string.charCodeAt(string_at)==85)
        string=string.substring(0, string_at)+"S"+string.substring(string_at, string.length);
      break;
    //n -> nn N A I U E O Y
    case 78:
      var nochanging=[78,65,73,85,69,79,89];
      var bool=1;
      for (var i=0;i<6;i++){
        if (string.charCodeAt(string_at)==nochanging[i]){
          bool=0;
          break;
        }
      }
      if (string.charCodeAt(string_at-1)==78&&bool&&string_at!=string_bef+1){
        string=string.substring(0, string_at)+"N"+string.substring(string_at, string.length);
        string_bef=string_at;
      }
      break;
    //ji -> zi j:74 z:90 i:73
    case 90:
      if (string.charCodeAt(string_at)==74&&string.charCodeAt(string_at+1)==73)
        string=string.substring(0,string_at)+"Z"+string.substring(string_at+1, string.length);
    //jauo -> zyauo z:90 y:89 j:74 a:65 u:85 o:79
      var bool=0;
      if (string.charCodeAt(string_at+1)==65||string.charCodeAt(string_at+1)==85||string.charCodeAt(string_at+1)==79) bool=1;
      if (string.charCodeAt(string_at)==74&&bool)
        string=string.substring(0,string_at)+"ZY"+string.substring(string_at+1, string.length);
      break;
    //chi -> ti c:67 h:72 i:73 t:84
    case 84:
      if (string.charCodeAt(string_at)==67&&string.charCodeAt(string_at+1)==72&&string.charCodeAt(string_at+2)==73)
        string=string.substring(0,string_at)+"T"+string.substring(string_at+2,string.length);
    //chauo -> tyauo c:67 t:84 y:89 a:65 u:85 o:79
      var bool=0;
      if (string.charCodeAt(string_at+2)==65||string.charCodeAt(string_at+2)==85||string.charCodeAt(string_at+2)==79) bool=1;
      if (string.charCodeAt(string_at)==67&&string.charCodeAt(string_at+1)==72&&bool)
        string=string.substring(0,string_at)+"TY"+string.substring(string_at+2, string.length);
      break;
    //hu -> fu h:72 u:85 f:70
    case 70:
      if (string.charCodeAt(string_at)==72&&string.charCodeAt(string_at+1)==85)
        string=string.substring(0,string_at)+"F"+string.substring(string_at+1, string.length);
      if (string.charCodeAt(string_at)==72&&string.charCodeAt(string_at+1)==72)
        string=string.substring(0,string_at)+"FF"+string.substring(string_at+2, string.length);
      break;
    //shauo -> syauo s:83 h:72 y:89 a:65 u:85 o:79
    case 89:
      var bool=0;
      if (string.charCodeAt(string_at+1)==65||string.charCodeAt(string_at+1)==85||string.charCodeAt(string_at+1)==79) bool=1;
      if (string.charCodeAt(string_at)==72&&string.charCodeAt(string_at-1)==83&&bool)
        string=string.substring(0,string_at)+"Y"+string.substring(string_at+1, string.length);
      break;
  }

}
