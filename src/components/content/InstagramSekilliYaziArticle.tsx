"use client";
import { Container } from "../layout/Container";
import { AlertTriangle, ChevronDown } from "lucide-react";
import Link from "next/link";

export const InstagramSekilliYaziArticle = () => {
    return (
        <section className="py-20 md:py-32 bg-[#0B0F1A] border-t border-white/[0.06] font-sans">
            <Container>
                <div className="mx-auto max-w-4xl">
                    <div className="prose prose-invert prose-lg prose-slate max-w-none 
                        prose-headings:text-white prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-strong:text-white prose-strong:font-bold
                        prose-li:text-gray-300
                        prose-a:text-pink-400 hover:prose-a:text-pink-300 prose-a:no-underline prose-a:border-b prose-a:border-pink-400/30 hover:prose-a:border-pink-300
                        [&>h2]:mt-24 [&>h2]:first:mt-0 [&>h2]:mb-8 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:flex [&>h2]:items-center [&>h2]:gap-4
                        [&>h2]:before:content-[''] [&>h2]:before:w-2 [&>h2]:before:h-8 [&>h2]:before:bg-pink-500 [&>h2]:before:rounded-full
                        [&>h3]:mt-12 [&>h3]:text-2xl [&>h3]:font-bold">

                        <div className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight">Instagram Şekilli Yazı (Kopyala Yapıştır + Türkçe Destek)</div>

                        <p>Instagram profiline giriyorsun. Her şey normal görünüyor. Ama bir sorun var. Profilin diğerlerinden farklı değil. Aynı yazı, aynı stil. Kimse dikkat etmiyor.</p>

                        <p>Daha kötüsü, Instagram font değiştirme seçeneği sunmaz. Bu yüzden profilin sıradan kalır. Ancak çözüm çok basit: <Link href="/sekilli-yazi"><strong>şekilli yazı</strong></Link>.</p>

                        <hr className="border-white/10 my-12" />

                        <h2>Instagram Şekilli Yazı Nedir?</h2>
                        <p>Instagram şekilli yazı, normal harflerin farklı Unicode karakterlerle değiştirilmiş halidir. Bu sayede yazı farklı görünür.</p>
                        
                        <p><strong>Örnek:</strong></p>
                        <ul>
                            <li>Normal: Instagram</li>
                            <li>Şekilli: 𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎</li>
                        </ul>

                        <p>Bu bir font değişimi değildir. Bu bir karakter değişimidir.</p>

                        <hr className="border-white/10 my-12" />

                        <h2>Instagram Şekilli Yazı Neden Çalışır?</h2>
                        <p>Instagram özel font yüklemeye izin vermez. Ancak Unicode karakterlerini destekler.</p>
                        
                        <p>Unicode sistemi yaklaşık 150.000 karakter içerir. Bu karakterler farklı görünümler sağlar.</p>
                        
                        <p>Bu yüzden:</p>
                        <ul>
                            <li>Font değişmez</li>
                            <li>Karakter değişir</li>
                            <li>Instagram bunu normal metin olarak algılar</li>
                        </ul>
                        
                        <p>Daha fazla bilgi için: <a href="https://home.unicode.org/" target="_blank" rel="noopener noreferrer">Unicode resmi sitesi</a></p>

                        <hr className="border-white/10 my-12" />

                        <h2>Şekilli Yazı Nasıl Yapılır?</h2>
                        <div className="space-y-4 my-8 not-prose">
                            {[
                                <Link key="step1" href="/sekilli-yazi" className="text-pink-400 hover:text-pink-300 transition-colors underline underline-offset-4 decoration-pink-400/30 hover:decoration-pink-400">şekilli yazı aracını aç</Link>,
                                "Metnini yaz",
                                "Stil seç",
                                "Kopyala",
                                "Instagram'a yapıştır"
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 items-center bg-white/[0.02] p-4 rounded-xl border border-white/[0.04]">
                                    <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold shrink-0">{i+1}</div>
                                    <div className="text-gray-300 font-medium m-0">{step}</div>
                                </div>
                            ))}
                        </div>

                        <blockquote className="border-l-4 border-pink-500 bg-pink-500/5 p-6 rounded-r-2xl my-8 italic text-gray-300">
                            Mobilde metne uzun basarak kopyalayabilirsin.
                        </blockquote>

                        <hr className="border-white/10 my-12" />

                        <h2>Instagram Karakter Limitleri</h2>
                        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-8 shadow-xl not-prose">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Alan</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Limit</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { field: "İsim", limit: "30 karakter" },
                                        { field: "Biyografi", limit: "150 karakter" },
                                        { field: "Açıklama", limit: "2200 karakter" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-6 text-white text-sm font-bold">{row.field}</td>
                                            <td className="p-6 text-gray-400 text-sm">{row.limit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p><strong>İpucu:</strong> Süslü yazılar limitleri hızlı doldurur.</p>

                        <hr className="border-white/10 my-12" />

                        <h2>En Güzel Yazı Stilleri</h2>
                        <div className="not-prose grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                            {[
                                { style: "𝒮𝑒𝓀𝒾𝓁𝓁𝒾", name: "El yazısı" },
                                { style: "𝗦𝗘𝗞𝗜𝗟𝗟𝗜", name: "Kalın" },
                                { style: "𝔖𝔢𝔨𝔦𝔩𝔩𝔦", name: "Gotik" },
                                { style: "ⓈⒺⓀⒾⓁⓁⒾ", name: "Yuvarlak" },
                                { style: "𝕊𝕖𝕜𝕚𝕝𝕝𝕚", name: "Modern" }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#111827] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-pink-500/30 transition-all flex flex-col justify-center items-center">
                                    <div className="text-xl text-white font-display mb-2">{item.style}</div>
                                    <div className="text-[11px] text-pink-400 font-bold uppercase tracking-widest">{item.name}</div>
                                </div>
                            ))}
                        </div>

                        <hr className="border-white/10 my-12" />

                        <h2>Kimler Kullanmalı?</h2>
                        <h3>Genç Kullanıcılar</h3>
                        <p>Daha dikkat çekici profil oluşturmak için kullanır.</p>

                        <h3>Oyuncular</h3>
                        <p>PUBG ve Free Fire nickleri için idealdir.</p>

                        <h3>Influencer</h3>
                        <p>Marka kimliği oluşturmak için kullanır.</p>

                        <h3>İşletmeler</h3>
                        <p>Profesyonel biyografi oluşturmak için kullanır.</p>

                        <hr className="border-white/10 my-12" />

                        <h2>En Yaygın Hatalar ve Çözümleri</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8">
                            {[
                                { issue: "Karakterler kutu (□□□) oluyor", solution: "Daha basit stil seç" },
                                { issue: "Biyografi kaydedilmiyor", solution: "Metni kısalt" },
                                { issue: "Mobilde farklı görünüyor", solution: "Telefonda test et" },
                                { issue: "Güncellemeden sonra bozuldu", solution: "Yeni stil seç" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-xl">
                                    <div className="text-white font-bold mb-3 flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                        <span>{item.issue}</span>
                                    </div>
                                    <div className="text-gray-400 text-sm ml-8">
                                        <strong className="text-emerald-400">Çözüm:</strong> {item.solution}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <hr className="border-white/10 my-12" />

                        <h2>Instagram Biyografi Yazıları</h2>
                        <p>İyi bir bio:</p>
                        <ul>
                            <li>Kısa olmalı</li>
                            <li>Okunabilir olmalı</li>
                            <li>Tek stil içermeli</li>
                        </ul>
                        <div className="bg-[#111827] border border-white/[0.06] p-6 rounded-2xl my-6 not-prose">
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Örnek:</div>
                            <div className="text-white text-lg">✨ 𝑴𝒐𝒕𝒊𝒗𝒂𝒕𝒊𝒐𝒏 | 💼 Freelancer</div>
                        </div>

                        <hr className="border-white/10 my-12" />

                        <h2>Güvenli mi?</h2>
                        <p>Evet, tamamen güvenlidir.</p>
                        <ul>
                            <li>Giriş gerekmez</li>
                            <li>Şifre istemez</li>
                            <li>Veri toplamaz</li>
                        </ul>

                        <blockquote className="border-l-4 border-emerald-500 bg-emerald-500/5 p-6 rounded-r-2xl my-8 italic text-gray-300">
                            <strong>Uzman görüşü:</strong> Güvenilir araçlar sadece metni dönüştürür.
                        </blockquote>

                        <hr className="border-white/10 my-12" />

                        <h2>Sık Sorulan Sorular</h2>
                        <div className="not-prose space-y-4 mt-8">
                            {[
                                { q: "Instagram şekilli yazı ücretsiz mi?", a: "Evet." },
                                { q: "Türkçe karakter destekli mi?", a: "Evet." },
                                { q: "Story'de çalışır mı?", a: "Kısmen." },
                                { q: "Kaç stil var?", a: "40+ stil vardır." }
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

                        <hr className="border-white/10 my-12" />

                        <h2>Sonuç</h2>
                        <p className="text-lg text-gray-300 font-medium leading-relaxed italic border-l-4 border-pink-500/30 pl-8 my-6">
                            Deneyimlerime göre, şekilli yazı profilini öne çıkarır. Küçük bir değişiklik büyük fark yaratır.
                        </p>
                        <p>
                            Ancak aşırı kullanım kötü görünür. En iyi yöntem: <span className="text-pink-400 font-bold">sadece önemli kelimelerde kullan.</span>
                        </p>

                    </div>
                </div>
            </Container>
        </section>
    );
};
