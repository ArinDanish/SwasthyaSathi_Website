import Link from "next/link";
import PulseLine from "./PulseLine";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--ink] text-[--sand]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[--coral] text-[--ink]">
                <PulseLine className="h-3 w-6" strokeWidth={4} />
              </span>
              <span className="font-display text-lg font-semibold">Swasthya Sathi</span>
            </div>
            <p className="text-sm text-[--sage]/70 leading-relaxed">
              An AI care companion that runs alongside Indian clinics, nursing
              homes and hospitals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="eyebrow mb-4 text-[--coral]">Product</h4>
            <ul className="space-y-3 text-sm text-[--sage]/80">
              <li>
                <Link href="/product" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-white transition">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="eyebrow mb-4 text-[--coral]">Company</h4>
            <ul className="space-y-3 text-sm text-[--sage]/80">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="eyebrow mb-4 text-[--coral]">Legal</h4>
            <ul className="space-y-3 text-sm text-[--sage]/80">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[--sage]/60">
              © {currentYear} Swasthya Sathi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[--sage]/70 hover:text-white transition text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-[--sage]/70 hover:text-white transition text-sm">
                Twitter
              </a>
              <a href="#" className="text-[--sage]/70 hover:text-white transition text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
