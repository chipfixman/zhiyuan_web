import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import CTA from "@/components/CTA";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ValueProps />
      <Features />
      <Services />
      <Solutions />
      <Testimonials />
      <ClientLogos />
      <CTA />
    </>
  );
}
