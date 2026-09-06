export default function HomeSchema({
  language = "en",
}: {
  language?: "en" | "es";
}) {

  const isSpanish = language === "es";


  const schema = {
    "@context": "https://schema.org",

    "@graph": [

      {
        "@type": "Organization",

        "@id":
          "https://moroccan-trip.com/#organization",


        name:
          "Moroccan Trip",


        url:
          "https://moroccan-trip.com/",


        logo: {
          "@type": "ImageObject",

          url:
            "https://moroccan-trip.com/images/home/Moroccan-Trip-Logo.svg",
        },


        image:
          "https://moroccan-trip.com/images/home/og-home.webp",


        description:

          isSpanish

          ?

          "Tours privados por Marruecos, aventuras en el desierto del Sahara y experiencias auténticas creadas por expertos locales."

          :

          "Private Morocco tours, Sahara Desert adventures and authentic travel experiences created by local Morocco experts.",



        email:
          "contact@moroccan-trip.com",


        telephone:
          "+212607747056",


        areaServed: {
          "@type": "Country",

          name:
            "Morocco",
        },


        sameAs: [
          "https://www.tripadvisor.fr/Attraction_Review-g293734-d33115204-Reviews-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html",
        ],

      },



      {
        "@type": "WebSite",

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



      {
        "@type": "FAQPage",


        "@id":
          "https://moroccan-trip.com/#faq",



        mainEntity: [


          {

            "@type":
              "Question",


            name:

              isSpanish

              ?

              "¿Cuál es la mejor época para visitar Marruecos?"

              :

              "When is the best time to visit Morocco?",



            acceptedAnswer: {

              "@type":
                "Answer",


              text:

                isSpanish

                ?

                "La mejor época para visitar Marruecos es durante la primavera y el otoño, cuando las temperaturas son agradables para explorar ciudades, montañas y el desierto del Sahara."

                :

                "The best time to visit Morocco is during spring and autumn. These seasons offer comfortable temperatures for exploring cities, mountains, and the Sahara Desert.",

            },

          },



          {

            "@type":
              "Question",


            name:

              isSpanish

              ?

              "¿Necesito visado para viajar a Marruecos?"

              :

              "Do I need a visa to travel to Morocco?",



            acceptedAnswer: {

              "@type":
                "Answer",


              text:

                isSpanish

                ?

                "Los requisitos de visado dependen de la nacionalidad del viajero. Muchos visitantes pueden entrar en Marruecos sin visado para estancias cortas."

                :

                "Visa requirements depend on your nationality. Many travelers can visit Morocco without a visa for short stays.",

            },

          },



          {

            "@type":
              "Question",


            name:

              isSpanish

              ?

              "¿Cuántos días necesito para un tour por el desierto del Sahara?"

              :

              "How many days do I need for a Sahara Desert tour?",



            acceptedAnswer: {

              "@type":
                "Answer",


              text:

                isSpanish

                ?

                "Recomendamos al menos 3 días y 2 noches para disfrutar del Sahara. Un viaje de 4 días permite explorar mejor las montañas del Atlas, los valles y los paisajes del desierto."

                :

                "For a first Sahara experience, we recommend at least 3 days and 2 nights. A longer 4-day journey allows more time to enjoy the Atlas Mountains, valleys and desert landscapes.",

            },

          },



          {

            "@type":
              "Question",


            name:

              isSpanish

              ?

              "¿Es Marruecos seguro para los turistas?"

              :

              "Is Morocco safe for tourists?",



            acceptedAnswer: {

              "@type":
                "Answer",


              text:

                isSpanish

                ?

                "Marruecos es un destino acogedor para los viajeros. Viajar con un equipo local de confianza ayuda a disfrutar de una experiencia más cómoda."

                :

                "Morocco is a welcoming destination for travelers. Traveling with a trusted local team can make your experience more comfortable.",

            },

          },



          {

            "@type":
              "Question",


            name:

              isSpanish

              ?

              "¿Qué debo llevar para viajar a Marruecos?"

              :

              "What should I pack for Morocco?",



            acceptedAnswer: {

              "@type":
                "Answer",


              text:

                isSpanish

                ?

                "Lleva calzado cómodo, ropa ligera, protección solar y una chaqueta para las noches más frescas del desierto."

                :

                "Bring comfortable walking shoes, lightweight clothes, sun protection and a light jacket for cooler desert nights.",

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
          JSON.stringify(schema).replace(/</g, "\\u003c"),

      }}

    />

  );

}