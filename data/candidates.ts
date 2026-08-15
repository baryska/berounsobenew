import { StaticImageData } from 'next/image';

// Fotky s pořadovým číslem (public/), řazené dle pozice na kandidátce
import P01 from '../public/1_barbora_skalova.png';
import P02 from '../public/2_lucie_simeckova.png';
import P03 from '../public/3_vaclav_kovar.png';
import P04 from '../public/4_eva_kotrcova.png';
import P05 from '../public/5_jan_valachovic.png';
import P06 from '../public/6_kristyna_kymlickova.png';
import P07 from '../public/7_tomas_prochazka.png';
import P08 from '../public/8_jakub_novak.png';
import P09 from '../public/9_adela_schmiedova.png';
import P10 from '../public/10_martin_vesely.png';
import P11 from '../public/11_veronika_pohlova.png';
import P12 from '../public/12_jonas_kelner.png';
import P13 from '../public/13_matyas_vejskal.png';
import P14 from '../public/14_jana_valachovicova.png';
import P15 from '../public/15_vendula_stojovska.png';
import P16 from '../public/16_albert_muhlfeld.png';
import P17 from '../public/17_marie_svobodova.png';
import P18 from '../public/18_jan_zykan.png';
import P19 from '../public/19_vlasta_pekarkova.png';
import P20 from '../public/20_borek_hummel.png';
import P21 from '../public/21_michal_svec.png';

export interface Candidate {
  /** Pořadové číslo na kandidátce */
  number: number;
  name: string;
  titles?: string;
  tags: string[];
  /** Krátký text pro velký medailonek (2–4 věty) */
  perex: string;
  /** Ještě kratší text pro malou kartu rosteru (2–3 věty) – jen kandidáti 11–21 */
  shortText?: string;
  /** Celý profil v modálu */
  fullText: string;
  photo: StaticImageData;
  /** Volitelný odznak, např. „současná zastupitelka" */
  badge?: string;
}

// Placeholder text pro dosud nedodané medailonky
const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo.';
const LOREM_SHORT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna.';
const LOREM_FULL =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.\n\nNullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.';

export const Candidates: Candidate[] = [
  {
    number: 1,
    titles: 'Mgr., Ph.D.',
    name: 'Barbora Skálová',
    photo: P01,
    tags: ['CHYTRÉ MĚSTO', 'INOVACE', 'KOMUNIKACE'],
    badge: 'současná zastupitelka',
    perex:
      'Softwarová vývojářka, která ví, že moderní město stojí na chytrých službách, kvalitním školství a vstřícné komunikaci. Desátým rokem bojuje za vodovod v Hostímě. Spoluzakladatelka spolku Berounský rybníček.',
    fullText: `Vystudovala finštinu a moderní dějiny, ale zakotvila ve světě IT a už mnoho let se živí jako softwarová vývojářka. Absolvovala několik studijních pobytů ve Finsku, kde zjistila, že moderní město 21. století stojí na kvalitním školství, špičkové péči o veřejný prostor, chytrých službách a otevřené komunikaci s občany. Tuto praxi by chtěla přinést i do Berouna. Již 15 let je hrdou obyvatelkou Hostíma, kde už desátým rokem jako místopředsedkyně osadního výboru bojuje o vodovod a kanalizaci. V létě mění klávesnici za pádlo a jako vedoucí jezdí na vodácký tábor. Je spoluzakladatelkou sousedského spolku Berounský rybníček. Má dvě dcery.`,
  },
  {
    number: 2,
    titles: 'Ing.',
    name: 'Lucie Šimečková',
    photo: P02,
    tags: ['PODNIKÁNÍ', 'MARKETING'],
    perex:
      'Zkušenosti z nadnárodní IT korporace přetavila ve vlastní podnikání. Pomáhá začínajícím startupům s marketingem a také založila úspěšný lokální profil @ziju_v_beroune a stála u i u zrodu spolku Berounský rybníček.',
    fullText: `Po získání inženýrských titulů na Vysoké škole ekonomické a na České zemědělské univerzitě v oborech hospodářská politika a podnikání a administrativa začala pracovat jako marketérka v IT. Během studií na VŠ strávila tři měsíce na studijní stáži na Generálním konzulátu České republiky v Los Angeles. Zkušenosti z nadnárodní IT korporace a technologického startupu přetavila ve vlastní podnikání, poskytuje marketingové služby začínajícím startupům. Od roku 2020 s hrdostí nazývá Beroun svým domovem. Během rodičovské založila lokální instagramový profil @ziju_v_beroune a později spoluzaložila sousedský spolek Berounský rybníček.`,
  },
  {
    number: 3,
    titles: '',
    name: 'Václav Kovář',
    photo: P03,
    tags: ['VEŘEJNÝ PROSTOR', 'OTEVŘENÁ RADNICE'],
    perex:
      'Odborník na zapojování veřejnosti do rozhodování. Šest let vedl spolek Berounská zeleň. Do komunální politiky přináší téma město pro lidi – kvalitní veřejná prostranství a otevřenou radnici.',
    fullText: `Po studiích novinařiny pracoval v kultuře. Věnoval se produkci a vedení projektových týmů. Profesní život ho dovedl až k rozvoji komunitního života a zapojování veřejnosti do rozhodovacích procesů (participaci). Tomu se začal naplno věnovat před dvěma lety jako designér participativních procesů, lektor a facilitátor. Od malička má blízko k přírodě, což mohl naplno zužitkovat při vedení dobrovolnického spolku Berounská zeleň. Deset let žije se ženou a dvěma dětmi v Berouně a stejně dlouho se zabývá současnými přístupy k navrhování a správě veřejného prostoru. Věří, že pouze otevřená radnice může přinést důvěru a spokojenost lidí. Město vnímá jako živý organismus, ve kterém se setkává řada důležitých funkcí. Úroveň veřejného prostoru určuje jak se ve městě cítíme a kolik času v něm chceme trávit. Jeho rozvoj je proto potřeba připravovat s ohledem na potřeby všech.`,
  },
  {
    number: 4,
    titles: 'Mgr.',
    name: 'Eva Kotrčová',
    photo: P04,
    tags: ['ŠKOLSTVÍ', 'INOVACE'],
    badge: 'současná zastupitelka',
    perex:
      'Pedagožka s dlouholetou praxí v běžných školách i ve speciálním vzdělávání. Používá moderní inovativní metody, které dětem pomáhají učit se s radostí a bez stresu.',
    fullText: `Absolventka Pedagogické fakulty Univerzity Karlovy, obor učitelství na prvním stupni. Dále vystudovala speciální pedagogiku, logopedii a psychopedii. Během své praxe působila na různých typech škol v státním i soukromém sektoru. Má zkušenosti s vedením školy, působila jako zástupce ředitele, dále s prezentací inovativních metod ve výuce a s lektorováním učitelů v oblasti formativního hodnocení, využití IT ve výuce a v oblasti rozvoje logického myšlení žáků.`,
  },
  {
    number: 5,
    titles: '',
    name: 'Jan Valachovič',
    photo: P05,
    tags: ['EKONOMIKA', 'SPORT'],
    perex:
      'Finanční expert se zaměřením na efektivní hospodaření a odpovědný rozpočet. Jako předseda florbalového oddílu navíc dlouhodobě vede děti k aktivnímu pohybu.',
    fullText: `Po absolvování Gymnázia v Berouně studoval VŠCHT. Více než 20 let pracuje jako finanční poradce, vede tým spolupracovníků jako regionální ředitel. Přibližně stejnou dobu se věnuje florbalu, posledních 9 let jako registrovaný hráč, 7 let jako funkcionář. V roce 2019 s kolegy založil oddíl Florbal pro Beroun, jehož je předsedou. Hlavním zaměřením oddílu je práce s dětmi a mládeží. Aktivně se zajímá o život ve městě, angažuje se jako dobrovolník. Coby ekonomicky vzdělaný profesionál vnímá rozpočet města jako prostředek k rozvoji a klade důraz na to, aby každá investice byla smysluplná a udržitelná.`,
  },
  {
    number: 6,
    titles: 'Ing., DiS.',
    name: 'Kristýna Kymličková',
    photo: P06,
    tags: ['STAVEBNICTVÍ', 'VEŘEJNÝ PROSTOR'],
    perex:
      'Stavební inženýrka s praxí v řízení rekonstrukcí. Dlouhodobě se věnuje správě bytového fondu a usiluje o modernizaci bytové infrastruktury a zkvalitnění veřejného prostoru.',
    fullText: `Berounská rodačka, která vystudovala stavební inženýrství. V posledních letech se aktivně zapojuje do dění v místě, kde žije. Ujala se správy bytového domu na Velkém sídlišti, kde jako předsedkyně SVJ koordinovala jeho kompletní revitalizaci. Zároveň se dlouhodobě zajímá o kvalitu veřejného prostoru a snaží se o jeho zlepšení.`,
  },
  {
    number: 7,
    titles: 'PhDr.',
    name: 'Tomáš Procházka',
    photo: P07,
    tags: ['KOMUNIKACE', 'DOPRAVA'],
    perex:
      'Zkušený novinář, vedoucí zahraniční redakce Hospodářských novin. Zastánce živé občanské společnosti a spolehlivé veřejné dopravy.',
    fullText: `V médiích začal pracovat už během studia na gymnáziu. Řadu let působil v regionálním Deníku, kde ho zajímal život v městech a obcích. Nyní vede zahraniční redakci Hospodářských novin a magazín Víkend HN. V Berouně žije s rodinou více než deset let. Otec tří synů je fanouškem veřejné dopravy, vidí kde jsou bolavá místa, která stojí za to vyléčit. Věří, že kvalitní vzdělání a odolná společnost mohou věcmi pohnout víc, než se může na první pohled zdát.`,
  },
  {
    number: 8,
    titles: 'Mgr., Ph.D.',
    name: 'Jakub Novák',
    photo: P08,
    tags: ['ZDRAVOTNICTVÍ', 'VEŘEJNÝ PROSTOR'],
    perex:
      'Biolog, bývalý novinář, dnes pracuje ve zdravotnictví. Věří, že dobré město se pozná podle toho, jak se v něm žije těm, kteří to nemají nejlehčí.',
    fullText: `Vystudoval biologii a působil jako novinář, v současnosti pracuje ve zdravotnictví. Věří, že každý v Berouně si zaslouží důstojný život: bydlení, které nezruinuje rodinu, dostupného doktora, školu, kam děti chodí rády a která je rozvíjí. Město, kudy se dá bezpečně, spolehlivě a včas dostat z jednoho konce na druhý. Komunitu, na kterou se dá spolehnout. Tohle je základ, na kterém stojí dobrý život ve městě.`,
  },
  {
    number: 9,
    titles: 'Ing., Ph.D.',
    name: 'Adéla Schmiedová',
    photo: P09,
    tags: ['REGIONÁLNÍ ROZVOJ', 'DOTACE'],
    perex: 'Ekonomka a ředitelka MAS Jihozápad, která už přes dvacet let pomáhá rozvíjet obce na Berounsku. Odbornice na dotace a regionální rozvoj. Chce, aby radnice naslouchala i těm částem Berouna, na které se často zapomíná.',
    fullText: 'Vystudovala ekonomii na České zemědělské univerzitě a tamtéž si přidala postgraduál v oboru regionálního a sociálního rozvoje. Venkovanka tělem i duší, která už přes dvacet let jako ředitelka obecně prospěšné společnosti MAS Jihozápad pomáhá rozvíjet obce mezi Berounem a Prahou — dotačním poradenstvím i podporou místních spolků, škol a podnikatelů. Málokdo zná zdejší region tak dobře jako ona. Narodila se v Hostímě, kde dnes vede osadní výbor a městu vytrvale nabízí pomocnou ruku při rozvoji obce — zatím marně, ale nevzdává to. Chce, aby radnice naslouchala i těm částem města, na které se často zapomíná.',
  },
  {
    number: 10,
    titles: 'Ing.',
    name: 'Martin Veselý',
    photo: P10,
    tags: ['ARCHITEKTURA', 'ZELEŇ'],
    badge: 'současný zastupitel',
    perex:
      'Architekt s mezinárodními zkušenostmi. Je zakladatelem spolku Berounská zeleň a dlouhodobě se zasazuje o kvalitní územní rozvoj a ochranu městské zeleně.',
    fullText: `Absolvent ČVUT Fakulty stavební, obor pozemní stavby a architektura. Od roku 2006 pracuje jako OSVČ ve vlastním ateliéru. Autor projektů a realizace staveb v ČR a zahraničí (Švédsko, USA, Řecko). Je jedním ze zakladatelů spolku Berounská zeleň.`,
  },
  {
    number: 11,
    titles: '',
    name: 'Veronika Pohlová',
    photo: P11,
    tags: ['SPORT', 'KULTURA', 'ŠKOLSTVÍ'],
    perex:
      'Studentka pedagogiky a rodilá Berouňačka, která chce moderní školy zaměřené na kreativitu, dostupný sport pro všechny generace a více prostoru pro místní kulturu a mladé talenty.',
    shortText:
      'Studentka pedagogiky na VŠ chce město, kde jsou mladí rádi. Dát prostor kreativitě, kultuře a místům pro sport.',
    fullText:
      'Veronika studuje vysokou školu se zaměřením na vzdělávání a výtvarnou výchovu. Jako rodilá Berouňačka chce, aby město bylo místem, kde mladí lidé rádi zůstávají a kde mají prostor pro svůj rozvoj. Jako budoucí učitelka věří, že moderní škola má být především o bezpečném prostředí, podpoře individuality a kreativity, nejen o známkách. Sama se aktivně věnuje sportu a umění, proto v Berouně postrádá dostupnější sportovní zázemí pro všechny a větší podporu místních umělců. Jejím cílem je oživit kulturu, podpořit místní galerie a dát začínajícím tvůrcům šanci se ukázat. Nechce o změnách jen mluvit, ale chce být součástí generace, která je v Berouně pomůže tvořit.',
  },
  {
    number: 12,
    titles: '',
    name: 'Jonáš Kelner',
    photo: P12,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: 'Student obchodní akademie věří, že Beroun může být ještě příjemnější - když se pustíme do věcí, které tu chybí.',
    fullText: LOREM_FULL,
  },
  {
    number: 13,
    titles: 'M.A.',
    name: 'Matyáš Vejskal',
    photo: P13,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: LOREM_SHORT,
    fullText: LOREM_FULL,
  },
  {
    number: 14,
    titles: 'Bc., MBA',
    name: 'Jana Valachovičová',
    photo: P14,
    tags: ['ZDRAVOTNICTVÍ', 'VEŘEJNÝ PROSTOR'],
    perex:
      'Manažerka s mezinárodní zkušeností a vysokoškolská lektorka. Více než dvacet let pracuje s lidmi ve zdravotnictví a učí, jak zvládat náročné situace s respektem a porozuměním.',
    shortText:
      'Manažerka ve zdravotnictví a lektorka komunikace. Přináší otevřenost, spolupráci a péči o místo, kde žijeme.',
    fullText: `Vystudovala ošetřovatelství a psychologii na Lékařské fakultě UK v Hradci Králové a management ve zdravotnictví (MBA). Více než dvacet let se věnuje komunikaci s pacienty, práci s pacientskými organizacemi a vzdělávání zdravotníků.
V letech 2011–2020 žila ve švýcarském Curychu, kde pracovala v medicínském marketingu a jako lektorka komunikace školila zdravotníky ve více než 50 zemích světa. Po návratu do Berouna v roce 2020 vede praktické kurzy pro lékaře, sestry a manažery ve zdravotnictví, přednáší na vysoké škole.
Mezi její celoživotní zájmy patří umění, architektura a grafický design, a i proto se angažuje v projektech, které podporují živý veřejný prostor a sousedskou komunitu. Je spoluzakladatelkou sousedského spolku Berounský rybníček.`,
  },
  {
    number: 15,
    titles: 'DiS.',
    name: 'Vendula Stojovská',
    photo: P15,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: LOREM_SHORT,
    fullText: LOREM_FULL,
  },
  {
    number: 16,
    titles: '',
    name: 'Albert Mühlfeld',
    photo: P16,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: 'Další z hlasů mladé generace, kterému záleží na budoucnosti Berouna. Baví ho cizí jazyky, ekonomie a mezinárodní vztahy.',
    fullText: LOREM_FULL,
  },
  {
    number: 17,
    titles: '',
    name: 'Marie Svobodová',
    photo: P17,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: 'Dlouholetá pedagožka na obchodní akademii v Berouně, nyní v důchodu. Aktivní seniorka, která se zajímá o život ve městě a chce, aby byl Beroun přijemným místem pro všechny generace.',
    fullText: LOREM_FULL,
  },
  {
    number: 18,
    titles: 'Mgr.',
    name: 'Jan Zykán',
    photo: P18,
    tags: ['KULTURA', 'PODNIKÁNÍ'],
    perex:
      'Hostinský a politolog, který z hostímské hospůdky vytvořil významné kulturní centrum. Vedle špičkových veřejných debat do regionu přináší poctivou gastronomii postavenou na lokálních potravinách.',
    shortText:
      'Hostinský a politolog. Z hostímské Hospůdky U Krobiána vybudoval respektované kulturní centrum s poctivou lokální gastronomií.',
    fullText:
      'Hostinský a vystudovaný politolog. Z hostímské Hospůdky U Krobiána vybudoval respektované kulturní centrum, kam na debaty pravidelně přijíždí špičky české vědy, žurnalistiky i politiky. Vedle intelektuálního přesahu se zaměřuje i na lokální gastronomii – jeho podnik sází na kvalitní suroviny od regionálních dodavatelů a ctí tradici poctivého pohostinství. Kulturní akce pořádá bez nároku na zisk – dobrovolné vstupné věnuje na charitativní projekty. Jan Zykán tak v Berouně vytváří prostor, kde se lidé setkávají, diskutují a kde se klade důraz na lokální hodnoty i společenskou odpovědnost.',
  },
  {
    number: 19,
    titles: 'Ing.',
    name: 'Vlasta Pekárková',
    photo: P19,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: 'Veterinární sestra, která  má vždy pozitivní pohled na věc a chuť změnit k lepšímu vše, co se dá.',
    fullText: LOREM_FULL,
  },
  {
    number: 20,
    titles: '',
    name: 'Bořek Hummel',
    photo: P20,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: 'Majitel autoservisu, který má rád věci udělané pořádně a fér. Práce pro město (i v něm) by se tím měla řídit také.',
    fullText: LOREM_FULL,
  },
  {
    number: 21,
    titles: 'Mgr.',
    name: 'Michal Švec',
    photo: P21,
    tags: ['KULTURA'],
    perex:
      'Literární překladatel a dlouholetý předseda Skandinávského domu, za jehož práci mu finský prezident udělil Řád finského lva. Věří, že živá kultura je základem zdravých sousedských vztahů.',
    shortText:
      'Literární překladatel a předseda Skandinávského domu, nositel Řádu finského lva. Chce pro Beroun živou městskou kulturu.',
    fullText: `Vystudoval finštinu a klasickou archeologii. Pracuje jako literární a audiovizuální překladatel, turistický průvodce po severských zemích a jazykový lektor. Téměř dvacet let působí v kulturních neziskových organizacích, zejména jako předseda Skandinávského domu. Za to obdržel od finského prezidenta rytířský Řád finského lva. Nový domov našel se ženou před šesti lety v Berouně, kde se ve volném čase zapojil do činnosti kulturní komise. V severských zemích čerpá inspiraci, že dobře fungující živá městská kultura může být skvělou platformou pro setkávání občanů, rozvoj pozitivních vztahů, vznik nových myšlenek i propagaci města.`,
  },
];

/** Prvních 10 – velké medailonky */
export const FeaturedCandidates = Candidates.slice(0, 10);
/** Zbytek (11–21) – malé karty */
export const OtherCandidates = Candidates.slice(10);
