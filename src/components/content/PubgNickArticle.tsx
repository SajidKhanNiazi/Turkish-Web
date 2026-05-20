"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { clsx } from "clsx";
import { pubgNickFaqs } from "@/data/pubgNickFaqs";
import {
  Flame, Gamepad2, HelpCircle, Sparkles, Star, Swords, Shield,
  ChevronDown, Copy, Check, BookOpen, Crosshair, Users, Trophy,
  AlertTriangle, CheckCircle, Info, Zap, Search, Award
} from "lucide-react";

/* ── Types ── */
type NickBadge = "popular" | "pro" | "rare";

interface NickItemData {
  text: string;
  badge?: NickBadge;
}

interface NickCategory {
  icon: React.ReactNode;
  title: string;
  items: string[];
  accentColor: string;
}

/* ── Data ── */
const quickNicks: NickItemData[] = [
  { text: "★LEGEND★", badge: "popular" },
  { text: "『SNIPER』", badge: "pro" },
  { text: "☬ARES☬", badge: "rare" },
  { text: "★SHADOW★" },
  { text: "『DRAGON』" },
  { text: "☠KILLER☠" },
  { text: "✧PHOENIX✧" },
  { text: "『REX』" },
  { text: "★NOVA★" },
  { text: "☬WARRIOR☬" },
  { text: "『VIPER』" },
  { text: "★FALCON★" },
  { text: "☬TITAN☬" },
  { text: "『BLAZE』" },
  { text: "★STORM★" },
];

const nickCategories: NickCategory[] = [
  {
    icon: <Shield className="w-4 h-4" />,
    title: "Mitolojik & Fantastik İsimler",
    items: ["『ZEUS』", "★HADES★", "☬ODIN☬", "『ARES』"],
    accentColor: "purple",
  },
  {
    icon: <Crosshair className="w-4 h-4" />,
    title: "Askeri & Sert İsimler",
    items: ["★COMMANDO★", "『SNIPER』", "☠DESTROYER☠", "『WARLORD』"],
    accentColor: "red",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Havalı & Karizmatik İsimler",
    items: ["★LEGEND★", "『SHADOW』", "✧PHOENIX✧", "『DRAGON』"],
    accentColor: "amber",
  },
  {
    icon: <Swords className="w-4 h-4" />,
    title: "PUBG Şekilli Nick — Erkek",
    items: ["★KING★", "『ALPHA』", "☬BOSS☬", "『TITAN』"],
    accentColor: "blue",
  },
  {
    icon: <Star className="w-4 h-4" />,
    title: "PUBG Şekilli Nick — Kız",
    items: ["✧QUEEN✧", "『ANGEL』", "★LUNA★", "☬DIVA☬"],
    accentColor: "pink",
  },
  {
    icon: <Flame className="w-4 h-4" />,
    title: "PUBG Türkçe Şekilli Nick",
    items: ["★KRAL★", "『SAVAŞÇI』", "☬GÖLGE☬", "『YILDIZ』"],
    accentColor: "emerald",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "PUBG Clan İsimleri",
    items: ["★TEAM★", "『ELITE』", "☬SQUAD☬", "『LEGACY』"],
    accentColor: "cyan",
  },
  {
    icon: <Gamepad2 className="w-4 h-4" />,
    title: "Emoji Şekilli Nickler",
    items: ["🔥FireKing🔥", "👑RoyalPlayer👑", "⚡SpeedX⚡", "💀DarkSoul💀"],
    accentColor: "orange",
  },
];

const symbols = ["★", "☆", "✧", "✦", "☬", "☠", "☢", "『", "』", "【", "】", "么", "乡", "刁"];

const ruleCards = [
  { icon: "⭐", title: "Basit Semboller Kullanın", desc: "★, 『, ☬ gibi sade semboller en güvenilir seçimdir." },
  { icon: "⛔", title: "Karmaşık Fontlardan Kaçının", desc: "Süslü yazı tipleri desteklenmeyebilir veya bozulabilir." },
  { icon: "📏", title: "İsmi Kısa Tutun", desc: "Çok uzun isimler sistem tarafından reddedilebilir." },
  { icon: "🧪", title: "Kaydetmeden Test Edin", desc: "Değişikliği kaydetmeden önce önizlemeyi kontrol edin." },
];

/* ── Badge Component ── */
const BadgeLabel = ({ type }: { type: NickBadge }) => {
  const config = {
    popular: { label: "🔥 Popüler", className: "bg-red-500/15 text-red-400 border-red-500/30" },
    pro: { label: "⭐ Pro", className: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
    rare: { label: "💀 Nadir", className: "bg-purple-500/15 text-purple-400 border-purple-500/30" },
  };
  const c = config[type];
  return (
    <span className={clsx("text-[10px] font-black tracking-wider px-2 py-0.5 rounded border", c.className)}>
      {c.label}
    </span>
  );
};

/* ── FAQ Accordion ── */
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="border-b border-white/[0.05] last:border-0 overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-amber-400 group focus:outline-none"
    >
      <span className={clsx("text-base font-bold transition-colors", isOpen ? "text-amber-400" : "text-gray-200")}>
        {question}
      </span>
      <div
        className={clsx(
          "flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.05] transition-transform duration-300",
          isOpen && "rotate-180 bg-amber-500/10 border-amber-500/20 text-amber-400"
        )}
      >
        <ChevronDown className="w-4 h-4" />
      </div>
    </button>
    <div className={clsx("transition-all duration-300 ease-in-out", isOpen ? "max-h-[300px] opacity-100 pb-6" : "max-h-0 opacity-0")}>
      <p className="text-gray-400 text-sm leading-relaxed pl-4 border-l-2 border-amber-500/20">{answer}</p>
    </div>
  </div>
);

/* ── Toast Notification ── */
const Toast = ({ message, visible }: { message: string; visible: boolean }) => (
  <div
    className={clsx(
      "fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-emerald-500 text-black font-bold text-sm px-6 py-3 rounded-lg shadow-2xl transition-all duration-300 pointer-events-none",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    )}
  >
    {message}
  </div>
);

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════ */
export const PubgNickArticle = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [toast, setToast] = useState({ message: "", visible: false });
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set());

  const showToast = useCallback((msg: string) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => setToast((s) => ({ ...s, visible: false })), 1800);
  }, []);

  const copyText = useCallback(
    (text: string) => {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`✓ ${text} kopyalandı!`);
        setCopiedItems((s) => new Set(s).add(text));
        setTimeout(() => setCopiedItems((s) => { const n = new Set(s); n.delete(text); return n; }), 2000);
      });
    },
    [showToast]
  );

  const accentMap: Record<string, string> = {
    purple: "border-purple-500/20 hover:border-purple-500/40",
    red: "border-red-500/20 hover:border-red-500/40",
    amber: "border-amber-500/20 hover:border-amber-500/40",
    blue: "border-blue-500/20 hover:border-blue-500/40",
    pink: "border-pink-500/20 hover:border-pink-500/40",
    emerald: "border-emerald-500/20 hover:border-emerald-500/40",
    cyan: "border-cyan-500/20 hover:border-cyan-500/40",
    orange: "border-orange-500/20 hover:border-orange-500/40",
  };

  const headerAccentMap: Record<string, string> = {
    purple: "text-purple-400",
    red: "text-red-400",
    amber: "text-amber-400",
    blue: "text-blue-400",
    pink: "text-pink-400",
    emerald: "text-emerald-400",
    cyan: "text-cyan-400",
    orange: "text-orange-400",
  };

  return (
    <section className="bg-[#0B0F1A] py-16 sm:py-24 border-t border-white/[0.03]">
      <Container>
        <article className="mx-auto max-w-4xl text-left flex flex-col gap-10">

          {/* ── HERO ── */}
          <div className="px-4 mb-2">
            <div className="inline-flex items-center gap-2 bg-amber-500/8 border border-amber-500/20 px-4 py-1.5 rounded text-[11px] font-black tracking-[0.15em] text-amber-400 uppercase mb-5">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              PUBG Şekilli Nick — 2026
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl border-l-4 border-amber-500 pl-6">
              PUBG Şekilli Nick (2026) – 100+{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Havalı</span>
              , Çalışan ve Kopyalanabilir İsimler
            </h1>
            <div className="flex flex-wrap gap-5 mt-6 text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">📅 Son güncelleme: 2026</span>
              <span className="flex items-center gap-1.5">🎮 100+ Nick</span>
              <span className="flex items-center gap-1.5">⚡ Hemen Kopyala</span>
            </div>
          </div>

          {/* ── QUICK COPY ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05] border-t-[3px] border-t-amber-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-radial from-amber-500/10 to-transparent pointer-events-none rounded-full blur-2xl" />
            <div className="flex items-center gap-3 text-xl font-black text-white mb-2 relative">
              <Flame className="w-5 h-5 text-amber-400" />
              🔥 Hemen Kopyala ve Kullan (Tek Tıkla)
            </div>
            <p className="text-xs text-gray-500 mb-5 relative">Herhangi bir nicke tıklayarak kopyalayın. Hızlı ve kolay.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 relative">
              {quickNicks.map((nick) => (
                <button
                  key={nick.text}
                  onClick={() => copyText(nick.text)}
                  className="group bg-[#0f1219] border border-white/[0.06] rounded-lg px-3.5 py-2.5 flex items-center justify-between gap-2 text-sm text-gray-200 font-mono hover:border-amber-500/50 hover:bg-amber-500/[0.04] transition-all text-left"
                >
                  <span className="truncate flex-1">{nick.text}</span>
                  <span className="flex items-center gap-1.5 shrink-0">
                    {nick.badge && <BadgeLabel type={nick.badge} />}
                    {copiedItems.has(nick.text) ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-gray-600 group-hover:text-amber-400 transition-colors" />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-[11px] text-gray-600 italic mt-4 relative">
              👉 Bu nickler genelde çalışır, ancak bazı semboller tüm cihazlarda desteklenmeyebilir.
            </p>
          </div>

          {/* ── INTRO ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-6 border-b border-white/[0.06] pb-4">
              <Gamepad2 className="w-6 h-6 text-amber-400" />
              PUBG Şekilli Nick Yazma
            </h2>
            <div className="space-y-4">
              <p className="text-gray-400 text-[15px] leading-relaxed">
                PUBG&apos;de kullandığınız isim sizin oyun içindeki kimliğinizdir. Düz bir isim sıradan görünür ve dikkat çekmez. Günümüzde çoğu oyuncu şekilli ve sembollü nickler kullanarak öne çıkıyor.
              </p>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                Siz de saniyeler içinde güçlü bir isim oluşturabilirsiniz. <strong className="text-white">Basit semboller kullanın, kısa tutun ve kaydetmeden önce test edin.</strong>
              </p>
              <div className="mt-4">
                <Link
                  href="/sekilli-nick-yazma"
                  className="inline-flex items-center gap-2 bg-amber-500 text-black font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-amber-400 transition-colors"
                >
                  ➡️ Şekilli Nick Yazma Aracı
                </Link>
              </div>
            </div>
          </div>

          {/* ── PROBLEM / SOLUTION ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05] space-y-5">
            {/* Warning callout */}
            <div className="flex gap-3 items-start bg-red-500/[0.06] border-l-[3px] border-red-500 rounded-r-lg p-4">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-red-200 text-sm leading-relaxed">
                <strong className="text-red-300">Problem: Nickiniz sıradan mı?</strong> Çoğu oyuncu rastgele bir isim seçer ve sonra pişman olur. Bu isimler düz görünür ve lobi içinde dikkat çekmez. Şekilli nick kullanan oyuncular her zaman daha fazla fark edilir.
              </p>
            </div>

            <p className="text-gray-400 text-[15px] leading-relaxed">
              Ben de aynı sorunu yaşadım. Eski ismim çok sıradandı ve kimse dikkat etmiyordu. Farklı stiller denedikten sonra basit ama şık sembollerin en iyi sonucu verdiğini gördüm.
            </p>

            {/* Success callout */}
            <div className="flex gap-3 items-start bg-emerald-500/[0.06] border-l-[3px] border-emerald-500 rounded-r-lg p-4">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-emerald-200 text-sm leading-relaxed">
                <strong className="text-emerald-300">Çözüm: Hemen çalışan şekilli nick kullan.</strong> Hazır nicklerden başlayın. Birini kopyalayın ve deneyin. Çalışmazsa sadece 1–2 sembol değiştirin.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-[3px] border-amber-500 bg-amber-500/[0.04] px-5 py-4 rounded-r-lg text-gray-400 text-sm italic">
              &ldquo;Şık ama sade bir nick kullandığımda hem anında çalıştı hem de çok daha profesyonel göründü.&rdquo;
            </blockquote>
          </div>

          {/* ── GUIDE ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-6 border-b border-white/[0.06] pb-4">
              <BookOpen className="w-6 h-6 text-amber-400" />
              PUBG İsimleri: Yaratıcı ve Etkili Oyuncu Adları Oluşturma Rehberi
            </h2>

            <h3 className="text-lg font-bold text-amber-400 mb-3 mt-2">Kısa ve Akılda Kalıcı Adlar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                { icon: "✂️", title: "Kısa Tutun", desc: "Uzun isimler lobi ekranında kesilir, sade olanlar öne çıkar." },
                { icon: "👁️", title: "Kolay Okunur Olsun", desc: "Diğer oyuncular isminizi hızlıca okuyabilmeli." },
                { icon: "💎", title: "Oyunda Temiz Görünsün", desc: "Fazla sembol kalabalık yaratır, 1–2 sembol yeterlidir." },
              ].map((c) => (
                <div key={c.title} className="bg-[#0f1219] border border-white/[0.05] rounded-xl p-5 hover:border-white/[0.1] transition-colors">
                  <div className="text-2xl mb-3">{c.icon}</div>
                  <div className="text-sm font-bold text-white mb-1">{c.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-amber-400 mb-3">Oyun Temalı Adlar</h3>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
              Sniper, Shadow gibi kelimeler kullanın. Bu tür isimler oyun atmosferiyle örtüşür ve <strong className="text-white">çok daha güçlü bir etki</strong> oluşturur.
            </p>

            <h3 className="text-lg font-bold text-amber-400 mb-3">Eşsiz ve Özgün Adlar</h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Kopya isimlerden kaçının. Küçük semboller ekleyerek veya harf kombinasyonlarını değiştirerek kendinize özgü bir kimlik yaratabilirsiniz.
            </p>
          </div>

          {/* ── BEST NICKS CATEGORIES ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-8 border-b border-white/[0.06] pb-4">
              <Award className="w-6 h-6 text-amber-400" />
              İlham Veren En İyi PUBG İsimleri ve Anlamları (2026)
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {nickCategories.map((cat) => (
                <div
                  key={cat.title}
                  className={clsx(
                    "bg-[#0f1219] border rounded-xl overflow-hidden transition-colors",
                    accentMap[cat.accentColor]
                  )}
                >
                  <div className={clsx(
                    "flex items-center gap-2 px-4 py-3 border-b border-white/[0.04] text-xs font-black tracking-wider uppercase",
                    headerAccentMap[cat.accentColor]
                  )}>
                    {cat.icon}
                    {cat.title}
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-white/[0.03]">
                    {cat.items.map((nick) => (
                      <button
                        key={nick}
                        onClick={() => copyText(nick)}
                        className="bg-[#0f1219] px-3.5 py-3 text-sm font-mono text-gray-300 hover:bg-amber-500/[0.06] hover:text-white transition-all flex items-center justify-between group"
                      >
                        <span>{nick}</span>
                        {copiedItems.has(nick) ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-amber-400 transition-all" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SYMBOLS ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-4 border-b border-white/[0.06] pb-4">
              <Sparkles className="w-6 h-6 text-amber-400" />
              PUBG Şekilli Semboller
            </h2>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-5">
              Aşağıdaki sembolleri tıklayarak kopyalayabilir ve kendi nickinizi oluşturabilirsiniz.{" "}
              <strong className="text-white">En iyi sonuç için 1–2 sembol kullanın.</strong>
            </p>
            <div className="flex flex-wrap gap-2.5">
              {symbols.map((sym) => (
                <button
                  key={sym}
                  onClick={() => copyText(sym)}
                  className={clsx(
                    "bg-[#0f1219] border rounded-lg px-4 py-2.5 text-xl font-mono transition-all hover:scale-105",
                    copiedItems.has(sym)
                      ? "border-amber-500 bg-amber-500/10 text-amber-300"
                      : "border-white/[0.06] text-gray-300 hover:border-amber-500/50 hover:bg-amber-500/[0.04]"
                  )}
                >
                  {sym}
                </button>
              ))}
            </div>
          </div>

          {/* ── WORKING RULES ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-6 border-b border-white/[0.06] pb-4">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              PUBG&apos;de Çalışan Şekilli Nickler
            </h2>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-5">
              Her şekilli nick PUBG&apos;de çalışmaz. Bu kurallara dikkat edin:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {ruleCards.map((r) => (
                <div key={r.title} className="bg-[#0f1219] border border-white/[0.05] rounded-xl p-4 hover:border-white/[0.1] transition-colors">
                  <div className="text-2xl mb-2">{r.icon}</div>
                  <div className="text-sm font-bold text-white mb-1">{r.title}</div>
                  <div className="text-[11px] text-gray-500 leading-relaxed">{r.desc}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 items-start bg-blue-500/[0.06] border-l-[3px] border-blue-500 rounded-r-lg p-4 mb-4">
              <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-blue-200 text-sm leading-relaxed">
                Bazı semboller Android&apos;de çalışırken iOS veya eski cihazlarda çalışmayabilir.
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              PUBG&apos;nin resmi kurallarını incelemek için:{" "}
              <a
                href="https://www.pubg.com/en/support"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-amber-400 border border-white/[0.06] px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors hover:border-amber-500/40"
              >
                ➡️ PUBG Support
              </a>
            </p>
          </div>

          {/* ── WHY NOT WORKING ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05] space-y-5">
            <div className="flex gap-3 items-start bg-red-500/[0.06] border-l-[3px] border-red-500 rounded-r-lg p-4">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-red-200 text-sm leading-relaxed">
                <strong className="text-red-300">Nick neden kabul edilmiyor?</strong> Desteklenmeyen semboller, ismin zaten alınmış olması, çok uzun isim veya geçersiz karakterler en yaygın nedenlerdir.
              </p>
            </div>
            <p className="text-gray-300 text-[15px] font-semibold">Çözüm adımları:</p>
            <div className="space-y-4">
              {[
                { num: "1", title: "1–2 karakter değiştirin", desc: "Küçük bir değişiklik genellikle sorunu çözer." },
                { num: "2", title: "Fazla sembolleri kaldırın", desc: "3'ten fazla özel karakter kullanmaktan kaçının." },
                { num: "3", title: "Daha kısa versiyon deneyin", desc: "Karakteri kısaltın ve yeniden deneyin." },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black text-sm font-black">
                    {step.num}
                  </div>
                  <div>
                    <strong className="text-white text-sm block mb-0.5">{step.title}</strong>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <blockquote className="border-l-[3px] border-amber-500 bg-amber-500/[0.04] px-5 py-4 rounded-r-lg text-gray-400 text-sm italic">
              &ldquo;Birçok şekilli nick denedim. En sade olanların her zaman daha hızlı çalıştığını fark ettim.&rdquo;
            </blockquote>
          </div>

          {/* ── MANUAL GENERATOR ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-5 border-b border-white/[0.06] pb-4">
              <Search className="w-6 h-6 text-amber-400" />
              Basit Nick Oluşturma (Manuel Generator)
            </h2>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-5">
              Temel bir isim alın ve farklı sembollerle kombinleyin. Küçük değişiklikler = benzersiz nick.
            </p>
            <div className="bg-[#0f1219] border border-white/[0.05] rounded-xl p-6">
              <p className="text-xs text-gray-500 mb-4">
                Örnek: Temel isim <strong className="text-white">KING</strong> için denemeler:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["★KING★", "『KING』", "☬KING☬"].map((nick) => (
                  <button
                    key={nick}
                    onClick={() => copyText(nick)}
                    className="bg-[#0B0F1A] border border-white/[0.06] rounded-lg px-4 py-2.5 font-mono text-sm text-gray-300 hover:border-amber-500/50 hover:bg-amber-500/[0.04] transition-all flex-1 min-w-[96px] sm:min-w-[120px] text-center"
                  >
                    {nick}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-gray-600 mt-3">
                👉 Tıklayarak kopyalayın, ardından PUBG&apos;de deneyin.
              </p>
            </div>
          </div>

          {/* ── CONCLUSION ── */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-900/20 via-orange-950/10 to-transparent p-8 sm:p-10 border border-amber-500/20 text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-black text-white mb-5">
              <Trophy className="w-6 h-6 text-amber-400" />
              Sonuç
            </h2>
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-2xl mx-auto mb-4">
              İyi bir PUBG şekilli nick, fazla sembol kullanmak değil <strong className="text-white">doğru dengeyi kurmaktır</strong>. Sade, okunabilir ve uyumlu isimler her zaman daha iyi sonuç verir.
            </p>
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-2xl mx-auto mb-6">
              Kendi deneyimlerime göre, farklı stilleri test etmek en doğru sonucu verir. Temiz ve minimal nickler hem hatasız çalışır hem de oyun içinde daha profesyonel görünür.
            </p>
            <Link
              href="/sekilli-nick-yazma"
              className="inline-flex items-center gap-2 bg-amber-500 text-black font-bold text-sm px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
            >
              ➡️ Şekilli Nick Aracına Git
            </Link>
          </div>

          {/* ── FAQ ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-6 border-b border-white/[0.06] pb-4">
              <HelpCircle className="w-6 h-6 text-amber-400" />
              Sıkça Sorulan Sorular
            </h2>
            <div className="divide-y divide-white/[0.05]">
              {pubgNickFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>

          {/* ── Internal Links ── */}
          <div className="flex flex-wrap gap-3 px-1">
            <Link
              href="/sekilli-nick-yazma"
              className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-sm font-medium text-gray-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
            >
              Şekilli Nick Yazma
            </Link>
            <Link
              href="/sekilli-nick-yazma/havali-nick-yazma"
              className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-sm font-medium text-gray-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
            >
              Havalı Nick Yazma
            </Link>
            <Link
              href="/"
              className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-sm font-medium text-gray-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
            >
              Yazı Stilleri
            </Link>
          </div>

        </article>
      </Container>

      {/* Toast */}
      <Toast message={toast.message} visible={toast.visible} />
    </section>
  );
};
