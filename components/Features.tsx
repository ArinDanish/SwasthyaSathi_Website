export default function Features() {
  const features = [
    {
      num: "01",
      title: "Smart check-in",
      description:
        "Patients register and share history through a guided AI form — front desk reviews instead of re-typing.",
    },
    {
      num: "02",
      title: "Clinical documentation",
      description:
        "Consultation notes are drafted as the doctor speaks, structured and ready for review in seconds.",
    },
    {
      num: "03",
      title: "Real-time insights",
      description:
        "A live dashboard surfaces patient load, no-show risk and revenue trends without manual reporting.",
    },
    {
      num: "04",
      title: "Lower running cost",
      description:
        "Less administrative headcount per patient seen, with savings that compound as your clinic grows.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">How it fits into your day</p>
          <h2 className="section-title">One assistant, four moments that matter</h2>
          <p className="section-subtitle">
            Swasthya Sathi sits at each step of a visit — not as another
            dashboard to check, but as the work getting done in the
            background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[--line] rounded-2xl overflow-hidden border border-[--line]">
          {features.map((feature) => (
            <div
              key={feature.num}
              className="bg-white p-7 hover:bg-[--sand] transition-colors"
            >
              <p className="font-mono text-sm text-[--coral] mb-6">{feature.num}</p>
              <h3 className="font-display text-xl font-semibold mb-3 text-[--ink]">
                {feature.title}
              </h3>
              <p className="text-[--ash] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
