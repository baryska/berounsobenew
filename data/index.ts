import BS from '../public/bara_small.jpg';
import EK from '../public/eva_small.jpg';
import HK from '../public/hanka_small.jpg';
import MV from '../public/martin_small.jpeg';
import AV from '../public/adam_small.jpg';
import JC from '../public/jana_cirkvova.jpg';
import MK from '../public/michal_kovarik.jpg';
import JV from '../public/jana_valachovicova.jpg';
import Roztocil from '../public/vaclav_roztocil.jpg';
import zas17102022 from '../public/zas17-10-2022.jpg';
import volby from '../public/volby.jpg';
import chodnik from '../public/chodnik.png';
import radnice from '../public/radnice.jpg'

export const Profiles = [
  {
    title: "Ing. Martin Veselý",
    profession: "Architekt, projektant",
    photo: MV,
    text: `Absolovent ČVUT Fakulty stavební, obor pozemní stavby a architektura. Od roku 2006 pracuje jako OSVČ ve vlastním ateliéru. 
    Autor projektů a realizace staveb v ČR a zahraničí (Švédsko, USA, Řecko). Je jedním ze zakladatelů spolku Berounská zeleň.`,
    topic: "Územní plán, výstavba",
    email: "martin.vesely@berounsobe.eu",
    nomination: "Komise pro územní plán - ❌ nezvolen"
   },
   {
    title: "Mgr. Hana Kašparová, MBA",
    profession: "Ekonomka",
    photo: HK,
    text: `Vystudovala ekonomii na Univerzitě Karlově a MBA na Ecole Superiere do Commerce v Rennes v Bretani. V letech 1997-2021 pracovala jako ekonom a manažer 
    ve velké mezinárodní společnosti v několika zemích, z toho posledních 10 let působila jako finanční ředitelka výrobních závodů společností v Rakovníku a v Pokrov (UA). 
    Žila v Londýně, Rennes, Bruselu a Budapešti. V současné době působí jako konzultant v oblasti organizace, řízení a zlepšování procesů ve firmách a věnuje se také aromaterapii.`,
    topic: "Finance, rozpočet",
    email: "hana.kasparova@berounsobe.eu",
    nomination:  "Finanční výbor - ❌ nezvolena"
  },
  {
    title: "Mgr. Adam Voldán",
    profession: "Učitel, pojistný matematik",
    photo: AV,
    text: `Absolvent Matematicko-fyzikální fakulty UK v Praze, obor teorie pravděpodobnosti. Jako pojistný matematik  přes 10 let pracoval 
    pro poradenskou společnost Deloitte, kde se podílel na řadě mezinárodních projektů v oblasti akvizic a fúzí pojišťoven, 
    tvorbě zátěžových testů, oceňování rizik z hlediska penzí, životního i neživotního pojištění. Nyní pracuje jako učitel matematiky a informatiky. 
    Je jedním ze zakladatelů spolku Berounská zeleň.`,
    topic: "Životní prostředí, městská zeleň",
    email: "adam.voldan@berounsobe.eu",
    nomination:  "Komise životního prostředí - ❌ nezvolen"
  },
  {
    title: "Mgr. Barbora Skálová, Ph.D.",
    profession: "Softwarová vývojářka",
    photo: BS,
    text: `Vystudovala finštinu a moderní dějiny, ale živí se jako programátorka. Dlouhodobě se zajímá o moderní trendy a inovace ve vzdělávání, 
    inspiraci hledá zejména ve finském základním školství, 
    s nímž měla možnost se podrobně seznámit při svých studijních pobytech ve Finsku. Navštěvuje odborné konference a angažuje se 
    v aktivitách vzdělávacích inciativ, jako je Eduzměna nebo EDUIn. 
    Jako lektorka programování pro děti od 5 do 15 let aktivně propaguje moderní vzdělávání v oblasti IT a digitálních dovedností.
    Je předsedkyní osadního výboru Beroun-Hostím.`,
    topic: "Školství, digitalizace, transparentnost radnice",
    email: "barbora.skalova@berounsobe.eu",
    nomination:  "Komise školská - ❌ nezvolena"
  },
  {
    title: "Mgr. Eva Kotrčová",
    profession: "Učitelka, speciální pedagožka",
    photo: EK,
    text: `Absolventka Pedagogické fakulty Univerzity Karlovy, obor učitelství na prvním stupni. Dále vystudovala speciální pedagogiku, logopedii a psychopedii.
     Během své praxe působila na různých typech škol v státním i soukromém sektoru. 
    Má zkušenosti s vedením školy, působila jako zástupce ředitele, dále s prezentací inovativních metod ve výuce 
    a s lektorováním učitelů v oblasti formativního hodnocení, využití IT ve výuce a v oblasti rozvoje logického myšlení žáků.`,
    topic: "Školství",
    email: "eva.kotrcova@berounsobe.eu",
    nomination:  "Komise školská - ✅ zvolena"
  },
  {
    title: "Václav Roztočil",
    profession: "Podnikatel, hokejový trenér",
    photo: Roztocil,
    text: `Berounský podnikatel, projektant a dodavatel městských mobiliářů. Celý život se věnuje sportu a již 28 let je provozovatelem
    bruslařské školy a trenérem ledního hokeje žen HC Berounské lvice. V roce 2003 obdržel zvláštní ocenění za dlouhodobý přínos ženskému hokeji. 
    Je předsedou Kontrolního výboru zastupitelstva města Beroun.`,
    topic: "Sport, kontrolní výbor (předseda)",
    email: "vaclav.roztocil@berounsobe.eu",
    nomination:  "Komise dopravní a komise pro sport - <br>❌ nezvolen, Kontrolní výbor - ✅ zvolen"
  },
]

export const Helpers = [
  {
    title: "Jana Církvová",
    profession: "Ekonomka",
    photo: JC,
    text: `Po absolvování berounského gymnázia vystudovala Vyšší odbornou školu specializační se zaměřením na cestovní ruch. 
    Pět let pracovala v centrále cestovní kanceláře. Od roku 1999 je zaměstnána ve stavební firmě. Zde se věnovala nejprve kontrolingu, 
    v současné době zde pracuje jako ekonomka. Aktivně se věnuje pořádání cyklistických závodů (například BMX Nižbor, RKCA Plzeň). 
    Je předsedkyní školské rady na základní škole Beroun-Závodí.`,
    topic: "Finance, cestovní ruch, školství",
    email: "jana.cirkvova@berounsobe.eu",
    nomination: "Komise pro cestovní ruch - ❌ nezvolena <br> Komise pro likvidaci majetku - ❌ nezvolena"
  },
  {
    title: "Ing. Michal Kovářík",
    profession: "Projektant, odborný asistent na ČVUT",
    photo: MK,
    text: `Vystudoval pozemní stavitelství na ČVUT v Praze. 10 let pracoval jako projektant, hlavní inženýr projektu a projekt 
    manažer v České republice, jako architekt působil 4 roky v Číně. Podílel se na návrzích bytových a kancelářských budov, 
    obchodních center a hotelů pro investory ze tří kontinentů. Od roku 2015 pracuje jako odborný asistent na Katedře technologie 
    staveb FSv ČVUT v Praze, kde vyučuje a vede výzkum v oblasti digitálních a robotických technologií, Stavebnictví 4.0 a trvale 
    udržitelných staveb. V současné době dokončuje doktorské studium zaměřené na 3D tisk z betonu.`,
    topic: "Územní plán, výstavba",
    email: "michal.kovarik@berounsobe.eu",
    nomination: "Komise výstavby - ❌ nezvolen"
  },
  {
    title: "Bc. Jana Valachovičová",
    profession: "Manažerka ve zdravotnictví",
    photo: JV,
    text: `Vystudovala ošetřovatelství a psychologii na Lékařské fakultě UK v Hradci Králové. Přes dvacet let se věnuje komunikaci 
    s pacienty, převážně s chronickým onemocněním. V letech 2011-2020 žila ve švýcarském Curychu, kde pracovala jako mentor a školitel 
    komunikace pro lékaře a zdravotní sestry na globální úrovni, školila ve více než 50 zemích světa. V roce 2014 se podílela na 
    zavedení telemedicíny v nefrologii. Po celou dobu se věnuje práci s pacientskými organizacemi, pro které pořádala rekondiční pobyty 
    jak v ČR tak v Evropě. Po návratu do Berouna v roce 2020 studuje MBA se zaměřením na řízení ve zdravotnictví. `,
    topic: "Vztahy s veřejností, zdravotnictví, veřejný prostor",
    email: "jana.valach@berounsobe.eu",
    nomination: "Komise zdravotnictví a sociálních věcí - ❌ nezvolena"
   },
]

export const Experts = [
  {
    title: "Aleš Frýdl",
    profession: "Policista",
    photo: BS,
    text: `Vystudoval Střední školu veřejnoprávní Praha v oboru Veřejnoprávní ochrana. Po ukončení ZVS působil 8 let u vojenské police 
    na pozici policejní inspektor. Poté působil 10 let jako strážník u Městské policie Beroun. Od roku 2019 vykonává službu v hodnosti 
    vrchního praporčíka na obvodním ředitelství MP pro Prahu 1, se zařazením do linkové Hlídky rychlé reakce. Za dobu svého působení u 
    policejních složek se i díky zalosti bojových umění podílel na dopadení několika pachatelů závažných trestných činů, několika 
    celostátně hledaných osob, sprejerů a zajištění odcizených vozidel.`,
    topic: "Bezpečnost",
    nomination: "Komise pro prevenci kriminality - ❓ volba neproběhla"
  },
  {
  title: "Mgr. Jitka Jindřišková",
  profession: "Literární překladatelka, jazyková redaktorka a historička",
  photo: MV,
  text: `Působí v Masarykově ústavu a Archivu Akademie věd ČR a kulturním 
  institutu Skandinávský dům. Má dlouholeté zkušenosti s organizací kulturní akcí a jejich grantovým managementem na lokální, 
  národní i mezinárodní úrovni. Každoročně organizuje festival severské kultury Dny Severu a pro velvyslanectví severských zemí 
  v ČR zajišťuje prezentaci severských literatur na veletrhu Svět knihy Praha. Coby předsedkyně poroty ceny Zlatá stuha 
  se podílela na výběru nejlepších překladů dětské literatury.`,
  topic: "Kultura",
  nomination: "Komise pro kulturu a kulturní dotace - <br>❌ nezvolena"
  },
  {
    title: "Jan Kobylák",
    profession: "Ředitel realizací staveb",
    photo: MV,
    text: `Po Střední průmyslové škole stavební, obor pozemní stavby, složil autorizační zkoušky jako Autorizovaný Stavitel. 
    Pracoval jako mistr na stavbě, následně 5 let jako projektant a poté jako stavební dozor. Od roku 1994 spolumajitel 
    inženýrské stavební formy JANS s.r.o. která zaměstnávala cca 25 inženýrů a stavebních techniků. Zde působil 
    jako ředitel realizací staveb, vedl stavební dozory, ISO, bezpečnost práce, stavební audity pro naše i zahraniční banky. 
    Mimo jiné se věnoval organizaci výběrových řízení na Zhotovitele staveb s posuzováním Smluv o Dílo.`,
    topic: "Územní plán, výstavba",
    nomination: "Komise výstavby - ❌ nezvolen"
   },
   {
    title: "Kateřina Nepustilová",
    profession: "Ochranářka a ekoložka",
    photo: BS,
    text: `Je iniciátorkou a realizátorkou projektů na ochranu biodiverzity řady lokalit v Berouně a jeho blízkém okolí. 
    Spolupracuje s organizacemi jako ČSOP Jaro Jaroměř, Pražská pastvina a institucemi AOPK, CHKO Český Kras, Obec Tetín. 
    Fascinace přirozenými přírodními procesy ji přivedla přes ochranářskou práci až k současnému studiu oboru aplikovaná 
    ekologie na České zemědělské univerzitě.`,
    topic: "Životní prostředí, ekologie a městská zeleň",
    nomination: "Komise životního prostředí - ❌ nezvolena"
  },
  {
    title: "Václav Pos",
    profession: "Autorizovaný projektant a stavební technik, nyní v důchodu",
    photo: AV,
    text: `Několik let místopředseda hospodářské komory v Berouně, 
    člen představenstva VZP, člen komise pro územní plánování Beroun. Pracoval jako projektant, později vedl vlastí projektový atelier. 
    Mezi jeho realizace patří například půdní vestavba pokojů lékařů v nemocnici Beroun, domov pro seniory v Hořovicích, rekonstrukce 
    hlavního sídla VZP, několik realizací v průmyslové zóně Žebrák, projekt mateřské školky v Rychnově n K., stavební dozory, vedení 
    rozpočtů 50 mil Kč, zajištění dokumentací, stavebních povolení.`,
    topic: "Územní plán, výstavba",
    nomination: "Komise pro územní plán - ❌ nezvolen"
  },
  {
    title: "Ing. Michaela Svatošová",
    profession: "Ekonomka, účetní",
    photo: BS,
    text: `Po absolvování SEŠ, studovala VŠE v Praze, kdy již při studiu pracovala jako účetní. Po ukončení VŠE v roce 1999 začala pracovat 
    jako metodik účetnictví v mezinárodní poradenské firmě, v rámci které absolvovala roční stáž v USA, kde se opět věnovala oboru účetnictví. 
    V roce 2009 založila v Praze vlastní účetní kancelář a udělala si zkoušky daňového poradce. V současné době již osmým rokem žije se svou 
    rodinou v Berouně a stále provozuje vlastní účetní firmu, v rámci které s ostatními zaměstnanci poskytují poradenské služby více než 120 
    klientům.`,
    topic: "Finance",
    nomination: "Finanční výbor - ❌ nezvolena"
  },
  {
    title: "Mgr. Michal Švec",
    profession: "Literární a audiovizuální překladatel z finštiny a předseda kulturního institutu Skandinávský dům",
    photo: MV,
    text: `Je členem výkonných výborů profesních spolků Obec překladatelů a Překladatelé Severu, aktuálně zasedá v grantové komisi 
    Ministerstva kultury ČR. Moderuje literární akce s českými i zahraničními hosty, přednáší a vyučuje na českých univerzitách 
    i v zahraničí. Za svou překladatelskou činnost získal několik cen (Prémie Tomáš Hrácha, tvůrčí ocenění v rámci Ceny Josefa Jungmanna) 
    a v roce 2017 obdržel od finského prezidenta rytířský Řád finského lva. Je členem kulturní komise.`,
    topic: "Kultura",
    nomination: "Komise pro kulturu a kulturní dotace - ✅ zvolen"
   },
   {
    title: "Ing. Vladimír Toman",
    profession: "Projektant, manažer ve stavebnictví",
    photo: BS,
    text: `Po absolvování gymnázia vystudoval Stavební fakultu ČVUT v Praze, obor pozemní stavby. Ze své dvacetileté profesní praxe 
    se posledních 15 let zabývá na straně investora kompletním řízením stavebních projektů ve finančním objemu zpravidla nad 250 mil Kč. 
    Má zkušenosti s jednáním se státními orgány, obcemi, stavebními dodavateli, sestavováním a hodnocením stavebních rozpočtů a kontrolou 
    provedených prací.`,
    topic: "Územní plán, výstavba",
    nomination: "Komise výstavby - ✅ zvolen"
  },
  {
    title: "Jan Valachovič",
    profession: "Finanční poradce, regionální ředitel, florbalový funkcionář",
    photo: BS,
    text: `Po absolvování Gymnázia v Berouně studoval VŠCHT. Více než 20 let pracuje jako finanční poradce, vede tým spolupracovníků 
    jako regionální ředitel. Přibližně stejnou dobu se věnuje florbalu, posledních 7 let jako registrovaný hráč, 5 let jako funkcionář. 
    V roce 2019 s kolegy založil oddíl Florbal pro Beroun, jehož je předsedou. Hlavním zaměřením oddílu je práce s dětmi a mládeží. 
    Aktivně se zajímá o život ve městě, angažuje se jako dobrovolník.`,
    topic: "Sport, finance",
    nomination: "Komise sport a sportovní dotace - ❌ nezvolen"
  },
] 

export const Posts = [
  {
    title: 'Proč nás vedení města nechce ani v odborných komisích?',
    theme: 'Rada & zastupitelstvo',
    key: 1,
    slug: 'proc-nas-vedeni-mesta-nechce-ani-v-odbornych-komisich',
    date: '29.11. 2022',
    image: radnice,
    paragraphs: [
      `Na ustavujícím zastupitelstvu tohoto volebního období jsme navrhli vznik několika nových výborů zabývajících se oblastmi, které město řeší a trápí 
      – konkrétně bezpečností, územním plánem, školstvím a dopravou. Chtěli jsme mít možnost se aktivně podílet na jejich zlepšování. Koalice to považovala za zbytečné, 
      neboť existují odborné komise, do nichž můžeme nominovat své zástupce. `,
      `Po pár týdnech od ustavujícího zastupitelstva je však zřejmé, že staronové vedení se v rozporu se svými deklaracemi o hledání široké podpory 
      napříč celým zastupitelstvem rozhodlo, že s opozicí spolupracovat nebude vůbec.  Opozici nedalo ani jedno místo ve finančním výboru a dokonce nemáme ani většinu 
      ve výboru kontrolním. Zdá se, že až na několik málo výjimek nechce koalice ani naše zástupce v odborných komisích.  
      Do nich jsme navrhli skutečné odborníky, s jejichž expertízou se můžete seznámit <a href="/experti" className="anchor">zde</a>. 
      Koalice však i z odborných komisí dělá politikum – například do 
      komise pro územní plánování byl zvolen radní David Minařík, který je profesí komisařem v autoškole.`,
      `Ještě zbývá dovolit několik posledních komisí – zůstanou i ty bez zástupců vítěze voleb?`,
      `Zde jsou naši nominanti do odborných komisí:`,
      `<strong>Komise pro územní plán</strong>: Martin Veselý – nevolen ❌, Václav Pos – nezvolen ❌`,
      `<strong>Komise školská</strong>: Eva Kotrčová – zvolena ✅, Barbora Skálová – nezvolena ❌`,
      `<strong>Komise dopravy</strong>: Václav Roztočil – nezvolen ❌`,
      `<strong>Komise životního prostředí</strong>: Adam Voldán – nezvolen ❌, Kateřina Nepustilová – nezvolena ❌`,
      `<strong>Komise pro sport a sportovní dotace</strong>: Václav Roztočil – nezvolen ❌, Jan Valachovič – nezvolen ❌, Jan Piskáček – nezvolen ❌`,
      `<strong>Komise pro kulturu a kulturní dotace</strong>: Michal Švec – zvolen ✅, Jitka Jindřišková – nezvolena ❌`,
      `<strong>Komise zdravotnictví a sociálních věcí</strong>: Jana Valachovičová – nezvolena ❌`,
      `<strong>Komise pro cestovní ruch</strong>: Jana Církvová – nezvolena ❌`,
      `<strong>Komise výstavby</strong>: Martin Veselý - nezvolen ❌, Vladimír Toman – zvolen ✅, Michal Kovářík - nezvolen ❌, Jan Kobylák - nezvolen ❌`,
      `<strong>Komise pro prevenci kriminality</strong>: Aleš Frýdl ❓`,
    ]
  },
  {
    title: 'Provázek už nestačí',
    theme: 'Urbanismus',
    key: 3,
    slug: 'provazek-uz-nestaci',
    date: '16.11. 2022',
    image: chodnik,
    paragraphs: [
      `V poslední době se opravuje velké množství berounských ulic. Je to jistě potěšující zpráva, že vedení města plní svou funkci správce a opravuje veřejnou infrastrukturu. 
      Bohužel ale nepřináší žádnou novou přidanou hodnotu - chybí kvalitnější zeleň nebo třeba možnost osadit v ulici nové optické sítě. Na základě podnětů od občanů jsme se 
      podívali podrobněji na opravy některých ulic a zjistili jsme, že opravy chodníků probíhají zcela na libovůli stavební firmy:`,
      `❌ Město nemá jednotný manuál na to, jak by měla opravená komunikace vypadat.`,
      `❌ Stavba neprobíhá na základě projektové dokumentace, takže stavební dělníci provádějí opravu dle vlastního uvážení.`,
      `❌ Jelikož neprobíhá stavební dozor, chyby jsou zjištěny až při předávce díla (a často až na upozornění lidí, kteří v okolí bydlí) a stavba se pak musí reklamovat a složitě předělávat.`,
      `Ulice jako veřejný prostor musí být kvalitně spravovány a rozvíjeny. Nestačí jen zadávat opravy bez jakéhokoliv konceptu, jednotného vizuálu a představy, jak má celá síť ulic ve městě vypadat a čemu má sloužit. 
      Řada měst má již svůj vizuální manuál veřejných prostranství. Bude ho mít někdy i Beroun?`
    ]
  },
  {
    title: 'Jak probíhalo ustavující zastupitelstvo',
    theme: 'Rada & zastupitelstvo',
    key: 1,
    slug: 'jak-probihalo-ustavujici-zastupitelstvo',
    date: '20.10. 2022',
    image: zas17102022,
    paragraphs: [
      `V pondělí 17.10. 2022 proběhlo ustavující zasedání zastupitelstva.
      S radostí jsme zjistili, že jsme se tam s řadou z vás setkali. Děkujeme za přízeň a podporu. Přijďte i příště! 😊 `,
      `Sami jsme byli pozitivně naladěni a připraveni na konstruktivní jednání. Přiznejme si, že i plni očekávání, co a jak se bude dít. Jak víte, pro některé z nás to bylo poprvé.
      Atmosféra byla od začátku velmi napjatá a zůstala taková až do úplného konce. Došlo na vypínání mikrofonu opozičnímu zastupiteli, vulgární komentáře na omylem zapnutý mikrofon a další incidenty, které dle našeho názoru nejsou důstojné žádného zastupitelstva, natož toho ustavujícího. Nehrála se státní hymna, v sále nebyly státní symboly.`,
      `Staronová koalice do svého čela zvolila starostku Soňu Chalupovou (ODS) a místostarosty Michala Mišinu (ANO a Nezávislí kandidáti) a Dušana Tomča (Nezávislí Berouňáci). Dalším radním byl zvolen David Minařík (ODS), náhradník za zvoleného Petra Bureše, který se svého mandátu vzdal. Dále jsou v radě Eva Chlumská (NB), Olga Chocová (NB) a Irena Mastná (ANO).`,
      `Jako opozice jsme předložili několik návrhů, které byly nekompromisně všechny přehlasovány:`,
      `👉 Se Společně pro Beroun jsme navrhli vznik nových výborů. Konkrétně pro bezpečnost, územní plán, školství a dopravu. Tato témata patří mezi nejpalčivější problémy Berouna a je potřeba na nich usilovně pracovat. Výbory se na rozdíl od komisí zodpovídají celému zastupitelstvu, nikoliv jen radě města. Výstupy se pak řeší na plénu. Chceme se na této práci aktivně podílet z opozice. Protože závěry komisí v posledních letech rada často ignorovala, chceme větší otevřenost a kontrolu napříč celým zastupitelstvem. Koalice tyto návrhy nepřijala, hlasovala proti s odůvodněním, že nemá připravené kandidáty. Tyto návrhy tedy předložíme znovu.`,
      `👉 Koalice v rozporu se zažitými pravidly a dosavadními zvyklostmi nedala opozici ani jedno místo ve finančním výboru, který je zodpovědný za přípravu městského rozpočtu. My jsme navrhli Hanu Kašparovou, která má dlouholeté zkušenosti jako finanční ředitelka nadnárodní firmy. Hanka se na jednání představila a shrnula své vzdělání, zkušenosti a předpoklady. Přesto koalice ani takto vysoce kvalifikovanou kandidátku “neidentifikovala jako odbornici na finance” a volbou neprošla.`,
      `👉 V kontrolním výboru koalice hlasovala jen pro dva kandidáty opozice. To znamená, že v kontrolním orgánu města, který je tradičně doménou opozice, nám koalice nenechala většinu. Před našimi kandidáty dali přednost kandidátovi KSČM, která vůbec není v zastupitelstvu.`,
      `👉 Pro členy odborných komisí, kteří nejsou zastupiteli města a pro město pracují ve svém volném čase, jsme navrhli měsíční odměny. Věříme, že pokud bychom dali přednost kvalitě na úkor kvantity - některé komise mají až 11 členů a přitom se schází jen jednou ročně - a přitáhli bychom ke službě městu skutečné odborníky, kteří by nemuseli pracovat zdarma, tato investice ve výši cca procenta městského rozpočtu by se městu bohatě vrátila. Návrh byl zamítnut.`,
      `Vzhledem k tomuto průběhu zastupitelstva připravujeme vlastní odborné týmy, které nám budou pomáhat. V dohledné době vás seznámíme s podrobnostmi. Ještě jednou děkujeme za záplavu podpůrných komentářů a nabídky pomoci. Spousta z vás nám chce pomáhat a my si toho opravdu velmi vážíme. Pokud byste se také chtěli podílet na kreativní práci pro město a ještě jste se neodhodlali, neváhejte a napište nám e-mail na info@berounsobe.eu.`
    ]
  },
  {
    title: 'Proč jsme skončili v opozici?',
    theme: 'Volby',
    key: 2,
    slug: 'proc-jsme-skoncili-v-opozici',
    date: '13.10. 2022',
    image: volby,
    paragraphs: [
      `V sobotu 24. září jsme se radovali. Každý čtvrtý volič v Berouně nám dal hlas. A současně jsme ihned brali na vědomí, že stávající koalice má společně 11 křesel.`,
      `Po celou dobu našeho jednání jsme byli transparentní: domluvili jsme se s Petrem Horákem ze Společně pro Beroun a deklarovali jsme, že ze stávající koalice chceme 
      sestavit budoucí obsazení radnice jen s jedním ze tří subjektů. Pro počty to bylo nezbytné a zároveň to byla jediná možnost, jak bychom mohli správně naložit 
      s vašimi hlasy volajícími po změně.`,
      `Nyní již víme, že se nám naše vize „koalice změny“ nepodaří. Nedohodli jsme se. Ctíme závěry jednání s partnery, konkrétní vyjádření necháme za zavřenými dveřmi, 
      základní informace jsou ale následující: ANO a ODS chtějí pokračovat spolu. ODS a Nezávislí Berouňáci navrhli velkou koalici o 19 členech. Nemohli jsme ustoupit 
      a připustit rozšíření o další členy z koalice minulé. Nedovedli jsme a stále si nedovedeme představit, jak by tak velká skupina efektivně vedla město.`,
      `Naše varianta tedy byla funkční “dvanáctka”. 6 křesel BEROUN SOBĚ, 2 pro Společně pro Beroun, 4 Nezávislí Berouňáci. Jak je ale uvedeno výše, Nezávislí Berouňáci 
      se rozhodli zůstat ve stávající koalici.`,
      `Jednali jsme s otevřenými kartami. Martin Veselý byl odhodlán zanechat práce ve své kanceláři architekta a s fungujícím týmem BEROUN SOBĚ v zádech usednout 
      na starostenské křeslo. Zároveň ale víme, že konkrétní osoby mohou být „červeným praporkem“ pro řadu jednajících i zastoupených partnerů. Proto i přes tak závažné 
      rozhodnutí Martin od této myšlenky odstoupil. Nominovali jsme schopnou a zkušenou manažerku, bez historie „kdo s kým komu a proč“ v berounském prostředí, 
      paní Hanu Kašparovou. Počítali jsme s místostarostenskými křesly pro koaliční partnery.
      Celou dobu jsme byli ve spojení i s Lubošem Zálomem a Zuzanou Machovou, protože jsme chtěli mluvit otevřeně opravdu se všemi.`,
      `Ale už je hotovo.
      Mnozí z vás jste již komentovali vyjádření starostky Soni Chalupové o tom, že koalice je domluvená a že se nyní jedná o její širší podpoře. My ale již před volbami 
      deklarovali, že radnice potřebuje změnu. Transparentnost, slušné chování mezi jejími představiteli, respektující chování k občanům, otevřené informace. K podpoře 
      stávajícího stavu a tedy celé koalice se nemůžeme připojit. Celé nás to mrzí. Vyhráli jsme, ale silou vítěze je i to, že respektuje okolnosti, které nemůže ovlivnit, 
      a soustředí se na svoji práci - na to, proč vyhrál.`,
      `Náš tým dál pracuje a informace od nás budete dostávat i nadále. Pracovali jsme i na plánech v opozici a připravujeme pro vás další novinky. Chceme vám být ještě blíž. 
      Děkujeme za vaši podporu a těšíme se na vás! ❤️`
    ]
  },
]

