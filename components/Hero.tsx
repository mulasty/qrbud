"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "4+", label: "Lat doświadczenia" },
  { value: "50+", label: "Zrealizowanych projektów" },
  { value: "100%", label: "Zadowolonych klientów" },
];

export default function Hero() {
  return (
    <section className="relative bg-secondary min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F47920 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-page relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              QR BUD Mikołaj Tchórzewski
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Budujemy{" "}
            <span className="text-primary">domy</span>
            <br />
            z pasją i{" "}
            <span className="text-primary">precyzją</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Kompleksowe usługi budowlane &mdash; od fundamentów po dach.
            Działamy na terenie Łomży i województwa podlaskiego. Ponad 4 lata
            doświadczenia w budowie domów jednorodzinnych.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Darmowa wycena
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/#uslugi"
              className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Nasze usługi
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
