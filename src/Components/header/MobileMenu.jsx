"use client";

import ActiveNav from "@/essentials/ActiveNav";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 md:hidden"
      >
        {isOpen ? (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-125 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6">

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <ActiveNav
                key={link.name}
                link={link}
                setIsOpen={setIsOpen}
              />
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-200 pt-4">

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-blue-600"
            >
              Get Started
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}