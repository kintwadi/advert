import { en } from "@/lib/i18n/dictionaries/en";
import { pt } from "@/lib/i18n/dictionaries/pt";
import { isSupportedLocale, Locale } from "@/lib/i18n/config";

export type Dictionary = typeof en | typeof pt;

export async function getDictionary(locale: string): Promise<Dictionary> {
  const normalized: Locale = isSupportedLocale(locale) ? locale : "en";
  switch (normalized) {
    case "pt":
      return pt;
    case "en":
    default:
      return en;
  }
}
