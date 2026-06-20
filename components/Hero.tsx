"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "4+", label: "Lat doświadczenia" },
  { value: "50+", label: "Zrealizowanych projektów" },
  { value: "100%", label: "Zadowolonych klientów" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image — full width, perfectly cropped */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Budowa domu w Łomży — QR BUD realizacja"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.75) 50%, rgba(10,10,15,0.5) 100%)",
          }}
        />
        {/* Bottom fade to blend with next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to top, #0A0A0F 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Gold glow behind text */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A96E]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-[#C9A96E]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-72 h-72 bg-[#C9A96E]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container-page relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-[#C9A96E] rounded-full" />
            <span
              className="font-semibold text-sm tracking-widest uppercase"
              style={{ color: "#C9A96E" }}
            >
              QR BUD MIKOŁAJ TCHÓRZEWSKI
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #F5F5F0 0%, #C9A96E 100%)",
              }}
            >
              Budujemy domy.
            </span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #F5F5F0 0%, #C9A96E 100%)",
              }}
            >
              Remontujemy wnętrza.
            </span>
            <br />
            <span className="text-[#F5F5F0]">
              Z pasją i precyzją.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            style={{ color: "#A0A0B0" }}
          >
            Kompleksowe usługi budowlane w Łomży i województwie podlaskim.
            Od fundamentów po dach, od łazienki po elewację.
            Darmowa wycena w 24h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-[#C9A96E] text-[#0A0A0F] px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-[0_0_30px_rgba(201,169,110,0.35)] hover:brightness-110"
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
              className="inline-flex items-center justify-center border border-[#C9A96E]/30 text-[#F5F5F0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A96E]/10 transition-colors"
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
                <div className="text-3xl md:text-4xl font-bold text-[#C9A96E]">
                  {stat.value}
                </div>
                <div className="text-sm mt-1" style={{ color: "#A0A0B0" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
