import { generateFontChangerStyles } from "@/lib/textStyles";
import { StyleResultItem } from "./StyleResultItem";

type FontChangerStyleListProps = {
  input: string;
};

export const FontChangerStyleList = ({ input }: FontChangerStyleListProps) => {
  const defaultText = "Yazı Tipi Değiştirme";
  const styles = generateFontChangerStyles(input || defaultText);

  return (
    <div className="flex flex-col gap-8 mt-4 relative z-10 w-full">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[#1E293B] pb-4">
        <div>
          <div className="text-lg font-bold text-gray-100 font-display">
            Yazı Tipi Değiştirme Stilleri
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Metninizi farklı Unicode yazı tiplerine anında dönüştürün.
          </p>
        </div>
      </div>

      <div className="grid gap-4 w-full">
        {styles.map((style, index) => (
          <StyleResultItem
            key={style.id}
            index={index}
            label={style.label}
            value={style.preview}
          />
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-indigo-900/20 p-4 border border-indigo-500/20 shadow-inner">
        <p className="text-xs font-medium text-indigo-300 text-center">
          <span className="font-bold text-indigo-200">Not:</span> Bazı platformlar tüm Unicode karakterlerini desteklemeyebilir. Kopyaladıktan sonra her zaman kontrol edin.
        </p>
      </div>
    </div>
  );
};
