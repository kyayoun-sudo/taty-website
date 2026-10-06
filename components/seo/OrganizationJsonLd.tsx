import { siteConfig } from "@/config/site";

/**
 * Organization structured data. Fields still marked as placeholders in
 * config/site.ts flow straight into this schema — update them there,
 * not here, once TATY & Associés confirms the details.
 */
export function OrganizationJsonLd() {
  const office = siteConfig.offices[0];
  const json = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.firmName,
    url: "https://www.taty-associes.ci",
    address: office
      ? {
          "@type": "PostalAddress",
          streetAddress: office.addressLines.join(", "),
          addressCountry: "CI",
        }
      : undefined,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: "CI",
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
