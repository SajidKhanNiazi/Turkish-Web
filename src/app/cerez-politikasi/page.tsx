import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import Link from "next/link";
import { Cookie, Settings, BarChart3, Megaphone, ShieldCheck, Monitor, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Çerez Politikası — Çerez Kullanım Bilgilendirmesi",
  description:
    "Yazı Stilleri Pro çerez politikası. Sitemizde hangi çerezlerin kullanıldığını, ne amaçla kullanıldığını ve çerez tercihlerinizi nasıl yönetebileceğinizi öğrenin.",
  alternates: {
    canonical: "/cerez-politikasi",
  },
};

const lastUpdated = "20 Mayıs 2026";

export default function CookiePolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Çerez Politikası",
    description: metadata.description,
    url: "https://yazistilleripro.com.tr/cerez-politikasi",
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
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
                  <Cookie className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Çerez Bilgilendirmesi
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Çerez Politikası
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Bu sayfa, Yazı Stilleri Pro web sitesinin çerezleri nasıl ve neden kullandığını 
                açıklamaktadır. Sitemizi ziyaret ederek çerez kullanımımızı kabul etmiş sayılırsınız. 
                Çerez tercihlerinizi istediğiniz zaman tarayıcınız üzerinden yönetebilirsiniz.
              </p>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                Son Güncelleme: {lastUpdated}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* What Are Cookies */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <Cookie className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">1. Çerez Nedir?</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Çerezler (cookies), bir web sitesini ziyaret ettiğinizde tarayıcınıza yerleştirilen 
                    küçük metin dosyalarıdır. Bu dosyalar, web sitesinin sizi tanımasına, tercihlerinizi 
                    hatırlamasına ve size daha iyi bir deneyim sunmasına yardımcı olur.
                  </p>
                  <p>
                    Çerezler zararlı yazılım değildir. Bilgisayarınıza zarar vermezler ve kişisel 
                    dosyalarınıza erişemezler. Neredeyse tüm modern web siteleri çerez kullanmaktadır 
                    ve bu, internet dünyasında standart bir uygulamadır.
                  </p>
                </div>
              </section>

              {/* Why We Use Cookies */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">2. Çerezleri Neden Kullanıyoruz?</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Yazı Stilleri Pro olarak çerezleri aşağıdaki amaçlarla kullanıyoruz:
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>Sitenin düzgün ve güvenli bir şekilde çalışmasını sağlamak</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>Ziyaretçi trafiğini ve kullanım alışkanlıklarını anonim olarak analiz etmek</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>Reklamları daha ilgi çekici ve kişiselleştirilmiş hale getirmek</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>Kullanıcı deneyimini sürekli iyileştirmek için veri toplamak</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Cookie Types */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-white">3. Kullanılan Çerez Türleri</h2>
                </div>
                <div className="space-y-6">
                  {/* Essential */}
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h3 className="text-white font-semibold text-lg">Zorunlu Çerezler</h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Gerekli
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Bu çerezler, web sitemizin temel işlevlerinin çalışması için gereklidir. 
                      Sayfa gezintisi, güvenlik ve erişilebilirlik gibi özellikleri sağlar. Bu 
                      çerezler olmadan site düzgün çalışamaz. Zorunlu çerezler devre dışı bırakılamaz.
                    </p>
                  </div>

                  {/* Analytics */}
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <h3 className="text-white font-semibold text-lg">Analitik Çerezler</h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Anonim
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      Google Analytics gibi analitik araçlar tarafından yerleştirilen bu çerezler, 
                      ziyaretçilerin sitemizi nasıl kullandığını anlamamıza yardımcı olur. Toplanan 
                      veriler tamamen anonimdir ve sizi bireysel olarak tanımlamamıza olanak tanımaz.
                    </p>
                    <div className="text-xs text-gray-500 bg-white/[0.02] rounded-xl p-4 space-y-1">
                      <p><strong className="text-gray-400">Sağlayıcı:</strong> Google Analytics</p>
                      <p><strong className="text-gray-400">Amaç:</strong> Sayfa görüntüleme, oturum süresi, trafik kaynağı analizi</p>
                      <p><strong className="text-gray-400">Süre:</strong> Oturum bazlı veya 2 yıla kadar</p>
                    </div>
                  </div>

                  {/* Advertising */}
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <Megaphone className="w-5 h-5" />
                      </div>
                      <h3 className="text-white font-semibold text-lg">Reklam Çerezleri</h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        Üçüncü Taraf
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      Google AdSense ve diğer reklam ortakları, size ilgi alanlarınıza uygun 
                      reklamlar göstermek için çerezler kullanabilir. Bu çerezler, diğer sitelerdeki 
                      gezinme alışkanlıklarınıza dayalı olarak reklam içeriklerini kişiselleştirir.
                    </p>
                    <div className="text-xs text-gray-500 bg-white/[0.02] rounded-xl p-4 space-y-1">
                      <p><strong className="text-gray-400">Sağlayıcı:</strong> Google AdSense, Google Ad Manager</p>
                      <p><strong className="text-gray-400">Amaç:</strong> Kişiselleştirilmiş reklam sunumu</p>
                      <p><strong className="text-gray-400">Yönetim:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">Google Reklam Ayarları</a></p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Managing Cookies */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">4. Çerez Tercihlerinizi Yönetme</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Çerezleri istediğiniz zaman tarayıcı ayarlarınız üzerinden kontrol edebilirsiniz. 
                    Aşağıda popüler tarayıcılar için çerez ayarları bağlantılarını bulabilirsiniz:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] p-4 hover:bg-white/[0.06] transition-colors group"
                    >
                      <span className="text-xl">🌐</span>
                      <span className="text-white font-medium group-hover:text-indigo-400 transition-colors">Google Chrome</span>
                    </a>
                    <a
                      href="https://support.mozilla.org/tr/kb/cerezleri-silme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] p-4 hover:bg-white/[0.06] transition-colors group"
                    >
                      <span className="text-xl">🦊</span>
                      <span className="text-white font-medium group-hover:text-indigo-400 transition-colors">Mozilla Firefox</span>
                    </a>
                    <a
                      href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] p-4 hover:bg-white/[0.06] transition-colors group"
                    >
                      <span className="text-xl">🧭</span>
                      <span className="text-white font-medium group-hover:text-indigo-400 transition-colors">Safari</span>
                    </a>
                    <a
                      href="https://support.microsoft.com/tr-tr/microsoft-edge/microsoft-edge-de-tanımlama-bilgilerini-silme-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] p-4 hover:bg-white/[0.06] transition-colors group"
                    >
                      <span className="text-xl">🔵</span>
                      <span className="text-white font-medium group-hover:text-indigo-400 transition-colors">Microsoft Edge</span>
                    </a>
                  </div>
                  <div className="rounded-2xl bg-amber-500/5 border border-amber-500/20 p-5 mt-4">
                    <p className="text-amber-200/80 text-sm">
                      <strong>Önemli:</strong> Çerezleri devre dışı bırakmanız durumunda sitemizin bazı 
                      özellikleri düzgün çalışmayabilir. Zorunlu çerezler sitenin temel işlevleri için 
                      gereklidir.
                    </p>
                  </div>
                </div>
              </section>

              {/* Google AdSense Specific */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-white">5. Google Reklam Çerezleri Hakkında</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Google, reklamların kişiselleştirilmesi amacıyla DoubleClick DART çerezi ve benzeri 
                    teknolojiler kullanabilir. Bu çerezler, sizin ve diğer web sitelerindeki ziyaretlerinize 
                    dayalı olarak reklam sunar.
                  </p>
                  <p>
                    Kişiselleştirilmiş reklamları devre dışı bırakmak için{" "}
                    <a
                      href="https://adssettings.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
                    >
                      Google Reklam Ayarları
                    </a>{" "}
                    sayfasını ziyaret edebilirsiniz. Ayrıca{" "}
                    <a
                      href="https://optout.networkadvertising.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
                    >
                      Network Advertising Initiative
                    </a>{" "}
                    üzerinden de reklam çerezlerinden çıkabilirsiniz.
                  </p>
                </div>
              </section>

              {/* Updates */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-white">6. Politika Güncellemeleri</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Çerez politikamızı zaman zaman güncelleyebiliriz. Önemli değişiklikler 
                    yapıldığında, bu sayfadaki güncelleme tarihi yenilenir. Çerez kullanımımız 
                    hakkında güncel bilgi sahibi olmak için bu sayfayı düzenli olarak kontrol 
                    etmenizi öneririz.
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
                    <h2 className="text-xl font-bold text-white mb-3">Çerezler hakkında sorunuz mu var?</h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Çerez politikamızla ilgili sorularınız için{" "}
                      <Link href="/iletisim" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">
                        İletişim
                      </Link>{" "}
                      sayfamız üzerinden bize ulaşabilirsiniz.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <Link href="/gizlilik" className="hover:text-indigo-400 transition-colors underline underline-offset-4">
                        Gizlilik Politikası
                      </Link>
                      <span>·</span>
                      <Link href="/kullanim-sartlari" className="hover:text-indigo-400 transition-colors underline underline-offset-4">
                        Kullanım Şartları
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
