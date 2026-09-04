import { notFound } from "next/navigation";

import HomePage from "@/components/sections/Home/HomePage";
import type { Locale } from "@/i18n/config";

export default async function LanguageHome({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}) {
  const { lang } = await params;

  if (lang !== "es") {
    notFound();
  }

  return <HomePage />;
}