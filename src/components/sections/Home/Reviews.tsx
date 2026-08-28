export default function Reviews() {
    return (
      <section
        id="reviews"
        className="bg-[#faf7f2] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c85f13]">
              Traveler Reviews
            </p>
  
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#17213c] sm:text-5xl">
              What Travelers Say
              <span className="text-[#c85f13]"> About Our Team</span>
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#606575] sm:text-base">
              Moroccan Trip is operated by the same local team behind Limitless
              Morocco Tours. These Tripadvisor reviews were shared by travelers
              who experienced Morocco with our team through Limitless Morocco
              Tours.
            </p>
  
            <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-[#747987] sm:text-sm">
              <span
                aria-hidden="true"
                className="font-semibold text-[#177245]"
              >
                ✓
              </span>
  
              <span>
                Verified Tripadvisor reviews from our team&apos;s Limitless
                Morocco Tours profile
              </span>
            </div>
          </div>
  
          {/* Reviews Grid */}
          <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
            {/* Review 1 */}
            <article className="flex h-full flex-col rounded-2xl border border-[#e7ded3] bg-white p-6 shadow-[0_8px_30px_rgba(23,33,60,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(23,33,60,0.09)] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                  className="text-lg tracking-[2px] text-[#c85f13]"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
  
                <span className="rounded-full border border-[#d9e9df] bg-[#f5faf7] px-3 py-1 text-[11px] font-semibold text-[#177245]">
                  Tripadvisor · Limitless Morocco Tours
                </span>
              </div>
  
              <h3 className="mt-5 text-xl font-semibold leading-snug text-[#17213c]">
                Amazing 4-Day Morocco Tour
              </h3>
  
              <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-[#606575]">
                “We had an amazing 4-day tour from Marrakech to Fes with
                Limitless Morocco Tours. Our driver, Mohamed, was very kind,
                friendly, and professional. The trip through the Sahara Desert
                was the best part of our visit to Morocco. Everything was well
                organized, and we couldn&apos;t have asked for a better
                experience.”
              </blockquote>
  
              <div className="mt-7 border-t border-[#eee6dc] pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#17213c]">
                      Anna Marziano
                    </p>
  
                    <p className="mt-1 text-sm text-[#7a7e8b]">
                      Palermo, Italy
                    </p>
                  </div>
  
                  <span className="shrink-0 text-sm text-[#7a7e8b]">
                    June 2026
                  </span>
                </div>
  
                <a
                  href="https://www.tripadvisor.fr/ShowUserReviews-g293734-d33115204-r1068720624-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c85f13] transition hover:text-[#a94d0d]"
                >
                  Read full review
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
  
            {/* Review 2 */}
            <article className="flex h-full flex-col rounded-2xl border border-[#e7ded3] bg-white p-6 shadow-[0_8px_30px_rgba(23,33,60,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(23,33,60,0.09)] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                  className="text-lg tracking-[2px] text-[#c85f13]"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
  
                <span className="rounded-full border border-[#d9e9df] bg-[#f5faf7] px-3 py-1 text-[11px] font-semibold text-[#177245]">
                  Tripadvisor · Limitless Morocco Tours
                </span>
              </div>
  
              <h3 className="mt-5 text-xl font-semibold leading-snug text-[#17213c]">
                Incredible Desert Journey with Local Team
              </h3>
  
              <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-[#606575]">
                “We had a wonderful experience with the Limitless Morocco Team.
                Communication was flawless — polite, clear, and friendly. We
                booked a 4-day trip from Marrakech to the Sahara Desert by
                private vehicle, including a 4x4 desert excursion. We always felt
                safe and well looked after.”
              </blockquote>
  
              <div className="mt-7 border-t border-[#eee6dc] pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#17213c]">
                      Opal
                    </p>
  
                    <p className="mt-1 text-sm text-[#7a7e8b]">
                      Oxford, United Kingdom
                    </p>
                  </div>
  
                  <span className="shrink-0 text-sm text-[#7a7e8b]">
                    Feb 2026
                  </span>
                </div>
  
                <a
                  href="https://www.tripadvisor.fr/ShowUserReviews-g293734-d33115204-r1051809232-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c85f13] transition hover:text-[#a94d0d]"
                >
                  Read full review
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
  
            {/* Review 3 */}
            <article className="flex h-full flex-col rounded-2xl border border-[#e7ded3] bg-white p-6 shadow-[0_8px_30px_rgba(23,33,60,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(23,33,60,0.09)] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                  className="text-lg tracking-[2px] text-[#c85f13]"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
  
                <span className="rounded-full border border-[#d9e9df] bg-[#f5faf7] px-3 py-1 text-[11px] font-semibold text-[#177245]">
                  Tripadvisor · Limitless Morocco Tours
                </span>
              </div>
  
              <h3 className="mt-5 text-xl font-semibold leading-snug text-[#17213c]">
                Best Experience Ever
              </h3>
  
              <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-[#606575]">
                “Our 9-day journey with Limitless Morocco Tours was truly
                unforgettable. Hssain, our driver, made the whole experience
                smooth and enjoyable. We explored vibrant cities, crossed both
                the Mid and High Atlas Mountains, and enjoyed a magical night in
                the desert after a camel ride.”
              </blockquote>
  
              <div className="mt-7 border-t border-[#eee6dc] pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#17213c]">
                      TRIBUTUM A
                    </p>
  
                    <p className="mt-1 text-sm text-[#7a7e8b]">
                      Cali, Colombia
                    </p>
                  </div>
  
                  <span className="shrink-0 text-sm text-[#7a7e8b]">
                    June 2025
                  </span>
                </div>
  
                <a
                  href="https://www.tripadvisor.fr/ShowUserReviews-g293734-d33115204-r1020593679-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c85f13] transition hover:text-[#a94d0d]"
                >
                  Read full review
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
  
          {/* Tripadvisor CTA */}
          <div className="mt-10 flex justify-center sm:mt-12">
            <a
              href="https://www.tripadvisor.fr/Attraction_Review-g293734-d33115204-Reviews-Limitless_morocco_tours-Marrakech_Marrakech_Safi.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c85f13] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#a94d0d]"
            >
              See Our Team Reviews on Tripadvisor
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    );
  }