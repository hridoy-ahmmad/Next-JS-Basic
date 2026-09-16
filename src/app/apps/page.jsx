import AppCard from '@/essentials/AppCard';
import React from 'react';

const appsPromise = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    return res.json();
};


const AppsPage = async () => {
    const apps = await appsPromise();

    return (
        <main className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="mb-10">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Explore Apps
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                        All Apps
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
                        Discover useful and popular applications for your everyday needs.
                    </p>
                </div>

                {/* Apps Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {apps.map((app, index) => (
                        <AppCard
                            app={app}
                            key={app.id || index}
                        />
                    ))}
                </div>

            </div>
        </main>
    );
};

export default AppsPage;