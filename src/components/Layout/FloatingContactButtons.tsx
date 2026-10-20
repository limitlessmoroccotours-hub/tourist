
"use client";

import { Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "212607747056";
const EMAIL_ADDRESS = "contact@moroccan-trip.com";

export default function FloatingContactButtons() {
  const pathname = usePathname();

  const isSpanish =
    pathname === "/es" || pathname.startsWith("/es/");

  // Tour detail pages have a fixed mobile booking bar.
  const hasMobileBookingBar =
    /^\/tours\/(?!from-)[^/]+\/?$/.test(pathname) ||
    /^\/es\/tours\/(?!desde-)[^/]+\/?$/.test(pathname);

  const message = isSpanish
    ? `Hola Moroccan Trip, me gustaría recibir información sobre: https://moroccan-trip.com${pathname}`
    : `Hello Moroccan Trip, I would like information about: https://moroccan-trip.com${pathname}`;

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const emailSubject = isSpanish
    ? "Consulta - Moroccan Trip"
    : "Enquiry - Moroccan Trip";

  const emailUrl =
    `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <div
      className={`fixed right-4 z-[45] flex flex-col gap-3 lg:bottom-6 lg:right-6 ${
        hasMobileBookingBar
          ? "bottom-[calc(6.5rem+env(safe-area-inset-bottom))]"
          : "bottom-[calc(1.25rem+env(safe-area-inset-bottom))]"
      }`}
      aria-label={isSpanish ? "Opciones de contacto" : "Contact options"}
    >
      {/* WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          isSpanish ? "Contactar por WhatsApp" : "Contact on WhatsApp"
        }
        title="WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-14 sm:w-14"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-7 w-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.057-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.1-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.073c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.711.226 1.358.194 1.87.118.57-.085 1.758-.719 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.862 9.862 0 0 1-1.51-5.26c.002-5.44 4.43-9.868 9.884-9.868a9.81 9.81 0 0 1 6.977 2.894 9.81 9.81 0 0 1 2.89 6.984c-.002 5.44-4.43 9.868-9.867 9.868m8.413-18.28A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.894c0 2.096.547 4.143 1.586 5.946L0 24l6.305-1.654a11.89 11.89 0 0 0 5.74 1.462h.005c6.557 0 11.893-5.336 11.896-11.895a11.82 11.82 0 0 0-3.482-8.413Z" />
        </svg>
      </a>

      {/* EMAIL */}
      <a
        href={emailUrl}
        aria-label={
          isSpanish ? "Contactar por correo" : "Contact by email"
        }
        title={isSpanish ? "Correo electrónico" : "Email"}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c85f13] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-14 sm:w-14"
      >
        <Mail className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
