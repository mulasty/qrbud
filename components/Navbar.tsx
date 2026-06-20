"use client";

import { useState } from "react";
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

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <img src="/logo-horizontal.svg" alt="QR BUD" className="h-10 md:h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            Wycena
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-secondary"
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
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container-page py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-muted hover:text-primary py-2 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white text-center px-5 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
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
