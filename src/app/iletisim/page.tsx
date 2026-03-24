import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim | Yazı Stilleri Pro",
  description: "Yazı Stilleri Pro ile iletişime geçin. Soru, öneri ve reklam talepleriniz için bize ulaşın.",
};

export default function ContactPage() {
  return (
    <main className="py-20 md:py-32 bg-[#0B0F1A]">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-invert prose-indigo mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight">İletişim</h1>
            <p className="text-lg text-gray-400">
              Soru, öneri, hata bildirimi veya reklam iş birlikleri için bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapmaya çalışacağız.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="bg-[#111827] border border-white/[0.06] p-8 rounded-3xl group hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">E-Posta Adresimiz</h3>
                  <a href="mailto:iletisim@yazistilleri.pro" className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors">
                    iletisim@yazistilleri.pro
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-indigo-500/5 border border-indigo-500/10 p-8 rounded-3xl">
              <p className="text-indigo-200/70 text-sm m-0 leading-relaxed italic">
                <strong>Not:</strong> Oluşturulan şekilli yazıların sosyal medya platformlarında (Instagram, PUBG vb.) görünümüyle ilgili sorunlar genellikle cihaz veya platform kaynaklıdır. Lütfen önce yardım sayfamızı kontrol edin.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
