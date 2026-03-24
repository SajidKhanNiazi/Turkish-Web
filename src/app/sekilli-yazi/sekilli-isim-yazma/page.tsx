import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { NameToolSection } from "@/components/generator/NameToolSection";
import { ExploreMoreTools } from "@/components/shared/ExploreMoreTools";
import { SekilliIsimYazmaArticle } from "@/components/content/SekilliIsimYazmaArticle";
import { silo2Categories } from "@/data/categories";

export const metadata: Metadata = {
  title: `Şekilli İsim Yazma: Türkçe İsimler İçin Stil Rehberi (2026) | ${siteConfig.name}`,
  description:
    "Şekilli isim yazma nasıl yapılır? Ahmet, Ayşe, Zeynep gibi Türkçe isimler için en güzel şekilli yazı stilleri, platform rehberi ve adım adım kullanım kılavuzu.",
  alternates: {
    canonical: "/sekilli-yazi/sekilli-isim-yazma"
  }
};

export default function FancyNamePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Şekilli İsim Yazma: Türkçe İsimler İçin Stil Rehberi (2026)",
      "description": "Şekilli isim yazma nasıl yapılır? Türkçe isimler için en güzel şekilli yazı stilleri, platform rehberi ve adım adım kullanım kılavuzu.",
      "inLanguage": "tr"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Şekilli isim yazma ücretsiz mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Şekilli isim oluşturucu araçların tamamına yakını tamamen ücretsizdir. Üyelik, kayıt veya uygulama indirmeye gerek yoktur. Tarayıcıdan doğrudan kullanabilirsiniz."
          }
        },
        {
          "@type": "Question",
          "name": "Türkçe isimler şekilli yazı aracında doğru çalışıyor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Türkçe karakter desteği sunan araçlarda evet. Ğ, Ş, Ü, İ, Ö, Ç harfleri içeren isimler bu araçlarda eksiksiz dönüştürülür. Türkçe desteği olmayan araçlarda ise bu harfler bozuk görünebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Şekilli isim yazma PUBG'de çalışıyor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, ancak PUBG Mobile'da 14–16 karakter sınırı vardır. Karmaşık sembol zincirleri geçersiz karakter hatası verebilir. Kısa sembol + isim + kısa sembol formatını tercih etmeniz önerilir."
          }
        },
        {
          "@type": "Question",
          "name": "Şekilli isim Instagram biyografisine nasıl eklenir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Şekilli isim aracından istediğiniz stili kopyalayın. Instagram uygulamasını açın, Profili Düzenle bölümüne gidin ve Ad ya da Biyografi alanına yapıştırın. Kaydet butonuna basmanız yeterlidir."
          }
        }
      ]
    }
  ];

  return (
    <main className="flex-1 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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
