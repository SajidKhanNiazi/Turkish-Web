import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import Link from "next/link";
import { Users, Target, Lightbulb, Rocket, Heart, Globe, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda — Yazı Stilleri Pro Hikayesi",
  description:
    "Yazı Stilleri Pro'yu neden kurduk? Kim için geliştiriyoruz? Misyonumuz, vizyonumuz ve Türkiye'nin en kapsamlı şekilli yazı aracı olma hedefimizi keşfedin.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Hakkımızda",
    description: metadata.description,
    url: "https://yazistilleripro.com.tr/hakkimizda",
    inLanguage: "tr",
    isPartOf: {
      "@type": "WebSite",
      name: "Yazı Stilleri Pro",
      url: "https://yazistilleripro.com.tr",
    },
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
                  <Users className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Hikayemiz
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Hakkımızda
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                Yazı Stilleri Pro, Türkiye&apos;deki sosyal medya kullanıcıları ve oyun severler 
                için tasarlanmış <strong className="text-white">ücretsiz bir şekilli yazı oluşturucu</strong> aracıdır. 
                Amacımız, herkesin dijital dünyada kendini daha yaratıcı ifade etmesini sağlamaktır.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Story Section */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Nasıl Başladık?</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Her şey basit bir ihtiyaçtan doğdu. Instagram biyografilerine, PUBG oyun isimlerine 
                    veya WhatsApp mesajlarına farklı ve dikkat çekici yazılar eklemek isteyenlerin sayısı 
                    her geçen gün artıyordu. Ancak Türkçe kullanıcılar için hazırlanmış, hızlı, güvenilir 
                    ve kullanımı kolay bir araç bulmak zordu.
                  </p>
                  <p>
                    İşte Yazı Stilleri Pro tam bu noktada ortaya çıktı. <strong className="text-white">Türk 
                    kullanıcıların ihtiyaçlarını anlayan</strong>, Türkçe karakterleri destekleyen ve 
                    modern bir arayüze sahip bir araç geliştirmek istedik.
                  </p>
                  <p>
                    Bugün, onlarca farklı yazı stili, sembol koleksiyonları ve özelleştirilebilir nick 
                    yazma araçlarıyla Türkiye&apos;nin en kapsamlı şekilli yazı platformlarından biriyiz.
                  </p>
                </div>
              </section>

              {/* Who We Serve */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Kimler İçin Geliştiriyoruz?</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Yazı Stilleri Pro, dijital dünyada öne çıkmak isteyen herkes için tasarlandı:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-5">
                      <span className="text-2xl mb-2 block">📸</span>
                      <h3 className="text-white font-semibold mb-1">Instagram Kullanıcıları</h3>
                      <p className="text-sm">Bio, story ve paylaşımlarınızda fark yaratmak isteyenler.</p>
                    </div>
                    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-5">
                      <span className="text-2xl mb-2 block">🎮</span>
                      <h3 className="text-white font-semibold mb-1">Oyuncular</h3>
                      <p className="text-sm">PUBG, Free Fire ve diğer oyunlarda havalı nickler oluşturmak isteyenler.</p>
                    </div>
                    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-5">
                      <span className="text-2xl mb-2 block">🎬</span>
                      <h3 className="text-white font-semibold mb-1">TikTok İçerik Üreticileri</h3>
                      <p className="text-sm">Profil ve içeriklerinde dikkat çekici fontlar kullanmak isteyenler.</p>
                    </div>
                    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-5">
                      <span className="text-2xl mb-2 block">💬</span>
                      <h3 className="text-white font-semibold mb-1">Mesajlaşma Tutkunları</h3>
                      <p className="text-sm">WhatsApp, Discord ve Telegram&apos;da mesajlarını farklılaştırmak isteyenler.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Neden Yazı Stilleri Pro?</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="mt-1 text-emerald-400 shrink-0">✓</span>
                      <div>
                        <strong className="text-white">Tamamen Ücretsiz:</strong> Tüm araçlarımız ve yazı stillerimiz hiçbir ücret talep etmeden kullanımınıza sunulmaktadır. Gizli ücret veya premium abonelik yoktur.
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-1 text-emerald-400 shrink-0">✓</span>
                      <div>
                        <strong className="text-white">Anlık Dönüştürme:</strong> Metninizi yazdığınız anda tüm stiller otomatik olarak güncellenir. Bekleme süresi yoktur.
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-1 text-emerald-400 shrink-0">✓</span>
                      <div>
                        <strong className="text-white">Türkçe Karakter Desteği:</strong> Ş, ç, ğ, ü, ö, ı gibi Türkçe karakterler dikkate alınarak geliştirilmiştir.
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-1 text-emerald-400 shrink-0">✓</span>
                      <div>
                        <strong className="text-white">Kayıt Gerektirmez:</strong> Hesap oluşturmanıza gerek yok. Siteye girip hemen kullanmaya başlayabilirsiniz.
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-1 text-emerald-400 shrink-0">✓</span>
                      <div>
                        <strong className="text-white">Gizlilik Odaklı:</strong> Metinleriniz hiçbir sunucuda saklanmaz. Her şey tarayıcınızda kalır.
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-1 text-emerald-400 shrink-0">✓</span>
                      <div>
                        <strong className="text-white">Mobil Uyumlu:</strong> Telefondan, tabletten veya bilgisayardan sorunsuz şekilde kullanılabilir.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Mission */}
              <section className="rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Misyonumuz</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    <em>
                      &quot;Herkesin dijital kimliğini yaratıcı ve özgün bir şekilde ifade edebilmesi 
                      için en hızlı, en güvenli ve en kapsamlı Türkçe yazı stili aracını sunmak.&quot;
                    </em>
                  </p>
                  <p className="text-gray-400">
                    Sosyal medya profilleri, oyun isimleri ve mesajlar — bunlar dijital kimliğimizin 
                    parçaları. Biz, bu parçaları güzelleştirmek için çalışıyoruz.
                  </p>
                </div>
              </section>

              {/* Vision */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Gelecek Vizyonumuz</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Yazı Stilleri Pro sürekli gelişiyor. Yakın gelecekte planladığımız yeniliklerden 
                    bazıları:
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>Daha fazla yazı stili ve Unicode karakter desteği</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>Gelişmiş sembol ve emoji koleksiyonları</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>Platforma özel yazı stili önerileri (Instagram, TikTok, PUBG vb.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>Kullanıcı deneyimini sürekli iyileştirecek arayüz güncellemeleri</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>Kapsamlı rehber içerikler ve nasıl yapılır kılavuzları</span>
                    </li>
                  </ul>
                  <p>
                    Amacımız, Yazı Stilleri Pro&apos;yu Türkiye&apos;nin en güvenilir ve en çok tercih edilen 
                    yazı stili platformu haline getirmektir.
                  </p>
                </div>
              </section>

              {/* Values */}
              <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Değerlerimiz</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-emerald-400" />
                      <h3 className="text-white font-semibold">Güvenlik</h3>
                    </div>
                    <p className="text-gray-400 text-sm">Kullanıcı gizliliği her şeyin önünde. Veri toplamıyoruz, takip etmiyoruz.</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-amber-400" />
                      <h3 className="text-white font-semibold">Hız</h3>
                    </div>
                    <p className="text-gray-400 text-sm">Araçlarımız anlık çalışır. Bekleme yok, reklam geçişi yok, doğrudan sonuç.</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-rose-400" />
                      <h3 className="text-white font-semibold">Kullanıcı Odaklılık</h3>
                    </div>
                    <p className="text-gray-400 text-sm">Her güncelleme, her yeni özellik kullanıcı geri bildirimleriyle şekilleniyor.</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.05] p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-white font-semibold">Erişilebilirlik</h3>
                    </div>
                    <p className="text-gray-400 text-sm">Ücretsiz, kayıt gerektirmeyen ve her cihazda çalışan bir platform sunuyoruz.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-8 md:p-10 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Hemen şekilli yazı oluşturmaya başlayın
                </h2>
                <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                  Aracımızı kullanarak metninizi saniyeler içinde onlarca farklı stile dönüştürün. 
                  Kopyalayın, yapıştırın, paylaşın.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
                  >
                    Yazı Oluşturucu&apos;ya Git
                  </Link>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/[0.1] text-white font-bold text-lg hover:bg-white/[0.05] transition-all"
                  >
                    Bize Ulaşın
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
