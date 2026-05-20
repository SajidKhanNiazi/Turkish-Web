import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Monitor, Globe, FileWarning, Info, Shield, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Sorumluluk Reddi Beyanı — Yasal Uyarılar",
  description:
    "Yazı Stilleri Pro sorumluluk reddi beyanı. Unicode uyumluluğu, platform davranışları ve hizmet sınırlamaları hakkında bilgilendirme.",
  alternates: { canonical: "/sorumluluk-reddi" },
};

const lastUpdated = "20 Mayıs 2026";

export default function DisclaimerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sorumluluk Reddi Beyanı",
    url: "https://yazistilleripro.com.tr/sorumluluk-reddi",
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
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400"><AlertTriangle className="w-8 h-8" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Yasal Bilgilendirme</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Sorumluluk Reddi Beyanı</h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Yazı Stilleri Pro&apos;yu kullanmadan önce aşağıdaki sorumluluk reddi beyanını okumanızı önemle rica ederiz. Bu sayfa, aracımızın kapsamını, sınırlarını ve sorumluluklarımızı açıkça belirtmektedir.
              </p>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />Son Güncelleme: {lastUpdated}
              </p>
            </div>

            <div className="space-y-12">
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400"><Info className="w-6 h-6" /></div>
                  <h2 className="text-2xl font-bold text-white">1. Genel Bilgilendirme</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>Yazı Stilleri Pro, kullanıcıların düz metinlerini çeşitli Unicode yazı stillerine dönüştürmelerine olanak tanıyan ücretsiz bir çevrimiçi araçtır. Sitemizde sunulan tüm hizmetler <strong className="text-white">&quot;olduğu gibi&quot;</strong> (as-is) sağlanmaktadır.</p>
                  <p>Aracımız yalnızca bilgilendirme ve eğlence amaçlı sunulmaktadır. Herhangi bir profesyonel hizmet, garanti veya taahhüt niteliği taşımaz.</p>
                </div>
              </section>

              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400"><FileWarning className="w-6 h-6" /></div>
                  <h2 className="text-2xl font-bold text-white">2. Unicode Karakter Uyumluluğu</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>Aracımızla oluşturulan yazı stilleri, Unicode Konsorsiyumu tarafından tanımlanmış standart karakterlere dayanmaktadır. Ancak şunlar söz konusu olabilir:</p>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" /><span>Bazı Unicode karakterleri tüm cihazlarda veya yazı tiplerinde aynı şekilde görüntülenmeyebilir.</span></li>
                    <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" /><span>Eski cihazlar bazı karakterleri boş kare (□) veya soru işareti (?) olarak gösterebilir.</span></li>
                    <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" /><span>Türkçe karakterlerin (ş, ç, ğ, ü, ö, ı) tüm Unicode stillerinde karşılığı bulunmayabilir.</span></li>
                  </ul>
                </div>
              </section>

              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400"><Globe className="w-6 h-6" /></div>
                  <h2 className="text-2xl font-bold text-white">3. Platform Uyumluluğu</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>Şekilli yazılar birçok platformda kullanılabilir. Ancak her platformun kendi kuralları ve kısıtlamaları vardır:</p>
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-lg shrink-0">📸</span>
                      <div><h3 className="text-white font-semibold text-sm">Instagram</h3><p className="text-sm">Biyografi ve paylaşımlarda Unicode yazılar genellikle sorunsuz çalışır. Ancak belirli karakterler zaman zaman filtrelenebilir.</p></div>
                    </div>
                    <div className="border-t border-white/[0.05] pt-4 flex items-start gap-3">
                      <span className="text-lg shrink-0">🎮</span>
                      <div><h3 className="text-white font-semibold text-sm">PUBG / Free Fire</h3><p className="text-sm">Bazı Unicode karakterleri oyun isimleri için kabul edilirken, bazıları reddedilebilir.</p></div>
                    </div>
                    <div className="border-t border-white/[0.05] pt-4 flex items-start gap-3">
                      <span className="text-lg shrink-0">💬</span>
                      <div><h3 className="text-white font-semibold text-sm">WhatsApp / Discord</h3><p className="text-sm">Şekilli yazılar genellikle sorunsuz görüntülenir. Karşı tarafın cihaz desteği sonucu etkileyebilir.</p></div>
                    </div>
                  </div>
                  <p><strong className="text-white">Yazı Stilleri Pro, üçüncü taraf platformların davranışlarından veya kısıtlamalarından sorumlu tutulamaz.</strong></p>
                </div>
              </section>

              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400"><AlertTriangle className="w-6 h-6" /></div>
                  <h2 className="text-2xl font-bold text-white">4. Garanti Vermeme</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>Yazı Stilleri Pro aşağıdaki konularda herhangi bir garanti vermez:</p>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" /><span>Sitenin her zaman kesintisiz ve hatasız çalışacağı</span></li>
                    <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" /><span>Oluşturulan yazıların her platformda doğru görüntüleneceği</span></li>
                    <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" /><span>Şekilli yazıların hesap kısıtlamalarına neden olmayacağı</span></li>
                  </ul>
                </div>
              </section>

              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400"><Monitor className="w-6 h-6" /></div>
                  <h2 className="text-2xl font-bold text-white">5. Dış İçerik ve Reklamlar</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>Sitemizde gösterilen reklamlar ve dış bağlantılar üçüncü taraf sağlayıcılar tarafından sunulmaktadır. Bu içeriklerin doğruluğundan veya güvenilirliğinden Yazı Stilleri Pro sorumlu değildir.</p>
                </div>
              </section>

              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400"><Shield className="w-6 h-6" /></div>
                  <h2 className="text-2xl font-bold text-white">6. Güvenlik Taahhüdümüz</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>Kullanıcılarımızın güvenliğini her zaman ön planda tutuyoruz:</p>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-start gap-3"><span className="mt-1 text-emerald-400 shrink-0">✓</span><span>Girdiğiniz metinler hiçbir sunucuda saklanmaz.</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1 text-emerald-400 shrink-0">✓</span><span>Kişisel veri toplamıyoruz.</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1 text-emerald-400 shrink-0">✓</span><span>Sitemiz SSL (HTTPS) ile korunmaktadır.</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1 text-emerald-400 shrink-0">✓</span><span>Tüm dönüştürme işlemleri tarayıcınızda gerçekleşir.</span></li>
                  </ul>
                </div>
              </section>

              <section className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0"><Mail className="w-6 h-6" /></div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3">Sorularınız mı var?</h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Sorumluluk reddi beyanımızla ilgili sorularınız için{" "}
                      <Link href="/iletisim" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">İletişim</Link> sayfamız üzerinden bize ulaşabilirsiniz.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <Link href="/kullanim-sartlari" className="hover:text-indigo-400 transition-colors underline underline-offset-4">Kullanım Şartları</Link>
                      <span>·</span>
                      <Link href="/gizlilik" className="hover:text-indigo-400 transition-colors underline underline-offset-4">Gizlilik Politikası</Link>
                      <span>·</span>
                      <Link href="/hakkimizda" className="hover:text-indigo-400 transition-colors underline underline-offset-4">Hakkımızda</Link>
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
