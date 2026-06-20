import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oferta — QR BUD Mikołaj Tchórzewski | Budowa domów, remonty, elewacje",
  description: "Pełna oferta firmy budowlanej QR BUD z Łomży: budowa domów, remonty, wykończenia wnętrz, elewacje, dachy, fundamenty, usługi koparką. Bezpłatna wycena.",
};

const kategorie = [
  {
    tytul: "Budowa domów",
    ikona: "🏗️",
    uslugi: [
      { nazwa: "Dom — stan surowy otwarty", opis: "Fundamenty, ściany nośne, strop, więźba dachowa, pokrycie dachu.", cena: "od 2500 zł/m²" },
      { nazwa: "Dom — stan surowy zamknięty", opis: "Stan surowy otwarty + okna, drzwi zewnętrzne, brama garażowa.", cena: "od 3000 zł/m²" },
      { nazwa: "Dom — stan deweloperski", opis: "Stan surowy zamknięty + instalacje, tynki, wylewki, parapety.", cena: "od 3800 zł/m²" },
      { nazwa: "Dom — pod klucz", opis: "Pełne wykończenie wnętrz, gotowe do zamieszkania.", cena: "od 5500 zł/m²" },
      { nazwa: "Domy szkieletowe i prefabrykowane", opis: "Lekka konstrukcja drewniana lub prefabrykaty betonowe.", cena: "od 2000 zł/m²" },
    ],
  },
  {
    tytul: "Remonty i wykończenia",
    ikona: "🔨",
    uslugi: [
      { nazwa: "Remont mieszkania — kompleksowy", opis: "Wyburzanie ścian, instalacje, tynki, wylewki, malowanie.", cena: "od 1500 zł/m²" },
      { nazwa: "Remont łazienki", opis: "Demontaż, hydraulika, płytki, armatura. Wykonanie pod klucz.", cena: "od 12 000 zł" },
      { nazwa: "Remont kuchni", opis: "Nowe instalacje, płytki, montaż AGD.", cena: "od 8 000 zł" },
      { nazwa: "Wykończenie wnętrz nowego mieszkania", opis: "Tynki, gładzie, malowanie, podłogi, drzwi.", cena: "od 800 zł/m²" },
      { nazwa: "Malowanie ścian i sufitów", opis: "Przygotowanie podłoża, szpachlowanie, gruntowanie, malowanie.", cena: "od 25 zł/m²" },
      { nazwa: "Układanie paneli i płytek", opis: "Panele laminowane, deska warstwowa, płytki, gres.", cena: "od 60 zł/m²" },
      { nazwa: "Montaż drzwi", opis: "Drzwi wewnętrzne i zewnętrzne, regulacja, ościeżnice.", cena: "od 250 zł/szt" },
      { nazwa: "Zabudowy GK", opis: "Ścianki działowe, sufity podwieszane, obudowy.", cena: "od 70 zł/m²" },
    ],
  },
  {
    tytul: "Elewacje i ocieplenia",
    ikona: "🏠",
    uslugi: [
      { nazwa: "Ocieplenie — styropian", opis: "Klejenie styropianu, siatka, klej, tynk.", cena: "od 140 zł/m²" },
      { nazwa: "Ocieplenie — wełna mineralna", opis: "Niepalna, lepsza izolacja akustyczna.", cena: "od 170 zł/m²" },
      { nazwa: "Tynk cienkowarstwowy", opis: "Baranek, kornik, mozaikowy. 50+ kolorów.", cena: "od 100 zł/m²" },
      { nazwa: "Elewacja — kamień naturalny", opis: "Piaskowiec, granit, łupek. Montaż na klej.", cena: "od 350 zł/m²" },
      { nazwa: "Malowanie elewacji", opis: "Farba silikonowa, gruntowanie.", cena: "od 40 zł/m²" },
    ],
  },
  {
    tytul: "Dachy",
    ikona: "🔧",
    uslugi: [
      { nazwa: "Nowy dach — konstrukcja + pokrycie", opis: "Więźba + blachodachówka / dachówka ceramiczna.", cena: "od 350 zł/m²" },
      { nazwa: "Wymiana pokrycia dachowego", opis: "Zerwanie starego, nowe łacenie, membrana, blachodachówka.", cena: "od 180 zł/m²" },
      { nazwa: "Obróbki blacharskie", opis: "Rynny, rury spustowe, parapety, opierzenia.", cena: "od 80 zł/mb" },
      { nazwa: "Docieplenie poddasza", opis: "Wełna mineralna, paroizolacja, GK.", cena: "od 120 zł/m²" },
      { nazwa: "Okna dachowe — montaż", opis: "Fakro, Velux z obróbką termiczną.", cena: "od 800 zł/szt" },
    ],
  },
  {
    tytul: "Prace ziemne i fundamenty",
    ikona: "🚜",
    uslugi: [
      { nazwa: "Wykopy pod fundamenty", opis: "Koparka, wywóz ziemi, przygotowanie podłoża.", cena: "od 80 zł/m³" },
      { nazwa: "Fundamenty — ławy i płyta", opis: "Zbrojenie, szalunki, beton B20/B25, izolacja.", cena: "od 400 zł/mb" },
      { nazwa: "Płyta fundamentowa", opis: "Podbudowa, izolacja, zbrojenie, beton.", cena: "od 550 zł/m²" },
      { nazwa: "Przyłącza", opis: "Wykopy pod wodę, kanalizację, prąd.", cena: "od 60 zł/mb" },
      { nazwa: "Szambo / oczyszczalnia", opis: "Wykop, montaż zbiornika, zasypanie.", cena: "od 2 500 zł" },
    ],
  },
  {
    tytul: "Usługi koparko-ładowarką",
    ikona: "⚙️",
    uslugi: [
      { nazwa: "Prace ziemne koparką", opis: "Wykopy, nasypy, plantowanie terenu.", cena: "od 100 zł/h + dojazd" },
      { nazwa: "Rozbiórki budynków", opis: "Stodoły, garaże, komórki. Wywóz gruzu w cenie.", cena: "od 3 000 zł" },
      { nazwa: "Wywóz ziemi i gruzu", opis: "Kontener / wywrotka. Transport + utylizacja.", cena: "od 500 zł/kontener" },
      { nazwa: "Odśnieżanie", opis: "Koparko-ładowarka + pług. Zimą 24h.", cena: "od 150 zł/h" },
      { nazwa: "Karczowanie i wycinka", opis: "Usuwanie krzaków, mniejszych drzew.", cena: "od 120 zł/h" },
    ],
  },
];

export default function OfertaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-page text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Oferta
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Pełny zakres usług budowlanych
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Od fundamentów po dach — kompleksowa oferta firmy QR BUD. Łomża i województwo podlaskie.
          </p>
          <Link
            href="/kontakt"
            className="inline-block mt-8 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:brightness-110 transition-all"
          >
            Darmowa wycena
          </Link>
        </div>
      </section>

      {/* Kategorie usług */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="space-y-16">
            {kategorie.map((kat) => (
              <div key={kat.tytul} id={kat.tytul.toLowerCase().replace(/\s+/g, "-")}>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                  {kat.ikona} {kat.tytul}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {kat.uslugi.map((u) => (
                    <div
                      key={u.nazwa}
                      className="bg-surface border border-gray-100 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-semibold text-secondary">{u.nazwa}</h3>
                          <p className="text-text-muted text-sm mt-1">{u.opis}</p>
                        </div>
                        <span className="text-primary font-bold text-sm whitespace-nowrap shrink-0 bg-primary/10 px-3 py-1 rounded-full">
                          {u.cena}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-secondary to-secondary/95 py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Potrzebujesz wyceny?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Zadzwoń lub napisz — przygotujemy szczegółowy kosztorys w ciągu 24 godzin. Bezpłatnie i niezobowiązująco.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+48784775728"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:brightness-110 transition-all"
            >
              📞 +48 784 775 728
            </a>
            <Link
              href="/kontakt"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Formularz kontaktowy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
