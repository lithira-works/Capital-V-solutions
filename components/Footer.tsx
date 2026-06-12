"use client";

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <span
                className="w-7 h-7 rounded flex items-center justify-center text-white text-xs font-black"
                style={{ background: "linear-gradient(135deg, #A61C26 50%, #CDA634 100%)" }}
              >
                V
              </span>
              <span className="font-semibold text-[15px] text-white tracking-tight">
                Capital <span style={{ color: "#CDA634" }}>V</span> Solutions
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Building technology backbones that power modern enterprises through robust platforms,
              intelligent data foundations, and AI-driven automation.
            </p>
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
