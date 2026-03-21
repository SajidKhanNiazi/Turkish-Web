import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { BoldArticle } from "@/components/generator/BoldArticle";

export const metadata: Metadata = {
  title: `Kalın Yazı Stili (Kopyala ve Yapıştır) – 100+ Kalın Font Örnekleri | ${siteConfig.name}`,
  description:
    "Kalın yazı stili ile metninizi anında kalın fontlara dönüştürün. Instagram, TikTok, Discord ve WhatsApp için 100+ kalın yazı örneğini kopyala ve yapıştır.",
  alternates: {
    canonical: "/kalin-yazi-stili"
  }
};

const BoldTextPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <HeroGeneratorSection 
            title={
              <>
                  Kalın Yazı Stili <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      (Kopyala ve Yapıştır Bold Yazı Stilleri)
                  </span>
              </>
            }
            description="İsminizi veya mesajlarınızı kalın ve dikkat çekici Unicode fontlarına dönüştürün. Instagram, WhatsApp ve sosyal medya için tek tıkla kopyalayın."
            inputTitle="Kalın Yazı Stili"
            defaultPreviewText="Kalın Yazı Stili"
            listType="bold"
        />

        <BoldArticle />
      </main>
    </>
  );
};

export default BoldTextPage;
