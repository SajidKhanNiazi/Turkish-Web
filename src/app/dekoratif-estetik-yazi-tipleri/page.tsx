import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { AestheticArticle } from "@/components/generator/AestheticArticle";

export const metadata: Metadata = {
  title: `Dekoratif Estetik Yazı Tipleri (Kopyala ve Yapıştır) | ${siteConfig.name}`,
  description:
    "Dekoratif estetik yazı tipleri ile metninizi anında şık ve sanatsal fontlara dönüştürün. Instagram, TikTok ve sosyal medya için en iyi estetik yazı tiplerini kopyalayın.",
  alternates: {
    canonical: "/dekoratif-estetik-yazi-tipleri"
  }
};

const AestheticPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <HeroGeneratorSection 
            title={
                <>
                    Dekoratif Estetik Yazı Tipleri <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">
                        (Kopyala ve Yapıştır)
                    </span>
                </>
            }
            titleTag="div"
            description="Metninizi saniyeler içinde dekoratif ve estetik yazı tiplerine dönüştürün. Sosyal medya profilleriniz için en şık Unicode fontlarını keşfedin."
            inputTitle="Dekoratif Estetik Yazı"
            defaultPreviewText="Estetik Yazı"
            listType="aesthetic"
        />

        <AestheticArticle />
      </main>
    </>
  );
};

export default AestheticPage;
