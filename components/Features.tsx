"use client";

import { useTranslations } from "next-intl";

const featureKeys = [
  { titleKey: "ideaTitle", descKey: "ideaDesc" },
  { titleKey: "stackTitle", descKey: "stackDesc" },
  { titleKey: "transparentTitle", descKey: "transparentDesc" },
  { titleKey: "supportTitle", descKey: "supportDesc" },
] as const;

const icons = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
];

export default function Features() {
  const t = useTranslations("features");

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t("subheading")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureKeys.map((f, i) => (
            <div
              key={f.titleKey}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {icons[i]}
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {t(f.titleKey)}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {t(f.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
