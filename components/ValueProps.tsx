"use client";

import { useTranslations } from "next-intl";

const itemKeys = [
  { key: "time", titleKey: "time", descKey: "timeDesc" },
  { key: "quality", titleKey: "quality", descKey: "qualityDesc" },
  { key: "partnership", titleKey: "partnership", descKey: "partnershipDesc" },
] as const;

export default function ValueProps() {
  const t = useTranslations("valueProps");

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t("subheading")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {itemKeys.map((item, i) => (
            <div
              key={item.key}
              className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-600 font-bold text-lg">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {t(item.titleKey)}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
