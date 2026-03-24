import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { WhatsAppArticle } from "@/components/generator/WhatsAppArticle";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";

export const metadata: Metadata = {
  title: "WhatsApp Kalın Yazma: Renkli ve Farklı Yazı Stilleri | YazıStilleriPro",
  description:
    "WhatsApp kalın yazma, renkli yazma ve farklı yazı stilleri rehberi. WhatsApp durum ve mesajlarınızı özelleştirmek için kopyala-yapıştır yazı stilleri.",
  alternates: {
    canonical: "/whatsapp-yazi-stili"
  }
};

const WhatsAppTextPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <Breadcrumbs items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "WhatsApp Yazı Stili", item: "/whatsapp-yazi-stili" }
        ]} />
        <ToolSchema 
          name="WhatsApp Yazı Stili Oluşturucu"
          description="WhatsApp mesajlarınız ve durum güncellemeleriniz için en şık Unicode fontlarını anında oluşturun ve kopyalayın."
          url="/whatsapp-yazi-stili"
        />
        <HeroGeneratorSection 
            title="WhatsApp mesajlarınıza Havalı Yazı Stilleri ekleyin."
            titleTag="div"
            description="WhatsApp mesajlarınız, durum güncellemeleriniz ve grup açıklamalarınız için en şık Unicode fontlarını anında oluşturun ve kopyalayın."
            inputTitle="WhatsApp Yazı Stili"
            defaultPreviewText="WhatsApp Yazı Stili"
            listType="whatsapp"
        />
        <WhatsAppArticle />
      </main>
    </>
  );
};

export default WhatsAppTextPage;
