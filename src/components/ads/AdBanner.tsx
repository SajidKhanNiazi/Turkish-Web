"use client";

import { useEffect, useState, useRef } from "react";

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
  style = {},
}: AdBannerProps) {
  const [adLoaded, setAdLoaded] = useState(false);
  const isMockSlot = dataAdSlot.includes("SLOT_ID");
  const adRef = useRef<HTMLModElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In development or if it's a mock slot, do not attempt to push ads
    // This entirely prevents React Strict Mode double-push errors and async crashes.
    if (process.env.NODE_ENV === "development" || isMockSlot || adLoaded) return;

    let ro: ResizeObserver | null = null;
    let pushed = false;

    const pushAd = () => {
      if (pushed) return;
      try {
        pushed = true;
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setAdLoaded(true);
      } catch (err: any) {
        // Ignore React Strict Mode double-push error
        if (err.message && err.message.includes("already have ads")) {
          setAdLoaded(true);
        } else {
          console.error("AdSense error:", err);
        }
      }
    };

    if (containerRef.current && containerRef.current.offsetWidth > 0) {
      pushAd();
    } else if (containerRef.current && typeof window !== "undefined" && window.ResizeObserver) {
      // If width is 0 (e.g., hidden parent), wait until it becomes visible
      ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect.width > 0) {
            pushAd();
            if (ro) ro.disconnect();
            break;
          }
        }
      });
      ro.observe(containerRef.current);
    }

    return () => {
      if (ro) ro.disconnect();
      // If we pushed to the array but the script hasn't processed it yet,
      // window.adsbygoogle is still an Array. We remove one `{}` to match the unmounted <ins>.
      const anyWindow = window as any;
      if (pushed && typeof window !== "undefined" && Array.isArray(anyWindow.adsbygoogle)) {
        anyWindow.adsbygoogle.pop();
      }
    };
  }, [adLoaded, isMockSlot]);

  if (isMockSlot) {
    return null;
  }

  // To prevent hydration errors, we always render the exact same DOM on server and client.
  // In development, this <ins> element simply remains empty, acting as a placeholder.
  return (
    <div
      ref={containerRef}
      className={`ad-container flex justify-center items-center my-6 min-h-[90px] w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <ins
        ref={adRef}
        className="adsbygoogle w-full block bg-white/5 border border-white/10 rounded-xl"
        style={{ display: "block", width: "100%", minWidth: "250px", ...style }}
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
      dataAdSlot="2662419402" // Updated with provided slot ID
      className="border border-white/5 bg-white/5 rounded-xl flex w-full"
      style={{ display: "block" }}
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
      dataAdSlot="2662419402" // Updated with provided slot ID
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
      dataAdSlot="2662419402" // Updated with provided slot ID
      className="border border-white/5 bg-white/5 rounded-xl flex min-h-[600px] w-full"
      style={{ display: "block" }}
    />
  );
}

/**
 * Sticky Mobile Ad Placeholder
 * Used at the bottom of the screen on mobile devices
 */
export function StickyMobileAd() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-black/80 backdrop-blur-md">
      <AdBanner
        dataAdSlot="2662419402" // Updated with provided slot ID
        className="my-0 min-h-[50px] w-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
