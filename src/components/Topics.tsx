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
    <section className="topics-section" id="topics">
      <div className="topics-shell">
        <div className="topics-intro reveal">
          <h2 className="topics-main-title">
            Health Topics That
            <br />
            Matter Most
          </h2>
          <p className="topics-main-sub">
            Dive into expert guides on the topics most important to you and your
            family.
          </p>
        </div>

        <div className="topics-grid-simple">
          {TOPIC_CARDS.map((topic) => (
            <article className="topic-box reveal" key={topic.title}>
              <h3 className="topic-box-title">{topic.title}</h3>
              <p className="topic-box-desc">{topic.desc}</p>
              <span className="topic-box-num">{topic.num}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
