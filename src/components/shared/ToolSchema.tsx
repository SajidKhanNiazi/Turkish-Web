import { siteConfig } from "@/lib/site";

interface ToolSchemaProps {
    name: string;
    description: string;
    url: string;
    type?: "WebApplication" | "SoftwareApplication";
}

export const ToolSchema = ({ name, description, url, type = "WebApplication" }: ToolSchemaProps) => {
    const baseUrl = siteConfig.url;
    const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": type,
        "name": name,
        "url": fullUrl,
        "description": description,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "TRY"
        },
        "inLanguage": "tr"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};
