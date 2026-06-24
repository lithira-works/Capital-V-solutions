"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((l) => ({
        label: l.label,
        el: document.querySelector(l.href),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const { label, el } = sections[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          // Offset to trigger active states correctly
          if (rect.top <= 120) {
            setActive(label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call handler once to set correct state on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 90; // Adjust scroll margin to account for floating header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-500">
      <div
        className={`mx-auto transition-all duration-500 rounded-full ${
          scrolled
            ? "max-w-5xl bg-[#111111]/75 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)] py-2.5 px-6"
            : "max-w-7xl bg-[#111111]/40 backdrop-blur-md border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] py-3 px-8"
        }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("Home", "#home");
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Logo image as the V icon */}
            <div className="relative p-[1px] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-br from-[#CDA634] to-[#A61C26] opacity-80" />
              <div className="relative w-9 h-9 rounded-[11px] overflow-hidden bg-neutral-950 flex items-center justify-center flex-shrink-0 shadow-inner">
                <Image
                  src="/capitalvimage.PNG"
                  alt="Capital V Solutions Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <span className="font-semibold text-[15px] text-white tracking-tight">
              Capital <span style={{ color: "#CDA634" }} className="font-bold">V</span> Solutions
            </span>
          </a>

          {/* Desktop Nav pills */}
          <div className="hidden md:flex items-center border border-white/8 rounded-full px-1.5 py-1 gap-1 bg-white/5 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
            {links.map((link) => {
              const isActive = active === link.label;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.label, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "text-white border border-[#CDA634]/35 shadow-[0_0_12px_rgba(205,166,52,0.15)]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(135deg, rgba(205, 166, 52, 0.15) 0%, rgba(166, 28, 38, 0.08) 100%)",
                        }
                      : {}
                  }
                >
                  {/* Subtle active background glow */}
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#CDA634] to-transparent opacity-80" />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA button – desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav("Contact", "#contact")}
              className="relative group px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              {/* Premium Background Gradient */}
              <span className="absolute inset-0 bg-[#CDA634] group-hover:opacity-90 transition-opacity" />
              {/* Moving Shimmer Reflection */}
              <span className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />
              {/* Light Edge Glow */}
              <span className="absolute inset-0 border border-white/20 rounded-full" />
              <span className="relative z-10">Get in Touch</span>
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <path
                  d="M4 4L18 18M18 4L4 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M3 6H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M3 11H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M3 16H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown - Glass Box floating structure */}
      {menuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 p-3 bg-[#111111]/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex flex-col gap-1.5 animate-fade-up">
          {links.map((link) => {
            const isActive = active === link.label;
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.label, link.href)}
                className={`text-left px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-[#CDA634] bg-white/5 border border-[#CDA634]/25 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNav("Contact", "#contact")}
            className="relative mt-2 w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white overflow-hidden text-center cursor-pointer shadow-lg"
          >
            <span className="absolute inset-0 bg-[#CDA634]" />
            <span className="absolute inset-0 animate-shimmer opacity-25" />
            <span className="relative z-10">Get in Touch</span>
          </button>
        </div>
      )}
    </header>
  );
}
