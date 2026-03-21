import { ReactNode } from "react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../shared/SectionHeading";

type ContentSectionProps = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    eyebrow?: string;
};

export const ContentSection = ({ title, subtitle, children, eyebrow }: ContentSectionProps) => {
    return (
        <section className="py-20 md:py-28 bg-[#0B0F1A] border-t border-white/[0.06]">
            <Container>
                <div className="mx-auto max-w-4xl">
                    <SectionHeading 
                        eyebrow={eyebrow} 
                        title={title} 
                        subtitle={subtitle}
                        align="left"
                    />
                    
                    <div className="mt-12 prose prose-invert prose-lg prose-slate max-w-none 
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-strong:text-white prose-strong:font-bold
                        prose-headings:text-white prose-headings:font-display
                        prose-li:text-gray-300
                        prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-a:no-underline prose-a:border-b prose-a:border-indigo-400/30 hover:prose-a:border-indigo-300
                        [&>*:first-child]:mt-0">
                        {children}
                    </div>
                </div>
            </Container>
        </section>
    );
};
