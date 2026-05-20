import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolSchema } from "@/components/shared/ToolSchema";
import { CoolNickGenerator } from "@/components/generator/CoolNickGenerator";
import { FAQSection } from "@/components/shared/FAQSection";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Havalı Nick Yazma – 2026 İçin Cool ve Şekilli Nick Örnekleri",
  description: "Havalı Nick Yazma ile cool ve şekilli kullanıcı adları oluşturun. Hazır nick örnekleri, font stilleri, platform limitleri ve ipuçlarıyla öne çıkın.",
  alternates: {
    canonical: "/sekilli-nick-yazma/havali-nick-yazma",
  },
  openGraph: {
    title: "Havalı Nick Yazma – 2026 İçin Cool ve Şekilli Nick Örnekleri",
    description: "Havalı Nick Yazma ile cool ve şekilli kullanıcı adları oluşturun. Hazır nick örnekleri, font stilleri, platform limitleri ve ipuçlarıyla öne çıkın.",
    url: `${siteConfig.url}/sekilli-nick-yazma/havali-nick-yazma`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Havalı Nick Yazma – 2026 İçin Cool ve Şekilli Nick Örnekleri",
    description:
      "Havalı Nick Yazma ile cool ve şekilli kullanıcı adları oluşturun. Hazır nick örnekleri, font stilleri, platform limitleri ve ipuçlarıyla öne çıkın.",
  },
};

export default function HavaliNickYazmaPage() {
  const faqs = [
    {
      question: "Havalı nick nasıl yapılır?",
      answer:
        "Önce kısa ve akılda kalıcı bir kelime seçin; ardından bir veya iki sembolle çerçeveleyin veya Unicode ile hafif süslü harf varyasyonları deneyin. Bu sayfadaki oluşturucu ile anında onlarca stil görebilir, beğendiğinizi kopyalayıp Instagram veya oyun profilinize yapıştırabilirsiniz.",
    },
    {
      question: "Aynı nicki her yerde kullanabilir miyim?",
      answer:
        "Genelde evet, fakat her platformun karakter sınırı farklıdır (ör. Instagram 30, Discord 32 karakter civarı). Uzun veya çok süslü bir ad bir yerde kesilirken başka yerde reddedilebilir; kritik hesaplarda her uygulamada ayrı test edin.",
    },
    {
      question: "Ücretsiz nick oluşturucu var mı?",
      answer:
        "Evet; bu sayfadaki araç ücretsizdir. Metninizi yazıp çıkan stilleri kopyalayabilir, gerektiğinde sembolleri açıp kapatarak farklı kombinasyonlar üretebilirsiniz.",
    },
    {
      question: "Hangi fontları kullanmalıyım?",
      answer:
        "Oyunlarda gothic ve kalın görünümler popükerdir; sosyal medyada cursive ve minimal varyasyonlar daha zarif durur. Okunabilirlik bozuluyorsa daha sade bir stile geçmek en güvenli seçimdir.",
    },
    {
      question: "Hangi hatalardan kaçınmalıyım?",
      answer:
        "Çok fazla sembol, gereksiz uzunluk ve başka oyuncuların adını birebir kopyalamak hem görünümü hem de platform kurallarını zorlar. Kendi tarzınızı koruyun, sınırları aşmayın.",
    },
    {
      question: "Trend nick nasıl oluşturulur?",
      answer:
        "Kısa İngilizce veya hibrit kelimeler, tek vurgu sembolü ve sınırlı emoji kullanımı 2026’da hâlâ trend. Özgün kalmak için hazır listeyi aynen kopyalamak yerine harf veya sembolle kişiselleştirin.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
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
      "@type": "Article",
      headline: "Havalı Nick Yazma – 2026 İçin Cool ve Şekilli Nick Örnekleri",
      description:
        "Havalı Nick Yazma ile cool ve şekilli kullanıcı adları oluşturun. Hazır nick örnekleri, font stilleri, platform limitleri ve ipuçlarıyla öne çıkın.",
      inLanguage: "tr",
      datePublished: "2026-02-01",
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
        "@id": `${siteConfig.url}/sekilli-nick-yazma/havali-nick-yazma`,
      },
    },
  ];

  return (
    <main className="flex-1 flex flex-col font-sans">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", item: "/" },
          { name: "Şekilli Nick Yazma", item: "/sekilli-nick-yazma" },
          { name: "Havalı Nick Yazma", item: "/sekilli-nick-yazma/havali-nick-yazma" },
        ]}
      />
      <ToolSchema
        name="Havalı Nick Yazma Aracı"
        description="En havalı oyun ve sosyal medya nicklerini anında oluşturun ve kopyalayın."
        url="/sekilli-nick-yazma/havali-nick-yazma"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CoolNickGenerator />

      {/* Article Content - Single Column Layout */}
      <section className="bg-[#0B0F1A] py-16 sm:py-24 border-t border-white/[0.03]">
        <Container className="max-w-4xl">
          <div className="flex flex-col gap-16">
            
            {/* Header / Intro */}
            <article className="prose prose-invert prose-lg max-w-none">
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
                Havalı Nick Yazma – 2026 İçin Cool ve Şekilli Nick Örnekleri
              </h1>
              <p className="not-prose text-sm text-gray-500 mb-8">
                Son güncelleme: 8 Nisan 2026
              </p>

              <p className="text-gray-300 leading-relaxed font-medium">
                Birçok genç ve kullanıcı, sıradan ve sıkıcı nicklerden bıkmış durumda. Sosyal medyada ya da oyunlarda dikkat çeken bir isim istiyorlar ama nasıl oluşturacaklarını bilmiyorlar. Bu durum hem zaman kaybettiriyor hem de yaratıcılığı zorlaştırıyor.
              </p>
              <p className="text-gray-300 leading-relaxed font-medium">
                <strong>Havalı Nick Yazma</strong>, bu sorunu kolayca çözer. Instagram, TikTok, Discord veya PUBG için dikkat çekici, okunabilir ve tarz bir nick oluşturabilirsiniz. Bu rehberde size hazır örnekler, font önerileri ve platform ipuçları sunuyoruz.
              </p>

              <blockquote className="border-l-4 border-indigo-500 bg-indigo-500/5 p-8 rounded-2xl italic text-xl text-indigo-300 my-10 font-serif shadow-inner">
                &ldquo;Eskiden düz bir nick kullanıyordum ve kimse fark etmiyordu. Şekilli bir nick kullanmaya başladıktan sonra arkadaşlarım hemen dikkat etti.&rdquo;
              </blockquote>

              <h2 className="text-2xl sm:text-3xl font-black text-indigo-400 mt-16 mb-6 uppercase tracking-wider">
                Havalı Nick Yazma Nedir?
              </h2>
              <p className="text-gray-300 leading-relaxed font-medium">
                Havalı Nick Yazma, harfler, semboller ve emojiler kullanarak <strong>cool ve dikkat çekici nickler oluşturma</strong> işlemidir. Genellikle oyunlarda ve sosyal medya platformlarında kullanılır.
              </p>
              <p className="text-gray-300 leading-relaxed font-medium">
                İyi bir nick sizi daha <strong>akılda kalıcı</strong> yapar ve tarzınızı yansıtır. Daha detaylı stil seçenekleri için 
                👉 <a href="/sekilli-nick-yazma" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 underline-offset-4 font-black">Şekilli Nick</a> rehberine de göz atabilirsiniz.
              </p>

              <h2 className="text-2xl sm:text-3xl font-black text-indigo-400 mt-16 mb-6 uppercase tracking-wider">
                Neden Havalı Nick Kullanmalısınız?
              </h2>
              <ul className="grid gap-4 list-none p-0">
                {[
                  "Profilinizi <strong>öne çıkarır</strong>",
                  "Tarzınızı ve kişiliğinizi gösterir",
                  "İnsanların sizi <strong>hatırlamasını kolaylaştırır</strong>",
                  "Oyunlar ve sosyal medya için uygundur",
                  "Kolayca kopyalanabilir"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-white/[0.03] p-4 rounded-2xl border border-white/[0.05] font-medium text-gray-200">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-4 border-cyan-500 bg-cyan-500/5 p-8 rounded-2xl italic text-xl text-cyan-300 my-12 font-serif shadow-inner">
                &ldquo;Eskiden başkalarının nicklerini kullanıyordum. Artık kendi tarzımı oluşturuyorum ve bu bana özgüven veriyor.&rdquo;
              </blockquote>

              <h2 className="text-2xl sm:text-3xl font-black text-indigo-400 mt-16 mb-6 uppercase tracking-wider">
                Havalı Nick Yazma İpuçları
              </h2>
              <div className="grid gap-4">
                {[
                  { title: "Kısa tutun", desc: "okunması ve hatırlaması kolay olur" },
                  { title: "Harf, sembol ve emoji karıştırın", desc: "daha dikkat çekici olur" },
                  { title: "Okunabilir fontlar kullanın", desc: "Gothic, cursive, minimal" },
                  { title: "Platform limitlerini kontrol edin", desc: "Instagram (30), Discord (32), WhatsApp (25) karakter" },
                  { title: "Test edin", desc: "mobil ve bilgisayarda görünümünü kontrol edin" },
                  { title: "Kopyalamayın", desc: "özgün olun" }
                ].map((tip, idx) => (
                  <div key={idx} className="flex gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 text-sm font-black ring-1 ring-indigo-500/20">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">{tip.title}</h4>
                      <p className="text-gray-400 mt-1 font-medium">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-indigo-400 mt-20 mb-8 uppercase tracking-wider">
                En İyi Font Türleri
              </h2>
              <div className="overflow-x-auto rounded-3xl border border-white/[0.08] bg-white/[0.02] shadow-2xl">
                <table className="w-full min-w-[640px] text-left border-collapse">
                  <thead>
                    <tr className="bg-white/[0.05]">
                      <th className="px-4 sm:px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-300">Font Türü</th>
                      <th className="px-4 sm:px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-300">Açıklama</th>
                      <th className="px-4 sm:px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-300">Kullanım Alanı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05]">
                    {[
                      ["Gothic", "Güçlü ve kalın", "Oyunlar"],
                      ["Cursive", "Zarif ve akıcı", "Sosyal medya"],
                      ["Minimal", "Temiz ve sade", "Modern profiller"],
                      ["Fancy", "Dekoratif", "Instagram / TikTok"]
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-4 sm:px-6 py-4 font-black text-white">{row[0]}</td>
                        <td className="px-4 sm:px-6 py-4 text-gray-400 font-medium">{row[1]}</td>
                        <td className="px-4 sm:px-6 py-4 text-cyan-400 font-black text-xs uppercase tracking-widest">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-indigo-400 mt-20 mb-8 uppercase tracking-wider">
                Platforma Göre Havalı Nickler
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 sm:p-8 rounded-3xl bg-indigo-500/5 border border-indigo-500/20">
                  <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-xs">🎮</span> Oyun Nickleri
                  </h3>
                  <ul className="space-y-4 list-none p-0 text-gray-300 font-medium">
                    <li>• <strong>PUBG:</strong> ☆Shadow☆, xXDragonXx</li>
                    <li>• <strong>Valorant:</strong> ⚡Storm, Blade✦</li>
                    <li>• <strong>CS:GO:</strong> Reaper☠, SilentX</li>
                  </ul>
                </div>
                <div className="p-6 sm:p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/20">
                  <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-xs">📱</span> Sosyal Medya
                  </h3>
                  <ul className="space-y-4 list-none p-0 text-gray-300 font-medium">
                    <li>• <strong>Instagram:</strong> ღBeautyღ, Smile☆Everyday</li>
                    <li>• <strong>TikTok:</strong> ~TrendSetter~, FunVibes✨</li>
                    <li>• <strong>WhatsApp:</strong> Cool☀Chat, Happy✿Talk</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-indigo-400 mt-20 mb-8 uppercase tracking-wider">
                Havalı Nick Örnekleri
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { cat: "Minimal", nicks: ["SkyBlue", "MoonLight", "StarDust"] },
                  { cat: "Emojili", nicks: ["✿Lily✿", "⚡Thunder⚡", "★Night★"] },
                  { cat: "Gamer", nicks: ["DarkKnight", "FireBlade", "GhostX"] },
                  { cat: "Trend 2026", nicks: ["NeonSoul", "CyberWave", "PixelKing"] }
                ].map((group, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-[10px] uppercase font-black tracking-widest text-indigo-400 mb-3 block">{group.cat}</span>
                    <ul className="list-none p-0 flex flex-col gap-2">
                      {group.nicks.map((n, i) => (
                        <li key={i} className="text-sm font-bold text-gray-100">{n}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-indigo-400 mt-20 mb-6 uppercase tracking-wider">
                Nick Oluşturucu Nasıl Kullanılır?
              </h2>
              <ol className="grid gap-4 list-none p-0">
                {[
                  "Bir nick oluşturucu siteye girin",
                  "İsminizi veya kelimeyi yazın",
                  "Font ve sembol seçin",
                  "Oluşan nicki kopyalayıp profilinize yapıştırın"
                ].map((step, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-white/[0.02] p-5 rounded-2xl border border-white/[0.05] font-bold text-white shadow-lg">
                    <span className="text-cyan-400 text-lg">0{idx + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-gray-400 italic">Bu yöntem, hızlı ve yaratıcı nickler bulmanızı sağlar.</p>

              <h2 className="text-2xl sm:text-3xl font-black text-rose-500 mt-20 mb-6 uppercase tracking-wider">
                Kaçınılması Gereken Hatalar
              </h2>
              <ul className="grid gap-3 list-none p-0">
                {[
                  "Çok fazla sembol kullanmak – karmaşık görünür",
                  "Uzun nickler – okunması zor olur",
                  "Başkalarını kopyalamak – özgünlük kaybolur",
                  "Platform limitlerini göz ardı etmek"
                ].map((error, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-rose-500/10 bg-rose-500/5 text-gray-300 font-medium italic">
                    <span className="text-rose-500 mt-1">✕</span>
                    {error}
                  </li>
                ))}
              </ul>

              <FAQSection faqs={faqs} />

              <h2 className="text-2xl sm:text-3xl font-black text-indigo-400 mt-20 mb-6 uppercase tracking-wider">
                Sonuç
              </h2>
              <p className="text-gray-300 leading-relaxed font-bold text-xl">
                Havalı Nick Yazma, basit ama etkili bir yöntemdir. Doğru semboller, fontlar ve stil ile nickinizi daha <strong>dikkat çekici ve akılda kalıcı</strong> hale getirebilirsiniz.
              </p>

              <blockquote className="border-l-4 border-indigo-500 bg-indigo-500/5 p-8 rounded-2xl italic text-xl text-indigo-300 my-12 font-serif shadow-inner">
                &ldquo;Şekilli nick kullanmaya başladıktan sonra hem oyunlarda hem sosyal medyada daha fazla dikkat çektiğimi fark ettim.&rdquo;
              </blockquote>

              <p className="text-gray-400 text-lg italic mt-10">
                Bu rehberdeki ipuçlarını kullanarak siz de kendi tarzınızı oluşturabilir ve her platformda fark yaratabilirsiniz.
              </p>

            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
