import Image from "next/image";
import Link from "next/link";

export type AppointmentCardProps = {
  dateLabel: string; // ex: "Lundi 22 décembre"
  timeLabel: string; // ex: "10h00"
  doctorName: string; // ex: "Dr Caroline LEBOEUF"
  specialty: string; // ex: "Chirurgien-dentiste"
  actLabel: string; // ex: "Adulte - Contrôle annuel et/ ou détartrage"
  avatarSrc?: string; // ex: "/icons/icon_white.png" (placeholder)
  onClick?: () => void;
  href?: string; // lien pour "Réserver de nouveau"
};

export default function AppointmentCard(props: AppointmentCardProps) {
  const {
    dateLabel,
    timeLabel,
    doctorName,
    specialty,
    actLabel,
    avatarSrc = "/icons/icon_white.png",
    onClick,
    href,
  } = props;

  return (
    <div className="rounded-2xl shadow-lg overflow-hidden border border-nightshift/10 bg-white max-w-xl w-full">
      {/* Header: date + time */}
      <div className="flex items-center justify-between bg-nightshift text-white px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2">
          <span aria-hidden className="inline-block w-4 h-4 text-white"><svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.51 5.84H1.37V13.21C1.37 13.47 1.57 13.67 1.83 13.67H11.04C11.27 13.67 11.5 13.47 11.5 13.21V5.84H11.51ZM3.68 0.309998C4.05 0.309998 4.37 0.629996 4.37 0.999996V2.15H8.52V0.999996C8.52 0.619996 8.81001 0.309998 9.21001 0.309998C9.58001 0.309998 9.9 0.629996 9.9 0.999996V2.15H11.05C12.06 2.15 12.89 2.98 12.89 3.99V13.21C12.89 14.25 12.06 15.05 11.05 15.05H1.84C0.800004 15.05 0 14.24 0 13.21V3.99C0 2.98 0.810004 2.15 1.84 2.15H2.99001V0.999996C2.99001 0.619996 3.28 0.309998 3.68 0.309998ZM5.98 7.68C6.21 7.68 6.44 7.91 6.44 8.14V10.9C6.44 11.16 6.21 11.36 5.98 11.36H3.22C2.96 11.36 2.76 11.16 2.76 10.9V8.14C2.76 7.91 2.96 7.68 3.22 7.68H5.98Z" fill="white"/></svg></span>
          <span className="font-semibold">{dateLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <span aria-hidden className="inline-block w-4 h-4 text-white"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.37999 7.68C1.37999 10.99 4.06 13.67 7.37 13.67C10.68 13.67 13.36 10.99 13.36 7.68C13.36 4.37 10.65 1.69 7.37 1.69C4.09 1.69 1.37999 4.4 1.37999 7.68ZM7.37 0.309998C11.43 0.309998 14.74 3.62 14.74 7.68C14.74 11.74 11.43 15.05 7.37 15.05C3.31 15.05 0 11.77 0 7.68C0 3.59 3.27999 0.309998 7.37 0.309998ZM6.67999 3.77C6.67999 3.4 6.97 3.08 7.37 3.08C7.74 3.08 8.06 3.4 8.06 3.77V7.34L10.51 8.95C10.83 9.18 10.91 9.61 10.68 9.93C10.48 10.25 10.05 10.33 9.73 10.1L6.97 8.26C6.8 8.15 6.67999 7.91 6.67999 7.68V3.76V3.77Z" fill="white"/></svg></span>
          <span className="font-semibold">{timeLabel}</span>
        </div>
      </div>

      {/* Body: avatar + doctor + specialty + act */}
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="shrink-0 rounded-full overflow-hidden w-14 h-14 bg-oxylove/10">
            <Image src={avatarSrc} alt="Avatar praticien" width={56} height={56} />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-nightshift truncate">{doctorName}</p>
            <p className="text-nightshift/80 text-sm truncate">{specialty}</p>
          </div>
          <div className="ml-auto">
            <span aria-hidden>›</span>
          </div>
        </div>

        <div className="mt-4 flex items-start gap-3 text-nightshift">
          <span aria-hidden className="mt-0.5">🩺</span>
          <p className="text-sm leading-snug">{actLabel}</p>
        </div>
      </div>

      {/* Footer: action */}
      <div className="border-t border-nightshift/10 px-4 sm:px-6 py-3">
        {href ? (
          <Link
            href={href}
            className="flex items-center justify-between text-oxylove font-semibold hover:underline"
          >
            <span className="flex items-center gap-2">
              <span aria-hidden>🔁</span> Réserver de nouveau
            </span>
            <span aria-hidden>›</span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={onClick}
            className="w-full flex items-center justify-between text-oxylove font-semibold hover:underline"
          >
            <span className="flex items-center gap-2">
              <span aria-hidden>🔁</span> Réserver de nouveau
            </span>
            <span aria-hidden>›</span>
          </button>
        )}
      </div>
    </div>
  );
}


