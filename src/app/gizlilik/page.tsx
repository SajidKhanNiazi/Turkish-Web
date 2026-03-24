import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Yazı Stilleri Pro",
  description: "Yazı Stilleri Pro gizlilik politikası ve veri kullanım detayları.",
};

export default function PrivacyPage() {
  return (
    <main className="py-20 md:py-32 bg-[#0B0F1A]">
      <Container>
        <div className="mx-auto max-w-3xl prose prose-invert prose-indigo">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight">Gizlilik Politikası</h1>
          
          <p className="text-gray-400">Son güncelleme: 24 Mart 2026</p>

          <p>
            Yazı Stilleri Pro (&quot;biz&quot;, &quot;tarafımızca&quot;), kullanıcı gizliliğine önem verir. Bu metin, web sitemizi ziyaret ettiğinizde hangi bilgilerin işlendiğini açıklar.
          </p>

          <h2 className="text-white">1. Veri Toplama</h2>
          <p>
            Web sitemiz, girdiğiniz metinleri sunucularımızda saklamaz. Tüm yazı dönüştürme işlemleri tarayıcınızda veya anlık olarak gerçekleşir. Kişisel verilerinizi toplamak için kayıt veya üyelik sistemi kullanmıyoruz.
          </p>

          <h2 className="text-white">2. Çerezler ve Analitik</h2>
          <p>
            Sitemizi geliştirmek ve kullanıcı deneyimini analiz etmek için Google Analytics gibi üçüncü taraf analitik araçları kullanabiliriz. Bu araçlar, IP adresiniz veya tarayıcı bilgileriniz gibi anonim verileri toplayabilir.
          </p>

          <h2 className="text-white">3. Dış Bağlantılar</h2>
          <p>
            Sitemiz, kontrolümüz dışındaki diğer web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından sorumlu değiliz.
          </p>

          <h2 className="text-white">4. İletişim</h2>
          <p>
            Gizlilik politikamızla ilgili sorularınız için bizimle iletişim sayfamız üzerinden irtibata geçebilirsiniz.
          </p>
        </div>
      </Container>
    </main>
  );
}
