import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { InstagramToolSection } from "@/components/generator/InstagramToolSection";
import { ExploreMoreTools } from "@/components/shared/ExploreMoreTools";
import { InstagramSekilliYaziArticle } from "@/components/content/InstagramSekilliYaziArticle";
import { silo2Categories } from "@/data/categories";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";

export const metadata: Metadata = {
  title: "Instagram Şekilli Yazı: Bio ve Profil için Font Oluşturucu | YazıStilleriPro",
  description:
    "Instagram şekilli yazı oluşturucu ile bio ve profilini özelleştir. Instagram biosuna şekilli yazı yazma rehberi — kopyala-yapıştır ile saniyeler içinde kullan.",
  alternates: {
    canonical: "/sekilli-yazi/instagram-sekilli-yazi"
  }
};

export default function InstagramFontsPage() {
  return (
    <main className="flex-1 flex flex-col font-sans">
      <Breadcrumbs items={[
        { name: "Ana Sayfa", item: "/" },
        { name: "Şekilli Yazı", item: "/sekilli-yazi" },
        { name: "Instagram Şekilli Yazı", item: "/sekilli-yazi/instagram-sekilli-yazi" }
      ]} />
      <ToolSchema 
        name="Instagram Şekilli Yazı Oluşturucu"
        description="Instagram şekilli yazı oluşturucu ile bio ve profilini özelleştir. Instagram biosuna şekilli yazı yazma rehberi — kopyala-yapıştır ile saniyeler içinde kullan."
        url="/sekilli-yazi/instagram-sekilli-yazi"
      />
      <section className="relative overflow-hidden bg-[#0B0F1A] pt-16 pb-16 sm:pt-28 border-b border-white/[0.06]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#0B0F1A] to-[#0B0F1A]" />
        
        <div className="container relative z-10 flex flex-col items-center text-center px-4 mx-auto max-w-4xl">
          <span className="mb-6 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-indigo-300">
            En Güvenilir Biyografi Araçları
          </span>
          <h1 className="max-w-3xl text-3xl font-black tracking-tight sm:text-5xl md:text-6xl text-white">
            Instagram <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-400">Şekilli Yazı</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-gray-400 font-medium">
            Sadece Instagram&apos;da kesinlikle doğru görünen temiz fontları barındırır. Canlı bio önizlemesiyle deneyin!
          </p>
        </div>
      </section>

      <div className="bg-[#111827]/50 py-12 px-4 shadow-inner">
        <InstagramToolSection />
      </div>

      <InstagramSekilliYaziArticle />

      <ExploreMoreTools tools={silo2Categories} />
    </main>
  );
}
