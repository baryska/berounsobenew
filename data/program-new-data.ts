export interface Persona {
  id: string;
  label: string;
  tags: string[];
}

export interface ProgramPoint {
  id: string;
  heading: string;
  text: string;
  tags: string[];
}

export interface Sekce {
  id: string;
  eyebrow: string;
  color: 'blue' | 'green';
  headline: string;
  perex1: string;
  perex2: string;
  quote: string;
  quoteName: string;
  quoteRole: string;
  quoteAvatar: string | null;
  heroImage: string;
  points: ProgramPoint[];
}

export const PERSONAS: Persona[] = [
  { id: 'dojizdi', label: 'Dojíždím do Prahy',       tags: ['dojizdi','mhd','doprava'] },
  { id: 'byznys',  label: 'Živnostník v centru',      tags: ['byznys','centrum','priorita_byznys'] },
  { id: 'rodic',   label: 'Rodič s malými dětmi',     tags: ['rodic','priorita_skoly'] },
  { id: 'senior',  label: 'Senior',                   tags: ['senior','sluzby','zdravi'] },
];

const SEKCE_DUSTOJNE: Sekce = {
  id: 'dustojne',
  eyebrow: 'BEROUN DŮSTOJNĚ',
  color: 'green',
  headline: 'Sídliště potřebují péči.\nZačneme s parkováním a lepším úklidem.',
  perex1: 'Večerní kroužení ulicemi při hledání parkování, rozmazané bláto po úklidových vozech a pocit, že se na sídlišti trochu zapomíná. Žijeme tam také, takže víme, jak to na berounských sídlištích chodí. Neslíbíme vám zázraky přes noc, ale až příliš dobře známe desítky míst, kde se dá situace citelně zlepšit.',
  perex2: 'Chceme z našich sídlišť vytvořit příjemnější místo pro život. Beroun už dávno není jen noclehárnou, proto budeme poctivě hledat cesty, jak nabídnout lepší parkování, udržet ulice čisté a do horkých letních dní mezi domy nabídnout více stínu.',
  quote: 'Bydlíme se ženou a třemi dětmi kousek od Hvězdy. O nepořádek tak zakopáváme denně a také svým způsobem chápu, že lidé neparkují na trávě naschvál, ale z čiré nouze. Přeji si, abychom jako město nejprve hledali cesty, jak lidem s parkováním pomoct, a až potom vymýšleli, jak vybrat víc na pokutách.',
  quoteName: 'Tomáš Procházka',
  quoteRole: 'Beroun sobě',
  quoteAvatar: '/tomas_small.jpg',
  heroImage: '/parking.jpg',
  points: [
    { id:'parkovani', heading: 'Férový přístup k parkování: nejdřív alternativy, pak pokuty.', text: 'Nechceme lidi trestat za to, že nemají kde zaparkovat. Vymáhat zákazy stání na zeleni dává smysl až ve chvíli, kdy nabídneme řešení. Chceme zkusit model samofinancujících menších garáží na městských pozemcích. Část míst se prodá a zaplatí výstavbu, zbytek město pronajme. Žádná zátěž pro rozpočet, víc míst pro lidi.', tags:['priorita_doprava','sidliste','auto','dojizdi'] },
    { id:'uklid',    heading: 'Důslednější kontrola úklidu a přehledné termíny svozů.', text: 'Vnímáme, že současný úklid má k dokonalosti daleko – ať už jde o nekropení ulic nebo zmatky v termínech. Budeme se víc ptát a tlačit na lepší práci nasmlouvaných firem. Chceme lidem nabídnout jasný online přehled, kdy se v jejich ulici uklízí nebo vyváží odpad.', tags:['priorita_bezpeci','sidliste','senior','doma'] },
    { id:'bezdomovci', heading: 'Aktivní řešení nepořádku a situace lidí bez domova.', text: 'Nechceme zavírat oči před lidmi bez domova nebo uživateli návykových látek. Nejde je ze dne na den vymazat z ulic, ale město musí situaci aktivně řídit. Budeme víc hlídat čistotu kolem popelnic, s městskou policií bránit vzniku squatů a hledat funkční sociální cesty.', tags:['priorita_bezpeci','centrum','senior','sidliste'] },
    { id:'vnitrobloky', heading: 'Krok za krokem oživíme vnitrobloky a veřejný prostor.', text: 'Chceme do sídlišť vracet život. Znamená to postupné úpravy – od instalace kvalitních laviček do zanedbaného parku u Zdravky přes modernizaci dětských hřišť o vodní prvky až po podporu pravidelných trhů u Hvězdy.', tags:['priorita_prostor','sidliste','rodic','priroda'] },
    { id:'koupaliste', heading: 'Větší využití areálu koupaliště během celého dne.', text: 'Areál koupaliště má mnohem větší potenciál. Budeme hledat cesty, jak ho otevřít rannímu kondičnímu plavání nebo klidným podvečerním akcím. Pro rodiny s dětmi bychom rádi přímo v areálu vytvořili zázemí v podobě suchého hřiště.', tags:['sport','sidliste','rodic','senior','priroda'] },
    { id:'nova_zastavba', heading: 'Propojení nové zástavby se stávajícím životem a MHD.', text: 'Nové rezidenční projekty nesmí fungovat jako odříznuté ostrovy, které jen zkomplikují dopravu starousedlíkům. Při jednání s developery budeme trvat na tom, aby se nové čtvrti smysluplně propojovaly se stávající zástavbou a měly od počátku vyřešené napojení na linky MHD.', tags:['priorita_doprava','mhd','sidliste','dojizdi'] },
    { id:'barabizny', heading: 'Cílený tlak na úpravu chátra­jících budov a trafostanic.', text: 'Tyto staré objekty dlouhodobě hyzdí naše okolí. Chceme jako radnice vyvinout systematický tlak na jejich majitele, aby se o svůj majetek starali, nebo společně hledat způsoby, jak tyto plochy alespoň vizuálně zcivilizovat.', tags:['priorita_prostor','centrum','sidliste','byznys'] },
  ],
};

const SEKCE_CHYTRE: Sekce = {
  id: 'chytre',
  eyebrow: 'BEROUN CHYTŘE',
  color: 'blue',
  headline: 'Berounská karta a úřad v mobilu.\nVšechny služby na jednom místě',
  perex1: 'Nechceme, aby každá návštěva úřadu vyžadovala půlden volna z práce. Vytvoříme proto moderní ekosystém služeb občanům, který vám reálně usnadní život. Od platby za odpady přes žádost o doklady až po nákup lístků do kina, vše vyřešíte v jediné aplikaci Beroun v mobilu. Digitálně a bez fyzické návštěvy. Pokud tedy samozřejmě nebudete chtít přijít.',
  perex2: 'Vedle toho zavedeme Berounskou kartu, protože obyvatelům našeho města se život v Berouně zkrátka musí vyplatit. Tato karta bude součástí připravované aplikace, takže ať už se rozhodnete pro digitální verzi nebo s sebou budete raději nosit tu plastovou, získáte nárok na praktické výhody.\n\nV programových bodech je pak rozebíráme podrobněji, stejně jako naši snahu otevřít městská data veřejnosti.',
  quote: 'Vadí mi, že běžné věci vyžadují půlden volna z práce - třeba přihlásit své miminko na vítání občánků dnes člověk musí osobně na úřadě. A to ani nemluvím o tom, že předpis na poplatek za popelnice přijde dřív než pozvánka na vítání občánků. Taky mi vadí, že vám rozkopou ulici pod okny a vy ani nevíte proč a jak dlouho to bude trvat. Tyhle věci úplně zbytečně znepříjemňují lidem v Berouně život. Aplikace Beroun v mobilu a Berounská karta to mají změnit — pozvánku na vítání občánku pro své miminko dostanete automaticky při narození dítěte, na mapě plánovaných výkopů uvidíte, co se kde chystá, na úřad si zarezervujete čas přes mobil. A kdo bude chtít přijít osobně, samozřejmě bude moct.',
  quoteName: 'Barbora Skálová',
  quoteRole: 'Beroun Sobě',
  quoteAvatar: '/bara_small.jpg',
  heroImage: '/phonecard.jpg',
  points: [
    { id: 'karta_app', heading: 'Vydáme Berounskou kartu a aplikaci Beroun v mobilu', text: 'Žít v Berouně se musí vyplatit. Berounská karta bude dostupná fyzicky jako plastová karta, především pak jako jednoduchý QR kód v mobilní aplikaci Beroun v mobilu. Po jejím předložení získáte slevy na městské služby – parkování, poplatek za psa, vstupné na koupaliště, do kina, akvaparku nebo městských muzeí.\n\nZároveň vybudujeme síť partnerů, abyste slevy mohli co nejdříve uplatnit i v místních restauracích, obchodech nebo u volnočasových aktivit. Všechny poplatky, historii plateb včetně příspěvků z projektu Corrency vyřídíte jednoduše přes e-shop městských služeb s bezpečným ověřením přes bankovní identitu.', tags: ['priorita_digi', 'byznys', 'senior', 'dojizdi'] },
    { id: 'smartinfo', heading: 'Přívětivější úřad a chytrá komunikace přes SMS nebo aplikaci', text: 'Úřad tu má být pro vás, ne vy pro něj. Zpřehledníme a rozšíříme online objednávání a upravíme úřední dobu tak, aby zahrnovala jeden brzký ranní a jeden večerní čas každý týden.\n\nDůležité informace už navíc nebudete muset lovit na nepřehledných webech nebo sociálních sítích. Systém SmartInfo vás bude varovat před haváriemi, nehodami nebo vás upozorní na to, jaká popelnice se bude další den vyvážet – jednoduchou SMS nebo upozorněním přímo v aplikaci Beroun v mobilu.', tags: ['priorita_digi', 'senior', 'dojizdi', 'doma'] },
    { id: 'vykopy', heading: 'Konec rozkopaných ulic bez vysvětlení. Všechny stavby a výkopy na jedné mapě', text: 'Každý jsme si toho už někdy všimnul – čerstvě položený asfalt se za měsíc znovu rozkope kvůli jiným trubkám. Vytvoříme proto interaktivní mapu plánovaných staveb, výkopových prací a uzavírek. Chceme, abyste věděli, co se ve vaší ulici chystá. A také aby město konečně dokázalo lépe koordinovat práce různých dodavatelů.\n\nKaždý velký projekt, jako je rekonstrukce mostu, revitalizace náplavky či stavba nového hřiště, navíc získá svůj digitální profil. Tam zjistíte aktuální stav a najdete informace o dodržování termínů i čerpání rozpočtu. Transparentně, v reálném čase.', tags: ['priorita_digi', 'sidliste', 'byznys'] },
    { id: 'benefity', heading: 'Městské benefity rozšíříme k podpoře rodin i seniorů', text: 'Chystaný digitální ekosystém otevře cestu k dalším praktickým výhodám - například senioři si přes sms nebo aplikaci snadno objednají Senior taxi. A myslíme i na rodiny – při narození dítěte získáte automatické pozvání na vítání občánků a jako bonus startovací příspěvek na nákup v lokálních berounských obchodech.', tags: ['priorita_digi', 'rodic', 'senior', 'kolo'] },
    { id: 'otevrena_data', heading: 'Otevřeme data veřejnosti a z Berouna uděláme lídra v inovacích', text: 'Chceme z Berouna udělat místo, které inovuje a láká talenty. Zpřístupníme městská data na jednom přehledném datovém portálu, kde najdete statistiky o hospodaření, životním prostředí či demografii. Připravíme mapy zobrazující obsazenost parkovišť a mapující dopravní situaci.\n\nUspořádáme sérii berounských hackathonů, kde budou programátoři či studenti tato data využívat a navrhovat například plány optimalizace tras MHD nebo svozu odpadu. Otevřená data nabídneme vysokým školám pro diplomové práce zaměřené na zlepšování života v českých městech.', tags: ['priorita_digi', 'byznys', 'student'] },
  ],
};

export const ALL_SEKCE: Sekce[] = [SEKCE_CHYTRE, SEKCE_DUSTOJNE];
