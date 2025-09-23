import LottieLogo from "./components/LottieLogo";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <LottieLogo className="animate-logo-float select-none" />
    </main>
  );
}
