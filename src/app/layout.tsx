import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Yazı Stilleri | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Yazı Stilleri - Şık ve havalı yazılar oluşturun",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y1VS7CWMNW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y1VS7CWMNW');
          `}
        </Script>
        {/* Google AdSense Verification & Global Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4223732842838090"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${plusJakarta.variable} font-sans antialiased`} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col bg-[#0B0F1A] text-[#F9FAFB] selection:bg-indigo-400/30 selection:text-white">
          <Header />
          <div className="flex-1 min-w-0">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

