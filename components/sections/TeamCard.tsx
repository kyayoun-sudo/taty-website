import type { TeamMember } from "@/content/team";
import { Locale, t } from "@/lib/i18n";
import { StatusBadge } from "@/components/ui/StatusBadge";
import generatedPhotos from "@/content/asset-photos.json";

const assetPhotos: Record<string, string> = generatedPhotos;

export function TeamCard({ member, locale }: { member: TeamMember; locale: Locale }) {
  const photo = assetPhotos[member.id] ?? member.photo;
  return (
    <div className="flex flex-col border border-line bg-paper">
      <div className="flex aspect-[4/5] items-center justify-center bg-paper-muted text-xs uppercase tracking-wide text-ink-muted">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt={t(locale, member.name)} className="h-full w-full object-cover" />
        ) : (
          <span>{locale === "fr" ? "Photo à venir" : "Photo pending"}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-medium text-brand-primary">{t(locale, member.name)}</h3>
            <p className="text-sm text-ink-muted">{t(locale, member.role)}</p>
          </div>
          <StatusBadge status={member.status} locale={locale} />
        </div>
        <p className="text-sm text-ink-muted">{t(locale, member.bio)}</p>
      </div>
    </div>
  );
}
