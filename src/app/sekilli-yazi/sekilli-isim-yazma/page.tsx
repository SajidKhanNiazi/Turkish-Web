import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { NameToolSection } from "@/components/generator/NameToolSection";
import { ExploreMoreTools } from "@/components/shared/ExploreMoreTools";
import { SekilliIsimYazmaArticle } from "@/components/content/SekilliIsimYazmaArticle";
import { silo2Categories } from "@/data/categories";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";
import { FAQSchema } from "@/components/shared/FAQSchema";

export const metadata: Metadata = {
  title: "Şekilli İsim Yazma: Adını Güzel Stillerle Yaz ve Kopyala",
  description:
    "Şekilli isim yazma aracı ile adını dekoratif ve güzel stillerle oluştur. Şekilli isim kopyala-yapıştır — Instagram, WhatsApp ve PUBG için anında kullan.",
  alternates: {
    canonical: "/sekilli-yazi/sekilli-isim-yazma"
  }
};

const sekilliIsimFaqs = [
  {
    question: "PUBG için şekilli isim nasıl oluşturulur?",
    answer: "Aracımıza isminizi yazın, bir stil seçin ve kopyalayın. PUBG Mobile'da profil adı bölümüne yapıştırın. Nick 14-16 karakteri geçmemesine dikkat edin."
  },
  {
    question: "Şekilli isim Instagram'da kullanılabilir mi?",
    answer: "Evet. Oluşturduğunuz şekilli ismi Instagram profilinizin ad alanına yapıştırabilirsiniz."
  },
  {
    question: "Türkçe isimler doğru dönüştürülüyor mu?",
    answer: "Evet. Ahmet, Ayşe, Zeynep gibi Türkçe karakterli isimler dahil tüm isimler doğru Unicode karşılıklarına dönüştürülür."
  }
];

export default function FancyNamePage() {
  return (
    <main className="flex-1 flex flex-col font-sans">
      <Breadcrumbs items={[
        { name: "Ana Sayfa", item: "/" },
        { name: "Şekilli Yazı", item: "/sekilli-yazi" },
        { name: "Şekilli İsim Yazma", item: "/sekilli-yazi/sekilli-isim-yazma" }
      ]} />
      <ToolSchema 
        name="Şekilli İsim Yazma Aracı"
        description="Şekilli isim yazma aracı ile adını dekoratif ve güzel stillerle oluştur. Instagram, WhatsApp ve PUBG için kopyala-yapıştır ile anında kullan."
        url="/sekilli-yazi/sekilli-isim-yazma"
        type="SoftwareApplication"
      />
      <FAQSchema faqs={sekilliIsimFaqs} />
      
      <section className="relative overflow-hidden bg-[#0B0F1A] pt-16 pb-16 sm:pt-28 border-b border-white/[0.06]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#0B0F1A] to-[#0B0F1A]" />
        
        <div className="container relative z-10 flex flex-col items-center text-center px-4 mx-auto max-w-4xl">
          <span className="mb-6 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-indigo-300">
            Profil & Oyun İçin
          </span>
          <div className="max-w-3xl text-3xl font-black tracking-tight sm:text-5xl md:text-6xl text-white">
            Şekilli <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">İsim Yazma</span>
          </div>
          <p className="mt-4 max-w-xl text-base text-gray-400 font-medium">
            Özenle seçilmiş en güzel 15 isim stili arasından seçim yapın, kopyalayın ve hemen kullanın.
          </p>
        </div>
      </section>

      <div className="bg-[#111827]/50 py-12 px-4 shadow-inner">
        <NameToolSection />
      </div>

      <SekilliIsimYazmaArticle />

      <ExploreMoreTools tools={silo2Categories} />
    </main>
  );
}

