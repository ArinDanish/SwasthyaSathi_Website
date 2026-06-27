"use client";

import { useState } from "react";

const sections = [
  {
    id: "features",
    title: "Key features",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    content: [
      { heading: "Smart patient check-in", description: "Automated registration and data capture with AI-powered form intelligence." },
      { heading: "Appointment management", description: "Intelligent scheduling that optimises clinic time and reduces no-shows." },
      { heading: "Clinical documentation", description: "AI-assisted medical record creation that saves time and improves accuracy." },
      { heading: "Real-time insights", description: "A dashboard with actionable analytics for clinic operations and patient trends." },
    ],
  },
  {
    id: "technical",
    title: "Technical specifications",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    content: [
      { heading: "Platform", description: "Cloud-based, accessible from any device with an internet connection." },
      { heading: "Security", description: "HIPAA-aligned with end-to-end encryption and regular security audits." },
      { heading: "Integration", description: "Connects with the clinic management systems you already use." },
      { heading: "Support", description: "24/7 customer support with a dedicated account manager." },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & plans",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    content: [
      { heading: "Starter — from ₹5,000/month", description: "For small clinics handling up to 50 patients per day." },
      { heading: "Professional — ₹15,000/month", description: "For growing clinics, up to 200 patients/day with advanced features." },
      { heading: "Enterprise — custom pricing", description: "Custom solutions for large, multi-location clinic groups." },
      { heading: "Free trial — 30 days", description: "Try any plan free. No credit card required." },
    ],
  },
];

export default function ProductDetails() {
  const [expanded, setExpanded] = useState<string | null>("features");

  return (
    <section className="py-20" style={{ background: "#f5f9fd" }}>
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">Everything in the box</p>
          <h2 className="section-title">Product details</h2>
        </div>

        <div className="space-y-3 max-w-3xl">
          {sections.map((section) => {
            const open = expanded === section.id;
            return (
              <div
                key={section.id}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  background: "#ffffff",
                  borderColor: open ? "rgba(62, 174, 224, 0.4)" : "#dcedf8",
                  boxShadow: open ? "0 4px 20px rgba(27,79,156,0.08)" : "none",
                }}
              >
                <button
                  onClick={() => setExpanded(open ? null : section.id)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left transition-colors hover:bg-[#f5f9fd]"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                      style={{
                        background: open ? "#1b4f9c" : "rgba(27,79,156,0.08)",
                        color: open ? "#ffffff" : "#1b4f9c",
                      }}
                    >
                      {section.icon}
                    </span>
                    <span
                      className="font-display font-semibold text-lg"
                      style={{ color: open ? "#1b4f9c" : "#0e2540" }}
                    >
                      {section.title}
                    </span>
                  </div>
                  <span
                    className="text-xl transition-transform duration-300 flex-shrink-0"
                    style={{
                      color: "#3eaee0",
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▾
                  </span>
                </button>

                <div
                  className="grid transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    gridTemplateRows: open ? "1fr" : "0fr",
                    opacity: open ? 1 : 0,
                  }}
                >
                  <div className="min-h-0">
                    <div
                      className="px-7 pb-6 pt-1 border-t space-y-4"
                      style={{ borderColor: "#dcedf8" }}
                    >
                      {section.content.map((item, i) => (
                        <div
                          key={i}
                          className="pb-4 last:pb-0 last:border-b-0 border-b"
                          style={{ borderColor: "#f0f7ff" }}
                        >
                          <h4
                            className="font-semibold mb-1.5"
                            style={{ color: "#0e2540" }}
                          >
                            {item.heading}
                          </h4>
                          <p className="text-sm leading-relaxed" style={{ color: "#5a7a96" }}>
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA card */}
        <div
          className="rounded-2xl p-8 mt-10 max-w-3xl text-white"
          style={{
            background: "linear-gradient(135deg, #0f3270 0%, #1b4f9c 60%, #2d69c4 100%)",
            boxShadow: "0 8px 32px rgba(27,79,156,0.25)",
          }}
        >
          <h3 className="font-display font-bold text-xl mb-3">
            Ready to get started?
          </h3>
          <p className="mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
            Tell us about your clinic and we&apos;ll tailor a setup to your
            specific workflow and patient volume.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold py-2.5 px-6 rounded-full text-white transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "rgba(62,174,224,0.25)",
              border: "1px solid rgba(62,174,224,0.4)",
            }}
          >
            Schedule a demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
