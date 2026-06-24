const differentiators = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#CDA634" strokeWidth="1.6" />
        <circle cx="10" cy="10" r="3" stroke="#CDA634" strokeWidth="1.6" />
        <path
          d="M10 2v2M10 16v2M2 10h2M16 10h2"
          stroke="#CDA634"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Business-first engineering",
    description:
      "We start from business outcomes, not just technology requirements.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 6h12M4 10h8M4 14h10"
          stroke="#CDA634"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#CDA634" strokeWidth="1.6" />
      </svg>
    ),
    title: "End-to-end delivery",
    description:
      "From architecture and design to implementation and long-term support.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="#CDA634" strokeWidth="1.6" />
        <path
          d="M7 9h6M7 12h4"
          stroke="#CDA634"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Modern, proven stack",
    description:
      "We leverage proven cloud, data, and AI technologies that scale.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2C10 2 4 5.5 4 10.5C4 13.538 6.686 16 10 16C13.314 16 16 13.538 16 10.5C16 5.5 10 2 10 2Z"
          stroke="#CDA634"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M10 9v4M10 7v.5"
          stroke="#CDA634"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Embedded partnership",
    description:
      "We work as an extended part of your team, not just an external vendor.",
  },
];

export default function CapitalVDifference() {
  return (
    <section style={{ background: "#111111" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
            style={{
              borderColor: "rgba(205,166,52,0.4)",
              color: "#CDA634",
              background: "rgba(205,166,52,0.07)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#CDA634" }}
            />
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            The Capital{" "}
            <span style={{ color: "#CDA634" }}>V</span>{" "}
            Difference
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            We don&apos;t just build technology—we create{" "}
            <span style={{ color: "#CDA634" }}>transformative solutions</span>
            <br />
            that drive real business value.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 space-y-4 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: "#1a1a1a",
                border: "1px solid #252525",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "#242424" }}
              >
                {d.icon}
              </div>
              <h3 className="text-white font-bold text-base leading-snug">
                {d.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
