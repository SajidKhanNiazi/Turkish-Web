import { generateAllStyles } from "@/lib/textStyles";
import { StyleResultItem } from "./StyleResultItem";

type StyleResultListProps = {
  input: string;
  defaultText?: string;
};

export const StyleResultList = ({ input, defaultText = "Şık Yazı Stilleri" }: StyleResultListProps) => {
  const styles = generateAllStyles(input || defaultText);

  // Group styles by category
  const groupedStyles = styles.reduce((acc, style) => {
    if (!acc[style.category]) acc[style.category] = [];
    acc[style.category].push(style);
    return acc;
  }, {} as Record<string, typeof styles>);

  return (
    <div className="flex flex-col gap-12 mt-4 relative z-10 w-full">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.06] pb-4">
        <div>
          <div className="text-lg font-bold text-white font-display">
            Oluşturulan Yazı Stilleri
          </div>
        </div>
      </div>

      {Object.entries(groupedStyles).map(([category, categoryStyles]) => (
        <section key={category} className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400/80 font-display">
              {category}
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent"></div>
          </div>
          <div className="grid gap-4 w-full">
            {categoryStyles.map((style, index) => (
              <StyleResultItem
                key={style.id}
                index={index}
                label={style.label}
                value={style.preview}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="mt-6 rounded-xl bg-indigo-500/[0.08] p-4 border border-indigo-400/15">
        <p className="text-xs font-medium text-indigo-300">
          <span className="font-bold text-indigo-200">Not:</span> Bazı platformlar tüm Unicode karakterlerini desteklemeyebilir. Yapıştırdıktan sonra metninizi kontrol edin.
        </p>
      </div>
    </div>
  );
};
