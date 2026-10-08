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
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to send message"
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
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
      />

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink"
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

      {/* Champ invisible anti-spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex w-fit items-center justify-center border border-brand-primary bg-brand-primary px-6 py-3 text-sm font-medium text-white hover:bg-brand-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending"
          ? locale === "fr"
            ? "Envoi..."
            : "Sending..."
          : dict.contact.submit}
      </button>

      {status === "success" && (
        <p className="text-sm text-status-confirmed">
          {locale === "fr"
            ? "Merci. Votre demande a bien été envoyée à TATY & Associés. Nous vous répondrons dans les meilleurs délais."
            : "Thank you. Your request has been sent to TATY & Associés. We will get back to you shortly."}
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-700">
          {locale === "fr"
            ? "Une erreur est survenue lors de l'envoi. Vous pouvez également nous écrire directement à info@taty.info."
            : "An error occurred while sending your request. You can also contact us directly at info@taty.info."}
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
