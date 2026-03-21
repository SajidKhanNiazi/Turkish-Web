import Link from "next/link";
import { Container } from "../layout/Container";
import { ChevronDown, Info, AlertTriangle, Lightbulb, CheckCircle2, Quote, Sparkles } from "lucide-react";

export const SekilliIsimYazmaArticle = () => {
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
                        [&>h2]:before:content-[''] [&>h2]:before:w-2 [&>h2]:before:h-8 [&>h2]:before:bg-indigo-500 [&>h2]:before:rounded-full
                        [&>h3]:mt-12 [&>h3]:text-2xl [&>h3]:font-bold">
                        
                        <h1>Şekilli İsim Yazma: Türkçe İsimler İçin Eksiksiz Stil Rehberi (2026)</h1>
                        
                        <div className="bg-indigo-900/10 p-8 md:p-10 rounded-3xl border border-indigo-500/20 mb-12 shadow-2xl relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
                                <Sparkles className="w-20 h-20 text-indigo-400" />
                           </div>
                           <p className="text-xl text-gray-300 leading-relaxed mb-6 italic relative z-10">
                                İsminizi sosyal medyada veya oyunlarda yazıyorsunuz. Ama sıradan bir yazı tipiyle kimse sizi fark etmiyor. Herkes aynı standart harfleri kullanıyor ve kalabalıkta kaybolup gidiyorsunuz. Bu durum hem Instagram biyografilerinde hem de PUBG lobisinde ciddi bir görünürlük sorunu yaratıyor.
                           </p>
                           <p className="text-lg text-indigo-200 font-medium relative z-10">
                                Neyse ki <strong>şekilli isim yazma</strong> tam da bu sorunu çözüyor. Ahmet, Ayşe, Zeynep veya Burak — hangi isim olursa olsun, dakikalar içinde onlarca farklı şekilli stile dönüştürebilirsiniz. Bu rehberde şekilli isim yazmanın nasıl çalıştığını, hangi stillerin hangi platformlara uyduğunu ve Türkçe karakterler için nelere dikkat etmeniz gerektiğini adım adım anlatıyorum.
                           </p>
                        </div>

                        <h2>Şekilli İsim Nedir?</h2>
                        <p>
                            <strong>Şekilli isim</strong>, normal harfler yerine özel Unicode karakterler ve <Link href="/sekilli-yazi"><strong>Şekilli Yazı</strong></Link> stilleri kullanılarak oluşturulan kişiselleştirilmiş isim yazımıdır. Örneğin standart &quot;Ayşe&quot; ismi yerine <strong>𝒜𝓎𝓈ℯ</strong> veya <strong>『Ayşe』</strong> gibi görsel açıdan dikkat çekici bir isim oluşturabilirsiniz.
                        </p>
                        <p>
                            Öte yandan şekilli isimler gerçek anlamda bir &quot;font&quot; değildir. Bunlar, bilgisayar sistemlerinin ve tüm modern cihazların zaten tanıdığı Unicode karakterlerinden oluşur. Bu nedenle herhangi bir uygulama yüklemeye gerek yoktur. Kopyala-yapıştır yöntemiyle her platformda anında kullanabilirsiniz.
                        </p>

                        <blockquote className="border-l-4 border-indigo-500 bg-indigo-500/5 p-8 rounded-r-2xl my-12 italic text-gray-300">
                             &quot;Şekilli isimler, Unicode&apos;un Matematiksel Alfasayısal Semboller bloğundan türetilir. Bu karakterler, akademik denklemler için tasarlanmış olsa da zamanla sosyal medya ve oyun kullanıcıları tarafından kimlik ifadesi için benimsendi. Sonuç olarak bugün milyonlarca kullanıcı bu karakterleri günlük dijital yaşamında kullanıyor.&quot;
                             <footer className="mt-4 text-sm text-indigo-400 not-italic font-bold uppercase tracking-wider">
                                — Unicode teknik standartları ve dijital kimlik araştırmalarından derlenen genel kabul
                             </footer>
                        </blockquote>

                        <h2>Türkçe İsimler Nasıl Görünür? Önce / Sonra Örnekleri</h2>
                        <p>Şekilli isim yazmanın etkisini anlamanın en iyi yolu somut örneklere bakmaktır. Aşağıdaki tabloda popüler Türkçe isimler, farklı şekilli yazı stillerine dönüştürülmüş hâlleriyle gösterilmektedir.</p>

                        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-12 shadow-xl">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Normal İsim</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-indigo-400 border-b border-white/[0.06]">Şekilli Versiyon</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-300 border-b border-white/[0.06]">Stil</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { n: "Ahmet", s: "𝓐𝓱𝓶𝓮𝓽", l: "El Yazısı Kalın" },
                                        { n: "Ayşe", s: "𝒜𝓎𝓈ℯ", l: "El Yazısı" },
                                        { n: "Zeynep", s: "𝕫𝕖𝕪𝕟𝕖𝕡", l: "Kara Tahta" },
                                        { n: "Burak", s: "『Burak』", l: "Parantez" },
                                        { n: "Elif", s: "𝔈𝔩𝔦𝔣", l: "Gotik" },
                                        { n: "Mehmet", s: "𝐌𝐞𝐡𝐦𝐞𝐭", l: "Kalın Serif" },
                                        { n: "Selin", s: "Ⓢⓔⓛⓘⓝ", l: "Yuvarlak" },
                                        { n: "Emre", s: "꧁༺Emre༻꧂", l: "Semboller" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-6 text-gray-400 text-sm font-bold">{row.n}</td>
                                            <td className="p-6 text-white text-lg font-display">{row.s}</td>
                                            <td className="p-6">
                                                <span className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                                                    {row.l}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-2xl flex items-start gap-4 my-10">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                            <p className="text-emerald-100/80 text-base m-0 italic">
                                <strong>Kişisel Deneyim:</strong> Türkçe isimleri şekillendirirken el yazısı ve gotik stillerin en dikkat çekici sonuçları verdiğini fark ettim. Bununla birlikte oyun platformları için parantez ve kalın serif stiller çok daha güvenilir çalışıyor. Platform farkını göz önünde bulundurarak stil seçmek, en sık yapılan hatayı baştan önler.
                            </p>
                        </div>

                        <h2>En Popüler Şekilli İsim Stilleri</h2>
                        <p>Şekilli isim yazma araçları yüzlerce stil sunar. Kullanım amacınıza ve platformunuza göre en uygun stili seçmeniz gerekir.</p>

                        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                            {[
                                { n: "El Yazısı", c: "𝒜𝓎𝓈ℯ" },
                                { n: "El Yazısı Kalın", c: "𝓐𝓱𝓶𝓮𝓽" },
                                { n: "Gotik Yazı", c: "𝔈𝔩𝔦𝔣" },
                                { n: "Gotik Kalın Yazı", c: "𝕰𝖒𝖗𝖊" },
                                { n: "Kalın Serif", c: "𝐌𝐞𝐡𝐦𝐞𝐭" },
                                { n: "Kara Tahta", c: "𝕫𝕖𝕪𝕟𝕖𝕡" },
                                { n: "Yuvarlak", c: "Ⓢⓔⓛⓘⓝ" },
                                { n: "Kareli", c: "🅱🅤🅡🅐🅚" },
                                { n: "İtalik Serif", c: "𝐸𝑙𝑖𝑓" },
                                { n: "Küçük Büyük", c: "ᴀʜᴍᴇᴛ" },
                                { n: "Kalpli", c: "❤A❤y❤ş❤e❤" },
                                { n: "Işıltılı", c: "✨S✨e✨l✨i✨n✨" }
                            ].map((card, i) => (
                                <div key={i} className="bg-[#111827] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-indigo-500/30 transition-all">
                                    <div className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-3">{card.n}</div>
                                    <div className="text-lg text-white font-display leading-relaxed break-all">{card.c}</div>
                                </div>
                            ))}
                        </div>

                        <h2>Şekilli İsim Nasıl Yazılır?</h2>
                        <p>Şekilli isim yazma işlemi son derece kolaydır. Herhangi bir teknik bilgiye ihtiyaç duymazsınız. Sadece aşağıdaki adımları sırayla uygulayın:</p>

                        <div className="not-prose space-y-4 my-12">
                            {[
                                { s: "Şekilli isim aracını açın.", d: "Tarayıcıdan çalışır; uygulama indirmenize gerek yoktur." },
                                { s: "İsminizi yazın.", d: "Türkçe karakterler (ğ, ş, ü, ı, ö, ç) Türkçe destekli araçlarda eksiksiz dönüştürülür." },
                                { s: "Stilinizi seçin.", d: "Araç, isminizi otomatik olarak yüzlerce farklı stile dönüştürür." },
                                { s: "Kopyala butonuna tıklayın.", d: "İsim anında panonuza kopyalanır." },
                                { s: "İstediğiniz alana yapıştırın.", d: "Instagram, WhatsApp, PUBG, Discord — nerede kullanacaksanız oraya yapıştırın." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-2xl border border-white/[0.06] bg-[#111827]">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-black text-sm border border-indigo-500/20">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold mb-1">{step.s}</div>
                                        <div className="text-gray-400 text-sm leading-relaxed">{step.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-2xl flex items-start gap-4 my-10">
                            <Lightbulb className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                            <p className="text-indigo-100/80 text-base m-0">
                                <strong>İpucu:</strong> Önce test edin, sonra kaydedin. Özellikle PUBG gibi oyunlarda bazı stiller desteklenmeyebilir. Aracın taslak bölümünde deneyin, ardından gerçek profile yapıştırın.
                            </p>
                        </div>

                        <h2>Kız ve Erkek İsimleri İçin Stil Önerileri</h2>
                        <p>Hangi stilin daha iyi sonuç vereceği çoğunlukla kullanım amacına ve kişisel zevke bağlıdır. Bazı stillerin belirli isim tipleri için daha uyumlu göründüğü dikkat çekmektedir.</p>

                        <div className="not-prose grid md:grid-cols-2 gap-8 my-12">
                            <div className="bg-pink-500/5 border border-pink-500/10 rounded-3xl p-8">
                                <h3 className="text-pink-400 text-xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-2 h-6 bg-pink-500 rounded-full" />
                                    🌸 Kız İsimleri İçin
                                </h3>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                                        <span>El Yazısı</span>
                                        <span className="text-white font-display">𝒜𝓎𝓈ℯ</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                                        <span>El Yazısı Kalın</span>
                                        <span className="text-white font-display">𝓩𝓮𝔂𝓷𝓮𝓹</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                                        <span>Kalpli</span>
                                        <span className="text-white font-display">❤E❤l❤i❤f❤</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                                        <span>Işıltılı</span>
                                        <span className="text-white font-display">✨Selin✨</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                                        <span>Çiçekli</span>
                                        <span className="text-white font-display">✿Melek✿</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Yuvarlak</span>
                                        <span className="text-white font-display">Ⓓⓔⓝⓘⓩ</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-500/5 border border-blue-500/10 rounded-3xl p-8">
                                <h3 className="text-blue-400 text-xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-2 h-6 bg-blue-500 rounded-full" />
                                    ⚡ Erkek İsimleri İçin
                                </h3>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                                        <span>Gotik Kalın</span>
                                        <span className="text-white font-display">𝕬𝖍𝖒𝖊𝖙</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                                        <span>Kalın Serif</span>
                                        <span className="text-white font-display">𝐌𝐞𝐡𝐦𝐞𝐭</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                                        <span>Kareli</span>
                                        <span className="text-white font-display">🅱🅤🅡🅐🅚</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                                        <span>Parantez</span>
                                        <span className="text-white font-display">『Emre』</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                                        <span>Küçük Büyük</span>
                                        <span className="text-white font-display">ᴋᴀᴀɴ</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Kara Tahta</span>
                                        <span className="text-white font-display">𝕆𝕟𝕦𝕣</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2>Oyunlar İçin Şekilli İsim Yazma</h2>
                        <p>Oyun dünyasında şekilli isim adeta bir kimlik kartıdır. Doğru stili seçmek sizi diğer oyuncuların arasından hemen öne çıkarır. Bununla birlikte her oyunun farklı karakter desteği politikası bulunmaktadır.</p>

                        <h3>PUBG Şekilli Nick Yazma</h3>
                        <p>PUBG Mobile, Türkiye&apos;de en çok oynanan mobil oyunlarından biridir. Akılda kalıcı bir şekilli isim, sizi milyonlarca oyuncu arasından hemen öne taşır.</p>

                        <div className="bg-amber-500/5 border border-amber-500/10 p-6 rounded-2xl flex items-start gap-4 my-10">
                            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                            <p className="text-amber-100/80 text-base m-0">
                                <strong>Dikkat:</strong> PUBG Mobile&apos;da nick 14–16 karakter sınırını geçmemelidir. Çok uzun sembol zincirleri &quot;geçersiz karakter&quot; hatası verebilir. En güvenli format: kısa sembol + isim + kısa sembol. Örneğin: ꧁Burak꧂ veya 『Ahmet』
                            </p>
                        </div>

                        <p>Ayrıca karmaşık Zalgo ve glitch stillerinden kaçınmanız önerilir. Bu stiller bazı oyunlar tarafından otomatik olarak filtrelenmektedir. Bunun yerine kareli, kalın serif veya parantez stilleri tercih edin.</p>

                        <h2>Platformlara Göre Şekilli İsim Uyumluluk Tablosu</h2>
                        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111827] my-12 shadow-xl">
                            <table className="w-full text-left border-collapse m-0">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-400 border-b border-white/[0.06]">Platform</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-indigo-400 border-b border-white/[0.06]">Destek</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-300 border-b border-white/[0.06]">Önerilen Stil</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { p: "Instagram", d: "Tam Destek", s: "El Yazısı, Gotik" },
                                        { p: "WhatsApp", d: "Tam Destek", s: "Kalpli, El Yazısı" },
                                        { p: "PUBG Mobile", d: "Kısmi Destek", s: "Parantez, Kalın Serif" },
                                        { p: "Discord", d: "Tam Destek", s: "Gotik, Kara Tahta" },
                                        { p: "TikTok", d: "Tam Destek", s: "Işıltılı, Geniş" },
                                        { p: "Facebook", d: "Tam Destek", s: "Yuvarlak, El Yazısı" },
                                        { p: "Twitter / X", d: "Kısmi Destek", s: "Kalın, İtalik" }
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

                        <h2>Instagram&apos;da Şekilli İsim Nasıl Yazılır?</h2>
                        <p>Instagram, şekilli isim kullanımı için en popüler platformların başında gelmektedir. Biyografi alanı, görünen ad ve gönderi açıklamaları şekilli isimle çok daha kişisel bir hâl alır.</p>
                        <ol>
                            <li>Instagram uygulamasını açın.</li>
                            <li>Sağ alt köşeden profilinize gidin.</li>
                            <li>&quot;Profili Düzenle&quot; butonuna dokunun.</li>
                            <li>Ad veya Biyografi alanına kopyaladığınız şekilli ismi yapıştırın.</li>
                            <li>Sağ üst köşeden Kaydet&apos;e basın.</li>
                        </ol>

                        <h2>WhatsApp&apos;ta Şekilli İsim Nasıl Kullanılır?</h2>
                        <p>WhatsApp&apos;ta şekilli isim kullanmak, kişilerinizin sizi farklı ve akılda kalıcı bir şekilde görmesini sağlar.</p>
                        <ol>
                            <li>Şekilli isim aracından istediğiniz isim stilini kopyalayın.</li>
                            <li>WhatsApp uygulamasını açın.</li>
                            <li>Ayarlar → Profil bölümüne gidin.</li>
                            <li>Ad alanına kopyaladığınız şekilli ismi yapıştırın.</li>
                            <li>Kaydet&apos;e basın.</li>
                        </ol>

                        <h2>Türkçe Karakter Desteği: Neden Kritik?</h2>
                        <p>Global şekilli isim araçlarının büyük çoğunluğu İngilizce alfabesi üzerine inşa edilmiştir. Bu nedenle Türkçe karakterler — özellikle Ğ, Ş, Ü, İ, Ö ve Ç — pek çok araçta ya hiç dönüştürülmez ya da bozuk görünür.</p>
                        <p>Sonuç olarak Türkçe karakter desteğini açıkça belirten araçları tercih etmeniz gerekir. Böyle araçlar her Türkçe harfi doğru Unicode karşılığıyla eşleştirir. Daha fazla teknik bilgi için <a href="https://unicode.org/charts/" target="_blank" rel="noopener noreferrer">Unicode Consortium&apos;un resmi karakter tablosuna</a> başvurabilirsiniz.</p>

                        <h2>Şekilli İsim Yazarken Yapılan Yaygın Hatalar</h2>
                        <p><strong>Hata 1: Platformda test etmeden kullanmak.</strong> Aynı şekilli isim stili, masaüstünde farklı, mobilde farklı görünebilir.</p>
                        <p><strong>Hata 2: PUBG karakter sınırını göz ardı etmek.</strong> Unicode karakterler bazen 2–4 byte kaplar. Dolayısıyla görünen karakterden önce sınıra ulaşabilirsiniz.</p>
                        <p><strong>Hata 3: Türkçe desteği olmayan araç kullanmak.</strong> Bu araçlar Ğ, Ş, Ü gibi harfleri bozuk gösterir.</p>
                        <p><strong>Hata 4: Çok karmaşık stiller seçmek.</strong> Okunaksız bir isim dikkat çekmek yerine kafa karışıklığı yaratır.</p>

                        <div className="mt-24 pt-24 border-t border-white/[0.06]">
                            <h2>Sıkça Sorulan Sorular (SSS)</h2>
                            <div className="not-prose space-y-4 mt-12">
                                {[
                                    { q: "Şekilli isim yazma ücretsiz mi?", a: "Evet. Şekilli isim oluşturucu araçların tamamına yakını tamamen ücretsizdir. Üyelik, kayıt veya uygulama indirmeye gerek yoktur. Tarayıcıdan doğrudan kullanabilirsiniz." },
                                    { q: "Türkçe isimler şekilli yazı aracında doğru çalışıyor mu?", a: "Türkçe karakter desteği sunan araçlarda evet. Ğ, Ş, Ü, İ, Ö, Ç harfleri içeren isimler bu araçlarda eksiksiz dönüştürülür. Türkçe desteği olmayan araçlarda ise bu harfler bozuk görünebilir." },
                                    { q: "Şekilli isim yazma PUBG'de çalışıyor mu?", a: "Evet, ancak PUBG Mobile'da 14–16 karakter sınırı vardır. Karmaşık sembol zincirleri geçersiz karakter hatası verebilir. Kısa sembol + isim + kısa sembol formatını tercih etmeniz önerilir." },
                                    { q: "Şekilli isim Instagram biyografisine nasıl eklenir?", a: "Şekilli isim aracından istediğiniz stili kopyalayın. Instagram uygulamasını açın, Profili Düzenle bölümüne gidin ve Ad ya da Biyografi alanına yapıştırın. Kaydet butonuna basmanız yeterlidir." }
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
                                Şekilli isim yazma, dijital dünyada kendinizi ifade etmenin en hızlı ve en ücretsiz yollarından biridir. Doğru stili ve doğru platformu seçtiğinizde, sıradan bir isim anında dikkat çekici bir kimliğe dönüşür.
                            </p>
                            <p className="text-gray-400 mt-8">
                                Dijital içerik ve yazı stilleri üzerine uzun süredir çalışan biri olarak şunu net söyleyebilirim: en iyi araç, Türkçe&apos;yi tam destekleyen, hızlı çalışan ve platform bazlı test imkânı sunan araçtır. İsminizi şekillendirmeye başlamak için tek yapmanız gereken bir araç açmak ve denemektir.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
