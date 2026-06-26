"use client";

import { useState } from "react";

export default function ProductDetails() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "features"
  );

  const sections = [
    {
      id: "features",
      title: "Key features",
      content: [
        {
          heading: "Smart patient check-in",
          description:
            "Automated registration and data capture with AI-powered form intelligence.",
        },
        {
          heading: "Appointment management",
          description:
            "Intelligent scheduling that optimises clinic time and reduces no-shows.",
        },
        {
          heading: "Clinical documentation",
          description:
            "AI-assisted medical record creation that saves time and improves accuracy.",
        },
        {
          heading: "Real-time insights",
          description:
            "A dashboard with actionable analytics for clinic operations and patient trends.",
        },
      ],
    },
    {
      id: "technical",
      title: "Technical specifications",
      content: [
        {
          heading: "Platform",
          description: "Cloud-based, accessible from any device with an internet connection.",
        },
        {
          heading: "Security",
          description:
            "HIPAA-aligned with end-to-end encryption and regular security audits.",
        },
        {
          heading: "Integration",
          description:
            "Connects with the clinic management systems you already use.",
        },
        {
          heading: "Support",
          description:
            "24/7 customer support with a dedicated account manager.",
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing & plans",
      content: [
        {
          heading: "Starter",
          description:
            "For small clinics. From ₹5,000/month, up to 50 patients/day.",
        },
        {
          heading: "Professional",
          description:
            "For growing clinics. ₹15,000/month, up to 200 patients/day with advanced features.",
        },
        {
          heading: "Enterprise",
          description:
            "Custom solutions for large, multi-location clinics. Talk to sales for pricing.",
        },
        {
          heading: "Free trial",
          description:
            "30 days free on any plan. No credit card required.",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-[--sand]">
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">Everything in the box</p>
          <h2 className="section-title">Product details</h2>
        </div>

        <div className="space-y-3 max-w-3xl">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl border border-[--line] overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.id ? null : section.id
                  )
                }
                className="w-full px-7 py-5 flex justify-between items-center hover:bg-[--sand]/60 transition font-display text-lg font-semibold text-[--ink]"
              >
                <span>{section.title}</span>
                <span
                  className={`text-[--coral] transform transition-transform duration-300 ${
                    expandedSection === section.id ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  expandedSection === section.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                } overflow-hidden`}
              >
                <div className="min-h-0 px-7 pb-6 pt-1 border-t border-[--line] space-y-4">
                  {section.content.map((item, index) => (
                    <div
                      key={index}
                      className="pb-4 border-b border-[--line] last:border-b-0 last:pb-0"
                    >
                      <h4 className="font-semibold text-[--ink] mb-1.5">
                        {item.heading}
                      </h4>
                      <p className="text-[--ash] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-[--ink] text-[--sand] rounded-2xl p-8 mt-10 max-w-3xl">
          <h3 className="font-display text-xl font-semibold mb-3">
            Ready to get started?
          </h3>
          <p className="text-[--sage]/80 mb-5">
            Tell us about your clinic and we&apos;ll tailor a setup to your
            specific workflow and patient volume.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[--coral] hover:bg-[--coral]/90 text-[--ink] font-semibold py-2.5 px-6 rounded-full transition"
          >
            Schedule a demo
          </a>
        </div>
      </div>
    </section>
  );
}
