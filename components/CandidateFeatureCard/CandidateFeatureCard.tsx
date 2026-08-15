import Image, { StaticImageData } from 'next/image';

interface CandidateFeatureCardProps {
  number: number;
  name: string;
  titles?: string;
  tags: string[];
  perex: string;
  photo: StaticImageData;
  badge?: string;
  onReadMore?: () => void;
}

const ACCENT = '#3C96D7';

/**
 * Moderní horizontální medailonek pro prvních 10 kandidátů – 2 na řádek.
 * Fotka je celá (container má přesný poměr fotky 197:256, takže se nic neořízne),
 * žádný fade. Pořadové číslo je v toku obsahu vpravo nahoře, takže nepřekrývá jméno.
 */
const CandidateFeatureCard = ({
  number,
  name,
  titles,
  tags,
  perex,
  photo,
  badge,
  onReadMore,
}: CandidateFeatureCardProps) => {
  const num = String(number).padStart(2, '0');

  return (
    <article className="group relative flex overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-14px_rgba(0,0,0,0.3)]">
      {/* Fotka – celá, bez oříznutí a bez fade */}
      <div className="relative w-[40%] shrink-0 self-start aspect-[197/256] overflow-hidden bg-slate-100">
        <Image
          src={photo}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          className="transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Obsah */}
      <div className="flex flex-1 flex-col justify-center p-5 min-w-0">
        {/* Tituly + pořadové číslo (v toku, nepřekrývá jméno) */}
        <div className="flex items-start justify-between gap-3">
          <p className="pt-1.5 text-gray-400 text-xs" style={{ fontFamily: 'var(--font-heading)' }}>
            {titles && titles.trim() ? titles : ' '}
          </p>
          <span
            className="leading-none text-4xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: ACCENT }}
            aria-label={`Pořadové číslo ${number}`}
          >
            {num}
          </span>
        </div>

        <h3
          className="text-xl md:text-2xl font-bold text-[#161534] leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {name}
        </h3>
        <span className="mt-2.5 block h-1 w-10 rounded-full" style={{ backgroundColor: ACCENT }} />

        {/* Tagy + odznak */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {badge && (
            <span
              className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
              style={{ fontFamily: 'var(--font-heading)', backgroundColor: '#00C864' }}
            >
              {badge}
            </span>
          )}
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/[0.06] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#161534]/60"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Perex – zkrácený na 3 řádky */}
        <p
          className="mt-3 text-sm text-gray-600 leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {perex}
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={onReadMore}
          className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold transition-transform duration-300 hover:translate-x-1 cursor-pointer bg-transparent border-none p-0"
          style={{ fontFamily: 'var(--font-heading)', color: ACCENT }}
        >
          Celý profil
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CandidateFeatureCard;
