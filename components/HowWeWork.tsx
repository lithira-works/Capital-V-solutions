const steps = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="12" cy="12" r="7" stroke="#111" strokeWidth="2" />
        <path d="M17 17L22 22" stroke="#111" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Discover & Diagnose",
    description:
      "Understand business goals, current systems, and constraints.",
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M6 20L10 16L14 20L20 8"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="8" r="2" fill="#111" />
      </svg>
    ),
    title: "Design & Architect",
    description:
      "Propose a modern blueprint for platforms, data, and automation.",
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4L16.5 9.5L22.5 10.5L18.25 14.6L19.25 20.5L14 17.75L8.75 20.5L9.75 14.6L5.5 10.5L11.5 9.5L14 4Z"
          stroke="#111"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Build, Integrate & Scale",
    description:
      "Implement solutions, integrate systems, and iterate for growth.",
  },
];

export default function HowWeWork() {
  return (
    <section id="approach" style={{ background: "#F7F4EF" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
            style={{ borderColor: "#A61C26", color: "#A61C26", background: "rgba(166,28,38,0.06)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#A61C26" }} />
            Our Process
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900">
            How We Work With You
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px"
            style={{ background: "linear-gradient(90deg, #CDA634 0%, #CDA634 100%)", opacity: 0.3 }}
          />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-5">
              {/* Icon wrapper with number badge */}
              <div className="relative">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-100">
                  {step.icon}
                </div>
                <span
                  className="absolute -top-3 -right-3 w-7 h-7 rounded-full text-white text-xs font-extrabold flex items-center justify-center"
                  style={{ background: "#CDA634" }}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
