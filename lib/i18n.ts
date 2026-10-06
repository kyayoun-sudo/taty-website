export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

const dictionaries = {
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["fr"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries[defaultLocale];
  return loader();
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Builds an href for the given locale, omitting the prefix for the default locale. */
export function localizedHref(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean}`;
}

/**
 * A piece of content translated into every supported locale. Used across
 * /content data files so every service, bio, industry note etc. is ready
 * for English the moment a real translation is provided — swap the
 * string, nothing else changes.
 */
export type LocalizedText = Record<Locale, string>;

/** Picks the string for the current locale out of a LocalizedText object. */
export function t(locale: Locale, value: LocalizedText): string {
  return value[locale] ?? value[defaultLocale];
}
