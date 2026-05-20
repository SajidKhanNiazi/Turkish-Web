"use client";

import { useState, useMemo, useEffect } from "react";
import { generateNameStyles } from "@/lib/textStyles";
import { StyleResultItem } from "./StyleResultItem";

const SHUFFLE_ICON = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export const NameToolSection = () => {
  const [value, setValue] = useState("Sajid");
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseStyles = useMemo(() => generateNameStyles(value || "Sajid"), [value]);

  const shuffledStyles = useMemo(() => {
    if (shuffleSeed === 0) return baseStyles;
    
    // Simple deterministic shuffle based on seed
    const shuffled = [...baseStyles];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = (i * shuffleSeed * 17) % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [baseStyles, shuffleSeed]);

  const handleShuffle = () => {
    setShuffleSeed(prev => prev + 1);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto">
      {/* Input Area */}
      <div className="w-full pb-4 sm:pb-0">
        <div className="relative rounded-2xl bg-[#111827] p-2 sm:p-4 border border-white/[0.08] shadow-lg shadow-black/20 focus-within:border-indigo-500/30">
          <div className="flex flex-col gap-3 rounded-xl bg-[#0B0F1A] p-2 w-full border border-white/[0.04]">
            <div className="flex items-center justify-between px-3 pt-2 pb-1">
              <label htmlFor="name-input" className="text-[11px] font-black uppercase tracking-widest text-gray-400 font-sans">
                İsminizi Girin
              </label>
              <div className="flex gap-2">
                <button
                    type="button"
                    onClick={handleShuffle}
                    className="flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-4 py-1.5 text-[11px] font-bold text-indigo-300 hover:bg-indigo-500/20 active:scale-95 ring-1 ring-inset ring-indigo-500/20"
                >
                    {SHUFFLE_ICON} Karıştır
                </button>
                <button
                    type="button"
                    onClick={handleClear}
                    className="rounded-full bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold text-gray-400 hover:bg-rose-500/10 hover:text-rose-400 active:scale-95 ring-1 ring-inset ring-white/[0.08]"
                >
                    Temizle
                </button>
              </div>
            </div>
            <textarea
              id="name-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Örnek: Sajid"
              rows={1}
              maxLength={40}
              className="w-full resize-none rounded-xl border-0 bg-transparent px-4 pb-2 text-[24px] sm:text-[32px] font-bold text-white placeholder:text-gray-600 focus:outline-none font-sans caret-indigo-400"
            />
          </div>
        </div>
      </div>

      {/* Styles Board */}
      {mounted && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shuffledStyles.map((style, index) => (
          <StyleResultItem
            key={`${style.id}-${shuffleSeed}`} // Force re-render animation slightly if we want it by appending seed, but keeping it smooth without seed is better for performance.
            index={index}
            label={style.label}
            value={style.preview}
          />
        ))}
        </div>
      )}
    </div>
  );
};
