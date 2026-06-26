"use client";

import { useState } from "react";

interface Founder {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
}

const founders: { [key: string]: Founder } = {
  darshil: {
    name: "Darshil Jadeja",
    title: "Co-Founder & CTO",
    bio: "With a vision to revolutionise healthcare through technology, Darshil leads our technical innovation. He has extensive experience building scalable AI systems and healthcare technology solutions.",
    expertise: ["AI/ML", "Cloud architecture", "Healthcare tech", "Product strategy"],
  },
  arin: {
    name: "Arin Danish",
    title: "Co-Founder & CEO",
    bio: "Arin brings strategic vision and deep industry knowledge to guide Swasthya Sathi's mission. With a background in healthcare operations and business development, he drives the company's growth and market expansion.",
    expertise: ["Healthcare operations", "Business strategy", "Market development", "Clinical insights"],
  },
};

export default function FoundersSection() {
  const [selectedFounder, setSelectedFounder] = useState<"darshil" | "arin">(
    "darshil"
  );

  const founder = founders[selectedFounder];

  return (
    <section className="py-20 md:py-28 bg-[--sand]">
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">The people behind it</p>
          <h2 className="section-title">Meet our founders</h2>
        </div>

        {/* Founder Selection */}
        <div className="inline-flex bg-white border border-[--line] rounded-full p-1 mb-12">
          {(["darshil", "arin"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedFounder(key)}
              className={`py-2.5 px-6 rounded-full font-semibold text-sm transition-colors ${
                selectedFounder === key
                  ? "bg-[--ink] text-[--sand]"
                  : "text-[--ash] hover:text-[--ink]"
              }`}
            >
              {founders[key].name}
            </button>
          ))}
        </div>

        {/* Founder Details */}
        <div className="max-w-3xl">
          <div className="bg-white rounded-3xl border border-[--line] p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              {/* Image Section */}
              <div className="flex justify-center md:justify-start">
                <div className="w-40 h-40 bg-[--sage] rounded-2xl flex items-center justify-center">
                  <p className="text-[--ash] text-sm text-center px-4">
                    Founder photo
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-2">
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-1 text-[--ink]">
                  {founder.name}
                </h3>
                <p className="text-[--coral] font-semibold mb-4 text-sm tracking-wide">
                  {founder.title}
                </p>

                <p className="text-[--ash] mb-6 leading-relaxed">{founder.bio}</p>

                {/* Expertise */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[--ash] mb-3">
                    Areas of expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-[--sage] text-[--teal-deep] text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-[--line] flex gap-5">
                  <a href="#" className="text-[--ink] hover:text-[--teal] font-semibold text-sm">
                    LinkedIn
                  </a>
                  <a href="#" className="text-[--ink] hover:text-[--teal] font-semibold text-sm">
                    Twitter
                  </a>
                  <a
                    href="mailto:contact@swasthyasathi.com"
                    className="text-[--ash] hover:text-[--ink] font-semibold text-sm"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
