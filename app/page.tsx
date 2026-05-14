import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import PMSimulator from "@/components/PMSimulator";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />

      <Reveal>
        <FeaturedWork />
      </Reveal>
      <PMSimulator />
    </main>
  );
}
