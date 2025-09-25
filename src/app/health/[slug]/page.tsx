import Image from "next/image";
import Link from "next/link";
import ProfileIcon from "../../components/icons/ProfileIcon";

export default async function HealthDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = decodeURIComponent(slug);
  const completion = 75;
  return (
    <div className="min-h-screen bg-[#e6f5ff]">
      {/* Top bar */}
      <div className="w-full bg-oxylove text-white py-3 pt-10">
        <div className="mx-auto max-w-screen-sm px-4 flex items-center justify-between">
          <span style={{ fontFamily: 'Pacifico, cursive' }} className="text-xl">Santé</span>
          <ProfileIcon size={28} />
        </div>
      </div>

      <main className="mx-auto max-w-screen-sm px-4 pt-4 pb-28">
        {/* Back */}
        <div className="mb-2">
          <Link href="/health" className="inline-flex items-center text-nightshift/90">
            <span aria-hidden className="text-2xl mr-2">‹</span> Retour
          </Link>
        </div>

        {/* Title and mascot */}
        <h1 className="text-nightshift text-3xl font-semibold text-center mb-4">{name}</h1>
        <div className="grid place-items-center mb-6">
          <Image src="/mascotte/imageV3.png" alt="Mascotte" width={220} height={180} />
        </div>

        {/* Progress */}
        <div className="mx-auto max-w-md">
          <div className="h-3 w-full bg-white rounded-full border border-nightshift/10 overflow-hidden">
            <div className="h-full bg-nightshift rounded-full" style={{ width: `${completion}%` }} />
          </div>
          <p className="text-center text-nightshift mt-2">
            Profil santé complété à <span className="font-semibold">{completion}%</span>
          </p>
        </div>

        {/* Helper text */}
        <p className="text-center text-nightshift/90 mt-6 mb-4">
          On y est presque,
          <br />il te reste quelques détails à régler !
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-b from-oxylove to-[#1e70b0] text-white shadow flex items-center justify-center gap-3">
            <span aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            Ajouter un carnet de santé
          </button>

          <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-b from-oxylove to-[#1e70b0] text-white shadow flex items-center justify-center gap-3">
            <span aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            Ajouter une ordonnance
          </button>
        </div>

        <div className="mt-6 grid place-items-center">
          <button className="px-4 py-2 rounded-xl bg-white text-nightshift shadow border border-nightshift/10 flex items-center gap-2">
            <span aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" stroke="#0F294A" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="#0F294A" strokeWidth="2"/></svg>
            </span>
            Voir tous mes documents
          </button>
        </div>
      </main>
    </div>
  );
}


