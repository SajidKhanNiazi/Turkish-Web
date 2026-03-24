"use client";

import Link from "next/link";
import { Container } from "../layout/Container";
import { ChevronDown, Info, AlertTriangle, Lightbulb, CheckCircle2, Quote, Sparkles } from "lucide-react";

export const SekilliHarflerArticle = () => {
    return (
        <section className="py-20 md:py-32 bg-[#0B0F1A] border-t border-white/[0.06]">
            <Container>
                <div className="mx-auto max-w-4xl">
                    <div className="prose prose-invert prose-lg prose-gray max-w-none 
                        prose-headings:text-white prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-strong:text-white prose-strong:font-bold
                        prose-li:text-gray-300
                        prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-a:no-underline prose-a:border-b prose-a:border-purple-400/30 hover:prose-a:border-purple-300
                        [&>h1]:mb-16 [&>h1]:text-4xl md:[&>h1]:text-6xl
                        [&>h2]:mt-24 [&>h2]:first:mt-0 [&>h2]:mb-8 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:flex [&>h2]:items-center [&>h2]:gap-4
                        [&>h2]:before:content-[''] [&>h2]:before:w-2 [&>h2]:before:h-8 [&>h2]:before:bg-purple-500 [&>h2]:before:rounded-full
                        [&>h3]:mt-12 [&>h3]:text-2xl [&>h3]:font-bold">
                        
                        <h1>Şekilli Harfler Nedir? A&apos;dan Z&apos;ye Değişik Harf Rehberi (2026)</h1>
                        
                        <div className="bg-purple-900/10 p-8 md:p-10 rounded-3xl border border-purple-500/20 mb-12 shadow-2xl relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
                                <Sparkles className="w-20 h-20 text-purple-400" />
                           </div>
                           <p className="text-xl text-gray-300 leading-relaxed mb-6 italic relative z-10">
                                Sıradan harflerle yazılan bir nick, sosyal medyada ya da oyun lobisinde hiç dikkat çekmiyor. Herkes aynı yazı tipini kullanıyor ve bu durum sizi kalabalığın içinde kaybettiriyor. Özellikle PUBG, Discord veya Instagram gibi platformlarda fark yaratmak giderek zorlaşıyor.
                           </p>
                           <p className="text-lg text-purple-200 font-medium relative z-10">
                                İşte bu sorunu çözmek için <strong>şekilli harfler</strong> var. Herhangi bir uygulama yüklemeden, dakikalar içinde metninizi onlarca farklı değişik harf stiline dönüştürebilirsiniz. Yalnızca tek bir harf değil, tam kelime ve cümleler oluşturmak istiyorsanız <Link href="/sekilli-yazi"><strong>Şekilli Yazı</strong></Link> aracımız da tam size göre. Bu rehberde şekilli harflerin ne olduğunu, nasıl çalıştığını ve her platformda nasıl doğru kullanacağınızı adım adım açıklıyorum.
                           </p>
                        </div>

                        <h2>Şekilli Harfler Nedir? Basit ve Net Bir Açıklama</h2>
                        <p>
                            <strong>Şekilli harfler</strong>, normal A–Z harflerinin görsel olarak farklılaştırılmış versiyonlarıdır. Bunlar gerçek anlamda bir &quot;font&quot; değildir. Öte yandan her biri ayrı bir Unicode karakteridir. Bu nedenle kopyalanabilirler, yapıştırılabilirler ve herhangi bir cihazda görüntülenebilirler.
                        </p>
                        <p>
                            Örneğin, normal &quot;A&quot; harfi Unicode sisteminde U+0041 koduna sahiptir. Gotik <strong>𝔄</strong> ise U+1D504 kodunu taşır. Benzer şekilde el yazısı <strong>𝓐</strong> harfi U+1D4D0 koduna karşılık gelir. Her ikisi de &quot;A&quot; harfini ifade eder. Bununla birlikte görünümleri tamamen farklıdır.
                        </p>
                        <p>
                            Sonuç olarak şekilli harfleri özel bir uygulama olmadan doğrudan kopyalayıp kullanabilirsiniz. Bunun yanı sıra tüm modern cihazlar bu karakterleri zaten desteklemektedir.
                        </p>

                        <blockquote className="border-l-4 border-purple-500 bg-purple-500/5 p-8 rounded-r-2xl my-12 italic text-gray-300">
                            &quot;Şekilli harflerin büyük çoğunluğu, Unicode&apos;un Matematiksel Alfasayısal Semboller bloğundan (U+1D400–U+1D7FF) gelir. Bu blok aslen akademik denklemler için tasarlanmıştı. Ancak zamanla sosyal medya kullanıcıları tarafından dekoratif amaçlar için yaygın biçimde benimsenmiştir.&quot;
                            <footer className="mt-4 text-sm text-purple-400 not-italic font-bold uppercase tracking-wider">
                                — Unicode Teknik Standartları
                            </footer>
                        </blockquote>

                        <h2>Şekilli Harfler Neden Çalışır? Unicode&apos;u Anlayın</h2>
                        <p>
                            Şekilli harflerin temelinde <strong>Unicode standardı</strong> bulunmaktadır. Geçmişte bilgisayarlar yalnızca 128 karakteri (ASCII standardı) tanıyabiliyordu. Bugün ise Unicode sayesinde 140.000&apos;den fazla karakter desteklenmektedir. Bu karakterler arasında matematik sembolleri, eski alfabeler, dekoratif harfler ve emojiler yer alır.
                        </p>
                        <p>
                            Bir şekilli harf aracı kullandığınızda, araç her harfinizi karşılık gelen Unicode karakteriyle değiştirir. Dolayısıyla sonuç gerçek bir metin parçasıdır. Bu sayede herhangi bir platformda sorunsuz çalışır. Ayrıca arama motorları bu metni okuyabilir, ekleyebilir ve indeksleyebilir.
                        </p>

                        <h2>Değişik Harfler: En Popüler Şekilli Harf Stilleri</h2>
                        <p>Yüzlerce şekilli harf stili mevcuttur. Bununla birlikte kullanıcıların en çok tercih ettiği belirli stiller öne çıkmaktadır. Aşağıda en popüler kategoriler ve örnek karakterler yer almaktadır.</p>

                        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                            {[
                                { n: "El Yazısı", c: "𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗" },
                                { n: "Gotik", c: "𝔄 𝔅 ℭ 𝔇 𝔈 𝔉 𝔊 ℌ" },
                                { n: "Kalın Serif", c: "𝐀 𝐁 𝐂 𝐃 𝐄 𝐅 𝐆 𝐇" },
                                { n: "Kara Tahta", c: "𝔸 𝔹 ℂ 𝔻 𝔼 𝔽 𝔾 ℍ" },
                                { n: "Yuvarlak", c: "Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ" },
                                { n: "Kareli", c: "🄰 🄱 🄲 🄳 🄴 🄵 🄶 🄷" },
                                { n: "İtalik", c: "𝐴 𝐵 𝐶 𝐷 𝐸 𝐹 𝐺 𝐻" },
                                { n: "Gotik Kalın", c: "𝕬 𝕭 𝕮 𝕯 𝕰 𝕱 𝕲 𝕳" }
                            ].map((card, i) => (
                                <div key={i} className="bg-[#111827] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all">
                                    <div className="text-[10px] text-purple-400 font-black uppercase tracking-widest mb-3">{card.n}</div>
                                    <div className="text-lg text-white font-display leading-relaxed break-all">{card.c}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-2xl flex items-start gap-4 my-10">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <p className="text-emerald-100/80 text-base m-0 italic">
                                <strong>Kişisel Deneyim:</strong> El yazısı ve gotik stiller, Instagram biyografileri için en yüksek etkileşimi getiren iki kategoridir. Buna karşın oyun platformları için kareli ve kalın stiller daha güvenilir çalışır. Platform seçimine göre stil belirlemek, en sık yapılan hatayı önler.
                            </p>
                        </div>

                        <h2>Şekilli Harfler Hangi Platformlarda Kullanılır?</h2>
                        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-12 shadow-xl">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Platform</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-purple-400 border-b border-white/[0.06]">Destek Durumu</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-300 border-b border-white/[0.06]">En Uygun Stil</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { p: "Instagram", d: "Tam Destek", s: "El yazısı, Gotik" },
                                        { p: "WhatsApp", d: "Tam Destek", s: "Yuvarlak, Kalın" },
                                        { p: "PUBG Mobile", d: "Kısmi Destek", s: "Kareli, Kalın" },
                                        { p: "Discord", d: "Tam Destek", s: "Gotik, Kara Tahta" },
                                        { p: "TikTok", d: "Tam Destek", s: "Geniş, Kara Tahta" },
                                        { p: "Twitter / X", d: "Kısmi Destek", s: "Kalın, İtalik" },
                                        { p: "Facebook", d: "Tam Destek", s: "El yazısı, Yuvarlak" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-6 text-white text-sm font-bold">{row.p}</td>
                                            <td className="p-6 text-base">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${row.d === "Tam Destek" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>
                                                    {row.d}
                                                </span>
                                            </td>
                                            <td className="p-6 text-gray-400 text-sm">{row.s}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h2>PUBG Şekilli Nick Nasıl Oluşturabilirim?</h2>
                        <p>PUBG Mobile, Türkiye&apos;nin en çok oynanan mobil oyunlarından biridir. Dolayısıyla akılda kalıcı bir şekilli nick, sizi diğer oyuncular arasından hemen öne çıkarır.</p>

                        <div className="bg-amber-500/5 border border-amber-500/10 p-6 rounded-2xl flex items-start gap-4 my-10">
                            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                            <p className="text-amber-100/80 text-base m-0">
                                <strong>Dikkat:</strong> PUBG Mobile&apos;da 16 karakter sınırı geçerlidir. Unicode karakterler bazen 2–4 byte yer kaplar; bu nedenle görünen uzunluktan daha erken sınıra ulaşabilirsiniz. Stili önce taslak bölümde test edin, ardından asıl profile yapıştırın.
                            </p>
                        </div>

                        <div className="bg-purple-500/5 border border-purple-500/10 p-6 rounded-2xl flex items-start gap-4 my-10">
                            <Lightbulb className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                            <p className="text-purple-100/80 text-base m-0">
                                <strong>İpucu:</strong> El yazısı harfleri Instagram biyografisinde özellikle dikkat çekicidir. Bunun yanı sıra emoji kombinasyonu eklediğinizde profil görsel olarak çok daha zengin bir hale gelir.
                            </p>
                        </div>

                        <h2>Türkçe Karakter Desteği: Neden Önemli?</h2>
                        <p>Global şekilli harf araçlarının büyük çoğunluğu, İngilizce alfabesi üzerine inşa edilmiştir. Bu nedenle Türkçe karakterler — özellikle Ğ, Ş, Ü, İ, Ö ve Ç — pek çok araçta ya hiç dönüştürülmez ya da bozuk görünür.</p>
                        <p>Bu yüzden Türkçe karakter desteğini açıkça belirten araçları tercih etmeniz gerekir. Böyle araçlar her Türkçe harfi doğru Unicode karşılığıyla eşleştirir. Sonuç olarak Türkçe isimleriniz tüm platformlarda eksiksiz ve doğru görünür.</p>

                        <div className="mt-24 pt-24 border-t border-white/[0.06]">
                            <h2>Sıkça Sorulan Sorular</h2>
                            <div className="not-prose space-y-4 mt-12">
                                {[
                                    { q: "Şekilli harfler nedir?", a: "Şekilli harfler, Unicode standardı kapsamında tanımlanmış özel karakterlerdir. Normal harflerin görsel olarak farklı versiyonlarıdır. Font değildirler; bu yüzden kopyalanabilirler." },
                                    { q: "Şekilli harfleri PUBG'de kullanabilir miyim?", a: "Evet. Ancak PUBG Mobile'da 16 karakter sınırı bulunur. Kareli ve kalın stiller en güvenilir sonucu verir." },
                                    { q: "Türkçe harfler şekilli harf aracında doğru çalışıyor mu?", a: "Türkçe karakter desteği sunan araçlarda evet. Ğ, Ş, Ü, İ, Ö, Ç harfleri bu dili destekleyen araçlarda eksiksiz dönüştürülür." },
                                    { q: "Şekilli harfler Instagram'da çalışıyor mu?", a: "Evet. Instagram biyografi, gönderi açıklamaları ve yorum alanlarında şekilli harfler sorunsuz görüntülenir." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group rounded-2xl border border-white/[0.06] bg-[#111827] transition-all duration-300">
                                        <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-200 list-none text-lg select-none">
                                            {faq.q}
                                            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-purple-400" />
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-400 border-t border-white/[0.06] pt-4 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>

                        <div className="mt-24 pt-24 border-t border-white/10">
                            <h2 className="sr-only">Sonuç</h2>
                            <p className="text-xl text-gray-300 font-medium leading-relaxed italic border-l-4 border-purple-500/30 pl-8">
                                Şekilli harfler, sosyal medyada ve oyunlarda öne çıkmanın en hızlı ve en ücretsiz yöntemlerinden biridir. Doğru stili ve doğru platformu seçtiğinizde, sıradan bir isim anında dikkat çekici bir kimliğe dönüşür.
                            </p>
                            <p className="text-gray-400 mt-8">
                                Dijital içerik ve yazı stilleri üzerine yıllardır çalışan biri olarak şunu söyleyebilirim: en iyi şekilli harf aracı, hızlı çalışan, Türkçe&apos;yi tam destekleyen ve platform uyumluluğunu açıkça gösteren araçtır. Şekilli harfler dünyasına girmek için yapmanız gereken tek şey bir araç açıp denemektir.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
