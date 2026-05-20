"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { clsx } from "clsx";
import { freeFireNickFaqs } from "@/data/freeFireNickFaqs";
import {
  Flame, Gamepad2, HelpCircle, Sparkles, Swords, 
  ChevronDown, Copy, Check, BookOpen, AlertTriangle, 
  CheckCircle, Info, Search, Trophy, Globe, Smile
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
  { text: "꧁༒☬Shadow☬༒꧂", badge: "popular" },
  { text: "『F』『I』『R』『E』", badge: "pro" },
  { text: "★彡[DarkBoy]彡★", badge: "rare" },
  { text: "꧁ঔৣ☠︎Sniper☠︎ঔৣ꧂" },
  { text: "么ᴳᵒᵈ么Killer" },
  { text: "✿ᴳᵒᵈ✿Hunter" },
  { text: "꧁༺King༻꧂" },
  { text: "☬Legend☬" },
  { text: "『Dark』X" },
  { text: "꧁ঔৣ☬Boss☬ঔৣ꧂" },
  { text: "BlazeX" },
  { text: "NightKing" },
  { text: "AlphaFire" },
  { text: "NoobMaster" },
  { text: "GhostPlayer" },
];

const nickCategories: NickCategory[] = [
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Şekilli Free Fire Nickleri",
    items: [
      "꧁༒☬Shadow☬༒꧂", "『F』『I』『R』『E』", "★彡[DarkBoy]彡★", "꧁ঔৣ☠︎Sniper☠︎ঔৣ꧂",
      "么ᴳᵒᵈ么Killer", "✿ᴳᵒᵈ✿Hunter", "꧁༺King༻꧂", "☬Legend☬", "『Dark』X", "꧁ঔৣ☬Boss☬ঔৣ꧂"
    ],
    accentColor: "purple",
  },
  {
    icon: <Flame className="w-4 h-4" />,
    title: "Havalı Free Fire Nickler",
    items: [
      "BlazeX", "DarkWolf", "NightKing", "VenomX", "AlphaFire", 
      "ShadowX", "IronFist", "RedStorm", "BlackHunter", "FireBlade"
    ],
    accentColor: "red",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    title: "İngilizce Free Fire Nickleri",
    items: [
      "SilentKiller", "FireStorm", "DeathShot", "IceDragon", "WarMachine",
      "DarkKnight", "ToxicPlayer", "FastShooter", "StormBreaker", "GhostRider"
    ],
    accentColor: "blue",
  },
  {
    icon: <Smile className="w-4 h-4" />,
    title: "Komik Free Fire Nickleri",
    items: [
      "NoobMaster", "LagKing", "RunAwayBro", "PotatoAim", "ChickenShooter",
      "SlowMotion", "MissedShot", "HideAndRun", "CampKing", "LuckyNoob"
    ],
    accentColor: "amber",
  },
  {
    icon: <Gamepad2 className="w-4 h-4" />,
    title: "Genel Oyun Nickleri",
    items: [
      "GhostPlayer", "UltraGamer", "FastHunter", "CrazyShooter", "GameMaster",
      "ProPlayerX", "NightHunter", "FireX", "DarkZone", "SpeedShot"
    ],
    accentColor: "emerald",
  },
];

const symbols = ["꧁", "꧂", "༒", "☬", "『", "』", "★", "彡", "☠", "ঔৣ", "么", "✿", "༺", "༻", "X"];

const ruleCards = [
  { icon: "⭐", title: "Sade Tutun", desc: "Basit ve anlaşılır isimler akılda kalıcıdır." },
  { icon: "⛔", title: "Kopya İsimlerden Kaçının", desc: "Orijinal olun, benzersiz kombinasyonlar deneyin." },
  { icon: "📏", title: "Okunabilir Olsun", desc: "Sembolleri abartmayın, harfler kaybolmasın." },
  { icon: "🧪", title: "Test Edin", desc: "Kaydetmeden önce oyunda uyumluluğu görün." },
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
      className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-rose-500 group focus:outline-none"
    >
      <span className={clsx("text-base font-bold transition-colors", isOpen ? "text-rose-500" : "text-gray-200")}>
        {question}
      </span>
      <div
        className={clsx(
          "flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.05] transition-transform duration-300",
          isOpen && "rotate-180 bg-rose-500/10 border-rose-500/20 text-rose-500"
        )}
      >
        <ChevronDown className="w-4 h-4" />
      </div>
    </button>
    <div className={clsx("transition-all duration-300 ease-in-out", isOpen ? "max-h-[300px] opacity-100 pb-6" : "max-h-0 opacity-0")}>
      <p className="text-gray-400 text-sm leading-relaxed pl-4 border-l-2 border-rose-500/20">{answer}</p>
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
export const FreeFireNickArticle = () => {
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
            <div className="inline-flex items-center gap-2 bg-rose-500/8 border border-rose-500/20 px-4 py-1.5 rounded text-[11px] font-black tracking-[0.15em] text-rose-500 uppercase mb-5">
              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
              Free Fire Nickleri — 2026
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl border-l-4 border-rose-500 pl-6 gap-3">
              Free Fire Nickleri (2026) – Şekilli,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-400">Havalı</span>{" "}
              ve Benzersiz İsimler
            </h1>
            <div className="flex flex-wrap gap-5 mt-6 text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">📅 Son güncelleme: 2026</span>
              <span className="flex items-center gap-1.5">🎮 50+ Nick</span>
              <span className="flex items-center gap-1.5">⚡ Hemen Kopyala</span>
            </div>
          </div>

          {/* ── INTRO ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-6 border-b border-white/[0.06] pb-4">
              <Gamepad2 className="w-6 h-6 text-rose-500" />
              Neden İyi Bir Free Fire Nicki Önemlidir?
            </h2>
            <div className="space-y-4">
              <p className="text-gray-400 text-[15px] leading-relaxed">
                Birçok oyuncu iyi bir <strong className="text-white">Free Fire nickleri</strong> bulmakta zorlanır. Basit isimler denersiniz ama sıkıcı görünür. Şekilli isimler denersiniz ama zaten alınmıştır. Bu da profilinizin zayıf ve unutulabilir görünmesine neden olur.
              </p>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                En iyi isimler <strong className="text-rose-400">kısa, temiz ve şekilli</strong> olanlardır. Bu rehberde, oyunda gerçekten çalışan hazır isimleri bulacaksınız. Favorinizi seçin, tek tıkla kopyalayın ve hemen kullanın!
              </p>
            </div>
          </div>

          {/* ── QUICK COPY ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05] border-t-[3px] border-t-rose-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-radial from-rose-500/10 to-transparent pointer-events-none rounded-full blur-2xl" />
            <div className="flex items-center gap-3 text-xl font-black text-white mb-2 relative">
              <Flame className="w-5 h-5 text-rose-500" />
              🔥 Hemen Kopyala (Tek Tıkla)
            </div>
            <p className="text-xs text-gray-500 mb-5 relative">Aşağıdaki isimlerden birini tıklayarak anında kopyalayabilirsiniz.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 relative">
              {quickNicks.map((nick) => (
                <button
                  key={nick.text}
                  onClick={() => copyText(nick.text)}
                  className="group bg-[#0f1219] border border-white/[0.06] rounded-lg px-3.5 py-2.5 flex items-center justify-between gap-2 text-sm text-gray-200 font-mono hover:border-rose-500/50 hover:bg-rose-500/[0.04] transition-all text-left"
                >
                  <span className="truncate flex-1">{nick.text}</span>
                  <span className="flex items-center gap-1.5 shrink-0">
                    {nick.badge && <BadgeLabel type={nick.badge} />}
                    {copiedItems.has(nick.text) ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-gray-600 group-hover:text-rose-500 transition-colors" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── BEST NICKS CATEGORIES ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-8 border-b border-white/[0.06] pb-4">
              <Swords className="w-6 h-6 text-rose-500" />
              Kategorilere Göre En İyi Free Fire Nickleri
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
                        className="bg-[#0f1219] px-3.5 py-3 text-[13px] font-mono text-gray-300 hover:bg-rose-500/[0.06] hover:text-white transition-all flex items-center justify-between group"
                      >
                        <span className="truncate mr-2">{nick}</span>
                        {copiedItems.has(nick) ? (
                          <Check className="w-3 h-3 shrink-0 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3 shrink-0 text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-rose-500 transition-all" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── GUIDE ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-6 border-b border-white/[0.06] pb-4">
              <BookOpen className="w-6 h-6 text-rose-500" />
              Benzersiz Bir Free Fire Nicki Nasıl Oluşturulur?
            </h2>

            <div className="space-y-6">
              {[
                { num: "1", title: "Temel bir kelime seçin", desc: "Örnek: Fire, Dark, King gibi kolay hatırlanabilir kelimeler seçin." },
                { num: "2", title: "Sembol ekleyin", desc: "Örnek: ꧁, ★, ☬ gibi küçük süslemelerle isminize hava katın." },
                { num: "3", title: "Harfleri karıştırın", desc: "Örnek: FiReX gibi büyük ve küçük harfleri bir arada kullanarak özgünlüğü artırın." },
                { num: "4", title: "Kısa tutun", desc: "Uzun isimler sıkıcıdır. Kısa isimler çok daha akılda kalıcıdır ve modern görünür." },
                { num: "5", title: "Oyunda Test edin", desc: "Herhangi bir boşluk veya sembol oyun içinde bozuluyorsa, bir başka alternatif deneyin." },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white text-sm font-black shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                    {step.num}
                  </div>
                  <div>
                    <strong className="text-white text-base block mb-1">{step.title}</strong>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SYMBOLS ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-4 border-b border-white/[0.06] pb-4">
              <Sparkles className="w-6 h-6 text-rose-500" />
              Manuel Kullanım İçin Semboller
            </h2>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-5">
              Kendiniz bir isim yaratmayı seviyorsanız, bu favori sembollere tıklayarak kopyalayabilirsiniz:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {symbols.map((sym) => (
                <button
                  key={sym}
                  onClick={() => copyText(sym)}
                  className={clsx(
                    "bg-[#0f1219] border rounded-lg px-4 py-2.5 text-xl font-mono transition-all hover:scale-105",
                    copiedItems.has(sym)
                      ? "border-rose-500 bg-rose-500/10 text-rose-400"
                      : "border-white/[0.06] text-gray-300 hover:border-rose-500/50 hover:bg-rose-500/[0.04]"
                  )}
                >
                  {sym}
                </button>
              ))}
            </div>
          </div>

          {/* ── WORKING TIPS ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-6 border-b border-white/[0.06] pb-4">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              Daha İyi Nickler İçin İpuçları
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {ruleCards.map((r) => (
                <div key={r.title} className="bg-[#0f1219] border border-white/[0.05] rounded-xl p-4 hover:border-white/[0.1] transition-colors">
                  <div className="text-2xl mb-2">{r.icon}</div>
                  <div className="text-sm font-bold text-white mb-1">{r.title}</div>
                  <div className="text-[11px] text-gray-500 leading-relaxed">{r.desc}</div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-3 items-start bg-red-500/[0.06] border-l-[3px] border-red-500 rounded-r-lg p-4 mb-4 mt-6">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-red-400 text-sm block mb-1">Şekilli Nickler Kullanılabilir mi?</strong>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Evet, ama dikkatli olun. Küfür içeren kelimeler, okunması aşırı zor isimler ve gereğinden fazla sembol kullanımı hesabınızın sistem tarafından engellenmesine veya uyarılmasına neden olabilir. Düzgün karakterleri tercih edin.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 items-start bg-blue-500/[0.06] border-l-[3px] border-blue-500 rounded-r-lg p-4">
              <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-300 text-sm block mb-1">Free Fire Nick Nasıl Değiştirilir?</strong>
                <ol className="list-decimal pl-4 text-blue-200/80 text-sm space-y-1">
                  <li>Profilinizi açın.</li>
                  <li>Düzenleye tıklayın.</li>
                  <li>Kopyaladığınız yeni ismi girin.</li>
                  <li>
                    &ldquo;İsim Değiştirme Kartı&rdquo; veya Elmas kullanarak kaydedin.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* ── CONCLUSION ── */}
          <div className="rounded-2xl bg-gradient-to-br from-rose-900/20 via-red-950/10 to-transparent p-8 sm:p-10 border border-rose-500/20 text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-black text-white mb-5">
              <Trophy className="w-6 h-6 text-rose-500" />
              Genel Değerlendirme
            </h2>
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-2xl mx-auto mb-4">
              Zamanla birçok <strong>Free Fire nickleri</strong> stilini test ettim. Basit isimler dikkat çekmez, ama temiz ve şekilli isimler hızlıca öne çıkar. İyi bir nickname, insanların sizi hatırlamasını sağlar ve profilinizi güçlendirir.
            </p>
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-2xl mx-auto mb-6">
              Deneyimlerime göre en iyi yöntem, ismi kısa tutmak ve hafif şekillendirmektir. Sembolleri abartmayın. Size doğal gelen ve oyunda iyi çalışan bir isim seçin. Oyununuzun tadını çıkarın!
            </p>
            <Link
              href="/sekilli-nick-yazma"
              className="inline-flex items-center gap-2 bg-rose-500 text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-rose-400 transition-colors shadow-lg shadow-rose-500/20"
            >
              ➡️ Daha Fazla Nick Oluştur
            </Link>
          </div>

          {/* ── FAQ ── */}
          <div className="rounded-2xl bg-white/[0.02] p-7 sm:p-9 border border-white/[0.05]">
            <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-6 border-b border-white/[0.06] pb-4">
              <HelpCircle className="w-6 h-6 text-rose-500" />
              Sıkça Sorulan Sorular (SSS)
            </h2>
            <div className="divide-y divide-white/[0.05]">
              {freeFireNickFaqs.map((faq, i) => (
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
              className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-sm font-medium text-gray-400 hover:text-rose-400 hover:border-rose-500/30 transition-all"
            >
              Şekilli Nick Yazma
            </Link>
            <Link
              href="/sekilli-nick-yazma/pubg-sekilli-nick"
              className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-sm font-medium text-gray-400 hover:text-rose-400 hover:border-rose-500/30 transition-all"
            >
              PUBG Şekilli Nick
            </Link>
            <Link
              href="/sekilli-nick-yazma/havali-nick-yazma"
              className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-sm font-medium text-gray-400 hover:text-rose-400 hover:border-rose-500/30 transition-all"
            >
              Havalı Nick Yazma
            </Link>
            <Link
              href="/"
              className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-sm font-medium text-gray-400 hover:text-rose-400 hover:border-rose-500/30 transition-all"
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
