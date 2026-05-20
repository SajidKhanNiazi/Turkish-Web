import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";
import { BoldNickGenerator } from "@/components/generator/BoldNickGenerator";
import { BoldNickArticle } from "@/components/content/BoldNickArticle";
import { boldNickFaqs } from "@/data/boldNickFaqs";

const kalinTitle =
  "Kalın & Özel Nickler (Kopyala Yapıştır) – Şekilli ve Havalı Nickler";
const kalinDesc =
  "Kalın & özel nickler ile dikkat çekin. Kopyala yapıştır hazır nickler, şekilli yazılar ve oyun nickleri burada. Hemen kullan!";

export const metadata: Metadata = {
  title: kalinTitle,
  description: kalinDesc,
  alternates: {
    canonical: "/sekilli-nick-yazma/kalin-ozel-stilli-nickler",
  },
  openGraph: {
    title: kalinTitle,
    description: kalinDesc,
    url: `${siteConfig.url}/sekilli-nick-yazma/kalin-ozel-stilli-nickler`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: kalinTitle,
    description: kalinDesc,
  },
};

export default function BoldNickPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: boldNickFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: kalinTitle,
      description: kalinDesc,
      inLanguage: "tr",
      datePublished: "2026-02-10",
      dateModified: "2026-04-08",
      author: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/sekilli-nick-yazma/kalin-ozel-stilli-nickler`,
      },
    },
  ];

  return (
    <main className="flex-1 flex flex-col font-sans">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "Şekilli Nick Yazma", item: "/sekilli-nick-yazma" },
          { name: "Kalın & Özel Stilli Nickler", item: "/sekilli-nick-yazma/kalin-ozel-stilli-nickler" },
        ]}
      />
      <ToolSchema
        name="Kalın & Özel Stilli Nick Yazma Aracı"
        description="Benzersiz, okunaklı ve kalın takma adlar oluşturun ve anında kopyalayın."
        url="/sekilli-nick-yazma/kalin-ozel-stilli-nickler"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BoldNickGenerator />

      <BoldNickArticle />
    </main>
  );
}
