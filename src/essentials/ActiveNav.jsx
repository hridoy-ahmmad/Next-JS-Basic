"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ActiveNav = ({ link, }) => {
    const pathName = usePathname();


    return (
        <Link
            href={link.href}
            className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all ${pathName === link.href
                ? "bg-green-100"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
        >
            <span>{link.name}</span>
            <svg
                className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 18 6-6-6-6"
                />
            </svg>
        </Link>
    );
};

export default ActiveNav;