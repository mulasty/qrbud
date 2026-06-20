export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "QR BUD Mikołaj Tchórzewski",
    description:
      "Firma budowlana specjalizująca się w budowie domów jednorodzinnych, remontach i wykończeniach wnętrz na terenie Łomży i województwa podlaskiego.",
    url: "https://qrbud.pl",
    telephone: "+48 123 456 789",
    email: "kontakt@qrbud.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fryderyka Chopina 3/32",
      postalCode: "18-400",
      addressLocality: "Łomża",
      addressRegion: "podlaskie",
      addressCountry: "PL",
    },
    taxID: "718-215-34-10",
    vatID: "718-215-34-10",
    foundingDate: "2021",
    founder: {
      "@type": "Person",
      name: "Mikołaj Tchórzewski",
    },
    areaServed: {
      "@type": "State",
      name: "województwo podlaskie",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi budowlane QR BUD",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Budowa domów jednorodzinnych" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remonty i wykończenia wnętrz" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elewacje i ocieplenia" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dachy i więźby dachowe" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prace ziemne i fundamenty" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Usługi koparko-ładowarką" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
