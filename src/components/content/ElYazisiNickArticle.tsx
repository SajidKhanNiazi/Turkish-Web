"use client";

import { useState } from "react";
import { Container } from "../layout/Container";
import { Check, Copy, ChevronDown, Monitor, Smartphone, MessageSquare, Instagram, Hash } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";

export const ElYazisiNickArticle = () => {
  return (
    <div className="bg-[#0B0F1A] pb-24 overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Ready-made Examples Section */}
          <section id="hazir-ornekler">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-black text-white tracking-tight sm:text-4xl">
                Hazır El Yazısı Nick Örnekleri
              </h2>
              <div className="h-1.5 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ExampleCategory title="Oyun Nickleri" examples={[
                { label: "Havalı", text: "𝓢𝓱𝓪𝓭𝓸𝔀" },
                { label: "Korkutucu", text: "𝓓𝓪𝓻𝓴𝓛𝓸𝓻𝓭" },
                { label: "Hızlı", text: "𝓕𝓵𝓪𝓼𝓱" },
                { label: "Keskin", text: "𝓐𝓬𝓮" },
                { label: "Gamer", text: "𝓙𝓸𝓴𝓮𝓻" },
                { label: "Pro", text: "𝓚𝓷𝓲𝓰𝓱𝓽" },
                { label: "Gizli", text: "𝓖𝓱𝓸𝓼𝓽" },
                { label: "Efsane", text: "𝓛𝓮𝓰𝓮𝓷𝓭" }
              ]} />
              
              <ExampleCategory title="Instagram & Estetik" examples={[
                { label: "Zarif", text: "𝓐𝔂𝓼̧𝓮" },
                { label: "Modern", text: "𝓜𝓮𝓵𝓲𝓼𝓪" },
                { label: "Şık", text: "𝓑𝓮𝓵𝓲𝓷𝓪𝔂" },
                { label: "Estetik", text: "𝓓𝓮𝓯𝓷𝓮" },
                { label: "Minimal", text: "𝓔𝓬𝓮" },
                { label: "Havalı", text: "𝓘̇𝓻𝓮𝓶" },
                { label: "Tatlı", text: "𝓓𝓪𝓶𝓵𝓪" },
                { label: "Yıldız", text: "𝓢𝓲𝓵𝓪" }
              ]} variant="cyan" />
              
              <ExampleCategory title="Çiftler & Kalpli" examples={[
                { label: "Aşk", text: "♡𝓐𝓵𝓲♡" },
                { label: "Kalp", text: "♡𝓜𝓮𝓻𝔂𝓮𝓶♡" },
                { label: "Sonsuz", text: "∞𝓒𝓪𝓷∞" },
                { label: "Değerli", text: "♡𝓔𝓶𝓻𝓮♡" },
                { label: "Gül", text: "✿𝓔𝓵𝓲𝓯✿" },
                { label: "Kraliçe", text: "♛𝓢𝓮𝓵𝓲𝓷♛" },
                { label: "Kral", text: "♚𝓜𝓮𝓻𝓽♚" },
                { label: "Bahar", text: "🌸𝓘̇𝓹𝓮𝓴🌸" }
              ]} variant="rose" />
            </div>
          </section>

          {/* Platform Guide Section */}
          <section id="platform-guide">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-black text-white tracking-tight sm:text-4xl">
                Hangi Platformlarda Çalışır?
              </h2>
              <div className="h-1.5 w-12 bg-indigo-500 rounded-full mt-4" />
            </div>

            <div className="grid gap-4 max-w-2xl mx-auto">
              <AccordionItem 
                title="PUBG Mobile" 
                icon={<Smartphone className="text-amber-400" />}
                content="El yazısı nicklerin %80'i PUBG'de çalışır. Script Bold (𝓐) ve El Yazısı (𝒜) en uyumlu stillerdir. Karakter limiti: 16. Bazı Fraktur stilleri görünmeyebilir."
              />
              <AccordionItem 
                title="Instagram" 
                icon={<Instagram className="text-pink-500" />}
                content="Tüm el yazısı stilleri Instagram biyografisinde ve kullanıcı adında sorunsuz çalışır. Estetik bir görünüm için script fontlar en çok tercih edilenlerdir."
              />
              <AccordionItem 
                title="WhatsApp" 
                icon={<MessageSquare className="text-emerald-500" />}
                content="El Yazısı Kalın ve temel script stiller WhatsApp profil adında çalışır. Durum güncellemelerinde tüm Unicode script fontlar desteklenir."
              />
              <AccordionItem 
                title="Discord" 
                icon={<Hash className="text-indigo-400" />}
                content="Discord neredeyse tüm Unicode script fontları destekler. Sunucu isimlerinde ve kullanıcı rolleri için mükemmel bir seçimdir."
              />
            </div>
          </section>

          {/* Alphabet Preview Grid */}
          <section id="alphabet-preview">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-black text-white tracking-tight sm:text-4xl">
                El Yazısı Türk Alfabesi
              </h2>
              <div className="h-1.5 w-12 bg-cyan-500 rounded-full mt-4" />
              <p className="mt-4 text-gray-400">
                A&apos;dan Z&apos;ye tüm harflerin script ve bold script görünümleri.
              </p>
            </div>

            <div className="bg-[#111827] border border-white/[0.04] p-6 rounded-3xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {['A','a','B','b','C','c','Ç','ç','D','d','E','e','F','f','G','g','Ğ','ğ','H','h','I','ı','İ','i','J','j','K','k','L','l','M','m','N','n','O','o','Ö','ö','P','p','R','r','S','s','Ş','ş','T','t','U','u','Ü','ü','V','v','Y','y','Z','z'].map((char) => (
                <div key={char} className="flex flex-col items-center bg-[#0B0F1A] p-4 rounded-2xl border border-white/[0.05] hover:border-indigo-500/30 transition-all">
                  <span className="text-xs font-black text-gray-600 mb-2">{char}</span>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-white font-serif">{transformAlphabet(char, 'script')}</span>
                    <span className="text-2xl text-indigo-400 font-serif">{transformAlphabet(char, 'bold')}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links Sections */}
          <section className="pt-20 border-t border-white/[0.06]">
            <h2 className="text-2xl font-black text-white text-center mb-8 uppercase tracking-widest">İlgili Sayfalar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <InternalLink href="/sekilli-nick-yazma" title="Şekilli Nick Yazma" />
              <InternalLink href="/sekilli-nick-yazma/havali-nick-yazma" title="Havalı & Güzel Nick" />
              <InternalLink href="/yazi-stilleri" title="Tüm Yazı Stilleri" />
              <InternalLink href="/sekilli-nick-yazma/pubg-nick-isim-sekilleri" title="PUBG Nick Şekilleri" />
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
};

const ExampleCategory = ({ title, examples, variant = "indigo" }: { title: string, examples: any[], variant?: string }) => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = async (idx: number, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1000);
    } catch {}
  };

  const colors = {
    indigo: "border-indigo-500/20 bg-indigo-500/5 text-indigo-400",
    cyan: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400",
    rose: "border-rose-500/20 bg-rose-500/5 text-rose-400",
  }[variant] || "border-indigo-500/20";

  return (
    <div className={clsx("p-6 rounded-3xl border", colors)}>
      <h3 className="text-lg font-black tracking-tight mb-6 flex items-center justify-between">
        {title}
        <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full border border-current opacity-70">Hazır</span>
      </h3>
      <div className="space-y-2">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => handleCopy(i, ex.text)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-current hover:bg-white/10 transition-all group"
          >
            <div className="flex flex-col items-start">
              <span className="text-[9px] font-black uppercase text-gray-500 group-hover:text-current transition-colors">{ex.label}</span>
              <span className="text-xl text-white font-medium">{ex.text}</span>
            </div>
            <div className="min-w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 group-hover:bg-white/20 transition-all">
              {copiedIdx === i ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const AccordionItem = ({ title, icon, content }: { title: string, icon: React.ReactNode, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/[0.06] rounded-2xl overflow-hidden bg-[#111827]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#0B0F1A] border border-white/10 flex items-center justify-center shadow-inner">
            {icon}
          </div>
          <span className="text-lg font-bold text-gray-100">{title}</span>
        </div>
        <ChevronDown size={20} className={clsx("text-gray-600 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2">
          {content}
        </div>
      )}
    </div>
  );
};

const InternalLink = ({ href, title }: { href: string, title: string }) => (
  <Link 
    href={href}
    className="px-6 py-5 rounded-2xl bg-[#111827] border border-white/[0.04] text-sm font-bold text-gray-400 text-center hover:border-indigo-500/40 hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
  >
    {title}
  </Link>
);

// Minimal local transform for alphabet grid
const transformAlphabet = (char: string, type: 'script' | 'bold'): string => {
  const scriptMap: any = {
    'A':'𝒜','a':'𝒶','B':'ℬ','b':'𝒷','C':'𝒞','c':'𝒸','Ç':'𝒞̧','ç':'𝒸̧','D':'𝒟','d':'𝒹','E':'ℰ','e':'ℯ','F':'ℱ','f':'𝒻','G':'𝒢','g':'ℊ','Ğ':'𝒢̆','ğ':'ℊ̆','H':'ℋ','h':'𝒽','I':'ℐ','ı':'𝒾','İ':'ℐ̇','i':'𝒾','J':'𝒥','j':'𝒿','K':'𝒦','k':'𝓀','L':'ℒ','l':'𝓁','M':'ℳ','m':'𝓂','N':'𝒩','n':'𝓃','O':'𝒪','o':'ℴ','Ö':'𝒪̈','ö':'ℴ̈','P':'𝒫','p':'𝓅','R':'ℛ','r':'𝓇','S':'𝒮','s':'𝓈','Ş':'𝒮̧','ş':'𝓈̧','T':'𝒯','t':'𝓉','U':'𝒰','u':'𝓊','Ü':'𝒰̈','ü':'𝓊̈','V':'𝒱','v':'𝓋','Y':'𝒴','y':'𝓎','Z':'𝒵','z':'𝓏'
  };
  const boldMap: any = {
    'A':'𝓐','a':'𝓪','B':'𝓑','b':'𝓫','C':'𝓒','c':'𝓬','Ç':'𝓒̧','ç':'𝓬̧','D':'𝓓','d':'𝓭','E':'𝓔','e':'𝓮','F':'𝓕','f':'𝓯','G':'𝓖','g':'𝓰','Ğ':'𝓖̆','ğ':'𝓰̆','H':'𝓗','h':'𝓱','I':'𝓘','ı':'𝓲','İ':'𝓘̇','i':'𝓲','J':'𝓙','j':'𝓳','K':'𝓚','k':'𝓴','L':'𝓛','l':'𝓵','M':'𝓜','m':'𝓶','N':'𝓝','n':'𝓷','O':'𝓞','o':'𝓸','Ö':'𝓞̈','ö':'𝓸̈','P':'𝓟','p':'𝓹','R':'𝓡','r':'𝓻','S':'𝓢','s':'𝓼','Ş':'𝓢̧','ş':'𝓼̧','T':'𝓣','t':'𝓽','U':'𝓤','u':'𝓾','Ü':'𝓤̈','ü':'𝓾̈','V':'𝓥','v':'𝓿','Y':'𝓨','y':'𝔂','Z':'𝓩','z':'𝔃'
  };
  
  if (type === 'script') return scriptMap[char] || char;
  return boldMap[char] || char;
};
