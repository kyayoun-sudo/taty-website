"use client";

import { useState } from "react";
import type { TeamMember } from "@/content/team";
import { type Locale, t } from "@/lib/i18n";
import { StatusBadge } from "@/components/ui/StatusBadge";

function MemberPortrait({
  photo,
  name,
}: {
  photo: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => Array.from(part)[0])
    .join("")
    .toLocaleUpperCase();

  return (
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-paper-muted text-xs uppercase tracking-wide text-ink-muted">
      <span
        className="text-4xl font-medium text-brand-primary"
        aria-hidden="true"
      >
        {initials}
      </span>

      {photo && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            setFailed(true);
          }}
        />
      )}
    </div>
  );
}

export function TeamCard({
  member,
  locale,
}: {
  member: TeamMember;
  locale: Locale;
}) {
  const name = t(locale, member.name);

  return (
    <div className="flex flex-col border border-line bg-paper">
      <MemberPortrait
        key={member.photo}
        photo={member.photo}
        name={name}
      />

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-medium text-brand-primary">
              {name}
            </h3>

            <p className="text-sm text-ink-muted">
              {t(locale, member.role)}
            </p>
          </div>

          <StatusBadge
            status={member.status}
            locale={locale}
          />
        </div>

        <p className="text-sm text-ink-muted">
          {t(locale, member.bio)}
        </p>
      </div>
    </div>
  );
}
