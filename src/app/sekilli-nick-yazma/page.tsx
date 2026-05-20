import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { NickGeneratorTool } from "@/components/generator/NickGeneratorTool";
import { ToolSchema } from "@/components/shared/ToolSchema";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { FAQSection } from "@/components/shared/FAQSection";
import { Sparkles, Zap, Smartphone, Trophy, Terminal, AlertTriangle, CheckCircle2 } from "lucide-react";

const pagePath = "/sekilli-nick-yazma";
const pageUrl = `${siteConfig.url}${pagePath}`;
const headline = "Şekilli Nick Yazma (2026) – Anında Şık Nick Oluşturma";
const pageDescription =
  "Şekilli nick yazma ile anında havalı ve dikkat çekici nick oluşturun. PUBG, Instagram ve Discord için en iyi şekilli nick örnekleri ve semboller burada.";

export const metadata: Metadata = {
  title: headline,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: headline,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: headline,
    description: pageDescription,
  },
};

export default function SekilliNickYazmaPillarPage() {
  const hubFaqs: { question: string; answer: string }[] = [
    {
      question: "Şekilli nick yazma nedir?",
      answer:
        "Şekilli nick yazma, normal harfleri matematiksel ve dekoratif Unicode karşılıklarıyla değiştirerek oyunda veya sosyal medyada farklı görünen kullanıcı adları üretme yöntemidir. Ekstra yazı tipi kurmanıza gerek kalmaz; metin panoya kopyalanıp yapıştırılır ve çoğu modern uygulamada desteklenir.",
    },
    {
      question: "Hızlı şekilde nasıl nick oluşturabilirim?",
      answer:
        "Bu sayfadaki ücretsiz oluşturucuya kelimenizi yazın, çıkan stillerden birini seçin ve kopyala düğmesine basın. Saniyeler içinde onlarca varyasyon görebilir; beğendiğinizi doğrudan PUBG, Discord veya Instagram gibi alanlara yapıştırabilirsiniz.",
    },
    {
      question: "PUBG neden nickimi kabul etmiyor?",
      answer:
        "PUBG Mobile ve benzeri oyunlar tüm Unicode sembollerini desteklemez; bazı özel karakterler reddedilir veya bozuk görünür. Daha az süslü, daha kısa kombinasyonlar deneyin ve mutlaka kaydetmeden önce önizlemede test edin.",
    },
    {
      question: "Şekilli nick kullanmak güvenli mi?",
      answer:
        "Evet: kullandığımız karakterler standart Unicode’dur ve güvenilir kaynaklardan üretildiği sürece hesabınıza zarar vermez. Yine de resmi oyun kurallarına aykırı veya hakaret içeren metinlerden kaçının.",
    },
    {
      question: "Instagram’da kullanabilir miyim?",
      answer:
        "Çoğu şekilli stil Instagram kullanıcı adı ve biyografide sorunsuz çalışır. Nadiren bazı karakterler mobil uygulamada farklı görünebilir; yayınlamadan önce profilinizde kısa bir kontrol yapmanız yeterlidir.",
    },
    {
      question: "Nickimi nasıl benzersiz yaparım?",
      answer:
        "Kısa bir kelime seçip birkaç nadir sembol, rakam veya farklı harf varyasyonu ekleyin. Hazır listelerden ilham alabilirsiniz; aynı kombinasyonu olduğu gibi kopyalamak yerine kendi dokunuşunuzu eklemek özgünlüğü artırır.",
    },
    {
      question: "Tüm cihazlarda aynı şekilde görünür mü?",
      answer:
        "Hayır: eski telefonlar veya sınırlı font desteği olan uygulamalar bazı stilleri kutu veya boşluk olarak gösterebilir. Önemli profillerde hem Android hem iOS’ta kısa bir kontrol yapmanızı öneririz.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: hubFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Şekilli nick oluşturma (3 yöntem)",
      description:
        "Şekilli nick elde etmek için araç kullanma, hazır metin kopyalama ve manuel sembol ekleme adımları.",
      inLanguage: "tr",
      step: [
        {
          "@type": "HowToStep",
          name: "Nick oluşturucu ile üret",
          text: "Kelimenizi yazın, listeden stil seçin ve kopyalayın; en hızlı ve tutarlı yöntemdir.",
        },
        {
          "@type": "HowToStep",
          name: "Hazır nick kopyala",
          text: "Rehberdeki veya arkadaşınızdaki beğendiğiniz şekilli metni panoya alıp kendi alanınıza yapıştırın.",
        },
        {
          "@type": "HowToStep",
          name: "Manuel sembol ekle",
          text: "★, ♛, ꧁ gibi sembolleri metnin başına veya sonuna ekleyerek kişisel bir görünüm oluşturun; abartmayın.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline,
      description: pageDescription,
      inLanguage: "tr",
      datePublished: "2026-01-15",
      dateModified: "2026-04-08",
      author: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
    },
  ];

  return (
    <main className="flex-1 flex flex-col font-sans">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "Şekilli Nick Yazma", item: pagePath },
        ]}
      />
      <ToolSchema
        name="Şekilli Nick Yazma Aracı"
        description={pageDescription}
        url={pagePath}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <NickGeneratorTool />
      
      {/* Article Content - Single Column Layout */}
      <section className="bg-[#0B0F1A] py-16 sm:py-24 border-t border-white/[0.03]">
        <Container className="max-w-4xl">
          <div className="space-y-12">
            <p className="text-center text-sm text-gray-500">
              Son güncelleme: 8 Nisan 2026
            </p>

            <nav
              aria-label="Rehber içeriği"
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <p className="mb-3 text-xs font-black uppercase tracking-widest text-indigo-400">
                İçindekiler
              </p>
              <ul className="grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                <li>
                  <a href="#ilgili-araclar" className="text-indigo-300 hover:underline">
                    İlgili nick araçları
                  </a>
                </li>
                <li>
                  <a href="#giris" className="text-indigo-300 hover:underline">
                    Giriş
                  </a>
                </li>
                <li>
                  <a href="#sec-nasil-calisir" className="text-indigo-300 hover:underline">
                    Nasıl çalışır
                  </a>
                </li>
                <li>
                  <a href="#sec-nedir" className="text-indigo-300 hover:underline">
                    Nedir?
                  </a>
                </li>
                <li>
                  <a href="#sec-ornekler" className="text-indigo-300 hover:underline">
                    Örnekler
                  </a>
                </li>
                <li>
                  <a href="#sec-nasil-yapilir" className="text-indigo-300 hover:underline">
                    Nasıl yapılır
                  </a>
                </li>
                <li>
                  <a href="#sec-platformlar" className="text-indigo-300 hover:underline">
                    Platformlar
                  </a>
                </li>
                <li>
                  <a href="#sss" className="text-indigo-300 hover:underline">
                    Sık sorulan sorular
                  </a>
                </li>
              </ul>
            </nav>

            <section
              id="ilgili-araclar"
              className="scroll-mt-24 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
              aria-labelledby="ilgili-araclar-baslik"
            >
              <h2
                id="ilgili-araclar-baslik"
                className="text-xl font-black text-white tracking-tight"
              >
                İlgili nick araçları
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Aşağıdaki sayfalarda oyun veya stile özel araçlar ve daha fazla örnek bulabilirsiniz.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                <li>
                  <Link
                    href="/sekilli-nick-yazma/havali-nick-yazma"
                    className="block rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 transition-colors hover:border-indigo-500/30 hover:bg-white/[0.05]"
                  >
                    <span className="font-bold text-white">Havalı nick yazma</span>
                    <span className="mt-1 block text-xs text-gray-500">
                      Cool ve şekilli kullanıcı adları, ipuçları ve hazır örnekler.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sekilli-nick-yazma/kalin-ozel-stilli-nickler"
                    className="block rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 transition-colors hover:border-indigo-500/30 hover:bg-white/[0.05]"
                  >
                    <span className="font-bold text-white">Kalın ve özel stilli nickler</span>
                    <span className="mt-1 block text-xs text-gray-500">
                      Vurgulu kalın Unicode stiller ve kopyala–yapıştır nickler.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sekilli-nick-yazma/pubg-sekilli-nick"
                    className="block rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 transition-colors hover:border-indigo-500/30 hover:bg-white/[0.05]"
                  >
                    <span className="font-bold text-white">PUBG şekilli nick</span>
                    <span className="mt-1 block text-xs text-gray-500">
                      PUBG Mobile uyumlu semboller ve nick oluşturucu.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sekilli-nick-yazma/free-fire-nickleri"
                    className="block rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 transition-colors hover:border-indigo-500/30 hover:bg-white/[0.05]"
                  >
                    <span className="font-bold text-white">Free Fire nickleri</span>
                    <span className="mt-1 block text-xs text-gray-500">
                      Free Fire için şekilli nick üretimi ve örnek listeler.
                    </span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* Intro Questions & Personal Narrative */}
            <div id="giris" className="scroll-mt-24 space-y-8">
              <h2 className="text-2xl font-bold text-indigo-400 m-0 p-0 h-auto leading-tight">
                Dikkat çeken bir nick bulmakta zorlanıyor musun?
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  İlk kez bir oyun profili için nick oluşturmaya çalıştığımı hatırlıyorum. Yazdığım her isim basit görünüyordu ve çoğu zaten alınmıştı. Diğer oyuncuların havalı ve şekilli nickler kullandığını görmek gerçekten sinir bozucuydu. Bugün birçok kullanıcı aynı sorunu yaşıyor ve kendine özgü bir kimlik oluşturmak istiyor.
                </p>
                <p>
                  Asıl sorun yaratıcılık değil, doğru araçları ve fikirleri bulamamak. İşte burada <span className="text-indigo-400 font-bold">şekilli nick yazma</span> devreye giriyor. Normal bir metni saniyeler içinde şık ve dikkat çekici bir nicke dönüştürebilirsin. Oluştur, kopyala ve hemen kullan. Sen de fark yaratmaya hazır mısın?
                </p>
              </div>
            </div>

            {/* Content Cards - Stacked Vertically */}
            <div className="space-y-10">
              {/* How it Works */}
              <article className="rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] shadow-lg">
                <h2
                  id="sec-nasil-calisir"
                  className="scroll-mt-24 text-2xl font-bold text-indigo-400 mb-6 flex items-center gap-3"
                >
                  <Zap className="w-6 h-6 text-yellow-500" />
                  Şekilli Nick Oluşturucu (Nasıl Çalışır)
                </h2>
                <p className="text-gray-400 mb-6 font-medium">İsmini yaz ve anında şekilli bir nicke dönüştür. Beğendiğin stili seç ve tek tıkla kopyala.</p>
                <ul className="space-y-3">
                  {[
                    "Hızlı şekilde şekilli nick oluştur",
                    "Tek tıkla kopyala",
                    "Farklı yazı stillerini dene",
                    "Oyunlarda ve sosyal medyada kullan"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 font-medium group">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              {/* What is it */}
              <article className="rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] shadow-lg">
                <h2
                  id="sec-nedir"
                  className="scroll-mt-24 text-2xl font-bold text-indigo-400 mb-6 flex items-center gap-3"
                >
                  <Terminal className="w-6 h-6" />
                  Şekilli Nick Yazma Nedir?
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6 font-medium">
                  Şekilli nick yazma, özel karakterler ve farklı yazı stilleri kullanarak nick oluşturma işlemidir. Bu stiller Unicode karakterleri ile oluşturulur ve çoğu platformda desteklenir.
                </p>
                <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 mb-6">
                  <div className="text-sm font-black uppercase text-indigo-400 mb-2 tracking-widest">Örnek:</div>
                  <div className="text-gray-300 font-medium">Normal: Player123</div>
                  <div className="text-white font-black text-xl tracking-wide mt-1">Şekilli: 𝓟𝓵𝓪𝔂𝓮𝓻✯123</div>
                </div>
                <p className="text-sm text-gray-500 italic">
                  Unicode hakkında detaylı bilgi için: <a href="https://home.unicode.org/" target="_blank" className="text-indigo-400 hover:underline font-bold">Unicode karakter sistemi</a>
                </p>
              </article>

              {/* Why Use It */}
              <article className="rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] shadow-lg">
                <h2
                  id="sec-neden"
                  className="scroll-mt-24 text-2xl font-bold text-indigo-400 mb-6"
                >
                  Neden Şekilli Nick Kullanılır?
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Daha dikkat çekici görünür",
                    "Farklı ve özgün olur",
                    "Kişiliğini yansıtır",
                    "Oyunlarda çok popülerdir"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-5 rounded-xl bg-white/[0.01] border-l-4 border-indigo-500/50 text-gray-400 italic text-lg leading-relaxed">
                  Deneyimlerime göre, şekilli nick kullanan kullanıcılar daha fazla dikkat çeker ve profilleri daha çok incelenir.
                </div>
              </article>

              {/* Categories / Examples */}
              <section className="rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] shadow-lg">
                <h2
                  id="sec-ornekler"
                  className="scroll-mt-24 text-2xl font-bold text-indigo-400 mb-10 flex items-center gap-3"
                >
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  En Güzel Şekilli Nick Örnekleri (Kopyala ve Kullan)
                </h2>
                
                <div className="grid gap-12 sm:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-white flex items-center gap-2 uppercase tracking-wide">🎮 PUBG Şekilli Nickler</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">『ᴳᵒᵈ』✯Killer</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">꧁༒Shadow༒꧂</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">乂Hunter乂</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-white flex items-center gap-2 uppercase tracking-wide">🔥 Havalı Nickler</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">★彡Legend彡★</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">♛ProMaster♛</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">⚡Storm⚡</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-white flex items-center gap-2 uppercase tracking-wide">💀 Karanlık Nickler</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">☠DarkSoul☠</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">♛NightKing♛</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">☣ShadowX☣</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-white flex items-center gap-2 uppercase tracking-wide">💎 Aesthetic Nickler</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">✿Dreamy✿</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">♡MoonLight♡</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">✧StarGirl✧</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-white flex items-center gap-2 uppercase tracking-wide">💕 Kız Nickleri</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">♡Queen♡</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">✿Angel✿</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">💕CuteStar💕</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-white flex items-center gap-2 uppercase tracking-wide">🧑 Erkek Nickleri</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">⚔Warrior⚔</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">🔥Blaze🔥</li>
                      <li className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.02] font-medium text-white/90">♛King♛</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How to Create */}
              <article className="rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] shadow-lg">
                <h2
                  id="sec-nasil-yapilir"
                  className="scroll-mt-24 text-2xl font-bold text-indigo-400 mb-10 flex items-center gap-3"
                >
                  Şekilli Nick Nasıl Yapılır? (3 Kolay Yöntem)
                </h2>
                <div className="grid gap-10 sm:grid-cols-3">
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-white uppercase tracking-wider">1. Araç Kullanarak</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">İsmini yaz, stil seç ve kopyala. En hızlı yöntem budur.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-white uppercase tracking-wider">2. Kopyala – Yapıştır</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">Hazır nicklerden birini seç ve direkt kullan.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-white uppercase tracking-wider">3. Manuel Sembol Kullanımı</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">★ veya ♛ gibi semboller ekleyerek kendi stilini oluştur.</p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-emerald-500/5 rounded-xl border-l-4 border-emerald-500/50 text-gray-400 text-sm italic font-medium leading-relaxed">
                  Deneyimlerime göre araç kullanmak hem daha hızlı hem daha etkili sonuç verir.
                </div>
              </article>

              {/* Best Symbols */}
              <article className="rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] shadow-lg">
                <h2
                  id="sec-semboller"
                  className="scroll-mt-24 text-2xl font-bold text-indigo-400 mb-8"
                >
                  En İyi Şekilli Nick Sembolleri
                </h2>
                <ul className="flex flex-wrap gap-4 mb-6">
                  {["★", "♛", "☠", "꧁", "༒", "☬", "⚡", "🔥", "✿", "♡"].map((sym, i) => (
                    <li key={i} className="h-12 w-12 flex items-center justify-center bg-indigo-500/10 rounded-xl text-white font-black text-xl border border-indigo-500/20 hover:scale-110 transition-transform cursor-default">{sym}</li>
                  ))}
                </ul>
                <div className="bg-white/[0.01] p-4 rounded-xl text-sm italic text-gray-500 border border-white/[0.03] font-medium uppercase tracking-widest text-center">Fazla sembol kullanma ve okunabilirliği koru.</div>
              </article>

              {/* Platform specific */}
              <section className="rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] shadow-lg">
                <h2
                  id="sec-platformlar"
                  className="scroll-mt-24 text-2xl font-bold text-indigo-400 mb-8 flex items-center gap-3 uppercase tracking-tight"
                >
                  <Smartphone className="w-6 h-6 text-gray-500" />
                  Platformlara Göre Kullanım
                </h2>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white flex items-center justify-between">
                      PUBG Mobile
                      <span className="text-[10px] font-black uppercase text-orange-400 tracking-[0.2em]">Önemli Not</span>
                    </h3>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">Bazı semboller çalışmayabilir. Daha basit karakterler kullan.</p>
                  </div>
                  <div className="space-y-3 pt-6 border-t border-white/[0.03]">
                    <h3 className="text-xl font-bold text-white flex items-center justify-between">
                      Instagram
                      <span className="text-[10px] font-black uppercase text-pink-400 tracking-[0.2em]">Biyografi</span>
                    </h3>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">Şekilli kullanıcı adları profilini daha çekici yapar.</p>
                  </div>
                  <div className="space-y-3 pt-6 border-t border-white/[0.03]">
                    <h3 className="text-xl font-bold text-white flex items-center justify-between">
                      Discord
                      <span className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.2em]">Sunucu</span>
                    </h3>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">Birçok stil desteklenir. Farklı olmak için idealdir.</p>
                  </div>
                </div>
              </section>

              {/* Nick Selection Tips */}
              <article className="rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] shadow-lg">
                <h2
                  id="sec-ipuclar"
                  className="scroll-mt-24 text-2xl font-bold text-indigo-400 mb-8 flex items-center gap-3"
                >
                   <Zap className="w-6 h-6 text-indigo-400" />
                   Nick Seçme İpuçları
                </h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Kısa ve net olsun",
                    "Okunması kolay olsun",
                    "Fazla sembol kullanma",
                    "Benzersiz olmaya çalış"
                  ].map((tip, i) => (
                    <li key={i} className="bg-indigo-600/5 p-4 rounded-xl border border-indigo-500/10 text-gray-300 text-sm font-bold uppercase tracking-widest text-center">{tip}</li>
                  ))}
                </ul>
              </article>

              {/* Common Issues */}
              <section className="rounded-2xl bg-rose-500/5 p-6 sm:p-8 border border-rose-500/10 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <AlertTriangle className="w-20 h-20 text-rose-400" />
                </div>
                <h2
                  id="sec-sorunlar"
                  className="scroll-mt-24 text-2xl font-black text-rose-400 mb-10 flex items-center gap-3 tracking-tight uppercase"
                >
                  <AlertTriangle className="w-6 h-6" />
                  Yaygın Sorunlar ve Çözümler
                </h2>
                <div className="grid gap-10 sm:grid-cols-3">
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-rose-200">Nick Kabul Edilmiyor</h3>
                    <p className="text-xs text-rose-200/50 leading-relaxed uppercase font-black tracking-widest leading-[1.8]">Bazı platformlar tüm sembolleri desteklemez.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-rose-200">Semboller Görünmüyor</h3>
                    <p className="text-xs text-rose-300/50 leading-relaxed uppercase font-black tracking-widest leading-[1.8]">Cihaz bazı fontları desteklemiyor olabilir.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-rose-200">Nick Alınmış</h3>
                    <p className="text-xs text-rose-300/50 leading-relaxed uppercase font-black tracking-widest leading-[1.8]">Sembol veya sayı ekleyerek farklı hale getir.</p>
                  </div>
                </div>
              </section>

              {/* Interactive FAQ Section */}
              <div id="sss" className="scroll-mt-24">
                <FAQSection title="Sıkça Sorulan Sorular" faqs={hubFaqs} />
              </div>
            </div>

            {/* Conclusion Highlight */}
            <article
              id="sec-sonuc"
              className="scroll-mt-24 rounded-[40px] bg-gradient-to-br from-indigo-900 to-indigo-950 p-6 sm:p-10 border border-indigo-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Sparkles className="w-24 h-24 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white mb-8 tracking-tight uppercase tracking-[0.2em] border-b border-white/10 pb-4 inline-block">Sonuç</h2>
                <div className="space-y-8">
                  <p className="text-indigo-100 leading-relaxed text-xl sm:text-2xl italic font-medium">
                    Yazı stili platformları üzerinde çalışırken şunu gördüm: <a href="https://yazistilleripro.com.tr" target="_blank" className="underline hover:text-white transition-colors decoration-indigo-400 underline-offset-4 font-bold">yazı stilleri</a>
                  </p>
                  <div className="space-y-6">
                    <p className="text-indigo-200 leading-relaxed text-lg font-medium">
                      Basit bir nick bile doğru stil ile çok güçlü bir etki yaratabilir. Şık ve dikkat çekici bir nick, profilinin ilk izlenimini tamamen değiştirir.
                    </p>
                    <p className="text-indigo-300 text-base leading-relaxed opacity-90 font-medium">
                      Doğru yöntemleri kullanarak sen de kolayca benzersiz bir nick oluşturabilirsin. Farklı stilleri dene, test et ve sana en uygun olanı seç.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
