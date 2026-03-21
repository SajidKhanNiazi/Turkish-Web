import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { InstagramArticle } from "@/components/generator/InstagramArticle";

export const metadata: Metadata = {
  title: "Instagram Yazı Stili (Şekilli Yazı) – Instagram Bio İçin Şık Yazılar",
  description:
    "Instagram yazı stili oluşturun. Biyografi, kullanıcı adı ve yorumlar için şekilli yazıları kolayca kopyalayın. En popüler Instagram yazı stillerini keşfedin.",
  alternates: {
    canonical: "/instagram-yazi-stili"
  }
};

const InstagramTextPage = () => {
  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <HeroGeneratorSection 
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
        <InstagramArticle />
      </main>
    </>
  );
};

export default InstagramTextPage;