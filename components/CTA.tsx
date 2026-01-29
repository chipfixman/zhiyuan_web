import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary-600 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Get started with a free consultation
        </h2>
        <p className="mt-4 text-lg text-primary-100">
          Tell us about your project. We’ll reply within 24 hours with next steps—no commitment required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="mailto:hello@zhiyuan.dev"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary-600 font-semibold text-lg hover:bg-primary-50 transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/50 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
