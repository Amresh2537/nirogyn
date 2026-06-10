const TOPIC_CARDS = [
  {
    num: "01",
    title: "Gut Health",
    desc: "Digestion, bloating, constipation & more",
  },
  {
    num: "02",
    title: "Skin Health",
    desc: "Acne, glow, aging & skin nutrition",
  },
  {
    num: "03",
    title: "Kids Health",
    desc: "Growth, immunity, nutrition & more",
  },
  {
    num: "04",
    title: "Men's Health",
    desc: "Energy, hormones, stress & performance",
  },
  {
    num: "05",
    title: "Energy & Vitality",
    desc: "Fatigue, stamina, focus & productivity",
  },
  {
    num: "06",
    title: "Sleep & Stress",
    desc: "Better sleep, less stress, more calm",
  },
];

export default function Topics() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_16%_9%,#f3f8ed_0%,#f8f8f4_56%,#f3f6ef_100%)] px-4 pb-10 pt-20 sm:px-6 lg:px-10"
      id="topics"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-5">
          <h2 className="font-[var(--font-playfair)] text-[clamp(2.1rem,4.1vw,4.35rem)] font-medium leading-[1.02] text-[#103f22]">
            Health Topics That
            <br />
            Matter Most
          </h2>
          <p className="mt-4 max-w-[560px] text-[1.04rem] leading-[1.5] text-[#5f6f61]">
            Dive into expert guides on the topics most important to you and your
            family.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {TOPIC_CARDS.map((topic) => (
            <article
              className="group relative min-h-[210px] overflow-hidden rounded-3xl border border-[#edf1eb] bg-[#f4f7f2] px-7 pb-6 pt-6 shadow-[0_10px_24px_rgba(25,45,24,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2b6a3b] hover:bg-[#123f24] hover:shadow-[0_18px_36px_rgba(12,30,14,0.24)]"
              key={topic.title}
            >
              <h3 className="text-[clamp(1.35rem,1.7vw,1.95rem)] font-semibold leading-[1.15] text-[#103f22] transition-colors duration-300 group-hover:text-[#f4fbef]">
                {topic.title}
              </h3>
              <p className="mt-2 max-w-[320px] text-[0.95rem] leading-[1.4] text-[#566a5a] transition-colors duration-300 group-hover:text-[#f4fbef]">
                {topic.desc}
              </p>
              <span className="pointer-events-none absolute bottom-[-0.6rem] right-5 font-[var(--font-playfair)] text-[clamp(4.4rem,7vw,7.8rem)] font-extrabold leading-none text-[rgba(15,30,15,0.06)] transition-colors duration-300 group-hover:text-[rgba(244,251,239,0.16)]">
                {topic.num}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
