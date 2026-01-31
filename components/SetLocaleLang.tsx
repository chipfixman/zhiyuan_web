"use client";

import { useEffect } from "react";

type Props = { locale: string };

export default function SetLocaleLang({ locale }: Props) {
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-Hans" : "en";
  }, [locale]);
  return null;
}
