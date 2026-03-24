"use client";

import Link from "next/link";
import { Container } from "../layout/Container";
import { ChevronDown, Info, AlertTriangle, Lightbulb, CheckCircle2, Quote } from "lucide-react";

export const SekilliYaziArticle = () => {
    return (
        <section className="py-20 md:py-32 bg-[#0B0F1A] border-t border-white/[0.06]">
            <Container>
                <div className="mx-auto max-w-4xl">
                    <div className="prose prose-invert prose-lg prose-gray max-w-none 
                        prose-headings:text-white prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-strong:text-white prose-strong:font-bold
                        prose-li:text-gray-300
                        prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-a:no-underline prose-a:border-b prose-a:border-indigo-400/30 hover:prose-a:border-indigo-300
                        [&>h1]:mb-16 [&>h1]:text-4xl md:[&>h1]:text-6xl
                        [&>h2]:mt-24 [&>h2]:first:mt-0 [&>h2]:mb-8 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:flex [&>h2]:items-center [&>h2]:gap-4
                        [&>h2]:before:content-[''] [&>h2]:before:w-2 [&>h2]:before:h-8 [&>h2]:before:bg-indigo-400 [&>h2]:before:rounded-full
                        [&>h3]:mt-12 [&>h3]:text-2xl [&>h3]:font-bold">
                        
                        <h1>Şekilli Yazı: Kopyala-Yapıştır Şekilli Metin Oluşturucu (2026)</h1>
                        
                        <div className="bg-[#111827] p-8 md:p-10 rounded-3xl border border-white/[0.06] mb-12 shadow-2xl relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-20 h-20 text-indigo-400" />
                           </div>
                           <p className="text-xl text-gray-300 leading-relaxed mb-6 italic relative z-10">
                                Normal yazılar artık sosyal medyada dikkat çekmiyor. Herkesin aynı fontu kullandığı bir dünyada, sıradan bir metin gözden kaçıyor. Bu durum oyun nicklerinde, Instagram biyografilerinde ve WhatsApp mesajlarında ciddi bir sorun yaratıyor.
                           </p>
                           <p className="text-lg text-indigo-200 font-medium relative z-10">
                                İşte tam bu noktada <Link href="/sekilli-yazi"><strong>sekilli yazi</strong></Link> devreye giriyor. Herhangi bir uygulama yüklemeden, tek bir araçla metinlerinizi onlarca farklı stile dönüştürebilirsiniz. Bu kılavuzda şekilli yazının ne olduğunu, nasıl çalıştığını ve her platformda nasıl kullanacağınızı adım adım açıklıyorum.
                           </p>
                        </div>

                        <h2>Şekilli Yazı Nedir? Basit Bir Açıklama</h2>
                        <p>
                            <strong>Şekilli yazı</strong>, normal harflerin görsel olarak farklı versiyonlarıdır. Ancak bunlar gerçek anlamda &quot;font&quot; değildir. Öte yandan Unicode standardı altında tanımlanan özel karakterlerdir. Bu karakterler, normal klavye harfleriyle aynı anlamı taşır. Bununla birlikte görünümleri tamamen farklıdır.
                        </p>
                        <p>
                            Örneğin, normal &quot;A&quot; harfi Unicode sisteminde U+0041 koduna sahiptir. Kalın <strong>𝐀</strong> harfi ise U+1D400 kodunu taşır. İkisi de &quot;A&quot; harfini temsil eder. Sonuç olarak her cihaz bu karakterleri zaten destekler.
                        </p>
                        <p>
                            Bu yüzden şekilli yazıyı kopyala-yapıştır yöntemiyle her yerde kullanabilirsiniz. Ayrıca herhangi bir uygulama indirmenize gerek yoktur.
                        </p>

                        <blockquote className="border-l-4 border-indigo-500 bg-indigo-500/5 p-8 rounded-r-2xl my-12 italic text-gray-300">
                            &quot;Şekilli yazı, aslında Unicode&apos;un matematiksel ve alfasayısal sembol bloklarından oluşur. Bu karakterler orijinal olarak matematik denklemleri için tasarlanmıştır. Ancak zamanla sosyal medya kullanıcıları tarafından dekoratif amaçlarla kullanılmaya başlanmıştır.&quot;
                            <footer className="mt-4 text-sm text-gray-500 not-italic font-bold uppercase tracking-wider">
                                — Unicode standardı araştırmacıları ve web geliştirici toplulukları
                            </footer>
                        </blockquote>

                        <h2>Unicode Sistemi Nasıl Çalışır?</h2>
                        <p>
                            Şekilli yazı yazmak için Unicode&apos;u anlamak önemlidir. Geçmişte bilgisayarlar yalnızca 128 karakter destekliyordu (ASCII standardı). Bugün ise Unicode sayesinde 140.000&apos;den fazla karakter desteklenmektedir.
                        </p>
                        <p>Bu karakterler arasında şunlar bulunur:</p>
                        <ul>
                            <li>Matematiksel harfler ve semboller</li>
                            <li>Daire ve kare içi harfler</li>
                            <li>Çeşitli alfabeler (Yunanca, Rusça, Japonca görünümlü karakterler)</li>
                            <li>Emoji ve özel semboller</li>
                        </ul>
                        <p>
                            Bir şekilli yazı aracına metninizi yazdığınızda, araç her harfi karşılık gelen Unicode karakteriyle değiştirir. Sonuç olarak ortaya çıkan metin aslında bir metin parçasıdır. Dolayısıyla kopyalanabilir, yapıştırılabilir ve aranabilirdir.
                        </p>

                        <h2>Şekilli Yazı Türleri: Hangi Stili Seçmelisiniz?</h2>
                        <p>
                            Pek çok farklı şekilli yazı stili mevcuttur. Bunların arasında en popüler olanları belirli platformlar için öne çıkmaktadır. <Link href="/"><strong>yazı stilleri</strong></Link> sayfamızda tüm stil seçeneklerini tek tıkla inceleyebilir ve istediğinizi anında kopyalayabilirsiniz. Aşağıdaki tablo ise en sık tercih edilen türleri ve kullanım alanlarını özetlemektedir.
                        </p>

                        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-12 shadow-xl">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Yazı Stili</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-indigo-400 border-b border-white/[0.06]">Örnek Görünüm</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-300 border-b border-white/[0.06]">En İyi Kullanım</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { s: "El Yazısı", e: "ℰℒ 𝒴𝒜𝒵𝒾𝓈𝒾", u: "Instagram bio, romantik mesajlar" },
                                        { s: "Kalın Serif", e: "𝐊𝐀𝐋𝐈𝐍 𝐘𝐀𝐙𝐈", u: "Duyurular, önemli mesajlar" },
                                        { s: "Gotik", e: "𝔊𝔬𝔱𝔦𝔨", u: "Discord sunucuları, oyun isimleri" },
                                        { s: "Kara Tahta", e: "𝕂𝔸ℝ𝔸 𝕋𝔸ℍ𝕋𝔸", u: "Sosyal medya başlıkları" },
                                        { s: "Yuvarlak", e: "ⓎⓊⓋⒶⓇⓁⒶⓀ", u: "Eğlenceli mesajlar" },
                                        { s: "Kareli", e: "🄺🄰🅁🄴🄻🄸", u: "PUBG, Discord nick" },
                                        { s: "Ters Yazı", e: "ꓕƎᖈS ⅄ⱯZI", u: "Mizah, dikkat çekici paylaşımlar" },
                                        { s: "Geniş", e: "ＧＥＮＩ̇Ｓ̧", u: "TikTok biyografi" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-6 text-gray-400 text-sm font-bold">{row.s}</td>
                                            <td className="p-6 text-white text-base font-display">{row.e}</td>
                                            <td className="p-6 text-gray-300 text-sm">{row.u}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-2xl flex items-start gap-4 my-10">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <p className="text-emerald-100/80 text-base m-0 italic">
                                <strong>Kişisel Deneyim:</strong> El yazısı ve gotik stiller, Instagram biyografilerinde en yüksek etkileşim oranını elde ettiğimi gördüğüm stillerdir. Özellikle romantik veya sanatsal içerikler paylaşan hesaplar için el yazısı stili mükemmel bir ilk izlenim bırakıyor.
                            </p>
                        </div>

                        <h2>Şekilli Yazıyı Nerede Kullanabilirsiniz? Platform Rehberi</h2>
                        <p>Şekilli yazı birçok platformda sorunsuz çalışır. Bununla birlikte her platformun kendine özgü kuralları vardır. Aşağıda platform başına detaylı rehberi bulabilirsiniz.</p>

                        <h3>Instagram</h3>
                        <p>Instagram, şekilli yazı için en popüler platformlardan biridir. Biyografi alanınıza, gönderi açıklamalarınıza ve hikaye metinlerinize şekilli yazı ekleyebilirsiniz.</p>
                        <div className="not-prose grid gap-4 my-8">
                            {["Şekilli yazı aracına metninizi yazın.", "Beğendiğiniz stili kopyalayın.", "Instagram profil düzenleme > Biyografi alanına yapıştırın."].map((step, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#111827] border border-white/[0.06]">
                                    <span className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                                    <span className="text-gray-300 font-medium">{step}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-2xl flex items-start gap-4 my-10">
                            <Lightbulb className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                            <p className="text-blue-100/80 text-base m-0">
                                <strong>İpucu:</strong> El yazısı ve kalın stiller Instagram&apos;da en iyi görünen stillerdir. Ayrıca emoji kombinasyonları biyografinizi daha da özelleştirir.
                            </p>
                        </div>

                        <h3>WhatsApp</h3>
                        <p>WhatsApp&apos;ta şekilli yazıyı mesajlarınızda, durum güncellemelerinizde ve grup isimlerinizde kullanabilirsiniz. Üstelik diğer tarafın da şekilli yazıyı görebilmesi için herhangi bir uygulama yüklemesine gerek yoktur. Çünkü Unicode her cihazda desteklenmektedir.</p>

                        <h3>PUBG Mobile</h3>
                        <p>PUBG Mobile, Türkiye&apos;nin en çok oynanan mobil oyunları arasındadır. Akılda kalıcı bir şekilli nick, rakiplerinizi bile etkiler.</p>

                        <div className="bg-amber-500/5 border border-amber-500/10 p-6 rounded-2xl flex items-start gap-4 my-10">
                            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                            <p className="text-amber-100/80 text-base m-0">
                                <strong>Dikkat:</strong> PUBG Mobile&apos;da 16 karakter sınırı mevcuttur. Bazı karmaşık Unicode stilleri PUBG tarafından reddedilebilir. Bu nedenle stili önce taslak bölümünde test edin, ardından asıl alana yapıştırın.
                            </p>
                        </div>

                        <h2>Şekilli Yazı Nasıl Yapılır? Adım Adım Rehber</h2>
                        <div className="not-prose space-y-4 my-12">
                            {[
                                { t: "Aracı Açın", d: "Güvenilir bir şekilli yazı aracını açın." },
                                { t: "Metni Yazın", d: "Giriş kutusuna şekillendirmek istediğiniz metni yazın. Türkçe karakterler tam destek sunan araçlarda sorunsuz dönüştürülür." },
                                { t: "Kopyala & Yapıştır", d: "Açılan stil listesinden beğendiğiniz stili seçin ve 'Kopyala' butonuna tıklayın. Ardından istediğiniz platforma yapıştırın." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-8 rounded-3xl bg-[#111827] border border-white/[0.06]">
                                    <div className="text-4xl font-black text-indigo-500/30">{i + 1}</div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-2">{item.t}</h4>
                                        <p className="text-gray-400 leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2>Türkçe Karakter Desteği: Önemli Bir Nokta</h2>
                        <p>
                            Birçok global şekilli yazı aracı, Türkçe karakterleri ya hiç desteklemez ya da yanlış dönüştürür. Bu durum özellikle Türk kullanıcılar için ciddi bir sorun oluşturmaktadır.
                        </p>
                        <p>
                            Örneğin &quot;Güzel şekilli Türkçe&quot; yazısını test ettiğinizde, bazı araçlar ğ, ş ve ü harflerini bozuk gösterir. Bu yüzden Türkçe karakter desteğini açıkça belirten araçları tercih etmeniz gerekir. Böyle araçlar, her Türkçe harfi Unicode karşılığıyla doğru şekilde eşleştirir.
                        </p>

                        <h2>Şekilli Yazı Yazarken Yapılan Yaygın Hatalar</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                            {[
                                { t: "Hata 1", d: "Platformda test etmeden kullanmak. Her stil her platformda aynı görünmez." },
                                { t: "Hata 2", d: "Çok fazla karmaşık stil kullanmak. Okunaksızlık yaratabilir." },
                                { t: "Hata 3", d: "Türkçe desteği olmayan araç kullanmak. Bozuk karakterli metinler oluşur." },
                                { t: "Hata 4", d: "PUBG karakter sınırını göz ardı etmek. 16 karakter sınırına dikkat edin." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                                    <h4 className="text-amber-500 font-bold mb-2 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4" /> {item.t}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>

                        <h2>Şekilli Yazı ve SEO: Dikkat Edilmesi Gerekenler</h2>
                        <p>
                            Web sitesi içeriklerinde şekilli yazı kullanmak isteyenler için önemli bir uyarı: Arama motorları Unicode karakterleri her zaman doğru okuyamaz. Bu nedenle, web sitenizin ana içeriklerinde şekilli yazı kullanmaktan kaçınmanız önerilir.
                        </p>

                        <div className="mt-24 pt-24 border-t border-white/[0.06]">
                            <h2>Sıkça Sorulan Sorular</h2>
                            <div className="not-prose space-y-4 mt-12">
                                {[
                                    { q: "Şekilli yazı nedir ve nasıl çalışır?", a: "Şekilli yazı, Unicode standardı altında tanımlanan özel karakterlerin normal harflerin yerine kullanılmasıyla oluşturulan görsel metin stilidir. Her cihaz Unicode'u desteklediğinden her platformda görüntülenebilir." },
                                    { q: "Şekilli yazıyı mobil cihazlarda kullanabilir miyim?", a: "Evet. Şekilli yazı araçları tarayıcı tabanlıdır ve iPhone/Android dahil tüm cihazlarda çalışır. Ancak bazı stillerin görünümü mobilde farklılık gösterebilir." },
                                    { q: "Türkçe harfler şekilli yazıda çalışıyor mu?", a: "Evet, ancak yalnızca Türkçe karakter desteği sunan araçlarda. Ğ, ü, ş, ı, ö ve ç harflerinin doğru dönüştürüldüğünden emin olmak için aracı test etmeniz gerekir." },
                                    { q: "PUBG'de şekilli yazı kullanabilir miyim?", a: "Evet, PUBG Mobile'da şekilli yazı kullanılabilir. Ancak 16 karakter sınırına dikkat etmeniz ve bazı karmaşık stillerin reddedilebileceğini göz önünde bulundurmanız gerekir." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group rounded-2xl border border-white/[0.06] bg-[#111827] transition-all duration-300">
                                        <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-200 list-none text-lg select-none">
                                            {faq.q}
                                            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-indigo-400" />
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
                            <p className="text-xl text-gray-300 font-medium leading-relaxed italic border-l-4 border-indigo-500/30 pl-8">
                                Şekilli yazı, sosyal medyada ve oyunlarda öne çıkmanın en kolay ve ücretsiz yollarından biridir. Doğru stili ve doğru platformu seçtiğinizde, sıradan bir metin anında dikkat çekici bir içeriğe dönüşür.
                            </p>
                            <p className="text-gray-400 mt-8">
                                Türkçe karakter desteği sunan, düzenli güncellenen ve hızlı çalışan bir araç seçimi her şeyden önce gelir. Teknoloji değişiyor; kullandığınız araç da bu değişime ayak uydurmalıdır. Şekilli yazı dünyasına adım atmak için tek yapmanız gereken, bir araç açmak ve denemek.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
