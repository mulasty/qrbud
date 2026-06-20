"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0A0F]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#C9A96E] font-semibold text-sm tracking-widest uppercase">
            Gdzie działamy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 bg-gradient-to-r from-[#F5F5F0] to-[#C9A96E] bg-clip-text text-transparent">
            Łomża i województwo podlaskie
          </h2>
          <p className="text-[#A0A0B0] text-lg">
            Realizujemy projekty na terenie całego województwa podlaskiego i
            okolic. Siedziba firmy w Łomży — dojeżdżamy do klienta.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#12121A] rounded-2xl border border-[rgba(201,169,110,0.15)] overflow-hidden"
        >
          {/* Google Maps embed for GBP compatibility */}
          <div className="h-72 md:h-96 w-full relative">
            <iframe
              title="Lokalizacja QR BUD Łomża"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.1234567890123!2d22.0596!3d53.1781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDEwJzQxLjIiTiAyMsKwMDMnMzQuNiJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-[#0A0A0F]/30 pointer-events-none" />
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center bg-[#12121A] rounded-xl p-4 border border-transparent hover:border-[#C9A96E] transition-colors">
              <h4 className="font-bold text-[#F5F5F0]">Adres</h4>
              <p className="text-[#A0A0B0] text-sm mt-1">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Fryderyka+Chopina+3%2F32+18-400+%C5%81om%C5%BCa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A96E] transition-colors"
                >
                  Fryderyka Chopina 3/32
                  <br />
                  18-400 Łomża
                </a>
              </p>
            </div>
            <div className="text-center bg-[#12121A] rounded-xl p-4 border border-transparent hover:border-[#C9A96E] transition-colors">
              <h4 className="font-bold text-[#F5F5F0]">Telefon</h4>
              <p className="text-[#A0A0B0] text-sm mt-1">
                <a
                  href="tel:+48784775728"
                  className="hover:text-[#C9A96E] transition-colors"
                >
                  +48 784 775 728
                </a>
              </p>
              <p className="text-xs text-[#A0A0B0] mt-1">
                Pon–Pt 7:00–17:00 | Sob 8:00–13:00
              </p>
            </div>
            <div className="text-center bg-[#12121A] rounded-xl p-4 border border-transparent hover:border-[#C9A96E] transition-colors">
              <h4 className="font-bold text-[#F5F5F0]">Email</h4>
              <p className="text-[#A0A0B0] text-sm mt-1">
                <a
                  href="mailto:qrtchorzewski@gmail.com"
                  className="hover:text-[#C9A96E] transition-colors"
                >
                  qrtchorzewski@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* GBP NAP consistency block */}
          <div className="px-6 pb-6 md:px-8 md:pb-8">
            <div className="bg-[#1A1A25] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-2 text-[#A0A0B0]">
                <svg className="w-4 h-4 text-[#C9A96E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>NIP: 718-215-34-10 | REGON: 384881098</span>
              </div>
              <div className="flex items-center gap-2 text-[#A0A0B0]">
                <svg className="w-4 h-4 text-[#C9A96E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Czynny VAT | Godziny otwarcia powyżej</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
