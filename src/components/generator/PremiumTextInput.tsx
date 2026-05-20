"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, Trash2, Copy, Check } from "lucide-react";

type PremiumTextInputProps = {
  value: string;
  onChange: (value: string) => void;
  onTryExample: () => void;
  onClear: () => void;
  title?: string;
  subtitle?: string;
  placeholder?: string;
};

export const PremiumTextInput = ({
  value,
  onChange,
  onTryExample,
  onClear,
  title = "Şık Yazı Oluşturucu",
  subtitle = "Metninizi yazın ve farklı yazı stillerini anında kopyalayın",
  placeholder = "İsminizi veya metninizi yazın..."
}: PremiumTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto focus on page load
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleClear = () => {
    onClear();
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="relative group w-full mx-auto max-w-4xl">
      {/* Outer Glow / Gradient Border Wrapper */}
      <div 
        className={`absolute -inset-[1px] bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-[22px] blur-sm opacity-25 group-hover:opacity-60 transition-opacity duration-500 ${isFocused ? 'opacity-80' : ''}`}
        aria-hidden="true"
      ></div>

      {/* Main Glassmorphism Card */}
      <div className="relative bg-[#020617]/90 backdrop-blur-xl border border-white/10 rounded-[20px] p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-gray-400 font-medium">
              {subtitle}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onTryExample}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Örnek Dene</span>
            </button>
            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 border border-white/[0.06]"
            >
              <Trash2 className="w-4 h-4" />
              <span>Temizle</span>
            </button>
          </div>
        </div>

        {/* Input Area Wrapper */}
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`
              w-full h-32 sm:h-40 resize-none rounded-2xl p-5
              bg-[#0f172a]/50 text-lg sm:text-xl text-gray-100 placeholder:text-gray-500
              border-2 transition-all duration-300 outline-none
              ${isFocused 
                ? 'border-indigo-500/50 ring-4 ring-indigo-500/10 bg-[#0f172a]' 
                : 'border-white/[0.06] hover:border-white/10'
              }
            `}
            style={{
              boxShadow: 'inset 0 4px 12px 0 rgba(0, 0, 0, 0.4)'
            }}
          />

          {/* Character Counter */}
          <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-500 bg-[#020617]/50 px-2 py-1 rounded-md backdrop-blur-sm border border-white/[0.06]">
            {value.length} karakter
          </div>
        </div>

        {/* Footer / Helper Hint */}
        <div className="mt-4 flex items-center justify-between px-1">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 animate-pulse"></span>
            <span>Örnek: Ahmet, Instagram Bio, Oyun Nicki</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-gray-600 uppercase tracking-widest">
            <Copy className="w-3 h-3" />
            <span>Otomatik Dönüştürülür</span>
          </div>
        </div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
    </div>
  );
};
