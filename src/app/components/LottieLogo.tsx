"use client";

import { useEffect, useRef } from "react";

// Small client wrapper around lottie-web to play a JSON animation from /public
export default function LottieLogo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let anim: { destroy: () => void } | null = null;

    // Lazy import lottie-web on client only
    import("lottie-web").then((Lottie) => {
      if (!containerRef.current) return;
      anim = Lottie.default.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animation/animationlogo.json",
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
          progressiveLoad: true,
          // Reduce DOM size a bit on large animations
          hideOnTransparent: false,
        },
      });
    });

    return () => {
      try {
        anim?.destroy();
      } catch (_) {
        // no-op
      }
    };
  }, []);

  return (
    <div
      className={className}
      // Let the animation scale responsively inside this box
      style={{ width: 640, maxWidth: "100%" }}
    >
      <div ref={containerRef} aria-label="Logo animé Doctolib" />
    </div>
  );
}


