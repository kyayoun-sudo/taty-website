/**
 * CONTENT STATUS SYSTEM
 * -----------------------------------------------------------------------
 * Every editable content item (service, team member, industry, article,
 * office...) carries a ContentStatus. This lets the site progressively
 * go from placeholders to fully confirmed content without any component
 * or page rewrite.
 *
 *  - draft      content exists but is NOT ready to be public-facing.
 *               It renders only in non-production previews, with a
 *               visible "Draft" badge — never as if it were confirmed.
 *  - confirmed  officially confirmed by TATY & Associés. Renders normally.
 *  - hidden     must not appear on the public site at all.
 * -----------------------------------------------------------------------
 */

export type ContentStatus = "draft" | "confirmed" | "hidden";

export interface StatusedItem {
  status: ContentStatus;
}

/**
 * Whether drafts should currently be visible on the site.
 * Controlled by NEXT_PUBLIC_SHOW_DRAFTS so drafts can be reviewed on a
 * preview deployment while staying off the public production build.
 * Defaults to "show drafts" so placeholders remain visible until you
 * explicitly set NEXT_PUBLIC_SHOW_DRAFTS=false for a production launch.
 */
export function draftsAreVisible(): boolean {
  return process.env.NEXT_PUBLIC_SHOW_DRAFTS !== "false";
}

/** Filters a list down to what should currently render publicly. */
export function getVisible<T extends StatusedItem>(items: readonly T[]): T[] {
  const showDrafts = draftsAreVisible();
  return items.filter((item) => {
    if (item.status === "hidden") return false;
    if (item.status === "draft" && !showDrafts) return false;
    return true;
  });
}

/** True if an item should render at all (used for single-item pages). */
export function isVisible(item: StatusedItem): boolean {
  if (item.status === "hidden") return false;
  if (item.status === "draft" && !draftsAreVisible()) return false;
  return true;
}
