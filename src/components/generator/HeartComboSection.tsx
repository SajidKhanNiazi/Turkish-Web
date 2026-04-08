"use client";

import { useState } from "react";
import { Container } from "../layout/Container";
import { getHeartCombos } from "@/lib/scriptStyles";
import { Copy, Check, Heart } from "lucide-react";
import { clsx } from "clsx";

interface HeartComboSectionProps {
  value: string;
}

export const HeartComboSection = ({ value }: HeartComboSectionProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (index: number, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const combos = getHeartCombos(value || "Ayşe");

  return (
    <section id="kalp-bolumu" className="py-20 bg-[#0B0F1A] border-b border-white/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent opacity-60" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-rose-300">
              <Heart size={10} className="fill-current" />
              Kalp Intent Hedefli
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Kalp&apos;li El Yazısı Nick
            </h2>
            <p className="mt-4 text-gray-400 max-w-lg">
              Nickinizi yukarıya yazın, en popüler kalp sembolleriyle süsleyelim. Tek tıkla kopyalayın.
            </p>
          </div>

          <div className="bg-[#111827] border border-white/[0.04] p-8 rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {combos.map((combo, idx) => {
                const isCopied = copiedIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleCopy(idx, combo)}
                    className={clsx(
                      "group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 text-left",
                      isCopied 
                        ? "bg-emerald-500/10 border-emerald-500/30 ring-1 ring-emerald-500/20" 
                        : "bg-[#0B0F1A] border-white/[0.06] hover:border-rose-500/30 hover:bg-[#0B0F1A]/80 shadow-md hover:shadow-rose-500/5 group"
                    )}
                  >
                    <span className={clsx(
                      "text-xl sm:text-2xl font-medium transition-colors",
                      isCopied ? "text-emerald-400" : "text-gray-100 group-hover:text-rose-300"
                    )}>
                      {combo}
                    </span>
                    <div className={clsx(
                      "shrink-0 w-10 h-10 flex items-center justify-center rounded-xl transition-all",
                      isCopied 
                        ? "bg-emerald-500 text-white" 
                        : "bg-white/5 text-gray-500 group-hover:bg-rose-500 group-hover:text-white"
                    )}>
                      {isCopied ? <Check size={18} /> : <Copy size={18} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
