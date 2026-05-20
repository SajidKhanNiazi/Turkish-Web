"use client";

import { useEffect, useState } from "react";

type AdBannerProps = {
  dataAdSlot: string;
  dataAdFormat?: "auto" | "fluid" | "rectangle";
  dataFullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Reusable Google AdSense Banner Component
 * Usage: <AdBanner dataAdSlot="1234567890" />
 * IMPORTANT: AdSense requires proper empty space around ads to prevent accidental clicks.
 */
export function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  className = "",
  style = { display: "block" },
}: AdBannerProps) {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    // Only attempt to load ads in production or if needed
    // AdSense script is globally loaded in layout.tsx
    try {
      if (!adLoaded) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setAdLoaded(true);
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [adLoaded]);

  return (
    <div
      className={`ad-container flex justify-center items-center my-6 min-h-[90px] w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-4223732842838090"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      />
    </div>
  );
}

/**
 * Top Banner Ad Placeholder
 * Used below header, above main content
 */
export function TopBannerAd() {
  return (
    <AdBanner
      dataAdSlot="TOP_BANNER_SLOT_ID" // Replace when approved
      className="border border-white/5 bg-white/5 rounded-xl hidden md:flex"
      style={{ display: "inline-block", width: "728px", height: "90px" }}
      dataAdFormat="auto"
    />
  );
}

/**
 * In-Content Ad Placeholder
 * Used within articles, lists, or generator results
 */
export function InContentAd() {
  return (
    <AdBanner
      dataAdSlot="IN_CONTENT_SLOT_ID" // Replace when approved
      className="border border-white/5 bg-white/5 rounded-xl"
      dataAdFormat="fluid"
    />
  );
}

/**
 * Sidebar Ad Placeholder
 * Used in sidebar (if any) or sticky side columns
 */
export function SidebarAd() {
  return (
    <AdBanner
      dataAdSlot="SIDEBAR_SLOT_ID" // Replace when approved
      className="border border-white/5 bg-white/5 rounded-xl hidden lg:flex min-h-[600px]"
      style={{ display: "inline-block", width: "300px", height: "600px" }}
    />
  );
}

/**
 * Sticky Mobile Ad Placeholder
 * Used at the bottom of the screen on mobile devices
 */
export function StickyMobileAd() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-black/80 backdrop-blur-md md:hidden">
      <AdBanner
        dataAdSlot="STICKY_MOBILE_SLOT_ID" // Replace when approved
        className="my-0 min-h-[50px]"
        style={{ display: "inline-block", width: "320px", height: "50px" }}
      />
    </div>
  );
}
