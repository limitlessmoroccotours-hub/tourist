const faqs = [
    {
      question: "When is the best time to visit Morocco?",
      answer:
        "The best time to visit Morocco is during spring (March to May) and autumn (September to November). These seasons offer comfortable temperatures for exploring the cities, mountains, and Sahara Desert.",
    },
    {
      question: "Do I need a visa to travel to Morocco?",
      answer:
        "Visa requirements depend on your nationality. Many travelers can visit Morocco without a visa for short stays, while others may need to apply in advance. We recommend checking the latest requirements with the Moroccan embassy or consulate in your country.",
    },
    {
      question: "What currency should I use in Morocco?",
      answer:
        "The official currency is the Moroccan Dirham (MAD). Cards are accepted in most hotels, restaurants, and larger businesses, while cash is recommended for local markets, smaller shops, and some rural areas.",
    },
    {
      question: "How many days do I need for a Sahara Desert tour?",
      answer:
        "For a first Sahara experience from Marrakech, we recommend at least 3 days and 2 nights. If you prefer a more relaxed journey, a 4-day itinerary gives you more time to enjoy the Atlas Mountains, Dades Valley, Merzouga, and the desert camp.",
    },
    {
      question: "Is Morocco safe for tourists and solo travelers?",
      answer:
        "Morocco is a welcoming destination for travelers. As with any international trip, staying aware of your surroundings is recommended, especially in busy medinas and tourist areas. A private tour with a trusted local team can make your journey even more comfortable.",
    },
    {
      question: "What should I pack for a Morocco trip?",
      answer:
        "Bring comfortable walking shoes, lightweight clothing, sun protection, and a light jacket for cooler evenings. If you are visiting the Sahara, warm layers are especially useful during winter nights.",
    },
  ];
  
  function ChevronIcon() {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    );
  }
  
  export default function FAQs() {
    return (
      <section className="relative overflow-hidden bg-[hsl(var(--background))] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
  
        {/* Decorative background element */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[hsl(var(--gold-muted))] opacity-40 blur-3xl"
        />
  
        <div className="relative mx-auto max-w-[1180px]">
  
          {/* Header */}
          <div className="mx-auto max-w-[720px] text-center">
  
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[hsl(var(--primary))]" />
  
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--primary))]">
                Travel Guide
              </span>
  
              <span className="h-px w-10 bg-[hsl(var(--primary))]" />
            </div>
  
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[hsl(var(--heading))]">
              Questions Before
              <span className="block text-[hsl(var(--primary))]">
                Your Moroccan Journey?
              </span>
            </h2>
  
            <p className="mx-auto mt-6 max-w-[600px] text-sm leading-7 text-[hsl(var(--text-secondary))] sm:text-base">
              Find answers to the most common questions travelers ask before
              discovering Morocco with us.
            </p>
  
          </div>
  
          {/* FAQ */}
          <div className="mx-auto mt-14 max-w-[1000px]">
  
            <div className="divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))]">
  
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group"
                >
  
                  <summary className="relative flex cursor-pointer list-none items-center gap-5 py-6 sm:py-7 marker:hidden">
  
                    {/* Number */}
                    <span className="w-8 shrink-0 font-[family-name:var(--font-cormorant)] text-sm font-semibold text-[hsl(var(--primary))]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
  
                    {/* Question */}
                    <span className="flex-1 pr-4 font-[family-name:var(--font-manrope)] text-[15px] font-semibold leading-6 text-[hsl(var(--heading))] transition-colors duration-300 group-open:text-[hsl(var(--primary))] sm:text-base">
                      {faq.question}
                    </span>
  
                    {/* Icon */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--heading))] transition-all duration-300 group-open:border-[hsl(var(--primary))] group-open:bg-[hsl(var(--primary))] group-open:text-[hsl(var(--primary-foreground))]">
                      <ChevronIcon />
                    </span>
  
                    {/* Active line */}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[hsl(var(--primary))] transition-all duration-500 group-open:w-16" />
  
                  </summary>
  
                  {/* Answer */}
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-open:grid-rows-[1fr]">
                    <div className="overflow-hidden">
  
                      <div className="pb-7 pl-13 pr-12 sm:pl-[52px] sm:pr-20">
  
                        <p className="max-w-[720px] text-sm leading-7 text-[hsl(var(--text-secondary))]">
                          {faq.answer}
                        </p>
  
                      </div>
  
                    </div>
                  </div>
  
                </details>
              ))}
  
            </div>
  
          </div>
  
          {/* Bottom CTA */}
          <div className="mx-auto mt-12 flex max-w-[1000px] flex-col items-start justify-between gap-5 rounded-2xl bg-[hsl(var(--secondary))] px-6 py-7 sm:flex-row sm:items-center sm:px-8">
  
            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[hsl(var(--secondary-foreground))]">
                Can't find your answer?
              </p>
  
              <p className="mt-1 text-xs leading-5 text-[hsl(var(--footer-muted))]">
                Talk to our Morocco travel specialists and start planning your
                journey.
              </p>
            </div>
  
            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:bg-[hsl(var(--primary-hover))] hover:shadow-lg"
            >
              Contact Us
  
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
  
          </div>
  
        </div>
      </section>
    );
  }