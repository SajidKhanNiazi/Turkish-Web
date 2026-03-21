"use client";

import { useState, useEffect } from "react";
import { Container } from "../layout/Container";
import { StyleResultList } from "../generator/StyleResultList";
import { BoldStyleList } from "../generator/BoldStyleList";
import { ItalicStyleList } from "../generator/ItalicStyleList";
import { AestheticStyleList } from "../generator/AestheticStyleList";
import { FontChangerStyleList } from "../generator/FontChangerStyleList";
import { InstagramStyleList } from "../generator/InstagramStyleList";
import { WhatsAppStyleList } from "../generator/WhatsAppStyleList";
import { FloatingParticles } from "./FloatingParticles";

const EXAMPLE_TEXT = "İsmimi havalı yazı stilleriyle güzelleştir";

export type GeneratorListType = 'bold' | 'italic' | 'aesthetic' | 'fontChanger' | 'instagram' | 'whatsapp' | 'default';

interface HeroProps {
    title?: React.ReactNode;
    titleTag?: 'h1' | 'h2' | 'div';
    description?: React.ReactNode;
    inputTitle?: string;
    defaultPreviewText?: string;
    listType?: GeneratorListType;
}

export const HeroGeneratorSection = ({ 
    title, 
    titleTag = 'h1',
    description, 
    inputTitle, 
    defaultPreviewText,
    listType = 'default'
}: HeroProps = {}) => {
    const [value, setValue] = useState("");
    const [mounted, setMounted] = useState(false);

    const TitleTag = titleTag;

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleTryExample = () => setValue(EXAMPLE_TEXT);
    const handleClear = () => setValue("");

    return (
        <section className="relative overflow-hidden bg-[#0B0F1A] pt-16 pb-0 sm:pt-28 border-b border-white/[0.06]">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/30 via-[#0B0F1A] to-[#0B0F1A]" />
            <FloatingParticles />

            <Container className="relative z-10 flex flex-col items-center text-center">
                <span className="mb-6 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-indigo-300">
                    Ücretsiz Şık Yazı Aracı
                </span>
                <TitleTag className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-7xl leading-[1.1] text-white">
                    {title || (
                        <>
                            İsminizi saniyeler içinde{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 animate-shimmer bg-[length:200%_auto]">
                                güzelleştirin.
                            </span>
                        </>
                    )}
                </TitleTag>
                <p className="mt-6 max-w-2xl text-lg text-gray-400 font-medium leading-relaxed">
                    {description || "Metninizi yazın, stilinizi seçin ve kopyalayın. Instagram, TikTok ve PUBG için en kolay yol."}
                </p>

                {/* Text Input Card */}
                <div className="mt-12 w-full max-w-3xl text-left">
                    <div className="relative rounded-2xl bg-[#111827] p-4 border border-white/[0.08] shadow-xl shadow-black/30 transition-all duration-300 hover:border-white/[0.12] focus-within:border-indigo-500/30 focus-within:shadow-indigo-500/10">

                        <div className="flex flex-col gap-3 rounded-xl bg-[#0B0F1A] p-2 w-full border border-white/[0.04] transition-colors duration-300 focus-within:border-white/[0.08]">
                            <div className="flex items-center justify-between px-3 pt-2 pb-1">
                                <label htmlFor="hero-input" className="text-[11px] font-black uppercase tracking-widest text-gray-400 font-sans">
                                    {inputTitle || "Dönüştürmek için metin girin:"}
                                </label>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={handleTryExample}
                                        className="rounded-full bg-indigo-500/10 px-4 py-1.5 text-[11px] font-bold text-indigo-300 transition-all duration-200 hover:bg-indigo-500/20 hover:text-indigo-200 active:scale-95 ring-1 ring-inset ring-indigo-500/20"
                                    >
                                        Örnek Dene
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleClear}
                                        className="rounded-full bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold text-gray-400 transition-all duration-200 hover:bg-rose-500/10 hover:text-rose-400 active:scale-95 ring-1 ring-inset ring-white/[0.08] hover:ring-rose-500/30"
                                    >
                                        Temizle
                                    </button>
                                </div>
                            </div>
                            <textarea
                                id="hero-input"
                                value={value}
                                onChange={(event) => setValue(event.target.value)}
                                placeholder="Örnek: İsmini süslü yazı stilleriyle güzelleştir..."
                                rows={3}
                                className="w-full resize-none rounded-xl border-0 bg-transparent p-4 text-[22px] md:text-[26px] font-medium text-white placeholder:text-gray-600 focus:outline-none transition-all duration-200 font-sans caret-indigo-400 selection:bg-indigo-500/30 selection:text-white"
                            />
                        </div>
                    </div>
                </div>
            </Container>

            {/* Results section */}
            <div id="olusturucu" className="relative z-10 mt-16 w-full border-t border-white/[0.06] bg-[#111827]/50 py-16 backdrop-blur-sm">
                <Container>
                    <div className="mx-auto max-w-4xl">
                        {mounted && (
                            <>
                                {listType === 'bold' && <BoldStyleList input={value} />}
                                {listType === 'italic' && <ItalicStyleList input={value} />}
                                {listType === 'aesthetic' && <AestheticStyleList input={value} />}
                                {listType === 'fontChanger' && <FontChangerStyleList input={value} />}
                                {listType === 'instagram' && <InstagramStyleList input={value} />}
                                {listType === 'whatsapp' && <WhatsAppStyleList input={value} />}
                                {listType === 'default' && <StyleResultList input={value} defaultText={defaultPreviewText} />}
                            </>
                        )}
                    </div>
                </Container>
            </div>
        </section>
    );
};
