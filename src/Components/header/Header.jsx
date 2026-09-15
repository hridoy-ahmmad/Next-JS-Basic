









import ActiveNav from "@/essentials/ActiveNav";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Apps", href: "/apps" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">

      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-70" />

      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40">

            <div className="absolute inset-1px rounded-[11px] bg-linear-to-br from-blue-500/40 to-transparent" />

            <svg
              className="relative h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
              />
            </svg>
          </div>

          <div className="flex items-center">
            <span className="text-[21px] font-bold tracking-tight text-slate-900">
              My
            </span>

            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-[21px] font-bold tracking-tight text-transparent">
              Soft
            </span>

            <span className="ml-1.5 -mt-2.5 rounded-full bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-600">
              Pro
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, index) => (
            <ActiveNav key={index} link={link} ></ActiveNav>
          ))}
        </nav>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-2.5 md:flex">

          <Link
            href="/login"
            className="rounded-xl px-4 py-2.5 text-[14px] font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-950"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-slate-950 px-5 py-2.5 text-[14px] font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 transition-transform duration-500 group-hover:translate-x-0" />

            <span className="relative">
              Get Started
            </span>

            <svg
              className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m13 6 6 6-6 6"
              />
            </svg>
          </Link>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <MobileMenu navLinks={navLinks} />

      </div>
    </header>
  );
}