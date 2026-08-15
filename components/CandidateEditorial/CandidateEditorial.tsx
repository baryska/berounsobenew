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
  const numberLabel = String(number).padStart(2, '0');

  const pillBase =
    'rounded-full font-bold uppercase tracking-wide whitespace-nowrap';

  return (
    <article className="mb-16 last:mb-0 md:mb-24">
      {/* ================= DESKTOP (md+) ================= */}
      <div
        className={`hidden md:flex items-center gap-12 ${
          reverse ? 'flex-row-reverse' : ''
        }`}
      >
        {/* Foto + číslo: fotka definuje výšku bloku, postava stojí na spodní hraně */}
        <div className="relative w-[380px] shrink-0">
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute top-0 select-none whitespace-nowrap text-[300px] font-bold leading-[0.82] ${
              reverse ? 'right-[45%]' : 'left-[45%]'
            }`}
            style={{ fontFamily: 'var(--font-heading)', color: NUMBER_GRAY }}
          >
            {numberLabel}
          </span>
          <img
            src={photoSrc}
            alt={name}
            className="relative z-10 block h-auto w-full"
          />
        </div>

        {/* Text: jeden svislý blok, vertikálně centrovaný vůči fotce, jedna svislice */}
        <div
          className={`relative z-20 flex flex-1 flex-col justify-center ${
            reverse ? 'items-end text-right' : 'items-start text-left'
          }`}
        >
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
            className={`mt-3.5 flex flex-wrap items-center gap-2 ${
              reverse ? 'justify-end' : ''
            }`}
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
            className="mt-3.5 max-w-[560px] text-[17px] leading-relaxed text-gray-700"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {perex}
          </p>

          <button
            type="button"
            onClick={onReadMore}
            className="mt-3.5 text-[15px] font-bold text-[#3C96D7] hover:underline"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Celý profil &rarr;
          </button>
        </div>
      </div>

      {/* ================= MOBIL (<md) ================= */}
      {/* Zmenšený desktop: obří číslo v pozadí, fotka u okraje, VŠECHEN text vedle fotky */}
      <div
        className={`relative flex items-end md:hidden ${
          reverse ? 'flex-row-reverse' : ''
        }`}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-0 z-0 select-none whitespace-nowrap text-[180px] font-bold leading-[0.85] ${
            reverse ? 'right-[36px]' : 'left-[36px]'
          }`}
          style={{ fontFamily: 'var(--font-heading)', color: NUMBER_GRAY }}
        >
          {numberLabel}
        </span>

        {/* Fotka: krajní sloupec, vysunutá za okraj, postava stojí na spodní hraně bloku */}
        <div
          className={`relative z-10 w-[46%] shrink-0 ${
            reverse ? 'mr-[-32px]' : 'ml-[-32px]'
          }`}
        >
          <img src={photoSrc} alt={name} className="block h-auto w-full" />
        </div>

        {/* Všechen text vedle fotky: jméno, titul, tagy, bio, odkaz */}
        <div
          className={`relative z-20 min-w-0 flex-1 pb-1 ${
            reverse ? 'pl-8 pr-3 text-right' : 'pl-3 pr-8 text-left'
          }`}
        >
          <h2
            className="font-bold"
            style={{
              fontFamily: 'var(--font-heading)',
              color: NAVY,
              fontSize: 'clamp(24px, 7vw, 30px)',
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
            className={`mt-2.5 flex flex-wrap items-center gap-1.5 ${
              reverse ? 'justify-end' : ''
            }`}
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

          {/* Celý perex, bez line-clampu → žádné „…" */}
          <p
            className="mt-2.5 text-[14px] text-gray-700"
            style={{ fontFamily: 'var(--font-body)', lineHeight: 1.45 }}
          >
            {perex}
          </p>

          <button
            type="button"
            onClick={onReadMore}
            className="mt-2 text-[14px] font-bold text-[#3C96D7] hover:underline"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Celý profil &rarr;
          </button>
        </div>
      </div>
    </article>
  );
};

export default CandidateEditorial;