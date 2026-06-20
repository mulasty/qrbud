"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const subjects = [
  "Budowa domu",
  "Remont / wykończenie wnętrz",
  "Elewacja / ocieplenie",
  "Dach / więźba dachowa",
  "Prace ziemne / fundamenty",
  "Usługi koparko-ładowarką",
  "Inne",
];

export default function KontaktForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-surface rounded-2xl p-8 md:p-10">
      <h2 className="text-2xl font-bold text-secondary mb-2">
        Formularz kontaktowy
      </h2>
      <p className="text-text-muted mb-8">
        Wypełnij formularz, a odezwiemy się w ciągu 24 godzin.
      </p>

      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-secondary mb-2">
            Dziękujemy za wiadomość!
          </h3>
          <p className="text-text-muted">
            Skontaktujemy się z Tobą najszybciej jak to możliwe.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-secondary mb-1.5"
              >
                Imię i nazwisko *
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-secondary mb-1.5"
              >
                Telefon *
              </label>
              <input
                id="phone"
                type="tel"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                placeholder="+48 123 456 789"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="jan@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              Temat *
            </label>
            <select
              id="subject"
              required
              defaultValue=""
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            >
              <option value="" disabled>
                Wybierz temat zapytania
              </option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              Wiadomość *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              placeholder="Opisz swój projekt lub zapytanie..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            Wyślij zapytanie
          </button>

          <p className="text-xs text-text-muted text-center">
            Wysyłając formularz wyrażasz zgodę na przetwarzanie danych
            osobowych w celu obsługi zapytania.
          </p>
        </form>
      )}
    </div>
  );
}
