import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";
import { PubgNickGenerator } from "@/components/generator/PubgNickGenerator";
import { PubgNickArticle } from "@/components/content/PubgNickArticle";
import { pubgNickFaqs } from "@/data/pubgNickFaqs";

const pubgTitle = "PUBG Şekilli Nick Yazma: En Havalı PUBG Nickleri Oluştur";
const pubgDesc =
  "PUBG şekilli nick yazma aracı ile havalı Unicode nickler anında oluşturun. 48+ stil, PUBG uyumluluk kontrolü, semboller ve tek tıkla kopyalama. Ücretsiz PUBG nick oluşturucu.";
const pubgPath = "/sekilli-nick-yazma/pubg-sekilli-nick";
const pubgUrl = `${siteConfig.url}${pubgPath}`;

export const metadata: Metadata = {
  title: pubgTitle,
  description: pubgDesc,
  alternates: {
    canonical: pubgPath,
  },
  openGraph: {
    title: pubgTitle,
    description: pubgDesc,
    url: pubgUrl,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: pubgTitle,
    description: pubgDesc,
  },
};

export default function PubgSekilliNickPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: pubgNickFaqs.map((f) => ({
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
      headline: pubgTitle,
      description: pubgDesc,
      inLanguage: "tr",
      datePublished: "2026-02-15",
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
        "@id": pubgUrl,
      },
    },
  ];

  return (
    <main className="flex-1 flex flex-col font-sans">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "Şekilli Nick Yazma", item: "/sekilli-nick-yazma" },
          {
            name: "PUBG Şekilli Nick",
            item: pubgPath,
          },
        ]}
      />
      <ToolSchema
        name="PUBG Şekilli Nick Yazma Aracı"
        description="PUBG Mobile için havalı ve şekilli nickleri anında oluşturun, kopyalayın."
        url={pubgPath}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PubgNickGenerator />

      <PubgNickArticle />
    </main>
  );
}
