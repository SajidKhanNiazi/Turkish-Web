import Link from "next/link";
import { Container } from "./Container";
import { silo1Links, silo2Links } from "@/lib/navigation";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/[0.06] bg-[#111827] relative z-20">
      <Container className="grid gap-10 py-12 md:grid-cols-[2fr,1fr,1fr,1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 text-[14px] font-black text-white shadow-md">
              Ys
            </div>
            <span className="text-base font-bold tracking-tight text-white">
              Yazı Stilleri <span className="text-indigo-400">Pro</span>
            </span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-400">
            Metninizi saniyeler içinde şık, havalı ve dekoratif yazı tiplerine dönüştürün.
            Sosyal medya profilleriniz ve oyun takma adlarınız için modern bir araç.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-300">
            Yazı Kategorileri
          </h3>
          <ul className="space-y-3 text-sm">
            {silo1Links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-medium text-gray-400 transition-colors hover:text-indigo-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-300">
            Şekilli Yazı
          </h3>
          <ul className="space-y-3 text-sm">
            {silo2Links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-medium text-gray-400 transition-colors hover:text-indigo-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-300">
            Yasal
          </h3>
          <ul className="space-y-3 text-sm font-medium text-gray-400">
            <li>
              <Link href="/gizlilik" className="transition-colors hover:text-indigo-400">
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link href="/kullanim-sartlari" className="transition-colors hover:text-indigo-400">
                Kullanım Şartları
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="transition-colors hover:text-indigo-400">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/[0.06] py-6 bg-[#0B0F1A] shrink-0">
        <Container className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row">
          <span className="font-medium text-gray-400">© {currentYear} Yazı Stilleri Pro. Tüm hakları saklıdır.</span>
          <span className="text-[11px] uppercase tracking-wide text-gray-600">
            SEO Odaklı Şık Metin ve Unicode Dönüştürücü
          </span>
        </Container>
      </div>
    </footer>
  );
};
