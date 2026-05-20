import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/shared/FAQSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { HelpCircle, Sparkles } from "lucide-react";

const sssFaqs = [
  {
    question: "Şekilli yazı nasıl oluşturulur?",
    answer:
      "Yazı Stilleri Pro'nun ana sayfasındaki metin kutusuna istediğiniz metni yazın. Yazdığınız anda onlarca farklı yazı stili otomatik olarak oluşturulur. Beğendiğiniz stilin yanındaki 'Kopyala' butonuna tıklayarak metni panoya kopyalayabilir, ardından istediğiniz yere yapıştırabilirsiniz. Herhangi bir kayıt, indirme veya ödeme gerekmez.",
  },
  {
    question: "Instagram yazı stilleri nasıl kullanılır?",
    answer:
      "Instagram biyografinize veya paylaşımlarınıza şekilli yazı eklemek oldukça kolaydır. Yazı Stilleri Pro'da metninizi oluşturun, kopyalayın ve Instagram'da biyografi düzenleme ekranına veya yeni gönderi oluşturma alanına yapıştırın. Unicode yazılar Instagram tarafından desteklenir ve özel yazı tipi yüklemenize gerek yoktur.",
  },
  {
    question: "Yazı stilleri güvenli mi?",
    answer:
      "Evet, tamamen güvenlidir. Yazı Stilleri Pro'da girdiğiniz metinler hiçbir sunucuda saklanmaz. Tüm dönüştürme işlemleri tarayıcınızda (client-side) gerçekleşir. Kişisel veri toplamıyoruz ve hesap oluşturmanızı gerektirmiyoruz. Sitemiz SSL (HTTPS) ile korunmaktadır.",
  },
  {
    question: "PUBG şekilli isim nasıl yapılır?",
    answer:
      "PUBG için şekilli nick oluşturmak çok basittir. Yazı Stilleri Pro'daki nick yazma aracını kullanarak istediğiniz ismi yazın, beğendiğiniz stili kopyalayın ve PUBG'de isim değiştirme ekranına yapıştırın. Bazı Unicode karakterleri PUBG tarafından kabul edilmeyebilir; bu durumda farklı bir stil denemenizi öneririz.",
  },
  {
    question: "Unicode yazılar her cihazda çalışır mı?",
    answer:
      "Unicode yazılar çoğu modern cihazda sorunsuz çalışır. Ancak bazı eski cihazlar veya güncel olmayan işletim sistemleri, belirli Unicode karakterlerini desteklemeyebilir. Bu durumda karakterler boş kare veya soru işareti olarak görünebilir. En iyi sonuç için cihazınızın yazılımını güncel tutmanızı öneriyoruz.",
  },
  {
    question: "Yazı stilleri ücretsiz mi?",
    answer:
      "Evet, Yazı Stilleri Pro'daki tüm araçlar ve yazı stilleri tamamen ücretsizdir. Gizli ücret, premium abonelik veya kullanım limiti yoktur. Aracımızı dilediğiniz kadar kullanabilirsiniz.",
  },
  {
    question: "Türkçe karakterler (ş, ç, ğ, ü, ö, ı) destekleniyor mu?",
    answer:
      "Evet, aracımız Türkçe karakterleri dikkate alarak geliştirilmiştir. Ancak her Unicode stilinde tüm Türkçe karakterlerin karşılığı bulunmayabilir. Bu durumda orijinal karakter korunur veya en yakın alternatif kullanılır. Stil listesinde Türkçe desteği iyi olan stiller genellikle daha iyi sonuç verir.",
  },
  {
    question: "Oluşturulan yazıları nerelerde kullanabilirim?",
    answer:
      "Şekilli yazıları Instagram, TikTok, WhatsApp, Discord, Twitter/X, Facebook, Telegram, PUBG, Free Fire ve Unicode destekleyen hemen hemen her platformda kullanabilirsiniz. Ayrıca e-posta imzaları, forum profilleri ve web sitesi içeriklerinde de kullanılabilir.",
  },
  {
    question: "Neden bazı yazı stilleri bazı platformlarda çalışmıyor?",
    answer:
      "Her platform, hangi Unicode karakterlerini desteklediğine kendi kurallarıyla karar verir. Örneğin, bir oyun belirli Unicode bloklarını engelleyebilir veya bir sosyal medya platformu bazı karakterleri filtreleyebilir. Bu, Yazı Stilleri Pro'nun değil, ilgili platformun kısıtlamasıdır. Farklı stiller deneyerek uyumlu olanı bulabilirsiniz.",
  },
  {
    question: "WhatsApp'ta şekilli yazı nasıl kullanılır?",
    answer:
      "WhatsApp zaten kalın, italik ve üstü çizili yazıyı destekler, ancak bunlar sınırlıdır. Yazı Stilleri Pro ile çok daha fazla stil seçeneğine erişebilirsiniz. Metninizi aracımızda oluşturun, kopyalayın ve WhatsApp mesaj kutusuna yapıştırın. Karşı tarafın cihazı Unicode desteklediği sürece şekilli yazı doğru görüntülenecektir.",
  },
  {
    question: "Şekilli yazı ile normal yazı arasındaki fark nedir?",
    answer:
      "Normal yazılar standart Latin karakterlerinden oluşur (A-Z, a-z). Şekilli yazılar ise Unicode standardındaki farklı karakter bloklarından (Mathematical Symbols, Enclosed Alphanumerics vb.) gelen alternatif karakter temsilleridir. Görsel olarak farklı yazı tiplerine benzerler ancak aslında farklı Unicode kod noktalarıdır.",
  },
  {
    question: "Hesap oluşturmam gerekiyor mu?",
    answer:
      "Hayır, Yazı Stilleri Pro'yu kullanmak için herhangi bir hesap oluşturmanıza gerek yoktur. Siteye girdiğiniz anda tüm araçları ücretsiz olarak kullanabilirsiniz. E-posta, şifre veya kişisel bilgi istemiyoruz.",
  },
  {
    question: "Kaç farklı yazı stili mevcut?",
    answer:
      "Yazı Stilleri Pro'da şu anda 30'dan fazla farklı yazı stili bulunmaktadır. Bu stiller arasında kalın, italik, el yazısı, gotik, çerçeveli, daire içi, ters çevrilmiş ve daha birçok seçenek yer alır. Sürekli olarak yeni stiller eklemeye devam ediyoruz.",
  },
  {
    question: "Verilerim güvende mi? Metinlerimi kaydediyor musunuz?",
    answer:
      "Kesinlikle hayır. Girdiğiniz metinler hiçbir sunucuya gönderilmez ve hiçbir yerde saklanmaz. Tüm dönüştürme işlemleri tamamen tarayıcınızda gerçekleşir. Gizliliğinize olan saygımız, temel değerlerimizden biridir. Detaylar için Gizlilik Politikası sayfamızı inceleyebilirsiniz.",
  },
];

export const metadata: Metadata = {
  title: "SSS — Sık Sorulan Sorular",
  description:
    "Yazı Stilleri Pro hakkında sık sorulan sorular. Şekilli yazı nasıl oluşturulur? Unicode yazılar güvenli mi? Instagram, PUBG, WhatsApp için yazı stilleri nasıl kullanılır?",
  alternates: { canonical: "/sss" },
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={sssFaqs} />
      <main className="py-20 md:py-32 bg-[#0B0F1A]">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Destek & Bilgi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Sık Sorulan Sorular</h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Yazı Stilleri Pro hakkında merak ettiğiniz her şeyi burada bulabilirsiniz. Aracımızın nasıl çalıştığından güvenlik detaylarına, platform uyumluluğundan Türkçe karakter desteğine kadar tüm sorularınızın yanıtları aşağıdadır.
              </p>
            </div>

            <FAQSection
              title="Tüm Sorular"
              eyebrow="Yardım Merkezi"
              faqs={sssFaqs}
            />

            {/* CTA */}
            <div className="mt-16 space-y-6">
              <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 md:p-10">
                <h2 className="text-xl font-bold text-white mb-3">Sorunuz burada yok mu?</h2>
                <p className="text-gray-400 leading-relaxed">
                  Aradığınız cevabı bulamadıysanız, <Link href="/iletisim" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">İletişim</Link> sayfamız üzerinden bize yazabilirsiniz. Size en kısa sürede dönüş yapacağız.
                </p>
              </div>

              <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-8 md:p-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest">Hemen Deneyin</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Şekilli yazı oluşturmaya hazır mısınız?</h3>
                <p className="text-gray-400 mb-6">Metninizi girin, onlarca stili anında görün ve tek tıkla kopyalayın.</p>
                <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20">
                  Yazı Oluşturucu&apos;ya Git
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 pt-4">
                <Link href="/hakkimizda" className="hover:text-indigo-400 transition-colors underline underline-offset-4">Hakkımızda</Link>
                <span>·</span>
                <Link href="/gizlilik" className="hover:text-indigo-400 transition-colors underline underline-offset-4">Gizlilik Politikası</Link>
                <span>·</span>
                <Link href="/kullanim-sartlari" className="hover:text-indigo-400 transition-colors underline underline-offset-4">Kullanım Şartları</Link>
                <span>·</span>
                <Link href="/iletisim" className="hover:text-indigo-400 transition-colors underline underline-offset-4">İletişim</Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
