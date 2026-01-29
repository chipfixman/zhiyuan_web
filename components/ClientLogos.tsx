const logos = [
  "TechFlow",
  "RetailOS",
  "HealthHub",
  "DataSync",
  "CloudNine",
  "Nexus Labs",
];

export default function ClientLogos() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 font-medium mb-10">
          Trusted by product teams and enterprises
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {logos.map((name) => (
            <div
              key={name}
              className="text-slate-400 font-semibold text-lg tracking-tight hover:text-slate-600 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
