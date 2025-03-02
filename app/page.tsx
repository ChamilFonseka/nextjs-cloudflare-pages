import { HeroSection } from "@/components/HeroSection";
import { TimelineDemo } from "@/components/TimelineDemo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <main className="max-w-7xl relative">
        <HeroSection />
        <TimelineDemo />
      </main>
    </BackgroundBeamsWithCollision>
  );
}
