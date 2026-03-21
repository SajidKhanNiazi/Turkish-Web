import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { WhatsAppArticle } from "@/components/generator/WhatsAppArticle";

export const metadata: Metadata = {
  title: `WhatsApp Yazı Stili: WhatsApp’ta Yazı Tipi Değiştirme Rehberi`,
  description:
    "WhatsApp yazı stili nasıl yapılır? Kalın, italik, üstü çizili ve monospace yazı yazma yöntemlerini öğrenin. WhatsApp’ta yazı tipini değiştirme rehberi.",
  alternates: {
    canonical: "/whatsapp-yazi-stili"
  }
};

const WhatsAppTextPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
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
