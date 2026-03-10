import Image, { StaticImageData } from 'next/image';

interface CandidateProfileCardProps {
  name: string;
  titles?: string;
  tags: string[];
  perex: string;
  photo: StaticImageData;
  onReadMore?: () => void;
  badge?: string;
}

const CandidateProfileCard = ({
  name,
  titles,
  tags,
  perex,
  photo,
  onReadMore,
  badge,
}: CandidateProfileCardProps) => {
  return (
    <article
      className="relative flex flex-col w-full h-full min-h-[420px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-visible"
    >
      <div className="pt-10 pb-6 px-6 flex flex-1 flex-col items-center">
        <div className="relative mb-4 w-28 h-28 rounded-full overflow-hidden flex-shrink-0 bg-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <Image
            src={photo}
            alt={name}
            layout="fill"
            objectFit="cover"
            objectPosition="center 20%"
          />
        </div>

        {/* Academic titles - vždy rezervovat místo pro zarovnání jmen */}
        <p className="text-gray-500 text-sm mb-0.5 min-h-[1.25rem]" style={{ fontFamily: 'var(--font-heading)' }}>
          {titles && titles.trim() ? titles : '\u00A0'}
        </p>

        {/* Name - Primary Blue */}
        <h3 className="text-xl font-bold text-center mb-3 text-[#3C96D7]" style={{ fontFamily: 'var(--font-heading)' }}>
          {name}
        </h3>

        {/* Badge + Tags */}
        <div className="flex flex-col items-center gap-2 mb-4">
          {badge && (
            <span
              className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase bg-[#00C864]/80 text-white whitespace-nowrap shadow-sm"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {badge}
            </span>
          )}
          <div className="flex flex-nowrap justify-center gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase bg-[#FFAF4B] text-white whitespace-nowrap"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-100 my-4 w-full" />

        {/* Perex - celý text, Inria, roste aby CTA zůstalo u spodního okraje */}
        <p className="text-gray-600 leading-relaxed font-normal mb-4 w-full flex-1 min-h-0" style={{ fontFamily: 'var(--font-body)', fontSize: 'calc(0.875rem + 0.1rem)' }}>
          {perex}
        </p>

        {/* CTA - Primary Blue, Puffin, vpravo, stejná vzdálenost od spodního okraje */}
        <button
          type="button"
          onClick={onReadMore}
          className="text-[#3C96D7] font-semibold text-[15px] mt-auto w-full text-right hover:text-[#2c77ad] hover:underline underline-offset-2 transition-colors cursor-pointer bg-transparent border-none py-0"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Celý profil →
        </button>
      </div>
    </article>
  );
};

export default CandidateProfileCard;
