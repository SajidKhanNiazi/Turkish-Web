import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Clock, AlertCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim — Bize Ulaşın",
  description:
    "Yazı Stilleri Pro ekibiyle iletişime geçin. Soru, öneri, hata bildirimi, reklam iş birliği veya geri bildirimleriniz için bize e-posta gönderin.",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "İletişim",
    description: metadata.description,
    url: "https://yazistilleripro.com.tr/iletisim",
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
                  <MessageSquare className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Destek & İletişim
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Bize Ulaşın
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Yazı Stilleri Pro ekibine her konuda ulaşabilirsiniz. Soru, öneri, hata bildirimi, 
                reklam iş birliği veya geri bildirimlerinizi memnuniyetle karşılıyoruz. En kısa 
                sürede size dönüş yapacağız.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6">
              {/* Primary Email */}
              <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 group hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                      E-Posta Adresimiz
                    </h2>
                                    <a
                      href="mailto:Realtechstartips@gmail.com"
                      className="text-2xl md:text-3xl font-bold text-white hover:text-indigo-400 transition-colors"
                    >
                      Realtechstartips@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Yanıt Süresi
                    </h2>
                    <p className="text-white font-bold text-lg">Genellikle 24–48 saat içinde</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Hafta sonu veya yoğun dönemlerde yanıt süremiz uzayabilir. Sabrınız için teşekkür ederiz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Topics */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-8">Hangi konularda bize ulaşabilirsiniz?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">💬</span>
                    <h3 className="text-white font-semibold">Genel Sorular</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Aracımızın kullanımı, yazı stilleri veya Unicode karakterler hakkında her türlü sorunuzu sorabilirsiniz.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🐛</span>
                    <h3 className="text-white font-semibold">Hata Bildirimi</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Sitemizde bir hata veya sorun fark ettiyseniz, detaylı bilgi vererek bildirmenizi rica ederiz. Hızlıca düzeltelim.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">💡</span>
                    <h3 className="text-white font-semibold">Öneri & Geri Bildirim</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Yeni bir yazı stili mi istiyorsunuz? Bir özellik mi öneriyorsunuz? Fikirlerinizi duymaktan mutluluk duyarız.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🤝</span>
                    <h3 className="text-white font-semibold">İş Birliği & Reklam</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Reklam, sponsorluk veya içerik iş birliği teklifleriniz için bize e-posta gönderebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-12 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Platform uyumluluk sorunları hakkında</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Oluşturulan şekilli yazıların Instagram, PUBG, TikTok gibi platformlarda farklı 
                    görünmesi veya kabul edilmemesi, genellikle ilgili platformun kendi kısıtlamalarından 
                    kaynaklanmaktadır. Bu tür durumlarda önce{" "}
                    <Link href="/sss" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">
                      SSS sayfamızı
                    </Link>{" "}
                    kontrol etmenizi öneririz.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-8 md:p-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest">
                  Hemen Başlayın
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Şekilli yazı oluşturmaya hazır mısınız?
              </h3>
              <p className="text-gray-400 mb-6">
                Ana sayfamızdaki aracı kullanarak saniyeler içinde şık yazılar oluşturabilirsiniz.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
              >
                Yazı Oluşturucu&apos;ya Git
              </Link>
            </div>

            {/* Related Links */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <Link href="/hakkimizda" className="hover:text-indigo-400 transition-colors underline underline-offset-4">
                Hakkımızda
              </Link>
              <span>·</span>
              <Link href="/sss" className="hover:text-indigo-400 transition-colors underline underline-offset-4">
                Sık Sorulan Sorular
              </Link>
              <span>·</span>
              <Link href="/gizlilik" className="hover:text-indigo-400 transition-colors underline underline-offset-4">
                Gizlilik Politikası
              </Link>
              <span>·</span>
              <Link href="/kullanim-sartlari" className="hover:text-indigo-400 transition-colors underline underline-offset-4">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
