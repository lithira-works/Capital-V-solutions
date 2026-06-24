"use client";

import { useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center"
      style={{ background: "#F7F4EF" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* ── Left ── */}
        <div className="space-y-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
            style={{
              borderColor: "#CDA634",
              color: "#CDA634",
              background: "rgba(205,166,52,0.08)",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M6 1l1.2 3.7H11L7.9 6.9l1.2 3.7L6 8.4 2.9 10.6l1.2-3.7L1 4.7h3.8L6 1Z"
                fill="#CDA634"
              />
            </svg>
            Enterprise Technology
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.08] text-gray-900">
            Build technology
            <br />
            that{" "}
            <span style={{ color: "#CDA634" }}>powers</span>{" "}
            your
            <br />
            business
          </h1>

          {/* Description */}
          <p className="text-base text-gray-500 leading-relaxed max-w-md">
            Capital V Solutions helps enterprises design robust platforms,
            intelligent data foundations, and AI-driven automation that
            transform business operations.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 shadow-sm"
              style={{ background: "#A61C26" }}
            >
              Talk to an Expert
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#approach");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 rounded-full text-sm font-semibold border border-gray-300 text-gray-800 hover:border-gray-500 transition-all hover:bg-gray-50 active:scale-95 flex items-center gap-2"
            >
              View Our Approach
              <span>→</span>
            </button>
          </div>
        </div>

        {/* ── Right ── */}
        <div className="relative flex flex-col gap-4">
          {/* Logo image box — dark animated card */}
          <div
            className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #1a1206 0%, #2a1e07 40%, #1a1206 100%)",
            }}
          >
            {/* Subtle animated grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(205,166,52,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(205,166,52,0.4) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Video */}
            <video
              ref={videoRef}
              src="/videos/capitalvvideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: videoLoaded ? 1 : 0 }}
            />

            {/* Loading shimmer while video loads */}
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
                  style={{
                    borderColor: "rgba(205,166,52,0.4)",
                    borderTopColor: "#CDA634",
                  }}
                />
              </div>
            )}

            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(205,166,52,0.12) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Stats card */}
          <div className="bg-white rounded-2xl shadow-md px-8 py-5 flex items-center justify-around border border-gray-100">
            <div className="text-center">
              <p
                className="text-3xl font-extrabold"
                style={{ color: "#CDA634" }}
              >
                99.9%
              </p>
              <p className="text-xs text-gray-400 tracking-widest uppercase mt-1 font-medium">
                Uptime
              </p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p
                className="text-3xl font-extrabold"
                style={{ color: "#A61C26" }}
              >
                24/7
              </p>
              <p className="text-xs text-gray-400 tracking-widest uppercase mt-1 font-medium">
                Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
