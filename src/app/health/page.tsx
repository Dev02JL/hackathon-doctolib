import Image from "next/image";
import HealthCard from "../components/HealthCard";
import ProfileIcon from "../components/icons/ProfileIcon";

export default function HealthPage() {
  return (
    <div className="min-h-screen bg-[#e6f5ff]">
      {/* Barre bleue supérieure (sans composant Header) */}
      <div className="w-full bg-oxylove text-white py-3 pt-10">
        <div className="mx-auto max-w-screen-sm px-4 flex items-center justify-between">
          <span style={{ fontFamily: 'Pacifico, cursive' }} className="text-xl">Santé</span>
          <span aria-hidden>
            <ProfileIcon size={24} />
          </span>
        </div>
      </div>

      {/* Hero Santé */}
      <section className="mx-auto max-w-screen-sm px-4 pt-6 pb-6">
        <h1 className="text-nightshift text-2xl font-semibold text-center mb-3">Mathieu</h1>
        <div className="grid place-items-center">
          <Image src="/mascotte/imageV3.png" alt="Mascotte" width={200} height={160} />
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-nightshift">
          <span aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#0F294A" strokeWidth="2"/><path d="M8 12l3 3 5-6" stroke="#0F294A" strokeWidth="2" fill="none"/></svg>
          </span>
          <span>Tu es à jour !</span>
        </div>
        <div className="mt-3 grid place-items-center">
          <button className="px-4 py-2 rounded-xl border border-oxylove text-oxylove bg-white">Voir mon profil santé</button>
        </div>
      </section>

      <main className="mx-auto max-w-screen-sm px-4 pb-24">
        <h2 className="text-nightshift font-semibold mb-3">Profils santé de mes proches</h2>
        <div className="grid grid-cols-2 gap-4">
          <HealthCard name="Laura" note="Laura est à jour" />
          <HealthCard name="Françoise" note="Françoise doit mettre à jour ses vaccins" ok={false} />
          <HealthCard name="Lucas" note="Lucas est à jour" />
          <HealthCard name="Marie" note="Marie est à jour" />
        </div>
        <div className="mt-6 grid place-items-center">
          <button className="px-4 py-2 rounded-xl bg-oxylove text-white shadow flex items-center gap-2">
            <span aria-hidden className="text-white"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5313 4.11567C11.7009 1.28524 7.09183 1.31089 4.28706 4.11566C1.48229 6.92043 1.45663 11.5295 4.28705 14.3599C7.11748 17.1903 11.7009 17.1903 14.5313 14.3599C17.3617 11.5295 17.3361 6.92044 14.5313 4.11567ZM15.7114 15.54C12.214 19.0374 6.57876 19.0117 3.107 15.54C-0.364756 12.0682 -0.390413 6.43302 3.107 2.9356C6.60441 -0.561811 12.214 -0.561807 15.7114 2.93561C19.2088 6.43302 19.1831 12.0682 15.7114 15.54ZM9.40919 5.25296C9.85384 5.25296 10.2215 5.62066 10.2215 6.06532L10.1959 8.39978L12.556 8.39977C13.0007 8.39978 13.3684 8.76747 13.3684 9.21213C13.3684 9.7081 13.0007 10.0758 12.5303 10.0502L10.2215 10.0501L10.2215 12.359C10.2215 12.8549 9.85384 13.2226 9.38353 13.197C8.91322 13.2226 8.54552 12.8549 8.57117 12.3846L8.54552 10.0501L6.23671 10.0501C5.7664 10.0758 5.3987 9.7081 5.42435 9.23779C5.3987 8.76748 5.7664 8.39978 6.26236 8.39978L8.57117 8.39978L8.57117 6.09098C8.54551 5.62067 8.91322 5.25296 9.40919 5.25296Z" fill="white"/></svg></span>
            Ajouter un profil
          </button>
        </div>
      </main>
    </div>
  );
}


