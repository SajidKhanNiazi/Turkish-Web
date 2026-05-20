import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import Link from "next/link";
import { Copyright, FileText, Send, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "DMCA / Telif Hakkı Politikası",
  description:
    "Yazı Stilleri Pro DMCA ve telif hakkı politikası. Telif hakkı ihlali bildirimi, içerik kaldırma süreci ve fikri mülkiyet haklarımız hakkında bilgi edinin.",
  alternates: { canonical: "/telif-hakki" },
};

const lastUpdated = "20 Mayıs 2026";

export default function DMCAPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DMCA / Telif Hakkı Politikası",
    url: "https://yazistilleripro.com.tr/telif-hakki",
    inLanguage: "tr",
    dateModified: "2026-05-20",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="py-20 md:py-32 bg-[#0B0F1A]">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400"><Copyright className="w-8 h-8" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-400">Fikri Mülkiyet</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">DMCA / Telif Hakkı Politikası</h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Yazı Stilleri Pro olarak fikri mülkiyet haklarına saygı duyuyoruz. Bu sayfa, telif hakkı ihlali durumunda izlenecek süreçleri ve sitemizin fikri mülkiyet haklarını açıklamaktadır.
              </p>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />Son Güncelleme: {lastUpdated}
              </p>
            </div>

            <div className="space-y-12">
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400"><ShieldCheck className="w-6 h-6" /></div>
                  <h2 className="text-2xl font-bold text-white">1. Fikri Mülkiyet Haklarımız</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>Yazı Stilleri Pro web sitesinin tasarımı, logosu, yazılım kodu, özgün metinleri ve grafikleri telif hakkıyla korunmaktadır. Bu materyallerin izinsiz kopyalanması, dağıtılması veya ticari amaçla kullanılması yasaktır.</p>
                  <p><strong className="text-white">Önemli açıklama:</strong> Aracımızla oluşturulan Unicode karakterleri, Unicode Konsorsiyumu tarafından tanımlanmış açık standartlara dayanır. Bu karakterler herkesin kullanımına açıktır. Ancak sitemizin arayüzü, algoritması ve içeriği tamamen bize aittir.</p>
                </div>
              </section>

              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400"><FileText className="w-6 h-6" /></div>
                  <h2 className="text-2xl font-bold text-white">2. Telif Hakkı İhlali Bildirimi</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>Sitemizde telif hakkınızı ihlal eden bir içerik bulduğunuzu düşünüyorsanız, aşağıdaki bilgileri içeren bir bildirim göndererek bize ulaşabilirsiniz:</p>
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-indigo-400 font-bold shrink-0">1.</span>
                      <span>İhlal edildiğini düşündüğünüz telif hakkına sahip olduğunuz eserin tanımı</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-indigo-400 font-bold shrink-0">2.</span>
                      <span>İhlal eden içeriğin sitemizde bulunduğu URL adresi</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-indigo-400 font-bold shrink-0">3.</span>
                      <span>Adınız, soyadınız ve iletişim bilgileriniz</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-indigo-400 font-bold shrink-0">4.</span>
                      <span>İçeriğin telif hakkı sahibi tarafından yetkilendirilmediğine dair iyi niyetli beyanınız</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-indigo-400 font-bold shrink-0">5.</span>
                      <span>Bildirimdeki bilgilerin doğruluğuna dair beyanınız</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400"><Send className="w-6 h-6" /></div>
                  <h2 className="text-2xl font-bold text-white">3. Bildirim Süreci</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>Telif hakkı ihlali bildirimleri için aşağıdaki süreci uyguluyoruz:</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm">1</div>
                      <div><h3 className="text-white font-semibold mb-1">Bildirim Alınması</h3><p className="text-sm">Yukarıdaki bilgileri içeren bildiriminizi e-posta ile alıyoruz.</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm">2</div>
                      <div><h3 className="text-white font-semibold mb-1">İnceleme</h3><p className="text-sm">Bildirimi inceleyerek ihlal iddiasını değerlendiriyoruz.</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm">3</div>
                      <div><h3 className="text-white font-semibold mb-1">Aksiyon</h3><p className="text-sm">İhlal doğrulanırsa, ilgili içerik makul süre içinde kaldırılır veya düzeltilir.</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm">4</div>
                      <div><h3 className="text-white font-semibold mb-1">Bilgilendirme</h3><p className="text-sm">Alınan aksiyonlar hakkında sizi bilgilendiriyoruz.</p></div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-6">4. İçeriğimizin Korunması</h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>Yazı Stilleri Pro&apos;nun özgün içeriklerinin izinsiz kullanıldığını tespit ettiğimiz durumlarda, yasal haklarımızı kullanarak gerekli adımları atacağız. Bu, DMCA bildirimi gönderilmesini, arama motorlarına kaldırma talebi iletilmesini ve gerektiğinde hukuki süreç başlatılmasını kapsar.</p>
                </div>
              </section>

              <section className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0"><Mail className="w-6 h-6" /></div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3">Telif hakkı bildirimi göndermek için</h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Telif hakkı ihlali bildirimleri ve sorularınız için <Link href="/iletisim" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">İletişim</Link> sayfamızdaki e-posta adresi üzerinden bize ulaşabilirsiniz.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <Link href="/kullanim-sartlari" className="hover:text-indigo-400 transition-colors underline underline-offset-4">Kullanım Şartları</Link>
                      <span>·</span>
                      <Link href="/gizlilik" className="hover:text-indigo-400 transition-colors underline underline-offset-4">Gizlilik Politikası</Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
