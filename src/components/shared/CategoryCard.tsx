import Link from "next/link";
import { Category } from "@/data/categories";

type CategoryCardProps = {
  category: Category;
};

const categoryThemeMap: Record<string, { from: string, to: string, text: string, shadow: string, iconBg: string }> = {
  "kalin-yazi-stili": { from: "from-purple-900/20", to: "to-[#111827]", text: "group-hover:text-purple-400", shadow: "hover:shadow-purple-500/10", iconBg: "bg-purple-500/15 text-purple-400" },
  "italik-egik-yazi": { from: "from-amber-900/20", to: "to-[#111827]", text: "group-hover:text-amber-400", shadow: "hover:shadow-amber-500/10", iconBg: "bg-amber-500/15 text-amber-400" },
  "dekoratif-estetik-yazi-tipleri": { from: "from-pink-900/20", to: "to-[#111827]", text: "group-hover:text-pink-400", shadow: "hover:shadow-pink-500/10", iconBg: "bg-pink-500/15 text-pink-400" },
  "yazi-tipi-degistirme": { from: "from-teal-900/20", to: "to-[#111827]", text: "group-hover:text-teal-400", shadow: "hover:shadow-teal-500/10", iconBg: "bg-teal-500/15 text-teal-400" },
  "instagram-yazi-stili": { from: "from-rose-900/20", to: "to-[#111827]", text: "group-hover:text-rose-400", shadow: "hover:shadow-rose-500/10", iconBg: "bg-rose-500/15 text-rose-400" },
  "whatsapp-yazi-stili": { from: "from-green-900/20", to: "to-[#111827]", text: "group-hover:text-green-400", shadow: "hover:shadow-green-500/10", iconBg: "bg-green-500/15 text-green-400" },
};

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const theme = categoryThemeMap[category.slug] || categoryThemeMap["kalin-yazi-stili"];

  return (
    <Link
      href={category.href}
      className={`group flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-gradient-to-br ${theme.from} ${theme.to} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-white/[0.12] active:scale-[0.98] active:-translate-y-0 shadow-md shadow-black/10 ${theme.shadow}`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${theme.iconBg} shrink-0`}>
        <span className="font-display font-black text-xl leading-none">A</span>
      </div>
      <div>
        <h3 className={`font-display text-lg font-extrabold text-white transition-colors ${theme.text}`}>
          {category.title}
        </h3>
        <p className="mt-2 text-sm font-medium leading-relaxed text-gray-400">
          {category.description}
        </p>
      </div>
    </Link>
  );
};
