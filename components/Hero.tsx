import Link from "next/link";
import PulseLine from "./PulseLine";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[--sand] pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Faint oversized pulse line, the page's signature, running behind the copy */}
      <PulseLine
        className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-40 w-[140%] -translate-x-[8%] opacity-[0.07]"
        color="#0e6f64"
        strokeWidth={1.5}
      />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <p className="eyebrow mb-5">AI care companion for Indian clinics</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] text-[--ink] tracking-tight">
              The quiet assistant
              <br />
              running beside <span className="italic text-[--teal]">every</span>
              <br />
              patient visit.
            </h1>
            <p className="mt-6 text-lg text-[--ash] max-w-md">
              Swasthya Sathi automates check-in, clinical notes and follow-up
              with AI built for the realities of Indian clinics, nursing
              homes and hospitals — so your team spends less time on
              paperwork and more time on care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                href="/contact"
                className="text-center bg-[--ink] hover:bg-[--teal-deep] text-[--sand] font-semibold py-3.5 px-8 rounded-full transition-colors"
              >
                Book a demo
              </Link>
              <Link
                href="/product"
                className="text-center bg-transparent border border-[--ink]/30 text-[--ink] hover:border-[--ink] font-semibold py-3.5 px-8 rounded-full transition-colors"
              >
                See the product
              </Link>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="relative">
            <div className="bg-[--ink] text-[--sand] rounded-3xl p-8 shadow-xl shadow-[--ink]/10 rotate-1">
              <p className="eyebrow mb-6 text-[--coral]">Inside a typical week</p>
              <div className="space-y-5">
                <div>
                  <p className="font-mono text-3xl font-medium">60%</p>
                  <p className="text-sm text-[--sage]/70 mt-1">
                    less time spent on admin and documentation
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="font-mono text-3xl font-medium">24/7</p>
                  <p className="text-sm text-[--sage]/70 mt-1">
                    automated check-in and reminders, no extra staff
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="font-mono text-3xl font-medium">₹0</p>
                  <p className="text-sm text-[--sage]/70 mt-1">
                    upfront cost during your 30-day trial
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-2xl bg-[--coral]/15 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
