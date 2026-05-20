import Link from "next/link";
import { Container } from "../layout/Container";

export const HeroIntro = () => {
    return (
        <section className="bg-white py-16 sm:py-24 border-b border-gray-200">
            <Container className="flex flex-col items-center text-center">
                <span className="mb-6 inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                    Best Stylish Fonts Tool
                </span>
                <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    Customize your name, bio, and gaming nickname in seconds.
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-gray-600">
                    Type your text, see dozens of different font styles simultaneously, and
                    copy your favorite version with one click. A modern stylish fonts tool
                    for your social media profiles, gaming accounts, and messages.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                    <Link
                        href="#olusturucu"
                        className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
                    >
                        Create Text Now
                    </Link>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <svg
                            className="h-5 w-5 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Free and No Registration
                    </div>
                </div>
            </Container>
        </section>
    );
};
