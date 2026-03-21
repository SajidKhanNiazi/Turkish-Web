"use client";

import { useState } from "react";
import { generateAllStyles } from "@/lib/textStyles";
import { StyleResultItem } from "./StyleResultItem";

export const PillarToolSection = () => {
    const [text, setText] = useState("Şekilli Yazı");
    
    // Generate all global styles
    const allStyles = generateAllStyles(text || "Şekilli Yazı");
    
    // Group them dynamically by category
    const groupedStyles = allStyles.reduce<{ [key: string]: typeof allStyles }>((acc, style) => {
        const cat = style.category || "Diğer Stiller";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(style);
        return acc;
    }, {} as Record<string, typeof allStyles>);

    return (
        <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto">
            {/* Input Area */}
            <div className="w-full pb-4 sm:pb-0">
                <div className="relative rounded-3xl bg-[#111827] p-3 sm:p-6 border border-white/[0.08] shadow-2xl shadow-indigo-500/10 focus-within:border-indigo-500/30 transition-all">
                    <div className="flex flex-col gap-3 rounded-2xl bg-[#0B0F1A] p-3 sm:p-4 border border-white/[0.04]">
                        <div className="flex items-center justify-between px-3 pt-2 pb-1">
                            <label htmlFor="pillar-input" className="text-[12px] font-black uppercase tracking-widest text-indigo-400/80 font-sans">
                                Metninizi Buraya Yazın
                            </label>
                            <button
                                type="button"
                                onClick={() => setText("")}
                                className="rounded-full bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold text-gray-400 hover:bg-rose-500/10 hover:text-rose-400 active:scale-95 transition-all ring-1 ring-inset ring-white/[0.08]"
                            >
                                Temizle
                            </button>
                        </div>
                        <textarea
                            id="pillar-input"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Örn: Şekilli Yazı"
                            rows={2}
                            maxLength={300}
                            className="w-full resize-none rounded-2xl border-0 bg-transparent px-4 pb-2 text-[26px] sm:text-[36px] font-black tracking-tight text-white placeholder:text-gray-600 focus:outline-none focus:ring-0 font-display caret-indigo-400"
                        />
                    </div>
                </div>
            </div>

            {/* Render grouped styles */}
            <div className="flex flex-col gap-16 mt-4">
                {Object.entries(groupedStyles).map(([category, styles]) => (
                    <div key={category} className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="text-lg sm:text-xl font-bold text-white px-2 tracking-tight font-display">
                                {category}
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.06] to-transparent" />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                            {styles.map((style, index) => (
                                <StyleResultItem
                                    key={style.id}
                                    index={index}
                                    label={style.label}
                                    value={style.preview}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
