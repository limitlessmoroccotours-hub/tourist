import Link from "next/link";


type FAQsProps = {
  language?: "en" | "es";
  contactHref?: string;
};


const faqsEn = [
  {
    question:
      "When is the best time to visit Morocco?",

    answer:
      "The best time to visit Morocco is during spring (March to May) and autumn (September to November). These seasons offer comfortable temperatures for exploring cities, mountains, and the Sahara Desert.",
  },

  {
    question:
      "Do I need a visa to travel to Morocco?",

    answer:
      "Visa requirements depend on your nationality. Many travelers can visit Morocco without a visa for short stays. Always check the latest official requirements before traveling.",
  },

  {
    question:
      "How many days do I need for a Sahara Desert tour?",

    answer:
      "For a first Sahara experience from Marrakech, we recommend at least 3 days and 2 nights. A longer 4-day journey allows more time to enjoy the Atlas Mountains, valleys and desert landscapes.",
  },

  {
    question:
      "Is Morocco safe for tourists?",

    answer:
      "Morocco is a popular destination for international travelers. Stay aware in busy areas, protect your belongings and check current official travel advice before your trip.",
  },

  {
    question:
      "What should I pack for Morocco?",

    answer:
      "Bring comfortable walking shoes, lightweight clothes, sun protection and a light jacket. For Sahara trips, warm layers are recommended during cooler nights.",
  },
];


const faqsEs = [
  {
    question:
      "¿Cuál es la mejor época para viajar a Marruecos?",

    answer:
      "La primavera, de marzo a mayo, y el otoño, de septiembre a noviembre, suelen ofrecer temperaturas agradables para visitar ciudades, recorrer las montañas del Atlas y viajar al desierto del Sáhara.",
  },

  {
    question:
      "¿Necesito visado para viajar a Marruecos?",

    answer:
      "Los requisitos de visado dependen de tu nacionalidad y de tu documentación. Antes de viajar, consulta siempre los requisitos oficiales actualizados correspondientes a tu país.",
  },

  {
    question:
      "¿Cuántos días necesito para visitar el desierto del Sáhara?",

    answer:
      "Para una primera experiencia en el Sáhara desde Marrakech, una ruta de al menos 3 días y 2 noches permite llegar hasta Merzouga. Un viaje de 4 días ofrece más tiempo para disfrutar del Atlas, los valles y el desierto.",
  },

  {
    question:
      "¿Es seguro viajar a Marruecos?",

    answer:
      "Como en cualquier destino turístico, conviene mantener precauciones normales, cuidar tus pertenencias en zonas concurridas y consultar los avisos oficiales de viaje actualizados antes de salir.",
  },

  {
    question:
      "¿Qué llevar en la maleta para viajar a Marruecos?",

    answer:
      "Lleva calzado cómodo, ropa ligera, protección solar y alguna capa adicional. Para rutas por el Sáhara o las montañas, una chaqueta puede ser útil porque las temperaturas pueden bajar por la noche.",
  },
];


function ChevronIcon() {

  return (

    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="
      h-5
      w-5
      transition-transform
      duration-300
      group-open:rotate-180
      "
    >

      <path d="m6 9 6 6 6-6" />

    </svg>

  );

}


export default function FAQs({
  language = "en",
  contactHref = "/contact",
}: FAQsProps) {

  const isSpanish =
    language === "es";

  const faqs =
    isSpanish
      ? faqsEs
      : faqsEn;


  return (

    <section
      className="
      bg-[hsl(var(--surface-soft))]
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        px-5
        py-20

        sm:px-8
        lg:px-10
        lg:py-28
        "
      >


        {/* Header */}

        <div
          className="
          max-w-3xl
          "
        >

          <p
            className="
            mb-4
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-[hsl(var(--primary))]
            "
          >
            {isSpanish
              ? "Información de viaje"
              : "Travel Information"}
          </p>


          <h2
            className="
            font-[family-name:var(--font-cormorant)]
            text-5xl
            leading-tight
            font-semibold
            tracking-tight
            text-[hsl(var(--heading))]

            sm:text-6xl
            "
          >

            {isSpanish ? (
              <>
                ¿Preguntas antes de
                <br />

                <span
                  className="
                  text-[hsl(var(--primary))]
                  "
                >
                  tu viaje a Marruecos?
                </span>
              </>
            ) : (
              <>
                Questions Before
                <br />

                <span
                  className="
                  text-[hsl(var(--primary))]
                  "
                >
                  Your Morocco Journey?
                </span>
              </>
            )}

          </h2>


          <p
            className="
            mt-6
            max-w-2xl
            text-base
            leading-7
            text-[hsl(var(--text-secondary))]
            "
          >
            {isSpanish
              ? "Información práctica para ayudarte a preparar tu viaje a Marruecos antes de comenzar tu aventura."
              : "Everything you need to know before exploring Morocco with our local travel experts."}
          </p>

        </div>


        {/* FAQ */}

        <div
          className="
          mt-14
          max-w-4xl
          "
        >

          <div
            className="
            overflow-hidden
            rounded-3xl
            border
            border-[hsl(var(--border))]
            bg-white
            "
          >

            {faqs.map((faq, index) => (

              <details
                key={faq.question}
                className="
                group
                border-b
                border-[hsl(var(--border))]
                last:border-none
                "
              >

                <summary
                  className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  gap-5
                  px-6
                  py-6

                  sm:px-8
                  "
                >

                  <span
                    className="
                    text-sm
                    font-semibold
                    text-[hsl(var(--primary))]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  <h3
                    className="
                    flex-1
                    text-base
                    font-semibold
                    text-[hsl(var(--heading))]
                    "
                  >
                    {faq.question}
                  </h3>


                  <span
                    className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[hsl(var(--border))]
                    "
                  >
                    <ChevronIcon />
                  </span>

                </summary>


                <div
                  className="
                  px-6
                  pb-6
                  pl-16

                  sm:px-8
                  sm:pl-20
                  "
                >

                  <p
                    className="
                    max-w-2xl
                    text-sm
                    leading-7
                    text-[hsl(var(--text-secondary))]
                    "
                  >
                    {faq.answer}
                  </p>

                </div>

              </details>

            ))}

          </div>

        </div>


        {/* CTA */}

        <div
          className="
          mt-12
          flex
          flex-col
          gap-6
          rounded-3xl
          bg-[hsl(var(--secondary))]
          p-8

          sm:flex-row
          sm:items-center
          sm:justify-between
          "
        >

          <div>

            <p
              className="
              font-[family-name:var(--font-cormorant)]
              text-3xl
              font-semibold
              text-white
              "
            >
              {isSpanish
                ? "¿Necesitas ayuda para organizar tu viaje?"
                : "Need help planning your trip?"}
            </p>


            <p
              className="
              mt-2
              text-sm
              text-white/70
              "
            >
              {isSpanish
                ? "Habla con nuestro equipo local especializado en viajes por Marruecos."
                : "Speak with our Morocco travel specialists."}
            </p>

          </div>


          <Link
            href={contactHref}
            className="
            inline-flex
            rounded-full
            bg-[hsl(var(--primary))]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:opacity-90
            "
          >
            {isSpanish
              ? "Contactar →"
              : "Contact Us →"}
          </Link>

        </div>

      </div>

    </section>

  );

}