import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <main className="h-[300dvh]">
      <Navbar />
      <Hero/>
      <Ticker/>
    </main>
  );
}
