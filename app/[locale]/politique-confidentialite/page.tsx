import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata = { title: "Politique de confidentialité", robots: { index: false } };

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  return (
    <Section>
      <SectionHeading title={isFr ? "Politique de confidentialité" : "Privacy Policy"} />
      <div className="max-w-2xl">
        <PlaceholderNotice>
          {isFr
            ? "La politique de confidentialité (traitement des données du formulaire de contact et de candidature, cookies, durée de conservation...) sera rédigée avec TATY & Associés avant la mise en production."
            : "The privacy policy (handling of contact/application form data, cookies, retention periods...) will be drafted with TATY & Associés before going live."}
        </PlaceholderNotice>
      </div>
    </Section>
  );
}