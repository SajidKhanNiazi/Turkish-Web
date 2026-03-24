"use client";

import { Container } from "../layout/Container";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const WhatsAppArticle = () => {
    return (
        <section className="py-20 md:py-32 bg-[#0B0F1A] border-t border-white/[0.06]">
            <Container>
                <div className="mx-auto max-w-4xl">
                    <div className="prose prose-invert prose-lg prose-slate max-w-none 
                        prose-headings:text-white prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-strong:text-green-400 prose-strong:font-bold
                        prose-li:text-gray-300
                        prose-a:text-green-400 hover:prose-a:text-green-300 prose-a:no-underline prose-a:border-b prose-a:border-green-400/30 hover:prose-a:border-green-300
                        [&>h1]:mb-16 [&>h1]:text-4xl md:[&>h1]:text-6xl
                        [&>h2]:mt-24 [&>h2]:first:mt-0 [&>h2]:mb-8 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:flex [&>h2]:items-center [&>h2]:gap-4
                        [&>h2]:before:content-[''] [&>h2]:before:w-2 [&>h2]:before:h-8 [&>h2]:before:bg-green-500 [&>h2]:before:rounded-full
                        [&>h3]:mt-12 [&>h3]:text-2xl [&>h3]:font-bold">
                        
                        <article className="post-content">

                          <h1>WhatsApp Yazı Stili: WhatsApp’ta Yazı Stili Nasıl Değiştirilir?</h1>

                          <p>Bazen normal bir WhatsApp mesajı çok sade görünür. Bir kelimenin dikkat çekmesini, durum yazınızın daha iyi görünmesini ya da biyografinizin daha kişisel olmasını istersiniz; ancak nereden başlayacağınızı bilemezsiniz. Ben de bunu daha önce yaşadım. Özellikle kısa bir mesajı uzatmadan daha dikkat çekici yapmak istediğimde bu ihtiyaç daha net hissediliyor.</p>

                          <p>İşte burada <Link href="/"><strong>yazı stilleri</strong></Link> ve <strong>WhatsApp yazı stili</strong> işe yarar. Birkaç basit işaret ile metni WhatsApp içinde biçimlendirebilirsiniz. Ayrıca kopyala-yapıştır Unicode stilleri ile biyografinizi veya durumunuzu daha farklı gösterebilirsiniz. Bu rehberde iki yöntemi de çok basit şekilde anlatacağım.</p>

                          <h2>WhatsApp yazı stili ne demek?</h2>

                          <p>Basitçe söylemek gerekirse <strong>WhatsApp yazı stili</strong>, metnin WhatsApp içinde nasıl göründüğünü değiştirmek demektir. Bunu yapmanın iki ana yolu vardır. Birincisi, WhatsApp’ın kendi içinde sunduğu kalın, italik, üstü çizili ve monospace gibi biçimlendirmelerdir. İkincisi ise biyografi, durum veya özel mesajlar için kullanılan süslü Unicode yazı stilleridir.</p>

                          <p>Bunu evinizde kapılara etiket yapıştırmak gibi düşünebilirsiniz. Normal bir etiket “Oda” yazar. Kalın bir etiket daha dikkat çeker. İtalik etiket daha yumuşak görünür. Süslü etiket ise daha dekoratif durur. Oda aynı odadır, sadece görünüş değişir.</p>

                          <h2>WhatsApp’ın yerleşik yazı stilleri</h2>

                          <p>WhatsApp resmi olarak birkaç metin biçimini destekler. Bunlar <strong>kalın</strong>, <strong>italik</strong>, <strong>üstü çizili</strong>, <strong>monospace</strong>, <strong>madde işaretli liste</strong>, <strong>numaralı liste</strong>, <strong>alıntı</strong> ve <strong>satır içi kod</strong> seçenekleridir. Bu önemlidir; çünkü birçok eski içerik sadece dört tanesini anlatır.</p>

                          <h3>Kalın yazı</h3>

                          <p>Metnin başına ve sonuna yıldız işareti koyun.</p>

                          <p><strong>Örnek:</strong> <code>*Merhaba*</code></p>

                          <p>Önemli bir kelimeyi vurgulamak istediğinizde kalın yazı çok işe yarar. Örneğin aile grubunda <code>Akşam yemeği saat *8’de*</code> yazabilirsiniz. Böylece önemli bilgi hemen öne çıkar.</p>

                          <h3>İtalik yazı</h3>

                          <p>Metnin başına ve sonuna alt çizgi koyun.</p>

                          <p><strong>Örnek:</strong> <code>_Merhaba_</code></p>

                          <p>İtalik, daha yumuşak bir vurgu için uygundur. Mesela <code>_Neredeyse_ geldim</code> yazabilirsiniz. Güçlü değil ama fark edilir bir vurgu verir.</p>

                          <h3>Üstü çizili yazı</h3>

                          <p>Metnin başına ve sonuna tilde işareti koyun.</p>

                          <p><strong>Örnek:</strong> <code>~Merhaba~</code></p>

                          <p>Bu stil; iptal edilen, değişen ya da şaka ile düzeltilen şeyler için kullanışlıdır. Örneğin <code>Toplantı saati ~5~ 6 oldu</code> şeklinde yazabilirsiniz.</p>

                          <h3>Monospace yazı</h3>

                          <p>Metnin başına ve sonuna üç ters tırnak koyun.</p>

                          <p><strong>Örnek:</strong> <code>```Merhaba```</code></p>

                          <p>Monospace, kod, sabit metin ya da düzenli görünmesi gereken ifadeler için uygundur. Bu yüzden teknik mesajlarda veya kısa komutlarda faydalıdır.</p>

                          <h2>Birçok sayfanın atladığı diğer biçimlendirmeler</h2>

                          <p>WhatsApp birkaç ek metin biçimi daha destekler. Örneğin <strong>madde işaretli liste</strong>, <strong>numaralı liste</strong>, <strong>alıntı</strong> ve <strong>satır içi kod</strong> kullanabilirsiniz. Bunlar uzun mesajlarda, talimatlarda veya iş sohbetlerinde oldukça yararlıdır.</p>

                          <h3>Madde işaretli liste</h3>
                          <p>Her satırı <code>-</code> ya da <code>*</code> ve bir boşluk ile başlatın.</p>

                          <h3>Numaralı liste</h3>
                          <p>Her satırı <code>1.</code>, <code>2.</code> gibi rakamlarla başlatın.</p>

                          <h3>Alıntı</h3>
                          <p>Satırın başına <code>&gt;</code> ve bir boşluk koyun.</p>

                          <h3>Satır içi kod</h3>
                          <p>Kısa kelime veya ifadeyi tek ters tırnak içine alın.</p>

                          <p>Bu seçenekler mesajları daha düzenli yapar. Örneğin arkadaşlarla gezi planı yapıyorsanız, numaralı liste tek parça uzun mesajdan çok daha okunaklı olur. Benzer şekilde alıntı biçimi de önemli bir satırı öne çıkarır.</p>

                          <h2>WhatsApp’ta süslü yazı tipleri kullanılabilir mi?</h2>

                          <p>Evet, kullanılabilir; ancak burada önemli bir fark vardır. WhatsApp size uygulama içinde yüzlerce farklı yazı tipi vermez. Süslü görünen stiller genelde <strong>Unicode metin</strong> olarak kopyalanıp yapıştırılır. Bu yüzden süslü yazılar normal sohbetten çok biyografi, durum ve özel mesajlar daha yaygındır.</p>

                          <p>Yine de okunabilirliği unutmamak gerekir. Bazı süslü stiller güzel görünür; fakat bazıları zor okunur. Ayrıca bazı karakterler cihazlara göre farklı görünebilir. Bu nedenle kullanmadan önce metni test etmek iyi bir fikirdir.</p>

                          <h2>Android ve iPhone’da metin nasıl biçimlendirilir?</h2>

                          <p>İşaretleri ezberlemek istemiyorsanız, WhatsApp seçtiğiniz metin üzerinde biçimlendirme menüsü de sunar. Android’de genelde metni seçip ek seçenekler menüsünü açabilirsiniz. iPhone’da ise metni seçip biçimlendirme seçeneklerine ulaşabilirsiniz. Menü görünümü cihazdan cihaza biraz değişebilir; ancak mantık aynıdır.</p>

                          <p>Ayrıca amacınız yazıyı süslemek değil de daha rahat okumaksa, WhatsApp ayarlarından <strong>yazı boyutunu</strong> değiştirebilirsiniz. Desteklenen cihazlarda sohbet ayarları içinden metin boyutu ayarlanabilir.</p>

                          <h2>WhatsApp yazı stilini en iyi nasıl kullanabilirsiniz?</h2>

                          <p>Kalın yazıyı önemli bilgiler için kullanın. İtalik yazıyı hafif vurgu için tercih edin. Üstü çizili yazı, değişiklik veya mizah için uygundur. Monospace ise sabit metin ve kod için iyidir. Süslü Unicode yazıları ise daha çok biyografi, durum veya dikkat çekici özel mesajlarda kullanın. Kısacası, stili amaca göre seçin.</p>

                          <p>Benim tavsiyem normal sohbetlerde sade kalmanızdır. Örneğin ev grubunda <code>*Süt almayı unutmayın*</code> yazmak faydalıdır. Ama alışveriş mesajını çok süslü bir fontla yazmak kafa karıştırabilir. Buna karşılık, şık bir Unicode satırı durum kısmında veya biyografide hoş durabilir.</p>

                          <h2>Güvenilir dış kaynak</h2>

                          <p>Desteklenen resmi biçimlendirme yöntemlerini görmek için 
                            <a href="https://faq.whatsapp.com/539178204879377" target="_blank" rel="nofollow noopener">WhatsApp Help Center message formatting</a>
                            sayfasına bakabilirsiniz.
                          </p>

                          <div className="mt-24 pt-24 border-t border-white/[0.06]">
                            <h2>Sık Sorulan Sorular</h2>
                            <div className="not-prose space-y-4 mt-12">
                                {[
                                    { 
                                        q: "WhatsApp’ta kalın yazı nasıl yapılır?", 
                                        a: "Kelimenin veya cümlenin başına ve sonuna yıldız işareti koyun. Örneğin *metin*. WhatsApp bunu kalın gösterir." 
                                    },
                                    { 
                                        q: "WhatsApp varsayılan olarak süslü fontlar destekliyor mu?", 
                                        a: "Hayır, yüzlerce yerleşik font sunmaz. WhatsApp kendi biçimlendirmelerini destekler. Süslü stiller genelde Unicode metin olarak kopyala-yapıştır yöntemiyle kullanılır." 
                                    },
                                    { 
                                        q: "WhatsApp yazı stili Android ve iPhone’da çalışır mı?", 
                                        a: "Evet, çalışır. Hem Android hem iPhone cihazlarda WhatsApp metin biçimlendirme desteklenir. Sadece menü görünümü biraz farklı olabilir." 
                                    },
                                    { 
                                        q: "WhatsApp’ta yazı boyutu değiştirilebilir mi?", 
                                        a: "Evet. Desteklenen cihazlarda ayarlar kısmından metin boyutunu değiştirebilirsiniz." 
                                    }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group rounded-2xl border border-white/[0.06] bg-[#111827] transition-all duration-300">
                                        <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-200 list-none text-lg select-none">
                                            {faq.q}
                                            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-green-400" />
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-400 border-t border-white/[0.06] pt-4 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                          </div>

                          <h2>WhatsApp Yazı Stilleri Tablosu</h2>

                          <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-12 shadow-xl not-prose">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Stil</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Nasıl Yazılır?</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-green-400 border-b border-white/[0.06]">Örnek</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">En İyi Kullanım</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { s: "Kalın", h: "*metin*", e: "*Önemli*", k: "Ana bilgiyi vurgulamak" },
                                        { s: "İtalik", h: "_metin_", e: "_Belki_", k: "Hafif vurgu yapmak" },
                                        { s: "Üstü Çizili", h: "~metin~", e: "~Eski plan~", k: "Değişiklik veya şaka" },
                                        { s: "Monospace", h: "```metin```", e: "```Kod```", k: "Kod veya sabit metin" },
                                        { s: "Madde İşaretli Liste", h: "- metin", e: "- Süt", k: "Basit liste oluşturmak" },
                                        { s: "Numaralı Liste", h: "1. metin", e: "1. İlk adım", k: "Sıralı adımlar vermek" },
                                        { s: "Alıntı", h: "> metin", e: "> Hatırlatma", k: "Önemli satırı öne çıkarmak" },
                                        { s: "Satır İçi Kod", h: "`metin`", e: "`isim`", k: "Kısa teknik ifade göstermek" }
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                                            <td className="p-6 text-white font-bold">{row.s}</td>
                                            <td className="p-6 text-gray-400 font-mono"><code>{row.h}</code></td>
                                            <td className="p-6 text-green-400 font-mono"><code>{row.e}</code></td>
                                            <td className="p-6 text-gray-400">{row.k}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                          </div>

                          <div className="mt-24 pt-24 border-t border-white/10">
                            <h2>Sonuç</h2>
                            <p className="text-xl text-gray-300 font-medium">
                              Ben ilk başta <strong>WhatsApp yazı stili</strong> denince sadece kalın ve italik yazıyı düşünüyordum. Sonra fark ettim ki asıl önemli olan, doğru yerde doğru stili kullanmaktır. Küçük bir metin değişikliği bile mesajı daha açık, daha düzenli ve daha dikkat çekici hale getirebilir.
                            </p>
                            <p>
                              Pratik açıdan en iyi yöntem şudur: günlük mesajlarda WhatsApp’ın kendi biçimlendirmelerini kullanın; biyografi veya durum gibi alanlarda ise gerekirse süslü Unicode yazılara geçin. Böylece mesajlarınız hem okunabilir kalır hem de daha hoş görünür.
                            </p>
                          </div>

                        </article>
                    </div>
                </div>
            </Container>
        </section>
    );
};
