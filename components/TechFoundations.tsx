"use client";

import {
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiPython,
  SiReact,
  SiDocker,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

type Tech = {
  name: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
  bg: string;
};

const technologies: Tech[] = [
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    color: "#68A063",
    bg: "rgba(104,160,99,0.12)",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    color: "#336791",
    bg: "rgba(51,103,145,0.12)",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    bg: "rgba(49,120,198,0.12)",
  },
  {
    name: "Python",
    Icon: SiPython,
    color: "#3776AB",
    bg: "rgba(55,118,171,0.12)",
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.12)",
  },
  {
    name: "Docker",
    Icon: SiDocker,
    color: "#2496ED",
    bg: "rgba(36,150,237,0.12)",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "#000000",
    bg: "rgba(0,0,0,0.07)",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "#47A248",
    bg: "rgba(71,162,72,0.12)",
  },
];

// Duplicate for seamless infinite loop (-50% translateX lands exactly at the start of the second copy)
const allTechs = [...technologies, ...technologies];

function TechCard({ tech }: { tech: Tech }) {
  const { name, Icon, color, bg } = tech;
  return (
    <div
      className="flex flex-col items-center gap-3 cursor-default group select-none"
      style={{ minWidth: "120px" }}
    >
      {/* White card */}
      <div
        className="w-[92px] h-[92px] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        {/* Coloured icon background bubble */}
        <div
          className="w-[58px] h-[58px] rounded-xl flex items-center justify-center"
          style={{ background: bg }}
        >
          <Icon size={30} color={color} />
        </div>
      </div>
      {/* Label */}
      <span
        className="text-[11px] font-semibold tracking-wide transition-colors duration-200 group-hover:text-gray-700"
        style={{ color: "rgba(0,0,0,0.38)" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function TechFoundations() {
  return (
    <section
      id="technology"
      style={{ background: "#F7F4EF" }}
      className="py-24 overflow-hidden"
    >
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

      {/* ── Infinite marquee ── */}
      <div className="relative w-full py-6">
        {/* Left edge fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #F7F4EF 0%, rgba(247,244,239,0) 100%)",
          }}
        />
        {/* Right edge fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #F7F4EF 0%, rgba(247,244,239,0) 100%)",
          }}
        />

        {/* Scrolling track — pausable on hover */}
        <div
          className="flex gap-6 animate-marquee"
          style={{ width: "max-content" }}
        >
          {allTechs.map((tech, i) => (
            <TechCard key={i} tech={tech} />
          ))}
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-8 max-w-xl mx-auto px-6 leading-relaxed">
        We leverage best-in-class technologies to build robust, scalable
        solutions that drive enterprise transformation.
      </p>
    </section>
  );
}
