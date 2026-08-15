import type { StaticImageData } from 'next/image';

// ── Barvy: srovnej s existujícími konstantami projektu, ať badge sedí ──
const NAVY = '#161534';
const NUMBER_GRAY = '#DCE2EA';
const BADGE_BG = '#22B573'; // zelená badge „současná zastupitelka" — nahraď svou přesnou hodnotou
const TAG_BG = '#E7ECF2';

type CandidateEditorialProps = {
  number: number | string;
  name: string;
  titles?: string;
  tags: string[];
  perex: string;
  photo: string | StaticImageData;
  badge?: string;
  reverse?: boolean;
  onReadMore: () => void;
};

const CandidateEditorial = ({
  number,
  name,
  titles,
  tags,
  perex,
  photo,
  badge,
  reverse = false,
  onReadMore,
}: CandidateEditorialProps) => {
  const photoSrc = typeof photo === 'string' ? photo : photo.src;
  // Bez vodicí nuly – 1–9 je jedna číslice
  const numberLabel = String(number);
  const isSingleDigit = numberLabel.length === 1;

  const pillBase =
    'rounded-full font-bold uppercase tracking-wide whitespace-nowrap';

  return (
    <article className="mb-16 last:mb-0 md:mb-24">
      {/* ================= DESKTOP (md+) ================= */}
      <div
        className={`mx-auto hidden w-fit lg:flex items-center gap-6 ${
          reverse ? 'flex-row-reverse' : ''
        }`}
      >
        {/* Foto + číslo: pevná výška = kotva bloku, definuje výšku sloupce. */}
        <div className="relative h-[440px] w-[380px] shrink-0">
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute top-0 select-none whitespace-nowrap text-[300px] font-bold leading-[0.82] ${
              reverse
                ? isSingleDigit
                  ? 'right-[55%]'
                  : 'right-[45%]'
                : isSingleDigit
                ? 'left-[55%]'
                : 'left-[45%]'
            }`}
            style={{ fontFamily: 'var(--font-heading)', color: NUMBER_GRAY }}
          >
            {numberLabel}
          </span>
          <img
            src={photoSrc}
            alt={name}
            className="absolute bottom-0 left-0 z-10 block h-auto max-h-full w-full object-contain object-bottom"
          />
        </div>

        {/* Text: kompaktní blok, vertikálně vycentrovaný vůči fotce */}
        <div className="relative z-20 flex h-[440px] w-[400px] flex-col justify-center text-left">
          <h2
            className="text-[52px] font-bold leading-[1.02]"
            style={{ fontFamily: 'var(--font-heading)', color: NAVY }}
          >
            {name}
          </h2>

          {titles ? (
            <p
              className="mt-1.5 text-[13px] font-bold tracking-wide text-[#3C96D7]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {titles}
            </p>
          ) : null}

          <div
            className="mt-3.5 flex flex-wrap items-center gap-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {badge ? (
              <span
                className={`${pillBase} px-3.5 py-1 text-[11px] text-white`}
                style={{ backgroundColor: BADGE_BG }}
              >
                {badge}
              </span>
            ) : null}
            {tags.map((tag) => (
              <span
                key={tag}
                className={`${pillBase} px-3.5 py-1 text-[11px]`}
                style={{ backgroundColor: TAG_BG, color: NAVY }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            className="mt-4 max-w-[380px] text-[17px] leading-relaxed text-gray-700"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {perex}
          </p>

          <button
            type="button"
            onClick={onReadMore}
            className="mt-4 self-start text-[15px] font-bold text-[#3C96D7] hover:underline"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Celý profil &rarr;
          </button>
        </div>
      </div>

      {/* ================= MOBIL (<md) ================= */}
      {/* Pevná geometrie: fotka (FOTO_H) je kotva a určuje výšku bloku.
          Textové prvky mají pevnou pozici vůči fotce — jméno u horní hrany,
          odkaz u dolní, bio ve stálém pásu mezi nimi. Kratší/delší bio už
          NEposouvá ostatní prvky. Pod blokem průběžná linka jako u rosteru. */}
      <div className="relative flex items-end lg:hidden">
        {/* Číslo na úrovni bloku, v mezeře fotka/text */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-[-8px] z-0 select-none whitespace-nowrap text-[150px] font-bold leading-[0.7] ${
            reverse
              ? isSingleDigit
                ? 'right-[96px]'
                : 'right-[60px]'
              : isSingleDigit
              ? 'left-[96px]'
              : 'left-[60px]'
          }`}
          style={{ fontFamily: 'var(--font-heading)', color: NUMBER_GRAY }}
        >
          {numberLabel}
        </span>

        {/* Fotka: pevná výška = kotva bloku, postava stojí na dně.
            Linka je border-b celého bloku; protože text nikdy nepřeteče
            fotku (stejná výška + clamp), spodní hrana bloku = spodek fotky,
            takže linka sedí hned pod fotkou jako u rosteru 11–21. */}
        <div
          className={`relative z-10 h-[330px] w-[185px] shrink-0 ${
            reverse ? 'order-2' : ''
          }`}
        >
          <img
            src={photoSrc}
            alt={name}
            className={`absolute bottom-0 z-10 h-full w-auto max-w-none ${
              reverse ? 'right-[-30px]' : 'left-[-30px]'
            }`}
          />
        </div>

        {/* Textový sloupec: stejně vysoký jako fotka, prvky rozprostřené
            mezi horní a dolní hranu (jméno nahoře, odkaz dole) */}
        <div
          className={`relative z-20 flex h-[330px] min-w-0 flex-1 flex-col md:max-w-[420px] ${
            reverse ? 'pl-3 pr-4 text-left' : 'pl-4 pr-3 text-left'
          }`}
        >
          {/* Horní zóna: jméno u horní hrany fotky */}
          <div>
            <h2
              className="font-bold"
              style={{
                fontFamily: 'var(--font-heading)',
                color: NAVY,
                fontSize: 'clamp(22px, 6.5vw, 28px)',
                lineHeight: 1.1,
              }}
            >
              {name}
            </h2>

            {titles ? (
              <p
                className="mt-1 text-[12px] font-bold tracking-wide text-[#3C96D7]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {titles}
              </p>
            ) : null}

            <div
              className="mt-2 flex flex-wrap items-center gap-1.5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {badge ? (
                <span
                  className={`${pillBase} px-2 py-[3px] text-[10px] text-white`}
                  style={{ backgroundColor: BADGE_BG }}
                >
                  {badge}
                </span>
              ) : null}
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className={`${pillBase} px-2 py-[3px] text-[10px]`}
                  style={{ backgroundColor: TAG_BG, color: NAVY }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Střední zóna: celý perex (vejde se i nejdelší) */}
          <div className="min-h-0 flex-1 py-2">
            <p
              className="text-[13px] text-gray-700"
              style={{
                fontFamily: 'var(--font-body)',
                lineHeight: 1.4,
              }}
            >
              {perex}
            </p>
          </div>

          {/* Dolní zóna: odkaz u dolní hrany fotky */}
          <button
            type="button"
            onClick={onReadMore}
            className="mb-2.5 text-[14px] font-bold text-[#3C96D7] hover:underline"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Celý profil &rarr;
          </button>
        </div>

        {/* Linka hned pod fotkou, na koncích mizící do ztracena */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-px"
          style={{
            background:
              'linear-gradient(to right, transparent 0, rgba(22,21,52,0.14) 20%, rgba(22,21,52,0.14) 80%, transparent 100%)',
          }}
        />
      </div>
    </article>
  );
};

export default CandidateEditorial;