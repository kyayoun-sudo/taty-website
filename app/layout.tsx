import type { Metadata } from "next";
import "./globals.css";

/**
 * FONTS
 * -----------------------------------------------------------------------
 * Placeholder typefaces until TATY & Associés provides official brand
 * fonts. Deliberately using system font stacks (defined as CSS variables
 * in globals.css / --font-display-family & --font-body-family) instead
 * of next/font/google so the build never depends on outbound network
 * access. To switch to the real brand fonts later:
 *   1. If they are Google Fonts, use next/font/google here and assign
 *      the returned `variable` to --font-display-family / --font-body-family.
 *   2. If they are licensed/self-hosted files, use next/font/local and
 *      drop the files in /public/fonts.
 * No other file needs to change — every component reads the CSS
 * variables `font-display` / `font-sans` from the Tailwind theme.
 * -----------------------------------------------------------------------
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taty-associes.ci"),
  title: {
    default: "TATY & Associés",
    template: "%s | TATY & Associés",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
