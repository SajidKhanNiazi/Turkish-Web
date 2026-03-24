import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { HeroGeneratorSection } from "@/components/home/HeroGeneratorSection";
import { ContentSection } from "@/components/home/ContentSection";
import { FAQSection } from "@/components/shared/FAQSection";
import { silo1Categories } from "@/data/categories";
import { GeneratorListType } from "@/components/home/HeroGeneratorSection";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const category = silo1Categories.find((c) => c.slug === params.slug);

    if (!category) {
        return {};
    }

    const title = `${category.title} Copy and Paste | ${siteConfig.name}`;
    const description = category.description;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${siteConfig.url}/${category.slug}`,
            siteName: siteConfig.name,
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        alternates: {
            canonical: `${siteConfig.url}/${category.slug}`,
        },
    };
}

export default function SiloPage({ params }: PageProps) {
    const category = silo1Categories.find((c) => c.slug === params.slug);

    if (!category) {
        notFound();
    }

    const customTitle = (
        <>
            Saniyeler içinde{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {category.title}
            </span> ile öne çıkın.
        </>
    );

    const customDescription = `${category.title} aracı ile metinlerinizi anında havalı, şık ve estetik hale getirin. Instagram, TikTok ve PUBG profiliniz için en iyi yazı tiplerini şimdi kopyalayın.`;

    let listType: GeneratorListType = 'default';
    if (category.slug === "kalin-yazi-stili") listType = "bold";
    if (category.slug === "italik-egik-yazi") listType = "italic";
    if (category.slug === "dekoratif-estetik-yazi-tipleri") listType = "aesthetic";
    if (category.slug === "yazi-tipi-degistirme") listType = "fontChanger";
    if (category.slug === "instagram-yazi-stili") listType = "instagram";
    if (category.slug === "whatsapp-yazi-stili") listType = "whatsapp";

    return (
        <>
            <main className="flex-1 flex flex-col font-sans">
                <HeroGeneratorSection 
                    title={customTitle} 
                    description={customDescription} 
                    inputTitle={category.title}
                    defaultPreviewText={category.title}
                    listType={listType}
                />

                <div className="bg-slate-50/50">
                    <ContentSection title={`${category.title} Nedir?`}>
                        <p>
                            {category.title} aracı, standart metinlerinize anında daha yaratıcı ve estetik bir görünüm kazandırır. Özel Unicode sembolleri sayesinde WhatsApp, Instagram veya PUBG gibi platformlarda sorunsuz bir şekilde kopyalayıp kullanabilirsiniz.
                        </p>
                    </ContentSection>
                </div>

                <FAQSection />
            </main>
        </>
    );
}
