"use client";

import { useEffect, useRef, useState } from "react";

export default function SplashGate() {
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("splashSeen") === "1") {
        setVisible(false);
        return;
      }
    } catch {
      // ignore storage errors (private mode, etc.)
    }

    const hide = () => {
      setVisible(false);
      try {
        sessionStorage.setItem("splashSeen", "1");
      } catch {
        // ignore
      }
    };

    const v = videoRef.current;
    if (!v) {
      // Safety timeout if the ref isn't ready
      const t = setTimeout(hide, 2500);
      return () => clearTimeout(t);
    }

    const onEnded = () => hide();
    const onError = () => hide();
    const onCanPlay = () => {
      // Fallback: if video is very long, limit to ~3s
      setTimeout(hide, 3200);
    };

    v.addEventListener("ended", onEnded);
    v.addEventListener("error", onError);
    v.addEventListener("canplay", onCanPlay, { once: true } as AddEventListenerOptions);

    // Autoplay attempt
    v.play().catch(() => {
      // If autoplay is blocked, hide quickly
      setTimeout(hide, 1200);
    });

    return () => {
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("error", onError);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[var(--background)]">
      <video
        ref={videoRef}
        src="/animation/Animation_Logo.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-[320px] max-w-[80vw] h-auto"
      />
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute bottom-6 text-white/80 text-sm"
        aria-label="Passer l'animation"
      >
        Passer
      </button>
    </div>
  );
}


