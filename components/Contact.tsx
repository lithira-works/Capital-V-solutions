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
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="space-y-8 lg:pt-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
            style={{
              borderColor: "#A61C26",
              color: "#A61C26",
              background: "rgba(166,28,38,0.06)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#A61C26" }}
            />
            Let&apos;s Talk
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Ready to modernize your technology backbone?
          </h2>

          <p className="text-gray-500 text-base leading-relaxed max-w-sm">
            Let&apos;s explore how Capital V Solutions can support your next
            initiative. We typically respond within one business day.
          </p>

          {/* Contact info blocks */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(205,166,52,0.1)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="3" width="16" height="12" rx="2" stroke="#CDA634" strokeWidth="1.4" />
                  <path d="M1 5l8 6 8-6" stroke="#CDA634" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-gray-600 text-sm">hello@capitalvsolutions.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(205,166,52,0.1)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 4.5A1.5 1.5 0 0 1 4.5 3h1.379a.75.75 0 0 1 .7.483l.824 2.196a.75.75 0 0 1-.17.803l-.98.98a9.735 9.735 0 0 0 4.285 4.285l.98-.98a.75.75 0 0 1 .803-.17l2.196.824a.75.75 0 0 1 .483.7V13.5A1.5 1.5 0 0 1 13.5 15C7.149 15 3 10.851 3 4.5Z"
                    stroke="#CDA634"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-600 text-sm">Schedule a Discovery Call</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 shadow-sm"
              style={{ background: "#A61C26" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="white" strokeWidth="1.4" />
                <path d="M1 5l7 5 7-5" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              Schedule a Discovery Call
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-gray-300 text-gray-800 hover:border-gray-500 hover:bg-gray-50 transition-all active:scale-95">
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
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Send us a message
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            We&apos;ll get back to you within one business day.
          </p>

          {submitted && (
            <div
              className="mb-5 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2"
              style={{
                background: "rgba(205,166,52,0.1)",
                color: "#9a7c1f",
                border: "1px solid rgba(205,166,52,0.3)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#9a7c1f" strokeWidth="1.4" />
                <path d="M5 8l2 2 4-4" stroke="#9a7c1f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Message sent! We&apos;ll get back to you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98] shadow-sm"
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
