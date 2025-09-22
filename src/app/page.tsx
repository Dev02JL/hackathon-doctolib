import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <Image
        src="/logos/logo_blue.png"
        alt="Doctolib logo"
        width={640}
        height={163}
        className="animate-logo-float select-none"
        priority
      />
    </main>
  );
}
