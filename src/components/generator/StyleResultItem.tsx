import { CopyButton } from "./CopyButton";

type StyleResultItemProps = {
  label: string;
  value: string;
  index: number;
  onCopied?: () => void;
  /** Kartın tamamına dokunarak kopyala (mobil için). */
  enableCardCopy?: boolean;
};

export const StyleResultItem = ({
  label,
  value,
  index,
  onCopied,
  enableCardCopy,
}: StyleResultItemProps) => {
  const hasValue = value && value.trim().length > 0;

  const handleCardCopy = async () => {
    if (!enableCardCopy || !hasValue) return;
    try {
      await navigator.clipboard.writeText(value);
      onCopied?.();
    } catch {
      /* ignore */
    }
  };

  const animationDelay = `${index * 0.05}s`;

  const accentColors = [
    "border-l-purple-400", "border-l-blue-400", "border-l-cyan-400",
    "border-l-indigo-400", "border-l-rose-400", "border-l-emerald-400"
  ];

  const colorIndex = index % accentColors.length;
  const accentColor = accentColors[colorIndex];

  return (
    <div
      role={enableCardCopy ? "button" : undefined}
      tabIndex={enableCardCopy ? 0 : undefined}
      onClick={enableCardCopy ? handleCardCopy : undefined}
      onKeyDown={
        enableCardCopy
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCardCopy();
              }
            }
          : undefined
      }
      className={`group relative flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#1F2937] p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.12] hover:shadow-lg hover:shadow-black/20 sm:flex-row sm:items-center sm:justify-between border-l-4 ${accentColor} ${enableCardCopy ? "cursor-pointer" : ""}`}
      style={{
        animation: `fade-in-up 0.4s ease-out ${animationDelay} both`
      }}
    >
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 font-mono">
          {label}
        </p>
        <p className={`mt-1.5 break-all text-[20px] text-gray-100 font-medium ${!hasValue ? "text-gray-600 italic text-[16px]" : ""}`}>
          {hasValue ? value : "Metin girdiğinizde bu stil burada görünecektir."}
        </p>
      </div>
      <div className="mt-3 flex shrink-0 justify-end sm:mt-0 opacity-80 transition-opacity group-hover:opacity-100">
        <CopyButton value={hasValue ? value : ""} onCopied={onCopied} />
      </div>
    </div>
  );
};
