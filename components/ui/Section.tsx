import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  muted = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${muted ? "bg-paper-muted" : ""} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-medium text-brand-primary sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-ink-muted">{subtitle}</p>}
    </div>
  );
}
