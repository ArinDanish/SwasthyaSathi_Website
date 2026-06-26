"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPanel() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  return (
    <div className="bg-white rounded-2xl border border-[--line] p-7 md:p-9">
      {formStatus === "success" && (
        <div className="mb-6 bg-[--sage] text-[--teal-deep] rounded-xl px-5 py-4 text-sm font-medium">
          Message sent. We&apos;ll be in touch within one business day.
        </div>
      )}
      {formStatus === "error" && (
        <div className="mb-6 bg-[--coral]/10 text-[--coral] rounded-xl px-5 py-4 text-sm font-medium">
          Something went wrong sending your message. Please try again.
        </div>
      )}
      <ContactForm setFormStatus={setFormStatus} />
    </div>
  );
}

