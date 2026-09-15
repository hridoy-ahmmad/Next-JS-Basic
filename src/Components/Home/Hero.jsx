import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-12 sm:py-20 lg:py-28">
            {/* Background Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950" />

            {/* Background Top Border/Glow line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">

                    {/* Badge */}
                    <div className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs md:text-sm font-semibold text-blue-400 backdrop-blur-md">
                        <span className="flex h-2 w-2 shrink-0 rounded-full bg-blue-500 animate-pulse" />
                        <span className="truncate">Next Generation Platform</span>
                        <span className="text-blue-500/50">|</span>
                        <span className="text-slate-300 truncate">MySoft Pro v2.0</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="mt-6 sm:mt-8 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] sm:leading-[1.15]">
                        Build Faster & Scale Better with{" "}
                        <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
                            MySoft Pro
                        </span>
                    </h1>

                    {/* Subtitle / Paragraph */}
                    <p className="mt-4 sm:mt-6 max-w-2xl text-sm text-slate-400 sm:text-base md:text-lg lg:text-xl px-2 sm:px-0">
                        Empower your workflow with high-performance web applications, powerful tools, and seamless integration for modern developers.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 sm:mt-10 flex w-full flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 sm:w-auto">
                        <Link
                            href="/register"
                            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40"
                        >
                            <span>Start Free Trial</span>
                            <svg
                                className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="m13 6 6 6-6 6" />
                            </svg>
                        </Link>

                        <Link
                            href="/apps"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-slate-300 transition-all duration-300 hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                        >
                            Explore Apps
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;