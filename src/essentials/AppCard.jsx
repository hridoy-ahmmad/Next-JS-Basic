
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const AppCard = ({ app }) => {
    const {
        image,
        title,
        companyName,
        reviews,
        ratingAvg,
        id
    } = app;

    return (
        <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10">

            {/* App Info */}
            <div className="flex items-center gap-4">

                {/* App Logo */}
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="64px"
                        className="object-cover"
                    />
                </div>

                {/* App Details */}
                <div className="flex min-w-0 flex-1 flex-col">

                    <h3 className="truncate text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                        {title}
                    </h3>

                    <p className="mt-0.5 truncate text-xs font-medium text-slate-500">
                        {companyName}
                    </p>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-1.5 text-xs">

                        <div className="flex items-center gap-1 font-semibold text-slate-800">
                            <span>{ratingAvg}</span>

                            <svg
                                className="h-4 w-4 fill-amber-400 text-amber-400"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034a1 1 0 01-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>

                        <span className="text-slate-300">•</span>

                        <span className="truncate text-slate-400">
                            {reviews} reviews
                        </span>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-2">

                {/* Details Button */}
                <Link
                    href={`http://localhost:3000/apps/${id}`}
                    type="button"
                    className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                    Details
                </Link>

                {/* Install Button */}
                <button
                    type="button"
                    className="flex-1 rounded-xl bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-lg px-3 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-linear-to-bl hover:shadow-lg hover:shadow-blue-500/20"
                >
                    Install
                </button>

            </div>
        </div>
    );
};

export default AppCard;

