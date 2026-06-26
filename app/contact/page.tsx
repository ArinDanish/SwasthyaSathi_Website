"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  return (
    <section className="bg-[--sand] py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Get in touch</p>
          <h1 className="section-title">Let's talk about your clinic</h1>
          <p className="section-subtitle">
            Tell us a bit about how your clinic runs today — we'll come back
            with a setup that fits, not a generic demo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[--line] p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[--ash] mb-2">
                Email
              </h3>
              <a
                href="mailto:contact@swasthyasathi.com"
                className="font-display text-lg font-semibold text-[--ink] hover:text-[--teal]"
              >
                contact@swasthyasathi.com
              </a>
            </div>
            <div className="bg-white rounded-2xl border border-[--line] p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[--ash] mb-2">
                Response time
              </h3>
              <p className="font-display text-lg font-semibold text-[--ink]">
                Within one business day
              </p>
            </div>
            <div className="bg-[--ink] text-[--sand] rounded-2xl p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[--coral] mb-2">
                For existing clinics
              </h3>
              <p className="text-[--sage]/80 text-sm leading-relaxed">
                Already using Swasthya Sathi? Reach your account manager
                directly through the in-app support panel for the fastest
                response.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-[--line] p-7 md:p-9">
            {formStatus === "success" && (
              <div className="mb-6 bg-[--sage] text-[--teal-deep] rounded-xl px-5 py-4 text-sm font-medium">
                Message sent. We'll be in touch within one business day.
              </div>
            )}
            {formStatus === "error" && (
              <div className="mb-6 bg-[--coral]/10 text-[--coral] rounded-xl px-5 py-4 text-sm font-medium">
                Something went wrong sending your message. Please try again.
              </div>
            )}
            <ContactForm setFormStatus={setFormStatus} />
          </div>
        </div>
      </div>
    </section>
  );
}
