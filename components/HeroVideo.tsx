"use client";

import { useRef, useState, useEffect } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "65vh", background: "#0a0a0a" }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src="/videos/capitalvvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />

      {/* Loading shimmer while video loads */}
      {!isLoaded && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#CDA634 1px, transparent 1px), linear-gradient(90deg, #CDA634 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin"
                style={{ borderColor: "rgba(205,166,52,0.4)", borderTopColor: "#CDA634" }}
              />
              <span className="text-gray-500 text-xs tracking-widest uppercase">Loading</span>
            </div>
          </div>
        </div>
      )}

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-[65vh] px-6">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
            style={{
              borderColor: "rgba(205,166,52,0.5)",
              color: "#CDA634",
              background: "rgba(205,166,52,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#CDA634" }}
            />
            See How We Work
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Transforming{" "}
            <span style={{ color: "#CDA634" }}>Enterprise</span>
            <br />
            Technology
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed max-w-xl mx-auto drop-shadow">
            Watch how Capital V Solutions turns complex challenges into
            streamlined, scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 shadow-xl"
              style={{ background: "#A61C26" }}
            >
              Talk to an Expert
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#approach");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-full text-sm font-semibold border text-white hover:bg-white/10 transition-all active:scale-95 flex items-center gap-2"
              style={{
                borderColor: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              View Our Approach
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs tracking-widest uppercase font-medium">
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, #CDA634, transparent)",
          }}
        />
      </div>
    </section>
  );
}
