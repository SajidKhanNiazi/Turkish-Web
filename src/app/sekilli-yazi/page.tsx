import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ExploreMoreTools } from "@/components/shared/ExploreMoreTools";
import { PillarToolSection } from "@/components/generator/PillarToolSection";
import { SekilliYaziArticle } from "@/components/content/SekilliYaziArticle";

export const metadata: Metadata = {
  title: "Şekilli Yazı Nedir? Yazı Stilleri, Türleri ve Kullanım Rehberi (2026)",
  description:
    "Şekilli yazı nedir, nasıl yapılır? Instagram, PUBG, WhatsApp ve Discord için adım adım rehber. Tüm yazı stillerini ücretsiz keşfedin.",
  alternates: {
    canonical: "/sekilli-yazi"
  }
};

export default function PillarSekilliYaziPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Şekilli Yazı Nedir? Yazı Stilleri, Türleri ve Kullanım Rehberi (2026)",
      "description": "Şekilli yazı nedir, nasıl yapılır? Instagram, PUBG, WhatsApp ve Discord için adım adım rehber.",
      "inLanguage": "tr"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Şekilli yazı nedir ve nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Şekilli yazı, Unicode standardı altında tanımlanan özel karakterlerin normal harflerin yerine kullanılmasıyla oluşturulan görsel metin stilidir. Her cihaz Unicode'u desteklediğinden, bu yazılar herhangi bir uygulama gerektirmeden her platformda görüntülenebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Şekilli yazıyı mobil cihazlarda kullanabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Şekilli yazı araçları tarayıcı tabanlıdır. Bu nedenle iPhone ve Android dahil tüm cihazlarda çalışır. Bununla birlikte aynı stili farklı cihazlarda test etmeniz tavsiye edilir."
          }
        },
        {
          "@type": "Question",
          "name": "Türkçe harfler şekilli yazıda çalışıyor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, ancak yalnızca Türkçe karakter desteği sunan araçlarda. Ğ, ü, ş, ı, ö ve ç harflerinin doğru dönüştürüldüğünden emin olmak için aracı test etmeniz gerekir."
          }
        },
        {
          "@type": "Question",
          "name": "PUBG'de şekilli yazı kullanabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, PUBG Mobile'da şekilli yazı kullanılabilir. Ancak 16 karakter sınırına dikkat etmeniz ve bazı karmaşık stillerin reddedilebileceğini göz önünde bulundurmanız gerekir."
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
            Kapsamlı Araç
          </span>
          <div className="max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Şekilli <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Yazı Oluşturucu</span>
          </div>
          <p className="mt-4 max-w-xl text-base text-gray-400 font-medium">
            Özel metninizi aşağıya yazarak saniyeler içinde yüzlerce farklı ve estetik şekilli stili kopyalayabilirsiniz.
          </p>
        </div>
      </section>

      <div className="bg-[#111827] py-16 px-4 shadow-inner min-h-[40vh]">
        <PillarToolSection />
      </div>

      <SekilliYaziArticle />

      <ExploreMoreTools />
    </main>
  );
}
