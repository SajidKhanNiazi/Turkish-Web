import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { BoldArticle } from "@/components/generator/BoldArticle";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";

export const metadata: Metadata = {
  title: "Kalın Yazı Stili: Kopyala-Yapıştır Bold Yazı Oluşturucu | YazıStilleriPro",
  description:
    "Kalın yazı stili oluşturucu ile Unicode bold yazılar oluşturun. Instagram biyografi, WhatsApp durum ve oyun nickleri için tek tıkla kopyala-yapıştır.",
  alternates: {
    canonical: "/kalin-yazi-stili"
  }
};

const BoldTextPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <Breadcrumbs items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "Kalın Yazı Stili", item: "/kalin-yazi-stili" }
        ]} />
        <ToolSchema 
          name="Kalın Yazı Stili Oluşturucu"
          description="Kalın yazı stili oluşturucu ile Unicode bold yazılar oluşturun. Instagram, WhatsApp ve Discord için tek tıkla kopyalayın."
          url="/kalin-yazi-stili"
        />
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
