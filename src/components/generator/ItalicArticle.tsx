import Link from "next/link";
import { Container } from "../layout/Container";
import { ChevronDown, Info } from "lucide-react";

export const ItalicArticle = () => {
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
                        
                        <h1>İtalik Eğik Yazı: Kopyala Yapıştır İtalik Yazı Stilleri</h1>
                        
                        <p className="text-xl text-gray-400 leading-relaxed border-l-4 border-white/[0.06] pl-6 py-2 mb-12 italic">
                            Birçok kişi internette yazılarını daha dikkat çekici yapmak ister, ancak çoğu zaman bir sorunla karşılaşır. Instagram, WhatsApp veya Discord gibi uygulamalar yazı stilleri konusunda fazla seçenek sunmaz. Bu yüzden insanlar isimlerini veya biyografilerini italik eğik yazı şeklinde yazmak istediklerinde bunu nasıl yapacaklarını bilemezler.
                        </p>
                        
                        <p>
                            Yazı stilleri araçları üzerinde çalışırken bu sorunu birçok kez gördüm. Kullanıcılar yazılarını şık hale getirmek için hızlı ve kolay bir çözüm arıyor. Font indirmek veya tasarım programları kullanmak istemiyorlar. En pratik çözüm ise italik yazı oluşturucu araçlarıdır. Bu araçlar normal yazıyı saniyeler içinde kopyala yapıştır yapılabilen italik yazı stiline dönüştürür.
                        </p>

                        <h2>İtalik Eğik Yazı Nedir?</h2>
                        <p>
                            İtalik eğik yazı, harflerin sağ tarafa doğru hafif eğimli olduğu bir yazı stilidir. Genellikle kelimeleri vurgulamak veya yazıya estetik bir görünüm kazandırmak için kullanılır.
                        </p>
                        <p>
                            Tipografi dünyasında italik harfler normal harflerin özel olarak tasarlanmış bir versiyonudur. Bu harfler okunabilirliği koruyacak şekilde tasarlanır. Ancak internet üzerindeki çoğu yazı oluşturucu, italik görünüm elde etmek için Unicode karakterleri kullanır.
                        </p>

                        <div className="bg-[#111827] p-8 rounded-3xl border border-white/[0.06] my-12 shadow-2xl shadow-indigo-500/5">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                                    <Info className="w-5 h-5" />
                                </div>
                                <span className="text-sm text-gray-400 uppercase tracking-widest font-black font-sans">Örnek Karşılaştırma</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                                    <p className="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">Normal Yazı</p>
                                    <p className="text-xl text-white font-mono">Hello World</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                                    <p className="text-xs text-indigo-400 mb-2 font-bold uppercase tracking-wider">İtalik Eğik Yazı</p>
                                    <p className="text-3xl text-white font-display font-medium italic">𝘏𝘦𝘭𝘭𝘰 𝘞𝘰𝘳𝘭𝘥</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Bu karakterler çoğu uygulamada kopyalanıp yapıştırılabilir ve her yerde aynı şık görünümü korur.
                        </p>

                        <h2>İnsanlar Neden İtalik Yazı Kullanır?</h2>
                        <p>
                            İtalik yazı hem tasarımda hem de günlük yazışmalarda metni daha dinamik ve zarif göstermek için sıkça tercih edilir.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                            {[
                                { title: "Vurgu", desc: "Önemli kelimeleri saniyeler içinde öne çıkarın." },
                                { title: "Eserler", desc: "Kitap, film ve sanat eserleri için standart format." },
                                { title: "Sosyal Medya", desc: "Bio ve kullanıcı adlarını daha estetik yapar." },
                                { title: "Stil", desc: "Mesajlarınıza kişisel bir şıklık katar." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
                                    <h3 className="text-indigo-400 font-bold mb-2 text-lg"># {item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2>İtalik Yazı ile Eğik Yazı Arasındaki Fark</h2>
                        <p>
                            Birçok kullanıcı italik yazı ile eğik yazının (oblique) aynı şey olduğunu düşünür. Ancak tipografide bu iki kavram arasında teknik bir fark vardır.
                        </p>

                        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-12 shadow-xl">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Özellik</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-indigo-400 border-b border-white/[0.06]">İtalik Yazı</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-300 border-b border-white/[0.06]">Eğik Yazı</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    <tr>
                                        <td className="p-6 text-gray-400 text-sm font-bold">Harf Tasarımı</td>
                                        <td className="p-6 text-white text-base">Özel tasarım</td>
                                        <td className="p-6 text-gray-300 text-base">Normal harf eğimi</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 text-gray-400 text-sm font-bold">Tipografi Türü</td>
                                        <td className="p-6 text-white text-base">Gerçek font stili</td>
                                        <td className="p-6 text-gray-300 text-base">Biçimlendirme</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 text-gray-400 text-sm font-bold">Kullanım</td>
                                        <td className="p-6 text-white text-base">Profesyonel</td>
                                        <td className="p-6 text-gray-300 text-base">Basit format</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>İtalik Yazı Nasıl Yazılır?</h2>
                        
                        <h3>Bilgisayarda Yazma</h3>
                        <p>
                            Word veya Google Dokümanlar gibi araçlarda <code>Ctrl + I</code> kısayolu ile anında eğik yazabilirsiniz.
                        </p>

                        <h3>Telefonda Yazma</h3>
                        <p>
                            WhatsApp gibi uygulamalarda metnin başına ve sonuna alt çizgi koyarak (<code>_kelime_</code>) basit italik format elde edebilirsiniz.
                        </p>

                        <h3>Generator Kullanmak</h3>
                        <p>
                            Sosyal medya profilleri (Instagram, TikTok) için en pratik yol bir generator kullanmaktır. Sadece metni yazın, şık bir stil seçin ve kopyalayın.
                        </p>

                        <h2>Kopyala Yapıştır Örnekleri</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-12 not-prose">
                            {[
                                { normal: "Hello", style: "𝘏𝘦𝘭𝘭𝘰" },
                                { normal: "Style", style: "𝙃𝙚𝙡𝙡𝙤" },
                                { normal: "Art", style: "𝒽𝑒𝓁𝓁𝑜" },
                                { normal: "Premium", style: "𝑯𝒆𝒍𝒍𝒐" }
                            ].map((item, idx) => (
                                <div key={idx} className="group flex items-center justify-between p-6 rounded-2xl bg-[#111827] border border-white/[0.06] hover:border-indigo-500/30 transition-all shadow-lg hover:shadow-indigo-500/5">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">{item.normal}</span>
                                        <span className="text-2xl text-white font-display italic tracking-tight">{item.style}</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ChevronDown className="w-5 h-5 -rotate-90" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2>İtalik Yazı Generator Nasıl Çalışır?</h2>
                        <p>
                            Şık yazı generator araçları Unicode sistemi kullanır. Unicode, her harfi farklı bir sembol setiyle eşleştirir ve bu sayede herhangi bir font yüklemeden farklı görünümler elde edilir.
                        </p>
                        <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 border-l-4 border-l-indigo-500 my-10">
                            <p className="text-indigo-200 text-base font-medium m-0 italic">
                                <strong>Önemli:</strong> Bazı Türkçe harfler (ş, ğ, ı) her stilde çalışmayabilir. Bu durumda &quot;Tüm Karakterleri Destekle&quot; etiketli stilleri seçmeniz en iyi sonucu verir.
                            </p>
                        </div>

                        <div className="mt-24 pt-24 border-t border-white/[0.06]">
                            <h2>Sıkça Sorulan Sorular</h2>
                            <div className="not-prose space-y-4 mt-12">
                                {[
                                    { q: "İtalik eğik yazı ne demek?", a: "İtalik eğik yazı, harflerin sağa doğru eğimli olduğu bir yazı stilidir. Metni vurgulamak veya estetik görünüm oluşturmak için kullanılır." },
                                    { q: "İtalik yazı nasıl kopyalanır?", a: "Bir italik yazı generator aracı kullanarak metni farklı stillere dönüştürebilir ve istediğiniz stili kopyalayabilirsiniz." },
                                    { q: "İtalik yazı Instagram ve WhatsApp'ta çalışır mı?", a: "Evet. Unicode karakterleriyle oluşturulan italik yazı stilleri sosyal medya platformlarının çoğunda çalışır." },
                                    { q: "Neden bazı diller düzgün görünmez?", a: "Bazı Unicode karakter setleri tüm Türkçe harfleri içermeyebilir. Bu durumda farklı bir yazı stilini seçmeniz gerekir." }
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
                            <p className="text-xl text-gray-300 font-medium">
                                İtalik yazı, metni daha şık ve dikkat çekici hale getirmenin en kolay yollarından biridir. Bir kelimeyi vurgulamak, sosyal medya biyografinizi süslemek veya benzersiz bir kullanıcı adı oluşturmak için oldukça etkili bir yöntemdir.
                            </p>
                            <p className="text-gray-400">
                                <Link href="/">Font generator</Link> araçları üzerinden saniyeler içinde şık yazılar oluşturabilir ve bunları platform fark etmeksizin hemen kullanmaya başlayabilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
