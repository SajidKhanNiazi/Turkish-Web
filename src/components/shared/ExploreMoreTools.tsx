"use client";

import { CategoryCard } from "./CategoryCard";

const RELEVANT_TOOLS = [
  {
    slug: "sekilli-yazi",
    href: "/",
    title: "Şekilli Yazı (Tüm Stiller)",
    description: "Tüm platformlar için 300+ farklı şekilli yazı stilini keşfedin."
  },
  {
    slug: "kalin-yazi-stili",
    href: "/kalin-yazi-stili",
    title: "Kalın Yazı Stilleri",
    description: "Etkileyici mesajlar için kalın ve ağır yazı stillerini kopyalayın."
  },
  {
    slug: "italik-egik-yazi",
    href: "/italik-egik-yazi",
    title: "İtalik ve El Yazısı",
    description: "Sofistike bir görünüm için zarif el yazısı ve italik metin stilleri."
  },
  {
    slug: "yazi-tipi-degistirme",
    href: "/yazi-tipi-degistirme",
    title: "Yazı Tipi Değiştirme",
    description: "Yazı tiplerinizi kolayca değiştirin ve hemen kopyalayın."
  }
];

export const ExploreMoreTools = () => {
  return (
    <section className="bg-[#0B0F1A] py-16 px-4 md:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 mb-10 text-left sm:text-center">
            <div className="text-3xl font-black text-white font-display">
                Diğer Araçları Keşfet
            </div>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto">
                Farklı şekilli yazı araçlarımızı deneyerek sosyal medya hesaplarınızı daha ilgi çekici hale getirin.
            </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RELEVANT_TOOLS.map((tool) => (
            <CategoryCard key={tool.slug} category={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};
