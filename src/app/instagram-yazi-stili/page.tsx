import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { InstagramFullArticle } from "@/components/content/InstagramFullArticle";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";

export const metadata: Metadata = {
  title: "Instagram Yazı Stili: Bio ve Profil Font Değiştirici | YazıStilleriPro",
  description:
    "Instagram yazı stili değiştirici ile biyografi ve profilinizi özelleştirin. Instagram biyografi yazı tipi için kopyala-yapıştır — anında kullanın, uygulama yok.",
  alternates: {
    canonical: "/instagram-yazi-stili"
  }
};

const InstagramTextPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Instagram Yazı Stili: Bio ve Profil Font Değiştirici | YazıStilleriPro",
      "description": "Instagram yazı stili değiştirici ile biyografi ve profilinizi özelleştirin. Instagram biyografi yazı tipi için kopyala-yapıştır — anında kullanın, uygulama yok.",
      "inLanguage": "tr"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Instagram şekilli yazı neden çalışıyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Instagram şekilli yazı, Unicode karakter standardı sayesinde çalışır. Normal harflerin Unicode sisteminde onlarca görsel versiyonu vardır. Bu karakterler font dosyası değil, evrensel metin karakterleridir. Bu yüzden Instagram ve diğer tüm platformlar bu yazıları sorunsuz görüntüler."
          }
        },
        {
          "@type": "Question",
          "name": "Instagram biyografisinde kaç karakter kullanılabilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Instagram biyografisi 150 karakterle sınırlıdır. Profil adı alanı ise yalnızca 30 karakterdir. Şekilli yazı karakterleri Unicode tabanlı olduğu için standart harflerden daha fazla byte kaplayabilir. Bu nedenle şekilli yazıyı biyografiye eklemeden önce karakter sayısını kontrol etmeniz önerilir."
          }
        },
        {
          "@type": "Question",
          "name": "Instagram'da Türkçe şekilli yazı çalışıyor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, Türkçe karakter desteği sunan araçlarda Ğ, Ş, Ü, İ, Ö ve Ç harfleri eksiksiz dönüştürülür. Türkçe desteği olmayan araçlarda bu harfler bozuk görünebilir. Bu nedenle Türkçe optimizasyonlu bir araç kullanmanız önemlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Instagram biyografi yazı tipi uygulama içinden değiştirilebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Instagram'ın yazı tipi değiştirme butonu yalnızca Hikayeler ve Reels için geçerlidir. Biyografi veya profil adı alanında yerleşik bir font seçeneği bulunmaz. Biyografi için şekilli yazı kullanmak istiyorsanız Unicode tabanlı bir şekilli yazı aracı kullanmanız ve metni kopyala-yapıştır yöntemiyle eklemeniz gerekir."
          }
        }
      ]
    }
  ];

  return (
    <>
      <main className="flex-1 flex flex-col font-sans">
        <Breadcrumbs items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "Instagram Yazı Stili", item: "/instagram-yazi-stili" }
        ]} />
        <ToolSchema 
          name="Instagram Şekilli Yazı Oluşturucu"
          description="Instagram bionuz, gönderi açıklamalarınız ve hikayeleriniz için en popüler Unicode fontlarını saniyeler içinde oluşturun."
          url="/instagram-yazi-stili"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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