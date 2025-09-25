import Image from "next/image";
import Link from "next/link";

export type CaregiverCardProps = {
  name: string;
  specialty: string;
  avatarSrc?: string;
  href?: string;
  onClick?: () => void;
};

export default function CaregiverCard({ name, specialty, avatarSrc = "/icons/icon_white.png", href, onClick }: CaregiverCardProps) {
  const content = (
    <div className="rounded-2xl shadow-lg overflow-hidden border border-nightshift/10 bg-white w-full">
      <div className="px-4 sm:px-6 py-4 flex items-center gap-4">
        <div className="shrink-0 rounded-full overflow-hidden w-14 h-14 bg-oxylove/10">
          <Image src={avatarSrc} alt="Avatar soignant" width={56} height={56} />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-nightshift truncate">{name}</p>
          <p className="text-nightshift/80 text-sm truncate">{specialty}</p>
        </div>
        <div className="ml-auto text-nightshift/60" aria-hidden>
          ›
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className="block w-full text-left">
      {content}
    </button>
  );
}


