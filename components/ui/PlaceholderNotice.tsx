export function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-md border border-dashed border-status-draft/40 bg-status-draft-bg/60 px-4 py-3 text-sm text-status-draft">
      {children}
    </p>
  );
}
