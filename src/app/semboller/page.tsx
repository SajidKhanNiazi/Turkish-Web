import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { SembollerToolSection } from "@/components/generator/SembollerToolSection";
import { SembollerArticle } from "@/components/content/SembollerArticle";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Şekilli Semboller Kopyala – Instagram, PUBG ve Discord Sembolleri",
  description: "En popüler şekilli semboller koleksiyonunu keşfedin. Instagram biyografileri, PUBG nickleri, Discord profilleri ve estetik yazılar için şık sembolleri kolayca kopyalayın.",
  alternates: {
    canonical: "/semboller"
  }
};

export default function SembollerPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Şekilli Semboller Kopyala – Instagram, PUBG ve Discord Sembolleri",
      "description": "En popüler şekilli semboller koleksiyonunu keşfedin. Instagram biyografileri, PUBG nickleri, Discord profilleri ve estetik yazılar için şık sembolleri kolayca kopyalayın.",
      "inLanguage": "tr"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Şekilli Semboller Kopyalama Aracı",
      "url": `${siteConfig.url}/semboller`,
      "description": "Oyunlar ve sosyal medya için binlerce şekilli sembol kopyalama aracı.",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TRY"
      },
      "inLanguage": "tr"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Şekilli semboller telefonda çalışır mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, sitemizdeki tüm semboller evrensel Unicode altyapısını kullanır. iPhone (iOS) ve Android dahil tüm akıllı telefonlarda kopyala-yapıştır ile sorunsuz çalışır."
          }
        },
        {
          "@type": "Question",
          "name": "PUBG ve Valorant için hangi sembolleri kullanmalıyım?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oyun nickleri için genellikle Çince/Japonca karakterler (ツ, 亗), haç veya kılıç sembolleri (⚔, ✝) ve oklar tercih edilir. Sitemizdeki 'Oyun & PUBG' kategorisinden tüm bu sembolleri tek tıkla kopyalayabilirsiniz."
          }
        },
        {
          "@type": "Question",
          "name": "Sembol kopyalamak ücretsiz mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, sitemizdeki tüm araçlar ve sembol kopyalama işlemleri tamamen ücretsizdir."
          }
        }
      ]
    }
  ];

  return (
    <main className="flex-1 flex flex-col font-sans">
      <Breadcrumbs items={[
        { name: "Ana Sayfa", item: "/" },
        { name: "Şekilli Semboller", item: "/semboller" }
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="relative overflow-hidden bg-[#0B0F1A] pt-16 pb-16 sm:pt-28 border-b border-white/[0.06]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#0B0F1A] to-[#0B0F1A]" />
        
        <div className="container relative z-10 flex flex-col items-center text-center px-4 mx-auto max-w-4xl">
          <span className="mb-6 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-indigo-300">
            Aesthetic & Popüler
          </span>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Şekilli <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Semboller</span> Kütüphanesi
          </h1>
          <p className="mt-4 max-w-xl text-base text-gray-400 font-medium">
            Instagram bio, PUBG nick, WhatsApp ve Discord mesajlarınız için binlerce havalı sembolü arayın ve tek tıkla kopyalayın.
          </p>
        </div>
      </section>

      <div className="bg-[#111827] py-16 px-4 shadow-inner min-h-[50vh]">
        <SembollerToolSection />
      </div>

      <SembollerArticle />
    </main>
  );
}

