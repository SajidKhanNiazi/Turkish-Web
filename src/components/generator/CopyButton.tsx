"use client";

import { useState, type MouseEvent } from "react";

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

type CopyButtonProps = {
  value: string;
  onCopied?: () => void;
};

export const CopyButton = ({ value, onCopied }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopied?.();
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!value || copied}
      className={`relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden rounded-xl border px-4 text-xs font-bold transition-all duration-200 active:scale-95 sm:w-32 ${copied
        ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-400"
        : "border-white/[0.08] bg-[#111827] text-gray-300 hover:bg-[#1F2937] hover:border-white/[0.15] hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/20 disabled:opacity-50 disabled:hover:translate-y-0"
        }`}
      aria-label={copied ? "Kopyalandı" : "Kopyala"}
    >
      <span
        className={`flex items-center gap-1.5 transition-transform duration-300 ${copied ? "-translate-y-12" : "translate-y-0"
          }`}
      >
        <CopyIcon />
        Kopyala
      </span>
      <span
        className={`absolute flex items-center gap-1.5 transition-transform duration-300 ${copied ? "translate-y-0 text-emerald-400" : "translate-y-12 text-emerald-400"
          }`}
      >
        <CheckIcon />
        Kopyalandı
      </span>
    </button>
  );
};
