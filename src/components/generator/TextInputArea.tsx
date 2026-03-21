"use client";

import { useState } from "react";

type TextInputAreaProps = {
  value: string;
  onChange: (value: string) => void;
  onTryExample: () => void;
  onClear: () => void;
  title?: string;
  placeholder?: string;
};

export const TextInputArea = ({
  value,
  onChange,
  onTryExample,
  onClear,
  title = "Metninizi yazın veya yapıştırın",
  placeholder = "Örnek: İsmini süslü yazı stilleriyle güzelleştir..."
}: TextInputAreaProps) => {
  return (
    <div className="relative rounded-2xl bg-[#111827]/80 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl ring-1 ring-indigo-500/20 overflow-hidden group">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200 blur"></div>

      <div className="relative flex flex-col gap-4 bg-[#111827] z-10 w-full">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-1">
          <div>
            <div className="text-base font-bold text-gray-100">
              {title}
            </div>
            <p className="mt-1 text-sm text-gray-400 font-medium">
              Aşağıda gerçek zamanlı olarak farklı yazı stilleri göreceksiniz.
            </p>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={onTryExample}
              className="rounded-full bg-indigo-500/10 px-4 py-2 text-[13px] font-bold text-indigo-400 transition-colors hover:bg-indigo-500/20"
            >
              Örnek dene
            </button>
            <button
              type="button"
              onClick={onClear}
              className="rounded-full border border-gray-700 bg-transparent px-4 py-2 text-[13px] font-bold text-gray-400 transition-colors hover:bg-gray-800 hover:text-gray-200"
            >
              Temizle
            </button>
          </div>
        </div>

        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full resize-none rounded-xl border border-gray-800 bg-[#0B0F1A]/70 p-4 text-lg font-medium text-gray-200 placeholder:text-gray-500 focus:border-indigo-500/50 focus:bg-[#0B0F1A] focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all font-sans caret-cyan-400 selection:bg-indigo-500/30 selection:text-indigo-200"
          style={{
            boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.4)'
          }}
        />

        <div className="flex flex-col gap-4 sm:hidden">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onTryExample}
              className="flex-1 rounded-xl bg-indigo-500/10 py-3 text-sm font-bold text-indigo-400"
            >
              Örnek Dene
            </button>
            <button
              type="button"
              onClick={onClear}
              className="flex-1 rounded-xl border border-gray-700 bg-transparent py-3 text-sm font-bold text-gray-400"
            >
              Temizle
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-1 px-1">
          <span className="text-xs text-gray-500 font-medium">
            Dönüştürücü otomatik çalışır, enter tuşuna basmanıza gerek yoktur.
          </span>
        </div>
      </div>
    </div>
  );
};

