export default function Challenge() {
  const roadblocks = [
    "Data trapped in silos, inaccessible for decision making",
    "Manual processes slowing down operations",
    "Unreliable integrations causing system downtime",
    "Tech debt accumulating faster than features",
    "Difficulty scaling infrastructure with demand",
  ];

  return (
    <section id="services" style={{ background: "#111111" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="space-y-6">
          <p
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#A61C26" }}
          >
            The Challenge
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            Ambitious goals.
            <br />
            <span className="text-gray-500">Fragile tech foundations.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-base max-w-md">
            Many enterprises have big digital ambitions but are held back by
            legacy systems, siloed data, and fragile integrations. Instead of
            accelerating the business, technology becomes the bottleneck that
            stalls growth and innovation.
          </p>
        </div>

        {/* Right – Roadblocks card */}
        <div
          className="rounded-2xl p-8 space-y-5"
          style={{ border: "1px solid #CDA634", background: "rgba(205,166,52,0.04)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "#A61C26" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 2V5L7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className="text-white font-bold text-lg">Common Roadblocks</h3>
          </div>

          <ul className="space-y-4">
            {roadblocks.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ border: "1.5px solid #CDA634" }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path
                      d="M1.5 4.5L3 6L6.5 2"
                      stroke="#CDA634"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
