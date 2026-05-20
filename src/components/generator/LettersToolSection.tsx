"use client";

import { useState, useEffect } from "react";
import { generateLetterStyles } from "@/lib/textStyles";
import { StyleResultItem } from "./StyleResultItem";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Pre-calculate the grids for A-Z based on the "A" letter definitions
const baseStyles = generateLetterStyles("A");

const LetterSquareButton = ({ character }: { character: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(character);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Kopyalama başarısız", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            title={`${character} kopyala`}
            className={`group relative flex aspect-square items-center justify-center rounded-2xl border transition-all active:scale-95 ${
                copied 
                    ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] z-10 scale-105" 
                    : "bg-[#0B0F1A] border-white/[0.06] text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:z-10"
            }`}
        >
            <span className={`text-[22px] sm:text-[28px] font-medium transition-colors ${copied ? "text-emerald-400" : "group-hover:text-indigo-300"}`}>
                {character}
            </span>
            {copied && (
                <span className="absolute -top-2.5 -right-2.5 bg-emerald-500 text-white text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full shadow-md animate-in fade-in zoom-in duration-200">
                    Alındı
                </span>
            )}
        </button>
    );
};

export const LettersToolSection = () => {
    const [word, setWord] = useState("Harf");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    // Evaluate word generator
    const wordStyles = generateLetterStyles(word || "Harf");

    return (
        <div className="flex flex-col gap-16 w-full max-w-5xl mx-auto">
            
            {/* Word Generator Input */}
            <div className="flex flex-col gap-6">
                <div className="w-full pb-4 sm:pb-0">
                    <div className="relative rounded-3xl bg-[#111827] p-3 sm:p-6 border border-white/[0.08] shadow-2xl shadow-indigo-500/10 focus-within:border-indigo-500/30 transition-all">
                        <div className="flex flex-col gap-3 rounded-2xl bg-[#0B0F1A] p-3 sm:p-4 border border-white/[0.04]">
                            <div className="flex items-center justify-between px-3 pt-2 pb-1">
                                <label htmlFor="letters-word-input" className="text-[12px] font-black uppercase tracking-widest text-indigo-400/80 font-sans">
                                    Kelime veya Harf Girin
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setWord("")}
                                    className="rounded-full bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold text-gray-400 hover:bg-rose-500/10 hover:text-rose-400 active:scale-95 transition-all ring-1 ring-inset ring-white/[0.08]"
                                >
                                    Temizle
                                </button>
                            </div>
                            <textarea
                                id="letters-word-input"
                                value={word}
                                onChange={(e) => setWord(e.target.value)}
                                placeholder="Örn: Harf"
                                rows={1}
                                maxLength={30}
                                className="w-full resize-none rounded-2xl border-0 bg-transparent px-4 pb-2 text-[26px] sm:text-[36px] font-black tracking-tight text-white placeholder:text-gray-600 focus:outline-none focus:ring-0 font-display caret-indigo-400"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mt-2">
                    {wordStyles.map((style, index) => (
                        <StyleResultItem
                            key={style.id}
                            index={index}
                            label={style.label}
                            value={style.preview}
                        />
                    ))}
                </div>
            </div>

            {/* 2. Giant A-Z Alphabet Grids */}
            {mounted && (
                <div className="flex flex-col gap-16 border-t border-white/[0.06] pt-16">
                    <div className="text-center sm:text-left">
                        <div className="text-2xl sm:text-3xl font-bold text-white px-2 tracking-tight font-display mb-3">
                            A&apos;dan Z&apos;ye Şekilli Harfler
                        </div>
                        <p className="text-gray-400 px-2 font-medium text-lg">Aşağıdaki dev harf tablolarından beğendiğiniz harfin üzerine tıklayarak anında kopyalayabilirsiniz.</p>
                    </div>

                    <div className="flex flex-col gap-12">
                        {baseStyles.map((styleDef) => {
                            const styleLabel = styleDef.label;
                            return (
                                <div key={styleDef.id} className="flex flex-col gap-6 bg-[#111827]/40 p-4 sm:p-8 rounded-3xl border border-white/[0.04]">
                                    <div className="text-lg sm:text-xl font-bold text-white tracking-tight border-l-4 border-indigo-500 pl-4">
                                        {styleLabel} Harfler
                                    </div>
                                    {/* 13 columns on ultra wide, 9 on desktop, 6/7 on tablet, 5 on mobile */}
                                    <div className="grid grid-cols-5 min-[480px]:grid-cols-6 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-13 gap-2 sm:gap-3">
                                        {ALPHABET.map((letter) => {
                                            // Find the exact computed letter style
                                            const exactStyle = generateLetterStyles(letter).find(s => s.id === styleDef.id);
                                            const previewChar = exactStyle ? exactStyle.preview : letter;

                                            return (
                                                <LetterSquareButton 
                                                    key={`${styleDef.id}-${letter}`} 
                                                    character={previewChar} 
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
