import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { AestheticArticle } from "@/components/generator/AestheticArticle";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";

export const metadata: Metadata = {
  title: "Dekoratif Yazı Tipleri: Estetik ve Süslü Yazı Oluşturucu | YazıStilleriPro",
  description:
    "Dekoratif yazı tipleri oluşturucu ile estetik, süslü ve kıvrımlı yazılar oluşturun. Sosyal medya profilleri ve Instagram biyografisi için kopyala-yapıştır.",
  alternates: {
    canonical: "/dekoratif-estetik-yazi-tipleri"
  }
};

const AestheticPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <Breadcrumbs items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "Estetik Yazı Tipleri", item: "/dekoratif-estetik-yazi-tipleri" }
        ]} />
        <ToolSchema 
          name="Estetik Yazı Oluşturucu"
          description="Estetik yazı tipleri ile metninizi anında şık ve sanatsal fontlara dönüştürün. Instagram ve TikTok için."
          url="/dekoratif-estetik-yazi-tipleri"
        />
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
