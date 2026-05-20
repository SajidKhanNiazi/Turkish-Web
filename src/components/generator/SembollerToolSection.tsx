"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Copy, Sparkles, Star, History, Trash2 } from "lucide-react";
import { sembolCategories, allSymbolsFlat } from "@/data/semboller";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const vibes = [
  { id: "dark", label: "Dark Vibe", match: ["kalp", "ayraclar", "sayilar"] },
  { id: "cute", label: "Cute & Soft", match: ["aesthetic", "kaomoji"] },
  { id: "gamer", label: "Gamer Energy", match: ["oyun", "oklar"] },
];

export const SembollerToolSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);
  const [recentSymbols, setRecentSymbols] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("recent_symbols");
    if (saved) {
      try {
        setRecentSymbols(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const saveRecent = (symbol: string) => {
    const updated = [symbol, ...recentSymbols.filter(s => s !== symbol)].slice(0, 20);
    setRecentSymbols(updated);
    if (isClient) {
      localStorage.setItem("recent_symbols", JSON.stringify(updated));
    }
  };

  const handleCopy = (symbol: string) => {
    navigator.clipboard.writeText(symbol);
    setCopiedSymbol(symbol);
    saveRecent(symbol);
    setTimeout(() => setCopiedSymbol(null), 1500);
  };

  const clearRecent = () => {
    setRecentSymbols([]);
    if (isClient) localStorage.removeItem("recent_symbols");
  };

  const filteredSymbols = useMemo(() => {
    if (activeCategory === "recent") return recentSymbols;
    if (activeCategory === "all") return allSymbolsFlat;

    const vibeObj = vibes.find(v => v.id === activeCategory);
    if (vibeObj) {
      return sembolCategories
        .filter(c => vibeObj.match.includes(c.id))
        .flatMap(c => c.symbols);
    }

    const category = sembolCategories.find(c => c.id === activeCategory);
    return category ? category.symbols : [];
  }, [activeCategory, recentSymbols]);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
      {/* Category Nav */}
      <div className="flex flex-wrap justify-center gap-2 bg-[#1A2235] p-4 rounded-2xl border border-indigo-500/20 shadow-lg shadow-indigo-500/5">
        <CategoryBtn
          active={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
          icon={<Star className="w-4 h-4" />}
          label="Tümü"
        />
        <CategoryBtn
          active={activeCategory === "recent"}
          onClick={() => setActiveCategory("recent")}
          icon={<History className="w-4 h-4" />}
          label="Geçmiş"
        />
        
        <div className="w-[1px] h-8 bg-gray-700/50 mx-2 hidden sm:block"></div>
        
        {vibes.map(vibe => (
          <CategoryBtn
            key={vibe.id}
            active={activeCategory === vibe.id}
            onClick={() => setActiveCategory(vibe.id)}
            icon={<Sparkles className={clsx("w-4 h-4", activeCategory === vibe.id ? "text-white" : "text-purple-400")} />}
            label={vibe.label}
          />
        ))}

        <div className="w-[1px] h-8 bg-gray-700/50 mx-2 hidden sm:block"></div>
        
        {sembolCategories.map(cat => (
          <CategoryBtn
            key={cat.id}
            active={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            label={cat.name}
          />
        ))}
      </div>

      {/* Symbols Grid */}
      <div className="bg-[#1A2235] p-6 rounded-3xl border border-white/5 relative min-h-[400px]">
        {activeCategory === "recent" && recentSymbols.length > 0 && (
          <button 
            onClick={clearRecent}
            className="absolute top-4 right-6 text-sm text-red-400 hover:text-red-300 flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" /> Temizle
          </button>
        )}
        
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            {activeCategory === "recent" ? "Son Kopyalananlar" : 
             activeCategory === "all" ? "Tüm Semboller" :
             vibes.find(v => v.id === activeCategory) ? vibes.find(v => v.id === activeCategory)?.label + " Sembolleri" :
             sembolCategories.find(c => c.id === activeCategory)?.name + " Sembolleri"}
            
            <span className="text-sm font-normal text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
              {filteredSymbols.length}
            </span>
          </h3>
        </div>

        {filteredSymbols.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-gray-500">
            {activeCategory === "recent" ? (
              <>
                <History className="w-12 h-12 mb-3 opacity-20" />
                <p>Henüz sembol kopyalamadınız.</p>
              </>
            ) : (
              <>
                <Star className="w-12 h-12 mb-3 opacity-20" />
                <p>Bu kategoride sembol bulunamadı.</p>
              </>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
            <AnimatePresence>
              {filteredSymbols.map((symbol, idx) => (
                <motion.button
                  key={`${symbol}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCopy(symbol)}
                  className="relative group aspect-square flex items-center justify-center text-2xl md:text-3xl text-gray-200 bg-[#0F1423] hover:bg-indigo-500/20 hover:text-indigo-300 rounded-xl border border-white/5 hover:border-indigo-500/50 transition-colors shadow-sm"
                >
                  {symbol}
                  {copiedSymbol === symbol && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-8 bg-indigo-500 text-white text-xs font-bold py-1 px-2 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-50"
                    >
                      Kopyalandı!
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

const CategoryBtn = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon?: React.ReactNode, label: string }) => (
  <button
    onClick={onClick}
    className={clsx(
      "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
      active 
        ? "bg-white text-black shadow-md" 
        : "bg-[#1A2235] text-gray-400 hover:text-white hover:bg-gray-800 border border-white/5"
    )}
  >
    {icon}
    {label}
  </button>
);
