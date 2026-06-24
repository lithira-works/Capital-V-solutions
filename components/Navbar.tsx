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
          if (rect.top <= 80) {
            setActive(label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("Home", "#home");
          }}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          {/* Logo image as the V icon */}
          <div
            className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow"
            style={{
              background: "linear-gradient(135deg, #A61C26 50%, #CDA634 100%)",
            }}
          >
            <Image
              src="/capitalvimage.PNG"
              alt="Capital V Solutions Logo"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-[15px] text-gray-900 tracking-tight">
            Capital <span style={{ color: "#CDA634" }}>V</span> Solutions
          </span>
        </a>

        {/* Desktop Nav pills */}
        <div className="hidden md:flex items-center border border-gray-200 rounded-full px-2 py-1 gap-1 bg-white shadow-sm">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.label, link.href)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                active === link.label
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA button – desktop */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNav("Contact", "#contact")}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#A61C26" }}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path
                d="M4 4L18 18M18 4L4 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M3 6H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 11H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2 shadow-lg">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.label, link.href)}
              className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                active === link.label
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("Contact", "#contact")}
            className="mt-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white text-center"
            style={{ background: "#A61C26" }}
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}
