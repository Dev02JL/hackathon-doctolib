import Image from "next/image";
import ProfileIcon from "../components/icons/ProfileIcon";
import MessageIcon from "../components/icons/MessageIcon";

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-[#e6f5ff]">
      {/* Top bar (sans Header) */}
      <div className="w-full bg-oxylove text-white py-3 pt-10">
        <div className="mx-auto max-w-screen-sm px-4 flex items-center justify-between">
          <span style={{ fontFamily: 'Pacifico, cursive' }} className="text-xl">Mes messages</span>
          <span aria-hidden>
            <ProfileIcon size={28} />
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-screen-sm px-4 pt-8 pb-28 text-center">
        <p className="text-nightshift/90 leading-relaxed">
          Ici, tu peux discuter avec tes soignants :
          <br />poser une question, demander un courrier,
          <br />ou encore partager un résultat !
        </p>

        <div className="mt-8 grid place-items-center">
          <Image src="/mascotte/imageV4.png" alt="Mascotte messages" width={210} height={210} />
        </div>

        <p className="mt-6 text-oxylove font-semibold">
          Je te montre comment démarrer ?
        </p>

        <div className="mt-8 grid place-items-center">
          <button className="px-5 py-3 rounded-xl bg-gradient-to-b from-oxylove to-[#1e70b0] text-white shadow flex items-center gap-2">
            <span aria-hidden className="text-white">
              <MessageIcon />
            </span>
            Envoyer un message
          </button>
        </div>
      </main>
    </div>
  );
}


