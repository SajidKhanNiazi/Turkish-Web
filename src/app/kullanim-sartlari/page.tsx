import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "Yazı Stilleri Pro kullanım şartları ve yasal uyarılar.",
};

export default function TermsPage() {
  return (
    <main className="py-20 md:py-32 bg-[#0B0F1A]">
      <Container>
        <div className="mx-auto max-w-3xl prose prose-invert prose-indigo">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight">Kullanım Şartları</h1>
          
          <p className="text-gray-400">Son güncelleme: 24 Mart 2026</p>

          <p>
            Yazı Stilleri Pro web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.
          </p>

          <h2 className="text-white">1. Hizmet Kullanımı</h2>
          <p>
            Bu web sitesi, metinleri Unicode karakterlerine dönüştürmek için ücretsiz bir araç sunar. Sitenin kötüye kullanımı, otomatik yazılımlarla (bot) aşırı yüklenmesi yasaktır.
          </p>

          <h2 className="text-white">2. Sorumluluk Reddi</h2>
          <p>
            Araçlarımızı kullanırken oluşan herhangi bir veri kaybı, platform kısıtlaması (örneğin sosyal medya hesabınızın metin nedeniyle uyarı alması) veya uyumluluk sorunundan Yazı Stilleri Pro sorumlu tutulamaz. Hizmet &quot;olduğu gibi&quot; sunulmaktadır.
          </p>

          <h2 className="text-white">3. Telif Hakları</h2>
          <p>
            Sitenin tasarımı, içeriği ve markası Yazı Stilleri Pro&apos;ya aittir. İçeriğin izinsiz kopyalanması veya ticari amaçla kullanılması yasaktır. Unicode karakterlerinin kendisi açık standartlardır ve mülkiyetimize dahil değildir.
          </p>

          <h2 className="text-white">4. Değişiklik Hakları</h2>
          <p>
            Bu şartları dilediğimiz zaman güncelleme hakkını saklı tutarız. Siteyi kullanmaya devam ederek güncel şartları kabul etmiş sayılırsınız.
          </p>
        </div>
      </Container>
    </main>
  );
}
