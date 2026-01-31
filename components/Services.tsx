"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const serviceKeys = [
  { titleKey: "webTitle", descKey: "webDesc", ctaKey: "getQuote" as const },
  { titleKey: "mobileTitle", descKey: "mobileDesc", ctaKey: "learnMore" as const },
  { titleKey: "apiTitle", descKey: "apiDesc", ctaKey: "learnMore" as const },
  { titleKey: "consultingTitle", descKey: "consultingDesc", ctaKey: "learnMore" as const },
  { titleKey: "mvpTitle", descKey: "mvpDesc", ctaKey: "learnMore" as const },
  { titleKey: "maintenanceTitle", descKey: "maintenanceDesc", ctaKey: "learnMore" as const },
] as const;

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t("subheading")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((s) => (
            <div
              key={s.titleKey}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                {t(s.titleKey)}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {t(s.descKey)}
              </p>
              <Link
                href="#contact"
                className="mt-5 inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
              >
                {t(s.ctaKey)}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
