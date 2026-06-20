"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Budowa domów jednorodzinnych",
    description:
      "Realizujemy domy w stanie surowym, deweloperskim oraz pod klucz. Kompleksowa obsługa od projektu po odbiór.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    title: "Remonty i wykończenia wnętrz",
    description:
      "Kompleksowe remonty mieszkań i domów. Wykończenia pod klucz — gładzie, podłogi, malowanie, kafelki.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Elewacje i ocieplenia",
    description:
      "Ocieplenia budynków metodą lekką-mokrą, tynki strukturalne, elewacje wentylowane — kompleksowo i z gwarancją.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Dachy i więźby dachowe",
    description:
      "Montaż więźb dachowych, krycie dachów blachodachówką i dachówką ceramiczną, obróbki blacharskie i orynnowanie.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l-9 9h3v7.5c0 .414.336.75.75.75h2.25a.75.75 0 00.75-.75V15h4.5v4.5c0 .414.336.75.75.75h2.25a.75.75 0 00.75-.75V12h3L12 3z" />
      </svg>
    ),
  },
  {
    title: "Prace ziemne i fundamenty",
    description:
      "Wykopy, fundamenty tradycyjne i płytowe, przygotowanie terenu pod budowę — szybko, solidnie i terminowo.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Usługi koparko-ładowarką",
    description:
      "Profesjonalne usługi koparko-ładowarką — wykopy pod fundamenty, niwelacja terenu, prace rozbiórkowe, transport ziemi.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6m0 9v-4.5m0 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM6.75 21a3 3 0 01-3-3V6.75a.75.75 0 01.75-.75h15a.75.75 0 01.75.75V18a3 3 0 01-3 3H6.75z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Uslugi() {
  return (
    <section id="uslugi" className="py-20 md:py-28 bg-surface">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Czym się zajmujemy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-3 mb-4">
            Nasze usługi
          </h2>
          <p className="text-text-muted text-lg">
            Oferujemy kompleksowe usługi budowlane na terenie Łomży i okolic.
            Każde zlecenie traktujemy indywidualnie, z pełnym zaangażowaniem i
            dbałością o detale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
