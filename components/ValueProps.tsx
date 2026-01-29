const items = [
  {
    title: "Time",
    description: "Ship faster with proven processes and reusable architecture. We cut through complexity so you hit the market sooner.",
  },
  {
    title: "Quality",
    description: "Clean, maintainable code and solid testing. We build for the long term so your product stays reliable as it grows.",
  },
  {
    title: "Partnership",
    description: "Work with a team that understands your goals. Clear communication, transparent timelines, and no surprises.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            One team. End-to-end delivery.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We help startups and enterprises build software with minimal friction and optimal results.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-600 font-bold text-lg">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
