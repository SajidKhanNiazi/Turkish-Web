"use client";
import { Container } from "../layout/Container";
import { 
    Sparkles, 
    ChevronDown, 
    CheckCircle2, 
    Info, 
    AlertTriangle, 
    Lightbulb, 
    Quote as QuoteIcon 
} from "lucide-react";

import Link from "next/link";

export const InstagramFullArticle = () => {
    return (
        <section className="py-20 md:py-32 bg-[#0B0F1A] border-t border-white/[0.06]">
            <Container>
                <div className="mx-auto max-w-4xl">
                    <div className="prose prose-invert prose-lg prose-slate max-w-none 
                        prose-headings:text-white prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-strong:text-white prose-strong:font-bold
                        prose-li:text-gray-300
                        prose-a:text-pink-400 hover:prose-a:text-pink-300 prose-a:no-underline prose-a:border-b prose-a:border-pink-400/30 hover:prose-a:border-pink-300
                        [&>h1]:mb-16 [&>h1]:text-4xl md:[&>h1]:text-6xl
                        [&>h2]:mt-24 [&>h2]:first:mt-0 [&>h2]:mb-8 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:flex [&>h2]:items-center [&>h2]:gap-4
                        [&>h2]:before:content-[''] [&>h2]:before:w-2 [&>h2]:before:h-8 [&>h2]:before:bg-pink-500 [&>h2]:before:rounded-full
                        [&>h3]:mt-12 [&>h3]:text-2xl [&>h3]:font-bold">
                        
                        <h1>Instagram Yazı Stili: Biyografi ve Profil için Font Değiştirici (2026)</h1>

                        {/* Intro Block */}
                        <div className="bg-pink-500/5 p-8 md:p-10 rounded-3xl border border-pink-500/10 mb-12 shadow-2xl relative overflow-hidden group not-prose">
                           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
                                <Sparkles className="w-20 h-20 text-pink-400" />
                           </div>
                           <p className="text-xl text-gray-300 leading-relaxed mb-6 italic relative z-10">
                                Instagram&apos;da milyonlarca profil var — ve hepsi aynı fontu kullanıyor. Sıradan bir biyografi, ziyaretçilerin gözünde hiç iz bırakmadan geçip gidiyor. Bu durum özellikle içerik üreticileri, markalar ve dikkat çekmek isteyen her kullanıcı için ciddi bir görünürlük sorunu yaratıyor.
                           </p>
                           <p className="text-lg text-pink-200 font-medium relative z-10">
                                Neyse ki <Link href="/sekilli-yazi/instagram-sekilli-yazi"><strong>instagram şekilli yazı</strong></Link>, bu sorunu saniyeler içinde çözüyor. Herhangi bir uygulama yüklemeden, üyelik olmadan, tamamen ücretsiz olarak biyografinizi, gönderi açıklamalarınızı ve hikaye başlıklarınızı onlarca farklı stile dönüştürebilirsiniz.
                           </p>
                        </div>

                        <h2>Instagram Yazı Stili Nedir? Neden Kullanılır?</h2>
                        <p>
                            Instagram&apos;ın varsayılan fontu <strong>Neue Helvetica</strong>&apos;dır. Yüz milyonlarca kullanıcı, tam olarak aynı yazı tipini kullanmaktadır. Dolayısıyla dikkat çekmenin en kolay yollarından biri bu durumu değiştirmektir.
                        </p>
                        <p>
                            <strong>Instagram yazı stili</strong>, Unicode karakter sistemi sayesinde çalışır. Normal &quot;A&quot; harfinin Unicode standardında <strong>𝒜</strong>, <strong>𝔄</strong>, <strong>𝐀</strong>, <strong>𝕬</strong> gibi onlarca görsel versiyonu bulunur. Bu karakterler font dosyası değildir. Bunlar, her cihazın ve her uygulamanın zaten tanıdığı evrensel metin karakterleridir.
                        </p>

                        <ul>
                            <li><strong>İlk izlenim güçlenir.</strong> Profile giren biri 3 saniyede takip kararı verir.</li>
                            <li><strong>Marka kimliği oluşur.</strong> Tutarlı font kullanımı sizi akılda kalıcı yapar.</li>
                            <li><strong>Dikkat yönlendirilir.</strong> Gönderi açıklamasında önemli kısımları kalın fontla vurgulayabilirsiniz.</li>
                            <li><strong>Rakipten ayrışılır.</strong> Aynı niş içinde sizi öne çıkaran en küçük ama en etkili detay budur.</li>
                        </ul>

                        <blockquote className="border-l-4 border-pink-500 bg-pink-500/5 p-8 rounded-r-2xl my-12 italic text-gray-300">
                            &quot;Instagram biyografisi, bir kullanıcının profili hakkındaki ilk izlenimin oluştuğu tek alandır. Instagram yazı stili bu alanda görsel bir farklılık yaratmanın en erişilebilir ve en hızlı yöntemidir.&quot;
                            <footer className="mt-4 text-sm text-pink-400 not-italic font-bold uppercase tracking-wider">
                                — Sosyal Medya Stratejistleri
                            </footer>
                        </blockquote>

                        <h2>Önemli: Biyografi Alanı ile Hikaye Alanı Farklıdır</h2>
                        <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-2xl flex items-start gap-4 my-10 not-prose">
                            <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                            <p className="text-blue-100/80 text-base m-0">
                                <strong>Doğru Bilgi:</strong> Instagram&apos;ın &quot;Yazı Tipi&quot; veya &quot;Font Değiştir&quot; butonu yalnızca Hikayeler ve Reels içerik düzenleyicisinde bulunur. Biyografi alanında veya profil adında bu buton yoktur. Biyografinize yeni bir yazı stili eklemek istiyorsanız Unicode tabanlı bir araç kullanmanız zorunludur.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-12 shadow-xl not-prose">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Alan</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Karakter Sınırı</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-pink-400 border-b border-white/[0.06]">Durum</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { field: "Profil Adı", limit: "30", status: "✅" },
                                        { field: "Biyografi", limit: "150", status: "✅" },
                                        { field: "Gönderi Açıklaması", limit: "2.200", status: "✅" },
                                        { field: "Yorum", limit: "1.000", status: "✅" },
                                        { field: "Hikaye / Reels Metni", limit: "Serbest", status: "✅" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-6 text-white text-sm font-bold">{row.field}</td>
                                            <td className="p-6 text-gray-400 text-sm">{row.limit}</td>
                                            <td className="p-6 text-emerald-400 text-sm">{row.status} Çalışır</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-500/5 border border-amber-500/10 p-6 rounded-2xl flex items-start gap-4 my-10 not-prose">
                            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                            <p className="text-amber-100/80 text-base m-0">
                                <strong>Dikkat:</strong> Biyografi 150 karakter sınırına dikkat edin. Unicode şekilli yazı karakterleri bazen standart harflerden daha fazla byte kaplar.
                            </p>
                        </div>

                        <h2>Instagram İçin En İyi Yazı Stilleri</h2>
                        <p>Instagram&apos;da yüzlerce <Link href="/"><strong>yazı stilleri</strong></Link> seçeneği kullanılabilir. Aşağıda en popüler stiller yer almaktadır.</p>

                        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                            {[
                                { label: "El Yazısı", example: "𝒮𝑒𝓁𝒾𝓃" },
                                { label: "El Yazısı Kalın", example: "𝓜𝓮𝓻𝓮𝓱𝓪𝓫𝓪" },
                                { label: "Kalın Serif", example: "𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦" },
                                { label: "Gotik Yazı", example: "𝔊𝔬𝔱𝔦𝔨" },
                                { label: "Kara Tahta", example: "𝕀𝕟𝕤𝕥𝕒" },
                                { label: "Yuvarlak", example: "Ⓘⓝⓢⓣⓐ" },
                                { label: "İtalik Serif", example: "𝐵𝑖𝑦𝑜𝑔𝑟𝑎𝑓𝑖" },
                                { label: "Küçük Büyük", example: "ɪɴsᴛᴀ" }
                            ].map((card, i) => (
                                <div key={i} className="bg-[#111827] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-pink-500/30 transition-all">
                                    <div className="text-[10px] text-pink-400 font-black uppercase tracking-widest mb-3">{card.label}</div>
                                    <div className="text-lg text-white font-display leading-relaxed break-all">{card.example}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-2xl flex items-start gap-4 my-10 not-prose">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <p className="text-emerald-100/80 text-base m-0 italic">
                                <strong>Kişisel Deneyim:</strong> El yazısı stili Instagram biyografisinde en yüksek görsel etkiyi yaratan stillerin başında geliyor. Bunun yanı sıra kalın serif stili gönderi açıklamalarında önemli kısımları vurgulamak için mükemmel.
                            </p>
                        </div>

                        <h2>Instagram Biyografisine Yazı Stili Nasıl Eklenir?</h2>
                        <div className="space-y-4 my-10 not-prose">
                            {[
                                "Yazı stili aracını açın.",
                                "Biyografi metninizi yazın.",
                                "Beğendiğiniz stili seçin.",
                                "Kopyala butonuna tıklayın.",
                                "Instagram uygulamasını açın.",
                                "Profili Düzenle butonuna dokunun.",
                                "Kaydet'e basın."
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 items-center bg-white/[0.02] p-4 rounded-xl border border-white/[0.04]">
                                    <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold shrink-0">{i+1}</div>
                                    <p className="text-gray-300 font-medium m-0">{step}</p>
                                </div>
                            ))}
                        </div>

                        <h2>Instagram Biyografisi: Önce / Sonra Örnekleri</h2>
                        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-12 shadow-xl not-prose">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-pink-500/10">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-pink-400 border-b border-white/[0.06]">Hesap Türü</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Normal</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-white border-b border-white/[0.06]">Şekilli</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { type: "İçerik Üretici", normal: "Seyahat | Fotoğraf | Yaşam", styled: "𝒮𝑒𝓎𝒶𝒽𝒶𝓉 | 𝐹𝑜𝓉𝑜ğ𝓇𝒶𝒻 | 𝒴𝒶ş𝒶𝓂" },
                                        { type: "Marka / İşletme", normal: "Türk El Yapımı Takı", styled: "𝐓ü𝐫𝐤 𝐄𝐥 𝐘𝐚𝐩ı𝐦ı 𝐓𝐚𝐤ı" },
                                        { type: "Kişisel Profil", normal: "Hayali büyük tut ✨", styled: "𝓗𝓪𝔂𝓪𝓵𝓲 𝓑ü𝔂ü𝓴 𝓣𝓾𝓽 ✨" },
                                        { type: "Fitness Hesabı", normal: "Personal Trainer | Istanbul", styled: "𝙿𝚎𝚛𝚜𝚘𝚗𝚊𝚕 𝚃𝚛𝚊𝚒𝚗𝚎𝚛 | 𝙸𝚜𝚝𝚊𝚗𝚋𝚞𝚕" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-6 text-pink-400 text-xs font-bold uppercase tracking-wider">{row.type}</td>
                                            <td className="p-6 text-gray-500 text-sm italic">{row.normal}</td>
                                            <td className="p-6 text-white text-lg font-medium">{row.styled}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h2>Instagram Gönderilerinde ve Yorumlarda Yazı Stilleri</h2>
                        <p>Şekilli yazı yalnızca biyografiyle sınırlı değildir. Bunun yanı sıra gönderi açıklamalarında ve yorumlarda da son derece etkili bir şekilde kullanılabilir.</p>

                        <h3>Gönderi Açıklaması İçin Yazı Stilleri</h3>
                        <p>Instagram gönderi açıklamaları 2.200 karakter destekler. Bunun yerine aşağıdaki yaklaşım çok daha etkilidir:</p>
                        <ul>
                            <li><strong>Başlık cümlesi veya sloganı</strong> kalın veya el yazısı stiliyle yazın.</li>
                            <li>Harekete geçirici çağrıyı (CTA) yuvarlak veya kalın stiliyle vurgulayın.</li>
                        </ul>

                        <div className="bg-pink-500/5 border border-pink-500/10 p-6 rounded-2xl flex items-start gap-4 my-10 not-prose text-pink-200/90 italic">
                            <Lightbulb className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                            <p className="m-0 italic">
                                Örneğin: &quot;𝐘𝐞𝐧𝐢 𝐆ö𝐧𝐝𝐞𝐫𝐢 🎉&quot; başlıktan sonra normal metin gelirse, göz otomatik olarak kalın başlığa yönelir. Bu yöntem etkileşim oranını artırır.
                            </p>
                        </div>

                        <h2>Instagram Hikaye ve Reels&apos;te Yazı Stilleri</h2>
                        <p>Hikaye ve Reels içeriklerinde iki farklı yöntem mevcuttur:</p>
                        <p><strong>Yöntem 1 — Instagram&apos;ın yerleşik font aracı:</strong> Hikaye düzenleyicisinde &quot;Aa&quot; butonuna tıklayın.</p>
                        <p><strong>Yöntem 2 — Unicode yazı stilleri:</strong> Yazı stili aracından metni kopyalayıp hikaye metin kutusuna yapıştırabilirsiniz.</p>

                        <h2>Instagram Yazı Stillerinde Türkçe Karakter Desteği</h2>
                        <p>Global yazı stili araçlarının büyük çoğunluğu İngilizce alfabesi üzerine inşa edilmiştir. Bu yüzden Türkçe karakterler — özellikle Ğ, Ş, Ü, İ, Ö ve Ç — pek çok araçta ya hiç dönüştürülmez ya da bozuk görünür.</p>
                        <p>Sonuç olarak Türkçe karakter desteğini açıkça belirten araçları tercih etmeniz kritik önem taşır. Daha fazla teknik bilgi için <a href="https://unicode.org/charts/" target="_blank" rel="noopener noreferrer">Unicode karakter tablosuna</a> başvurabilirsiniz.</p>

                        <h2>Instagram Yazı Stili Kullanırken Yapılan Yaygın Hatalar</h2>
                        <ul>
                            <li><strong>Biyografi karakter sınırını aşmak:</strong> Unicode karakterler fazladan byte kaplar.</li>
                            <li><strong>Türkçe desteği olmayan araç kullanmak:</strong> Harfler bozuk görünür.</li>
                            <li><strong>Tüm biyografiyi şekilli yazmak:</strong> Okunabilirliği düşürür.</li>
                            <li><strong>Instagram&apos;ın biyografi font butonunu aramak:</strong> Bu buton biyografide yoktur.</li>
                        </ul>

                        <div className="mt-24 pt-24 border-t border-white/[0.06]">
                            <h2>Sıkça Sorulan Sorular</h2>
                            <div className="not-prose space-y-4 mt-12">
                                {[
                                    { q: "Instagram şekilli yazı neden çalışıyor?", a: "Instagram şekilli yazı, Unicode karakter standardı sayesinde çalışır. Bunlar font dosyası değil, evrensel metin karakterleridir." },
                                    { q: "Instagram biyografisinde kaç karakter kullanılabilir?", a: "Instagram biyografisi 150 karakterle sınırlıdır. Unicode karakterler normal harflerden daha fazla byte kaplayabilir." },
                                    { q: "Instagram'da Türkçe şekilli yazı çalışıyor mu?", a: "Evet, Türkçe karakter desteği sunan araçlarda Ğ, Ş, Ü, İ, Ö ve Ç harfleri eksiksiz dönüştürülür." },
                                    { q: "Instagram biyografi yazı tipi uygulama içinden değiştirilebilir mi?", a: "Hayır. Instagram'ın yazı tipi değiştirme butonu yalnızca Hikayeler ve Reels için geçerlidir. Biyografi için dış araç kullanmalısınız." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group rounded-2xl border border-white/[0.06] bg-[#111827] transition-all duration-300">
                                        <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-200 list-none text-lg select-none">
                                            {faq.q}
                                            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-pink-400" />
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
                            <p className="text-xl text-gray-300 font-medium leading-relaxed italic border-l-4 border-pink-500/30 pl-8">
                                Instagram yazı stili, profilinizi öne çıkarmanın en hızlı ve en ücretsiz yöntemlerinden biridir. Biyografiden gönderi açıklamalarına kadar her noktada uygulanabilir.
                            </p>
                            <p className="text-gray-400 mt-8">
                                Sosyal medya araçlarını ve kullanıcı davranışlarını incelerken gördüğüm en etkili yöntem oldukça basit oldu. Stili oluşturun, metni kopyalayın ve doğal göründüğü yere yapıştırın. Farklı yazi stilleri deneyerek profilinizi daha özgün yapabilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
