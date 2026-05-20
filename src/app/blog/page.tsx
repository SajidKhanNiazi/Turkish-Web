import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ChevronRight, Calendar, User, ArrowRight } from "lucide-react";
import { TopBannerAd } from "@/components/ads/AdBanner";

export const metadata: Metadata = {
  title: "Blog & Rehberler | Yazı Stilleri Pro",
  description: "Şekilli yazılar, nick oluşturma, sosyal medya biyografileri ve Unicode fontları hakkında en güncel rehberler ve ipuçları.",
  alternates: {
    canonical: "/blog"
  }
};

const BlogPage = () => {
  return (
    <main className="flex-1 min-w-0">
      <section className="relative pt-12 pb-16 border-b border-white/[0.04] bg-white/[0.01]">
        <Container>
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-300">Blog</span>
          </div>

          <TopBannerAd />

          <div className="max-w-2xl mt-8">
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
              Blog & <span className="text-indigo-400">Rehberler</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Şekilli yazılar, platform uyumluluğu ve sosyal medya profillerinizi güzelleştirecek en iyi ipuçları.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-[#0B0F1A]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Article Card 1 */}
            <article className="group relative flex flex-col bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-indigo-500/30 rounded-2xl p-6 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-bold">Rehber</span>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  Mayıs 2026
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors line-clamp-2">
                <Link href="/blog/sekilli-yazi-nedir" className="before:absolute before:inset-0">
                  Şekilli Yazı Nedir? Unicode ile Şekilli Yazılar Nasıl Oluşturulur?
                </Link>
              </h2>
              
              <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                Şekilli yazı nedir ve nasıl yapılır? Instagram, TikTok, Discord ve PUBG gibi platformlarda çalışan Unicode şekilli yazılar hakkında bilmeniz gereken her şey.
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.04]">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <User className="w-4 h-4" />
                  Yazı Stilleri Pro
                </div>
                <div className="text-indigo-400 flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all">
                  Oku <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>

            {/* Additional placeholders for future articles can go here */}

          </div>
        </Container>
      </section>
    </main>
  );
};

export default BlogPage;
