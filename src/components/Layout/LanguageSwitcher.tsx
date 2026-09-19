"use client";

import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
} from "react";


export default function LanguageSwitcher({
  mobile = false,
}: {
  mobile?: boolean;
}) {

  const pathname = usePathname();

  const isSpanish =
    pathname === "/es" ||
    pathname.startsWith("/es/");


  const [open, setOpen] =
    useState(false);


  const wrapperRef =
    useRef<HTMLDivElement>(null);


  useEffect(() => {

    function handleOutsideClick(
      event: MouseEvent
    ) {

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }

    }


    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

    };

  }, []);


  useEffect(() => {
    setOpen(false);
  }, [pathname]);


  const languageUrl = (
    language: "en" | "es"
  ) => {

    return (
      `/api/switch-language?lang=${language}` +
      `&path=${encodeURIComponent(pathname)}`
    );

  };


  return (

    <div
      ref={wrapperRef}
      className={`
        relative
        ${mobile ? "w-full" : ""}
      `}
    >


      {/* BUTTON */}

      <button
        type="button"

        aria-haspopup="menu"

        aria-expanded={open}

        onClick={() =>
          setOpen((current) => !current)
        }

        className={`
          group
          flex
          items-center
          justify-between
          gap-3
          rounded-full
          border
          border-[hsl(var(--border))]
          bg-[hsl(var(--background))]
          text-[hsl(var(--heading))]
          transition-all
          duration-200

          hover:border-[hsl(var(--primary)/0.35)]
          hover:bg-[hsl(var(--muted))]

          ${
            mobile
              ? "w-full px-5 py-3.5"
              : "px-5 py-3"
          }
        `}
      >


        <span
          className="
          flex
          items-center
          gap-3
          "
        >


          {/* Globe */}

          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"

            className="
            text-[hsl(var(--primary))]
            "
          >

            <circle
              cx="12"
              cy="12"
              r="9"
            />

            <path
              d="M3 12h18"
            />

            <path
              d="M12 3a15 15 0 0 1 0 18"
            />

            <path
              d="M12 3a15 15 0 0 0 0 18"
            />

          </svg>


          {/* Language code */}

          <span
            className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[hsl(var(--primary))]
            "
          >
            {isSpanish ? "ES" : "EN"}
          </span>


          {/* Language */}

          <span
            className="
            text-sm
            font-semibold
            "
          >
            {isSpanish
              ? "Español"
              : "English"}
          </span>


        </span>


        {/* Chevron */}

        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"

          className={`
            transition-transform
            duration-200

            ${open ? "rotate-180" : ""}
          `}
          aria-hidden="true"
        >

          <path d="m6 9 6 6 6-6" />

        </svg>


      </button>


      {/* DROPDOWN */}

      {open && (

        <div
          role="menu"

          className={`
            z-[100]
            mt-2
            overflow-hidden
            rounded-2xl
            border
            border-[hsl(var(--border))]
            bg-[hsl(var(--card))]
            p-2
            shadow-[0_18px_50px_rgba(15,23,42,0.14)]

            ${
              mobile
                ? "relative w-full"
                : "absolute right-0 w-[220px]"
            }
          `}
        >


          {/* ENGLISH */}

          <a
            href={languageUrl("en")}

            role="menuitem"

            className={`
              flex
              items-center
              justify-between
              rounded-xl
              px-4
              py-3
              transition

              ${
                !isSpanish
                  ? "bg-[hsl(var(--muted))]"
                  : "hover:bg-[hsl(var(--muted))]"
              }
            `}
          >

            <span
              className="
              flex
              items-center
              gap-3
              "
            >

              <span
                className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[hsl(var(--primary)/0.10)]
                text-[10px]
                font-bold
                tracking-wide
                text-[hsl(var(--primary))]
                "
              >
                EN
              </span>


              <span>

                <span
                  className="
                  block
                  text-sm
                  font-semibold
                  text-[hsl(var(--heading))]
                  "
                >
                  English
                </span>

                <span
                  className="
                  mt-0.5
                  block
                  text-[11px]
                  text-[hsl(var(--text-secondary))]
                  "
                >
                  English version
                </span>

              </span>

            </span>


            {!isSpanish && (

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"

                className="
                text-[hsl(var(--primary))]
                "
              >
                <path d="m5 12 4 4L19 6" />
              </svg>

            )}

          </a>


          {/* SPANISH */}

          <a
            href={languageUrl("es")}

            role="menuitem"

            className={`
              mt-1
              flex
              items-center
              justify-between
              rounded-xl
              px-4
              py-3
              transition

              ${
                isSpanish
                  ? "bg-[hsl(var(--muted))]"
                  : "hover:bg-[hsl(var(--muted))]"
              }
            `}
          >

            <span
              className="
              flex
              items-center
              gap-3
              "
            >

              <span
                className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[hsl(var(--primary)/0.10)]
                text-[10px]
                font-bold
                tracking-wide
                text-[hsl(var(--primary))]
                "
              >
                ES
              </span>


              <span>

                <span
                  className="
                  block
                  text-sm
                  font-semibold
                  text-[hsl(var(--heading))]
                  "
                >
                  Español
                </span>

                <span
                  className="
                  mt-0.5
                  block
                  text-[11px]
                  text-[hsl(var(--text-secondary))]
                  "
                >
                  Versión en español
                </span>

              </span>

            </span>


            {isSpanish && (

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"

                className="
                text-[hsl(var(--primary))]
                "
              >
                <path d="m5 12 4 4L19 6" />
              </svg>

            )}

          </a>


        </div>

      )}


    </div>

  );

}