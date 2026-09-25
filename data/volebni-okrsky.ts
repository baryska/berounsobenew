/* Volební okrsky v Berouně — komunální volby 9.–10. října 2026.
 *
 * ⚠️ SEZNAM JE ZATÍM PRÁZDNÝ — DOPLŇ HO.
 *
 * Dokud je pole `OKRSKY` prázdné, stránka /jakvolit sekci s tabulkou
 * nezobrazí a místo ní nabídne vyhledávač adres a odkaz na úřední desku.
 * Jakmile sem přidáš první okrsek, tabulka se objeví automaticky —
 * v kódu stránky není potřeba nic měnit.
 *
 * Zdroj dat: úřední deska MěÚ Beroun, složka „Volby do zastupitelstev obcí
 * 2026 – registrační úřad Beroun" (dokument „Informace o počtu a sídle
 * volebních okrsků"). Adresy vždy ověř proti tomuto dokumentu — pro volby
 * 2025 se stěhovaly okrsky 1, 5 a 6 z obchodní akademie jinam.
 */

export interface Okrsek {
  /** Číslo volebního okrsku, např. 1 */
  cislo: number;
  /** Budova, kde je volební místnost, např. „Městská galerie Beroun" */
  budova: string;
  /** Adresa volební místnosti, např. „Politických vězňů 203" */
  adresa: string;
  /** Upřesnění uvnitř budovy — patro, název sálu. Nepovinné. */
  mistnost?: string;
  /** Ulice a části města spadající do okrsku — slouží i pro fulltext hledání. */
  ulice: string[];
  /** Odkaz na mapu (Mapy.cz / Google Maps). Nepovinné. */
  mapa?: string;
  /** Např. „nově — oproti minulým volbám se místnost přesunula". Nepovinné. */
  poznamka?: string;
}

export const OKRSKY: Okrsek[] = [
  // Vzor — odkomentuj a doplň podle úřední desky:
  // {
  //   cislo: 1,
  //   budova: 'Městská galerie Beroun',
  //   adresa: 'Politických vězňů 203',
  //   mistnost: 'přízemí',
  //   ulice: ['Politických vězňů', 'Husovo náměstí', 'Wagnerovo náměstí'],
  //   mapa: 'https://mapy.cz/...',
  //   poznamka: 'nově — dříve obchodní akademie',
  // },
];

/** Vyhledávač na stránce: odpovídá adresu → volební místnost. */
export const VYHLEDAVAC_URL = 'https://volby.tmapy.cz/';

/** Dokument města „Informace o počtu a sídle volebních okrsků" (PDF) —
 *  závazný seznam všech volebních místností v Berouně. */
export const SEZNAM_OKRSKU_URL =
  'https://www.mesto-beroun.cz/e_download.php?file=/data/uredni_deska/obsah22704_1.pdf&original=OVK-inf_pocet_a_sidlo_p.pdf';
