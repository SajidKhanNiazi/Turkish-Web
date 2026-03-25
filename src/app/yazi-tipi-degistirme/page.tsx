import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { FontChangerArticle } from "@/components/generator/FontChangerArticle";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";

export const metadata: Metadata = {
  title: "Yazı Tipi Değiştirme: Online Ücretsiz Font Değiştirici",
  description:
    "Yazı tipi değiştirme aracı ile metninizi 50+ farklı fonta dönüştürün. Ücretsiz online yazı tipi değiştirici — Instagram, WhatsApp için kopyala-yapıştır.",
  alternates: {
    canonical: "/yazi-tipi-degistirme"
  }
};

const FontChangerPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <Breadcrumbs items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "Yazı Tipi Değiştirme", item: "/yazi-tipi-degistirme" }
        ]} />
        <ToolSchema 
          name="Yazı Tipi Değiştirme Aracı"
          description="Metninizi saniyeler içinde farklı yazı tiplerine dönüştürün. Sosyal medya ve oyunlar için online font değiştirici."
          url="/yazi-tipi-degistirme"
        />
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
