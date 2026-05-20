import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import Link from "next/link";
import { ScrollText, Gavel, ShieldCheck, AlertTriangle, Globe, RefreshCw, FileWarning, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Kullanım Şartları — Hizmet Koşullarımız",
  description:
    "Yazı Stilleri Pro kullanım şartları. Aracımızı kullanırken geçerli olan kurallar, sorumluluklar, fikri mülkiyet hakları ve hizmet sınırlamaları hakkında bilgi edinin.",
  alternates: {
    canonical: "/kullanim-sartlari",
  },
};

const lastUpdated = "20 Mayıs 2026";

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kullanım Şartları",
    description: metadata.description,
    url: "https://yazistilleripro.com.tr/kullanim-sartlari",
    inLanguage: "tr",
    isPartOf: {
      "@type": "WebSite",
      name: "Yazı Stilleri Pro",
      url: "https://yazistilleripro.com.tr",
    },
    dateModified: "2026-05-20",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="py-20 md:py-32 bg-[#0B0F1A]">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Hero */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <ScrollText className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Yasal Bilgiler
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Kullanım Şartları
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Yazı Stilleri Pro web sitesini ve araçlarını kullanarak aşağıdaki şartları okuduğunuzu 
                ve kabul ettiğinizi beyan etmiş olursunuz. Bu şartlar, sitemizi güvenli ve adil bir 
                şekilde kullanabilmeniz için hazırlanmıştır.
              </p>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                Son Güncelleme: {lastUpdated}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Section 1 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">1. Hizmet Tanımı</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Yazı Stilleri Pro, kullanıcıların düz metinlerini çeşitli Unicode yazı stillerine 
                    dönüştürmelerine olanak tanıyan ücretsiz bir çevrimiçi araçtır. Aracımız, sosyal 
                    medya platformları (Instagram, TikTok, WhatsApp), oyunlar (PUBG, Free Fire) ve 
                    diğer dijital platformlar için şekilli ve dekoratif yazılar oluşturmanıza yardımcı olur.
                  </p>
                  <p>
                    Tüm dönüştürme işlemleri tarayıcınızda gerçekleşir. Herhangi bir hesap oluşturmanıza, 
                    yazılım indirmenize veya ödeme yapmanıza gerek yoktur. Aracımız herkese açık ve 
                    ücretsizdir.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">2. Kullanım Kuralları</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Sitemizi kullanırken aşağıdaki kurallara uymanız gerekmektedir:
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Aracı yalnızca yasal ve etik amaçlarla kullanabilirsiniz.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Oluşturulan yazıları nefret söylemi, taciz, dolandırıcılık veya yasa dışı faaliyetler için kullanamazsınız.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Siteyi otomatik araçlar (bot, scraper, crawler) ile aşırı şekilde yükleyemezsiniz.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Sitemizin güvenliğini tehlikeye atacak herhangi bir girişimde bulunamazsınız.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Sitemizin kaynak kodunu izinsiz kopyalayamaz, değiştiremez veya dağıtamazsınız.</span>
                    </li>
                  </ul>
                  <p>
                    Bu kurallara uymayan kullanıcıların siteye erişimi kısıtlanabilir.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <Gavel className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">3. Fikri Mülkiyet Hakları</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Yazı Stilleri Pro web sitesinin tasarımı, logosu, metinleri, grafikleri ve yazılım 
                    kodu tamamen Yazı Stilleri Pro ekibine aittir ve telif hakkı ile korunmaktadır.
                  </p>
                  <p>
                    <strong className="text-white">Önemli açıklama:</strong> Aracımızla oluşturulan 
                    yazı stilleri, Unicode Konsorsiyumu tarafından tanımlanan açık standart karakterlere 
                    dayanmaktadır. Unicode karakterlerinin kendisi herkese açıktır ve mülkiyetimize 
                    dahil değildir. Ancak bu karakterleri dönüştürmek için kullandığımız algoritma, 
                    arayüz tasarımı ve site içeriği tarafımıza aittir.
                  </p>
                  <p>
                    Sitemizin içeriğini kaynak göstermeden kopyalamak, çoğaltmak veya ticari amaçla 
                    kullanmak yasaktır.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">4. Sorumluluk Sınırlamaları</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Yazı Stilleri Pro, hizmetini <strong className="text-white">&quot;olduğu gibi&quot;</strong> sunmaktadır. 
                    Aşağıdaki konularda herhangi bir garanti verilmemektedir:
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span><strong className="text-white">Platform uyumluluğu:</strong> Oluşturulan şekilli yazıların tüm sosyal medya platformlarında, oyunlarda veya uygulamalarda sorunsuz gösterilmesi garanti edilemez. Platformlar kendi kurallarını belirler.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span><strong className="text-white">Kesintisiz erişim:</strong> Teknik bakım, güncellemeler veya öngörülemeyen durumlar nedeniyle site geçici olarak erişilemeyebilir.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span><strong className="text-white">Karakter desteği:</strong> Bazı Unicode karakterleri tüm cihazlarda veya yazı tiplerinde doğru görüntülenmeyebilir.</span>
                    </li>
                  </ul>
                  <p>
                    Aracımızı kullanırken oluşabilecek herhangi bir veri kaybından, hesap kısıtlamasından 
                    veya platform kaynaklı sorundan Yazı Stilleri Pro sorumlu tutulamaz. Daha fazla bilgi 
                    için{" "}
                    <Link href="/sorumluluk-reddi" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">
                      Sorumluluk Reddi
                    </Link>{" "}
                    sayfamızı inceleyebilirsiniz.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                    <FileWarning className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">5. Üçüncü Taraf Bağlantılar ve Reklamlar</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Sitemizde üçüncü taraf web sitelerine yönlendiren bağlantılar ve Google AdSense 
                    tarafından sunulan reklamlar bulunabilir. Bu dış kaynaklara tıkladığınızda sitemizden 
                    ayrılmış olursunuz.
                  </p>
                  <p>
                    Üçüncü taraf sitelerin içeriklerinden, gizlilik uygulamalarından veya güvenilirliğinden 
                    Yazı Stilleri Pro sorumlu değildir. Dış bağlantıları kendi takdirinizle kullanmanızı 
                    öneririz.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">6. Şartların Güncellenmesi</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Yazı Stilleri Pro, bu kullanım şartlarını herhangi bir zamanda güncelleme hakkını 
                    saklı tutar. Güncellemeler bu sayfada yayınlanacak ve &quot;Son Güncelleme&quot; tarihi 
                    değiştirilecektir.
                  </p>
                  <p>
                    Değişiklikler yayınlandıktan sonra sitemizi kullanmaya devam etmeniz, güncellenmiş 
                    şartları kabul ettiğiniz anlamına gelir. Bu nedenle bu sayfayı düzenli olarak kontrol 
                    etmenizi öneririz.
                  </p>
                </div>
              </section>

              {/* Section 7 - Governing Law */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-white">7. Uygulanacak Hukuk</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Bu kullanım şartları, Türkiye Cumhuriyeti kanunlarına tabidir. Herhangi bir 
                    anlaşmazlık durumunda Türkiye Cumhuriyeti mahkemeleri yetkilidir.
                  </p>
                </div>
              </section>

              {/* Contact CTA */}
              <section className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3">Bir sorunuz mu var?</h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Kullanım şartlarımızla ilgili sorularınızı{" "}
                      <Link href="/iletisim" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">
                        İletişim
                      </Link>{" "}
                      sayfamız üzerinden bize iletebilirsiniz.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <Link href="/gizlilik" className="hover:text-indigo-400 transition-colors underline underline-offset-4">
                        Gizlilik Politikası
                      </Link>
                      <span>·</span>
                      <Link href="/cerez-politikasi" className="hover:text-indigo-400 transition-colors underline underline-offset-4">
                        Çerez Politikası
                      </Link>
                      <span>·</span>
                      <Link href="/sorumluluk-reddi" className="hover:text-indigo-400 transition-colors underline underline-offset-4">
                        Sorumluluk Reddi
                      </Link>
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
