"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { FloatingParticles } from "@/components/home/FloatingParticles";
import { StyleResultItem } from "@/components/generator/StyleResultItem";
import { generateCoolNickStyles, CoolStyleType } from "@/lib/coolNickStyles";
import { ArrowRight, Flame, Sparkles, Zap } from "lucide-react";

const DEFAULT_PREVIEW = "Kral";

export const CoolNickGenerator = () => {
    const [value, setValue] = useState("");
    const [filter, setFilter] = useState<"all" | CoolStyleType>("all");
    const [mounted, setMounted] = useState(false);
    const [toast, setToast] = useState(false);
    const resultsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const effectiveInput = value.trim() || DEFAULT_PREVIEW;

    // Smart Ranking Logic
    const allResults = useMemo(() => {
        return generateCoolNickStyles(effectiveInput, filter);
    }, [effectiveInput, filter]);

    // Step 3: Segmentation
    const mostCool = useMemo(() => allResults.slice(0, 20), [allResults]);
    const trending = useMemo(() => allResults.slice(20, 50), [allResults]);
    const moreStyles = useMemo(() => allResults.slice(50, 150), [allResults]);

    const showToast = useCallback(() => {
        setToast(true);
        window.setTimeout(() => setToast(false), 1500);
    }, []);

    const onCopied = useCallback(() => {
        showToast();
        if (typeof navigator !== "undefined" && navigator.vibrate) {
            navigator.vibrate(10);
        }
    }, [showToast]);

    if (!mounted) return null;

    return (
        <section className="bg-[#0B0F1A] min-h-screen pb-20 overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative pt-12 pb-10 sm:pt-20 border-b border-white/[0.04] transition-all bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-[#0B0F1A] to-[#0B0F1A]">
                <FloatingParticles />
                <Container className="relative z-10 text-center">
                    <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-300">
                        <Zap className="w-3 h-3" /> Mobil Öncelikli Araç
                    </span>
                    <div className="text-3xl font-black tracking-tight sm:text-5xl md:text-6xl text-white px-4 leading-[1.1]">
                        Havalı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Nick Yazma</span>
                    </div>
                    <p className="mt-4 max-w-xl mx-auto text-sm text-gray-500 font-medium px-6">
                        En havalı gamer ve sosyal medya nickleri. Yazın, kopyalayın, fark yaratın.
                    </p>

                    {/* Highly Optimized Input Area */}
                    <div className="mt-10 max-w-2xl mx-auto px-4 w-full">
                        <div className="relative group rounded-3xl bg-[#111827]/80 p-1 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
                            <div className="flex flex-col rounded-[22px] bg-[#0D121F] p-1 w-full overflow-hidden">
                                <label htmlFor="cool-nick-input" className="sr-only">Nick Yazın</label>
                                <input
                                    id="cool-nick-input"
                                    type="text"
                                    autoFocus
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="Havalı nickinizi yazın..."
                                    maxLength={30}
                                    className="w-full bg-transparent p-5 text-xl sm:text-2xl font-bold text-white placeholder:text-gray-700 focus:outline-none caret-indigo-400"
                                />
                            </div>
                        </div>

                        {/* Lightweight Filters */}
                        <div className="mt-6 flex flex-wrap justify-center gap-2">
                             {[
                                { id: "all", label: "Tamamı", icon: Zap },
                                { id: "gamer", label: "Oyun Tarzı", icon: Flame },
                                { id: "social", label: "Instagram", icon: Sparkles },
                                { id: "minimal", label: "Minimal", icon: ArrowRight }
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

            {/* Live Results Section */}
            <div ref={resultsRef} className="pt-10">
                <Container className="max-w-3xl">
                    <div className="grid gap-12 px-2">
                        
                        {/* Section 1: Most Cool (Top 20) */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-4 px-4 sm:px-0">
                                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-indigo-400">
                                    <Flame className="w-4 h-4 fill-current" /> En Havalılar
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent" />
                            </div>
                            <div className="grid gap-3 w-full">
                                {mostCool.map((item, idx) => (
                                    <StyleResultItem 
                                        key={item.id}
                                        index={idx}
                                        label={idx === 0 ? "🔥 En İyi" : `Stil ${idx + 1}`}
                                        value={item.preview}
                                        onCopied={onCopied}
                                        enableCardCopy
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Section 2: Trending */}
                        {trending.length > 0 && (
                            <section className="space-y-6">
                                <div className="flex items-center gap-4 px-4 sm:px-0">
                                    <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-cyan-400">
                                        <Zap className="w-4 h-4 fill-current" /> Trend Nickler
                                    </div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent" />
                                </div>
                                <div className="grid gap-3 w-full opacity-90">
                                    {trending.map((item, idx) => (
                                        <StyleResultItem 
                                            key={item.id}
                                            index={idx + 20}
                                            label={`Trend #${idx + 1}`}
                                            value={item.preview}
                                            onCopied={onCopied}
                                            enableCardCopy
                                        />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Section 3: More Styles */}
                        {moreStyles.length > 0 && (
                            <section className="space-y-6">
                                <div className="flex items-center gap-4 px-4 sm:px-0">
                                    <div className="text-sm font-black uppercase tracking-[0.2em] text-gray-500">
                                        Daha Fazla Paylaşım
                                    </div>
                                    <div className="h-px flex-1 bg-white/[0.04]" />
                                </div>
                                <div className="grid gap-2 w-full opacity-70 scale-[0.98] origin-top">
                                    {moreStyles.map((item, idx) => (
                                        <StyleResultItem 
                                            key={item.id}
                                            index={idx + 50}
                                            label={`Alternatif ${idx + 1}`}
                                            value={item.preview}
                                            onCopied={onCopied}
                                            enableCardCopy
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                </Container>
            </div>

            {/* Toast Feedback */}
            {toast && (
                <div className="fixed bottom-10 left-0 right-0 z-[100] flex justify-center pointer-events-none animate-in fade-in slide-in-from-bottom-4">
                    <span className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-black text-white shadow-2xl shadow-indigo-500/40">
                        Kopyalandı ✓
                    </span>
                </div>
            )}
        </section>
    );
};
