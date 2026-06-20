"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useCallback } from "react";

const images = [
  {
    src: "/realizacje/realizacja-01.jpeg",
    alt: "Luksusowa łazienka z marmurową ścianą, wanną i prysznicem — remont Łomża",
    title: "Wykończenie łazienki",
  },
  {
    src: "/realizacje/realizacja-02.jpeg",
    alt: "Nowoczesna łazienka z wanną, WC i marmurową ścianą akcentową — QR BUD",
    title: "Remont łazienki",
  },
  {
    src: "/realizacje/realizacja-03.jpeg",
    alt: "Designerska umywalka nablatowa Roca na marmurowym blacie — wykończenie wnętrz",
    title: "Detal umywalki",
  },
  {
    src: "/realizacje/realizacja-04.jpeg",
    alt: "Prysznic z deszczownicą, marmurowa ściana i siedzisko — łazienka Łomża",
    title: "Prysznic walk-in",
  },
  {
    src: "/realizacje/realizacja-05.jpeg",
    alt: "Ocieplenie budynku wielorodzinnego — styropian, rusztowanie, elewacja Łomża",
    title: "Elewacja i ocieplenie",
  },
  {
    src: "/realizacje/realizacja-06.jpeg",
    alt: "Budynek w trakcie ocieplenia — styropian na elewacji, rusztowanie podlaskie",
    title: "Ocieplenie budynku",
  },
  {
    src: "/realizacje/realizacja-07.jpeg",
    alt: "Pracownik QR BUD na rusztowaniu — montaż styropianu, elewacja Łomża",
    title: "Prace elewacyjne",
  },
  {
    src: "/realizacje/realizacja-08.jpeg",
    alt: "Gotowa szara elewacja budynku wielorodzinnego — tynk cienkowarstwowy Łomża",
    title: "Gotowa elewacja",
  },
];

export default function Galeria() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() => setSelected((s) => (s !== null ? (s - 1 + images.length) % images.length : null)), []);
  const next = useCallback(() => setSelected((s) => (s !== null ? (s + 1) % images.length : null)), []);

  return (
    <section id="realizacje" className="py-20 md:py-28 bg-[#0A0A0F]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#C9A96E] font-semibold text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F0] mt-3 mb-4">
            Nasze realizacje
          </h2>
          <p className="text-[#A0A0B0] text-lg">
            Zobacz wybrane projekty budowlane zrealizowane przez QR BUD na terenie Łomży i województwa podlaskiego.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-[#12121A] border border-transparent hover:border-[#C9A96E]/40 hover:shadow-[0_0_25px_rgba(201,169,110,0.15)] transition-all duration-300 ${
                i === 0 || i === 4 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading={i < 4 ? "eager" : "lazy"}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(10,10,15,0.5)_100%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4">
                <span className="text-[#F5F5F0] font-semibold text-sm">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0F] flex items-center justify-center"
            onClick={close}
          >
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-4 right-4 z-10 text-[#C9A96E]/70 hover:text-[#C9A96E] p-2"
              aria-label="Zamknij"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-[#C9A96E]/70 hover:text-[#C9A96E] p-2"
              aria-label="Poprzednie"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-[#C9A96E]/70 hover:text-[#C9A96E] p-2"
              aria-label="Następne"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                width={1200}
                height={900}
                className="object-contain w-full h-auto max-h-[85vh] rounded-xl"
                priority
              />
              <p className="text-[#C9A96E] text-center mt-4 text-sm">
                {images[selected].title} — {selected + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
