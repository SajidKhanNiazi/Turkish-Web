"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Container } from "./Container";
import { silo1Links, silo2Links, silo3Links, NavItem } from "@/lib/navigation";
import { ChevronDown, X, Menu } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(76);
  const headerRef = useRef<HTMLElement | null>(null);

  // Body scroll lock
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  // Close menu on pathname change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Keep mobile overlay aligned with real header height.
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(Math.ceil(headerRef.current.getBoundingClientRect().height));
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full bg-[#0B0F1A]/90 border-b border-white/[0.04] shadow-2xl shadow-black/60 backdrop-blur-xl transition-all duration-300"
      >
        <Container className="flex items-center justify-between py-4 sm:py-5">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 text-[14px] font-black text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500 group-hover:scale-[1.1] group-hover:rotate-[5deg] group-hover:shadow-indigo-500/50">
                <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">Y<span className="text-cyan-200">s</span></span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-[17px] sm:text-[18px] font-extrabold tracking-tight text-white leading-tight group-hover:text-indigo-300 transition-colors">
                  Yazı Stilleri <span className="text-indigo-400">Pro</span>
                </span>
                <span className="text-[9px] text-gray-500 font-bold tracking-[0.25em] uppercase mt-0.5 font-mono">
                  Premium Toolset
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center justify-end gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.04] backdrop-blur-md">
            {silo1Links.map((item) => (
              <DesktopNavItem key={item.href} item={item} pathname={pathname} />
            ))}

            <span className="mx-2 h-4 w-[1px] shrink-0 bg-white/10" aria-hidden />

            {silo2Links.map((item) => (
              <DesktopNavItem key={item.href} item={item} pathname={pathname} />
            ))}
            
            <span className="mx-2 h-4 w-[1px] shrink-0 bg-white/10" aria-hidden />
            
            {silo3Links.map((item) => (
              <DesktopNavItem 
                key={item.href} 
                item={item} 
                pathname={pathname} 
                variant="cyan"
              />
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={open ? "Menüyü Kapat" : "Menüyü Aç"}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-all xl:hidden shadow-sm active:scale-90 z-[100] ${
              open ? "bg-white/10 text-white" : "bg-white/[0.03] text-gray-400 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white"
            }`}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </Container>
      </header>

      {/* Backdrop */}
      {open && (
        <div 
          className="fixed inset-x-0 bottom-0 z-[80] bg-black/80 backdrop-blur-md animate-in fade-in duration-300 xl:hidden"
          style={{ top: `${headerHeight}px` }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-x-0 bottom-0 z-[90] xl:hidden border-t border-white/[0.04] shadow-2xl transition-all duration-500 ease-in-out ${open ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible"}`}
        style={{ top: `${headerHeight}px`, backgroundColor: "#0B0F1A" }}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil navigasyon menüsü"
      >
        <Container className="flex h-full flex-col overflow-y-auto overscroll-contain px-6 py-6">
          <div className="flex flex-col gap-2 pb-20">
            <Link
              href="/"
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 text-base font-bold transition-all duration-300 ${pathname === "/"
                ? "bg-indigo-500/15 text-indigo-400 shadow-[inset_0_0_15px_rgba(99,102,241,0.1)] ring-1 ring-indigo-500/20"
                : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              onClick={() => setOpen(false)}
            >
              <div className={`w-2 h-2 rounded-full ${pathname === "/" ? 'bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]' : 'bg-gray-800'}`} />
              Ana Sayfa
            </Link>
            
            <div className="mt-8 mb-3 px-1 flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">Popüler Araçlar</span>
              <div className="h-[1px] flex-1 bg-white/[0.04]" />
            </div>
            
            <div className="grid gap-2">
              {silo1Links.map((item) => (
                <MobileNavItem key={item.href} item={item} pathname={pathname} onClose={() => setOpen(false)} />
              ))}
              {silo2Links.map((item) => (
                <MobileNavItem key={item.href} item={item} pathname={pathname} onClose={() => setOpen(false)} />
              ))}
            </div>

            <div className="mt-8 mb-3 px-1 flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
                Oyun & Sosyal Medya
              </span>
              <div className="h-[1px] flex-1 bg-white/[0.04]" />
            </div>
            <div className="grid gap-2">
              {silo3Links.map((item) => (
                <MobileNavItem 
                  key={item.href} 
                  item={item} 
                  pathname={pathname} 
                  onClose={() => setOpen(false)} 
                  variant="cyan"
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

// --- Sub-components ---

const DesktopNavItem = ({ 
  item, 
  pathname, 
  variant = "indigo" 
}: { 
  item: NavItem, 
  pathname: string, 
  variant?: "indigo" | "cyan" 
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || (hasChildren && item.children?.some(child => pathname === child.href));

  const styles = {
    indigo: {
      active: "bg-indigo-500/10 text-indigo-400 shadow-[inset_0_0_12px_rgba(99,102,241,0.1)]",
      hover: "text-gray-400 hover:bg-white/[0.04] hover:text-white",
      childActive: "bg-indigo-500/10 text-indigo-400",
      childDot: "bg-indigo-400"
    },
    cyan: {
      active: "bg-cyan-500/10 text-cyan-300 shadow-[inset_0_0_12px_rgba(34,211,238,0.15)]",
      hover: "text-gray-400 hover:bg-white/[0.04] hover:text-cyan-200/90",
      childActive: "bg-cyan-500/10 text-cyan-300",
      childDot: "bg-cyan-400"
    }
  }[variant];

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={`rounded-full px-4 py-2 text-[12.5px] font-bold transition-all ${
          isActive ? styles.active : styles.hover
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative py-2">
      <button
        className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[12.5px] font-bold transition-all ${
          isActive ? styles.active : styles.hover
        }`}
      >
        {item.label}
        <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
      </button>

      {/* Mega Menu / Dropdown */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="w-64 bg-[#111827] border border-white/[0.08] rounded-2xl p-2 shadow-2xl shadow-black/80 backdrop-blur-xl">
          <div className="grid gap-0.5">
            {/* Hub Link as First Item */}
            <Link
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-bold transition-all ${
                pathname === item.href
                  ? styles.childActive
                  : "text-white/90 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full transition-all ${pathname === item.href ? `${styles.childDot} ring-4 ring-white/10` : 'bg-white/20'}`} />
              {item.label}
            </Link>

            <div className="h-[1px] w-full bg-white/[0.04] my-1 mx-2 overflow-hidden" aria-hidden />

            {item.children?.map((child) => {
              const isChildActive = pathname === child.href;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-semibold transition-all ${
                    isChildActive
                      ? styles.childActive
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <div className={`w-1 h-1 rounded-full transition-all ${isChildActive ? `${styles.childDot} scale-125` : 'bg-gray-700'}`} />
                  {child.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileNavItem = ({ 
  item, 
  pathname, 
  onClose,
  variant = "indigo"
}: { 
  item: NavItem, 
  pathname: string, 
  onClose: () => void,
  variant?: "indigo" | "cyan"
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href;

  const styles = {
    indigo: {
      activeBg: "bg-indigo-500/10",
      activeText: "text-indigo-400",
      dotActive: "bg-indigo-400",
      childActiveText: "text-indigo-300"
    },
    cyan: {
      activeBg: "bg-cyan-500/10",
      activeText: "text-cyan-300",
      dotActive: "bg-cyan-400",
      childActiveText: "text-cyan-200"
    }
  }[variant];

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={`flex items-center gap-4 rounded-xl px-5 py-3.5 text-sm font-bold transition-all ${
          isActive
            ? `${styles.activeBg} ${styles.activeText}`
            : "text-gray-400 hover:bg-white/[0.04] hover:text-gray-200"
        }`}
        onClick={onClose}
      >
        <div className={`w-1.5 h-1.5 rounded-full ${isActive ? styles.dotActive : 'bg-gray-700'}`} />
        {item.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <Link
        href={item.href}
        className={`flex items-center justify-between rounded-xl px-5 py-3.5 text-sm font-bold transition-all ${
          isActive ? `${styles.activeText} ${styles.activeBg}` : "text-gray-400"
        }`}
        onClick={onClose}
      >
        <div className="flex items-center gap-4">
          <div className={`w-1.5 h-1.5 rounded-full ${isActive ? styles.dotActive : 'bg-gray-700'}`} />
          {item.label}
        </div>
      </Link>
      
      {/* Indented children for mobile */}
      <div className="ml-5 border-l border-white/[0.06] pl-2 grid gap-1 mt-1 mb-2">
        {item.children?.map((child) => {
          const isChildActive = pathname === child.href;
          return (
            <Link
              key={child.href}
              href={child.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-xs font-bold transition-all ${
                isChildActive ? `${styles.childActiveText} bg-white/[0.04]` : "text-gray-500 hover:text-gray-300"
              }`}
              onClick={onClose}
            >
              • {child.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
