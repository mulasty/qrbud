"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function KontaktCTA() {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F47920 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-page relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Skontaktuj się
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Gotowy na swój wymarzony dom?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Zadzwoń lub napisz &mdash; przygotujemy bezpłatną wycenę dostosowaną
            do Twoich potrzeb.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48123456789"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
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
              className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Formularz kontaktowy
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
