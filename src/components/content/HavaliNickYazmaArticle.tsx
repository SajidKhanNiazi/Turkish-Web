import { Container } from "@/components/layout/Container";
import { CheckCircle2, Gamepad2, Instagram, Zap } from "lucide-react";

export const HavaliNickYazmaArticle = () => {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <Container>
        <div className="mx-auto max-w-4xl text-slate-800">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Havalı Nick Yazma: En İyi ve Şık Oyun İsimleri
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Dijital dünyada kimliğinizi yansıtmanın en etkili yolu, akılda kalıcı ve estetik bir kullanıcı adına sahip olmaktır. **Havalı nick yazma** aracımız, sıradan isimleri anında profesyonel oyuncu (pro gamer) ve sosyal medya fenomeni (influencer) seviyesine taşıyan özel bir motorla çalışır.
            </p>

            {/* Quick Info Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { title: "Oyunlar", desc: "PUBG, Valorant, Free Fire için agresif stiller.", icon: Gamepad2, color: "indigo" },
                { title: "Sosyal Medya", desc: "Instagram ve TikTok için estetik fontlar.", icon: Instagram, color: "pink" },
                { title: "Anında Kopyala", desc: "Tek tıkla kopyalayın ve hemen yapıştırın.", icon: Zap, color: "amber" }
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-slate-50 p-6 border border-slate-100 transition-all hover:shadow-lg hover:shadow-indigo-500/5">
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-${item.color}-500/10 text-${item.color}-600`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-16 text-2xl font-bold text-slate-900">En Havalı Nickler Nasıl Oluşturulur?</h3>
            <p className="mt-4 text-slate-600">
                Mükemmel bir nick, sadece harflerden değil, aynı zamanda karakteri yansıtan **özel semboller (乂, ⚡, ツ)** ve **farklı yazı tipleri (𝒃𝒐𝒍𝒅, 𝓼𝓬𝓻𝓲𝓹𝓽)** kombinasyonundan oluşur. Aracımız, sizin için binlerce varyasyon arasından en yüksek &quot;cool&quot; skoruna sahip olanları en üstte gösterir.
            </p>

            <div className="mt-10 rounded-3xl bg-indigo-900 p-8 text-white sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <h4 className="text-xl font-black sm:text-2xl mb-6">Şık Nick Yazmanın Sırları:</h4>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-300 mt-1 shrink-0" />
                        <div>
                            <span className="font-bold">Dengeli Sembol Kullanımı:</span> Sadece tek bir tarafa değil, ismin her iki yanına orantılı sembol eklemek (örneğin: ⚡Name⚡) görsel estetiği artırır.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-300 mt-1 shrink-0" />
                        <div>
                             <span className="font-bold">Font Uyumu:</span> Agresif bir oyun nicki için kalın (Bold) fontları, romantik veya estetik bir bio için el yazısı (Script) fontları tercih edin.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-300 mt-1 shrink-0" />
                        <div>
                            <span className="font-bold">Kısa ve Özdür:</span> Nickiniz ne kadar kısa olursa, kullanılan semboller o kadar çok dikkat çeker. Özellikle 15 karakter altındaki nickler daha profesyonel görünür.
                        </div>
                    </li>
                </ul>
            </div>

            <h3 className="mt-16 text-2xl font-bold text-slate-900">Platform Uyumluluğu</h3>
            <p className="mt-4 text-slate-600">
                Aracımız tarafından üretilen havalı isimler, Unicode standardını destekleyen tüm modern platformlarda sorunsuz çalışır:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-100 bg-slate-50">
                <table className="w-full text-left text-sm font-medium">
                    <thead className="bg-slate-100/50 text-slate-900">
                        <tr>
                            <th className="px-6 py-4">Platform</th>
                            <th className="px-6 py-4">Önerilen Tarz</th>
                            <th className="px-6 py-4">Durum</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr>
                            <td className="px-6 py-4 font-bold text-indigo-600 italic">PUBG Mobile</td>
                            <td className="px-6 py-4 text-slate-500">Gamer / Agresif</td>
                            <td className="px-6 py-4"><span className="text-green-600 font-black">✓ Uyumlu</span></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-bold text-indigo-600 italic">Instagram Bio</td>
                            <td className="px-6 py-4 text-slate-500">Estetik / Script</td>
                            <td className="px-6 py-4"><span className="text-green-600 font-black">✓ Uyumlu</span></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-bold text-indigo-600 italic">Discord</td>
                            <td className="px-6 py-4 text-slate-500">Minimal / Mono</td>
                            <td className="px-6 py-4"><span className="text-green-600 font-black">✓ Uyumlu</span></td>
                        </tr>
                        <tr>
                             <td className="px-6 py-4 font-bold text-indigo-600 italic">Valorant / LoL</td>
                             <td className="px-6 py-4 text-slate-500">Klan Tarzı</td>
                             <td className="px-6 py-4"><span className="text-green-600 font-black">✓ Uyumlu</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-20 border-t border-slate-100 pt-10">
                <p className="text-center text-sm font-bold text-slate-400 italic">
                    YazıStilleriPro — Türkiye&apos;nin en gelişmiş şekilli nick ve havalı isim oluşturucu platformu.
                </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
