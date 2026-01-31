"use client";

import { useTranslations } from "next-intl";

const testimonialKeys = [
  { quoteKey: "quote1", authorKey: "author1", roleKey: "role1", yearsKey: "years1" },
  { quoteKey: "quote2", authorKey: "author2", roleKey: "role2", yearsKey: "years2" },
  { quoteKey: "quote3", authorKey: "author3", roleKey: "role3", yearsKey: "years3" },
] as const;

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t("subheading")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialKeys.map((item) => (
            <div
              key={item.authorKey}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm"
            >
              <p className="text-slate-700 leading-relaxed">
                &ldquo;{t(item.quoteKey)}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                  {t(item.authorKey).charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t(item.authorKey)}</p>
                  <p className="text-sm text-slate-500">{t(item.roleKey)}</p>
                  <p className="text-xs text-primary-600 font-medium">
                    {t("clientFor", { years: t(item.yearsKey) })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
