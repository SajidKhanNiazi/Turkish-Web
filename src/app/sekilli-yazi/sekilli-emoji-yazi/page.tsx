import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { EmojiToolSection } from "@/components/generator/EmojiToolSection";
import { ExploreMoreTools } from "@/components/shared/ExploreMoreTools";
import { SekilliEmojiYaziArticle } from "@/components/content/SekilliEmojiYaziArticle";
import { silo2Categories } from "@/data/categories";

export const metadata: Metadata = {
  title: `Şekilli Emoji Yazı Oluşturucu: Metne Sembol Ekle | ${siteConfig.name}`,
  description:
    "Metinlerinizi emoji, sembol ve kaomojilerle süsleyin. En şirin ve ateşli estetik emoji yazıları tek tıkla kopyala.",
  alternates: {
    canonical: "/sekilli-yazi/sekilli-emoji-yazi"
  }
};

export default function EmojiFontsPage() {
  return (
    <main className="flex-1 flex flex-col font-sans">
      <section className="relative overflow-hidden bg-[#0B0F1A] pt-16 pb-16 sm:pt-28 border-b border-white/[0.06]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#0B0F1A] to-[#0B0F1A]" />
        
        <div className="container relative z-10 flex flex-col items-center text-center px-4 mx-auto max-w-4xl">
          <span className="mb-6 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-indigo-300">
            Eğlenceli Metinler
          </span>
          <h1 className="max-w-3xl text-3xl font-black tracking-tight sm:text-5xl md:text-6xl text-white">
            Şekilli <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Emoji Yazı</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-gray-400 font-medium">
            Sıradan metinleri harika emojiler ve sevimli kaomojilerle (ʕ•ᴥ•ʔ) süsleyerek ruh halinizi yansıtın.
          </p>
        </div>
      </section>

      <div className="bg-[#111827]/50 py-12 px-4 shadow-inner">
        <EmojiToolSection />
      </div>

      <SekilliEmojiYaziArticle />

      <ExploreMoreTools tools={silo2Categories} />
    </main>
  );
}
