"use client";

const technologies = [
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <path d="M30 4L54 17.5V44.5L30 58L6 44.5V17.5L30 4Z" fill="#8CC84B" opacity="0.15" stroke="#8CC84B" strokeWidth="1.5"/>
        <text x="30" y="36" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8CC84B">Node.js</text>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <ellipse cx="30" cy="22" rx="18" ry="8" fill="#336791" opacity="0.15" stroke="#336791" strokeWidth="1.5"/>
        <path d="M12 22v16c0 4.42 8.06 8 18 8s18-3.58 18-8V22" stroke="#336791" strokeWidth="1.5"/>
        <path d="M12 30c0 4.42 8.06 8 18 8s18-3.58 18-8" stroke="#336791" strokeWidth="1.5"/>
        <text x="30" y="54" textAnchor="middle" fontSize="7" fontWeight="700" fill="#336791">PostgreSQL</text>
      </svg>
    ),
  },
  {
    name: "Azure",
    icon: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <path d="M10 46h40L35 14 22 34l-7-8L10 46Z" fill="#0078D4" opacity="0.15" stroke="#0078D4" strokeWidth="1.5" strokeLinejoin="round"/>
        <text x="30" y="56" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0078D4">Azure</text>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <path d="M20 10c0-3.31 2.69-6 6-6h8c3.31 0 6 2.69 6 6v6H20v-6Z" fill="#3670A0" opacity="0.2" stroke="#3670A0" strokeWidth="1.5"/>
        <path d="M20 16h20v14H20V16Z" stroke="#3670A0" strokeWidth="1.5"/>
        <path d="M40 30c0 3.31-2.69 6-6 6h-8c-3.31 0-6-2.69-6-6v-6h20v6Z" fill="#FFD43B" opacity="0.2" stroke="#FFD43B" strokeWidth="1.5"/>
        <text x="30" y="54" textAnchor="middle" fontSize="8" fontWeight="700" fill="#3670A0">Python</text>
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <circle cx="30" cy="30" r="4" fill="#61DAFB"/>
        <ellipse cx="30" cy="30" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
        <ellipse cx="30" cy="30" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 30 30)"/>
        <ellipse cx="30" cy="30" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 30 30)"/>
        <text x="30" y="56" textAnchor="middle" fontSize="8" fontWeight="700" fill="#61DAFB">React</text>
      </svg>
    ),
  },
  {
    name: "Power BI",
    icon: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <rect x="10" y="30" width="8" height="20" rx="2" fill="#F2C811" opacity="0.8"/>
        <rect x="22" y="22" width="8" height="28" rx="2" fill="#F2C811" opacity="0.8"/>
        <rect x="34" y="14" width="8" height="36" rx="2" fill="#F2C811" opacity="0.8"/>
        <text x="30" y="58" textAnchor="middle" fontSize="7" fontWeight="700" fill="#F2C811">Power BI</text>
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <path d="M10 36c0-3 2-5 5-5h30c3 0 5 2 5 5s-2 5-5 5H15c-3 0-5-2-5-5Z" fill="#FF9900" opacity="0.15" stroke="#FF9900" strokeWidth="1.5"/>
        <path d="M18 31l-4-10 4-10M42 31l4-10-4-10" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
        <text x="30" y="54" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FF9900">AWS</text>
      </svg>
    ),
  },
];

// Duplicate for seamless infinite loop
const allTechs = [...technologies, ...technologies];

export default function TechFoundations() {
  return (
    <section id="technology" style={{ background: "#F7F4EF" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center space-y-4">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400">Technology</p>
        <h2 className="text-5xl font-extrabold text-gray-900">
          Our Technical{" "}
          <span style={{ color: "#CDA634" }}>Foundations</span>
        </h2>
      </div>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden w-full py-8">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F7F4EF, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F7F4EF, transparent)" }}
        />

        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {allTechs.map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-3 mx-8 group cursor-default"
              style={{ minWidth: "100px" }}
            >
              <div
                className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100 group-hover:shadow-md transition-shadow duration-200"
              >
                {tech.icon}
              </div>
              <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-800 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-8 max-w-xl mx-auto px-6">
        We leverage best-in-class technologies to build robust, scalable solutions that drive
        enterprise transformation.
      </p>
    </section>
  );
}
