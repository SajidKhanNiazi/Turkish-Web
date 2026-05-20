"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { FloatingParticles } from "@/components/home/FloatingParticles";
import {
  generatePubgNickStyles,
  isPubgCompatible,
  PUBG_NICK_LIMIT,
  PUBG_SYMBOLS,
  PUBG_READY_NICKS,
  INVISIBLE_CHAR,
  type PubgNickItem,
} from "@/lib/pubgNickStyles";
import { Copy, Check, Zap, Gamepad2, Ghost, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

const LS_KEY = "pubg-nick-input-v2";
const DEFAULT_INPUT = "Oyuncu";

/* ── Individual result card with inline copy ── */
const NickCard = ({
  item,
  index,
  onCopied,
}: {
  item: PubgNickItem;
  index: number;
  onCopied: () => void;
}) => {
  const [copied, setCopied] = useState(false);
  const compatible = isPubgCompatible(item.preview);

  const handleCopy = async () => {
    if (!item.preview) return;
    try {
      await navigator.clipboard.writeText(item.preview);
      setCopied(true);
      onCopied();
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  const accentColors = [
    "from-orange-500/20 to-orange-500/0",
    "from-amber-500/20 to-amber-500/0",
    "from-red-500/20 to-red-500/0",
    "from-purple-500/20 to-purple-500/0",
    "from-cyan-500/20 to-cyan-500/0",
    "from-emerald-500/20 to-emerald-500/0",
  ];

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleCopy}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCopy();
        }
      }}
      className={clsx(
        "group relative flex items-center gap-3 sm:gap-4 rounded-2xl border p-4 sm:p-5 cursor-pointer transition-all duration-300",
        "bg-[#111827]/80 backdrop-blur-sm",
        copied
          ? "border-emerald-400/40 shadow-lg shadow-emerald-500/10"
          : "border-white/[0.06] hover:border-white/[0.15] hover:bg-[#1a2332] hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5 active:scale-[0.99]"
      )}
      style={{
        animation: `fade-in-up 0.35s ease-out ${index * 0.03}s both`,
      }}
    >
      {/* Left accent strip */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${accentColors[index % accentColors.length]}`}
      />

      {/* Nick preview */}
      <div className="min-w-0 flex-1 pl-2">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-500 bg-white/[0.04] px-2 py-0.5 rounded-md">
            {item.label}
          </span>
          <span
            className={clsx(
              "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center gap-1",
              compatible
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/15"
                : "bg-rose-500/10 text-rose-400 border border-rose-500/15"
            )}
          >
            {compatible ? "✓ Uyumlu" : "✗ Uzun"}
          </span>
        </div>
        <p className="text-lg sm:text-xl font-medium text-gray-100 break-all leading-tight group-hover:text-white transition-colors">
          {item.preview}
        </p>
      </div>

      {/* Copy button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleCopy();
        }}
        className={clsx(
          "shrink-0 flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 active:scale-90 min-w-[90px] sm:min-w-[110px]",
          copied
            ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
            : "bg-white/[0.06] border border-white/[0.08] text-gray-400 hover:bg-orange-500/15 hover:text-orange-300 hover:border-orange-500/30"
        )}
      >
        {copied ? (
          <>
            <Check size={14} />
            <span className="hidden sm:inline">Kopyalandı</span>
            <span className="sm:hidden">✓</span>
          </>
        ) : (
          <>
            <Copy size={14} />
            Kopyala
          </>
        )}
      </button>
    </div>
  );
};

/* ── Main generator ── */
export const PubgNickGenerator = () => {
  const [value, setValue] = useState("");
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [symbolsOpen, setSymbolsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const effectiveInput = value.trim() || DEFAULT_INPUT;
  const isDefault = !value.trim();
  const charCount = value.length;

  /* Hydrate */
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved !== null) setValue(saved);
    } catch {
      /* ignore */
    }
  }, []);

  /* Persist */
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(LS_KEY, value);
    } catch {
      /* ignore */
    }
  }, [value, mounted]);

  /* Generate */
  const styles = useMemo(
    () => generatePubgNickStyles(effectiveInput),
    [effectiveInput]
  );

  /* Split into sections */
  const topStyles = useMemo(() => styles.slice(0, 18), [styles]);
  const gamerStyles = useMemo(() => styles.slice(18, 36), [styles]);
  const moreStyles = useMemo(() => styles.slice(36), [styles]);

  /* Toast */
  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 1600);
  }, []);

  const onCopied = useCallback(() => {
    showToast("Kopyalandı ✓");
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(12);
    }
  }, [showToast]);

  /* Scroll to results on type */
  useEffect(() => {
    if (!value.trim()) return;
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 350);
    return () => {
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, [value]);

  /* Handlers */
  const insertSymbol = (sym: string) => {
    setValue((v) => v + sym);
    inputRef.current?.focus();
  };

  const copyInvisible = async () => {
    try {
      await navigator.clipboard.writeText(INVISIBLE_CHAR);
      showToast("Görünmez boşluk kopyalandı ✓");
    } catch {
      /* ignore */
    }
  };

  const handleClear = () => {
    setValue("");
    setShowAll(false);
    inputRef.current?.focus();
  };

  const charColor = clsx({
    "text-gray-500": charCount <= 10,
    "text-amber-400 font-bold": charCount >= 11 && charCount <= 14,
    "text-rose-500 font-black": charCount >= 15,
  });

  let globalIndex = 0;

  return (
    <>
      {/* ━━━ HERO + INPUT ━━━ */}
      <section className="relative overflow-hidden bg-[#0B0F1A] pt-10 pb-10 sm:pt-16 sm:pb-14 border-b border-white/[0.03]">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/10 via-[#0B0F1A] to-[#0B0F1A]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-600/5 via-transparent to-transparent" />
        <FloatingParticles />

        <Container className="relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-orange-300">
            <Gamepad2 className="w-3 h-3" /> PUBG Uyumlu Araç
          </span>

          <div className="max-w-4xl text-3xl font-black tracking-tight sm:text-5xl md:text-6xl leading-[1.1] text-white px-4">
            PUBG{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300">
              Şekilli Nick
            </span>
          </div>
          <p className="mt-4 max-w-lg text-sm sm:text-base text-gray-500 font-medium px-6">
            Nickinizi yazın, anında havalı PUBG nicklerini görün. Tek tıkla
            kopyalayın.
          </p>

          {/* ── Input Card ── */}
          <div className="mt-8 sm:mt-12 w-full max-w-2xl px-4 sm:px-0">
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 blur-lg transition-opacity duration-500 group-focus-within:opacity-20" />

              <div className="relative rounded-2xl bg-[#0F172A] border border-white/[0.08] p-2 shadow-2xl shadow-black/50">
                <div className="flex flex-col rounded-xl bg-[#0B0F1A] transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-500/30">
                  {/* Input header */}
                  <div className="flex items-center justify-between px-4 pt-3 pb-0">
                    <label
                      htmlFor="pubg-nick-input"
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600"
                    >
                      Nickinizi Yazın
                    </label>
                    <div className="flex items-center gap-3">
                      <span
                        className={clsx(
                          "text-[10px] font-bold tracking-wider",
                          charColor
                        )}
                      >
                        {charCount}/{PUBG_NICK_LIMIT}
                      </span>
                      <button
                        type="button"
                        onClick={handleClear}
                        className="rounded-lg bg-white/[0.04] px-3 py-1 text-[10px] font-bold text-gray-500 transition-all hover:bg-rose-500/10 hover:text-rose-400 active:scale-95"
                      >
                        Temizle
                      </button>
                    </div>
                  </div>

                  {/* The input */}
                  <input
                    ref={inputRef}
                    id="pubg-nick-input"
                    type="text"
                    autoFocus
                    autoComplete="off"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Nickinizi yazın..."
                    maxLength={30}
                    className="w-full bg-transparent px-4 py-4 text-xl sm:text-2xl md:text-3xl font-bold text-white placeholder:text-gray-700 focus:outline-none caret-orange-400"
                  />
                </div>
              </div>
            </div>

            {/* PUBG limit warning */}
            {charCount > PUBG_NICK_LIMIT && (
              <div className="mt-2 flex items-center gap-2 text-rose-400 text-xs font-bold px-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                {PUBG_NICK_LIMIT} karakterden uzun nickler PUBG&apos;de kullanılamaz.
              </div>
            )}
          </div>

          {/* ── Symbols Toggle ── */}
          <div className="mt-6 w-full max-w-2xl px-4 sm:px-0">
            <button
              type="button"
              onClick={() => setSymbolsOpen((o) => !o)}
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-gray-500 hover:text-orange-300 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Semboller — Tıkla ve Ekle
              <ChevronDown
                className={clsx(
                  "w-3.5 h-3.5 transition-transform duration-300",
                  symbolsOpen && "rotate-180"
                )}
              />
            </button>

            {/* Collapsible symbols grid */}
            <div
              className={clsx(
                "overflow-hidden transition-all duration-400",
                symbolsOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
              )}
            >
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {PUBG_SYMBOLS.map((sym, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => insertSymbol(sym)}
                    className="rounded-lg bg-[#1F2937] border border-white/[0.06] w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-base sm:text-lg text-gray-300 font-medium transition-all hover:bg-orange-500/15 hover:border-orange-500/30 hover:text-orange-300 hover:scale-110 active:scale-90"
                  >
                    {sym}
                  </button>
                ))}
              </div>

              {/* Invisible character button */}
              <button
                type="button"
                onClick={copyInvisible}
                className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-500/10 border border-purple-400/20 px-5 py-3 text-sm font-bold text-purple-300 transition-all hover:bg-purple-500/20 hover:border-purple-400/40 active:scale-95"
              >
                <Ghost className="w-4 h-4" />
                Görünmez Boşluk Kopyala
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ━━━ RESULTS ━━━ */}
      <div
        id="pubg-sonuclar"
        ref={resultsRef}
        className="relative z-10 w-full scroll-mt-24 bg-gradient-to-b from-[#0B0F1A] via-[#0D111C] to-[#0B0F1A] py-10 sm:py-14"
      >
        <Container>
          <div className="mx-auto max-w-3xl px-2 sm:px-0">
            {!mounted ? (
              <div className="grid gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-20 animate-pulse rounded-2xl bg-white/[0.03]"
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-10 relative z-10 w-full">
                {/* Default preview notice */}
                {isDefault && (
                  <div className="rounded-2xl bg-gradient-to-r from-orange-500/[0.08] to-amber-500/[0.04] p-5 border border-orange-400/15">
                    <p className="text-sm font-medium text-orange-200">
                      <span className="font-bold text-orange-100">
                        Önizleme:
                      </span>{" "}
                      Henüz yazmadınız — stiller{" "}
                      <span className="font-mono text-white font-bold">
                        {DEFAULT_INPUT}
                      </span>{" "}
                      ile önizleniyor.
                    </p>
                  </div>
                )}

                {/* Section 1 — Popular Font Styles */}
                <section className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-orange-400/90">
                      <Zap className="w-4 h-4 fill-current" /> Popüler Stiller
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-orange-500/20 to-transparent" />
                    <span className="text-[10px] font-bold text-gray-600">
                      {topStyles.length} stil
                    </span>
                  </div>
                  <div className="grid gap-3 w-full">
                    {topStyles.map((item) => (
                      <NickCard
                        key={item.id}
                        item={item}
                        index={globalIndex++}
                        onCopied={onCopied}
                      />
                    ))}
                  </div>
                </section>

                {/* Section 2 — Gamer Wraps */}
                {gamerStyles.length > 0 && (
                  <section className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-cyan-400/90">
                        <Gamepad2 className="w-4 h-4" /> Gamer Nickleri
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent" />
                      <span className="text-[10px] font-bold text-gray-600">
                        {gamerStyles.length} stil
                      </span>
                    </div>
                    <div className="grid gap-3 w-full">
                      {gamerStyles.map((item) => (
                        <NickCard
                          key={item.id}
                          item={item}
                          index={globalIndex++}
                          onCopied={onCopied}
                        />
                      ))}
                    </div>
                  </section>
                )}

                {/* Section 3 — More styles (collapsible) */}
                {moreStyles.length > 0 && (
                  <section className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-black uppercase tracking-[0.15em] text-gray-500">
                        Daha Fazla
                      </div>
                      <div className="h-px flex-1 bg-white/[0.04]" />
                    </div>

                    {showAll ? (
                      <div className="grid gap-3 w-full">
                        {moreStyles.map((item) => (
                          <NickCard
                            key={item.id}
                            item={item}
                            index={globalIndex++}
                            onCopied={onCopied}
                          />
                        ))}
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setShowAll(true)}
                        className="w-full py-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-sm font-bold text-gray-400 transition-all hover:bg-white/[0.06] hover:text-white active:scale-[0.99]"
                      >
                        +{moreStyles.length} daha fazla stili göster
                      </button>
                    )}
                  </section>
                )}

                {/* Note */}
                <div className="rounded-2xl bg-gradient-to-r from-orange-500/[0.06] to-transparent p-5 border border-orange-400/10">
                  <p className="text-xs font-medium text-orange-300/80">
                    <span className="font-bold text-orange-200">Not:</span>{" "}
                    PUBG Mobile&apos;de nick en fazla {PUBG_NICK_LIMIT} karakter
                    olabilir. Bazı Unicode karakterler oyun içinde farklı
                    görünebilir — kopyaladıktan sonra kontrol edin.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* ━━━ READY-MADE NICKS ━━━ */}
      <section className="bg-[#0B0F1A] py-12 sm:py-16 px-4 md:px-8 border-t border-white/[0.03]">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-purple-400/80">
                <Sparkles className="w-4 h-4" /> Hazır PUBG Nickleri
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
            </div>

            <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {PUBG_READY_NICKS.map((nick, i) => (
                <ReadyNickCard key={i} nick={nick} onCopied={onCopied} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="bg-[#0B0F1A] py-10 px-4 border-t border-white/[0.03]">
        <Container>
          <div className="mx-auto max-w-3xl flex justify-center">
            <Link
              href="/sekilli-nick-yazma"
              className="group inline-flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 pr-6 transition-all hover:bg-white/[0.06] active:scale-95"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="text-left">
                <div className="text-sm font-extrabold text-white">
                  Tüm Nick Stilleri
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  300+ stil · Tüm platformlar
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* ━━━ TOAST ━━━ */}
      {toast && (
        <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-[100] flex justify-center px-4">
          <span className="rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-3 text-sm font-black text-white shadow-2xl shadow-orange-900/50">
            {toast}
          </span>
        </div>
      )}
    </>
  );
};

/* ── Ready-made nick card ── */
const ReadyNickCard = ({
  nick,
  onCopied,
}: {
  nick: string;
  onCopied: () => void;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(nick);
      setCopied(true);
      onCopied();
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={clsx(
        "group relative flex items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all duration-200 cursor-pointer",
        copied
          ? "border-emerald-400/30 bg-emerald-500/[0.08]"
          : "border-white/[0.06] bg-[#1F2937] hover:-translate-y-0.5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-black/20"
      )}
    >
      <span className="text-base text-gray-100 font-medium break-all">
        {nick}
      </span>
      <span
        className={clsx(
          "ml-2 shrink-0 rounded-lg px-2.5 py-1 text-[9px] font-black uppercase tracking-wider transition-all",
          copied
            ? "bg-emerald-500 text-white"
            : "bg-purple-500/10 text-purple-300 opacity-80 group-hover:opacity-100"
        )}
      >
        {copied ? "✓" : "Kopyala"}
      </span>
    </button>
  );
};
