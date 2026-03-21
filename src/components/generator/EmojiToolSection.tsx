"use client";

import { useState } from "react";
import { generateEmojiStyles } from "@/lib/textStyles";
import { StyleResultItem } from "./StyleResultItem";

type TabType = 'emoji' | 'kaomoji';

export const EmojiToolSection = () => {
  const [value, setValue] = useState("Harika");
  const [activeTab, setActiveTab] = useState<TabType>('emoji');

  const allStyles = generateEmojiStyles(value || "Harika");
  
  // Split the categories
  const emojiStyles = allStyles.filter(s => s.category.includes("Emoji"));
  const kaomojiStyles = allStyles.filter(s => s.category.includes("Kaomoji"));
  
  const currentStyles = activeTab === 'emoji' ? emojiStyles : kaomojiStyles;

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
      {/* Input Area */}
      <div className="w-full pb-4 sm:pb-0">
        <div className="relative rounded-2xl bg-[#111827] p-2 sm:p-4 border border-white/[0.08] shadow-lg shadow-black/20 focus-within:border-indigo-500/30">
          <div className="flex flex-col gap-3 rounded-xl bg-[#0B0F1A] p-2 w-full border border-white/[0.04]">
            <div className="flex items-center justify-between px-3 pt-2 pb-1">
              <label htmlFor="emoji-input" className="text-[11px] font-black uppercase tracking-widest text-gray-400 font-sans">
                Emoji ile Süsle
              </label>
              <button
                  type="button"
                  onClick={handleClear}
                  className="rounded-full bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold text-gray-400 hover:bg-rose-500/10 hover:text-rose-400 active:scale-95 ring-1 ring-inset ring-white/[0.08]"
              >
                  Temizle
              </button>
            </div>
            <textarea
              id="emoji-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Örnek: Harika"
              rows={1}
              maxLength={50}
              className="w-full resize-none rounded-xl border-0 bg-transparent px-4 pb-2 text-[24px] sm:text-[32px] font-bold text-white placeholder:text-gray-600 focus:outline-none font-sans caret-indigo-400"
            />
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-2 mx-auto sm:mx-0 mb-2 p-1 bg-[#111827] rounded-xl border border-white/[0.06] max-w-max">
        <button
          onClick={() => setActiveTab('emoji')}
          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
            activeTab === 'emoji' 
              ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" 
              : "text-gray-400 hover:text-white"
          }`}
        >
          ✨ Emojiler
        </button>
        <button
          onClick={() => setActiveTab('kaomoji')}
          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
            activeTab === 'kaomoji' 
              ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" 
              : "text-gray-400 hover:text-white"
          }`}
        >
          ʕ•ᴥ•ʔ Kaomojiler
        </button>
      </div>

      {/* Style Results */}
      <div className="grid gap-4 mt-0">
        {currentStyles.length > 0 ? currentStyles.map((style, index) => (
          <StyleResultItem
            key={style.id}
            index={index}
            label={style.label}
            value={style.preview}
          />
        )) : (
            <div className="text-center py-8 text-gray-500">
                Şu an sonuç bulunamadı. Lütfen kelime girin.
            </div>
        )}
      </div>
    </div>
  );
};
