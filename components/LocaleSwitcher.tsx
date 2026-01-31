"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const localeLabels: Record<string, string> = {
  en: "English",
  zh: "中文",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1">
      {(["en", "zh"] as const).map((loc) =>
        locale === loc ? (
          <span
            key={loc}
            className="rounded-md px-3 py-1.5 text-sm font-medium bg-white text-slate-900 shadow-sm"
            aria-current="true"
          >
            {localeLabels[loc]}
          </span>
        ) : (
          <Link
            key={loc}
            href={pathname || "/"}
            locale={loc}
            className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            aria-label={localeLabels[loc]}
          >
            {localeLabels[loc]}
          </Link>
        )
      )}
    </div>
  );
}
