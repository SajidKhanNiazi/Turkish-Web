import Link from "next/link";
import { Container } from "../layout/Container";
import { silo1Categories, silo2Categories } from "@/data/categories";

const colorThemes = [
    { bg: "bg-purple-500/10", text: "text-purple-400", border: "hover:border-purple-400/25", shadow: "hover:shadow-purple-500/5" },
    { bg: "bg-amber-500/10", text: "text-amber-400", border: "hover:border-amber-400/25", shadow: "hover:shadow-amber-500/5" },
    { bg: "bg-blue-500/10", text: "text-blue-400", border: "hover:border-blue-400/25", shadow: "hover:shadow-blue-500/5" },
    { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "hover:border-cyan-400/25", shadow: "hover:shadow-cyan-500/5" },
    { bg: "bg-rose-500/10", text: "text-rose-400", border: "hover:border-rose-400/25", shadow: "hover:shadow-rose-500/5" },
    { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "hover:border-emerald-400/25", shadow: "hover:shadow-emerald-500/5" }
];

export const ExploreStyles = () => {
    const allCategories = [...silo1Categories];

    return (
        <section className="py-20 bg-[#0B0F1A] relative z-20">
            <Container>
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-display mb-4">
                        Daha Fazla Yazı Stili Keşfedin
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {allCategories.slice(0, 12).map((category, idx) => {
                        const theme = colorThemes[idx % colorThemes.length];
                        
                        return (
                            <Link 
                                key={category.slug} 
                                href={category.href}
                                className={`group flex flex-col p-8 rounded-3xl bg-[#111827] border border-white/[0.06] transition-all duration-300 ${theme.border} shadow-lg shadow-black/10 ${theme.shadow} hover:-translate-y-1`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 font-bold text-xl ${theme.bg} ${theme.text} transition-transform duration-300 group-hover:scale-110`}>
                                    A
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-display">
                                    {category.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {category.description}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
