"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function KontaktCTA() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#12121A", borderRadius: "24px" }}
    >
      {/* Subtle gold particles */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #C9A96E 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Subtle gold glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#C9A96E]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-page relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <span
            className="font-semibold text-sm tracking-widest uppercase"
            style={{ color: "#C9A96E" }}
          >
            Skontaktuj się
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #F5F5F0 0%, #C9A96E 100%)",
              }}
            >
              Gotowy na swój wymarzony dom?
            </span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#A0A0B0" }}>
            Zadzwoń lub napisz &mdash; przygotujemy bezpłatną wycenę dostosowaną
            do Twoich potrzeb.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48784775728"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A96E] text-[#0A0A0F] px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-[0_0_30px_rgba(201,169,110,0.35)] hover:brightness-110"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +48 784 775 728
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border border-[#C9A96E]/30 text-[#F5F5F0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A96E]/10 transition-colors"
            >
              Formularz kontaktowy
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
