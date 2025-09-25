import Header from "./components/Header";
import AppointmentCard from "./components/AppointmentCard";
import CaregiverCard from "./components/CaregiverCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e6f5ff]">
      <Header />
      <main className="mx-auto max-w-screen-lg px-4 pt-32">
        <h2 className="text-nightshift text-xl font-semibold mb-4 text-center mt-2 md:mt-30">
          Mes prochains rendez-vous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-14">
          <AppointmentCard
            dateLabel="Lundi 22 décembre"
            timeLabel="10h00"
            doctorName="Dr Caroline LEBOEUF"
            specialty="Chirurgien-dentiste"
            actLabel="Adulte - Contrôle annuel et/ ou détartrage"
            avatarSrc="/icons/icon_white.png"
            href="#"
          />

          <AppointmentCard
            dateLabel="Vendredi 26 décembre"
            timeLabel="17h30"
            doctorName="Dr Marc Lamotte"
            specialty="Médecin généraliste"
            actLabel="Adulte - Contrôle annuel"
            avatarSrc="/icons/icon_white.png"
            href="#"
          />
        </div>

        <h2 className="text-nightshift text-xl font-semibold mb-2 text-center">
          Mes soignants
        </h2>
        <p className="text-nightshift/70 text-center mb-6">Historique</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          <CaregiverCard
            name="Dr Caroline LEBOEUF"
            specialty="Chirurgien-dentiste"
            avatarSrc="/icons/icon_white.png"
            href="#"
          />
          <CaregiverCard
            name="Dr Marc Lamotte"
            specialty="Médecin généraliste"
            avatarSrc="/icons/icon_white.png"
            href="#"
          />
        </div>
      </main>
    </div>
  );
}
