import Link from "next/link";

const solutions = [
  {
    title: "Startups & MVPs",
    description: "From idea to first release. We build MVPs and early products so you can validate and iterate fast.",
    href: "#contact",
  },
  {
    title: "Product Teams",
    description: "Extend your team with senior engineers. We slot into your process and ship features on your stack.",
    href: "#contact",
  },
  {
    title: "Enterprises",
    description: "Legacy modernization, integrations, and new products. We work with your security and compliance needs.",
    href: "#contact",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Built for how you work
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether you’re a startup, a product team, or an enterprise, we adapt to your context and deliver.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                {s.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{s.description}</p>
              <span className="mt-5 inline-flex items-center font-medium text-primary-600 group-hover:text-primary-700">
                Learn more
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
