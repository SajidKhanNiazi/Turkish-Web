"use client";

import Link from "next/link";
import { Container } from "../layout/Container";
import { siteConfig } from "@/lib/site";

interface BreadcrumbItem {
    name: string;
    item: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    const baseUrl = siteConfig.url;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item.startsWith("http") ? item.item : `${baseUrl}${item.item.startsWith("/") ? "" : "/"}${item.item}`
        }))
    };

    return (
        <nav aria-label="breadcrumb" className="py-6 border-b border-white/[0.03] bg-[#0B0F1A]/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Container>
                <ol className="flex flex-wrap items-center gap-2 text-[13px] font-medium list-none p-0 m-0">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            {index < items.length - 1 ? (
                                <>
                                    <Link 
                                        href={item.item} 
                                        className="text-gray-400 hover:text-indigo-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                    <span className="text-gray-600 select-none">›</span>
                                </>
                            ) : (
                                <span className="text-gray-300 font-bold">{item.name}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </Container>
        </nav>
    );
};
