// Program Beroun sobě — generováno z program.json. Zdroj pravdy pro web.

export type PersonaId =
  | 'rodina' | 'senior' | 'student' | 'auto'
  | 'mhd' | 'cyklista' | 'podnikatel' | 'sidliste' | 'miluji';

export type Weights = Record<PersonaId, number>;

export interface Persona {
  id: PersonaId;
  label: string;
  microcopy: string;
}

export interface ProgramPoint {
  id: string;
  heading: string;
  text: string;
  weights: Weights;
}

export interface Sekce {
  id: string;
  eyebrow: string;
  color: 'blue' | 'green' | '';
  headline: string;
  perex1: string;
  perex2: string;
  ctaUrl?: string;
  ctaLabel?: string;
  quote: string;
  quoteName: string;
  quoteRole: string;
  quoteAvatar: string | null;
  heroImage: string;
  // Ke kapitole může patřit i více dílů podcastu, vypisují se v tomto pořadí.
  podcasts?: {
    src: string;
    title: string;
    description?: string;
    spotifyUrl?: string;
    appleUrl?: string;
    youtubeUrl?: string;
  }[];
  points: ProgramPoint[];
  weights?: Weights;
}

export const PERSONAS: Persona[] = [
  {
    id: "rodina",
    label: "Jsme rodina s dětmi",
    microcopy: "Beroun pro rodiny: Zvýraznili jsme plány pro bezpečné ulice, moderní školy a místa, kde to pro děti žije. Ostatní programové body najdete níže.",
  },
  {
    id: "senior",
    label: "Jsem senior/ka",
    microcopy: "Beroun ohleduplně: Nahoru jsme posunuli kroky pro snazší pohyb po městě, bezpečnější ulice a klidné město. Ostatní programové body pak najdete níže.",
  },
  {
    id: "student",
    label: "Studuji",
    microcopy: "Beroun pro mladé: Tady jsou plány na dostupný sport, chytré technologie a fajn místa k setkávání bez placení. Ostatní programové body pak najdete níže.",
  },
  {
    id: "auto",
    label: "Řídím auto",
    microcopy: "Beroun za volantem: Přehledně o parkování, obchvatech a plynulejší dopravě bez nesmyslných plošných zákazů. Ostatní programové body pak najdete níže.",
  },
  {
    id: "mhd",
    label: "Cestují vlakem / MHD",
    microcopy: "Beroun v pohybu: Posunuli jsme nahoru plány pro chytré spoje, návaznost vlaků a důstojné zastávky. Ostatní programové body pak najdete níže.",
  },
  {
    id: "cyklista",
    label: "Jezdím na kole",
    microcopy: "Beroun ze sedla: Tohle chystáme pro bezpečné stezky, stojany a konec kličkování mezi auty a chodci. Ostatní programové body pak najdete níže.",
  },
  {
    id: "podnikatel",
    label: "Podnikám v Berouně",
    microcopy: "Beroun pro byznys: Zvýraznili jsme podporu živnostníků, rozvoj komerčních prostor a oživení ulic během dne. Ostatní programové body najdete níže.",
  },
  {
    id: "sidliste",
    label: "Bydlím na sídlišti",
    microcopy: "Berounská sídliště v centru pozornosti: Ukazujeme naše řešení pro víc parkování, lepší úklid a moderní hřiště přímo u vás. Ostatní programové body pak najdete níže.",
  },
  {
    id: "miluji",
    label: "Miluju ❤️ Beroun",
    microcopy: "Beroun pro všechny: Tady je kompletní přehled všeho, co pro naše město chystáme. Každý bod je tu pro vás.",
  },
];

export const ALL_SEKCE: Sekce[] = [
  // {
  //   id: "uvod",
  //   eyebrow: "",
  //   color: "",
  //   headline: "Beroun má na víc. Stačí začít řádně hospodařit.",
  //   perex1: "Naše město je skvělé místo pro život, ale všichni cítíme, že svůj potenciál nevyužívá naplno. Často tu zaznívá výmluva, že na nové projekty, lepší úklid nebo moderní infrastrukturu prostě nejsou peníze. Nejsme ale chudé město a náš problém není nedostatek financí. Jen způsob, jakým s nimi radnice poslední dekádu (ne)pracuje.",
  //   perex2: "Prostředky se přesouvají z roku na rok a místo toho, aby se smysluplně investovaly do poctivého rozvoje Berouna, postupně se radnici ztrácí pod rukama. Místo obchvatu nebo nového mostu pak máme gril u jedné z nejpřetíženějších ulic. Zatímco okolní města vzkvétají díky aktivnímu čerpání dostupných dotací, my se jim vyhýbáme. Spousta změn by navíc nestála ani korunu, lepší komunikace s občany nebo efektivnější organizace práce. Beroun proto ze všeho nejvíc potřebuje kvalitní projekty, které nezůstanou jen v šuplíku, ale skutečně zlepší každodenní život nás všech.",
  //   quote: "",
  //   quoteName: "",
  //   quoteRole: "",
  //   quoteAvatar: null,
  //   heroImage: "",
  //   points: [],
  // },
  {
    id: "chytre",
    eyebrow: "BEROUN CHYTŘE",
    color: "blue",
    headline: "Berounská karta a úřad v mobilu.\nVšechny služby na jednom místě",
    perex1: "Začneme postupně budovat moderní systém služeb pro občany, který nám všem usnadní život. Od platby za odpady přes vyřízení dokladů až po nákup lístků do kina, vše přehledně v mobilní aplikaci. Nová možnost pro všechny, kterým digitální cesta nevadí a ocení možnost zařídit si povinnosti na dálku. Zároveň ale zachováme možnost si vše vyřídit osobně, pokud to někomu vyhovuje více.",
    perex2: "Vedle toho zavedeme <strong>Berounskou kartu</strong>, protože žít v Berouně je radost. A my si přejeme, aby to s sebou neslo i praktické výhody. Karta bude součástí připravované aplikace, takže ať už se rozhodnete pro digitální verzi, nebo s sebou budete raději nosit plastovou kartičku, získáte nárok na praktické výhody.\n\nV programových bodech pak její možnosti rozebíráme podrobněji, stejně jako naši snahu o otevření městských dat veřejnosti.",
    ctaUrl: "https://www.berounskakarta.cz",
    ctaLabel: "Více o Berounské kartě na berounskakarta.cz",
    quote: "Mám dvě děti a práci na plný úvazek, takže můj čas je jedna z nejcennějších věcí, které mám. Nechci byrokracií a zjišťováním informací trávit ani o vteřinu déle, než je nutné. Chci okamžitě jedním kliknutím vědět, co se ve městě děje, proč je například někde uzavírka a jak dlouho bude trvat. Taky bych byla ráda, kdyby se na městském webu dalo dobře orientovat, teď je to spíš o nervy. Přála bych si, aby město své obyvatele včas o všem informovalo. Chci radnici, která si váží vašeho času – kde vyřídíte všechno rychle, jednoduše a klidně z mobilu. Moderní město má poskytovat moderní služby.",
    quoteName: "Barbora Skálová",
    quoteRole: "",
    quoteAvatar: "/Barbora_skalova.jpg",
    heroImage: "",
    weights: { rodina: 8, senior: 7, student: 9, auto: 7, mhd: 6, cyklista: 5, podnikatel: 9, sidliste: 8, miluji: 10 },
    points: [
      {
        id: "karta_app",
        heading: "Vydáme Berounskou kartu a mobilní aplikaci Beroun v mobilu",
        text: "Žít v Berouně je radost. A my si přejeme, aby to s sebou neslo i praktické výhody. <strong>Berounská karta</strong> bude dostupná jako plastová karta, ale i jako QR kód v mobilní aplikaci <strong>Beroun v mobilu</strong>. Po jejím předložení získáte slevy na městské služby – parkování, vstupné na koupaliště, do kina, akvaparku Laguna, do coworku v Plzeňce, do muzeí Městského kulturního centra nebo na kulturní akce pořádané městem. Zároveň vybudujeme síť partnerů, abyste slevy mohli co nejdříve uplatnit i v místních restauracích, obchodech nebo u volnočasových kroužků. Všechny poplatky za odpad, psa i parkování vyřídíte jednoduše přes <strong>e-shop městských služeb</strong> s bezpečným ověřením prostřednictvím bankovní identity. A najdete tam samozřejmě také historii plateb.",
        weights: { rodina: 10, senior: 8, student: 10, auto: 8, mhd: 3, cyklista: 3, podnikatel: 9, sidliste: 8, miluji: 10 },
      },
      {
        id: "vykopy",
        heading: "Konec rozkopaných ulic bez vysvětlení. Všechny stavby a výkopy na jedné mapě.",
        text: "Každý jsme si toho už někdy všimnul. Večer se vrátíme z práce a pod okny máme rozkopanou ulici, aniž bychom věděli, proč a jak dlouho to bude trvat. Vytvoříme proto <strong>interaktivní mapu plánovaných staveb, výkopových prací a uzavírek</strong>. Chceme, abyste věděli, co se ve vaší ulici chystá. A také aby město konečně dokázalo lépe koordinovat práce různých dodavatelů. Každý velký projekt, jako je rekonstrukce mostu, revitalizace náplavky či stavba nového hřiště, bude navíc mít vlastní <strong>profil na webové stránce</strong>. Na té zjistíte aktuální stav a veškeré informace o dodržování termínů i čerpání rozpočtu. Transparentně, v reálném čase.",
        weights: { rodina: 5, senior: 5, student: 2, auto: 10, mhd: 8, cyklista: 5, podnikatel: 8, sidliste: 9, miluji: 10 },
      },
      {
        id: "smartinfo",
        heading: "Přívětivější úřad a chytrá komunikace přes SMS nebo aplikaci",
        text: "Úřad tu má být pro vás, ne vy pro něj. Zpřehledníme online objednávání a <strong>upravíme úřední dobu</strong> tak, abyste si nově mohli běžnou agendu zařídit před nebo po práci. Alespoň jednou za měsíc. Důležité informace už navíc nebudete muset vyhledávat na nepřehledných webech nebo sociálních sítích. <strong>Systém SmartInfo</strong> vás bude varovat před haváriemi, nehodami nebo vás upozorní, která popelnice se bude zítra vyvážet – jednoduchou SMS zprávou nebo upozorněním přímo v aplikaci <strong>Beroun v mobilu</strong>.",
        weights: { rodina: 9, senior: 9, student: 5, auto: 4, mhd: 8, cyklista: 2, podnikatel: 8, sidliste: 6, miluji: 10 },
      },
      {
        id: "benefity",
        heading: "Městské benefity rozšíříme k podpoře rodin i seniorů",
        text: "Chystaný systém otevře cestu k dalším praktickým výhodám. Například senioři si přes SMS zprávu nebo aplikaci snadno objednají Senior taxi. A myslíme i na rodiny – při narození dítěte získáte automatické pozvání na vítání občánků a jako bonus startovací příspěvek na nákup v lokálních berounských obchodech.",
        weights: { rodina: 10, senior: 10, student: 0, auto: 0, mhd: 0, cyklista: 0, podnikatel: 0, sidliste: 2, miluji: 10 },
      },
      {
        id: "otevrena_data",
        heading: "Otevřeme data veřejnosti a z Berouna uděláme lídra v inovacích",
        text: "Chceme z Berouna udělat místo, které inovuje a láká talenty. Zpřístupníme městská data veřejnosti, odborníkům i studentům prostřednictvím přehledného <strong>datového portálu</strong>. Veškeré statistiky o hospodaření, životním prostředí, dopravě či demografii budou dostupné na jednom místě. Uspořádáme sérii <strong>berounských hackathonů</strong>, kde budou programátoři či studenti tato data využívat a navrhovat například plány optimalizace tras MHD nebo svozu odpadu. Otevřená data nabídneme vysokým školám pro diplomové a seminární práce, které pomohou Berounu s rozvojem.",
        weights: { rodina: 2, senior: 1, student: 10, auto: 1, mhd: 2, cyklista: 1, podnikatel: 8, sidliste: 1, miluji: 10 },
      },
    ],
  },
  {
    id: "dostupne",
    eyebrow: "BEROUN DOSTUPNĚ",
    color: "",
    headline: "Doprava jako propojený systém",
    perex1: "Kvalita života ve městě se měří mimo jiné tím, jak snadno a bezpečně se v něm dokážeme pohybovat. Berounská doprava si zaslouží propracovanou koncepci, která zohlední pohyb všemi prostředky – pěšky, na kole, MHD i autem. Beroun musí být připravený a zajistit plynulé spojení i v momentě, kdy se stát a kraj rozhodnou zahájit výstavbu tunelu nebo rekonstrukci mostu.",
    perex2: "Jsme proaktivní a proto už teď nabízíme jasné kroky, které <strong>uleví centru</strong>, <strong>propojí izolovaná místa</strong> a zajistí, aby pohyb po Berouně (i do Prahy) dával smysl i za pár let.",
    quote: "Když se ráno snažím vymotat z ucpané Plzeňské ulice, uvědomuji si, jak moc dopravě v Berouně chybí plynulost. A není to jen o autech. Cesta od vlaku domů je zdlouhavá, na kole kličkujete mezi auty a chodci, naopak po práci nemáte auto kde na sídlišti zaparkovat. Naše řešení nestaví na plošných zákazech, ale na chytrém propojování a plánování s ohledem na nevyhnutelnou budoucnost.",
    quoteName: "Tomáš Procházka",
    quoteRole: "",
    quoteAvatar: "/Tomas_prochazka.jpg",
    heroImage: "",
    podcasts: [
      {
        src: "/MHD.mp3",
        title: "Smysluplná veřejná doprava",
        description: "Jak ovlivní přidání expresních spojů do Prahy a lepší spojení s nádražím dopravu v Berouně? Proč chceme v Berouně zavést PID Haló? A co je to tzv. berounský tarif?",
        spotifyUrl: "https://open.spotify.com/episode/7ETgf0neSd2wYYhlI7iayw?si=2d530d4c1f2742e9",
        appleUrl: "https://podcasts.apple.com/cz/podcast/smyslupln%C3%A1-ve%C5%99ejn%C3%A1-doprava/id6792550119?i=1000777456821",
        youtubeUrl: "https://www.youtube.com/watch?v=2j_YaaNZMSE&t",
      },
    ],
    weights: { rodina: 7, senior: 10, student: 8, auto: 10, mhd: 10, cyklista: 10, podnikatel: 7, sidliste: 10, miluji: 10 },
    points: [
      {
        id: "chytry_prujezd",
        heading: "Chytrý průjezd městem",
        text: "Zefektivníme plynulost dopravy zavedením principů chytrého města. Nejdůležitější <strong>křižovatky vybavíme chytrými semafory</strong> a dalšími dostupnými smart prvky, které umí automatizovaně řídit provoz. V některých částech města navíc zavedeme smysluplné jednosměrky. Vytvoříme také další dopravní spojení. Například <strong>prodloužení Tyršovy ulice</strong> pod dálničním mostem až na kruhový objezd, aby autobusy nemusely k nádraží jezdit zbytečnou oklikou. Je také potřeba vybudovat <strong>severozápadní obchvat</strong> kolem Pískovny, golfu a U Zabitého, ale vždy ve spolupráci s lidmi, kteří v dané lokalitě bydlí.",
        weights: { rodina: 4, senior: 4, student: 3, auto: 10, mhd: 6, cyklista: 3, podnikatel: 8, sidliste: 8, miluji: 10 },
      },
      {
        id: "velke_stavby",
        heading: "Dospělý přístup k velkým stavbám a 100% transparentní informace",
        text: "Velké investice jako <strong>jižní „obchvat“ Berouna</strong> (jižní paralelní komunikace) nebo rozsáhlá rekonstrukce dosluhujícího mostu TGM nelze slíbit ze dne na den, vždy se k nim ale budeme stavět čelem. <strong>Zrychlíme jednání s krajem a ŘSD</strong> ohledně dokončení vyprojektovaných etap jižního „obchvat“. A stejně tak budeme postupovat v případě nových dopravních spojení, která Beroun nutně potřebuje. Město se musí v jednání s krajem chovat jako sebevědomý partner. O všech akcích a jejich postupu <strong>budeme transparentně a včas informovat</strong>.",
        weights: { rodina: 4, senior: 4, student: 2, auto: 10, mhd: 5, cyklista: 4, podnikatel: 8, sidliste: 5, miluji: 10 },
      },
      {
        id: "parkovani",
        heading: "Férový a přehledný systém parkování pro místní i návštěvy",
        text: "Zpřehledníme systém parkování a <strong>rozšíříme rezidentní zóny</strong> pro místní tam, kde to dává smysl. Pravidla budeme důsledně vymáhat pomocí auta, které už nyní kontroluje placená parkoviště. Vytvoříme <strong>více parkovacích míst</strong> tam, kde je po nich poptávka (sídliště), a naopak jejich počet omezíme tam, kde město potřebuje dýchat (náměstí). Zvýšíme podíl P+R parkování určených pro dojíždějící a k navigaci na volná místa využijeme chytrou aplikaci (např. již fungující EasyPark). Zvážíme vybudování <strong>nového parkovacího domu u Medicentra</strong>, případně i na dalších místech. Zavedeme smíšené zóny – přes den zde bude moct parkovat kdokoliv, od odpoledne do rána bude parkování jen pro místní. \n\nPokud u domu není jediné legální parkovací místo, nebo nich je až směšně málo, lidé si pomohou sami. Auta pak stojí v trávníku, později na hlíně, nebo štěrku, který si nechají sami dovézt. Můžeme předstírat, že jde o zeleň, nebo si přiznat realitu a nabídnout řešení. Chceme podporovat zeleň tam, kde má šanci prospívat, a tam, kde lidé roky bojují s nedostatkem parkovacích míst, hledat důstojná řešení jak zlepšit parkování.",
        weights: { rodina: 8, senior: 8, student: 3, auto: 10, mhd: 4, cyklista: 2, podnikatel: 6, sidliste: 10, miluji: 10 },
      },
      {
        id: "mhd_na_zavolani",
        heading: "MHD na zavolání, Senior taxi a spoje do nových čtvrtí nebo ke hřbitovu",
        text: "Zlepšíme spojení do hůře dostupných a „slepých“ míst v Berouně. Budeme aktivně jednat o <strong>zavedení mikrobusové poptávkové dopravy PID Haló</strong>, která zajistí třeba večerní spojení z vlakového nádraží a dopravu přes den tam, kde to je potřeba (například Závodí). Zajistíme napojení <strong>MHD do oblastí nové výstavby</strong> a zasadíme se o obnovení autobusové <strong>zastávky přímo v areálu nemocnice</strong>. Na základě vašich podnětů upravíme MHD tak, aby autobus znovu zajížděl například ke hřbitovu. Myslíme i na posílení spojů mezi místy, kam se <strong>studenti nebo senioři potřebují pravidelně dostávat</strong>. Pro starší občany zavedeme službu <strong>Senior taxi BERTA</strong> (BERounské TAxi). Studentům zjednodušíme spojení ke gymnáziu. Zlepšíme celkovou kvalitu zastávek, a to od čistoty až po instalaci nových přístřešků a laviček.",
        weights: { rodina: 8, senior: 10, student: 5, auto: 0, mhd: 10, cyklista: 2, podnikatel: 2, sidliste: 9, miluji: 10 },
      },
      {
        id: "dojizdeni_autobusem",
        heading: "Dojíždění autobusem nejen do Prahy si zaslouží vylepšení",
        text: "Zkoordinujeme spoje v ranní špičce – ke stávajícím linkám do Prahy chceme přidat <strong>expresní spojení s metropolí přímo ze sídliště</strong>. Povede mimo vytížené centrum se zastávkou na berounském nádraží. Tím zároveň posílíme dopravu mezi sídlištěm a nádražím, která není dostatečná. Beroun si zaslouží i kvalitnější spojení s letištěm, jako má například Kladno. Zahájíme proto diskusi o možnosti přímého <strong>spojení Beroun–Letiště Václava Havla</strong>, resp. posílení spojů ve vybraných časech a sezóně na Zličín. Nejen pro děti i seniory navíc připravíme edukační kampaň a <strong>poradenství ohledně tarifů</strong>, abychom ukázali, že cestovat v MHD není žádná věda.",
        weights: { rodina: 5, senior: 4, student: 8, auto: 2, mhd: 10, cyklista: 2, podnikatel: 5, sidliste: 9, miluji: 10 },
      },
      {
        id: "kola",
        heading: "Konec kličkování na kolech",
        text: "Kolo nemá být v Berouně adrenalinový sport. <strong>Vyřešíme absenci cyklostezek</strong>, kvůli které dnes cyklisté musí kličkovat mezi silnicí (kde blokují auta) a chodníkem (kde ohrožují chodce), což vytváří zbytečné konflikty. Síť cyklostezek je nutné dobudovat tak, aby dávala smysl a umožňovala dobré <strong>cyklistické spojení na páteřních trasách</strong> – podél Litavky, z centra na Srbsko, od lávky pro pěší přes pak Na Ostrově a dál ke Štulovně i Brdatkám, od Štiky směrem na Hýskov a Nižbor, z nádraží na Závodí i do centra. A úpravu potřebuje i chodník s cyklostezkou od Alzy směrem k náměstí a dál kolem Medicentra a na most. Cestování na kole musí být bezpečné a pohodlné. Přidáme kolostavy, místa k zastavení a alespoň jedno servisní místo s pumpičkou.",
        weights: { rodina: 8, senior: 3, student: 9, auto: 3, mhd: 4, cyklista: 10, podnikatel: 2, sidliste: 4, miluji: 10 },
      },
      {
        id: "kolo_do_vlaku",
        heading: "Z kola rovnou do vlaku a podpora sdílené mobility",
        text: "Cyklistika padá na tom, že kolo je ve městě téměř nemožné bezpečně zaparkovat. Žádný důležitý cíl ve městě (školy, radnice, bazén, poliklinika, obchody) nesmí zůstat bez <strong>kvalitního stojanu dál než 20 metrů od vchodu</strong>. V rámci programu Z kola do autobusu/vlaku vybudujeme stojany před přestupem na MHD na frekventovaných zastávkách. U sdílených kol (NextBike) navrhneme zavedení <strong>motivačního systému s kredity pro ty, kteří je vracejí do míst, kde zrovna chybí</strong>. Zřídíme další výpůjční stanice a budeme od provozovatele tvrdě vyžadovat dostupnost kol ve večerních hodinách v centru města a na nádraží i lepší celkový servis.",
        weights: { rodina: 4, senior: 2, student: 8, auto: 2, mhd: 8, cyklista: 10, podnikatel: 4, sidliste: 3, miluji: 10 },
      },
    ],
  },
  {
    id: "zelene",
    eyebrow: "BEROUN ZELENĚ",
    color: "",
    headline: "Veřejný prostor, zeleň i sídliště, na které můžeme být pyšní",
    perex1: "Budeme bojovat za to, aby se veřejný prostor v Berouně vrátil lidem. Promyšleně, nadčasově a s respektem k přírodě. Město nemá být prázdné, oplocené ani zanedbané, ale v první řadě živé.",
    perex2: "Důležitým úkolem bude zvýšení kvality života na sídlištích, kde podle jejich obyvatel dnes chybí zejména údržba a pocit bezpečí. Snaha o kultivaci veřejného prostoru neznamená, že musíme hned stavět megalomanské projekty. Mnohem častěji jde o zdánlivé maličkosti, které tvoří celkový dojem – mít si kde sednout ve stínu, kde se v létě napít z pítka a nebát se projít večer podchodem.",
    quote: "Když jdete s dětmi přes město, na spoustě hřišť chybí stín a na ulici se nemáte kde napít. Na sídlišti zase kroužíte kolem bloku a marně hledáte parkování. Beroun má nádherný potenciál, dvě řeky, spoustu zeleně a spoustu skvělých lidí. Stačí o náš společný prostor začít pečovat systematicky, více o jeho podobě mluvit s obyvateli, kterým má sloužit, a výsledky se dostaví.",
    quoteName: "Kristýna Kymličková",
    quoteRole: "",
    quoteAvatar: "/Kristyna_kymlickova.jpg",
    heroImage: "",
    podcasts: [
      {
        src: "/Sidliste-final-upraveny.mp3",
        title: "Sídliště zpět v centru pozornosti",
        description: "Co by se dalo vylepšit na prostranství u Hvězdy a na berounském koupališti? Je parkování na sídlišti neřešitelný problém? A kam se obyvatelé sídliště (ne)dostanou veřejnou dopravou?",
        spotifyUrl: "https://open.spotify.com/episode/2OOGPGN4I7pUy4q0TSfmbm?si=255811dc3e12476d",
        appleUrl: "https://podcasts.apple.com/cz/podcast/s%C3%ADdli%C5%A1t%C4%9B-zp%C4%9Bt-v-centru-pozornosti/id6792550119?i=1000777456722",
        youtubeUrl: "https://www.youtube.com/watch?v=LbeSIkbSPu0",
      },
      {
        src: "/Verejny-prostor-final.mp3",
        title: "Veřejný prostor pro lidi, s úctou k přírodě",
        description: "Jak chceme oživit berounskou náplavku a proč nejde jen o lavičky? Co je potřeba udělat, aby se Městská hora konečně stala centrálním parkem Berouna? A jak zpříjemníme cestu od nádraží, aby se na ní lidé cítili bezpečně?",
        spotifyUrl: "https://open.spotify.com/episode/1dbZjIrtYOk3YVv9m8xKz3?si=215625e870294097",
        appleUrl: "https://podcasts.apple.com/cz/podcast/ve%C5%99ejn%C3%BD-prostor-pro-lidi-s-%C3%BActou-k-p%C5%99%C3%ADrod%C4%9B/id6792550119?i=1000777825732",
        youtubeUrl: "https://www.youtube.com/watch?v=pBderCsNesw",
      },
    ],
    weights: { rodina: 10, senior: 9, student: 10, auto: 4, mhd: 9, cyklista: 9, podnikatel: 6, sidliste: 9, miluji: 10 },
    points: [
      {
        id: "naplavka",
        heading: "Náplavka a břehy řek pro lidi (s respektem k přírodě)",
        text: "Oživení břehů Berounky i Litavky je pro nás velkým tématem. Litavka dnes působí spíše jako bariéra, přitom má stejný potenciál jako Berounka. U obou řek bychom proto rádi dobudovali <strong>průchozí nábřežní promenády s lavičkami, pobytovými plochami a napojením na cyklostezku</strong>. U řeky Berounky máme jako prioritu realizaci propojení <strong>náplavky po celé délce břehu od Štiky až do kempu a také od parku Na Špici až po Štulovnu</strong>, kde má dle původní studie z roku 2018 vzniknout kromě pěší trasy i amfiteátr, přírodní koridor přes ostrov a prostor pro foodtruck nebo sezónní kavárnu. Počítáme navíc s úpravou břehů po vzoru Litomyšle a Sušice, kdy přidáme schody do vody.",
        weights: { rodina: 10, senior: 5, student: 9, auto: 2, mhd: 4, cyklista: 10, podnikatel: 8, sidliste: 5, miluji: 10 },
      },
      {
        id: "mestska_hora",
        heading: "Městská hora jako živý lesopark, ne turistický lunapark",
        text: "Z Městské hory neuděláme betonový projekt ani turistickou atrakci. Naším cílem je, aby ji místní lidé mohli normálně, pohodlně a bezpečně využívat každý den. Opravíme stávající přístupové cesty, zavedeme jasné značení i spolehlivý orientační systém a doplníme večerní osvětlení. V rámci dlouhodobé koncepce potom lokalitu <strong>osadíme jednotným a vkusným mobiliářem</strong>, který nahradí současný nesourodý chaos. Zásadně také změníme přístup k místní přírodě – zavedeme <strong>profesionální management zeleně</strong> založený na arboristickém posudku, zajistíme dlouhodobou péči o stárnoucí stromy a zrevitalizujeme zanedbané travnaté svahy. Při tom všem budeme striktně vycházet z výsledků již proběhlé <strong>participace s občany</strong>, ve kterých po dvou letech nevidíme jako nutné něco škrtat nebo přepisovat.",
        weights: { rodina: 9, senior: 8, student: 8, auto: 1, mhd: 2, cyklista: 6, podnikatel: 3, sidliste: 4, miluji: 10 },
      },
      {
        id: "sidliste_sport",
        heading: "Sídliště zpět v centru pozornosti a dostupný sport",
        text: "Aby sídliště ožila, musí nabídnout mnohem kvalitnější prostor pro život. Staré prolézačky nahradíme <strong>moderními hřišti s vodními prvky, kuličkodráhami či lanovými prolézačkami</strong>. Prostranství u Hvězdy oživíme pravidelnými trhy a kulturním programem. Po vzoru Litvínova vybudujeme <strong>dostupné, multifunkční sportovní plácky</strong> s jednoduchým vybavením (například bránou pro Street X Ball či stolem na ping-pong). Tyto plochy nebudou vyžadovat žádné vstupné ani rezervaci a doplní tak přeplněná placená sportoviště (např. Lokotku). Chceme lépe využít areál koupaliště – vybudováním <strong>suchého hřiště</strong> pro nejmenší nebo lepším občerstvením. O navýšení počtu parkovacích míst budeme navíc usilovat při každé vhodné příležitosti (typicky v rámci plánované rekonstrukce ulic), a to s ohledem na chodce, cyklisty a zeleň.",
        weights: { rodina: 8, senior: 5, student: 8, auto: 3, mhd: 2, cyklista: 3, podnikatel: 2, sidliste: 10, miluji: 10 },
      },
      {
        id: "bezpecne_centrum",
        heading: "Bezpečné centrum, úklid a konec temných koutů",
        text: "Na berounských ulicích jsme všichni svědky toho, že spoléhat se pouze na externí úklidové firmy nestačí, obzvlášť, pokud jim město nedává dostatečné zadání. <strong>Zrevidujeme proto spolupráci s AVE</strong>, a pokud to bude pro město výhodnější, bude si zajišťovat údržbu, drobné opravy městského mobiliáře (koše, lavičky, …) a péči o zeleň vlastními silami pomocí městské firmy. Ve spolupráci s odborníkem na urbanismus potom navrhneme <strong>změny na kritických místech, kde se lidé necítí bezpečně</strong> – v okolí Chačapuri, za knihkupectvím, v podchodech u Barrande, v parčíku u Koně a pod dálničním mostem. Zaměříme se na řešení nepořádku kolem popelnic, situaci lidí bez domova a užívání návykových látek. <strong>Podpoříme noční hlídky, více osvětlení, chytré kamery i úzkou spolupráci se sociálními službami.</strong> Pro ty, kdo o pomoc stojí, zřídíme nové komunitní a nízkoprahové centrum pro děti a dospělé.",
        weights: { rodina: 8, senior: 10, student: 8, auto: 4, mhd: 8, cyklista: 5, podnikatel: 8, sidliste: 5, miluji: 10 },
      },
      {
        id: "zelen_stin",
        heading: "Zeleň, stín a jednotná tvář veřejného prostoru",
        text: "Klimatické změny začínáme pociťovat všichni. Změníme proto přístup k zeleni – zavedeme důslednou <strong>povýsadbovou péči, budování dešťových záhonů, lepší zasakování vody</strong> a ochranu proti tepelným ostrovům. Aktivně začneme vytvářet zastíněná místa u dětských hřišť a laviček. Městu také dáme jednotnou a moderní tvář prostřednictvím <strong>městské koncepce budoucího mobiliáře</strong>. Nezapomínáme ani na ohrazené výběhy pro psy.",
        weights: { rodina: 6, senior: 9, student: 4, auto: 2, mhd: 3, cyklista: 5, podnikatel: 5, sidliste: 8, miluji: 10 },
      },
      {
        id: "prednadrazi",
        heading: "Důstojné přednádraží a plynule prostupné centrum",
        text: "Vlakové nádraží je vstupní branou do Berouna. Začneme s projektováním <strong>moderního přestupního uzlu propojujícího vlaky a autobusy</strong> (kryté přechody, jednotné značení, čekárny a navýšení kapacit P+R) s ohledem na plánovaný železniční tunel z Prahy. Dnes je cesta od vlakového nádraží do centra (a dále přes Wagnerovo náměstí nebo například na Městskou horu) nepřehledná, s nepříjemnými přechody přes rušné silnice (např. třída Politických vězňů). Na složitá urbanistická témata nechceme dávat jednoduché politické odpovědi. Proto se opřeme o doporučení odborníků, kteří navrhnou řešení skutečně odpovídající dané lokalitě.",
        weights: { rodina: 5, senior: 6, student: 7, auto: 6, mhd: 10, cyklista: 5, podnikatel: 5, sidliste: 7, miluji: 10 },
      },
    ],
  },
  {
    id: "vzdelane",
    eyebrow: "BEROUN VZDĚLANĚ",
    color: "",
    headline: "Školy, ve kterých se děti budou cítit dobře a které je připraví jak na život, tak na další studia",
    perex1: "Základem úspěšného města jsou vzdělané, sebevědomé a spokojené děti. Naší vizí je vytvořit <strong>ve školách i školkách</strong> takové prostředí, které děti neodrazuje od vzdělávání a neničí jejich zvídavost. Chceme školy postavené na <strong>moderních metodách, funkčním zázemí a partnerském přístupu k rodičům</strong>.",
    perex2: "Město sice nemůže diktovat, jak mají učitelé učit, ale jako zřizovatel musí ředitelům vytvořit podmínky, aby měli volné ruce k budování kvalitních pedagogických týmů.",
    quote: "Celý život se věnuji školství a mnohokrát jsem si ověřila, že strach z neúspěchu je to nejhorší, co může dítě potkat. Nemůžeme po dětech chtít jen bezmyšlenkovité biflování. Musíme je učit přemýšlet, logicky argumentovat a nebát se chyb, protože metodou pokus–omyl se dostanou nejdál. K tomu ale ředitelé a učitelé potřebují od města adekvátní zázemí, moderní technologie a podporu, aby se mohli soustředit na to hlavní. Na moderní výuku a rozvoj dětí.",
    quoteName: "Eva Kotrčová",
    quoteRole: "",
    quoteAvatar: "/Eva_kotrcova.jpg",
    heroImage: "",
    podcasts: [
      {
        src: "/Skolstvi-final-cut.mp3",
        title: "Školy, které připraví děti na budoucnost",
        description: "Jak vyřešíme kapacity berounských škol a proč mluvíme o nové svazkové škole v kasárnách? Proč podporujeme moderní metody výuky a zavádění formativního hodnocení? Jak městská agentura uvolní ruce ředitelům, aby se mohli více věnovat kvalitě výuky a netrávit čas provozními věcmi?",
        spotifyUrl: "https://open.spotify.com/episode/1Pn7AeUqfr8pZzJ0kx8Iv9?si=d996648635054593",
        appleUrl: "https://podcasts.apple.com/cz/podcast/%C5%A1koly-kter%C3%A9-p%C5%99iprav%C3%AD-d%C4%9Bti-na-budoucnost/id6792550119?i=1000779988251",
        youtubeUrl: "https://youtu.be/Y6dMr_dXg10?si=x4uWTbvk1PKdq7lZ",
      },
    ],
    weights: { rodina: 10, senior: 3, student: 3, auto: 2, mhd: 2, cyklista: 0, podnikatel: 4, sidliste: 3, miluji: 10 },
    points: [
      {
        id: "pedagogicke_tymy",
        heading: "Připravujeme děti na budoucnost tím, že podpoříme kvalitní pedagogické týmy",
        text: "Z pozice zřizovatele budeme u vedení škol aktivně podporovat <strong>zavádění inovativních metod a formativního hodnocení</strong>. Vytvoříme bezpečné prostředí, kde se budou ředitelé moci snažit omezit biflování a žákům předávat spíše dovednosti kritického myšlení. Město k tomu poskytne účelové finance na další <strong>vzdělávání a rozvoj učitelského sboru i ředitelek a ředitelů</strong>. Cílem je posílit projektovou výuku a zavádění IT do vyučování tak, aby školy zvládly udržet kvalitní učitele (a také měly prostředky pro jejich dlouhodobou motivaci, s čímž by mohly pomoct také nové obecní byty).",
        weights: { rodina: 10, senior: 2, student: 6, auto: 0, mhd: 0, cyklista: 0, podnikatel: 3, sidliste: 2, miluji: 10 },
      },
      {
        id: "mensi_tridy",
        heading: "Menší počty dětí ve třídách a vlastní zodpovědnost města",
        text: "Zajistíme kapacity pro všechny berounské děti a zaměříme se na <strong>postupné snižování počtu žáků ve třídách</strong>. Budeme proto důsledně sledovat demografický vývoj a pravidelně aktualizovat výhledy. Jako město se nesmíme a nebudeme spoléhat na to, že problém s kapacitami za nás vyřeší soukromé školy.",
        weights: { rodina: 10, senior: 2, student: 4, auto: 0, mhd: 0, cyklista: 0, podnikatel: 2, sidliste: 3, miluji: 10 },
      },
      {
        id: "ms_dvoulete",
        heading: "Do systému mateřských škol vrátíme kapacity pro dvouleté",
        text: "Z našeho pohledu je to dosažitelný cíl, pokud se nám povede do systému vrátit selský rozum. Chceme umožnit rodičům vrátit se do práce, pokud o to stojí.",
        weights: { rodina: 10, senior: 1, student: 2, auto: 0, mhd: 0, cyklista: 0, podnikatel: 4, sidliste: 2, miluji: 10 },
      },
      {
        id: "svazkova_skola",
        heading: "Nová škola a moderní knihovna v kasárnách, které uleví napjatým kapacitám",
        text: "Kapacity současných základních škol v Berouně jsou na hraně. Prosadíme proto <strong>vybudování takzvané svazkové školy</strong> v areálu kasáren, mimo jiné v budově, kde nyní sídlí městská knihovna. Co znamená svazková škola? Jde o školu, kterou <strong>společně vybudují a financují okolní obce spojené ve speciálním svazku</strong>. Stát svazkové školy podporuje a často na ně vypisuje dotace. Tato nová škola tak přirozeně převezme podstatnou <strong>část dojíždějících dětí</strong>, čímž se konečně uvolní místa ve všech stávajících městských školách primárně pro místní, berounské děti.",
        weights: { rodina: 10, senior: 6, student: 9, auto: 2, mhd: 2, cyklista: 1, podnikatel: 5, sidliste: 5, miluji: 10 },
      },
      {
        id: "mestska_agentura",
        heading: "Městská agentura, aby ředitelé mohli školy rozvíjet, nejen udržovat",
        text: "Současný systém přenáší na ředitele škol všemožné starosti. Vedení tak musí například řešit zatékající střechu, vypisovat výběrová řízení nebo hledat externí mzdové účetnictví namísto toho, aby se věnovalo kvalitě výuky. Zákony nám nedovolují plně oddělit pedagogické vedení od provozního, ale zkusíme to posunout tak daleko, jak nám legislativa umožní. Vybudujeme <strong>silnou zastřešující organizaci</strong> (městskou agenturu) <strong>pro všechny berounské ZŠ a zčásti i MŠ</strong>, která převezme byrokracii, IT správu a poskytne personální, administrativní i metodickou podporu. Ředitelům by to uvolnilo ruce a městskému rozpočtu ušetřilo peníze, které bychom mohli nasměrovat zpět k dětem.",
        weights: { rodina: 6, senior: 3, student: 3, auto: 0, mhd: 0, cyklista: 0, podnikatel: 4, sidliste: 2, miluji: 10 },
      },
      {
        id: "chatrajici_budovy",
        heading: "Pevný plán pro chátrající budovy a kvalitní samoobslužné stravování",
        text: "Stanovíme <strong>pevně vyčleněnou částku v rozpočtu</strong>, kterou navážeme na harmonogram investic, aby se školy nemusely každé opravy doprošovat. Na programu máme i drobná zlepšení s vysokým <strong>dopadem pro konkrétní školy</strong>, včetně plošného zavedení kvalitního samoobslužného stravování na všech berounských základních školách. 1. ZŠ: Zasadíme se o vybudování velké tělocvičny, aby si škola nemusela kvůli větším akcím pronajímat Plzeňku. 2. ZŠ: Budovu jídelny rozšíříme o nové patro, které propojíme se školou tak, aby se děti dostaly do jídelny suchou nohou, tedy bez zbytečného přezouvání a převlékání. 3. ZŠ: Připravíme celkový plán záchrany a rekonstrukce budov školy a jídelny, které jsou v tristním stavu.",
        weights: { rodina: 10, senior: 4, student: 9, auto: 0, mhd: 0, cyklista: 0, podnikatel: 2, sidliste: 4, miluji: 10 },
      },
    ],
  },
  {
    id: "lokalne",
    eyebrow: "BEROUN LOKÁLNĚ",
    color: "",
    headline: "Podpoříme podnikání, aby to na ulicích žilo i přes den",
    perex1: "Pětina obyvatel jezdí za prací jinam, přesto nesmíme dopustit, aby to kvůli tomu na ulicích přestalo žít. Lokální ekonomika je všude kolem nás – oblíbená kavárna, spolehlivý řemeslník i technologická firma, která dává práci místním. A počet pracovních míst na území města pak přímo ovlivňuje, kolik peněz získá Beroun ze státního rozpočtu.",
    perex2: "Chceme vytvořit co nejlepší podmínky pro vznik nových firem a podpořit živnostníky, farmáře i místní malé a střední podniky. Podpora byznysu totiž znamená více peněz v městské kase, živější ulice během dne a silnější vztah lidí k místu, kde žijí. Chceme vytvářet podmínky, které budou podporovat podnikání, a mladí talentovaní nebudou muset utíkat do Prahy. Vše pro realizaci svých nápadů najdou přímo v Berouně.",
    quote: "Na co přijdete, když zkusíte v Berouně rozjet vlastní projekt? Nebo najít slušnou kancelář? Že nám chybí adekvátní zázemí, které by z Berouna udělalo místo nejen pro bydlení, ale i pro práci a podnikání a které by z našeho města udělalo atraktivní adresu pro živnostníky i firmy. Od živějších farmářských trhů a moderního coworkingu se sdílenými kancelářemi až po vznik moderního podnikatelského hubu. Dejme prostor inovacím a místním lidským příběhům, které budou utvářet budoucnost Berouna.",
    quoteName: "Lucie Šimečková",
    quoteRole: "",
    quoteAvatar: "/Lucie_simeckova.jpg",
    heroImage: "",
    weights: { rodina: 3, senior: 5, student: 7, auto: 3, mhd: 3, cyklista: 1, podnikatel: 10, sidliste: 4, miluji: 10 },
    points: [
      {
        id: "mestske_trhy",
        heading: "Městské trhy, které dělají radost, ne ostudu",
        text: "Do jednoho roku upravíme <strong>pravidla městských trhů</strong> ve prospěch lokálních farmářů, místních výrobců a kvalitního street foodu. Zavedeme přehledný systém a trhy rozšíříme z Husova náměstí i na prostranství u Hvězdy. Jejich nedílnou součástí se navíc stanou <strong>kulturní a komunitní akce</strong>, které oživí veřejný prostor.",
        weights: { rodina: 9, senior: 9, student: 6, auto: 2, mhd: 3, cyklista: 3, podnikatel: 10, sidliste: 8, miluji: 10 },
      },
      {
        id: "popup_obchody",
        heading: "Pop-up obchody pro otestování nápadů",
        text: "V Berouně je momentálně velký nedostatek komerčních prostor. Vytypujeme proto <strong>nevyužité městské prostory</strong> vhodné pro komerční využití a nabídneme je k tzv. pop-up (krátkodobým) pronájmům. Místní tvůrci, gastro podnikatelé a drobní prodejci si tak budou moci snadno a bez velkého finančního rizika <strong>otestovat svůj byznys plán</strong>.",
        weights: { rodina: 3, senior: 2, student: 9, auto: 0, mhd: 0, cyklista: 0, podnikatel: 9, sidliste: 1, miluji: 10 },
      },
      {
        id: "online_katalog",
        heading: "Online katalog a ocenění úspěšných firem",
        text: "Vytvoříme přehledný <strong>digitální prostor pro místní firmy a zákazníky</strong>. Na jednom místě najdete mapu podnikatelů, katalog služeb i volná pracovní místa. Budeme aktivně propagovat místní podnikatelské příběhy. Zároveň zavedeme každoroční <strong>ocenění „Firma města Berouna“</strong> (s veřejnými nominacemi a kategorií Objev roku), čímž poděkujeme těm, kteří přispívají k rozvoji místní ekonomiky.",
        weights: { rodina: 3, senior: 2, student: 5, auto: 0, mhd: 0, cyklista: 0, podnikatel: 10, sidliste: 1, miluji: 10 },
      },
      {
        id: "byznys_hub",
        heading: "Městský byznys hub pro nové i zavedené firmy",
        text: "Pro dlouhodobý rozvoj najdeme silného partnera, se kterým připravíme projekt <strong>multifunkčního byznysového hubu s coworkingem</strong>, kancelářemi, sdílenými službami a konferenčním prostorem. Jako ideální lokality se nabízí brownfieldy – například léta chátrající areál bývalých kasáren.",
        weights: { rodina: 2, senior: 1, student: 9, auto: 0, mhd: 0, cyklista: 0, podnikatel: 9, sidliste: 1, miluji: 10 },
      },
      {
        id: "byznys_u_stolu",
        heading: "Berounský byznys u jednoho stolu",
        text: "Nechceme rozhodovat od stolu bez těch, kterých se to týká. Budeme proto pravidelně pořádat <strong>setkání místních podnikatelů</strong>. Budeme zvát velké zaměstnavatele, střední firmy i odborníky z oborově zaměřených oblastí. Vytvoříme prostor pro sdílení zkušeností a sběr podnětů, na které navážou <strong>specializované pracovní skupiny</strong>. Ty se postarají o to, aby se z nápadů stávala reálná řešení.",
        weights: { rodina: 1, senior: 1, student: 3, auto: 0, mhd: 0, cyklista: 0, podnikatel: 10, sidliste: 0, miluji: 10 },
      },
      {
        id: "know_how",
        heading: "Odborné know-how z celého Česka přímo v Berouně",
        text: "Podnikatelé už nebudou muset pro rady do Prahy. Navážeme partnerství s institucemi jako CzechInvest, CzechTrade, Hospodářská komora a regionálními agenturami. Zajistíme, aby tyto organizace měly v Berouně <strong>pravidelné konzultační dny, workshopy a kurzy</strong> zaměřené na účetnictví, právo či úspěšné čerpání dotací.",
        weights: { rodina: 1, senior: 1, student: 5, auto: 0, mhd: 0, cyklista: 0, podnikatel: 9, sidliste: 0, miluji: 10 },
      },
      {
        id: "skoly_realny_svet",
        heading: "Propojení škol s reálným světem",
        text: "Podpoříme podnikavost mladé generace. Žáky a studenty budeme aktivně <strong>zapojovat do hackathonů</strong> a podpoříme spolupráci místních firem přímo se školami. Posílíme <strong>projektovou výuku a motivaci dětí k realizaci vlastních nápadů</strong>, a to například i formou participativních rozpočtů pro základní školy ve spolupráci se školními parlamenty.",
        weights: { rodina: 6, senior: 2, student: 10, auto: 0, mhd: 0, cyklista: 0, podnikatel: 5, sidliste: 1, miluji: 10 },
      },
      {
        id: "podnikatelska_zona",
        heading: "Moderní podnikatelská zóna a optické sítě",
        text: "Identifikujeme 2–3 lokality (ideálně poblíž dálnice a nádraží) a připravíme plán jejich využití k <strong>vybudování moderní podnikatelské zóny pro lehkou výrobu a služby</strong>. Zóna s důrazem na udržitelnou architekturu a zeleň nabídne občanům reálnou pracovní alternativu k dojíždění do Prahy. Postaráme se také o aktivní koordinaci s dodavateli optických sítí a stavebními firmami, aby byl do budoucna zajištěn <strong>rychlý internet napříč celým městem</strong>.",
        weights: { rodina: 5, senior: 2, student: 8, auto: 3, mhd: 2, cyklista: 0, podnikatel: 9, sidliste: 5, miluji: 10 },
      },
    ],
  },
  {
    id: "udrzitelne",
    eyebrow: "BEROUN UDRŽITELNĚ",
    color: "",
    headline: "Výstavba a územní plánování, které řídí město, ne developeři",
    perex1: "Rozvoj města nemůže určovat zisk soukromých investorů, ale potřeby lidí, kteří v něm reálně žijí. Beroun v posledních letech zažil stavební boom, na který ale doprava, školy ani školky nebyly připravené. Naší vizí je tento přístup otočit – nová výstavba je možná až tehdy, až bude město mít hotovou infrastrukturu.",
    perex2: "Stavět nové domy je možné až poté, co budou k dispozici funkční obchvat, bezpečné mosty a dostatek míst pro děti ve vzdělávacích zařízeních. Zároveň jako město musíme začít systematicky budovat <strong>vlastní bytový fond</strong>.",
    quote: "Když se člověk podívá na to, co se v Berouně děje, přepadne ho pocit, že developeři mají na radnici hlavní slovo. Na třech místech se staví celé čtvrti bytových domů, přitom v jejich okolí zoufale chybí parkování a místa ve školce narychlo dotuje město z našich peněz. Chci, aby pravidla hry určovalo město – nejdřív musí být vyřešené dopravní napojení a občanská vybavenost, potom se teprve může začít cokoli stavět.",
    quoteName: "Jan Valachovič",
    quoteRole: "",
    quoteAvatar: "/Jan_valachovic.jpg",
    heroImage: "",
    weights: { rodina: 5, senior: 8, student: 4, auto: 8, mhd: 5, cyklista: 3, podnikatel: 5, sidliste: 7, miluji: 10 },
    points: [
      {
        id: "zadne_rozsirovani",
        heading: "Žádné další rozšiřování stavebních parcel bez hotové dopravy",
        text: "Dokud nebude 100% vyřešena celková dopravní infrastruktura a kapacity škol, <strong>nebudeme schvalovat rozšiřování dalších zastavitelných území</strong>. Z pozice města budeme proto odmítat developerské tlaky na zastavění zelených ploch. Zrevidujeme celou změnu územního plánu č. 6 a nepustíme dále změny, které ohrozí udržitelný rozvoj města.",
        weights: { rodina: 6, senior: 6, student: 3, auto: 8, mhd: 2, cyklista: 4, podnikatel: 3, sidliste: 9, miluji: 10 },
      },
      {
        id: "smlouvy_developeri",
        heading: "Férové, ale nekompromisní smlouvy s developery a ochrana Suchých luk",
        text: "S přísností budeme postupovat i v případě smluv s investory. Zpřísníme pravidla a budeme je důsledně vymáhat. Jak to bude vypadat v praxi? Například u již aktivně plánované <strong>čtvrti Suchá luka</strong> nenecháme nic náhodě – <strong>pohlídáme dostatek veřejné zeleně, volných prostranství i občanskou vybavenost</strong>. Smlouvy nastavíme tak, že nebude možná kolaudace ani prodej bytů dříve, než developer na své náklady vybuduje nebo finančně zaštítí vznik školy, školky, zdravotnického zařízení a obchodů.",
        weights: { rodina: 7, senior: 6, student: 4, auto: 5, mhd: 2, cyklista: 2, podnikatel: 5, sidliste: 7, miluji: 10 },
      },
      {
        id: "bydleni_tiba",
        heading: "Městské bydlení v areálu Tiba",
        text: "Jako město potřebujeme vybudovat <strong>vlastní bytový fond</strong>, abychom dokázali nabídnout dostupné bydlení například <strong>mladým rodinám, seniorům nebo potřebným profesím</strong>. V areálu bývalé Tiby proto zrealizujeme výstavbu nového městského bytového domu. Stávající chátrající ubytovnu, kterou zde město vlastní, necháme kompletně strhnout a na jejím místě postavíme moderní a důstojné městské byty.",
        weights: { rodina: 9, senior: 9, student: 10, auto: 2, mhd: 3, cyklista: 2, podnikatel: 5, sidliste: 4, miluji: 10 },
      },
      {
        id: "kasarna_kultura",
        heading: "Kasárna jako centrum kultury, vzdělávání a odpočinku",
        text: "Areál bývalých kasáren je dnes <strong>parkovištěm obklopeným chátrajícími budovami</strong>, mezi kterými jsou jedinými výjimkami městská knihovna, Jiná káva, dětská skupinka a veslařská budova Lokomotivy Beroun. Celou tuto část chceme začít od základů měnit a vytvořit zde moderní <strong>multifunkční prostor pro všechny generace</strong>. Knihovna by si po letech skvělé práce zasloužila v rámci areálu kasáren <strong>novou budovu</strong>. Dále tu je místo pro reprezentativní <strong>kulturní sál</strong>, který Berounu tak zoufale chybí a který se stane novým domovem nejen pro maturitní plesy, ale i další společenské akce. Součástí projektu bude také <strong>relaxační zóna a vyčleněné startovací byty</strong>, které poslouží jako motivace pro přilákání kvalitních učitelů do berounských škol. Stejně tak podpoříme vznik sportovní haly pro jednoho ze spoluvlastníků nemotivostí v areálu kasarém - TJ Lokomotivu Beroun.",
        weights: { rodina: 10, senior: 8, student: 9, auto: 2, mhd: 2, cyklista: 2, podnikatel: 6, sidliste: 4, miluji: 10 },
      },
      {
        id: "dum_pro_seniory",
        heading: "Nový dům pro seniory a chytré dočasné využití míst",
        text: "Stárnutí populace je trend, na který chceme co nejrychleji reagovat. Zahájíme proto práci na plánech pro <strong>nový, moderní dům pro seniory</strong>, který nabídne kvalitní zázemí a péči pro berounské babičky a dědečky. Než se ale takto velké projekty vyprojektují a profinancují, nenecháme pozemky ležet ladem jako nehostinné rumiště. Pro prázdná místa určená k budoucí výstavbě zavedeme <strong>princip dočasného využití</strong> – na ploše pro budoucí domov seniorů tak do té doby zařídíme například <strong>pumptrack pro děti a mládež</strong>. Podporujeme život teď a tady, ale dlouhodobé vize neztrácíme ze zřetele.",
        weights: { rodina: 6, senior: 10, student: 5, auto: 0, mhd: 0, cyklista: 0, podnikatel: 0, sidliste: 3, miluji: 10 },
      },
    ],
  },
  {
    id: "transparentne",
    eyebrow: "BEROUN OTEVŘENĚ",
    color: "",
    headline: "Radnice jako partner, se kterým si rozumíte",
    perex1: "Rozhodovat o městě za zavřenými dveřmi vnímáme jako přežitek. Chceme budovat otevřený vztah mezi radnicí a vámi, občany. Zapojení veřejnosti pro nás nekončí vhozením lístku do volební urny ani online přenosem zasedání zastupitelstva. Chceme nastavit pravidelnou komunikaci, zavést moderní nástroje a podporovat diskuzi s lidmi napříč všemi generacemi.",
    perex2: "Město musí o strategických dokumentech, rozvoji i běžných opravách komunikovat včas a srozumitelně. Jedině v případě, že bude radnice hrát s otevřenými kartami, může vzniknout vzájemná důvěra.",
    quote: "Město je živý organismus a úroveň veřejného prostoru určuje, jak se v něm cítíme. Zkušenosti ze zapojování veřejnosti do rozhodování mi ukázaly, že pouze otevřená radnice dokáže lidem přinášet spokojenost. Rozvoj Berouna musíme plánovat a připravovat společně, s ohledem na potřeby všech. Jen tak si radnice může vysloužit důvěru občanů.",
    quoteName: "Václav Kovář",
    quoteRole: "",
    quoteAvatar: "/Vaclav_kovar.jpg",
    heroImage: "",
    podcasts: [
      {
        src: "/Otevrena-radnice-final.mp3",
        title: "Otevřená radnice",
        description: "Proč chceme, aby se o důležitých rozhodnutích diskutovalo s lidmi už před zahájením projektů? Jak chceme dostat radnici blíž k mladým lidem? A co uděláme pro to, aby radnice komunikovala srozumitelně a včas?",
        spotifyUrl: "https://open.spotify.com/episode/0tWShHXewfJU29ilFhT4VU?si=03425832eabd4a76",
        appleUrl: "https://podcasts.apple.com/cz/podcast/radnice-jako-partner-se-kter%C3%BDm-si-rozum%C3%ADte/id6792550119?i=1000778815250",
        youtubeUrl: "https://www.youtube.com/watch?v=_2ZpGS75_78",
      },
    ],
    weights: { rodina: 6, senior: 6, student: 5, auto: 5, mhd: 4, cyklista: 2, podnikatel: 8, sidliste: 6, miluji: 10 },
    points: [
      {
        id: "zastupitelstvo",
        heading: "Zastupitelstvo, které vám dává prostor ptát se a připomínkovat",
        text: "Zasedání zastupitelstva se bude konat <strong>každý měsíc</strong>. Víme, že pro pracujícího člověka je nereálné diskutovat s politiky v brzkých odpoledních hodinách. <strong>Dotazy veřejnosti</strong> proto přesuneme do předem známého, pevného bloku s přesným časovým slotem (například v 17:30), abyste stihli v klidu dorazit z práce a nepřišli o možnost se na cokoliv zeptat.",
        weights: { rodina: 4, senior: 10, student: 4, auto: 8, mhd: 2, cyklista: 2, podnikatel: 9, sidliste: 8, miluji: 10 },
      },
      {
        id: "radnice_online",
        heading: "Radnice otevřená fyzicky i online",
        text: "Změníme standard komunikace úřadu. Zmodernizujeme <strong>webovou stránku</strong> tak, aby byla přehledná a uživatelsky přívětivá. O důležitých věcech, od dopravních omezení přes zásadní provozní rozhodnutí až po kácení stromů, budeme <strong>informovat předem, lidsky a srozumitelně</strong>. Zajistíme také profesionální správu městských profilů na sociálních sítích.",
        weights: { rodina: 8, senior: 9, student: 8, auto: 3, mhd: 3, cyklista: 3, podnikatel: 9, sidliste: 6, miluji: 10 },
      },
      {
        id: "participace",
        heading: "Profesionální přístup k participaci a osobní setkávání",
        text: "Zapojování lidí do chodu města může znít jako prázdná fráze. Pro nás je to ale upřímně míněný závazek, který chceme od prvního dne začít naplňovat. Vytvoříme pozici <strong>koordinátora participace a komunit</strong> – odborníka, který pomůže úřadu efektivně zapojit veřejnost například do tvorby strategických dokumentů, které určí vývoj města na další dekády. Vedení města nebude pouze sčítat hlasy v anketě, vyrazíme mezi vás. Uspořádáme <strong>kulaté stoly s podnikateli, posezení u kávy se seniory, setkávání se studenty</strong> a pravidelně se budeme účastnit <strong>osadních i sousedských výborů</strong> nebo zasedání školních parlamentů.",
        weights: { rodina: 6, senior: 9, student: 9, auto: 2, mhd: 2, cyklista: 2, podnikatel: 9, sidliste: 8, miluji: 10 },
      },
      {
        id: "participativni_rozpocet",
        heading: "O penězích v participativním rozpočtu budeme rozhodovat společně",
        text: "Participativní rozpočet města zaslouží jasnější řízení – co se odhlasuje letos, musí být hotové do konce roku, ne za pět let. Potřebujeme proto <strong>kvalitněji připravené projekty</strong>, které budou stát na jednoduché vizualizaci, srozumitelném popisu a jasném rozpočtu. Pomocí jednoduché aplikace nebo na veřejných setkáních budete moci <strong>sami navrhnout a následně odhlasovat</strong> projekty, které podle vás Berounu chybí – ať už půjde o nové lavičky, úpravu zeleně nebo herní prvky.",
        weights: { rodina: 9, senior: 6, student: 9, auto: 2, mhd: 2, cyklista: 2, podnikatel: 4, sidliste: 9, miluji: 10 },
      },
      {
        id: "skoly_participace",
        heading: "Naučíme školy aktivní participaci a zapojíme nejmladší generace",
        text: "Zapojíme do rozhodování i nejmladší generace. Prostřednictvím školních parlamentů <strong>dostanou žáci k dispozici reálný finanční fond</strong> (v řádu desítek tisíc korun), aby si mohli sami navrhnout, vybrat a zrealizovat projekty, které jim na školách chybí. Nejde tu primárně o peníze, ale především o to, aby si děti <strong>v praxi vyzkoušely proces fungování úřadu</strong>. Protože tak nejrychleji pochopí, jak důležité je umět spolupracovat, diskutovat a věnovat pozornost svému životnímu okolí.",
        weights: { rodina: 9, senior: 2, student: 9, auto: 0, mhd: 0, cyklista: 0, podnikatel: 1, sidliste: 2, miluji: 10 },
      },
    ],
  },
];