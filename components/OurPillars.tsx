const pillars = [
  {
    number: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="3" rx="1.5" stroke="white" strokeWidth="1.6" />
        <rect x="3" y="10" width="16" height="3" rx="1.5" stroke="white" strokeWidth="1.6" />
        <rect x="3" y="15" width="10" height="3" rx="1.5" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
    title: "Operational Backbone",
    description:
      "We build solid, scalable platforms and integrations that keep the business running reliably.",
    features: [
      "Core platforms & microservices",
      "Systems integration & APIs",
      "Reliability & performance",
    ],
  },
  {
    number: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <ellipse cx="11" cy="7" rx="8" ry="3" stroke="white" strokeWidth="1.6" />
        <path d="M3 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7" stroke="white" strokeWidth="1.6" />
        <path d="M3 12v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
    title: "Data Advantage",
    description:
      "We help companies unlock and structure their data for analytics and decision-making.",
    features: [
      "Data platforms & warehouses",
      "Analytics & BI foundations",
      "Self-service data access",
    ],
  },
  {
    number: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3" stroke="white" strokeWidth="1.6" />
        <path
          d="M11 4V2M11 20v-2M4 11H2M20 11h-2M6.34 6.34 4.93 4.93M17.07 17.07l-1.41-1.41M6.34 15.66l-1.41 1.41M17.07 4.93l-1.41 1.41"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Intelligent Efficiency",
    description:
      "We apply AI and automation to reduce manual work and drive efficiency.",
    features: [
      "AI/ML solutions",
      "Automation & workflows",
      "Intelligent decision support",
    ],
  },
];

export default function OurPillars() {
  return (
    <section style={{ background: "#F7F4EF" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
            style={{
              borderColor: "#CDA634",
              color: "#CDA634",
              background: "rgba(205,166,52,0.08)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#CDA634" }}
            />
            Our Foundation
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900">Our Pillars</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            We focus on the{" "}
            <span style={{ color: "#CDA634" }}>thr</span>ee critical layers of
            modern{" "}
            <span style={{ color: "#CDA634" }}>en</span>terprise technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                border: "1px solid rgba(205,166,52,0.25)",
              }}
            >
              {/* Background number */}
              <span
                className="absolute top-4 right-6 text-7xl font-black select-none pointer-events-none"
                style={{ color: "rgba(205,166,52,0.10)", lineHeight: 1 }}
              >
                {p.number}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "#111111" }}
              >
                {p.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {p.description}
              </p>

              <ul className="space-y-2">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#CDA634" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
