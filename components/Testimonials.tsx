const testimonials = [
  {
    quote:
      "Zhiyuan delivered our MVP on time and within budget. The codebase is clean and well-documented—we’ve been able to extend it ourselves.",
    author: "Sarah Chen",
    role: "Founder, TechFlow",
    years: "2 years",
  },
  {
    quote:
      "We needed a partner who could handle both frontend and backend. Zhiyuan understood our domain and shipped a product our users love.",
    author: "James Park",
    role: "CTO, RetailOS",
    years: "1 year",
  },
  {
    quote:
      "From requirements to deployment, the process was transparent. We’re now scaling with the same team for support and new features.",
    author: "Maria Santos",
    role: "Product Lead, HealthHub",
    years: "3 years",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by product teams
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See what founders and technical leads say about working with us.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm"
            >
              <p className="text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                  <p className="text-xs text-primary-600 font-medium">Client for {t.years}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
