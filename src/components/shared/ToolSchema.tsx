"use client";

interface ToolSchemaProps {
    name: string;
    description: string;
    url: string;
}

export const ToolSchema = ({ name, description, url }: ToolSchemaProps) => {
    const baseUrl = "https://lightpink-viper-961727.hostingersite.com";
    const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": name,
        "url": fullUrl,
        "description": description,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Web",
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
