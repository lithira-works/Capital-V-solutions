const partners = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#CDA634" strokeWidth="1.6" />
        <path d="M3 9h18" stroke="#CDA634" strokeWidth="1.6" />
        <path d="M8 4V2M16 4V2" stroke="#CDA634" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 14h4M7 17h6" stroke="#CDA634" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Mid-market & Enterprise",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3" stroke="#CDA634" strokeWidth="1.6" />
        <path d="M3 20c0-4 3.58-7 8-7h2c4.42 0 8 3 8 7" stroke="#CDA634" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 5l1.5 1.5M18 3l-0.5 2M20 5l-2 0.5" stroke="#CDA634" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Data & Innovation Teams",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l4-4 4 4 4-8 4 4" stroke="#CDA634" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21h18" stroke="#CDA634" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Strategy & Operations Leaders",
  },
];

export default function WhoWePartnerWith() {
  return (
    <section style={{ background: "#111111" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
            style={{ borderColor: "#CDA634", color: "#CDA634", background: "rgba(205,166,52,0.07)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#CDA634" }} />
            Our Clients
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Who We Partner With
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {partners.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col items-center justify-center gap-5 text-center hover:-translate-y-1 transition-transform duration-300 cursor-default"
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "#242424" }}
              >
                {p.icon}
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug">{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
