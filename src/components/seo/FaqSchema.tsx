type FAQ = {
    question: string;
    answer: string;
  };
  
  export default function FaqSchema({
    faqs,
    language = "en",
  }: {
    faqs: FAQ[];
    language?: "en" | "es";
  }) {
  
    if (!faqs || faqs.length === 0) {
      return null;
    }
  
  
    const schema = {
      "@context": "https://schema.org",
  
      "@type": "FAQPage",
  
      inLanguage:
        language === "es"
          ? "es"
          : "en",
  
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
  
        name: faq.question,
  
        acceptedAnswer: {
          "@type": "Answer",
  
          text: faq.answer,
        },
      })),
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