import { faqs } from "@/data/faqs";
import { SectionHeading } from "./SectionHeading";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export const FAQSection = () => {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="mb-12 flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
           <MessageCircleQuestion className="w-8 h-8" />
        </div>
        <SectionHeading title="Sık Sorulan Sorular" align="center" eyebrow="Destek & Bilgi" />
      </div>

      <div className="grid gap-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-white/[0.06] bg-[#111827] transition-all duration-300 hover:border-white/[0.10] open:border-indigo-400/20 open:bg-[#1F2937] shadow-md shadow-black/10"
          >
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-200 list-none text-lg select-none">
              <span className="flex-1 pr-4">{faq.question}</span>
              <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center transition-all duration-300 group-open:rotate-180 group-open:bg-indigo-500 group-open:text-white text-gray-400">
                <ChevronDown className="w-5 h-5" />
              </div>
            </summary>
            <div className="px-6 pb-6 text-base font-medium leading-relaxed text-gray-400 border-t border-white/[0.06] pt-4">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};
