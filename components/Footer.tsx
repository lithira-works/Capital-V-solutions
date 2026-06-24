"use client";

import Image from "next/image";

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 90; // Adjust scroll offset to align beautifully with the floating navbar
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
    <footer className="relative bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      {/* Dynamic ambient glass glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-[#CDA634]/6 blur-[120px] pointer-events-none animate-slow-glow" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#A61C26]/4 blur-[130px] pointer-events-none" />

      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#CDA634]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="space-y-5 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative p-[1px] rounded-xl overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-[#CDA634] to-[#A61C26] opacity-80" />
                <div className="relative w-9 h-9 rounded-[11px] overflow-hidden bg-neutral-950 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Image
                    src="/capitalvimage.PNG"
                    alt="Capital V Solutions Logo"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              <span className="font-semibold text-[15px] text-white tracking-tight">
                Capital <span style={{ color: "#CDA634" }} className="font-bold">V</span> Solutions
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Building technology backbones that power modern enterprises
              through robust platforms, intelligent data foundations, and
              AI-driven automation.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {[
                {
                  label: "LinkedIn",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M4 6.5v5M4 4.5v.5M7 11.5V8.5c0-1.1.9-2 2-2s2 .9 2 2v3M7 6.5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  ),
                  color: "#CDA634",
                },
                {
                  label: "Twitter",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M2 12L6.5 7.5M14 4l-4.5 4.5M6.5 7.5L14 4M6.5 7.5L2 12M6.5 7.5L9.5 12H14L9.5 7.5M6.5 7.5L2 4H6L9.5 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  color: "#A61C26",
                },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white bg-white/5 border border-white/8 hover:border-white/20 transition-all duration-300 hover:scale-110 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "#CDA634" }}
            >
              Services
            </h4>
            <ul className="space-y-3.5">
              {[
                "Operational Backbone",
                "Data Advantage",
                "Intelligent Efficiency",
                "AI & Automation",
              ].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 hover:text-white text-sm transition-all duration-200 cursor-pointer inline-block hover:translate-x-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "#CDA634" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: "Our Approach", href: "#approach" },
                { label: "Technology Stack", href: "#technology" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-all duration-200 cursor-pointer text-left hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Capital V Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </button>
            <button className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200 cursor-pointer">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
