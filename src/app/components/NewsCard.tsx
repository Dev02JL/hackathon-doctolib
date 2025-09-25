import Image from "next/image";

type Props = {
  title: string;
  excerpt: string;
  imageSrc?: string;
};

export default function NewsCard({ title, excerpt, imageSrc }: Props) {
  return (
    <div className="rounded-2xl bg-white shadow-md border border-nightshift/10 overflow-hidden">
      <div className="flex items-stretch">
        {imageSrc ? (
          <div className="relative w-36 min-h-[8rem] bg-[#e6f0f7]">
            <Image src={imageSrc} alt="" fill sizes="144px" className="object-cover object-center" />
          </div>
        ) : (
          <div className="w-36 min-h-[7rem] bg-[#e6f0f7]" />
        )}
        <div className="flex-1 p-4 relative">
          <h3 className="font-semibold text-nightshift mb-1 leading-snug text-lg">{title}</h3>
          <p className="text-nightshift/90 text-xs leading-snug pr-6">{excerpt}</p>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-nightshift/60" aria-hidden>
            ›
          </span>
        </div>
      </div>
    </div>
  );
}


