import type { Metadata } from "next";
import KontaktForm from "./KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z QR BUD Mikołaj Tchórzewski — budowa domów, remonty, wykończenia wnętrz. Łomża, woj. podlaskie. Darmowa wycena.",
};

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Adres",
    value: "Fryderyka Chopina 3/32, 18-400 Łomża",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Telefon",
    value: "+48 123 456 789",
    href: "tel:+48123456789",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "kontakt@qrbud.pl",
    href: "mailto:kontakt@qrbud.pl",
  },
];

const companyInfo = [
  ["NIP", "718-215-34-10"],
  ["REGON", "384881098"],
  ["VAT", "Czynny"],
  ["Bank", "ING 68 1050 1025 1000 0092 7264 6838"],
];

export default function KontaktPage() {
  return (
    <>
      <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #F47920 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="container-page relative z-10 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            QR BUD
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
            Skontaktuj się z nami
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Potrzebujesz wyceny lub masz pytania? Zadzwoń lub wypełnij
            formularz &mdash; odpowiemy najszybciej jak to możliwe.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Dane kontaktowe
                </h2>
                <div className="space-y-5">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-secondary hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-medium text-secondary">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface rounded-2xl p-6">
                <h3 className="font-bold text-secondary mb-3">Dane firmy</h3>
                <dl className="space-y-2 text-sm">
                  {companyInfo.map(([label, value]) => (
                    <div key={label} className="flex justify-between">
                      <dt className="text-text-muted">{label}</dt>
                      <dd className="font-medium text-secondary">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="lg:col-span-2">
              <KontaktForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
