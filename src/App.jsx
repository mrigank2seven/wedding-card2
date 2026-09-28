import { useEffect } from "react";
import { scrollToHash } from "./lib/scrollToHash";
import { useTranslation } from "./lib/useTranslation";
import { FallingPetals } from "./components/Florals";
import { Hero } from "./components/Hero";
import { Invitation } from "./components/Invitation";
import { Countdown } from "./components/Countdown";
import { Lineup } from "./components/Lineup";
import { Venue } from "./components/Venue";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { BottomNav } from "./components/BottomNav";
import { MusicToggle } from "./components/MusicToggle";
import { LanguageToggle } from "./components/LanguageToggle";

export default function App() {
  const t = useTranslation();

  useEffect(() => {
    const id = window.setTimeout(() => scrollToHash(), 50);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <FallingPetals />
      <a className="skip-link" href="#invitation">
        {t.skipLink}
      </a>
      <LanguageToggle />
      <Hero />
      <main>
        <Invitation />
        <Countdown />
        <Lineup />
        <Venue />
        <Gallery />
      </main>
      <Footer />
      <MusicToggle />
      <BottomNav />
    </>
  );
}
