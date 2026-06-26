"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import PulseLine from "./PulseLine";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const prefetchRoutes = () => {
      links.forEach((link) => {
        router.prefetch(link.href);
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(prefetchRoutes);
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(prefetchRoutes, 250);
    return () => window.clearTimeout(timeoutId);
  }, [router]);

  useEffect(() => {
    setIsNavigating(false);
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isNavigating) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsNavigating(false);
    }, 8000);

    return () => window.clearTimeout(timeout);
  }, [isNavigating]);

  const warmRoute = (href: string) => {
    router.prefetch(href);
  };

  const markNavigation = (href: string) => {
    setIsOpen(false);

    if (href !== pathname) {
      setIsNavigating(true);
    }
  };

  return (
    <nav className="relative sticky top-0 z-50 bg-[--sand]/90 backdrop-blur-md border-b border-[--line]">
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-[--coral] transition-transform duration-500 ${
          isNavigating ? "scale-x-100" : "scale-x-0"
        }`}
      />
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            prefetch
            onClick={() => markNavigation("/")}
            onFocus={() => warmRoute("/")}
            onPointerEnter={() => warmRoute("/")}
            className="flex items-center gap-3 group"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[--teal] text-[--sand]">
              <PulseLine className="h-3.5 w-7" color="currentColor" strokeWidth={4} />
            </span>
            <span className="font-display text-xl font-semibold text-[--ink] tracking-tight">
              Swasthya Sathi
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-9">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch
                  aria-current={active ? "page" : undefined}
                  onClick={() => markNavigation(link.href)}
                  onFocus={() => warmRoute(link.href)}
                  onPointerEnter={() => warmRoute(link.href)}
                  className={`group relative font-medium text-sm tracking-wide transition-colors ${
                    active ? "text-[--ink]" : "text-[--ash] hover:text-[--ink]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] w-full bg-[--coral] transition-opacity ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            prefetch
            onClick={() => markNavigation("/contact")}
            onFocus={() => warmRoute("/contact")}
            onPointerEnter={() => warmRoute("/contact")}
            className="hidden md:inline-flex items-center gap-2 bg-[--ink] hover:bg-[--teal-deep] text-[--sand] font-semibold text-sm py-2.5 px-5 rounded-full transition-colors"
          >
            Book a demo
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[--ink] transition-transform ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[--ink] transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[--ink] transition-transform ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
          } overflow-hidden`}
        >
          <div className="space-y-4 min-h-0">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                onClick={() => markNavigation(link.href)}
                onFocus={() => warmRoute(link.href)}
                onPointerEnter={() => warmRoute(link.href)}
                className="block text-[--ink] font-medium py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              prefetch
              onClick={() => markNavigation("/contact")}
              onFocus={() => warmRoute("/contact")}
              onPointerEnter={() => warmRoute("/contact")}
              className="block w-full text-center bg-[--ink] text-[--sand] font-semibold py-3 rounded-full"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
