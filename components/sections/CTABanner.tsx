import { Locale, localizedHref } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTABanner({
  locale,
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/contact",
}: {
  locale: Locale;
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-brand-primary text-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-medium sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-3 text-white/75">{subtitle}</p>}
        </div>
        <Button href={localizedHref(locale, ctaHref)} variant="primary" className="!bg-white !text-brand-primary !border-white hover:!bg-white/90 shrink-0">
          {ctaLabel}
        </Button>
      </Container>
    </section>
  );
}
