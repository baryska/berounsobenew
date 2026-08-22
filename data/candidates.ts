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
    tags: [],
    badge: 'současná zastupitelka',
    perex:
      'Softwarová vývojářka, která ví, že moderní město stojí na chytrých službách, kvalitním školství a vstřícné komunikaci. Desátým rokem bojuje za vodovod v Hostímě. Spoluzakladatelka spolku Berounský rybníček.',
    fullText: `Vystudovala finštinu a moderní dějiny, ale zakotvila ve světě IT a už mnoho let se živí jako softwarová vývojářka. 
    
    Absolvovala několik studijních pobytů ve Finsku, kde zjistila, že moderní město 21. století stojí na kvalitním školství, špičkové péči o veřejný prostor, chytrých službách a otevřené komunikaci s občany. Tuto praxi by chtěla přinést i do Berouna. 
    
    Její velké téma je voda a sucho - už desátým rokem bojuje o vodovod v Hostímě, jehož je hrdou obyvatelkou.
    
    V létě mění klávesnici za pádlo a jako vedoucí jezdí na vodácký tábor. 
    
    Je spoluzakladatelkou sousedského spolku Berounský rybníček. Baví jí vymýšlet šifrovací hry o Berounu a má na svědomí i to, že si je můžete zahrát nejen na papíře, ale i v telefonu. 
    
    Nejlépe si odpočine v sauně nebo když se kolébá na vlnách. Je fanynkou rozhleden, protože miluje výhledy do krajiny.
    
    Má dvě dcery.
    `,
  },
  {
    number: 2,
    titles: 'Ing. et Ing.',
    name: 'Lucie Šimečková',
    photo: P02,
    tags: [],
    perex:
      'Zkušenosti z nadnárodní IT korporace přetavila ve vlastní podnikání. Pomáhá začínajícím startupům s marketingem, založila úspěšný lokální profil @ziju_v_beroune a stála i u zrodu spolku Berounský rybníček.',
    fullText: `Po získání inženýrských titulů na Vysoké škole ekonomické a České zemědělské univerzitě v oborech hospodářská politika a podnikání a administrativa začala pracovat v marketingu v IT. 
    
    Během studií strávila tři měsíce na stáži na Generálním konzulátu České republiky v Los Angeles.

    Zkušenosti z nadnárodní IT korporace a technologického startupu později přetavila ve vlastní podnikání. Dnes poskytuje marketingové služby především začínajícím technologickým startupům.

    Do Berouna se přistěhovala před několika lety. Když se jí narodil syn, začala s kočárkem chodit po městě a chtěla se o svém novém domově dozvědět víc. Čím víc Beroun poznávala, tím víc si všímala nejen jeho historie a zajímavostí, ale také toho, co by se ve městě dalo dělat lépe. Během rodičovské proto založila lokální instagramový profil @ziju_v_beroune a později spoluzaložila sousedský spolek Berounský rybníček.

    Nejlépe si vyčistí hlavu při pohybu. Ráda si jde zaběhat, zacvičí si jógu nebo sedne na kolo a projede se kolem Berounky. A když zrovna nesportuje, baví ji dělat něco rukama. Práci u počítače ráda vyvažuje něčím, na co si může sáhnout. Ráda peče sladké, snaží se zahradničit, a baví ji nejrůznější kreativní pokuty, u kterých nejde o dokonalý výsledek, ale hlavně o radost ze samotného procesu.`,
  },
  {
    number: 3,
    titles: '',
    name: 'Václav Kovář',
    photo: P03,
    tags: [],
    perex:
      'Odborník na zapojování veřejnosti do rozhodování. Šest let vedl spolek Berounská zeleň. Do komunální politiky přináší téma město pro lidi – kvalitní veřejná prostranství a otevřenou radnici.',
    fullText: `Po studiích novinařiny pracoval v kultuře. Věnoval se produkci a vedení projektových týmů. 
    
    Profesní život ho dovedl až k rozvoji komunitního života a zapojování veřejnosti do rozhodovacích procesů (participaci). Tomu se začal naplno věnovat před dvěma lety jako designér participativních procesů, lektor a facilitátor. 
    
    Od malička má blízko k přírodě, což mohl naplno zužitkovat při vedení dobrovolnického spolku Berounská zeleň. 
    
    Deset let žije se ženou a dvěma dětmi v Berouně a stejně dlouho se zabývá současnými přístupy k navrhování a správě veřejného prostoru. Věří, že pouze otevřená radnice může přinést důvěru a spokojenost lidí. 
    
    Město vnímá jako živý organismus, ve kterém se setkává řada důležitých funkcí. Úroveň veřejného prostoru určuje jak se ve městě cítíme a kolik času v něm chceme trávit. Jeho rozvoj je proto potřeba připravovat s ohledem na potřeby všech.`,
  },
  {
    number: 4,
    titles: 'Mgr.',
    name: 'Eva Kotrčová',
    photo: P04,
    tags: [],
    badge: 'současná zastupitelka',
    perex:
      'Pedagožka s dlouholetou praxí v běžných školách i ve speciálním vzdělávání. Používá moderní inovativní metody, které dětem pomáhají učit se s radostí a bez stresu.',
    fullText: `Absolventka Pedagogické fakulty Univerzity Karlovy, obor učitelství na prvním stupni. Dále vystudovala speciální pedagogiku, logopedii a psychopedii.
    
                Je maminkou tří dětí. Jeji významnou zálibou je pěvecký sbor Gabriel, který přináší kulturu těm, kteří si za ní sami nedojdou především ze zdravotních důvodů. Je předsedkyně spolku Ratinka, který se zabývá ochranou přírody. 

                Během své praxe působila na různých typech škol v státním i soukromém sektoru. Má zkušenosti s vedením školy, působila jako zástupce ředitele. Dále má zkušenosti s prezentací inovativních metod ve výuce a s lektorováním učitelů v oblasti formativního hodnocení, využití IT ve výuce a v oblasti rozvoje logického myšlení žáků.`,
  },
  {
    number: 5,
    titles: '',
    name: 'Jan Valachovič',
    photo: P05,
    tags: [],
    perex:
      'Finanční expert se zaměřením na efektivní hospodaření a odpovědný rozpočet. Jako předseda florbalového oddílu navíc dlouhodobě vede děti k aktivnímu pohybu.',
    fullText: `Přes dvacet let pracuje jako finanční poradce, dnes vede jako regionální ředitel vlastní tým. Zhruba stejně dlouho hraje florbal - v roce 2019 s kolegy založil oddíl Florbal pro Beroun, který vede a který se věnuje hlavně dětem a mládeži.
      
      Na zahradě pěstuje vinnou révu a dělá z ní víno a burčák. Relaxuje ve své dílně na zpracovávání kovů a také sbírá škodovky 110R, k jejichž restaurování se dostane, až bude čas — což zatím není.

      V Berouně mnohokrát pomáhal v krizích jako dobrovolník: při povodních i na začátku pandemie, kdy využil chemického vzdělání a namíchal desítky litrů dezinfekce zdarma pro místní ordinace.

      Rozpočet města bere jako nástroj k rozvoji. Chce, aby každá investice dávala smysl i za deset let.
      
      Je otcem dvou skoro dospělých dcer. `,
  },
  {
    number: 6,
    titles: 'Ing., DiS.',
    name: 'Kristýna Kymličková',
    photo: P06,
    tags: [],
    perex:
      'Stavební inženýrka s praxí v řízení rekonstrukcí. Dlouhodobě se věnuje správě bytového fondu a usiluje o modernizaci bytové infrastruktury a zkvalitnění veřejného prostoru.',
    fullText: `Berounská rodačka a stavební inženýrka. V posledních letech se aktivně zapojuje do dění ve městě. Jako předsedkyně SVJ na Velkém sídlišti koordinovala kompletní revitalizaci bytového domu a dlouhodobě se zajímá o kvalitu veřejného prostoru.

        Má dvě malé děti a blízký vztah ke zvířatům – řadu let se věnovala péči o nalezené nebo nechtěné králíky. 

        Baví ji proměňovat interiéry a rekonstruovat staré budovy s důrazem na zachování jejich charakteru a historické hodnoty. 

        Ve volném čase se ráda účastní vědomostních soutěží, především Hospodského kvízu.
        
        „Vzpomínám si, jak ještě během 90. let byl Beroun malé šedé městečko s fungující cementárnou u Litavky. Od té doby prošel ohromnou proměnou, přibyla spousta obyvatel a město vyrostlo. Sama se profesně pohybuji kolem staveb, jejich správy a rekonstrukcí, a čím dál víc si uvědomuji, jak důležité je nejen stavět nové, ale dobře se starat o to, co už máme.“`,
  },
  {
    number: 7,
    titles: 'PhDr.',
    name: 'Tomáš Procházka',
    photo: P07,
    tags: [],
    perex:
      'Zkušený novinář, vedoucí zahraniční redakce Hospodářských novin. Zastánce živé občanské společnosti a spolehlivé veřejné dopravy.',
    fullText: `V médiích začal pracovat už během studia na gymnáziu. Řadu let působil v regionálním Deníku, kde ho zajímal život v městech a obcích. Nyní vede zahraniční redakci Hospodářských novin a magazín Víkend HN. 
    
    Otec tří synů je fanouškem veřejné dopravy. Vidí, kde jsou bolavá místa, která stojí za to vyléčit. 
    
    Věří, že kvalitní vzdělání a odolná společnost mohou věcmi pohnout víc, než se může na první pohled zdát. Pravidelně upozorňuje na problémy sídliště a pomáhá Na Paloučku v místním parku.

    Ve svém živlu je mezi lidmi - mimo jiné na berounském Hospodském kvízu. A nebo ve chvíli, kdy plánuje ať už krátký výlet autem, nebo i delší výpravu “netradičním” způsobem. Letos takhle třeba vyrazil z Berouna vlakem za pár korun lyžovat na různá místa v Itálii.
    
    “Na našem městě mám rád mimo jiné to, že po každodenním dojíždění můžu na chvíli vypnout u řeky. A že tu potkávám spoustu podobně naladěných lidí, kteří mají chuť věcmi pohnout. Podobně jako média dnes mají uzávěrku de facto každou minutu, i pro město platí, že se pořád něco děje a je potřeba to řešit.”`,
  },
  {
    number: 8,
    titles: 'Mgr., Ph.D.',
    name: 'Jakub Novák',
    photo: P08,
    tags: [],
    perex:
      'Biolog, bývalý novinář, dnes pracuje ve zdravotnictví. Věří, že dobré město se pozná podle toho, jak se v něm žije těm, kteří to nemají nejlehčí.',
    fullText: `Královédvorský rodák a doktor, který neléčí lidi, ale rozumí řadě věcí a problémů, které nejsou na první pohled vidět. Do Berouna ho s rodinou vyhnaly pražské nájmy, kterým je za to zpětně velmi vděčný. Beroun se mu stal domovem a rád by se zasadil o to, aby se odtud ani on, ani nikdo jiný, stěhovat nemusel a ani nechtěl. A aby tu každý našel co potřebuje - své místo, důstojnost i péči.

Miluje vůni lesa, tanec, berounskou knihovnu, experimenty všeho druhu, "dad's jokes", cestu podél Loděnice ke Krobiánovi, elektronickou hudbu a hlavně svého syna.

Všechnu moc imaginaci a společně vytáhneme i tu největší řepu (nebo dotáhneme obchvat)!`,
  },
  {
    number: 9,
    titles: 'Ing., Ph.D.',
    name: 'Adéla Schmiedová',
    photo: P09,
    tags: [],
    perex: 'Ekonomka a ředitelka MAS Jihozápad. Přes dvacet let pomáhá rozvíjet obce na Berounsku. Odbornice na dotace a regionální rozvoj. Chce, aby radnice naslouchala i opomíjeným částem Berouna.',
    fullText: `Vystudovala ekonomii na České zemědělské univerzitě a tamtéž si přidala postgraduál v oboru regionálního a sociálního rozvoje. 
    
    Venkovanka tělem i duší, která už přes dvacet let jako ředitelka obecně prospěšné společnosti MAS Jihozápad pomáhá rozvíjet obce mezi Berounem a Prahou - dotačním poradenstvím i podporou místních spolků, škol a podnikatelů. Málokdo zná zdejší region tak dobře jako ona. 
    
    Narodila se v Hostímě, kde dnes vede osadní výbor a městu vytrvale nabízí pomocnou ruku při rozvoji obce — zatím marně, ale nevzdává to. 

    I díky rodinné historii měla vždy blízko k půdě, takže relaxuje na zahradě i na malém rodinném políčku.
    
    Chce, aby radnice naslouchala i těm částem města, na které se často zapomíná.`,
  },
  {
    number: 10,
    titles: 'Ing.',
    name: 'Martin Veselý',
    photo: P10,
    tags: [],
    badge: 'současný zastupitel',
    perex:
      'Architekt s mezinárodními zkušenostmi. Stál u vzniku spolku Berounská zeleň a dlouhodobě se zasazuje o kvalitní územní rozvoj a ochranu městské zeleně.',
    fullText: `Absolvent Fakulty stavební ČVUT, obor pozemní stavby a architektura. Od roku 2006 pracuje ve vlastním ateliéru jako projektant a autor staveb — prošel si projekty v Česku i v zahraničí. 
    
    Je jedním ze zakladatelů iniciativy Beroun sobě a spolku Berounská zeleň.

    Architektura ho naučila dívat se na město očima toho, kdo jím zrovna prochází. Vstřícný veřejný prostor podle něj není luxus ani ozdoba — je to místo, kde se dá pohodlně projít s kočárkem, kde je v létě stín a kde se chodec, kolo a auto nemusí prát o stejný metr. Takový prostor nevznikne náhodou, ale z poctivě připraveného projektu.
    
    Sám je v pohybu pořád — běhá a sportuje po celý rok. Právě běhání ho naučilo, jak moc město rozhoduje o tom, jestli se v něm člověk pohybuje rád: kde se dá bezpečně přeběhnout, kde chybí kus chodníku, kde se musí zbytečně zajít.
    
    „Projektuju stavby dvacet let a naučilo mě to jednu věc: když se něco nehne, skoro nikdy to není proto, že by to nešlo. Jen někdo nechce hledat cestu. Nehledat důvody, hledat způsoby - a ptát se na to, na co se ostatní ptát nechtějí. To mě baví."`,
  },
  {
    number: 11,
    titles: '',
    name: 'Veronika Pohlová',
    photo: P11,
    tags: [],
    perex:
      '',
    shortText:
      'Studuje pedagogiku s výtvarnou výchovou a jako rodilá Berouňačka chce, aby tady mladí lidé měli důvod zůstat. Sama sportuje i maluje, takže z vlastní zkušenosti ví, že v Berouně chybí dostupné sportovní zázemí i místa, kde se začínající tvůrci můžou ukázat.',
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
    shortText: 'Student obchodní akademie a fotbalista Cembritu. Ze hřiště ví, že se výsledek nedostaví sám od sebe a odkládáním se nic nevyřeší. A věří, že Beroun může být ještě příjemnější - když se pustíme do věcí, které tu chybí.',
    fullText: LOREM_FULL,
  },
  {
    number: 13,
    titles: 'M.A.',
    name: 'Matyáš Vejskal',
    photo: P13,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: 'Copywriter a ex-digitální nomád. Po té, co procestoval celý svět, zakotvil v Berouně, protože nikde nenašel k životu město s krásnější přírodou. Kandiduje, protože už nechce zavírat oči před tím, jak město přešlapuje na místě.',
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
      `Manažerka ve zdravotnictví a vysokoškolská lektorka. Učí lékaře a sestry, jak zvládat náročné situace s respektem a porozuměním.
      Odjakživa ji zajímá umění, architektura a design, a proto by ráda v Berouně pozvedla kvalitu veřejného prostoru.`,
    fullText: `Manažerka be zdravotnictví s mezinárodní zkušeností a vysokoškolská lektorka. Přes dvacet let učí lékaře a sestry, jak zvládat náročné situace s respektem, porozuměním a spoluprací.
Deset let žila v Curychu, ale vrátila se domů do Berouna. Odjakživa ji přitahuje umění, architektura a design, a tak se doma zapojuje do projektů, které oživují veřejný prostor a sousedské vztahy. Spoluzaložila spolek Berounský rybníček.`,
  },
  {
    number: 15,
    titles: 'DiS.',
    name: 'Vendula Stojovská',
    photo: P15,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: 'Zdravotnická záchranářka a lektorka první pomoci. Vidí město ve chvílích, kdy jde o čas a dostupnost - kde se protáhne sanitka, kam se dá dojet včas. Učí lidi, aby v takové chvíli věděli, co dělat. A od města chce totéž: aby v Berouně věci fungovaly ve chvíli, kdy je člověk opravdu potřebuje.',
    fullText: LOREM_FULL,
  },
  {
    number: 16,
    titles: '',
    name: 'Albert Mühlfeld',
    photo: P16,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: 'Zajímají ho jazyky, ekonomie a mezinárodní vztahy. Rád zjišťuje, jak podobně velká města řeší věci, se kterými se tady léta nehne. Do Berouna by proto rád nosil nápady, které se jinde osvědčily. Ne kopírovat, ale nebát se zeptat, jestli by to nešlo i u nás.',
    fullText: LOREM_FULL,
  },
  {
    number: 17,
    titles: '',
    name: 'Marie Svobodová',
    photo: P17,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: 'Dlouholetá pedagožka na berounské obchodní akademii, dnes v důchodu. Rukama jí prošly stovky berounských studentů. Právě proto ji zajímá, jak se ve městě žije všem: jestli tu mají kam chodit senioři i puberťáci. Chce, aby byl Beroun příjemným místem pro všechny generace.',
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
      'Hostinský a vystudovaný politolog. Z hostímské Hospůdky U Krobiána udělal místo, kam na debaty jezdí špičky české vědy, žurnalistiky i politiky. Vaří z regionálních surovin a drží se poctivého pohostinství. Kulturní akce dělá zadarmo - dobrovolné vstupné posílá na charitu.',
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
    shortText: `Veterinární sestra.
    Po Berouně ji můžete potkat se smečkou bílých psů. Psi a děti tvoří součást její rodiny, se kterou objíždějí sportovní akce, které i pořádá. Kromě toho se psy i pomáhá lidem při canisterapii. Má vždy pozitivní pohled na věc a chuť změnit k lepšímu vše, co se dá.`,
    fullText: LOREM_FULL,
  },
  {
    number: 20,
    titles: '',
    name: 'Bořek Hummel',
    photo: P20,
    tags: ['DOPLNIT'],
    perex: LOREM,
    shortText: 'Majitel autoservisu, který má rád věci udělané pořádně a fér. V dílně to funguje jednoduše: co slíbíš, uděláš, a za svou prací si stojíš. Práce pro město (i v něm) by se tím měla řídit taky: ať je předem jasné, kolik co stojí a do kdy to bude hotové.',
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
      'Překladatel a průvodce po severských zemích. Vede Skandinávský dům a za to od finského prezidenta dostal rytířský Řád finského lva. V Berouně se zapojil do činnosti kulturní komise. Ze severu si přiváží jednoduchou zkušenost: živá kultura rozvíjí sousedské vztahy líp než jakákoli strategie.',
    fullText: `Vystudoval finštinu a klasickou archeologii. Pracuje jako literární a audiovizuální překladatel, turistický průvodce po severských zemích a jazykový lektor. Téměř dvacet let působí v kulturních neziskových organizacích, zejména jako předseda Skandinávského domu. Za to obdržel od finského prezidenta rytířský Řád finského lva. Nový domov našel se ženou před šesti lety v Berouně, kde se ve volném čase zapojil do činnosti kulturní komise. V severských zemích čerpá inspiraci, že dobře fungující živá městská kultura může být skvělou platformou pro setkávání občanů, rozvoj pozitivních vztahů, vznik nových myšlenek i propagaci města.`,
  },
];

/** Prvních 10 – velké medailonky */
export const FeaturedCandidates = Candidates.slice(0, 10);
/** Zbytek (11–21) – malé karty */
export const OtherCandidates = Candidates.slice(10);
