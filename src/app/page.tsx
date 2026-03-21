import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { HomeArticle } from "@/components/home/HomeArticle";
import { ExploreStyles } from "@/components/home/ExploreStyles";

export const metadata: Metadata = {
  title: `Yazı Stilleri: 300+ Güzel, Şekilli ve Havalı Yazı Tipleri (Kopyala) | ${siteConfig.name}`,
  description:
    "Yazı stilleri ile metninizi şekilli yazıya dönüştürün. Instagram bio, WhatsApp durum, Discord kullanıcı adı ve oyun nickleri için 300+ farklı yazı stili keşfedin ve hemen kopyalayın.",
  alternates: {
    canonical: "/"
  }
};

const HomePage = () => {
  return (
    <>
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

