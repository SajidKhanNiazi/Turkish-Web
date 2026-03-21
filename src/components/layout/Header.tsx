"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { silo2Links } from "@/lib/navigation";

export const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0F1A]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20 transition-all">
      <Container className="flex items-center justify-between py-4">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 text-[15px] font-black text-white shadow-md transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-lg group-hover:shadow-indigo-500/20">
              <span className="relative z-10">Y<span className="text-cyan-200">s</span></span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-display text-[18px] font-extrabold tracking-tight text-white leading-tight">
                Yazı Stilleri <span className="text-indigo-400">Pro</span>
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-0.5 font-mono">
                Oluşturucu
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav - Silo 2 (Şekilli Yazı) Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {silo2Links.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-indigo-500/10 text-indigo-400"
                    : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label="Toggle Menü"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#111827] text-gray-400 border border-white/[0.06] transition-colors hover:bg-[#1F2937] hover:text-white xl:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menü</span>
          <div className="space-y-1.5 flex flex-col items-center">
            <span className={`block h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ${open ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 rounded-full bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </div>
        </button>
      </Container>

      {/* Mobile Nav Overlay */}
      {open ? (
        <div className="absolute top-[76px] left-0 w-full border-b border-white/[0.06] bg-[#0B0F1A]/95 backdrop-blur-2xl xl:hidden shadow-2xl shadow-black/40">
          <Container className="flex flex-col gap-2 py-6 px-4">
            <Link
              href="/"
              className={`flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-bold transition-all ${pathname === "/"
                ? "bg-white/[0.08] text-white"
                : "text-gray-400 hover:bg-white/[0.04] hover:text-gray-200"
                }`}
              onClick={() => setOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              Ana Sayfa
            </Link>
            
            <div className="my-2 h-px w-full bg-white/[0.06]" />
            <h3 className="px-5 text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Şekilli Yazı Araçları</h3>
            
            {silo2Links.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-bold transition-all ${
                    isActive
                      ? "bg-indigo-500/10 text-indigo-400"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-gray-200"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-indigo-400' : 'bg-gray-600'}`} />
                  {item.label}
                </Link>
              );
            })}
          </Container>
        </div>
      ) : null}
    </header>
  );
};
