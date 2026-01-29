import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
            Software Development
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            Skip the hassle of the ordinary.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            <span className="font-medium text-slate-700">Product specs.</span>{" "}
            <span className="font-medium text-slate-700">Clean code.</span>{" "}
            <span className="font-medium text-slate-700">On-time delivery.</span>{" "}
            Jumpstart your product. We build web and mobile apps that scale—so you can focus on your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/25"
            >
              Start a Project
            </Link>
            <Link
              href="#solutions"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold text-lg hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
