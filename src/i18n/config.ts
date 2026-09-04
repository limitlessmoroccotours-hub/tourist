export const locales = [
    "es",
    "it",
  ] as const;
  
  export type Locale = (typeof locales)[number];
  
  export const defaultLocale = "en";