"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { FloatingParticles } from "@/components/home/FloatingParticles";
import { StyleResultItem } from "@/components/generator/StyleResultItem";
import {
  generateNickToolStyles,
  nickMatchesFontFilter,
  nickMatchesTab,
  type NickFontFilter,
  type NickStyleItem,
  type NickTab,
  type NickTier,
} from "@/lib/nickStyles";

const LS_KEY = "nick-tool-input-v1";
const DEFAULT_PREVIEW_TEXT = "Oyuncu";
const EXAMPLE_NICK = "KralPro";

type UiTab = "all" | NickTab;

const FONT_OPTIONS: { id: NickFontFilter; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "popular", label: "Popüler" },
  { id: "bold", label: "Kalın" },
  { id: "italic", label: "Eğik" },
  { id: "fancy", label: "Fancy" },
];

const TAB_OPTIONS: { id: UiTab; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "havali", label: "Havalı" },
  { id: "sekilli", label: "Şekilli" },
  { id: "oyun", label: "Oyun Nickleri" },
  { id: "instagram", label: "Instagram" },
];

const TIER_SECTIONS: { tier: NickTier; title: string }[] = [
  { tier: "popular", title: "En Popüler Nick Stilleri" },
  { tier: "trending", title: "Trend ve Oyun Nick Stilleri" },
  { tier: "other", title: "Unicode Nick Varyasyonları" },
];

function seededShuffle<T>(items: T[], seed: number): T[] {
  if (seed === 0) return items;
  const a = [...items];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.abs((seed * 9301 + i * 49297) % (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function bucketByTier(items: NickStyleItem[]): Record<NickTier, NickStyleItem[]> {
  const buckets: Record<NickTier, NickStyleItem[]> = {
    popular: [],
    trending: [],
    other: [],
  };
  for (const item of items) {
    buckets[item.tier].push(item);
  }
  return buckets;
}

export const NickGeneratorTool = () => {
  const [value, setValue] = useState("");
  const [mounted, setMounted] = useState(false);
  const [fontFilter, setFontFilter] = useState<NickFontFilter>("all");
  const [tab, setTab] = useState<UiTab>("all");
  const [symbolsOn, setSymbolsOn] = useState(true);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [toast, setToast] = useState(false);
  const resultsAnchorRef = useRef<HTMLDivElement>(null);
  const scrollToResultsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const effectiveInput = value.trim() || DEFAULT_PREVIEW_TEXT;
  const isShowingDefaultPreview = !value.trim();

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved !== null) setValue(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(LS_KEY, value);
    } catch {
      /* ignore */
    }
  }, [value, mounted]);

  const baseList = useMemo(
    () => generateNickToolStyles(effectiveInput, { symbolsEnabled: symbolsOn }),
    [effectiveInput, symbolsOn]
  );

  const filtered = useMemo(() => {
    return baseList
      .filter((item) => nickMatchesFontFilter(item, fontFilter))
      .filter((item) => nickMatchesTab(item, tab));
  }, [baseList, fontFilter, tab]);

  const tierBuckets = useMemo(() => {
    const raw = bucketByTier(filtered);
    if (shuffleSeed === 0) return raw;
    return {
      popular: seededShuffle(raw.popular, shuffleSeed),
      trending: seededShuffle(raw.trending, shuffleSeed + 11),
      other: seededShuffle(raw.other, shuffleSeed + 23),
    };
  }, [filtered, shuffleSeed]);

  const showToast = useCallback(() => {
    setToast(true);
    window.setTimeout(() => setToast(false), 1600);
  }, []);

  const onCopied = useCallback(() => {
    showToast();
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(12);
    }
  }, [showToast]);

  useEffect(() => {
    if (!value.trim()) return;
    if (scrollToResultsTimer.current) clearTimeout(scrollToResultsTimer.current);
    scrollToResultsTimer.current = setTimeout(() => {
      resultsAnchorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 280);
    return () => {
      if (scrollToResultsTimer.current) clearTimeout(scrollToResultsTimer.current);
    };
  }, [value]);

  const handleTryExample = () => setValue(EXAMPLE_NICK);
  const handleClear = () => {
    setValue("");
    setShuffleSeed(0);
  };
  const handleRandom = () => setShuffleSeed((s) => s + 1);

  let globalIndex = 0;

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B0F1A] pt-12 pb-8 sm:pt-20 border-b border-white/[0.03]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-[#0B0F1A] to-[#0B0F1A]" />
        <FloatingParticles />

        <Container className="relative z-10 flex flex-col items-center text-center">
          <h1 className="max-w-4xl px-4 text-lg font-bold leading-tight tracking-tight text-white/90 sm:text-xl">
            <span className="text-white/90">Şekilli </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
              Nick Yazma
            </span>
            <span className="mt-2 block text-sm font-semibold text-gray-500 sm:text-base">
              (2026) – Anında şık nick oluşturma
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-md text-gray-500 font-medium">
            PUBG, Discord, Instagram için havalı nickler.
          </p>

          <div className="mt-10 w-full max-w-3xl text-left px-4 sm:px-0">
            <div className="relative group rounded-3xl bg-[#111827]/80 p-1 border border-white/[0.06] shadow-2xl shadow-black/80 backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/20 focus-within:border-indigo-500/40 focus-within:ring-1 focus-within:ring-indigo-500/20">
              <div className="flex flex-col rounded-[22px] bg-[#0B0F1A] p-1.5 w-full">
                <div className="flex items-center justify-between gap-2 px-4 pt-3 pb-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">Giriş Yapın</span>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={handleTryExample}
                      className="rounded-lg bg-indigo-500/10 px-3 py-1.5 text-[11px] font-bold text-indigo-300 transition-all hover:bg-indigo-500/20 active:scale-95"
                    >
                      Örnek
                    </button>
                    <button
                      type="button"
                      onClick={handleRandom}
                      className="rounded-lg bg-cyan-500/10 px-3 py-1.5 text-[11px] font-bold text-cyan-300 transition-all hover:bg-cyan-500/20 active:scale-95"
                    >
                      Karıştır
                    </button>
                    <button
                      type="button"
                      onClick={handleClear}
                      className="rounded-lg bg-white/[0.04] px-3 py-1.5 text-[11px] font-bold text-gray-500 transition-all hover:bg-rose-500/10 hover:text-rose-400 active:scale-95"
                    >
                      Temizle
                    </button>
                  </div>
                </div>
                <textarea
                  id="nick-input"
                  autoFocus
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Yazmaya başlayın..."
                  rows={2}
                  maxLength={40}
                  className="w-full resize-none border-0 bg-transparent p-4 text-[24px] md:text-[32px] font-bold text-white placeholder:text-gray-800 focus:outline-none transition-all duration-300 font-sans caret-indigo-400 scrollbar-none"
                />
              </div>

              {/* User removed Filter section in previous turn */}
            </div>
          </div>
        </Container>
      </section>

      <div
        id="nick-sonuclar"
        ref={resultsAnchorRef}
        className="relative z-10 w-full scroll-mt-24 bg-gradient-to-b from-[#0B0F1A] to-[#0D111C] py-12"
      >
        <Container>
          <div className="mx-auto max-w-4xl px-4 sm:px-0">
            {!mounted ? (
              <div className="grid gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-20 animate-pulse rounded-2xl bg-white/[0.03]" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-10 relative z-10 w-full">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between border-b border-white/[0.03] pb-6">
                  <div>
                    <div className="text-base font-semibold text-white/80 font-display">
                      Sonuçlar
                    </div>
                    <p className="mt-1 text-xs text-gray-600 font-medium">
                      {filtered.length} stil hazırlandı · Kopyalamak için tıklayın
                    </p>
                  </div>
                </div>

                {isShowingDefaultPreview ? (
                  <div className="rounded-xl bg-indigo-500/[0.08] p-4 border border-indigo-400/15">
                    <p className="text-sm font-medium text-indigo-200">
                      <span className="font-bold text-indigo-100">Önizleme:</span> Henüz yazmadınız;
                      aşağıdaki stiller <span className="font-mono text-white">{DEFAULT_PREVIEW_TEXT}</span>{" "}
                      metniyle gösteriliyor. Kendi nickinizi yazınca anında güncellenir.
                    </p>
                  </div>
                ) : null}

                {TIER_SECTIONS.map(({ tier, title }) => {
                  const list = tierBuckets[tier];
                  if (list.length === 0) return null;
                  return (
                    <section key={tier} className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400/80 font-display">
                          {title}
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent" />
                      </div>
                      <div className="grid gap-4 w-full">
                        {list.map((item) => {
                          const idx = globalIndex;
                          globalIndex += 1;
                          return (
                            <StyleResultItem
                              key={item.id}
                              index={idx}
                              label={item.label}
                              value={item.preview}
                              onCopied={onCopied}
                              enableCardCopy
                            />
                          );
                        })}
                      </div>
                    </section>
                  );
                })}

                <div className="rounded-xl bg-indigo-500/[0.08] p-4 border border-indigo-400/15">
                  <p className="text-xs font-medium text-indigo-300">
                    <span className="font-bold text-indigo-200">Not:</span> Bazı oyunlar ve
                    uygulamalar tüm Unicode karakterlerini kabul etmez. Yapıştırdıktan sonra
                    nickinizi mutlaka kontrol edin.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      {toast ? (
        <div className="pointer-events-none fixed bottom-8 left-0 right-0 z-[60] flex justify-center px-4">
          <span className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-950/50">
            Kopyalandı ✓
          </span>
        </div>
      ) : null}
    </>
  );
};
