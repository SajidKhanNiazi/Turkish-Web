"use client";

import { Container } from "../layout/Container";
import Link from "next/link";
import { Sparkles, CheckCircle2, ChevronDown } from "lucide-react";

export const AestheticArticle = () => {
    return (
        <section className="py-20 md:py-32 bg-[#0B0F1A] border-t border-white/[0.06]">
            <Container>
                <div className="mx-auto max-w-4xl">
                    <div className="prose prose-invert prose-lg prose-slate max-w-none 
                        prose-headings:text-white prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-strong:text-indigo-400 prose-strong:font-bold
                        prose-li:text-gray-300
                        prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-a:no-underline prose-a:border-b prose-a:border-indigo-400/30 hover:prose-a:border-indigo-300
                        [&>h1]:mb-16 [&>h1]:text-4xl md:[&>h1]:text-6xl
                        [&>h2]:mt-24 [&>h2]:first:mt-0 [&>h2]:mb-8 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:flex [&>h2]:items-center [&>h2]:gap-4
                        [&>h2]:before:content-[''] [&>h2]:before:w-2 [&>h2]:before:h-8 [&>h2]:before:bg-purple-500 [&>h2]:before:rounded-full
                        [&>h3]:mt-12 [&>h3]:text-2xl [&>h3]:font-bold">
                        
                        <h1 className="sr-only">Dekoratif Estetik Yazı Tipleri</h1>
                        
                        <h2>Giriş</h2>
                        <p className="text-xl text-gray-400 leading-relaxed border-l-4 border-white/[0.06] pl-6 py-2 mb-12 italic">
                            Birçok kişi sosyal medya metninin benzersiz görünmesini ister. Ancak, normal harfler çoğu zaman sade ve sıradan görünür. Instagram biyografimi ilk geliştirmeye çalıştığımda, profil hâlâ binlerce kişiyle benzer görünüyordu.
                        </p>

                        <p>
                            Sonunda, dekoratif metin stilleri bu sorunu çözdü. Normal harfleri şık Unicode karakterlerine dönüştürerek metin anında yaratıcı ve dikkat çekici hâle geldi. Bu keşif sayesinde, <Link href="/"><strong>yazı stilleri</strong></Link> platformumuz kullanıcıların dekoratif metinleri kolayca oluşturmasına yardımcı olmak için tasarlandı. Basit bir oluşturucu ile herkes saniyeler içinde kullanıcı adları, açıklamalar ve biyografiler için <strong>dekoratif estetik yazi tipleri</strong> oluşturabilir.
                        </p>

                        <h2>Dekoratif Estetik Metin Oluşturucu</h2>
                        <p>
                            Her şeyden önce, bir oluşturucunun nasıl çalıştığını anlamak süreci kolaylaştırır. Dekoratif metin oluşturucu, sıradan harfleri görsel olarak stil verilmiş karakterlere dönüştürür. Yazı tipleri yüklemek yerine, sistem sadece harfleri Unicode alternatifleriyle değiştirir.
                        </p>

                        <div className="p-8 md:p-12 rounded-3xl bg-[#111827] border border-white/[0.06] shadow-2xl shadow-purple-500/5 my-12 not-prose">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Adım Adım Kullanım</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { step: "1", text: "Metninizi giriş alanına yazın." },
                                    { step: "2", text: "Oluşturucu otomatik olarak birçok şık sürüm üretir." },
                                    { step: "3", text: "Beğendiğiniz tasarımı seçin." },
                                    { step: "4", text: "Stil verilmiş metni kopyalayın ve istediğiniz yere yapıştırın." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm border border-purple-500/20">
                                            {item.step}
                                        </span>
                                        <p className="text-gray-300 mt-1">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p>
                            Sonuç olarak, <strong>dekoratif estetik yazi tipleri</strong> oluşturmak hızlı ve zahmetsiz hâle gelir. Ayrıca, bu metin stilleri Instagram, Discord, WhatsApp ve TikTok gibi platformların çoğunda çalışır.
                        </p>

                        <h2>Dekoratif Metin Stilleri Örnekleri</h2>
                        <p>
                            Birçok kullanıcı hazır stilleri tercih eder. İşte bazı basit dekoratif örnekler:
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10 not-prose">
                            {[
                                "𝒟𝑒𝓀𝑜𝓇𝒶𝓉𝒾𝒻", "𝓓𝓮𝓴𝓸𝓻𝓪𝓽𝓲𝓯", "𝔇𝔢𝔨𝔬𝔯𝔞𝔱𝔦𝔣",
                                "𝘋𝘦𝙠𝘰𝘳𝘢𝘵𝘪𝘧", "🅓🅔🅚🅞🅡🅐🅣🅘🅕", "Ｄｅｋｏｒａｔｉｆ"
                            ].map((style, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-[#111827] border border-white/[0.06] text-center text-xl text-white font-display hover:border-purple-500/30 transition-colors">
                                    {style}
                                </div>
                            ))}
                        </div>

                        <h2>Dekoratif Metin Stilleri Türleri</h2>
                        <p>Dekoratif yazı stillerinin hepsi aynı değildir. Görsel görünüm ve tasarım amacına göre farklı kategoriler vardır.</p>

                        <h3>Script Stil Metin</h3>
                        <p>Script stiller zarif el yazısına benzer. Sonuç olarak, sanatsal ve akıcı görünürler.</p>
                        <p className="font-display text-2xl text-purple-400 tracking-wider">𝓢𝓬𝓻𝓲𝓹𝓽 • 𝒮𝒸𝓇𝒾𝓅𝓉</p>

                        <h3>Kalın Dekoratif Stiller</h3>
                        <p>Kalın stiller görünürlüğü artırır. Bu harfler hemen dikkat çeker ve başlıklar için idealdir.</p>
                        <p className="font-display text-2xl text-purple-400 tracking-wider">𝗕𝗼𝗹𝗱 • 𝘽𝙤𝙡𝙙</p>

                        <h3>Süslü Unicode Stilleri</h3>
                        <p>Süslü stiller özel Unicode karakterlerine dayanır. Oyuncular benzersiz takma adlar için bu stilleri sıkça seçer.</p>
                        <p className="font-display text-2xl text-purple-400 tracking-wider">ⒻⒶⓃⒸⓒⓎ • 千卂几匚ㄚ</p>

                        <h2>Dekoratif Metin Nerelerde Kullanılır</h2>
                        <p>Şık metin internette her yerde görünür. Özellikle Instagram profilleri, Discord kullanıcı adları ve WhatsApp durum mesajlarında karşımıza çıkar.</p>

                        <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 border-l-4 border-l-purple-500 my-10">
                            <p className="text-purple-200 text-base font-medium m-0 flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 shrink-0 text-purple-400" />
                                <span>Oyun takma adları için mükemmeldir: 𝕾𝖍𝖆𝖉𝖔𝖜𝕶𝖎𝖓𝖌</span>
                            </p>
                        </div>

                        <h2>Dekoratif Metin Neden Popülerdir</h2>
                        <p>Dijital iletişim büyük ölçüde görsel tarza dayanır. Bu stiller dikkat çeker, kişisel kimlik oluşturur ve profillerin daha sanatsal görünmesini sağlar.</p>

                        <h2>Oluşturucular Nasıl Çalışır?</h2>
                        <p>
                            Yazı tipi dosyasını değiştirmek yerine, oluşturucu harfleri görsel olarak benzer Unicode karakterleriyle değiştirir. Bu nedenle, çıktı kopyalanıp her yere yapıştırılabilir.
                        </p>

                        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-12 shadow-xl">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Harf</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-purple-400 border-b border-white/[0.06]">Dekoratif Karşılığı</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { l: "A", d: "𝓐" },
                                        { l: "B", d: "𝓑" },
                                        { l: "C", d: "𝓒" }
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                                            <td className="p-6 text-gray-500 font-mono text-xl">{row.l}</td>
                                            <td className="p-6 font-bold text-white text-3xl font-display">{row.d}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h2>Dekoratif Metin Kullanma İpuçları</h2>
                        <ul>
                            <li>Kısa metinlerde (kullanıcı adları gibi) kullanın.</li>
                            <li>Okunabilir kalan stilleri seçin.</li>
                            <li>Tek satırda çok fazla stil karıştırmaktan kaçının.</li>
                            <li>Yayımlamadan önce farklı platformlarda test edin.</li>
                        </ul>

                        <div className="mt-24 pt-24 border-t border-white/[0.06]">
                            <h2>Sıkça Sorulan Sorular</h2>
                            <div className="not-prose space-y-4 mt-12">
                                {[
                                    { 
                                        q: "Dekoratif estetik yazı tipleri nedir?", 
                                        a: "Dekoratif estetik yazı tipleri, normal metni daha şık ve dikkat çekici göstermek için kullanılan özel yazı stilleridir. Bu stiller genelde Unicode karakterleriyle oluşturulur ve sosyal medya, oyun kullanıcı adları, biyografi metinleri ve kısa mesajlarda kullanılır." 
                                    },
                                    { 
                                        q: "Dekoratif estetik yazı nasıl oluşturulur?", 
                                        a: "Dekoratif estetik yazı oluşturmak için bir yazı stili oluşturucu kullanabilirsiniz. Metninizi giriş kutusuna yazarsınız, araç otomatik olarak farklı stiller üretir ve ardından istediğiniz stili kopyalayıp kullanabilirsiniz." 
                                    },
                                    { 
                                        q: "Bu yazı stilleri Instagram ve Discord’da çalışır mı?", 
                                        a: "Evet, çoğu dekoratif estetik yazı stili Instagram, Discord, WhatsApp ve TikTok gibi platformlarda çalışır. Ancak bazı karakterlerin görünümü kullanılan cihaz veya uygulamaya göre küçük farklılıklar gösterebilir." 
                                    },
                                    { 
                                        q: "Dekoratif yazı tipleri güvenli midir?", 
                                        a: "Evet, bu stiller genellikle Unicode karakterleriyle oluşturulduğu için güvenlidir. Yani herhangi bir dosya indirmeniz gerekmez. Sadece metni kopyalayıp yapıştırırsınız." 
                                    },
                                    { 
                                        q: "Dekoratif estetik yazı tipleri nerelerde kullanılır?", 
                                        a: "Bu yazı stilleri en çok Instagram biyografilerinde, Discord kullanıcı adlarında, WhatsApp durumlarında, TikTok açıklamalarında ve oyun takma adlarında kullanılır. Kısa metinlerde daha etkili sonuç verir." 
                                    },
                                    { 
                                        q: "Dekoratif yazı tipleri ile normal font arasındaki fark nedir?", 
                                        a: "Normal fontlar cihazda veya tasarım programında kullanılan gerçek yazı tipleridir. Dekoratif estetik yazı tipleri ise çoğu zaman Unicode karakterleriyle oluşturulan kopyala-yapıştır metin stilleridir. Yani font dosyası yüklemeden kullanılabilir." 
                                    },
                                    { 
                                        q: "Dekoratif yazı tipleri mobil cihazlarda çalışır mı?", 
                                        a: "Evet, dekoratif yazı tipleri hem mobil cihazlarda hem de masaüstü bilgisayarlarda kullanılabilir. Yine de en iyi görünüm için metni kullanacağınız platformda test etmeniz faydalı olur." 
                                    }
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
                            <h2>Sonuç</h2>
                            <p className="text-xl text-gray-300 font-medium">
                                Dekoratif metin stilleri çevrim içi kimliğin önemli bir parçası hâline geldi. Sade metni yaratıcı ve akılda kalıcı bir şeye dönüştürerek kalabalık dijital alanlarda öne çıkabilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
