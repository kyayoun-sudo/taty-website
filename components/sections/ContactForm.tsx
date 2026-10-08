"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

export function ContactForm({
  dict,
  locale,
  initialSubject = "",
  initialMessage = "",
}: {
  dict: Dictionary;
  locale: Locale;
  initialSubject?: string;
  initialMessage?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-5 border border-line bg-paper p-8"
    >
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
          {locale === "fr"
            ? "Parlez-nous de votre besoin"
            : "Tell us about your needs"}
        </p>

        <h2 className="text-xl font-medium text-brand-primary">
          {locale === "fr"
            ? "Demande de contact"
            : "Contact request"}
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={dict.contact.formName}
          name="name"
          required
        />

        <Field
          label={dict.contact.formCompany}
          name="company"
        />

        <Field
          label={dict.contact.formEmail}
          name="email"
          type="email"
          required
        />

        <Field
          label={dict.contact.formPhone}
          name="phone"
          type="tel"
        />
      </div>

      <Field
        label={dict.contact.formSubject}
        name="subject"
        defaultValue={initialSubject}
        required
      />

      <div>
        <label
          className="mb-1.5 block text-sm font-medium text-ink"
          htmlFor="message"
        >
          {dict.contact.formMessage}
          <span className="text-brand-accent"> *</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={7}
          required
          defaultValue={initialMessage}
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
          {locale === "fr"
            ? "Merci. Votre demande a bien été préparée."
            : "Thank you. Your request has been prepared."}
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
  defaultValue = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>
      <label
        className="mb-1.5 block text-sm font-medium text-ink"
        htmlFor={name}
      >
        {label}

        {required && (
          <span className="text-brand-accent">
            {" "}*
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="w-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-brand-accent"
      />
    </div>
  );
}
