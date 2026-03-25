import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { ItalicArticle } from "@/components/generator/ItalicArticle";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";

export const metadata: Metadata = {
  title: "İtalik Yazı: Kopyala-Yapıştır Eğik Yazı Oluşturucu",
  description:
    "İtalik yazı oluşturucu ile metninizi eğik ve zarif yazı stillerine dönüştürün. Instagram, TikTok ve Discord için kopyala-yapıştır ile anında kullanın.",
  alternates: {
    canonical: "/italik-egik-yazi"
  }
};

const ItalicTextPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <Breadcrumbs items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "İtalik Yazı", item: "/italik-egik-yazi" }
        ]} />
        <ToolSchema 
          name="İtalik Yazı Oluşturucu"
          description="İtalik yazı oluşturucu ile metninizi anında eğik fontlara dönüştürün. Sosyal medya için kopyala-yapıştır."
          url="/italik-egik-yazi"
        />
        <HeroGeneratorSection 
            titleTag="div"
            title={
              <div className="text-lg text-slate-300 font-medium normal-case tracking-normal">
                  İtalik Eğik Yazı Stili <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
                      (Kopyala ve Yapıştır İtalik Yazı)
                  </span>
              </div>
            }
            description="Saniyeler içinde İtalik Eğik Yazı ile öne çıkın. İsminizi veya mesajlarınızı italik ve eğik yazı tiplerine çevirin. Instagram bio, WhatsApp durum ve diğer platformlar için tek tıkla kopyalayın."
            inputTitle="İtalik Eğik Yazı Stili"
            defaultPreviewText="İtalik Eğik Yazı"
            listType="italic"
        />

        <ItalicArticle />
      </main>
    </>
  );
};

export default ItalicTextPage;
