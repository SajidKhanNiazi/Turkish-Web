"use client";

import Link from "next/link";
import { Container } from "../layout/Container";
import { Sparkles, Info, ChevronDown, CheckCircle2 } from "lucide-react";

export const BoldArticle = () => {
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
                        
                        <h1>Kalın Yazı Stili: Kopyala-Yapıştır Bold ve Kalın Yazı Oluşturucu</h1>
                        
                        <p className="text-xl text-gray-400 leading-relaxed border-l-4 border-white/[0.06] pl-6 py-2 mb-12 italic">
                            Hiç Instagram veya TikTok için yazınızı kalın yapmak istediniz ama kolay bir yol bulamadınız mı? Birçok kişi sosyal medya biyografileri, oyun kullanıcı adları veya mesajları için kalın yazı stili arar.
                        </p>
                        
                        <p>
                            İşte bu yüzden <Link href="/" className="text-indigo-400 font-medium">Yazı Stilleri</Link> araçları kullanışlıdır. Bu araçlar normal metni çoğu platformda çalışan kalın Unicode karakterlerine dönüştürür. Metninizi yazarsınız, bir stil seçersiniz ve anında kopyalarsınız. Bu rehberde kalın yazı stilinin ne olduğunu ve bunları nasıl kullanabileceğinizi öğreneceksiniz.
                        </p>

                        <div className="p-8 md:p-12 rounded-3xl bg-[#111827] border border-white/[0.06] shadow-2xl shadow-indigo-500/5 my-12 not-prose">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-bold text-white">Kalın Yazı Örnekleri</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { style: "Kalın Serif", text: "𝐊𝐚𝐥𝐢𝐧 𝐘𝐚𝐳𝐢" },
                                    { style: "Kalın Sans", text: "𝗞𝗮𝗹𝗶𝗻 𝗬𝗮𝘇𝗶" },
                                    { style: "Kalın İtalik", text: "𝙆𝙖𝙡𝙞𝙣 𝙔𝙖𝙯𝙞" },
                                    { style: "Kutu Stili", text: "🅺🅰🅻🅸🅽 🆈🅰🆉🅸" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors group/item">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">{item.style}</span>
                                            <span className="text-xl font-medium text-gray-200">{item.text}</span>
                                        </div>
                                        <div className="p-2 w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                            <ChevronDown className="w-4 h-4 -rotate-90" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h2>Kalın Yazı Stili Nedir?</h2>
                        <p>
                            Kalın yazı stili, normal metnin kalın bir versiyonudur. Tipografide kalın yazı, önemli kelimeleri vurgulamak ve hiyerarşi oluşturmak için kullanılır.
                        </p>
                        <p>
                            Çoğu yazı oluşturucu, kalın fontları <span className="text-indigo-400 font-medium font-display">Unicode</span> karakterleri kullanarak oluşturur. Unicode, binlerce sembol içeren evrensel bir karakter sistemidir ve bu sayede herhangi bir font yüklemeden metne stil verilebilir.
                        </p>

                        <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 border-l-4 border-l-indigo-500 my-10">
                            <p className="text-indigo-200 text-base font-medium m-0 flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 shrink-0 text-indigo-400" />
                                <span>Unicode sayesinde bu karakterler neredeyse tüm sosyal medya uygulamalarında (Instagram, TikTok, WhatsApp) kopyala-yapıştır ile sorunsuz çalışır.</span>
                            </p>
                        </div>

                        <h2>Nasıl Oluşturulur?</h2>
                        <p>Kalın yazı stilleri oluşturmanın birkaç basit yolu vardır:</p>
                        <ul>
                            <li><strong>Online Araçlar:</strong> En hızlı ve kolay yöntemdir.</li>
                            <li><strong>Klavye Kısayolları:</strong> Word gibi uygulamalarda <code>Ctrl + B</code>.</li>
                            <li><strong>Biçimlendirme:</strong> WhatsApp gibi platformlarda <code>*metin*</code> formatı.</li>
                        </ul>

                        <h2>Popüler Stiller Tablosu</h2>
                        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-12 shadow-xl">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Normal Metin</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-indigo-400 border-b border-white/[0.06]">Serif Kalın</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-300 border-b border-white/[0.06]">Sans Kalın</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { normal: "Hello", serif: "𝐇𝐞𝐥𝐥𝐨", sans: "𝗛𝗲𝗹𝗹𝗼" },
                                        { normal: "Bold", serif: "𝐁𝐨𝐥𝐝", sans: "𝗕𝗼𝗹𝗱" },
                                        { normal: "Style", serif: "𝐒𝐭𝐲𝐥𝐞", sans: "𝗦𝐭𝐲𝗹𝗲" }
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                                            <td className="p-6 text-gray-500 font-mono text-sm">{row.normal}</td>
                                            <td className="p-6 font-bold text-white text-xl font-display">{row.serif}</td>
                                            <td className="p-6 font-bold text-indigo-400 text-xl font-display">{row.sans}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-24 pt-24 border-t border-white/[0.06]">
                            <h2>Sıkça Sorulan Sorular</h2>
                            <div className="not-prose space-y-4 mt-12">
                                {[
                                    { q: "Kalın yazı nasıl yapılır?", a: "Bir yazı oluşturucu kullanarak kalın yazı oluşturabilirsiniz. Metninizi yazın, bir stil seçin ve kopyalayın." },
                                    { q: "Instagram'da kalın yazı kullanabilir miyim?", a: "Evet. Unicode kalın yazıyı Instagram biyografinize, açıklamalarınıza veya yorumlarınıza yapıştırabilirsiniz." },
                                    { q: "Unicode kalın yazı nedir?", a: "Unicode kalın yazı, kalın harf gibi görünen özel karakterlerden oluşur ve çoğu platformda çalışır." }
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
                                Eğer metninizin internette daha fazla öne çıkmasını istiyorsanız, kalın <Link href="/">yazı stilleri</Link> kullanmak basit ama etkili bir yöntemdir. 
                            </p>
                            <p className="text-gray-400">
                                Bir yazı oluşturucu sayesinde birkaç saniye içinde kalın fontlar oluşturabilir ve bunları platform fark etmeksizin hemen kullanmaya başlayabilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
