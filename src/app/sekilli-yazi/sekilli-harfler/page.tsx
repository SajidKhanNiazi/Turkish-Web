import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { LettersToolSection } from "@/components/generator/LettersToolSection";
import { ExploreMoreTools } from "@/components/shared/ExploreMoreTools";
import { SekilliHarflerArticle } from "@/components/content/SekilliHarflerArticle";
import { silo2Categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Şekilli Harfler Nedir? A'dan Z'ye Değişik Harf Rehberi (2026)",
  description:
    "Şekilli harfler nedir, nasıl kullanılır? A'dan Z'ye tüm stiller, platform rehberi, PUBG ve Instagram ipuçları. Ücretsiz kopyala-yapıştır rehberi.",
  alternates: {
    canonical: "/sekilli-yazi/sekilli-harfler"
  }
};

export default function FancyLettersPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Şekilli Harfler Nedir? A'dan Z'ye Değişik Harf Rehberi (2026)",
      "description": "Şekilli harfler nedir, nasıl kullanılır? A'dan Z'ye tüm stiller, platform rehberi ve PUBG, Instagram, WhatsApp ipuçları.",
      "inLanguage": "tr"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Şekilli harfler nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Şekilli harfler, Unicode standardı kapsamında tanımlanmış özel karakterlerdir. Normal A–Z harflerinin görsel olarak farklı versiyonlarıdır. Font değildirler; kopyalanabilir ve her platformda kullanılabilirler."
          }
        },
        {
          "@type": "Question",
          "name": "Şekilli harfleri PUBG'de kullanabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Ancak PUBG Mobile'da 16 karakter sınırı bulunur. Bazı karmaşık Unicode karakterleri oyun tarafından reddedilebilir. Bu nedenle stili önce taslak bölümünde test etmeniz önerilir. Kareli ve kalın stiller en iyi sonucu verir."
          }
        },
        {
          "@type": "Question",
          "name": "Türkçe harfler şekilli harf aracında doğru çalışıyor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Türkçe karakter desteği sunan araçlarda evet. Ğ, Ş, Ü, İ, Ö, Ç harfleri, bu dili destekleyen araçlarda eksiksiz dönüştürülür. Türkçe optimizasyonu yapılmamış araçlarda bu harfler bozuk görünebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Şekilli harfler Instagram'da çalışıyor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Instagram biyografi, gönderi açıklamaları ve yorum alanlarında şekilli harfler sorunsuz görüntülenir. El yazısı ve kalın stiller en çok tercih edilen seçenekler arasındadır."
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
            A&apos;dan Z&apos;ye Kopyala
          </span>
          <div className="max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Şekilli <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Harfler</span>
          </div>
          <p className="mt-4 max-w-xl text-base text-gray-400 font-medium">
            Seçtiğiniz harf veya kısa kelime için en güzel şekilli tasarımları tek tıkla kopyalayın.
          </p>
        </div>
      </section>

      <div className="bg-[#111827]/50 py-16 px-4 shadow-inner min-h-[40vh]">
        <LettersToolSection />
      </div>

      <SekilliHarflerArticle />

      <ExploreMoreTools tools={silo2Categories} />
    </main>
  );
}
