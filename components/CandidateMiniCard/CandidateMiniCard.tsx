// ── Stejné konstanty jako CandidateEditorial — držte je synchronní ──
const NAVY = '#161534';
const NUMBER_GRAY = '#DCE2EA';

type CandidateMiniCardProps = {
  number: number | string;
  name: string;
  titles?: string;
  shortText: string;
  photo: string | { src: string };
  // tags a onReadMore záměrně ignorujeme — roster 11–21 je nemá
  tags?: string[];
  onReadMore?: () => void;
};

const CandidateMiniCard = ({
  number,
  name,
  titles,
  shortText,
  photo,
}: CandidateMiniCardProps) => {
  const photoSrc = typeof photo === 'string' ? photo : photo.src;
  const numberLabel = String(number).padStart(2, '0');

  return (
    <article className="relative">
      {/* Číslo a postava stojí spolu na lince a překrývají se */}
      <div className="relative h-[225px] overflow-hidden border-b border-[#161534]/15">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[14px] top-6 select-none text-[120px] font-bold leading-[0.8] sm:left-[12px] sm:top-auto sm:bottom-[75px] sm:text-[150px] md:bottom-[120px] md:text-[120px]"
          style={{ fontFamily: 'var(--font-heading)', color: NUMBER_GRAY }}
        >
          {numberLabel}
        </span>
        {/* Holý cutout na lince — čtvercové fotky, rám 1:1 */}
        <div className="absolute bottom-0 right-0 z-10 h-[165px] w-[165px] sm:right-1 sm:h-[190px] sm:w-[190px]">
          <img
            src={photoSrc}
            alt={name}
            className="h-full w-full object-contain"
            style={{ objectPosition: 'right bottom' }}
          />
        </div>
      </div>

      {/* Text pod linkou — nikdy přes fotku */}
      <div className="pt-2.5">
        <h3
          className="text-[16px] font-bold leading-tight"
          style={{ fontFamily: 'var(--font-heading)', color: NAVY }}
        >
          {name}
        </h3>
        {titles && titles.trim() ? (
          <p className="mt-0.5 text-[11px] font-bold tracking-wide text-[#3C96D7]">
            {titles}
          </p>
        ) : null}
        <p
          className="mt-1.5 text-[13px] leading-[1.5] text-gray-600"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {shortText}
        </p>
      </div>
    </article>
  );
};

export default CandidateMiniCard;