import Image from "next/image";

export default function RdvHeader() {
  return (
    <header className="relative w-full text-white bg-gradient-to-b from-oxylove to-[#1e6fb3] pt-8">
      <div className="mx-auto max-w-screen-lg px-4 flex items-center justify-between">
        <h1 className="text-3xl md:text-5xl font-semibold md:mt-24 mt-30 pb-5" style={{ fontFamily: 'Pacifico, cursive' }}>Mes rendez-vous</h1>
        <div className="w-9 h-9 rounded-full bg-white/15 grid place-items-center" aria-hidden>
          👤
        </div>
      </div>

      {/* Mascotte spécifique RDV (au-dessus de la vague, non rognée) */}
      <div className="pointer-events-none absolute right-0 md:right-6 top-0 -translate-y-[10%] z-20 p-4 pt-10">
        <Image src="/mascotte/imageV2.png" alt="Mascotte RDV" width={160} height={100}/>
      </div>
    </header>
  );
}


