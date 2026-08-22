/**
 * České typografické pravidlo: krátká předložka nebo spojka nesmí zůstat
 * viset na konci řádku. Nahradí mezeru za takovým slovem nedělitelnou
 * mezerou (U+00A0).
 *
 * Řeší se za běhu při renderu, ne v datech — texty v `data/candidates.ts`
 * tak jdou psát normálně a pravidlo platí i pro nově přidané.
 */

// Jednopísmenné předložky a spojky (striktní pravidlo): k, s, v, z, o, u, a, i.
const ONE_LETTER = '[aikosuvzAIKOSUVZ]';

// Dvojpísmenné předložky včetně vokalizovaných tvarů (ve, ze, ke, se).
// Jen předložky — spojky typu „že“/„ať“ a slovesa se schválně nevážou.
const TWO_LETTER =
  '(?:[nN]a|[dD]o|[oO]d|[pP]o|[zZ]a|[kK]e|[vV]e|[zZ]e|[sS]e|[kK]u|[oO]b)';

// Předložka musí stát samostatně: před ní začátek textu, mezera nebo
// otevírací interpunkce; za ní jedna či víc vodorovných mezer. Požadavek
// na mezeru za slovem zároveň zaručuje, že se netrefí začátek delšího
// slova („nad“, „pod“, „doma“ zůstávají nedotčené).
// (Konce řádků schválně netrefujeme, aby zůstalo dělení odstavců.)
const PREPOSITION = new RegExp(
  `(^|[\\s(\\[{„"'–—])(${ONE_LETTER}|${TWO_LETTER})[ \\t]+`,
  'g'
);

// Nedělitelná mezera jako escape sekvence — v kódu je od obyčejné
// mezery vizuálně k nerozeznání, takže ji nepíšeme doslova.
const NBSP = '\u00A0';

export const fixNbsp = (text: string): string => {
  // Dva průchody: první nahrazení „spotřebuje" mezeru, která je zároveň
  // levou hranicí následujícího slova, takže řetězec typu „a v Berouně"
  // se dokončí až napodruhé.
  let out = text;
  for (let i = 0; i < 2; i += 1) {
    out = out.replace(PREPOSITION, `$1$2${NBSP}`);
  }
  return out;
};
