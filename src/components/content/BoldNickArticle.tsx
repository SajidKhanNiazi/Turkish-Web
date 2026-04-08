"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { 
  Flame, Gamepad2, MessageCircle, Share2, HelpCircle, Sparkles, 
  Star, Swords, Heart, Zap, Crown, Shield, Type, MousePointerClick, 
  ChevronRight, ChevronDown 
} from "lucide-react";
import { clsx } from "clsx";
import { boldNickFaqs } from "@/data/boldNickFaqs";

/* ── FAQ Accordion Item Component ── */
const AccordionItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-white/[0.05] last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left transition-all hover:text-indigo-400 group focus:outline-none"
      >
        <span className={clsx(
          "text-lg font-bold transition-colors",
          isOpen ? "text-indigo-400" : "text-indigo-200"
        )}>
          {question}
        </span>
        <div className={clsx(
          "flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] transition-transform duration-300",
          isOpen && "rotate-180 bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
        )}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div className={clsx(
        "transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"
      )}>
        <p className="text-gray-400 text-base leading-relaxed pl-1 border-l-2 border-indigo-500/20 ml-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const BoldNickArticle = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-[#0B0F1A] py-16 sm:py-24 border-t border-white/[0.03]">
      <Container>
        <article className="mx-auto max-w-4xl text-left flex flex-col gap-10">
          
          {/* Header */}
          <div className="text-center mb-6 px-4">
            <div className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl border-l-4 border-indigo-500 pl-6 inline-block text-left">
              Kalın &amp; Özel Nickler (Kopyala Yapıştır) <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Şekilli, Havalı ve Oyun Nickleri
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Son güncelleme: 8 Nisan 2026
            </p>
          </div>

          {/* 1. Giriş Box */}
          <div className="rounded-3xl bg-white/[0.02] p-8 sm:p-10 border border-white/[0.05] backdrop-blur-sm transition-all hover:bg-white/[0.04]">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white">Giriş</h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  Birçok kullanıcı, oyunlarda ve sosyal medyada kullandığı nickin çok basit göründüğünü fark eder. Ben de online oyunlara başladığımda aynı sorunu yaşadım. Nickim sıradan görünüyordu ve dikkat çekmiyordu. Bu durum güçlü bir kimlik oluşturmamı zorlaştırdı. Zayıf bir nick, profilinizi daha az ilgi çekici yapabilir.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Bu yüzden farklı Unicode stilleri ve semboller kullanarak <span className="text-indigo-400 font-bold">kalın &amp; özel nickler</span> denemeye başladım. Sonuç gerçekten fark yarattı. Kalın ve şekilli bir nick anında daha güçlü ve dikkat çekici görünür. Bu rehberde, test edilmiş nickleri ve gerçekten işe yarayan yöntemleri paylaşacağım.
                </p>
              </div>
            </div>
          </div>

          {/* 2. 🔥 En Popüler Nickler Box */}
          <div className="rounded-3xl bg-white/[0.02] p-8 sm:p-10 border border-white/[0.05] backdrop-blur-sm">
            <div className="flex items-center gap-4 text-2xl font-black text-white mb-8 pr-4">
              <Flame className="w-7 h-7 text-orange-400" />
              🔥 En Popüler Kalın &amp; Özel Nickler
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {["𝐊𝐈𝐍𝐆", "𝐃𝐀𝐑𝐊", "𝐒𝐓𝐀𝐑", "𝐅𝐈𝐑𝐄", "𝐐𝐔𝐄𝐄𝐍", "𝐁𝐎𝐒𝐒"].map((nick) => (
                <div key={nick} className="bg-white/[0.03] px-5 py-4 rounded-2xl border border-white/[0.04] text-lg font-bold text-white tracking-wide flex items-center justify-between group hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all">
                  <span>{nick}</span>
                  <Star className="w-4 h-4 text-yellow-500/50 group-hover:text-yellow-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* 3. Listeler Box */}
          <div className="rounded-3xl bg-white/[0.02] p-8 sm:p-10 border border-white/[0.05] backdrop-blur-sm">
            <div className="flex items-center gap-4 text-2xl font-black text-white mb-6">
              <Crown className="w-7 h-7 text-yellow-400" />
              Kalın &amp; Özel Nickler Listesi
            </div>
            <p className="text-gray-400 leading-relaxed mb-10">
              Daha fazla stil görmek isterseniz 👉{" "}
              <Link href="/sekilli-nick-yazma" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors underline decoration-indigo-400/30 underline-offset-4">
                Şekilli Nick
              </Link>{" "}
              seçeneklerine göz atabilirsiniz.
            </p>

            <div className="grid gap-10 md:grid-cols-2">
              {/* Kalın Erkek Nickleri */}
              <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.04] space-y-4 transition-all hover:border-blue-500/20">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Kalın Erkek Nickleri
                </div>
                <ul className="grid grid-cols-1 gap-2 text-[13px] text-gray-300 font-medium">
                  {["𝐊𝐈𝐍𝐆 𝐗", "𝐃𝐀𝐑𝐊 𝐁𝐎𝐒𝐒", "𝐁𝐋𝐀𝐙𝐄 𝐊𝐈𝐍𝐆", "𝐅𝐈𝐑𝐄 𝐌𝐀𝐒𝐓𝐄𝐑", "𝐖𝐎𝐋𝐅 𝐗"].map((n) => (
                    <li key={n} className="bg-[#0B0F1A] px-4 py-3 rounded-xl border border-white/[0.04] shadow-sm">{n}</li>
                  ))}
                </ul>
                <p className="text-[11px] text-gray-500 italic leading-relaxed">Bu nickler güçlü ve dikkat çekicidir. Oyunlarda güçlü bir imaj oluşturur.</p>
              </div>

              {/* Kalın Kız Nickleri */}
              <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.04] space-y-4 transition-all hover:border-pink-500/20">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-pink-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Kalın Kız Nickleri
                </div>
                <ul className="grid grid-cols-1 gap-2 text-[13px] text-gray-300 font-medium">
                  {["𝐐𝐔𝐄𝐄𝐍 𝐗", "𝐀𝐍𝐆𝐄𝐋 𝐒𝐓𝐀𝐑", "𝐋𝐔𝐍𝐀 𝐆𝐈𝐑𝐋", "𝐑𝐎𝐒𝐄 𝐃𝐈𝐕𝐀", "𝐋𝐈𝐆𝐇𝐓 𝐐𝐔𝐄𝐄𝐍"].map((n) => (
                    <li key={n} className="bg-[#0B0F1A] px-4 py-3 rounded-xl border border-white/[0.04] shadow-sm">{n}</li>
                  ))}
                </ul>
                <p className="text-[11px] text-gray-500 italic leading-relaxed">Bu nickler zarif ve şık bir görünüm sunar.</p>
              </div>

              {/* Havalı Kalın Nickler */}
              <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.04] space-y-4 transition-all hover:border-purple-500/20">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-purple-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Havalı Kalın Nickler
                </div>
                <ul className="grid grid-cols-1 gap-2 text-[13px] text-gray-300 font-medium">
                  {["𝐒𝐇𝐀𝐃𝐎𝐖 𝐗", "𝐒𝐓𝐎𝐑𝐌 𝐁𝐎𝐒𝐒", "𝐁𝐋𝐀𝐂𝐊 𝐅𝐈𝐑𝐄", "𝐕𝐈𝐏 𝐗", "𝐍𝐈𝐆𝐇𝐓 𝐊𝐈𝐍𝐆"].map((n) => (
                    <li key={n} className="bg-[#0B0F1A] px-4 py-3 rounded-xl border border-white/[0.04] shadow-sm">{n}</li>
                  ))}
                </ul>
                <p className="text-[11px] text-gray-500 italic leading-relaxed">Modern ve dikkat çekici nicklerdir.</p>
              </div>

              {/* Kısa Kalın Nickler */}
              <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.04] space-y-4 transition-all hover:border-cyan-500/20">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Kısa Kalın Nickler
                </div>
                <ul className="grid grid-cols-1 gap-2 text-[13px] text-gray-300 font-medium">
                  {["𝐀𝐗𝐄", "𝐙𝐄𝐍", "𝐑𝐄𝐗", "𝐕𝐎𝐈𝐃", "𝐍𝐎𝐕𝐀"].map((n) => (
                    <li key={n} className="bg-[#0B0F1A] px-4 py-3 rounded-xl border border-white/[0.04] shadow-sm">{n}</li>
                  ))}
                </ul>
                <p className="text-[11px] text-gray-500 italic leading-relaxed">Kısa nickler sade ve akılda kalıcıdır.</p>
              </div>
            </div>
          </div>

          {/* 4. Şekilli ve Sembollü Box */}
          <div className="rounded-3xl bg-white/[0.02] p-8 sm:p-10 border border-white/[0.05] backdrop-blur-sm">
            <div className="flex items-center gap-4 text-2xl font-black text-white mb-10">
              <Swords className="w-7 h-7 text-indigo-400" />
              Şekilli ve Sembollü Kalın Nickler
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-amber-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Sembollü Nickler
                </div>
                <div className="grid gap-2">
                  {["『𝐊𝐈𝐍𝐆』", "𓆩𝐃𝐀𝐑𝐊𓆪", "彡𝐅𝐈𝐑𝐄彡", "★𝐁𝐎𝐒𝐒★", "༒𝐒𝐓𝐀𝐑༒"].map((n) => (
                    <div key={n} className="bg-[#0B0F1A] px-4 py-3.5 rounded-xl border border-white/[0.04] text-gray-200 font-bold">{n}</div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Estetik Nickler
                </div>
                <div className="grid gap-2">
                  {["𝒟𝒶𝓇𝓀𝒮𝑜𝓊𝓁", "𝒮𝓉𝒶𝓇𝒟𝓊𝓈𝓉", "𝒩𝒾𝑔𝒽𝓉𝐿𝒾𝑔𝒽𝓉", "𝐿𝑜𝓋𝑒𝐿𝓎"].map((n) => (
                    <div key={n} className="bg-[#0B0F1A] px-4 py-3.5 rounded-xl border border-white/[0.04] text-gray-200 font-bold italic font-serif">{n}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Oyunlar İçin Box */}
          <div className="rounded-3xl bg-white/[0.02] p-8 sm:p-10 border border-white/[0.05] backdrop-blur-sm">
            <div className="flex items-center gap-4 text-2xl font-black text-white mb-10">
              <Gamepad2 className="w-7 h-7 text-emerald-400" />
              Oyunlar İçin Kalın Nickler
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="p-6 rounded-2xl bg-orange-500/[0.03] border border-orange-500/10 space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">Free Fire</div>
                <ul className="space-y-2">
                  {["𝐅𝐅 𝐊𝐈𝐍𝐆", "𝐅𝐈𝐑𝐄 𝐏𝐑𝐎", "𝐁𝐀𝐓𝐓𝐋𝐄 𝐗"].map((n) => (
                    <li key={n} className="bg-black/20 px-4 py-2.5 rounded-xl border border-white/[0.04] text-gray-300 font-bold">{n}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-yellow-500/[0.03] border border-yellow-500/10 space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">PUBG</div>
                <ul className="space-y-2">
                  {["𝐏𝐔𝐁𝐆 𝐆𝐎𝐃", "𝐒𝐍𝐈𝐏𝐄𝐑 𝐗", "𝐖𝐀𝐑 𝐌𝐀𝐒𝐓𝐄𝐑"].map((n) => (
                    <li key={n} className="bg-black/20 px-4 py-2.5 rounded-xl border border-white/[0.04] text-gray-300 font-bold">{n}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-500 font-medium italic">Bu nicklerin çoğu popüler oyunlarda çalışır. Ancak bazı semboller her platformda desteklenmeyebilir.</p>
          </div>

          {/* 6. Araç Nasıl Kullanılır Box */}
          <div className="rounded-3xl bg-indigo-600/10 p-8 sm:p-10 border border-indigo-500/20 shadow-2xl shadow-indigo-900/10">
            <div className="flex items-center gap-4 text-2xl font-black text-white mb-10 tracking-tight">
              <Zap className="w-7 h-7 text-yellow-400 fill-yellow-400" />
              Kalın Nick Yazma Aracı Nasıl Kullanılır?
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { title: "Giriş", desc: "İsminizi veya kelimeyi yazın" },
                { title: "Seçim", desc: "Düzinelerce farklı stil arasından seçin" },
                { title: "Kopyala", desc: "Beğendiğiniz nicki tek tıkla kopyalayın" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white border-2 border-indigo-400/40 text-sm font-black mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-white font-black mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Teknik Bilgi Box */}
          <div className="rounded-3xl bg-white/[0.02] p-8 sm:p-10 border border-white/[0.05]">
            <div className="text-2xl font-black text-white mb-10 tracking-tight">Teknik Bilgi &amp; Yöntemler</div>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-indigo-400 font-bold text-lg flex items-center gap-2">
                  <Type className="w-5 h-5" /> Unicode
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  Özel karakterler sadece görsel değil, Unicode karakter setinin bir parçasıdır. Bu sayede her yerde kalın görünürler.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-indigo-400 font-bold text-lg">Otomatik Üretim</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  Nick generator araçları, yazdığınız her harfi anında karşılık gelen kalın Unicode karakteriyle değiştirir.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-indigo-400 font-bold text-lg">Manuel Ekleme</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  Kendi nickinize ★, 彡 veya 『 』 gibi semboller ekleyerek manuel olarak da özelleştirme yapabilirsiniz.
                </p>
              </div>
            </div>
          </div>

          {/* 8. Nerelerde Kullanılır Box */}
          <div className="rounded-3xl bg-white/[0.02] p-8 sm:p-10 border border-white/[0.05]">
            <div className="text-2xl font-black text-white mb-10 tracking-tight text-center">Nerede Kullanılır?</div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-2xl bg-orange-500/[0.03] border border-orange-500/10 text-center">
                <Gamepad2 className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="font-black text-orange-200 uppercase tracking-widest text-xs mb-2">Oyunlar</h3>
                <p className="text-[11px] text-gray-500 font-medium">PUBG, Free Fire ve Valorant.</p>
              </div>
              <div className="p-6 rounded-2xl bg-pink-500/[0.03] border border-pink-500/10 text-center">
                <Share2 className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                <h3 className="font-black text-pink-200 uppercase tracking-widest text-xs mb-2">Sosyal Medya</h3>
                <p className="text-[11px] text-gray-500 font-medium">Instagram, TikTok ve Twitter.</p>
              </div>
              <div className="p-6 rounded-2xl bg-green-500/[0.03] border border-green-500/10 text-center">
                <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-black text-green-200 uppercase tracking-widest text-xs mb-2">Mesajlaşma</h3>
                <p className="text-[11px] text-gray-500 font-medium">WhatsApp ve Telegram.</p>
              </div>
            </div>
          </div>

          {/* 9. FAQ Section - Exclusive Accordion */}
          <div id="faq" className="rounded-[40px] bg-white/[0.02] p-8 sm:p-12 border border-white/[0.05]">
            <div className="flex items-center gap-4 text-3xl font-black text-white mb-10 tracking-tight">
              <HelpCircle className="w-8 h-8 text-indigo-400" />
              Sıkça Sorulan Sorular
            </div>
            <div className="divide-y divide-white/[0.05]">
              {boldNickFaqs.map((faq, i) => (
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

          {/* 10. Sonuç Box */}
          <div className="rounded-[40px] bg-gradient-to-br from-indigo-900 via-indigo-950 to-black p-8 sm:p-12 border border-indigo-500/30 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="text-3xl font-black text-white mb-10 tracking-tight uppercase border-b border-indigo-500/20 pb-4 inline-block">Sonuç</div>
              <p className="text-indigo-100 leading-relaxed text-2xl italic mb-10 font-medium">
                &ldquo;Kendi deneyimlerime göre, basit bir nicki kalın ve şekilli hale getirmek büyük fark yaratır. Oyunlarda ve sosyal medyada farklı stilleri bizzat test ettim. Güçlü bir nick, sizi diğer oyunculardan anında ayırır.&rdquo;
              </p>
              <p className="text-indigo-200/70 leading-relaxed text-base font-medium">
                En iyi sonucu almak için kalın yazı stilini uygun sembollerle birleştirin. Farklı kombinasyonları denemekten çekinmeyin ve tarzınızı en iyi yansıtan stili kopyalayıp kullanmaya başlayın.
              </p>
              <div className="mt-12 flex items-center gap-4">
                <div className="h-1 w-12 bg-indigo-500 rounded-full" />
                <div className="text-[11px] text-indigo-300 uppercase tracking-[0.3em] font-black opacity-60">YazıStilleriPro Editör Ekibi</div>
              </div>
            </div>
          </div>

        </article>
      </Container>
    </section>
  );
};

