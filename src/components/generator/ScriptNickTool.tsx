"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "../layout/Container";
import { SCRIPT_STYLES, transformScript } from "@/lib/scriptStyles";
import { CheckCircle2, XCircle, AlertCircle, Copy, Check } from "lucide-react";
import { clsx } from "clsx";

interface ScriptNickToolProps {
  value: string;
  onChange: (val: string) => void;
}

export const ScriptNickTool = ({ value, onChange }: ScriptNickToolProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCopy = async (id: string, text: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const charCount = value.length;
  const counterColor = clsx({
    "text-gray-400": charCount <= 12,
    "text-amber-400 font-bold": charCount >= 13 && charCount <= 16,
    "text-rose-500 font-black": charCount >= 17,
  });

  return (
    <section className="relative overflow-hidden bg-[#0B0F1A] pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-white/[0.06]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-50" />
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-indigo-300">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            Türkçe ğşıçöü Destekli
          </div>
          
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
            El Yazısı Nick Yazma <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Kopyala & Yapıştır
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-400 font-medium max-w-xl">
            İsminizi el yazısı fontuna dönüştürün. Instagram, PUBG ve WhatsApp için en uyumlu script stiller.
          </p>

          {/* Input Area */}
          <div className="mt-12 w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl opacity-20 blur transition duration-500 group-focus-within:opacity-40" />
              <div className="relative bg-[#0F172A] border border-white/[0.08] rounded-2xl p-2 shadow-2xl shadow-black/50">
                <div className="flex flex-col gap-2 rounded-xl bg-[#0B0F1A] p-4 transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-500/30">
                  <div className="flex justify-between items-center px-1">
                    <label htmlFor="nick-input" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                      Takma Adınızı Yazın
                    </label>
                    <span className={clsx("text-[10px] font-bold tracking-widest", counterColor)}>
                      {charCount}/16 (PUBG Limiti)
                    </span>
                  </div>
                  <input
                    ref={inputRef}
                    id="nick-input"
                    type="text"
                    maxLength={30}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="İsminizi yazın — örn: Ayşe"
                    className="w-full bg-transparent border-0 p-0 text-2xl sm:text-3xl font-bold text-white placeholder:text-gray-700 focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
            </div>
            
            {charCount >= 17 && (
              <div className="mt-3 flex items-center gap-2 text-rose-400 text-xs font-bold animate-in fade-in slide-in-from-top-1">
                <AlertCircle size={14} />
                16 karakterden sonrası PUBG&apos;de görünmeyebilir.
              </div>
            )}
          </div>

          {/* Results Grid */}
          <div className="mt-12 w-full grid gap-4">
            {SCRIPT_STYLES.map((style) => {
              const transformed = transformScript(value || "Ayşe", style.id);
              const isCopied = copiedId === style.id;
              
              return (
                <div 
                  key={style.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#111827] border border-white/[0.04] hover:border-indigo-500/30 hover:bg-[#111827]/80 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-start gap-1.5 overflow-hidden">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 py-0.5 px-2 bg-white/5 rounded-md">
                        {style.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <PlatformBadge label="PUBG" status={style.platforms.pubg} />
                        <PlatformBadge label="IG" status={style.platforms.instagram ? "yes" : "no"} />
                        <PlatformBadge label="WA" status={style.platforms.whatsapp ? "yes" : "no"} />
                        <PlatformBadge label="DC" status={style.platforms.discord ? "yes" : "no"} />
                      </div>
                    </div>
                    <div className="w-full truncate text-2xl sm:text-3xl font-medium text-gray-100 group-hover:text-white transition-colors">
                      {transformed}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleCopy(style.id, transformed)}
                    className={clsx(
                      "flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg active:scale-95 sm:min-w-[140px]",
                      isCopied 
                        ? "bg-emerald-500 text-white shadow-emerald-500/20" 
                        : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-500/20"
                    )}
                  >
                    {isCopied ? (
                      <>
                        <Check size={16} /> 
                        Kopyalandı ✓
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Kopyala
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

const PlatformBadge = ({ label, status }: { label: string, status: "yes" | "no" | "partial" }) => {
  return (
    <div className={clsx(
      "flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-black tracking-tight",
      status === "yes" ? "bg-emerald-500/10 text-emerald-400" :
      status === "partial" ? "bg-amber-500/10 text-amber-400" :
      "bg-rose-500/10 text-rose-400"
    )}>
      {label}
      {status === "yes" ? <CheckCircle2 size={10} /> : status === "partial" ? <AlertCircle size={10} /> : <XCircle size={10} />}
    </div>
  );
};
