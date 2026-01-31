"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const solutionKeys = [
  { titleKey: "startupsTitle", descKey: "startupsDesc" },
  { titleKey: "teamsTitle", descKey: "teamsDesc" },
  { titleKey: "enterpriseTitle", descKey: "enterpriseDesc" },
] as const;

export default function Solutions() {
  const t = useTranslations("solutions");

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t("subheading")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutionKeys.map((s) => (
            <Link
              key={s.titleKey}
              href="#contact"
              className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                {t(s.titleKey)}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {t(s.descKey)}
              </p>
              <span className="mt-5 inline-flex items-center font-medium text-primary-600 group-hover:text-primary-700">
                {t("learnMore")}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
