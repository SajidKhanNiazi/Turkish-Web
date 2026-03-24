import type { Metadata } from "next";

import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { HomeArticle } from "@/components/home/HomeArticle";
import { ExploreStyles } from "@/components/home/ExploreStyles";

export const metadata: Metadata = {
  title: "Yazı Stilleri: Güzel ve Şekilli Yazı Tipleri (Kopyala)",
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
    "url": "https://lightpink-viper-961727.hostingersite.com/",
    "description": "Metninizi anında güzel ve şekilli yazı tiplerine dönüştürün. Instagram, PUBG ve WhatsApp için ücretsiz.",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "inLanguage": "tr"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd) }}
      />
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
    </>
  );
};

export default HomePage;

