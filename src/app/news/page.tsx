import ProfileIcon from "../components/icons/ProfileIcon";
import NewsCard from "../components/NewsCard";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#e6f5ff]">
      <div className="w-full bg-oxylove text-white py-3 pt-10">
        <div className="mx-auto max-w-screen-sm px-4 flex items-center justify-between">
          <span style={{ fontFamily: 'Pacifico, cursive' }} className="text-xl">Nouveautés</span>
          <span aria-hidden>
            <ProfileIcon size={28} />
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-screen-sm px-4 pt-4 pb-28 space-y-4">
        <NewsCard
          title="Un cabinet de dentiste ouvre près de chez vous"
          excerpt="Le Dr André ouvre un cabinet de dentiste au 50 rue de la Paix."
          imageSrc="/news/image1.png"
        />
        <NewsCard
          title="Une épidémie de gastro hivernale"
          excerpt="De nombreux cas de gastro ont été détectés en France. Protégez-vous !"
          imageSrc="/news/image2.png"
        />
        <NewsCard
          title="Evolution des remboursements des frais de santé"
          excerpt="En 2026, les remboursements de frais de santé concernant la chirurgie dentaire vont changer."
          imageSrc="/news/image3.png"
        />
        <NewsCard
          title="Campagne de Don du Sang"
          excerpt="Une campagne de don du sang est prévue le samedi 19 octobre 2025."
          imageSrc="/news/image4.png"
        />
        <NewsCard
          title="Ouverture d’un centre d’analyses près de chez vous"
          excerpt="Un centre d’analyses médicales ouvre ses portes à proximité."
          imageSrc="/news/image5.png"
        />
      </main>
    </div>
  );
}


