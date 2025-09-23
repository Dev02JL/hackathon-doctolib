import LottieLogo from "./components/LottieLogo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <LottieLogo className="animate-logo-float select-none" />
    </main>
  );
}
