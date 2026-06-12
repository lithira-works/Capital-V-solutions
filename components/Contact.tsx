"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", company: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={{ background: "#F7F4EF" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="space-y-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
            style={{ borderColor: "#A61C26", color: "#A61C26", background: "rgba(166,28,38,0.06)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#A61C26" }} />
            Let&apos;s Talk
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Ready to modernize your technology backbone?
          </h2>

          <p className="text-gray-500 text-base leading-relaxed max-w-sm">
            Let&apos;s explore how Capital V Solutions can support your next initiative.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#A61C26" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="white" strokeWidth="1.4" />
                <path d="M1 5l7 5 7-5" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              Schedule a Discovery Call
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-gray-300 text-gray-800 hover:border-gray-500 hover:bg-gray-50 transition-all active:scale-95"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 3.5C2 2.67 2.67 2 3.5 2h9C13.33 2 14 2.67 14 3.5v9c0 .83-.67 1.5-1.5 1.5H9l-3 2v-2H3.5C2.67 14 2 13.33 2 12.5v-9Z" stroke="#374151" strokeWidth="1.4" />
                <path d="M5 6h6M5 9h4" stroke="#374151" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Contact Us
            </button>
          </div>
        </div>

        {/* Right – Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Send us a message</h3>

          {submitted && (
            <div
              className="mb-5 px-4 py-3 rounded-xl text-sm font-medium"
              style={{ background: "rgba(205,166,52,0.1)", color: "#9a7c1f", border: "1px solid rgba(205,166,52,0.3)" }}
            >
              ✓ Message sent! We&apos;ll get back to you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="4" r="2.5" stroke="#CDA634" strokeWidth="1.2" />
                    <path d="M1 11c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#CDA634" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                  style={{ "--tw-ring-color": "rgba(205,166,52,0.4)" } as React.CSSProperties}
                />
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <rect x="1" y="3" width="10" height="7" rx="1.5" stroke="#CDA634" strokeWidth="1.2" />
                    <path d="M4 3V2.5A1.5 1.5 0 0 1 8 2.5V3" stroke="#CDA634" strokeWidth="1.2" />
                  </svg>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                  style={{ "--tw-ring-color": "rgba(205,166,52,0.4)" } as React.CSSProperties}
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="2" width="10" height="8" rx="1.5" stroke="#CDA634" strokeWidth="1.2" />
                  <path d="M1 4l5 3 5-3" stroke="#CDA634" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                style={{ "--tw-ring-color": "rgba(205,166,52,0.4)" } as React.CSSProperties}
              />
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1.5" width="10" height="9" rx="1.5" stroke="#CDA634" strokeWidth="1.2" />
                  <path d="M3 4.5h6M3 7h4" stroke="#CDA634" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-none"
                style={{ "--tw-ring-color": "rgba(205,166,52,0.4)" } as React.CSSProperties}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: "#A61C26" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8l10-5-3 5 3 5-10-5Z" fill="white" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
