import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { InstagramFullArticle } from "@/components/content/InstagramFullArticle";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";
import { FAQSchema } from "@/components/shared/FAQSchema";

export const metadata: Metadata = {
  title: "Instagram Yazı Stili: Bio ve Profil Font Değiştirici",
  description:
    "Instagram yazı stili değiştirici ile biyografi ve profilinizi özelleştirin. Instagram biyografi yazı tipi için kopyala-yapıştır — anında kullanın, uygulama yok.",
  alternates: {
    canonical: "/instagram-yazi-stili"
  }
};

const instagramFaqs = [
  {
    question: "Instagram bio için hangi yazı stilleri kullanılabilir?",
    answer: "Kalın, italik, el yazısı, estetik ve daha birçok Unicode tabanlı stili Instagram biyografinizde kullanabilirsiniz."
  },
  {
    question: "Instagram yazı stilleri mobilde de çalışır mı?",
    answer: "Evet. Kopyaladığınız metni doğrudan Instagram uygulamasına yapıştırabilirsiniz; iOS ve Android'de sorunsuz çalışır."
  },
  {
    question: "Bu araç Instagram'ı ihlal ediyor mu?",
    answer: "Hayır. Araç yalnızca standart Unicode karakterleri kullanır; herhangi bir platform kuralını çiğnemez."
  }
];

const InstagramTextPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <Breadcrumbs items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "Instagram Yazı Stili", item: "/instagram-yazi-stili" }
        ]} />
        <ToolSchema 
          name="Instagram Yazı Stili Değiştirici"
          description="Instagram biyografi ve profilinizi özelleştirmek için yazı stili değiştirici. Kopyala-yapıştır ile anında kullanın, uygulama yok."
          url="/instagram-yazi-stili"
          type="SoftwareApplication"
        />
        <FAQSchema faqs={instagramFaqs} />
        <HeroGeneratorSection 
            titleTag="div"
            titleClassName="max-w-4xl text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
            title={
              <>
                  Instagram için{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
                      Şık Yazı Stilleri
                  </span> oluşturun.
              </>
            }
            description="Instagram bionuz, gönderi açıklamalarınız ve hikayeleriniz için en popüler Unicode fontlarını saniyeler içinde oluşturun ve kopyalayın."
            inputTitle="Instagram Yazı Stili"
            defaultPreviewText="Instagram Yazı Stili"
            listType="instagram"
        />
        <InstagramFullArticle />
      </main>
    </>
  );
};

export default InstagramTextPage;