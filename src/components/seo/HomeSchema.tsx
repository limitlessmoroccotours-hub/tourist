export default function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://moroccan-trip.com/#organization",

        name: "Moroccan Trip",
        url: "https://moroccan-trip.com/",

        logo: {
          "@type": "ImageObject",
          url: "https://moroccan-trip.com/images/home/Moroccan-Trip-Logo.svg",
        },

        image: "https://moroccan-trip.com/images/home/og-home.webp",

        description:
          "Private Morocco tours, Sahara Desert adventures and authentic travel experiences created by local Morocco experts.",

        email: "contact@moroccan-trip.com",
        telephone: "+212607747056",

        areaServed: {
          "@type": "Country",
          name: "Morocco",
        },

        sameAs: [
          "https://www.tripadvisor.fr/Attraction_Review-g293734-d33115204-Reviews-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html",
        ],
      },

      {
        "@type": "WebSite",
        "@id": "https://moroccan-trip.com/#website",

        url: "https://moroccan-trip.com/",
        name: "Moroccan Trip",

        publisher: {
          "@id": "https://moroccan-trip.com/#organization",
        },
      },

      {
        "@type": "FAQPage",
        "@id": "https://moroccan-trip.com/#faq",

        mainEntity: [
          {
            "@type": "Question",
            name: "When is the best time to visit Morocco?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The best time to visit Morocco is during spring (March to May) and autumn (September to November). These seasons offer comfortable temperatures for exploring cities, mountains, and the Sahara Desert.",
            },
          },

          {
            "@type": "Question",
            name: "Do I need a visa to travel to Morocco?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Visa requirements depend on your nationality. Many travelers can visit Morocco without a visa for short stays. Always check the latest requirements before traveling.",
            },
          },

          {
            "@type": "Question",
            name: "How many days do I need for a Sahara Desert tour?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "For a first Sahara experience from Marrakech, we recommend at least 3 days and 2 nights. A longer 4-day journey allows more time to enjoy the Atlas Mountains, valleys and desert landscapes.",
            },
          },

          {
            "@type": "Question",
            name: "Is Morocco safe for tourists?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Morocco is a welcoming destination for travelers. Staying aware in busy areas and traveling with a trusted local team can make your experience more comfortable.",
            },
          },

          {
            "@type": "Question",
            name: "What should I pack for Morocco?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Bring comfortable walking shoes, lightweight clothes, sun protection and a light jacket. For Sahara trips, warm layers are recommended during cooler nights.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}