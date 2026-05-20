"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { FloatingParticles } from "@/components/home/FloatingParticles";
import { StyleResultItem } from "@/components/generator/StyleResultItem";
import { generateBoldNickStyles, BoldStyleType } from "@/lib/boldNickStyles";
import { ArrowRight, Bold, Sparkles, Zap, History, LayoutGrid } from "lucide-react";
import Link from "next/link";

const DEFAULT_PREVIEW = "Aslan";

export const BoldNickGenerator = () => {
    const [value, setValue] = useState("");
    const [filter, setFilter] = useState<"all" | BoldStyleType>("all");
    const [mounted, setMounted] = useState(false);
    const [toast, setToast] = useState(false);
    const [recentCopies, setRecentCopies] = useState<string[]>([]);
    const resultsRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMounted(true);
        // Auto-focus input on load
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const effectiveInput = value.trim() || DEFAULT_PREVIEW;

    // Massive Style Engine (400+ variations)
    const allResults = useMemo(() => {
        return generateBoldNickStyles(effectiveInput, filter);
    }, [effectiveInput, filter]);

    // Step 3: Segmentation (Smart Ranking Engine)
    const top20 = useMemo(() => allResults.slice(0, 20), [allResults]);
    const next30 = useMemo(() => allResults.slice(20, 50), [allResults]);
    const remaining = useMemo(() => allResults.slice(50, 200), [allResults]); // Limited to 200 for better performance

    const onCopied = (text: string) => {
        setToast(true);
        window.setTimeout(() => setToast(false), 1500);
        
        // Add to recent
        setRecentCopies(prev => {
            const next = [text, ...prev.filter(t => t !== text)].slice(0, 5);
            return next;
        });

        if (typeof navigator !== "undefined" && navigator.vibrate) {
            navigator.vibrate(10);
        }
    };

    if (!mounted) return null;

    return (
        <section className="bg-[#0B0F1A] min-h-screen pb-20 overflow-x-hidden font-sans">
            {/* Hero Tool Section */}
            <div className="relative pt-12 pb-10 sm:pt-20 border-b border-white/[0.04] transition-all bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-[#0B0F1A] to-[#0B0F1A]">
                <FloatingParticles />
                <Container className="relative z-10 text-center">
                    <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-300">
                        <Zap className="w-3 h-3" /> Kalın & Özel Stilli Nickler
                    </span>
                    <div className="text-3xl font-black tracking-tight sm:text-5xl md:text-6xl text-white px-4 leading-[1.1]">
                        Kalın <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">&</span> Özel Nickler
                    </div>
                    <p className="mt-4 max-w-xl mx-auto text-sm text-gray-500 font-medium px-6">
                        Okunabilir, kalın ve visually unique takma adlar oluşturun. Tek tap ile kopyalayın.
                    </p>

                    {/* Highly Optimized Input Area */}
                    <div className="mt-10 max-w-2xl mx-auto px-4 w-full">
                        <div className="relative group rounded-3xl bg-[#111827]/80 p-1 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
                            <div className="flex flex-col rounded-[22px] bg-[#0D121F] p-1 w-full overflow-hidden">
                                <label htmlFor="bold-nick-input" className="sr-only">Nick Yazın</label>
                                <input
                                    id="bold-nick-input"
                                    ref={inputRef}
                                    type="text"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="Nickinizi yazın..."
                                    maxLength={30}
                                    className="w-full bg-transparent p-5 text-xl sm:text-2xl font-bold text-white placeholder:text-gray-700 focus:outline-none caret-indigo-400"
                                />
                            </div>
                        </div>

                        {/* Filter Controls */}
                        <div className="mt-6 flex flex-wrap justify-center gap-2">
                             {[
                                { id: "all", label: "Tümü", icon: LayoutGrid },
                                { id: "kalin", label: "Kalın", icon: Bold },
                                { id: "ozel", label: "Özel", icon: Sparkles },
                                { id: "karisik", label: "Karışık", icon: ArrowRight }
                             ].map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => setFilter(opt.id as any)}
                                    className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all active:scale-95 border ${
                                        filter === opt.id 
                                        ? "bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/20" 
                                        : "bg-white/[0.04] border-white/[0.08] text-gray-400 hover:bg-white/[0.08]"
                                    }`}
                                >
                                    <opt.icon className={`w-3.5 h-3.5 ${filter === opt.id ? "text-white" : "text-gray-500"}`} />
                                    {opt.label}
                                </button>
                             ))}
                        </div>
                    </div>
                </Container>
            </div>

            {/* Results Grid - Mobile-First Single Column */}
            <div ref={resultsRef} className="pt-10">
                <Container className="max-w-3xl">
                    <div className="grid gap-12 px-2">
                        
                        {/* Recently Copied Section */}
                        {recentCopies.length > 0 && (
                            <section className="space-y-4 px-4 sm:px-0">
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-gray-500">
                                    <History className="w-3 h-3" /> Son Kopyalananlar
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {recentCopies.map((text, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => {
                                                navigator.clipboard.writeText(text);
                                                onCopied(text);
                                            }}
                                            className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-300 animate-in fade-in zoom-in duration-300"
                                        >
                                            {text}
                                        </button>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Section 1: Most Rank (Top 20) - Bold Clean Priority */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-4 px-4 sm:px-0">
                                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-indigo-400">
                                    🔥 En İyi Seçenekler (Kalın)
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent" />
                            </div>
                            <div className="grid gap-4 w-full">
                                {top20.map((item, idx) => (
                                    <StyleResultItem 
                                        key={item.id}
                                        index={idx}
                                        label={idx === 0 ? "🔥 En Okunaklı" : `Stil ${idx + 1}`}
                                        value={item.preview}
                                        onCopied={() => onCopied(item.preview)}
                                        enableCardCopy
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Section 2: Bold + Special Mix */}
                        {next30.length > 0 && (
                            <section className="space-y-6">
                                <div className="flex items-center gap-4 px-4 sm:px-0">
                                    <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-purple-400">
                                        ✨ Karışık & Şık Stiller
                                    </div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
                                </div>
                                <div className="grid gap-4 w-full opacity-90">
                                    {next30.map((item, idx) => (
                                        <StyleResultItem 
                                            key={item.id}
                                            index={idx + 20}
                                            label={`Zarif Stil ${idx + 1}`}
                                            value={item.preview}
                                            onCopied={() => onCopied(item.preview)}
                                            enableCardCopy
                                        />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Section 3: All Variations */}
                        {remaining.length > 0 && (
                            <section className="space-y-6">
                                <div className="flex items-center gap-4 px-4 sm:px-0">
                                    <div className="text-sm font-black uppercase tracking-[0.2em] text-gray-500">
                                        Tüm Varyasyonlar
                                    </div>
                                    <div className="h-px flex-1 bg-white/[0.04]" />
                                </div>
                                <div className="grid gap-3 w-full opacity-70 scale-[0.98] origin-top">
                                    {remaining.map((item, idx) => (
                                        <StyleResultItem 
                                            key={item.id}
                                            index={idx + 50}
                                            label={`Alternatif ${idx + 1}`}
                                            value={item.preview}
                                            onCopied={() => onCopied(item.preview)}
                                            enableCardCopy
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Internal Flow - Silo Linking */}
                    <div className="mt-20 text-center px-6">
                        <Link 
                            href="/sekilli-nick-yazma" 
                            className="group inline-flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5 pr-8 transition-all hover:bg-white/[0.06] active:scale-95"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-extrabold text-white">Ana Nick Aracı</div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Tüm şekilli nickleri keşfet</div>
                            </div>
                        </Link>
                    </div>
                </Container>
            </div>

            {/* Micro-UX Toast Feedback */}
            {toast && (
                <div className="fixed bottom-10 left-0 right-0 z-[100] flex justify-center pointer-events-none animate-in fade-in slide-in-from-bottom-6">
                    <span className="rounded-full bg-white text-black px-6 py-3 text-sm font-black shadow-2xl shadow-indigo-500/20 border border-white/20">
                        Kopyalandı ✓
                    </span>
                </div>
            )}
        </section>
    );
};
