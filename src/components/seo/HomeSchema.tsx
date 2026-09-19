export default function HomeSchema({
  language = "en",
}: {
  language?: "en" | "es";
}) {

  const isSpanish =
    language === "es";


  const pageUrl =
    isSpanish
      ? "https://moroccan-trip.com/es"
      : "https://moroccan-trip.com/";


  const pageId =
    `${pageUrl}#webpage`;


  const faqId =
    `${pageUrl}#faq`;


  const imageId =
    `${pageUrl}#primaryimage`;


  const pageTitle =
    isSpanish
      ? "Viaje a Marruecos | Tours Privados y Experiencias Auténticas"
      : "Morocco Tours | Private Sahara Desert Tours & Authentic Experiences";


  const pageDescription =
    isSpanish
      ? "Descubre Marruecos con tours privados, viajes personalizados y experiencias auténticas. Explora Marrakech, el Sahara y Marruecos con expertos locales."
      : "Discover Morocco with private tours, Sahara Desert adventures and authentic experiences. Explore Marrakech, Fes, Casablanca and Morocco with local travel experts.";


  const schema = {

    "@context":
      "https://schema.org",

    "@graph": [


      // ─────────────────────────────
      // ORGANIZATION
      // ─────────────────────────────

      {
        "@type":
          "Organization",

        "@id":
          "https://moroccan-trip.com/#organization",

        name:
          "Moroccan Trip",

        url:
          "https://moroccan-trip.com/",

        logo: {

          "@type":
            "ImageObject",

          url:
            "https://moroccan-trip.com/images/home/Moroccan-Trip-Logo.svg",

        },

        image:
          "https://moroccan-trip.com/images/home/og-home.webp",

        description:

          isSpanish

            ? "Tours privados por Marruecos, aventuras en el desierto del Sahara y experiencias auténticas creadas por expertos locales."

            : "Private Morocco tours, Sahara Desert adventures and authentic travel experiences created by local Morocco experts.",

        email:
          "contact@moroccan-trip.com",

        telephone:
          "+212607747056",

        areaServed: {

          "@type":
            "Country",

          name:
            isSpanish
              ? "Marruecos"
              : "Morocco",

        },

      },


      // ─────────────────────────────
      // WEBSITE
      // ─────────────────────────────

      {
        "@type":
          "WebSite",

        "@id":
          "https://moroccan-trip.com/#website",

        url:
          "https://moroccan-trip.com/",

        name:
          "Moroccan Trip",

        publisher: {

          "@id":
            "https://moroccan-trip.com/#organization",

        },

      },


      // ─────────────────────────────
      // PRIMARY IMAGE
      // ─────────────────────────────

      {
        "@type":
          "ImageObject",

        "@id":
          imageId,

        url:
          "https://moroccan-trip.com/images/home/og-home.webp",

        contentUrl:
          "https://moroccan-trip.com/images/home/og-home.webp",

        width:
          1200,

        height:
          630,

      },


      // ─────────────────────────────
      // WEB PAGE
      // ─────────────────────────────

      {
        "@type":
          "WebPage",

        "@id":
          pageId,

        url:
          pageUrl,

        name:
          pageTitle,

        description:
          pageDescription,

        inLanguage:
          isSpanish
            ? "es-ES"
            : "en",

        isPartOf: {

          "@id":
            "https://moroccan-trip.com/#website",

        },

        about: {

          "@id":
            "https://moroccan-trip.com/#organization",

        },

        primaryImageOfPage: {

          "@id":
            imageId,

        },

      },


      // ─────────────────────────────
      // FAQ
      // ─────────────────────────────

      {
        "@type":
          "FAQPage",

        "@id":
          faqId,

        url:
          pageUrl,

        inLanguage:
          isSpanish
            ? "es-ES"
            : "en",

        isPartOf: {

          "@id":
            pageId,

        },

        mainEntity: [


          {
            "@type":
              "Question",

            name:

              isSpanish

                ? "¿Cuál es la mejor época para viajar a Marruecos?"

                : "When is the best time to visit Morocco?",

            acceptedAnswer: {

              "@type":
                "Answer",

              text:

                isSpanish

                  ? "La primavera, de marzo a mayo, y el otoño, de septiembre a noviembre, suelen ofrecer temperaturas agradables para visitar ciudades, recorrer las montañas del Atlas y viajar al desierto del Sáhara."

                  : "The best time to visit Morocco is during spring (March to May) and autumn (September to November). These seasons offer comfortable temperatures for exploring cities, mountains, and the Sahara Desert.",

            },

          },


          {
            "@type":
              "Question",

            name:

              isSpanish

                ? "¿Necesito visado para viajar a Marruecos?"

                : "Do I need a visa to travel to Morocco?",

            acceptedAnswer: {

              "@type":
                "Answer",

              text:

                isSpanish

                  ? "Los requisitos de visado dependen de tu nacionalidad y de tu documentación. Antes de viajar, consulta siempre los requisitos oficiales actualizados correspondientes a tu país."

                  : "Visa requirements depend on your nationality. Many travelers can visit Morocco without a visa for short stays. Always check the latest official requirements before traveling.",

            },

          },


          {
            "@type":
              "Question",

            name:

              isSpanish

                ? "¿Cuántos días necesito para visitar el desierto del Sáhara?"

                : "How many days do I need for a Sahara Desert tour?",

            acceptedAnswer: {

              "@type":
                "Answer",

              text:

                isSpanish

                  ? "Para una primera experiencia en el Sáhara desde Marrakech, una ruta de al menos 3 días y 2 noches permite llegar hasta Merzouga. Un viaje de 4 días ofrece más tiempo para disfrutar del Atlas, los valles y el desierto."

                  : "For a first Sahara experience from Marrakech, we recommend at least 3 days and 2 nights. A longer 4-day journey allows more time to enjoy the Atlas Mountains, valleys and desert landscapes.",

            },

          },


          {
            "@type":
              "Question",

            name:

              isSpanish

                ? "¿Es seguro viajar a Marruecos?"

                : "Is Morocco safe for tourists?",

            acceptedAnswer: {

              "@type":
                "Answer",

              text:

                isSpanish

                  ? "Como en cualquier destino turístico, conviene mantener precauciones normales, cuidar tus pertenencias en zonas concurridas y consultar los avisos oficiales de viaje actualizados antes de salir."

                  : "Morocco is a popular destination for international travelers. Stay aware in busy areas, protect your belongings and check current official travel advice before your trip.",

            },

          },


          {
            "@type":
              "Question",

            name:

              isSpanish

                ? "¿Qué llevar en la maleta para viajar a Marruecos?"

                : "What should I pack for Morocco?",

            acceptedAnswer: {

              "@type":
                "Answer",

              text:

                isSpanish

                  ? "Lleva calzado cómodo, ropa ligera, protección solar y alguna capa adicional. Para rutas por el Sáhara o las montañas, una chaqueta puede ser útil porque las temperaturas pueden bajar por la noche."

                  : "Bring comfortable walking shoes, lightweight clothes, sun protection and a light jacket. For Sahara trips, warm layers are recommended during cooler nights.",

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
        __html:
          JSON.stringify(schema)
            .replace(/</g, "\\u003c"),
      }}
    />

  );

}