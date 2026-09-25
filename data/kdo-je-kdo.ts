/* „Kdo je kdo v Berouně?" — přepis letáku BS_kdo-je-kdo.
 * Pořadí odpovídá vylosovaným číslům na hlasovacím lístku.
 */

export interface Tvar {
  jmeno: string;
  role: string;
}

export interface Kandidatka {
  /** Vylosované číslo na hlasovacím lístku */
  cislo: number;
  /** Název, pod kterým kandidátka jde do voleb */
  nazev: string;
  /** Dřívější název, pokud se přejmenovala */
  drive?: string;
  /** Strana, která za kandidátkou stojí */
  strana: string;
  /** Logo(a) v /public/loga_stran — u koalic i víc než jedno */
  loga: string[];
  /** Známé tváře — „kdo za nimi stojí" */
  tvare: Tvar[];
  /** true jen u Beroun sobě — zvýrazněná karta */
  nase?: boolean;
}

export const KANDIDATKY: Kandidatka[] = [
  {
    cislo: 1,
    nazev: 'Beroun sobě',
    strana: 'Nezávislá kandidátka',
    loga: ['/loga_stran/bs.svg'],
    nase: true,
    tvare: [
      { jmeno: 'Barbora Skálová', role: 'opoziční zastupitelka' },
      { jmeno: 'Václav Kovář', role: 'zakladatel spolku Berounská zeleň' },
    ],
  },
  {
    cislo: 2,
    nazev: 'PULS',
    drive: 'Lepší Beroun',
    strana: 'Svobodní',
    loga: ['/loga_stran/puls.png'],
    tvare: [
      { jmeno: 'Luboš Zálom', role: 'opoziční zastupitel, předseda středočeských Svobodných' },
      { jmeno: 'Hana Kašparová', role: 'opoziční zastupitelka' },
    ],
  },
  {
    cislo: 3,
    nazev: 'ANO 2011',
    strana: 'ANO',
    loga: ['/loga_stran/ano.svg'],
    tvare: [
      { jmeno: 'Michal Mišina', role: 'místostarosta' },
      {
        jmeno: 'Irena Mastná',
        role: 'radní zodpovědná za územní plánování, zastupitelka Středočeského kraje',
      },
    ],
  },
  {
    cislo: 4,
    nazev: 'Nezávislí Berouňáci',
    strana: 'Nezávislí Berouňáci',
    loga: ['/loga_stran/nb.png'],
    tvare: [
      { jmeno: 'Antonín Marx', role: 'ředitel Berounské sportovní' },
      { jmeno: 'Vratislav Randa', role: 'spolumajitel Tipsportu' },
    ],
  },
  {
    cislo: 5,
    nazev: 'Lidé pro Beroun',
    strana: 'SPD, TRIKOLORA',
    loga: ['/loga_stran/spd.svg', '/loga_stran/trikolora.png'],
    tvare: [
      { jmeno: 'Zuzana Machová', role: 'zastupitelka' },
      { jmeno: 'Petr Vajo', role: 'člen kontrolního výboru a bytové komise' },
    ],
  },
  {
    cislo: 6,
    nazev: 'ODS',
    strana: 'ODS',
    loga: ['/loga_stran/ods.svg'],
    tvare: [
      { jmeno: 'Matěj Suchopár', role: 'student' },
      { jmeno: 'František Líma', role: 'bezpečnostní manažer' },
    ],
  },
  {
    cislo: 7,
    nazev: 'Společně pro Beroun',
    strana: 'Nezávislá kandidátka',
    loga: ['/loga_stran/spolecne2.png'],
    tvare: [
      { jmeno: 'Petr Horák', role: 'ředitel Charity Beroun, opoziční zastupitel 2022–23' },
      { jmeno: 'Martin Dolejší', role: 'opoziční zastupitel od 2023' },
    ],
  },
  {
    cislo: 8,
    nazev: 'Naše Česko Berounu',
    strana: 'NAŠE ČESKO',
    loga: ['/loga_stran/nase_cesko.svg'],
    tvare: [
      { jmeno: 'Soňa Chalupová', role: 'starostka' },
      { jmeno: 'David Minařík', role: 'radní zodpovědný za dopravu' },
    ],
  },
];

/** Kdo vedl město — koalice podle volebních období. */
export const VEDENI_MESTA: { obdobi: string; koalice: string[] }[] = [
  { obdobi: '2022–2026', koalice: ['Nezávislí Berouňáci', 'ODS', 'ANO'] },
  { obdobi: '2018–2022', koalice: ['Nezávislí Berouňáci', 'ODS', 'ANO', 'ČSSD'] },
  { obdobi: '2016–2018', koalice: ['Nezávislí Berouňáci', 'ODS', 'ANO', 'ČSSD'] },
  { obdobi: '2014–2016', koalice: ['Nezávislí Berouňáci', 'ČSSD', 'TOP 09'] },
  { obdobi: '2010–2014', koalice: ['Nezávislí Berouňáci', 'ODS', 'ČSSD', 'TOP 09'] },
];

/** Strany z přehledu koalic, které kandidují i letos — v přehledu se zvýrazní.
 *  Názvy se musí shodovat s řetězci ve `VEDENI_MESTA.koalice`. */
export const VLADNOUCI_V_KOALICI = new Set(['Nezávislí Berouňáci', 'ODS', 'ANO']);

/** Kdo tvoří současnou skutečnou opozici. */
export const OPOZICE: string[] = ['Beroun sobě', 'Společně pro Beroun', 'Lepší Beroun (nyní PULS)'];

/* ---------- Časová osa „Kdo vládne v Berouně?" ----------
   Odvozuje se z VEDENI_MESTA, aby osa nemohla utéct od výpisu koalic.
   Navazující období se slévají do jednoho pruhu — 2016–2018 a 2018–2022
   je pro tutéž stranu jedna nepřerušená vláda. */

/** Souvislý úsek, kdy strana seděla ve vedení města. */
export interface Usek {
  od: number;
  do: number;
}

/** Jedna řada osy — kolik let a ve kterých úsecích strana vládla. */
export interface VladaStrany {
  strana: string;
  useky: Usek[];
  /** Součet let ve vedení města napříč úseky. */
  roky: number;
  /** Kandiduje i v letošních volbách — na ose plnou barvou. */
  kandidujeZnovu: boolean;
}

function rozsah(obdobi: string): Usek {
  const m = obdobi.match(/(\d{4})\D+(\d{4})/);
  if (!m) throw new Error(`Neznámý formát období: ${obdobi}`);
  return { od: Number(m[1]), do: Number(m[2]) };
}

const OBDOBI = VEDENI_MESTA.map((v) => ({ ...rozsah(v.obdobi), koalice: v.koalice })).sort(
  (a, b) => a.od - b.od
);

/** Krajní roky osy. */
export const OSA_OD = Math.min(...OBDOBI.map((o) => o.od));
export const OSA_DO = Math.max(...OBDOBI.map((o) => o.do));

/** Popisky na škále — po čtyřech letech, tj. po volebních obdobích. */
export const ROKY_OSY: number[] = (() => {
  const roky: number[] = [];
  for (let r = OSA_OD; r <= OSA_DO; r += 4) roky.push(r);
  if (roky[roky.length - 1] !== OSA_DO) roky.push(OSA_DO);
  return roky;
})();

/** Řady osy, nejdéle vládnoucí strana nahoře. */
export const VLADY: VladaStrany[] = (() => {
  const podleStrany = new Map<string, Usek[]>();

  for (const o of OBDOBI) {
    for (const strana of o.koalice) {
      const useky = podleStrany.get(strana) ?? [];
      const posledni = useky[useky.length - 1];
      if (posledni && posledni.do === o.od) posledni.do = o.do;
      else useky.push({ od: o.od, do: o.do });
      podleStrany.set(strana, useky);
    }
  }

  return [...podleStrany.entries()]
    .map(([strana, useky]) => ({
      strana,
      useky,
      roky: useky.reduce((soucet, u) => soucet + (u.do - u.od), 0),
      kandidujeZnovu: VLADNOUCI_V_KOALICI.has(strana),
    }))
    .sort(
      (a, b) =>
        b.roky - a.roky ||
        a.useky[0].od - b.useky[0].od ||
        a.strana.localeCompare(b.strana, 'cs')
    );
})();
