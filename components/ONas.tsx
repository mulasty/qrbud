"use client";

import { motion } from "framer-motion";

const companyData = [
  { label: "Nazwa firmy", value: "QR BUD Mikołaj Tchórzewski" },
  { label: "NIP", value: "718-215-34-10" },
  { label: "REGON", value: "384881098" },
  { label: "Adres", value: "Fryderyka Chopina 3/32, 18-400 Łomża" },
  { label: "Województwo", value: "Podlaskie" },
  { label: "VAT", value: "Czynny" },
  { label: "Bank", value: "ING 68 1050 1025 1000 0092 7264 6838" },
  { label: "Od roku", value: "2021" },
];

export default function ONas() {
  return (
    <section id="onas" className="py-20 md:py-28 bg-[#12121A]">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C9A96E] font-semibold text-sm tracking-widest uppercase">
              Poznaj nas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 bg-gradient-to-r from-[#F5F5F0] to-[#C9A96E] bg-clip-text text-transparent">
              O firmie QR BUD
            </h2>
            <div className="space-y-4 text-[#A0A0B0] leading-relaxed">
              <p>
                QR BUD to firma budowlana założona w 2021 roku przez Mikołaja
                Tchórzewskiego. Specjalizujemy się w budowie domów
                jednorodzinnych oraz remontach i wykończeniach wnętrz na terenie
                Łomży i województwa podlaskiego.
              </p>
              <p>
                Każdy projekt realizujemy z najwyższą starannością, korzystając
                ze sprawdzonych materiałów i nowoczesnych technologii. Naszym
                priorytetem jest terminowość, transparentność kosztów i
                satysfakcja klienta.
              </p>
              <p>
                Do każdego zlecenia podchodzimy indywidualnie &mdash; niezależnie
                od tego, czy potrzebujesz budowy domu od podstaw, remontu, czy
                usług koparko-ładowarką. Gwarantujemy solidność i profesjonalizm
                na każdym etapie prac.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1A25] border border-[rgba(201,169,110,0.15)] rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-xl font-bold text-[#F5F5F0] mb-6">Dane firmy</h3>
            <dl className="space-y-4">
              {companyData.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/10 pb-3"
                >
                  <dt className="text-[#A0A0B0] text-sm">{item.label}</dt>
                  <dd className="text-[#C9A96E] font-medium text-sm text-right break-all">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
