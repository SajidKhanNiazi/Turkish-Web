"use client";

import { useState, useEffect } from "react";
import { generateInstagramSafeStyles, transformTextWithStyle } from "@/lib/textStyles";
import { StyleResultItem } from "./StyleResultItem";

export const InstagramToolSection = () => {
  const [value, setValue] = useState("Profilinizi güzelleştirin");
  const [selectedPreviewStyle, setSelectedPreviewStyle] = useState("bold"); // Default preview style index conceptually
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const styles = generateInstagramSafeStyles(value || "Profilinizi güzelleştirin");

  const handleClear = () => {
    setValue("");
  };

  const currentPreviewText = transformTextWithStyle(value || "Profilinizi güzelleştirin", selectedPreviewStyle);

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl mx-auto">
      
      {/* Left Column: Input and Results */}
      <div className="flex-1 flex flex-col gap-8 w-full">
        {/* Input Area */}
        <div className="w-full pb-4 sm:pb-0">
          <div className="relative rounded-2xl bg-[#111827] p-2 sm:p-4 border border-white/[0.08] shadow-lg shadow-black/20 focus-within:border-indigo-500/30">
            <div className="flex flex-col gap-3 rounded-xl bg-[#0B0F1A] p-2 w-full border border-white/[0.04]">
              <div className="flex items-center justify-between px-3 pt-2 pb-1">
                <label htmlFor="ig-input" className="text-[11px] font-black uppercase tracking-widest text-gray-400 font-sans">
                  Bio Metninizi Girin
                </label>
                <div className="flex items-center gap-3">
                  <span className={`text-[11px] font-bold ${value.length >= 150 ? 'text-rose-400' : 'text-gray-500'}`}>
                    {150 - value.length} karakter kaldı
                  </span>
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
                id="ig-input"
                value={value}
                onChange={(e) => {
                  if(e.target.value.length <= 150) {
                    setValue(e.target.value);
                  }
                }}
                placeholder="Örnek: Profilinizi güzelleştirin..."
                rows={3}
                maxLength={150}
                className="w-full resize-none rounded-xl border-0 bg-transparent px-4 pb-2 text-[20px] sm:text-[24px] font-medium text-white placeholder:text-gray-600 focus:outline-none font-sans caret-indigo-400"
              />
            </div>
          </div>
        </div>

        {/* Style Results */}
        {mounted && (
          <div className="grid gap-4 mt-2">
            {styles.map((style, index) => {
              // Extract the original style mapping ID
              const originalStyleId = style.id.replace('ig-safe-', '');

              return (
              <div 
                key={style.id} 
                onMouseEnter={() => setSelectedPreviewStyle(originalStyleId)}
                onTouchStart={() => setSelectedPreviewStyle(originalStyleId)}
                className="group cursor-pointer"
              >
                <StyleResultItem
                  index={index}
                  label={style.label}
                  value={style.preview}
                />
              </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Right Column: Mobile Preview (Sticky on Desktop) */}
      <div className="hidden lg:block w-[320px] shrink-0">
        <div className="sticky top-[100px] border-[8px] border-gray-800 rounded-[2.5rem] bg-black shadow-2xl overflow-hidden aspect-[9/18] relative flex flex-col">
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-xl w-32 mx-auto z-20"></div>
          
          {/* Header */}
          <div className="pt-8 pb-4 px-4 flex items-center justify-between border-b border-gray-800">
            <span className="font-bold text-white text-sm">yazistilleri.pro</span>
            <div className="flex gap-4">
              <span className="w-5 h-5 rounded bg-gray-800"></span>
              <span className="w-5 h-5 rounded bg-gray-800"></span>
            </div>
          </div>

          {/* Profile Area */}
          <div className="p-4 flex gap-4 items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px]">
              <div className="w-full h-full rounded-full bg-gray-900 border-2 border-black flex items-center justify-center">
                <span className="text-gray-400 font-bold">YS</span>
              </div>
            </div>
            <div className="flex flex-1 justify-around text-center text-white">
              <div><p className="font-bold">128</p><p className="text-xs text-gray-500">Gönderi</p></div>
              <div><p className="font-bold">10K</p><p className="text-xs text-gray-500">Takipçi</p></div>
              <div><p className="font-bold">50</p><p className="text-xs text-gray-500">Takip</p></div>
            </div>
          </div>

          {/* Bio Area */}
          <div className="px-4 pb-4">
            <p className="font-bold text-white text-sm mb-1">Şekilli Yazı</p>
            <p className="text-sm text-gray-100 whitespace-pre-wrap break-words">{currentPreviewText}</p>
            <p className="text-blue-400 text-sm mt-1">yazistilleri.pro</p>
          </div>

          <div className="px-4 pb-4 flex gap-2">
            <div className="flex-1 bg-gray-800 text-white rounded-lg py-1.5 text-sm font-bold text-center">Düzenle</div>
            <div className="flex-1 bg-gray-800 text-white rounded-lg py-1.5 text-sm font-bold text-center">Paylaş</div>
          </div>

        </div>
      </div>
    </div>
  );
};
