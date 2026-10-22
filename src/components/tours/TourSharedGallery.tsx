
import Image from "next/image";

const sharedImages = [
  {
    src: "/images/tours/7-day-morocco-imperial-cities-tour.webp",
    altEn: "Morocco imperial cities travel experience",
    altEs: "Experiencia de viaje por las ciudades imperiales de Marruecos",
  },
  {
    src: "/images/about/moroccan-trip-team-guests-1.webp",
    altEn: "Travelers with the Moroccan Trip team in Morocco",
    altEs: "Viajeros con el equipo de Moroccan Trip en Marruecos",
  },
  {
    src: "/images/about/moroccan-trip-team-guests-2.webp",
    altEn: "Moroccan Trip guests and local travel team",
    altEs: "Viajeros y equipo local de Moroccan Trip",
  },
  {
    src: "/images/about/moroccan-trip-team-guests-3.webp",
    altEn: "Travelers enjoying a Morocco tour with our team",
    altEs: "Viajeros disfrutando de un tour por Marruecos con nuestro equipo",
  },
  {
    src: "/images/about/moroccan-trip-team-guests-5.webp",
    altEn: "Guests during a Morocco travel experience",
    altEs: "Viajeros durante una experiencia en Marruecos",
  },
  {
    src: "/images/special-offers/morocco-desert-tour.webp",
    altEn: "Morocco Sahara Desert tour experience",
    altEs: "Experiencia de viaje por el desierto del Sahara en Marruecos",
  },
  {
    src: "/images/special-offers/morocco-luxury-tours.webp",
    altEn: "Private Morocco travel experience",
    altEs: "Experiencia de viaje privado por Marruecos",
  },
];

type Props = {
  language?: "en" | "es";
};

export default function TourSharedGallery({
  language = "en",
}: Props) {
  const isSpanish = language === "es";

  return (
    <section className="rounded-[30px] border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-[0_8px_30px_rgba(28,20,13,0.035)] sm:p-8 lg:p-9">

      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))]">
        {isSpanish
          ? "EXPERIENCIAS REALES"
          : "REAL TRAVEL EXPERIENCES"}
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[hsl(var(--heading))] sm:text-3xl">
        {isSpanish
          ? "Momentos reales de nuestros viajes"
          : "Real Moments from Our Morocco Tours"}
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-[hsl(var(--heading)/0.85)]">
        {isSpanish
          ? "Descubre fotografías de viajeros y experiencias de diferentes tours organizados por nuestro equipo local en Marruecos."
          : "Explore photos of travelers and experiences from different Morocco tours organized by our local team."}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
        {sharedImages.map((image, index) => (
          <div
            key={image.src}
            className={`relative overflow-hidden rounded-2xl bg-[hsl(var(--surface-soft))] ${
              index === 0
                ? "col-span-2 aspect-[16/9]"
                : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image.src}
              alt={isSpanish ? image.altEs : image.altEn}
              fill
              sizes={
                index === 0
                  ? "(max-width: 1024px) 100vw, 800px"
                  : "(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 360px"
              }
              className="object-cover"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
