"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

export function CareerApplicationForm({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [prepared, setPrepared] = useState(false);
  const fr = locale === "fr";
  const email = siteConfig.contact.email;

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const subject = `${dict.careers.applicationTitle} — ${value("position") || value("name")}`;
    const body = [
      `${dict.careers.formName} : ${value("name")}`,
      `${dict.careers.formEmail} : ${value("email")}`,
      `${dict.careers.formPhone} : ${value("phone")}`,
      `${dict.careers.formPosition} : ${value("position")}`,
      "",
      value("message"),
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  const fields = [
    { name: "name", label: dict.careers.formName, type: "text", required: true, autoComplete: "name" },
    { name: "email", label: dict.careers.formEmail, type: "email", required: true, autoComplete: "email" },
    { name: "phone", label: dict.careers.formPhone, type: "tel", required: false, autoComplete: "tel" },
    { name: "position", label: dict.careers.formPosition, type: "text", required: false, autoComplete: "off" },
  ];

  return (
    <>
      <p className="mb-6 text-sm text-ink-muted">{dict.careers.formCv}</p>
      <form onSubmit={prepareEmail} className="flex flex-col gap-5 border border-line bg-paper p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={`career-${field.name}`} className="mb-1.5 block text-sm font-medium text-ink">
                {field.label}{field.required ? " *" : ""}
              </label>
              <input name={field.name} type={field.type} required={field.required} autoComplete={field.autoComplete}
                id={`career-${field.name}`} maxLength={field.name === "position" ? 160 : 120}
                className="w-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-brand-accent" />
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="career-message" className="mb-1.5 block text-sm font-medium text-ink">{dict.careers.formMessage}</label>
          <textarea id="career-message" name="message" rows={5} maxLength={1500}
            className="w-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-brand-accent" />
        </div>
        <button type="submit" className="mt-2 inline-flex w-fit items-center justify-center border border-brand-primary bg-brand-primary px-6 py-3 text-sm font-medium text-white hover:bg-brand-primary-dark">
          {dict.careers.submit}
        </button>
        <p className="text-sm text-ink-muted">
          {fr ? "Vous pouvez aussi envoyer directement votre CV à " : "You can also email your CV directly to "}
          <a href={`mailto:${email}`} className="underline underline-offset-4">{email}</a>.
        </p>
        <p role="status" className="text-sm text-ink-muted">
          {prepared ? (fr
            ? "Votre candidature n’est pas encore envoyée. Si votre messagerie s’est ouverte, joignez votre CV puis envoyez l’email. Sinon, utilisez l’adresse ci-dessus."
            : "Your application has not been sent yet. If your email application opened, attach your CV and send the email. Otherwise, use the address above.") : ""}
        </p>
      </form>
    </>
  );
}
