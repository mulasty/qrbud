import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12121A] border-t border-[rgba(201,169,110,0.15)] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.3)] to-transparent" />
      <div className="container-page py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-2">
              <img src="/logo.png" alt="QR BUD" className="h-8 w-auto" />
            </Link>
            <p className="text-[#A0A0B0] mt-4 text-sm leading-relaxed">
              Profesjonalne usługi budowlane &mdash; budowa domów, remonty,
              wykończenia wnętrz, elewacje i dachy. Łomża i woj. podlaskie.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#F5F5F0] mb-4">Menu</h4>
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
                    className="text-[#A0A0B0] hover:text-[#C9A96E] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#F5F5F0] mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-[#A0A0B0]">
              <li>Fryderyka Chopina 3/32</li>
              <li>18-400 Łomża</li>
              <li>
                <a
                  href="tel:+48784775728"
                  className="hover:text-[#C9A96E] transition-colors"
                >
                  +48 784 775 728
                </a>
              </li>
              <li>
                <a
                  href="mailto:qrtchorzewski@gmail.com"
                  className="hover:text-[#C9A96E] transition-colors"
                >
                  qrtchorzewski@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(201,169,110,0.15)]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#A0A0B0]">
            <p>
              &copy; {currentYear} QR BUD Mikołaj Tchórzewski. Wszelkie prawa
              zastrzeżone.
            </p>
            <div className="flex gap-4">
              <span>NIP: 718-215-34-10</span>
              <span className="hidden sm:inline text-[#A0A0B0]/50">|</span>
              <span>REGON: 384881098</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
