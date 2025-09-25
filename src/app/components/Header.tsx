import Image from "next/image";
import SearchBar from "./SearchBar";
import ProfileIcon from "./icons/ProfileIcon";

export default function Header() {
  return (
    <header className="relative w-full text-white bg-gradient-to-b from-oxylove to-[#1e6fb3] pb-28 pt-8">
      {/* Top bar */}
      <div className="mx-auto max-w-screen-sm px-4 flex items-center justify-between">
        {/* Drapeau FR stylisé */}
        <div className="w-9 h-6 rounded-md overflow-hidden shadow" aria-label="Français">
          <div className="w-full h-full grid grid-cols-3">
            <div className="bg-[#0055A4]" />
            <div className="bg-white" />
            <div className="bg-[#EF4135]" />
          </div>
        </div>

        <Image src="/logos/logo_white.svg" alt="Doctolib" width={140} height={28} />

        <button className="rounded-full w-10 h-10 grid place-items-center bg-transparent">
          <ProfileIcon size={24} />
          <span className="sr-only">Profil</span>
        </button>
      </div>

      {/* Barre de recherche */}
      <div className="mx-auto max-w-screen-sm px-4 mt-8 grid place-items-center">
        <SearchBar placeholder="Rechercher un spécialiste" />
      </div>

      {/* Mascotte */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[52%] md:translate-y-[68%] z-10">
        <Image
          src="/mascotte/image.png"
          alt="Mascotte"
          width={360}
          height={360}
          priority
          className="w-[360px] h-auto md:w-[320px]"
        />
      </div>

      {/* Vague déco en bas */}
      <svg className="absolute inset-x-0 bottom-0 text-[#e6f5ff]" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path fill="currentColor" d="M0 120L60 110C120 100 240 80 360 80C480 80 600 100 720 120C840 140 960 160 1080 150C1200 140 1320 100 1380 80L1440 60V180H0V120Z" />
      </svg>
    </header>
  );
}


