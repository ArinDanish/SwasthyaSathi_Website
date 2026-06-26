import Link from "next/link";
import PulseLine from "./PulseLine";

export default function CTA() {
  return (
    <section className="relative bg-[--teal-deep] text-[--sand] py-20 overflow-hidden">
      <PulseLine
        className="pointer-events-none absolute inset-x-0 top-0 h-16 w-full opacity-20"
        color="#f7f2e7"
        strokeWidth={1.5}
      />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4 text-[--coral]">Ready when you are</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5">
            Let&apos;s see it run on a real day at your clinic.
          </h2>
          <p className="text-lg text-[--sage]/80 mb-9">
            A 20-minute walkthrough, using your own patient flow — no slides,
            no sales script.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[--coral] hover:bg-[--coral]/90 text-[--ink] font-semibold py-3.5 px-9 rounded-full transition-colors"
          >
            Request a demo today
          </Link>
        </div>
      </div>
    </section>
  );
}
