"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

export function ContactForm({ dict }: { dict: Dictionary; locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-5 border border-line bg-paper p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={dict.contact.formName} name="name" required />
        <Field label={dict.contact.formCompany} name="company" />
        <Field label={dict.contact.formEmail} name="email" type="email" required />
        <Field label={dict.contact.formPhone} name="phone" type="tel" />
      </div>
      <Field label={dict.contact.formSubject} name="subject" />
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">{dict.contact.formMessage}</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-brand-accent"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center justify-center border border-brand-primary bg-brand-primary px-6 py-3 text-sm font-medium text-white hover:bg-brand-primary-dark"
      >
        {dict.contact.submit}
      </button>

      {submitted && (
        <p className="text-sm text-status-confirmed">
          Ce formulaire est une maquette fonctionnelle : la soumission n&apos;est pas encore connectée à une
          messagerie ou un CRM. / This form is a functional mock-up: submission is not yet wired to an email
          service or CRM.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor={name}>
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-brand-accent"
      />
    </div>
  );
}
