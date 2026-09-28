import { useEffect, useRef, useState } from "react";
import { site } from "../data/site.config";
import { useTranslation } from "../lib/useTranslation";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

const SKIP_INTRO_SECONDS = 20;

export function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { music } = site;
  const t = useTranslation();

  const playAudio = (skipIntro = true) => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (skipIntro) {
        audio.currentTime = SKIP_INTRO_SECONDS;
      }
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => setPlaying(true))
          .catch((error) => {
            console.warn("Autoplay blocked by browser:", error.message);
            setPlaying(false);
          });
      }
    } catch (error) {
      console.warn("Error attempting to play audio:", error);
      setPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let autoplayAttempted = false;

    const attemptAutoplay = () => {
      if (autoplayAttempted) return;
      autoplayAttempted = true;

      if (!audio) return;
      audio.muted = true;
      audio.currentTime = SKIP_INTRO_SECONDS;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlaying(true);
            setTimeout(() => {
              audio.muted = false;
            }, 100);
          })
          .catch((error) => {
            console.warn("Autoplay blocked by browser:", error.message);
            setPlaying(false);
          });
      }
    };

    const handleFirstInteraction = () => {
      if (!playing) {
        audio.muted = false;
        playAudio(false);
      }
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };

    const handleCanPlay = () => {
      attemptAutoplay();
    };

    audio.addEventListener("canplay", handleCanPlay, { once: true });
    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("touchstart", handleFirstInteraction, { once: true });
    document.addEventListener("keydown", handleFirstInteraction, { once: true });

    if (audio.readyState >= 2) {
      attemptAutoplay();
    } else {
      const timer = setTimeout(attemptAutoplay, 50);
      return () => clearTimeout(timer);
    }

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    playAudio(false);
  }

  const handleAudioError = () => {
    setPlaying(false);
  };

  return (
    <div className="fixed right-4 bottom-24 z-40">
      <audio
        ref={audioRef}
        src={asset(music.src)}
        preload="auto"
        loop
        crossOrigin="anonymous"
        onError={handleAudioError}
        muted
      >
        <track kind="captions" srcLang="en" label="English captions" />
      </audio>
      <button
        type="button"
        onClick={toggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-page text-accent-deep shadow-md"
        aria-pressed={playing}
        aria-label={playing ? t.pauseMusic : t.playMusic}
      >
        <Icon name={playing ? "pause" : "music"} />
      </button>
    </div>
  );
}
