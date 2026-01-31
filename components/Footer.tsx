"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const footerStructure = {
  services: [
    { labelKey: "webApps", href: "#services" },
    { labelKey: "mobileApps", href: "#services" },
    { labelKey: "apiIntegrations", href: "#services" },
    { labelKey: "consulting", href: "#services" },
  ],
  company: [
    { labelKey: "about", href: "#" },
    { labelKey: "careers", href: "#" },
    { labelKey: "contact", href: "#contact" },
  ],
  resources: [
    { labelKey: "blog", href: "#" },
    { labelKey: "caseStudies", href: "#solutions" },
    { labelKey: "privacyPolicy", href: "#" },
    { labelKey: "termsOfService", href: "#" },
  ],
} as const;

const sectionKeys = ["services", "company", "resources"] as const;

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Zhiyuan
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">{t("tagline")}</p>
          </div>
          {sectionKeys.map((sectionKey) => (
            <div key={sectionKey}>
              <h3 className="font-semibold text-white">{t(sectionKey)}</h3>
              <ul className="mt-4 space-y-2">
                {footerStructure[sectionKey].map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:hello@zhiyuan.dev"
              className="text-sm hover:text-white transition-colors"
            >
              hello@zhiyuan.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
