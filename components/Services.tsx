import Link from "next/link";

const services = [
  {
    title: "Web Applications",
    description:
      "Full-stack web apps with React, Next.js, and Node. From dashboards to e-commerce, we build fast, scalable products.",
    href: "#contact",
    cta: "Get a Quote",
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile apps for iOS and Android. User-focused design and robust backend integration.",
    href: "#contact",
    cta: "Learn More",
  },
  {
    title: "API & Integrations",
    description:
      "REST and GraphQL APIs, third-party integrations, and system-to-system connections. Secure and well-documented.",
    href: "#contact",
    cta: "Learn More",
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture reviews, tech due diligence, and roadmap planning. Get clarity before you build.",
    href: "#contact",
    cta: "Learn More",
  },
  {
    title: "MVP & Prototypes",
    description:
      "Turn your idea into a working MVP in weeks. Validate with real users and iterate with confidence.",
    href: "#contact",
    cta: "Learn More",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing support, security updates, and feature enhancements. Keep your product healthy and evolving.",
    href: "#contact",
    cta: "Learn More",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            End-to-end software solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We bring together design, development, and delivery so you can ship faster and scale with confidence.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                {s.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{s.description}</p>
              <Link
                href={s.href}
                className="mt-5 inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
              >
                {s.cta}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
