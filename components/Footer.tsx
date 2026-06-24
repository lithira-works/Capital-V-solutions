"use client";

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0d0d0d" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black"
                style={{
                  background:
                    "linear-gradient(135deg, #A61C26 50%, #CDA634 100%)",
                }}
              >
                V
              </span>
              <span className="font-semibold text-[15px] text-white tracking-tight">
                Capital <span style={{ color: "#CDA634" }}>V</span> Solutions
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Building technology backbones that power modern enterprises through
              robust platforms, intelligent data foundations, and AI-driven
              automation.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {[
                {
                  label: "LinkedIn",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M4 6.5v5M4 4.5v.5M7 11.5V8.5c0-1.1.9-2 2-2s2 .9 2 2v3M7 6.5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 12L6.5 7.5M14 4l-4.5 4.5M6.5 7.5L14 4M6.5 7.5L2 12M6.5 7.5L9.5 12H14L9.5 7.5M6.5 7.5L2 4H6L9.5 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer"
                  style={{ background: "#1a1a1a" }}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "#CDA634" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Operational Backbone",
                "Data Advantage",
                "Intelligent Efficiency",
                "AI & Automation",
              ].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "#CDA634" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Our Approach", href: "#approach" },
                { label: "Technology Stack", href: "#technology" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Capital V Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-gray-500 hover:text-gray-300 text-xs transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button className="text-gray-500 hover:text-gray-300 text-xs transition-colors cursor-pointer">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
