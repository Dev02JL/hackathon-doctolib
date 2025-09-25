import Image from "next/image";
import SearchBar from "./SearchBar";

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
          <span aria-hidden>
            <svg width="24" height="24" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4998 10.6069C22.2674 10.6069 24.5974 12.9226 24.5974 15.8862C24.5973 18.8496 22.2673 21.1645 19.4998 21.1645C16.7324 21.1643 14.4033 18.8495 14.4031 15.8862C14.4031 12.9228 16.7324 10.6071 19.4998 10.6069Z" stroke="white" strokeWidth="4"/>
              <path d="M19.4998 10.6069C22.2674 10.6069 24.5974 12.9226 24.5974 15.8862C24.5973 18.8496 22.2673 21.1645 19.4998 21.1645C16.7324 21.1643 14.4033 18.8495 14.4031 15.8862C14.4031 12.9228 16.7324 10.6071 19.4998 10.6069Z" stroke="url(#paint0_linear_header)" strokeOpacity="0.4" strokeWidth="4"/>
              <path d="M6.35622 33.4358C7.39305 34.2741 8.42988 35.1124 9.46671 35.9507C9.75459 35.5939 10.0221 35.2612 10.294 34.9426C12.6739 32.0425 15.8417 30.3687 19.4439 30.4141C22.8334 30.3757 25.9729 32.2165 28.4171 34.9553C28.4327 34.9725 28.4489 34.9904 28.4647 35.0078C28.7443 35.3172 29.0186 35.6383 29.2966 35.9727C30.3214 35.1197 31.3463 34.2667 32.3711 33.4138C32.0759 33.0588 31.7596 32.6878 31.4326 32.3262C31.4142 32.3058 31.3952 32.2848 31.3768 32.2646C28.5439 29.0464 24.1966 26.3412 19.4439 26.4141C14.7616 26.2726 10.0058 28.8689 7.24955 32.3481C6.93399 32.7179 6.63151 33.0947 6.35622 33.4358Z" fill="white"/>
              <path d="M6.35622 33.4358C7.39305 34.2741 8.42988 35.1124 9.46671 35.9507C9.75459 35.5939 10.0221 35.2612 10.294 34.9426C12.6739 32.0425 15.8417 30.3687 19.4439 30.4141C22.8334 30.3757 25.9729 32.2165 28.4171 34.9553C28.4327 34.9725 28.4489 34.9904 28.4647 35.0078C28.7443 35.3172 29.0186 35.6383 29.2966 35.9727C30.3214 35.1197 31.3463 34.2667 32.3711 33.4138C32.0759 33.0588 31.7596 32.6878 31.4326 32.3262C31.4142 32.3058 31.3952 32.2848 31.3768 32.2646C28.5439 29.0464 24.1966 26.3412 19.4439 26.4141C14.7616 26.2726 10.0058 28.8689 7.24955 32.3481C6.93399 32.7179 6.63151 33.0947 6.35622 33.4358Z" fill="url(#paint1_linear_header)" fillOpacity="0.4"/>
              <path d="M19.5 2.60097C29.1176 2.60097 37 10.6118 37 20.601C37 30.5901 29.1176 38.601 19.5 38.601C9.88245 38.601 2 30.5901 2 20.601C2 10.6118 9.88245 2.60097 19.5 2.60097Z" stroke="white" strokeWidth="4"/>
              <path d="M19.5 2.60097C29.1176 2.60097 37 10.6118 37 20.601C37 30.5901 29.1176 38.601 19.5 38.601C9.88245 38.601 2 30.5901 2 20.601C2 10.6118 9.88245 2.60097 19.5 2.60097Z" stroke="url(#paint2_linear_header)" strokeOpacity="0.4" strokeWidth="4"/>
              <defs>
                <linearGradient id="paint0_linear_header" x1="12.4031" y1="10.8965" x2="16.0458" y2="25.6192" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CCF2FF"/>
                  <stop offset="1" stopColor="white"/>
                </linearGradient>
                <linearGradient id="paint1_linear_header" x1="7.91147" y1="29.4016" x2="8.35485" y2="36.1112" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CCF2FF"/>
                  <stop offset="1" stopColor="white"/>
                </linearGradient>
                <linearGradient id="paint2_linear_header" x1="0" y1="6.89205" x2="10.0087" y2="47.3443" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CCF2FF"/>
                  <stop offset="1" stopColor="white"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
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


