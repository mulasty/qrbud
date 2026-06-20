"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Gdzie działamy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">
            Łomża i województwo podlaskie
          </h2>
          <p className="text-text-muted text-lg">
            Realizujemy projekty na terenie całego województwa podlaskiego i
            okolic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-secondary/5 h-72 md:h-96 flex items-center justify-center relative">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-primary/40 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="text-text-muted font-medium">
                Fryderyka Chopina 3/32
                <br />
                18-400 Łomża
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-bold text-secondary">Adres</h4>
              <p className="text-text-muted text-sm mt-1">
                Fryderyka Chopina 3/32
                <br />
                18-400 Łomża
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-secondary">Telefon</h4>
              <p className="text-text-muted text-sm mt-1">
                <a
                  href="tel:+48123456789"
                  className="hover:text-primary transition-colors"
                >
                  +48 123 456 789
                </a>
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-secondary">Email</h4>
              <p className="text-text-muted text-sm mt-1">
                <a
                  href="mailto:kontakt@qrbud.pl"
                  className="hover:text-primary transition-colors"
                >
                  kontakt@qrbud.pl
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
