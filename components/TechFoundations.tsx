"use client";

import React from "react";

const technologies = [
  {
    name: "Node.js",
    color: "#68A063",
    bg: "rgba(104,160,99,0.1)",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <path d="M20 4L34 12.5V27.5L20 36L6 27.5V12.5L20 4Z" fill="#68A063" opacity="0.15" stroke="#68A063" strokeWidth="1.2" />
        <text x="20" y="24" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#68A063" fontFamily="system-ui, sans-serif">node</text>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    bg: "rgba(51,103,145,0.1)",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <ellipse cx="20" cy="13" rx="12" ry="5" fill="#336791" opacity="0.15" stroke="#336791" strokeWidth="1.2" />
        <path d="M8 13v10c0 2.76 5.37 5 12 5s12-2.24 12-5V13" stroke="#336791" strokeWidth="1.2" />
        <path d="M8 18c0 2.76 5.37 5 12 5s12-2.24 12-5" stroke="#336791" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: "Azure",
    color: "#0078D4",
    bg: "rgba(0,120,212,0.1)",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <path d="M6 32h28L23 9 15 22l-5-5L6 32Z" fill="#0078D4" opacity="0.15" stroke="#0078D4" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3B7BBF",
    bg: "rgba(59,123,191,0.1)",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <path d="M14 7c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v4H14V7Z" fill="#3B7BBF" opacity="0.2" stroke="#3B7BBF" strokeWidth="1.2" />
        <rect x="14" y="11" width="12" height="9" stroke="#3B7BBF" strokeWidth="1.2" />
        <path d="M26 20c0 2.21-1.79 4-4 4h-4c-2.21 0-4-1.79-4-4v-4h12v4Z" fill="#FFD43B" opacity="0.2" stroke="#FFD43B" strokeWidth="1.2" />
        <circle cx="16" cy="9" r="1" fill="#3B7BBF" />
        <circle cx="24" cy="31" r="1" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: "React",
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.1)",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 20 20)" />
      </svg>
    ),
  },
  {
    name: "Power BI",
    color: "#F2C811",
    bg: "rgba(242,200,17,0.1)",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <rect x="4" y="22" width="7" height="14" rx="1.5" fill="#F2C811" />
        <rect x="14" y="16" width="7" height="20" rx="1.5" fill="#F2C811" />
        <rect x="24" y="10" width="7" height="26" rx="1.5" fill="#F2C811" />
        <rect x="34" y="5" width="3" height="31" rx="1.5" fill="#F2C811" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "AWS",
    color: "#FF9900",
    bg: "rgba(255,153,0,0.1)",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <path d="M8 26c0-2 1.5-3.5 3.5-3.5h17c2 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5h-17C9.5 29.5 8 28 8 26Z" fill="#FF9900" opacity="0.15" stroke="#FF9900" strokeWidth="1.2" />
        <path d="M13 22.5l-3-7.5 3-7.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M27 22.5l3-7.5-3-7.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#111111",
    bg: "rgba(0,0,0,0.06)",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <circle cx="20" cy="20" r="16" fill="#000" opacity="0.06" stroke="#111" strokeWidth="1.2" />
        <text x="20" y="17" textAnchor="middle" fontSize="6" fontWeight="900" fill="#111" fontFamily="system-ui">NEXT</text>
        <text x="20" y="25" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#555" fontFamily="system-ui">.JS</text>
      </svg>
    ),
  },
];

// Duplicate for seamless infinite loop
const allTechs = [...technologies, ...technologies];

function TechCard({
  tech,
}: {
  tech: { name: string; color: string; bg: string; icon: React.ReactNode };
}) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 cursor-default group select-none"
      style={{ minWidth: "110px" }}
    >
      <div
        className="w-[88px] h-[88px] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
        style={{
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ background: tech.bg }}
        >
          {tech.icon}
        </div>
      </div>
      <span
        className="text-[11px] font-semibold tracking-wide"
        style={{ color: "rgba(0,0,0,0.45)" }}
      >
        {tech.name}
      </span>
    </div>
  );
}

export default function TechFoundations() {
  return (
    <section id="technology" style={{ background: "#F7F4EF" }} className="py-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center space-y-4">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400">
          Technology
        </p>
        <h2 className="text-5xl font-extrabold text-gray-900">
          Our Technical{" "}
          <span style={{ color: "#CDA634" }}>Foundations</span>
        </h2>
        <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
          Best-in-class tools chosen for performance, scalability, and
          long-term reliability.
        </p>
      </div>

      {/* ── Single Marquee Row ── */}
      <div className="relative w-full py-4">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F7F4EF 0%, transparent 100%)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F7F4EF 0%, transparent 100%)" }}
        />

        <div
          className="flex gap-5 animate-marquee"
          style={{ width: "max-content" }}
        >
          {allTechs.map((tech, i) => (
            <TechCard key={i} tech={tech} />
          ))}
        </div>
      </div>

      {/* Footer note */}
      <p className="text-center text-gray-400 text-sm mt-10 max-w-xl mx-auto px-6 leading-relaxed">
        We leverage best-in-class technologies to build robust, scalable
        solutions that drive enterprise transformation.
      </p>
    </section>
  );
}
