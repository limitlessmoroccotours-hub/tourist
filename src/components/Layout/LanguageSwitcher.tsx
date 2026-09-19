"use client";

import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
} from "react";


type LanguageSwitcherProps = {
  mobile?: boolean;
  compact?: boolean;
};


export default function LanguageSwitcher({
  mobile = false,
  compact = false,
}: LanguageSwitcherProps) {

  const pathname = usePathname();


  const isSpanish =
    pathname === "/es" ||
    pathname.startsWith("/es/");


  const [open, setOpen] =
    useState(false);


  const wrapperRef =
    useRef<HTMLDivElement>(null);


  // ─────────────────────────────
  // CLOSE ON OUTSIDE CLICK
  // ─────────────────────────────

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


  // ─────────────────────────────
  // CLOSE WITH ESC
  // ─────────────────────────────

  useEffect(() => {

    function handleKeyDown(
      event: KeyboardEvent
    ) {

      if (event.key === "Escape") {
        setOpen(false);
      }

    }


    document.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, []);


  // ─────────────────────────────
  // CLOSE AFTER NAVIGATION
  // ─────────────────────────────

  useEffect(() => {
    setOpen(false);
  }, [pathname]);


  // ─────────────────────────────
  // LANGUAGE URL
  // ─────────────────────────────

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

        ${
          mobile
            ? "w-full"
            : ""
        }
      `}
    >


      {/* ================= BUTTON ================= */}

      <button
        type="button"

        aria-label={
          isSpanish
            ? "Cambiar idioma"
            : "Change language"
        }

        aria-haspopup="menu"

        aria-expanded={open}

        onClick={() =>
          setOpen(
            (current) => !current
          )
        }

        className={`
          group
          flex
          items-center
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
            compact
              ? `
                h-10
                min-w-[66px]
                justify-center
                gap-2
                px-3
              `
              : mobile
                ? `
                  w-full
                  justify-between
                  gap-3
                  px-5
                  py-3.5
                `
                : `
                  justify-between
                  gap-3
                  px-5
                  py-3
                `
          }
        `}
      >


        <span
          className={`
            flex
            items-center

            ${
              compact
                ? "gap-2"
                : "gap-3"
            }
          `}
        >


          {/* Globe */}

          <svg
            width={compact ? 16 : 18}
            height={compact ? 16 : 18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"

            className="
            shrink-0
            text-[hsl(var(--primary))]
            "
          >

            <circle
              cx="12"
              cy="12"
              r="9"
            />

            <path d="M3 12h18" />

            <path
              d="M12 3a15 15 0 0 1 0 18"
            />

            <path
              d="M12 3a15 15 0 0 0 0 18"
            />

          </svg>


          {/* Language Code */}

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


          {/* Full Language Name - hidden in compact mode */}

          {!compact && (

            <span
              className="
              whitespace-nowrap
              text-sm
              font-semibold
              "
            >
              {isSpanish
                ? "Español"
                : "English"}
            </span>

          )}


        </span>


        {/* Chevron */}

        <svg
          width={compact ? 12 : 14}
          height={compact ? 12 : 14}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"

          className={`
            shrink-0
            transition-transform
            duration-200

            ${
              open
                ? "rotate-180"
                : ""
            }
          `}
        >

          <path d="m6 9 6 6 6-6" />

        </svg>


      </button>


      {/* ================= DROPDOWN ================= */}

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
                ? `
                  relative
                  w-full
                `
                : compact
                  ? `
                    absolute
                    right-0
                    w-[210px]
                  `
                  : `
                    absolute
                    right-0
                    w-[220px]
                  `
            }
          `}
        >


          {/* ================= ENGLISH ================= */}

          <a
            href={languageUrl("en")}

            role="menuitem"

            aria-current={
              !isSpanish
                ? "page"
                : undefined
            }

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
                shrink-0
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


                {!compact && (

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

                )}

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
                aria-hidden="true"

                className="
                shrink-0
                text-[hsl(var(--primary))]
                "
              >
                <path d="m5 12 4 4L19 6" />
              </svg>

            )}


          </a>


          {/* ================= SPANISH ================= */}

          <a
            href={languageUrl("es")}

            role="menuitem"

            aria-current={
              isSpanish
                ? "page"
                : undefined
            }

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
                shrink-0
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


                {!compact && (

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

                )}

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
                aria-hidden="true"

                className="
                shrink-0
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