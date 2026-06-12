"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center"
      style={{ background: "#F7F4EF" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div className="space-y-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
            style={{ borderColor: "#CDA634", color: "#CDA634", background: "rgba(205,166,52,0.07)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#CDA634" }}
            />
            Enterprise Technology
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Build technology{" "}
            <br className="hidden sm:block" />
            that{" "}
            <span style={{ color: "#CDA634" }}>powers</span>{" "}
            your
            <br />
            business
          </h1>

          <p className="text-base text-gray-500 leading-relaxed max-w-md">
            Capital V Solutions helps enterprises design robust platforms,
            intelligent data foundations, and AI-driven automation that
            transform business operations.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#A61C26" }}
            >
              Talk to an Expert
            </button>
            <button
              className="px-6 py-3 rounded-full text-sm font-semibold border border-gray-300 text-gray-800 hover:border-gray-500 transition-all hover:bg-gray-50 active:scale-95 flex items-center gap-2"
            >
              View Our Approach
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex flex-col gap-4">
          {/* Globe image */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 relative">
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
                    "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3a3a3a 100%)";
                  parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;"><svg width="120" height="120" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="55" stroke="#CDA634" stroke-width="2" fill="none"/><ellipse cx="60" cy="60" rx="28" ry="55" stroke="#CDA634" stroke-width="1.5" fill="none"/><line x1="5" y1="60" x2="115" y2="60" stroke="#CDA634" stroke-width="1.5"/><ellipse cx="60" cy="60" rx="55" ry="22" stroke="#CDA634" stroke-width="1.5" fill="none"/></svg></div>`;
                }
              }}
            />
          </div>

          {/* Stats card */}
          <div className="bg-white rounded-2xl shadow-md px-8 py-5 flex items-center justify-around">
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
