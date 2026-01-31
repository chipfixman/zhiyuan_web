"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#solutions", label: t("solutions") },
    { href: "#testimonials", label: t("testimonials") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight">
            Zhiyuan
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <LocaleSwitcher />
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
            >
              {t("startProject")}
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LocaleSwitcher />
            <button
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t("toggleMenu")}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mx-4 mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary-600 text-white font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {t("startProject")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
