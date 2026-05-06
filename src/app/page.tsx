import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { HomeArticle } from "@/components/home/HomeArticle";
import { ExploreStyles } from "@/components/home/ExploreStyles";
import { FAQSchema } from "@/components/shared/FAQSchema";

export const metadata: Metadata = {
  title: "Yazı Stilleri: Güzel ve Şekilli Yazı Tipleri (Kopyala) | YazıStilleriPro",
  description:
    "Yazı stilleri oluşturucu ile metninizi anında güzel ve şekilli yazı tiplerine dönüştürün. Kopyala-yapıştır ile Instagram, PUBG ve WhatsApp için kullanın.",
  alternates: {
    canonical: "/"
  }
};

const HomePage = () => {
  const toolJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Yazı Stilleri Oluşturucu",
    "url": "https://yazistilleripro.com.tr/",
    "description": "Yazı stilleri oluşturucu ile metninizi anında güzel ve şekilli yazı tiplerine dönüştürün. Kopyala-yapıştır ile Instagram, PUBG ve WhatsApp için kullanın.",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "inLanguage": "tr",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    }
  };

  const homeFaqs = [
    {
      question: "Yazı stilleri oluşturucu ücretsiz mi?",
      answer: "Evet, tüm yazı stilleri oluşturucu araçları tamamen ücretsizdir. Kayıt veya indirme gerekmez."
    },
    {
      question: "Oluşturduğum yazıları Instagram'da kullanabilir miyim?",
      answer: "Evet. Oluşturulan yazılar Unicode karakterleri kullandığından Instagram, WhatsApp, TikTok ve daha fazlasında sorunsuz çalışır."
    },
    {
      question: "Türkçe karakterler destekleniyor mu?",
      answer: "Evet. Ğ, Ü, Ş, İ, Ö, Ç gibi Türkçe karakterler tam olarak desteklenmektedir."
    }
  ];

  return (
    <main className="flex-1 flex flex-col min-w-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd) }}
      />
      <FAQSchema faqs={homeFaqs} />
      <HeroGeneratorSection 
        title={
          <>
            Yazı Stilleri: Kopyalayabileceğiniz <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 animate-shimmer bg-[length:200%_auto]">
              Güzel ve Farklı Yazı Stilleri
            </span>
          </>
        }
        inputTitle="Şık Yazı Oluşturucu"
        defaultPreviewText="Şık Yazı Stilleri"
      />
      <HomeArticle />
      <ExploreStyles />
    </main>
  );
};

export default HomePage;


