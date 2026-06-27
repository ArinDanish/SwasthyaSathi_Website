import Link from "next/link";
import Image from "next/image";
import PulseLine from "./PulseLine";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0e2540", color: "#c8dff0" }}>
      {/* Pulse divider top */}
      <div className="opacity-10">
        <PulseLine className="w-full h-10" color="#3eaee0" strokeWidth={1} />
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl">
                <Image
                  src="/logo.png"
                  alt="SwasthyaSathi"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </span>
              <span className="font-display font-bold text-lg" style={{ color: "#ffffff" }}>
                SwasthyaSathi</span>
              
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(200,223,240,0.55)" }}>
              An AI care companion that runs alongside Indian clinics, nursing
              homes and hospitals.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { label: "LinkedIn", icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>, extra: <circle cx="4" cy="4" r="2"/> },
                { label: "Twitter", icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/> },
              ].map(({ label, icon, extra }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(62,174,224,0.1)", color: "#3eaee0" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                    {extra}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#3eaee0" }}>
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              {["Features", "Pricing", "Documentation"].map((item) => (
                <li key={item}>
                  <Link
                    href="/product"
                    className="transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(200,223,240,0.6)" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#3eaee0" }}>
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(200,223,240,0.6)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#3eaee0" }}>
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {["Privacy policy", "Terms of service"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(200,223,240,0.6)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-sm" style={{ color: "rgba(200,223,240,0.4)" }}>
            © {year} Swasthya Sathi. All rights reserved.
          </p>
          <div
            className="flex items-center gap-2 text-xs font-mono"
            style={{ color: "rgba(200,223,240,0.35)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#3eaee0", animation: "pulse-glow 2s infinite" }}
            />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
