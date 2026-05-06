import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { FontChangerArticle } from "@/components/generator/FontChangerArticle";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";
import { FAQSchema } from "@/components/shared/FAQSchema";

export const metadata: Metadata = {
  title: "Yazı Tipi Değiştirme: Online Ücretsiz Font Değiştirici",
  description:
    "Yazı tipi değiştirme aracı ile metninizi 50+ farklı fonta dönüştürün. Ücretsiz online yazı tipi değiştirici — Instagram, WhatsApp için kopyala-yapıştır.",
  alternates: {
    canonical: "/yazi-tipi-degistirme"
  }
};

const fontChangerFaqs = [
  {
    question: "Yazı tipi değiştirici nasıl çalışır?",
    answer: "Araç, her harfi Unicode sistemindeki görsel karşılığıyla eşleştirir. Bu sayede font yüklemeden farklı görünümler elde edilir."
  },
  {
    question: "Hangi platformlarda kullanılabilir?",
    answer: "Instagram, TikTok, WhatsApp, Discord, Twitter/X, Facebook ve PUBG gibi oyunlarda kullanılabilir."
  },
  {
    question: "Yazı tipi değiştirme ücretsiz mi?",
    answer: "Evet, tamamen ücretsizdir. Üyelik veya ödeme gerekmez."
  }
];

const FontChangerPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <Breadcrumbs items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "Yazı Tipi Değiştirme", item: "/yazi-tipi-degistirme" }
        ]} />
        <ToolSchema 
          name="Online Yazı Tipi Değiştirici"
          description="Normal metni Instagram, Discord, TikTok ve WhatsApp için şık Unicode yazı stillerine dönüştürün. Ücretsiz, anında, kurulum yok."
          url="/yazi-tipi-degistirme"
          type="SoftwareApplication"
        />
        <FAQSchema faqs={fontChangerFaqs} />
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

