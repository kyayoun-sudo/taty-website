import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-dark border border-brand-primary",
  secondary:
    "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white",
  ghost:
    "bg-transparent text-brand-accent border border-transparent hover:underline underline-offset-4",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
