import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";
import { FreeFireNickGenerator } from "@/components/generator/FreeFireNickGenerator";
import { FreeFireNickArticle } from "@/components/content/FreeFireNickArticle";
import { freeFireNickFaqs } from "@/data/freeFireNickFaqs";

const ffTitle = "Free Fire Nickleri: Şekilli ve Havalı Nick Oluşturucu";
const ffDesc =
  "Free Fire şekilli nick yazma aracı ile havalı Unicode nickler anında oluşturun. 50+ stil, Free Fire uyumluluk kontrolü, semboller ve tek tıkla kopyalama. Ücretsiz free fire nick oluşturucu.";
const ffPath = "/sekilli-nick-yazma/free-fire-nickleri";
const ffUrl = `${siteConfig.url}${ffPath}`;

export const metadata: Metadata = {
  title: ffTitle,
  description: ffDesc,
  alternates: {
    canonical: ffPath,
  },
  openGraph: {
    title: ffTitle,
    description: ffDesc,
    url: ffUrl,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: ffTitle,
    description: ffDesc,
  },
};

export default function FreeFireNickleriPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: freeFireNickFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: ffTitle,
      description: ffDesc,
      inLanguage: "tr",
      datePublished: "2026-02-18",
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
        "@id": ffUrl,
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
            name: "Free Fire Nickleri",
            item: ffPath,
          },
        ]}
      />
      <ToolSchema
        name="Free Fire Nickleri - Şekilli Nick Oluşturucu"
        description="Free Fire için havalı ve şekilli nickleri anında oluşturun, kopyalayın."
        url={ffPath}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <FreeFireNickGenerator />

      <FreeFireNickArticle />
    </main>
  );
}
