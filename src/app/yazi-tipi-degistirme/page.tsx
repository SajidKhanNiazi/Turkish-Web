import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { FontChangerArticle } from "@/components/generator/FontChangerArticle";

export const metadata: Metadata = {
  title: "Yazı Tipi Değiştirme (Online Font Değiştirici) – Şekilli Yazı Oluştur",
  description:
    "Yazı tipi değiştirme aracı ile normal metni saniyeler içinde şekilli yazıya dönüştürün. Instagram, TikTok, Discord ve WhatsApp için yüzlerce yazı stilini kopyalayın.",
  alternates: {
    canonical: "/yazi-tipi-degistirme"
  }
};

const FontChangerPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <HeroGeneratorSection 
            title="Instantly convert your text to different fonts ."
            titleTag="div"
            description="Sans Serif, Script, Fraktur, Double Struck, Monospace ve daha birçok Unicode yazı tipine tek tıkla dönüştürün. Sosyal medya ve oyunlar için mükemmel."
            inputTitle="Yazı Tipi Değiştirme"
            defaultPreviewText="Yazı Tipi Değiştirme"
            listType="fontChanger"
        />

        <FontChangerArticle />
      </main>
    </>
  );
};

export default FontChangerPage;
