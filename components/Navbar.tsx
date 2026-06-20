"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Strona Główna" },
  { href: "/oferta", label: "Oferta" },
  { href: "/#uslugi", label: "Usługi" },
  { href: "/#realizacje", label: "Realizacje" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[rgba(201,169,110,0.15)] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : ""
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="QR BUD" className="h-10 md:h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-[#A0A0B0] hover:text-[#C9A96E] transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C9A96E] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="bg-[#C9A96E] text-[#0A0A0F] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D4B87A] transition-colors"
          >
            Wycena
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#A0A0B0] hover:text-[#C9A96E] transition-colors"
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#12121A] border-b border-[rgba(201,169,110,0.15)] overflow-hidden"
          >
            <div className="container-page py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#A0A0B0] hover:text-[#C9A96E] py-2 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                onClick={() => setIsOpen(false)}
                className="bg-[#C9A96E] text-[#0A0A0F] text-center px-5 py-3 rounded-lg font-semibold hover:bg-[#D4B87A] transition-colors"
              >
                Darmowa wycena
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
