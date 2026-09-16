import AppCard from '@/essentials/AppCard';
import React from 'react';

const appsPromise = async () => {
    const res = await fetch('http://localhost:3000/data.json')
    return res.json()
}
const TrendingApps = async () => {
    // const appsPromise = await fetch('http://localhost:3000/data.json')
    //     .then(res => res.json())
    // console.log(appsPromise);

    // const res = await fetch('http://localhost:3000/data.json')
    // const apps = await res.json()

    const apps = await appsPromise()

    return (
        <div>
            {/* Trening apps Section */}
            <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24 border-t border-slate-100">
                {/* Subtle Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">

                        {/* Main Heading */}
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                            Explore Our{" "}
                            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                Trending Apps
                            </span>
                        </h2>

                        {/* Subtitle / Paragraph */}
                        <p className="mt-4 text-base text-slate-600 sm:text-lg md:text-xl">
                            Discover our most popular and high-performance tools designed to streamline your workflow and supercharge productivity.
                        </p>
                    </div>
                </div>
            </section>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-3 '>
                {apps
                    .slice(0, 6)
                    .map((app, index) => <AppCard key={index} app={app} />)}
            </div>
        </div>
    );
};

export default TrendingApps;