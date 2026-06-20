export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://qrbud.pl/#business",
    name: "QR BUD Mikołaj Tchórzewski",
    alternateName: "QR BUD",
    description:
      "Firma budowlana specjalizująca się w budowie domów jednorodzinnych, remontach i wykończeniach wnętrz na terenie Łomży i województwa podlaskiego.",
    url: "https://qrbud.pl",
    logo: "https://qrbud.pl/logo.png",
    image: [
      "https://qrbud.pl/logo.png",
      "https://qrbud.pl/og-image.jpg",
    ],
    telephone: "+48-784-775-728",
    email: "qrtchorzewski@gmail.com",
    priceRange: "$$",
    currenciesAccepted: "PLN",
    paymentAccepted: "Gotówka, Przelew",
    address: {
      "@type": "PostalAddress",
      "@id": "https://qrbud.pl/#address",
      streetAddress: "Fryderyka Chopina 3/32",
      postalCode: "18-400",
      addressLocality: "Łomża",
      addressRegion: "podlaskie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.1781",
      longitude: "22.0596",
    },
    taxID: "718-215-34-10",
    vatID: "7182153410",
    foundingDate: "2021",
    founder: {
      "@type": "Person",
      name: "Mikołaj Tchórzewski",
    },
    areaServed: {
      "@type": "City",
      name: "Łomża",
      containedInPlace: {
        "@type": "State",
        name: "województwo podlaskie",
      },
    },
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=QR+BUD+Miko%C5%82aj+Tch%C3%B3rzewski+%C5%81om%C5%BCa",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    knowsAbout: [
      "Budowa domów jednorodzinnych",
      "Remonty mieszkań",
      "Wykończenia wnętrz",
      "Elewacje i ocieplenia",
      "Dachy i więźby dachowe",
      "Fundamenty",
      "Usługi koparko-ładowarką",
    ],
    sameAs: [
      "https://www.facebook.com/people/QR-BUD-Miko%C5%82aj-Tch%C3%B3rzewski/61575697426528/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi budowlane QR BUD",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Budowa domów jednorodzinnych",
            description: "Stan surowy, deweloperski, pod klucz",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remonty i wykończenia wnętrz",
            description: "Kompleksowe remonty mieszkań i domów",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Elewacje i ocieplenia",
            description: "Styropian, wełna mineralna, tynki",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dachy i więźby dachowe",
            description: "Blachodachówka, membrana, obróbki",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prace ziemne i fundamenty",
            description: "Wykopy, płyty fundamentowe, niwelacja",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Usługi koparko-ładowarką",
            description: "Wykopy, rozbiórki, wywóz gruzu",
          },
        },
      ],
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://qrbud.pl/kontakt",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Bezpłatna wycena",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
