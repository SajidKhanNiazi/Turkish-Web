"use client";

import { MessageCircleQuestion, Plus } from "lucide-react";

interface FAQSectionProps {
  title?: string;
  eyebrow?: string;
  faqs?: { question: string; answer: string }[];
}

export const FAQSection = ({ 
  title = "Sık Sorulan Sorular", 
  eyebrow = "Destek & Bilgi",
  faqs = [] 
}: FAQSectionProps) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
          <MessageCircleQuestion className="w-8 h-8" />
        </div>
        <div className="text-3xl font-black text-white tracking-tight">
          {title}
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-3xl border border-white/[0.05] bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04] open:bg-indigo-500/5 open:border-indigo-500/20 shadow-lg overflow-hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between p-6 sm:p-8 font-bold text-white list-none text-lg sm:text-xl select-none group-open:text-indigo-300">
              <span className="flex-1 pr-6">{faq.question}</span>
              <div className="shrink-0 w-10 h-10 rounded-2xl bg-white/[0.05] flex items-center justify-center transition-all duration-300 group-open:rotate-45 group-open:bg-indigo-500 group-open:text-white text-gray-400">
                <Plus className="w-6 h-6" />
              </div>
            </summary>
            <div className="px-6 sm:px-8 pb-8 text-base sm:text-lg font-medium leading-relaxed text-gray-400 border-t border-white/[0.03] pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};
