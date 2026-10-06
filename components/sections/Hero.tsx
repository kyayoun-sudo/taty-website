import { Locale, localizedHref, type Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="border-b border-line bg-brand-primary text-white">
      <Container className="flex min-h-[70vh] flex-col justify-center py-24">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent-light">
          {dict.home.heroEyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          {dict.home.heroTitleFallback}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/75">{dict.home.heroSubtitleFallback}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={localizedHref(locale, "/le-cabinet")} variant="primary" className="!bg-white !text-brand-primary !border-white hover:!bg-white/90">
            {dict.home.heroCtaPrimary}
          </Button>
          <Button href={localizedHref(locale, "/services")} variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-brand-primary">
            {dict.home.heroCtaSecondary}
          </Button>
        </div>
      </Container>
    </section>
  );
}
