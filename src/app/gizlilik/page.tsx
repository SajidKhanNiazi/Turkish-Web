import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, Cookie, Server, UserCheck, ExternalLink, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Verileriniz Bizim İçin Önemli",
  description:
    "Yazı Stilleri Pro gizlilik politikası. Hangi verileri topluyoruz, nasıl kullanıyoruz ve haklarınız nelerdir? Şeffaf, güncel ve KVKK uyumlu gizlilik ilkelerimizi inceleyin.",
  alternates: {
    canonical: "/gizlilik",
  },
};

const lastUpdated = "20 Mayıs 2026";

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gizlilik Politikası",
    description: metadata.description,
    url: "https://yazistilleripro.com.tr/gizlilik",
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
                  <Shield className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Şeffaflık & Güvenlik
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Gizlilik Politikası
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Yazı Stilleri Pro olarak kullanıcılarımızın gizliliğine büyük önem veriyoruz. 
                Bu politika, sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını, nasıl 
                kullanıldığını ve haklarınızı açıkça anlatmak için hazırlanmıştır.
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
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">1. Temel İlkemiz: Veri Toplamıyoruz</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Yazı Stilleri Pro, bir metin dönüştürme aracıdır. Aracımızı kullanırken yazdığınız 
                    metinler <strong className="text-white">hiçbir sunucuya gönderilmez</strong> ve 
                    hiçbir yerde saklanmaz. Tüm yazı dönüştürme işlemleri tamamen tarayıcınızda 
                    (client-side) gerçekleşir.
                  </p>
                  <p>
                    Sitemizde kayıt, üyelik veya giriş sistemi bulunmaz. Adınız, e-posta adresiniz, 
                    telefon numaranız veya herhangi bir kişisel bilginiz tarafımızca istenmez ya da toplanmaz.
                  </p>
                  <p>
                    Kısacası: <strong className="text-indigo-300">Girdiğiniz metin yalnızca sizin cihazınızda 
                    kalır.</strong> Bu konuda tamamen şeffafız.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <Cookie className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">2. Çerezler (Cookies)</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Sitemiz, deneyiminizi iyileştirmek ve hizmet kalitesini analiz etmek amacıyla çerezler 
                    kullanabilir. Çerezler, tarayıcınıza yerleştirilen küçük metin dosyalarıdır ve aşağıdaki 
                    amaçlarla kullanılır:
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span><strong className="text-white">Zorunlu çerezler:</strong> Sitenin düzgün çalışması için gerekli temel çerezler.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span><strong className="text-white">Analitik çerezler:</strong> Google Analytics gibi araçlarla site trafiğini ve kullanıcı davranışlarını anonim olarak analiz etmek için kullanılır.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span><strong className="text-white">Reklam çerezleri:</strong> Google AdSense gibi üçüncü taraf reklam sağlayıcıları, size ilgi alanlarınıza uygun reklamlar sunmak için çerezler kullanabilir.</span>
                    </li>
                  </ul>
                  <p>
                    Çerezler hakkında daha fazla bilgi için{" "}
                    <Link href="/cerez-politikasi" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">
                      Çerez Politikası
                    </Link>{" "}
                    sayfamızı ziyaret edebilirsiniz.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">3. Analitik ve Performans Verileri</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Sitemizi sürekli geliştirmek ve kullanıcı deneyimini iyileştirmek için Google Analytics 
                    gibi üçüncü taraf analitik araçları kullanıyoruz. Bu araçlar aşağıdaki verileri 
                    <strong className="text-white"> anonim olarak</strong> toplayabilir:
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Ziyaret edilen sayfalar ve oturum süresi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Tarayıcı türü ve işletim sistemi bilgileri</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Cihaz tipi (mobil, masaüstü, tablet)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Yaklaşık konum bilgisi (şehir düzeyinde, IP anonimleştirmeli)</span>
                    </li>
                  </ul>
                  <p>
                    Bu veriler yalnızca istatistiksel amaçlarla kullanılır ve sizi bireysel olarak 
                    tanımlamamıza olanak tanımaz.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <Server className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">4. Üçüncü Taraf Hizmetler</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Sitemizde aşağıdaki üçüncü taraf hizmetler kullanılmaktadır:
                  </p>
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-6 space-y-4">
                    <div>
                      <h3 className="text-white font-semibold mb-1">Google Analytics</h3>
                      <p className="text-sm">Site trafiği ve kullanıcı davranışlarını anonim olarak analiz eder. Google&apos;ın gizlilik politikası için: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">policies.google.com/privacy</a></p>
                    </div>
                    <div className="border-t border-white/[0.05] pt-4">
                      <h3 className="text-white font-semibold mb-1">Google AdSense</h3>
                      <p className="text-sm">Sitemizde gösterilen reklamlar Google AdSense tarafından sunulabilir. AdSense, reklamları kişiselleştirmek için çerezler kullanabilir. Daha fazla bilgi: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">policies.google.com/technologies/ads</a></p>
                    </div>
                    <div className="border-t border-white/[0.05] pt-4">
                      <h3 className="text-white font-semibold mb-1">Hosting & CDN</h3>
                      <p className="text-sm">Sitemiz güvenilir hosting altyapısı üzerinde barındırılmaktadır. Sunucu logları (erişim logları) standart güvenlik prosedürü kapsamında geçici olarak tutulabilir.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">5. Haklarınız</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Kişisel Verilerin Korunması Kanunu (KVKK) ve genel gizlilik ilkeleri kapsamında 
                    aşağıdaki haklara sahipsiniz:
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Hakkınızda herhangi bir veri toplanıp toplanmadığını öğrenme</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Tarayıcınızdaki çerezleri istediğiniz zaman silme veya engelleme</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Reklam kişiselleştirmeyi Google Reklam Ayarları üzerinden yönetme</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Gizlilik ile ilgili sorularınızı bize iletme</span>
                    </li>
                  </ul>
                  <p>
                    Sitemiz kişisel veri toplamadığı için, silme veya düzeltme talebinde bulunmanızı 
                    gerektirecek bir durum normalde oluşmaz. Yine de her türlü sorunuz için bizimle 
                    iletişime geçebilirsiniz.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">6. Dış Bağlantılar</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Sitemiz, bilgilendirme amacıyla dış web sitelerine bağlantılar içerebilir. Bu 
                    bağlantılara tıkladığınızda sitemizden ayrılmış olursunuz. Dış sitelerin gizlilik 
                    uygulamaları üzerinde herhangi bir kontrolümüz bulunmadığından, bu sitelerin gizlilik 
                    politikalarını ayrıca incelemenizi öneririz.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">7. Güvenlik</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Yazı Stilleri Pro olarak web sitemizin güvenliğini ciddiye alıyoruz. Sitemiz SSL 
                    (HTTPS) şifrelemesi ile korunmaktadır. Kullanıcı verileri toplamadığımız için veri 
                    ihlali riski minimumda tutulmaktadır.
                  </p>
                  <p>
                    Tüm metin dönüştürme işlemleri istemci tarafında (tarayıcınızda) gerçekleştirildiğinden, 
                    verileriniz internet üzerinden herhangi bir sunucuya aktarılmaz.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-white">8. Politika Güncellemeleri</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler yapıldığında, 
                    bu sayfadaki &quot;Son Güncelleme&quot; tarihi yenilenecektir. Değişikliklerden haberdar 
                    olmak için bu sayfayı düzenli olarak kontrol etmenizi öneririz.
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
                    <h2 className="text-xl font-bold text-white mb-3">Sorularınız mı var?</h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Gizlilik politikamızla ilgili her türlü sorunuz için{" "}
                      <Link href="/iletisim" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">
                        İletişim
                      </Link>{" "}
                      sayfamız üzerinden bize ulaşabilirsiniz. Size en kısa sürede dönüş yapmaya 
                      çalışacağız.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <Link href="/kullanim-sartlari" className="hover:text-indigo-400 transition-colors underline underline-offset-4">
                        Kullanım Şartları
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
