"use client";

import { useState } from "react";

interface ContactFormProps {
  setFormStatus: (status: "idle" | "loading" | "success" | "error") => void;
}

const inputClasses =
  "w-full px-4 py-3 border border-[--line] rounded-xl bg-white focus:ring-2 focus:ring-[--teal] focus:border-transparent outline-none transition text-[--ink] placeholder:text-[--ash]/60";

export default function ContactForm({ setFormStatus }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      setFormStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[--ink] mb-2">
            Full name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[--ink] mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[--ink] mb-2">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[--ink] mb-2">
            Clinic / company name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your clinic or company"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[--ink] mb-2">
          Subject *
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={inputClasses}
        >
          <option value="">Select a subject</option>
          <option value="demo">Request a demo</option>
          <option value="pricing">Pricing inquiry</option>
          <option value="support">Support</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[--ink] mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us how we can help..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[--ink] hover:bg-[--teal-deep] text-[--sand] font-semibold py-3.5 px-6 rounded-full transition-colors"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      <p className="text-xs text-[--ash]">
        * Required fields. We respect your privacy and will only use your
        information to respond to your inquiry.
      </p>
    </form>
  );
}
