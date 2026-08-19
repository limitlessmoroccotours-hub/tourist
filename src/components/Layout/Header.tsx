"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type DropdownItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
  mega?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "Tours",
    mega: true,
    dropdown: [
      {
        label: "Tours From Marrakech",
        href: "/tours/from-marrakech",
      },
      {
        label: "Tours From Fes",
        href: "/tours/from-fes",
      },
      {
        label: "Tours From Casablanca",
        href: "/tours/from-casablanca",
      },
      {
        label: "Tours From Errachidia",
        href: "/tours/from-errachidia",
      },
      {
        label: "Tours From Tangier",
        href: "/tours/from-tangier",
      },
      {
        label: "Tours From Agadir",
        href: "/tours/from-agadir",
      },
    ],
  },

  {
    label: "Day Trips",
    href: "/day-trips",
  },

  {
    label: "Custom Tour",
    href: "/custom-tour",
  },

  {
    label: "Special Offers",
    href: "/special-offers",
  },
  
  {
    label: "Shop",
    href: "/shop",
  },

  {
    label: "About Us",
    href: "/about-us",
  },

  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

function ChevronDown({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const isActive = (href?: string) => {
    if (!href) return false;

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--background)/0.96)] backdrop-blur-xl">

      {/* =========================================================
          DESKTOP HEADER
      ========================================================= */}

      <div className="mx-auto hidden h-[78px] max-w-[1280px] items-center justify-between px-6 lg:flex">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          className="group flex shrink-0 items-center"
        >
          <span className="font-[family-name:var(--font-cormorant)] text-[30px] font-semibold leading-none tracking-[-0.04em] text-[hsl(var(--heading))]">
            karrakevh          </span>

          <span className="font-[family-name:var(--font-cormorant)] text-[30px] font-semibold leading-none tracking-[-0.04em] text-[hsl(var(--primary))]">
            Trip
          </span>

          <span className="ml-1.5 mt-[-14px] h-1.5 w-1.5 rounded-full bg-[hsl(var(--gold))]" />
        </Link>

        {/* Navigation */}
        <nav className="flex h-full items-center gap-1">

          {navItems.map((item) => {
            const hasDropdown = !!item.dropdown;
            const active = isActive(item.href);

            return (
              <div
                key={item.label}
                className="relative flex h-full items-center"
                onMouseEnter={() =>
                  hasDropdown && setOpenDropdown(item.label)
                }
                onMouseLeave={() =>
                  hasDropdown && setOpenDropdown(null)
                }
              >
                {hasDropdown ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                    className={`flex h-full items-center gap-2 px-3.5 text-[14px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                      openDropdown === item.label || active
                        ? "text-[hsl(var(--primary))]"
                        : "text-[hsl(var(--heading))] hover:text-[hsl(var(--primary))]"
                    }`}
                  >
                    {item.label}

                    <ChevronDown
                      open={openDropdown === item.label}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={closeMenus}
                    className={`relative flex h-full items-center px-3.5 text-[14px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                      active
                        ? "text-[hsl(var(--primary))]"
                        : "text-[hsl(var(--heading))] hover:text-[hsl(var(--primary))]"
                    }`}
                  >
                    {item.label}

                    {active && (
                      <span className="absolute bottom-[18px] left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]" />
                    )}
                  </Link>
                )}

                {/* Dropdown */}
                {hasDropdown && openDropdown === item.label && (
                  <div
                    className={`absolute left-1/2 top-[78px] -translate-x-1/2 ${
                      item.mega ? "w-[620px]" : "w-[330px]"
                    }`}
                  >
                    <div className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 shadow-[0_20px_50px_rgba(16,24,48,0.12)]">

                      {/* Small gold top line */}
                      <div className="mb-2 h-[2px] w-10 rounded-full bg-[hsl(var(--primary))]" />

                      <div
                        className={
                          item.mega
                            ? "grid grid-cols-2 gap-x-2"
                            : "flex flex-col"
                        }
                      >
                        {item.dropdown!.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            onClick={closeMenus}
                            className="group flex items-center justify-between rounded-lg px-4 py-3 text-[14px] font-medium text-[hsl(var(--text-main))] transition-all duration-200 hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
                          >
                            <span>{dropdownItem.label}</span>

                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                            >
                              <path d="M5 12h14" />
                              <path d="m13 6 6 6-6 6" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          onClick={closeMenus}
          className="group ml-4 inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 text-[13px] font-bold tracking-wide text-[hsl(var(--primary-foreground))] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--primary-hover))] hover:shadow-md"
        >
          Plan Your Trip
          <ArrowRight />
        </Link>
      </div>

      {/* =========================================================
          MOBILE HEADER
      ========================================================= */}

      <div className="flex h-[72px] items-center justify-between px-5 lg:hidden">

        {/* Mobile Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          className="flex items-center"
        >
          <span className="font-[family-name:var(--font-cormorant)] text-[28px] font-semibold leading-none tracking-[-0.04em] text-[hsl(var(--heading))]">
            Moroccan
          </span>

          <span className="font-[family-name:var(--font-cormorant)] text-[28px] font-semibold leading-none tracking-[-0.04em] text-[hsl(var(--primary))]">
            Trip
          </span>

          <span className="ml-1 mt-[-13px] h-1.5 w-1.5 rounded-full bg-[hsl(var(--gold))]" />
        </Link>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3">

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={closeMenus}
            className="hidden h-10 items-center rounded-full bg-[hsl(var(--primary))] px-4 text-[12px] font-bold text-[hsl(var(--primary-foreground))] sm:flex"
          >
            Plan Your Trip
          </Link>

          {/* Menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--heading))]"
          >
            {mobileOpen ? (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}

      <div
        className={`overflow-hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--background))] transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[calc(100vh-72px)] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="max-h-[calc(100vh-72px)] overflow-y-auto px-5 py-4">

          {navItems.map((item) => {
            const hasDropdown = !!item.dropdown;
            const active = isActive(item.href);

            return (
              <div
                key={item.label}
                className="border-b border-[hsl(var(--border))]"
              >
                {hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label
                            ? null
                            : item.label
                        )
                      }
                      className={`flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold ${
                        mobileDropdown === item.label || active
                          ? "text-[hsl(var(--primary))]"
                          : "text-[hsl(var(--heading))]"
                      }`}
                    >
                      {item.label}

                      <ChevronDown
                        open={mobileDropdown === item.label}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileDropdown === item.label
                          ? "max-h-[500px] pb-3"
                          : "max-h-0"
                      }`}
                    >
                      {item.dropdown!.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          onClick={closeMenus}
                          className="block py-2.5 pl-3 text-[14px] text-[hsl(var(--text-secondary))] transition-colors hover:text-[hsl(var(--primary))]"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={closeMenus}
                    className={`block py-4 text-[15px] font-semibold ${
                      active
                        ? "text-[hsl(var(--primary))]"
                        : "text-[hsl(var(--heading))]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={closeMenus}
            className="group mt-5 flex h-12 items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] text-[13px] font-bold text-[hsl(var(--primary-foreground))] shadow-sm transition-all duration-200 hover:bg-[hsl(var(--primary-hover))]"
          >
            Plan Your Trip
            <ArrowRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}