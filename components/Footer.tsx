import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-primary">QR</span> BUD
            </Link>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Profesjonalne usługi budowlane &mdash; budowa domów, remonty,
              wykończenia wnętrz, elewacje i dachy. Łomża i woj. podlaskie.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Menu</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Strona Główna" },
                { href: "/#uslugi", label: "Usługi" },
                { href: "/#onas", label: "O Nas" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Fryderyka Chopina 3/32</li>
              <li>18-400 Łomża</li>
              <li>
                <a
                  href="tel:+48123456789"
                  className="hover:text-primary transition-colors"
                >
                  +48 123 456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@qrbud.pl"
                  className="hover:text-primary transition-colors"
                >
                  kontakt@qrbud.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              &copy; {currentYear} QR BUD Mikołaj Tchórzewski. Wszelkie prawa
              zastrzeżone.
            </p>
            <div className="flex gap-4">
              <span>NIP: 718-215-34-10</span>
              <span className="hidden sm:inline">|</span>
              <span>REGON: 384881098</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
