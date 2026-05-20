import { Container } from "@/components/layout/Container";
import { Sparkles, Zap, Smartphone, HelpCircle, Trophy, Terminal, Info, AlertTriangle, CheckCircle2, ChevronRight } from "lucide-react";

export const SekilliNickYazmaArticle = () => {
  return (
    <section className="bg-[#0B0F1A] py-16 sm:py-24 border-t border-white/[0.03]">
      <Container>
        <div className="mx-auto max-w-5xl text-left">
          {/* Header Section */}
          <div className="text-center mb-16 px-4">
            <div className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl border-l-4 border-indigo-500 pl-6 inline-block text-left">
              Şekilli Nick Yazma (2026) <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Şık ve Havalı Nick Oluştur
              </span>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 px-4 sm:px-0">
            {/* Left Column: Main Narrative */}
            <div className="lg:col-span-7 space-y-10">
              {/* Intro Card */}
              <div className="rounded-3xl bg-white/[0.02] p-8 border border-white/[0.05] backdrop-blur-sm transition-all hover:bg-white/[0.04]">
                <div className="flex items-start gap-5">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                    <Info className="w-6 h-6" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-gray-300">
                      İlk kez bir oyun profili için nick oluşturmaya çalıştığımı hatırlıyorum. Yazdığım her isim basit ve sıradan görünüyordu. Başkalarının havalı nickleri varken benimki oldukça zayıf kalıyordu. Bugün birçok kullanıcı aynı sorunu yaşıyor.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Asıl sorun yaratıcılık değil, doğru araçları bilmemek. İşte burada <span className="text-indigo-400 font-bold">şekilli nick yazma</span> devreye giriyor. Sıradan metni saniyeler içinde havalı bir nicke dönüştürür. Kopyala ve hemen kullan. Hazır mısın?
                    </p>
                  </div>
                </div>
              </div>

              {/* What is it Card */}
              <div className="rounded-3xl bg-white/[0.02] p-8 border border-white/[0.05] backdrop-blur-sm transition-all hover:bg-white/[0.04]">
                <div className="flex items-center gap-4 text-2xl font-bold text-white mb-6">
                  <Terminal className="w-7 h-7 text-indigo-400" />
                  Şekilli Nick Yazma Nedir?
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Şekilli nick yazma, özel karakterler ve fontlar kullanarak nick oluşturma işlemidir. Bu sistem Unicode karakterlerine dayanır.
                </p>
                <div className="mt-8 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase text-indigo-400 tracking-widest block mb-2">Canlı Örnek</span>
                    <div className="text-lg text-gray-300">Player123 <ChevronRight className="inline w-4 h-4 mx-2 opacity-50" /> <span className="font-bold text-white tracking-wide">𝓟𝓵𝓪𝔂𝓮𝓻✯123</span></div>
                  </div>
                  <a href="https://home.unicode.org/" target="_blank" className="rounded-full bg-indigo-500/10 px-6 py-2 text-xs font-bold text-indigo-400 hover:bg-indigo-500/20 transition-all border border-indigo-500/20">Unicode Bilgi</a>
                </div>
              </div>

              {/* Ready-made Examples */}
              <div className="rounded-3xl bg-white/[0.02] p-8 border border-white/[0.05] backdrop-blur-sm">
                <div className="flex items-center gap-4 text-2xl font-bold text-white mb-10">
                  <Trophy className="w-7 h-7 text-yellow-400" />
                  Hazır Şekilli Nick Örnekleri
                </div>
                
                <div className="grid gap-8 sm:grid-cols-3">
                  <div className="space-y-4">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> PUBG
                    </div>
                    <ul className="space-y-2 text-[13px] text-gray-400 font-medium">
                      <li className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.04]">『ᴳᵒᵈ』✯Killer</li>
                      <li className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.04]">꧁༒Shadow༒꧂</li>
                      <li className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.04]">乂Hunter乂</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Havalı
                    </div>
                    <ul className="space-y-2 text-[13px] text-gray-400 font-medium">
                      <li className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.04]">★彡Legend彡★</li>
                      <li className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.04]">♛ProMaster♛</li>
                      <li className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.04]">⚡Storm⚡</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-purple-400 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Aesthetic
                    </div>
                    <ul className="space-y-2 text-[13px] text-gray-400 font-medium">
                      <li className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.04]">✿Dreamy✿</li>
                      <li className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.04]">♡MoonLight♡</li>
                      <li className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.04]">✧StarGirl✧</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Features & How-to */}
            <div className="lg:col-span-5 space-y-8">
              {/* How it Works Card */}
              <div className="rounded-3xl bg-indigo-600/10 p-8 border border-indigo-500/20 shadow-2xl shadow-indigo-900/10">
                <div className="flex items-center gap-4 text-xl font-black text-white mb-8 tracking-tight">
                  <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  Nasıl Çalışır?
                </div>
                <ul className="space-y-5">
                  {[
                    "Hızlı nick oluşturma",
                    "Tek tıkla kopyalama",
                    "Farklı font seçenekleri",
                    "Oyun ve sosyal medya uyumlu"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-200 font-bold text-sm">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why use it */}
              <div className="rounded-3xl bg-white/[0.02] p-8 border border-white/[0.05]">
                <div className="text-xl font-black text-white mb-8 tracking-tight">Neden Şekilli Nick?</div>
                <ul className="space-y-6 text-gray-400">
                  <li className="flex gap-4 items-start">
                    <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-sm leading-relaxed">Daha dikkat çekici görünür, profilinize profesyonel bir hava katar.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Smartphone className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-sm leading-relaxed">Kendi kişiliğinizi sembollerle yansıtmanıza olanak tanır.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Trophy className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-sm leading-relaxed">Özellikle oyunlarda rakipleriniz arasında anında fark edilmenizi sağlar.</span>
                  </li>
                </ul>
              </div>

              {/* Platforms */}
              <div className="rounded-3xl bg-white/[0.02] p-8 border border-white/[0.05]">
                <div className="flex items-center gap-4 text-xl font-black text-white mb-8 tracking-tight">
                  Platformlar
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-200 uppercase tracking-widest">PUBG</span>
                    <span className="text-[10px] text-orange-400 font-black">Genel Uyumlu</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-pink-500/5 border border-pink-500/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-pink-200 uppercase tracking-widest">Instagram</span>
                    <span className="text-[10px] text-pink-400 font-black">%100 Uyum</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">Discord</span>
                    <span className="text-[10px] text-blue-400 font-black">Full Font Desteği</span>
                  </div>
                </div>
              </div>

              {/* Issues */}
              <div className="rounded-3xl bg-rose-500/5 p-8 border border-rose-500/10">
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-6">
                  <AlertTriangle className="w-5 h-5" /> Sorun & Çözüm
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-rose-200 block mb-1">Kabul edilmiyorsa</span>
                    <p className="text-xs text-gray-500">Daha az sembol içeren sade karakterleri tercih edin.</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-rose-200 block mb-1">Semboller görünmüyorsa</span>
                    <p className="text-xs text-gray-500">Uygulamanın sürümünü güncelleyin ve Unicode desteğini kontrol edin.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: FAQ & Conclusion */}
          <div className="mt-20 grid gap-10 md:grid-cols-2 px-4 sm:px-0">
            <div className="rounded-[40px] bg-white/[0.02] p-10 border border-white/[0.05]">
              <div className="flex items-center gap-4 text-3xl font-black text-white mb-10 tracking-tight">
                <HelpCircle className="w-8 h-8 text-indigo-400" />
                S.S.S
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="text-indigo-200 font-bold text-lg">Şekilli nick nedir?</div>
                  <p className="text-gray-500 text-sm leading-relaxed">Farklı alfabelerden ve Unicode veritabanından alınan özel karakterlerle oluşturulan, görsel olarak zenginleştirilmiş kullanıcı adıdır.</p>
                </div>
                <div className="space-y-3">
                  <div className="text-indigo-200 font-bold text-lg">Platformlar için güvenli mi?</div>
                  <p className="text-gray-500 text-sm leading-relaxed">Evet, sistemlerimiz tamamen standart Unicode karakterlerini kullanır ve herhangi bir üçüncü taraf yazılım veya hile içermez.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[40px] bg-gradient-to-br from-indigo-900 to-indigo-950 p-10 border border-indigo-500/30 flex flex-col justify-between shadow-2xl shadow-indigo-950/40">
              <div>
                <div className="text-3xl font-black text-white mb-8 tracking-tight uppercase tracking-widest">Sonuç</div>
                <p className="text-indigo-100 leading-relaxed text-xl italic mb-8 font-medium">
                  &quot;<a href="https://yazistilleripro.com.tr" target="_blank" className="underline hover:text-white transition-colors decoration-indigo-400 underline-offset-4">yazı stilleri</a> üzerine çalışırken şunu fark ettim: doğru nick seçimi profilinizi anında daha güçlü ve estetik gösterir.&quot;
                </p>
                <p className="text-indigo-200/80 leading-relaxed text-sm">
                  Farklı stiller deneyin, kendinizi en iyi yansıtanı seçin ve dijital kimliğinizde fark yaratın.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-indigo-400/20">
                <div className="text-[10px] text-indigo-300 uppercase tracking-widest font-black leading-none opacity-60">YazıStilleriPro Editör Ekibi</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
