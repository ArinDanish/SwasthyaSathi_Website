export default function CompanyStory() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Our mission</p>
          <h2 className="section-title">
            Transforming healthcare through intelligent technology
          </h2>

          <div className="space-y-6 mt-12">
            <div className="border-l-2 border-[--coral] pl-7 py-1">
              <h3 className="font-display text-2xl font-semibold mb-3 text-[--ink]">
                What we believe
              </h3>
              <p className="text-[--ash] leading-relaxed">
                Every clinic, regardless of size, deserves access to
                world-class AI technology that improves patient care and
                operational efficiency. By pairing AI with deep healthcare
                expertise, we build tools that give time back to healthcare
                professionals and better outcomes to patients.
              </p>
            </div>

            <div className="border-l-2 border-[--teal] pl-7 py-1">
              <h3 className="font-display text-2xl font-semibold mb-3 text-[--ink]">
                Our journey
              </h3>
              <p className="text-[--ash] leading-relaxed mb-4">
                Founded in 2024, Swasthya Sathi began with a simple
                observation: healthcare providers spend more time on
                administrative work than on patient care. Our founders,
                combining technology and healthcare-operations expertise, set
                out to fix that with AI.
              </p>
              <p className="text-[--ash] leading-relaxed">
                Today, we support clinics across India in delivering better
                care while carrying less administrative weight.
              </p>
            </div>

            <div className="bg-[--sand] rounded-2xl p-8 mt-8">
              <h3 className="font-display text-2xl font-semibold mb-5 text-[--ink]">
                Our values
              </h3>
              <ul className="space-y-5">
                {[
                  {
                    title: "Innovation",
                    description: "We push past the obvious answer to deliver something genuinely useful.",
                  },
                  {
                    title: "Patient care",
                    description: "Everything we build is judged by whether it improves a patient outcome.",
                  },
                  {
                    title: "Integrity",
                    description: "We hold ourselves to the highest standard of data security and ethics.",
                  },
                  {
                    title: "Collaboration",
                    description: "We build alongside healthcare providers, not in spite of their workflow.",
                  },
                ].map((value) => (
                  <li key={value.title} className="flex items-start gap-4">
                    <span className="font-mono text-[--coral] text-sm mt-1">＋</span>
                    <div>
                      <h4 className="font-semibold text-[--ink]">{value.title}</h4>
                      <p className="text-[--ash] text-sm mt-0.5">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
