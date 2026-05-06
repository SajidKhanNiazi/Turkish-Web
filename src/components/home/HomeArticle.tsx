import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { FAQSection } from "../shared/FAQSection";

export const HomeArticle = () => {
    return (
        <section className="py-20 md:py-28 bg-[#0B0F1A] border-t border-white/[0.06]">
            <Container>
                <div className="mx-auto max-w-4xl">
                    <div className="prose prose-invert prose-lg prose-gray max-w-none 
                        prose-headings:text-white prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-strong:text-white prose-strong:font-bold
                        prose-li:text-gray-300
                        prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-a:no-underline prose-a:border-b prose-a:border-indigo-400/30 hover:prose-a:border-indigo-300
                        [&>h2]:mt-24 [&>h2]:first:mt-0 [&>h2]:mb-8 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:flex [&>h2]:items-center [&>h2]:gap-4
                        [&>h2]:before:content-[''] [&>h2]:before:w-2 [&>h2]:before:h-8 [&>h2]:before:bg-indigo-400 [&>h2]:before:rounded-full
                        [&>h3]:mt-12 [&>h3]:text-2xl [&>h3]:font-bold">
                        
                        <h2>Şık Yazı Stilleri Nedir?</h2>
                        <p>
                            Şık yazı stilleri, standart metinleri Unicode karakter sistemi kullanarak estetik ve dikkat çekici fontlara dönüştüren ücretsiz araçlardır. İndirme veya kurulum gerektirmeden, oluşturduğunuz metni kopyalayarak istediğiniz her platformda anında kullanabilirsiniz.
                        </p>

                        <figure className="my-12 not-prose max-w-2xl mx-auto">
                            <Image 
                                src="/images/instagram-bio-fonts.png" 
                                alt="Instagram biyografi için şık yazı font örnekleri" 
                                width={896} 
                                height={504} 
                                className="w-full h-auto rounded-2xl object-cover shadow-2xl border border-white/[0.08]"
                            />
                            <figcaption className="text-center text-sm text-gray-400 mt-4">
                                Instagram bio, TikTok ve oyun nickleri için hazır şık yazı örnekleri.
                            </figcaption>
                        </figure>

                        <h2>Şık Yazı Stilleri Nerelerde Kullanılır?</h2>
                        <ul>
                            <li>Instagram bio</li>
                            <li>TikTok username</li>
                            <li>PUBG nick</li>
                            <li>WhatsApp durum</li>
                        </ul>

                        <h2>Giriş</h2>
                                <p>
                                    Birçok kişi sosyal medya profillerini daha benzersiz göstermek ister. Ancak bio ya da kullanıcı adı yazdıklarında metin genellikle düz ve sıkıcı görünür. Ben de bir arkadaşımın Instagram profilini düzenlerken aynı sorunla karşılaştım. İsim normal görünüyordu ve hiç dikkat çekmiyordu.
                                </p>
                                <p>
                                    Farklı araçları denedikten sonra yazı stilleri ve <Link href="/sekilli-yazi"><strong>şekilli yazı</strong></Link> (stil sahibi metin) stillerini keşfettim. Bu stiller normal metni yaratıcı karakterlere dönüştürür. Bugün milyonlarca insan Instagram bio, WhatsApp isimleri, Discord kullanıcı adları ve oyun nickleri için bu yazı stillerini kullanıyor.
                                </p>

                                <h2>Yazı Stilleri Aracımız Nasıl Kullanılır</h2>
                                <p>
                                    Yazı stilleri oluşturucu aracımızı kullanmak çok basittir. Herhangi bir şey indirmeniz veya hesap oluşturmeniz gerekmez. Araç, normal metni anında stil sahibi yazı stillerine dönüştürür ve istediğiniz yerde kullanabilirsiniz.
                                    Kendi stil sahibi metninizi oluşturmak için aşağıdaki adımları takip edin.
                                </p>

                                <figure className="my-12 not-prose max-w-2xl mx-auto">
                                    <Image 
                                        src="/images/generator-copy-feature.png" 
                                        alt="Şık yazı oluşturucu aracı ile metin kopyalama işlemi" 
                                        width={896} 
                                        height={504} 
                                        className="w-full h-auto rounded-2xl object-cover shadow-2xl border border-white/[0.08]"
                                    />
                                    <figcaption className="text-center text-sm text-gray-400 mt-4">
                                        Metninizi yazın, stilinizi seçin ve tek tıkla kopyalayın.
                                    </figcaption>
                                </figure>

                                <h3 className="flex items-center gap-3 sm:gap-4">
                                    <Image src="/icons/step-1.png" alt="Adım 1: Metninizi Girin" width={56} height={56} className="not-prose m-0 rounded-2xl bg-white/5 p-2 shadow-sm shrink-0" />
                                    <span>Adım 1: Metninizi Girin</span>
                                </h3>
                                <p>
                                    Öncelikle normal metninizi giriş kutusuna yazın. Bu metin adınız, kullanıcı adınız, kısa bir mesaj veya oyun nickiniz olabilir.
                                    Metni yazdığınız anda araç otomatik olarak farklı yazı stilleri seçenekleri üretmeye başlar.
                                </p>

                                <h3 className="flex items-center gap-3 sm:gap-4">
                                    <Image src="/icons/step-2.png" alt="Adım 2: Yazı Stillerini İnceleyin" width={56} height={56} className="not-prose m-0 rounded-2xl bg-white/5 p-2 shadow-sm shrink-0" />
                                    <span>Adım 2: Yazı Stillerini İnceleyin</span>
                                </h3>
                                <p>
                                    Metninizi girdikten sonra oluşturucu birçok dekoratif yazı stili gösterir. Her stil, Unicode karakterleri kullanarak farklı bir görsel görünüm oluşturur.
                                    Listede ilerleyerek kişiliğinize veya kullanacağınız platforma uygun olan stili seçebilirsiniz.
                                </p>

                                <h3 className="flex items-center gap-3 sm:gap-4">
                                    <Image src="/icons/step-3.png" alt="Adım 3: Beğendiğiniz Stili Kopyalayın" width={56} height={56} className="not-prose m-0 rounded-2xl bg-white/5 p-2 shadow-sm shrink-0" />
                                    <span>Adım 3: Beğendiğiniz Stili Kopyalayın</span>
                                </h3>
                                <p>
                                    Beğendiğiniz yazı stilini bulduğunuzda metnin yanında bulunan kopyala butonuna tıklayın. Stil sahibi metin anında panonuza kopyalanacaktır.
                                    Bu sayede hem mobil hem de masaüstü kullanıcıları için süreç hızlı ve kolay olur.
                                </p>

                                <h3>Adım 4: İstediğiniz Yerde Yapıştırın</h3>
                                <p>
                                    Artık kopyaladığınız stil sahibi metni istediğiniz platformda kullanabilirsiniz. Örneğin:
                                </p>
                                <ul>
                                    <li>Instagram bio</li>
                                    <li>WhatsApp durum</li>
                                    <li>Discord kullanıcı adı</li>
                                    <li>oyun nickleri</li>
                                    <li>TikTok açıklamaları</li>
                                </ul>
                                <p>
                                    Metni yapıştırdıktan sonra görünümünü kontrol etmek iyi bir fikirdir çünkü bazı platformlar bazı stilleri daha iyi destekleyebilir.
                                </p>

                                <h2>Yazı Stilleri Nedir</h2>
                                <p>
                                    Yazı stilleri, metnin anlamını değiştirmeden görünümünü değiştiren farklı yazı biçimleridir.
                                </p>
                                <p>
                                    <strong>Örnek:</strong><br />
                                    Normal metin: <code>Hello World</code><br />
                                    Stil sahibi metin: <code>𝓗𝓮𝓵𝓵𝓸 𝓦𝓸𝓻𝓵𝓭</code>
                                </p>
                                <p>
                                    Kelime aynı kalır ancak harflerin görünümü değişir. İnsanlar genellikle stil sahibi metni şu amaçlarla kullanır:
                                </p>
                                <ul>
                                    <li>Instagram bio</li>
                                    <li>TikTok açıklamaları</li>
                                    <li>WhatsApp durum</li>
                                    <li>Discord kullanıcı adları</li>
                                    <li>oyun nickleri</li>
                                </ul>
                                <p>
                                    Stil sahibi yazı stilleri insanların internette yaratıcılığını ve kişiliğini ifade etmesine yardımcı olur.
                                </p>

                                <h2>Yazı Stilleri Nasıl Çalışır</h2>
                                <p>
                                    Çoğu stil sahibi yazı oluşturucu Unicode karakterlerini kullanır. Unicode, binlerce harf, sembol ve karakter içeren evrensel bir sistemdir. Bu karakterlerin bazıları normal harflerin dekoratif versiyonları gibi görünür.
                                </p>
                                <p>
                                    <strong>Örnek:</strong><br />
                                    Normal harf → <code>A</code><br />
                                    Unicode stil harfi → <code>𝒜</code>
                                </p>
                                <p>
                                    Oluşturucu araç, normal harfleri Unicode benzerleriyle değiştirir. Böylece farklı bir yazı stili görünümü oluşur.
                                    Bu stiller indirilen font dosyaları değildir. Sadece farklı görünen karakterlerdir.
                                    Unicode tabanlı oldukları için bu metinler birçok platformda kopyalanıp yapıştırılabilir. Ancak bazı uygulamalar, oyunlar veya eski cihazlar bazı stilleri tam olarak göstermeyebilir.
                                </p>

                                <h2>Yazı Stilleri Türkçe Harfleri Destekler mi</h2>
                                <p>
                                    Türk kullanıcılar için önemli bir soru, stil sahibi yazıların Türkçe karakterleri destekleyip desteklemediğidir.
                                    Yaygın Türkçe harfler şunlardır: <code>ğ</code>, <code>ü</code>, <code>ş</code>, <code>ı</code>, <code>ö</code>, <code>ç</code>.
                                </p>
                                <p>
                                    Her yazı oluşturucu bu harfleri doğru şekilde desteklemez. Bazı araçlar bu harfleri bozabilir veya yanlış sembollerle değiştirebilir. İyi bir yazı stilleri oluşturucu, bu harfleri doğru şekilde korur.
                                </p>
                                <p>
                                    Bu özellikle şu durumlarda önemlidir:
                                </p>
                                <ul>
                                    <li>Türkçe kullanıcı adları</li>
                                    <li>Instagram bio</li>
                                    <li>oyun nickleri</li>
                                </ul>
                                <p>
                                    Metni kullanmadan önce test etmek her zaman iyi bir fikirdir.
                                </p>

                                <h2>Popüler Yazı Stilleri Türleri</h2>
                                <p>
                                    Birçok farklı stil sahibi yazı türü vardır. Her stil metne farklı bir karakter kazandırır.
                                </p>

                                <h3><Link href="/kalin-yazi-stili">Kalın Yazı Stilleri</Link></h3>
                                <p>
                                    Kalın yazı stilleri güçlü ve dikkat çekici görünür.
                                </p>
                                <p>
                                    <strong>Örnek:</strong> <code>𝗕𝗼𝗹𝗱 𝗧𝗲𝘅𝘁</code>
                                </p>
                                <p>
                                    Bu stiller genellikle kullanıcı adları, kısa mesajlar ve sosyal medya bio için kullanılır.
                                </p>

                                <h3><Link href="/italik-egik-yazi">İtalik Yazı Stilleri</Link></h3>
                                <p>
                                    İtalik yazı daha zarif ve akıcı görünür.
                                </p>
                                <p>
                                    <strong>Örnek:</strong> <code>𝘪𝘵𝘢𝘭𝘪𝘤 𝘵𝘦𝘹𝘵</code>
                                </p>
                                <p>
                                    Bu stil genellikle alıntılar, açıklamalar ve yaratıcı içerikler için kullanılır.
                                </p>

                                <h3>El Yazısı ve Script Yazı Stilleri</h3>
                                <p>
                                    Script yazılar el yazısına benzer.
                                </p>
                                <p>
                                    <strong>Örnek:</strong> <code>𝓢𝓬𝓻𝓲𝓹𝓽 𝓣𝓮𝔁𝓽</code>
                                </p>
                                <p>
                                    Bu stiller estetik Instagram profilleri ve yaratıcı içerikler için popülerdir.
                                </p>

                                <h3>Gothic ve Old English Yazı Stilleri</h3>
                                <p>
                                    Bu yazı stilleri daha dramatik ve orta çağ tarzında görünür.
                                </p>
                                <p>
                                    <strong>Örnek:</strong> <code>𝔊𝔬𝔱𝔥𝔦𝔠 𝔗𝔢𝔵𝔱</code>
                                </p>
                                <p>
                                    Oyuncular ve yaratıcı kullanıcılar bu stilleri benzersiz kullanıcı adları için tercih eder.
                                </p>

                                <h3><Link href="/dekoratif-estetik-yazi-tipleri">Bubble ve Dekoratif Yazı Stilleri</Link></h3>
                                <p>
                                    Bubble yazılar yuvarlak ve eğlenceli görünür.
                                </p>
                                <p>
                                    <strong>Örnek:</strong> <code>ⓑⓤⓑⓑⓛⓔ ⓣⓔⓧⓣ</code>
                                </p>
                                <p>
                                    Bu stiller genellikle eğlenceli mesajlar ve dekoratif isimler için kullanılır.
                                </p>

                                <h2>Yazı Stilleri Nerelerde Kullanılır</h2>
                                <p>
                                    Stil sahibi metin birçok platformda kullanılabilir.
                                </p>

                                <h3><Link href="/sekilli-yazi/instagram-sekilli-yazi">Instagram</Link></h3>
                                <p>
                                    Instagram kullanıcıları yaratıcı bio kullanmayı sever. Stil sahibi yazı şu alanlarda kullanılabilir:
                                </p>
                                <ul>
                                    <li>profil bio</li>
                                    <li>açıklamalar</li>
                                    <li>hikaye başlıkları</li>
                                    <li>yorumlar</li>
                                </ul>
                                <p>
                                    Yaratıcı bir bio, profilin daha akılda kalıcı görünmesini sağlar.
                                </p>

                                <h3><Link href="/whatsapp-yazi-stili">WhatsApp</Link></h3>
                                <p>
                                    WhatsApp kullanıcıları mesajlarını dekoratif yazılarla süslemeyi sever. En yaygın kullanım alanları:
                                </p>
                                <ul>
                                    <li>WhatsApp durum</li>
                                    <li>grup isimleri</li>
                                    <li>takma isimler</li>
                                </ul>
                                <p>
                                    Stil sahibi yazı sohbetleri daha eğlenceli hale getirir.
                                </p>

                                <h3>Discord</h3>
                                <p>
                                    Discord topluluklarında yaratıcı kullanıcı adları oldukça yaygındır. Stil sahibi yazı kullanıcıların sunucularda dikkat çekmesini sağlar.
                                </p>

                                <h3><Link href="/sekilli-nick-yazma">Oyun Nickleri</Link></h3>
                                <p>
                                    Stil sahibi yazılar oyuncular arasında oldukça popülerdir. Bu yazılar şu oyunlarda sıkça kullanılır:
                                </p>
                                <ul>
                                    <li>PUBG</li>
                                    <li>Free Fire</li>
                                    <li>Fortnite</li>
                                    <li>Call of Duty</li>
                                </ul>
                                <p>
                                    Benzersiz bir oyun nicki oyuncunun kimliğini daha dikkat çekici yapar.
                                </p>

                                <h2>Yazı Stilleri Her Platformda Çalışır mı</h2>
                                <p>
                                    Her yazı stili her platformda aynı şekilde çalışmayabilir. Bazı platformlar Unicode karakterlerini daha iyi destekler.
                                </p>
                                <ul>
                                    <li><strong>Instagram</strong> &rarr; çoğu stil iyi çalışır</li>
                                    <li><strong>WhatsApp</strong> &rarr; çoğu stil iyi çalışır</li>
                                    <li><strong>Discord</strong> &rarr; birçok stili destekler</li>
                                    <li><strong>Oyunlar</strong> &rarr; bazen özel karakterleri sınırlayabilir</li>
                                </ul>
                                <p>
                                    Bu yüzden metni kullanmadan önce test etmek iyi bir fikirdir.
                                </p>

                                <h2>Hazır Yazı Stilleri Örnekleri</h2>
                                <p>
                                    İnsanların sık kullandığı bazı örnekler:
                                </p>
                                <p>
                                    <strong>Instagram Bio Örneği:</strong><br />
                                    Normal: <code>John | Photographer</code><br />
                                    Stil sahibi: <code>𝓙𝓸𝓱𝓷 | 𝓟𝓱𝓸𝓽𝓸𝓰𝓻𝓪𝓹𝓱𝓮𝓻</code>
                                </p>
                                <p>
                                    <strong>Oyun Nick Örneği:</strong><br />
                                    Normal: <code>ShadowPlayer</code><br />
                                    Stil sahibi: <code>𝕾𝖍𝖆𝖉𝖔𝖜𝕻𝖑𝖆𝖞𝖊r</code>
                                </p>
                                <p>
                                    <strong>Discord Kullanıcı Adı Örneği:</strong><br />
                                    Normal: <code>NightWolf</code><br />
                                    Stil sahibi: <code>𝓝𝓲𝓰𝓱𝓽𝓦𝓸𝓵𝓯</code>
                                </p>

                                <h2>En İyi Yazı Stilini Seçmek İçin İpuçları</h2>
                                <p>
                                    Doğru yazı stilini seçmek önemlidir.
                                </p>
                                <ul>
                                    <li>Kullanıcı adları ve bio için okunabilir stiller seçin.</li>
                                    <li>Okuması zor stillerden kaçının.</li>
                                    <li>Dikkat çekmek için kalın yazılar kullanabilirsiniz.</li>
                                    <li>Estetik profiller için script stiller iyi bir seçimdir.</li>
                                </ul>
                                <p>
                                    Metni paylaşmadan önce görünümünü kontrol etmek her zaman iyi bir fikirdir.
                                </p>

                                <h2>Yazı Stili Oluşturucular Güvenli midir</h2>
                                <p>
                                    Yazı stili oluşturucular genellikle güvenlidir. Bu araçlar cihazınıza herhangi bir yazılım yüklemez. Çoğu araç sadece harfleri Unicode karakterlerine dönüştürür.
                                </p>
                                <p>
                                    Ancak bazı platformlar her karakteri doğru göstermeyebilir. Eski cihazlar bazı stilleri basitleştirilmiş şekilde gösterebilir. En iyi sonuç için basit stiller kullanın ve paylaşmadan önce metni kontrol edin.
                                </p>

                                <h2>Yazı Stillerinin Geleceği</h2>
                                <p>
                                    Stil sahibi yazılar her geçen gün daha popüler hale geliyor. Sosyal medya daha görsel hale geldikçe insanlar kendilerini ifade etmek için yeni yollar arıyor.
                                </p>
                                <p>
                                    Sosyal medya profilleri ve dijital markalama üzerine çalışırken şunu fark ettim: küçük tasarım detayları büyük fark yaratabilir. Stil sahibi bir kullanıcı adı veya bio çoğu zaman düz metinden daha fazla dikkat çeker.
                                </p>
                                <p>
                                    Unicode sistemi gelişmeye devam ettikçe yaratıcı yazı stilleri de online iletişimin önemli bir parçası olmaya devam edecektir.
                                </p>

                        <FAQSection />
                    </div>
                </div>
            </Container>
        </section>
    );
};
