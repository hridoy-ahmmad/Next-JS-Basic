import Image from 'next/image';
import React from 'react';




const appsPromise = async () => {
    const res = await fetch('http://localhost:3000/data.json')
    return res.json()
}

export const generateMetadata = async ({params}) => {
    const apps = await appsPromise()
    const { slug } = await params
    // console.log('id is=', id.slug);
    const app = apps.find(app => app.id == slug)
    return {
        title: `${ app.title }`
}
}

const AppsDetails = async ({ params }) => {
    const apps = await appsPromise()
    const { slug } = await params
    // console.log('id is=', id.slug);
    const app = apps.find(app => app.id == slug)
    // console.log(app);


    const totalRatings = app.ratings.reduce((acc, rating) => {
        return acc + rating.count
    }, 0)


    return (
        <main className="min-h-screen bg-slate-50 py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* App Header */}
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex flex-col gap-8 md:flex-row">

                        {/* App Image */}
                        <div className="shrink-0">
                            <Image
                                src={app.image}
                                alt={app.title}
                                width={180}
                                height={180}
                                className="h-36 w-36 rounded-3xl object-cover shadow-md sm:h-44 sm:w-44"
                            />
                        </div>

                        {/* App Information */}
                        <div className="flex-1">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                                <div>
                                    <p className="mb-2 text-sm font-medium text-violet-600">
                                        {app.companyName}
                                    </p>

                                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        {app.title}
                                    </h1>

                                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1.5">
                                            <span className="text-lg text-yellow-500">
                                                ★
                                            </span>
                                            <strong className="text-slate-800">
                                                {app.ratingAvg}
                                            </strong>
                                        </span>

                                        <span>
                                            {app.reviews} Reviews
                                        </span>

                                        <span>
                                            {app.downloads} Downloads
                                        </span>
                                    </div>
                                </div>

                                {/* Install Button */}
                                <button
                                    className="rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-violet-700 active:scale-95"
                                >
                                    Install
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-xs font-medium text-slate-500">
                                        Rating
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-900">
                                        {app.ratingAvg} / 5
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-xs font-medium text-slate-500">
                                        Reviews
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-900">
                                        {app.reviews}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-xs font-medium text-slate-500">
                                        Downloads
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-900">
                                        {app.downloads}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-xs font-medium text-slate-500">
                                        Size
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-slate-900">
                                        {app.size} MB
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="mt-8 grid gap-8 lg:grid-cols-3">

                    {/* Description */}
                    <div className="lg:col-span-2">
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                            <h2 className="text-2xl font-bold text-slate-900">
                                About this app
                            </h2>

                            <p className="mt-4 leading-8 text-slate-600">
                                {app.description}
                            </p>

                        </div>
                    </div>

                    {/* App Info */}
                    <div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                            <h2 className="text-xl font-bold text-slate-900">
                                App Information
                            </h2>

                            <div className="mt-5 space-y-4">

                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <span className="text-sm text-slate-500">
                                        Developer
                                    </span>

                                    <span className="text-sm font-semibold text-slate-800">
                                        {app.companyName}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <span className="text-sm text-slate-500">
                                        App Size
                                    </span>

                                    <span className="text-sm font-semibold text-slate-800">
                                        {app.size} MB
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <span className="text-sm text-slate-500">
                                        Downloads
                                    </span>

                                    <span className="text-sm font-semibold text-slate-800">
                                        {app.downloads}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-500">
                                        Rating
                                    </span>

                                    <span className="text-sm font-semibold text-slate-800">
                                        {app.ratingAvg} / 5
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

                {/* Ratings Section */}
                <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                    <div className="grid gap-10 md:grid-cols-3">

                        {/* Average Rating */}
                        <div className="flex flex-col items-center justify-center border-b border-slate-100 pb-8 md:border-b-0 md:border-r md:pb-0">

                            <h2 className="text-6xl font-bold text-slate-900">
                                {app.ratingAvg}
                            </h2>

                            <div className="mt-3 text-2xl tracking-wide text-yellow-500">
                                ★★★★★
                            </div>

                            <p className="mt-3 text-sm text-slate-500">
                                Based on {app.reviews} reviews
                            </p>

                        </div>

                        {/* Rating Breakdown */}
                        <div className="md:col-span-2">

                            <h2 className="text-xl font-bold text-slate-900">
                                Ratings & Reviews
                            </h2>

                            <div className="mt-6 space-y-4">
                                {/* {[...app.ratings] eta korle slice deyar dorkar nai. Duita same kaj kore */}
                                {app.ratings
                                    .slice()
                                    .reverse()
                                    .map((rating) => {
                                        const percentage =
                                            (rating.count / totalRatings) * 100;

                                        return (
                                            <div
                                                key={rating.name}
                                                className="flex items-center gap-3"
                                            >
                                                <span className="w-12 text-sm font-medium text-slate-600">
                                                    {rating.name.replace(
                                                        " star",
                                                        "★"
                                                    )}
                                                </span>

                                                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                                                    <div
                                                        className="h-full rounded-full bg-yellow-400"
                                                        style={{
                                                            width: `${percentage}%`,
                                                        }}
                                                    />
                                                </div>

                                                <span className="w-20 text-right text-xs text-slate-500">
                                                    {rating.count.toLocaleString()}
                                                </span>
                                            </div>
                                        );
                                    })}

                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </main>
    );
};

export default AppsDetails;