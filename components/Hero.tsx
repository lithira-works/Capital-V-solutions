"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center"
      style={{ background: "#F7F4EF" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
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

        {/* Right */}
        <div className="relative flex flex-col gap-4">
          {/* Globe image */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative bg-gray-100">
            <img
              src="https://capital-v-solutions.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fglobe.6c59d0a6.jpg&w=1080&q=75"
              alt="Golden globe representing global enterprise technology"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.style.background =
                    "linear-gradient(135deg, #1a1206 0%, #2d2107 40%, #1a1206 100%)";
                  parent.innerHTML = `
                    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:relative;">
                      <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                        <circle cx="90" cy="90" r="80" stroke="#CDA634" stroke-width="1.5" fill="none" opacity="0.6"/>
                        <ellipse cx="90" cy="90" rx="40" ry="80" stroke="#CDA634" stroke-width="1" fill="none" opacity="0.4"/>
                        <ellipse cx="90" cy="90" rx="70" ry="30" stroke="#CDA634" stroke-width="1" fill="none" opacity="0.4"/>
                        <line x1="10" y1="90" x2="170" y2="90" stroke="#CDA634" stroke-width="1" opacity="0.3"/>
                        <line x1="90" y1="10" x2="90" y2="170" stroke="#CDA634" stroke-width="1" opacity="0.3"/>
                        <circle cx="90" cy="90" r="6" fill="#CDA634" opacity="0.8"/>
                        <circle cx="55" cy="65" r="3" fill="#A61C26" opacity="0.9"/>
                        <circle cx="130" cy="75" r="3" fill="#A61C26" opacity="0.9"/>
                        <circle cx="110" cy="115" r="3" fill="#A61C26" opacity="0.9"/>
                        <line x1="90" y1="90" x2="55" y2="65" stroke="#CDA634" stroke-width="0.8" opacity="0.5"/>
                        <line x1="90" y1="90" x2="130" y2="75" stroke="#CDA634" stroke-width="0.8" opacity="0.5"/>
                        <line x1="90" y1="90" x2="110" y2="115" stroke="#CDA634" stroke-width="0.8" opacity="0.5"/>
                      </svg>
                    </div>`;
                }
              }}
            />
          </div>

          {/* Stats card */}
          <div className="bg-white rounded-2xl shadow-md px-8 py-5 flex items-center justify-around border border-gray-100">
            <div className="text-center">
              <p className="text-3xl font-extrabold" style={{ color: "#CDA634" }}>
                99.9%
              </p>
              <p className="text-xs text-gray-400 tracking-widest uppercase mt-1 font-medium">
                Uptime
              </p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="text-3xl font-extrabold" style={{ color: "#A61C26" }}>
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
