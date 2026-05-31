const TOPICS = [
  { num: "01", icon: "🫃", name: "Gut Health",       desc: "Digestion, bloating, constipation & more",       delay: "" },
  { num: "02", icon: "✨", name: "Skin Health",      desc: "Acne, glow, aging & skin nutrition",               delay: "reveal-delay-1" },
  { num: "03", icon: "🧒", name: "Kids Health",      desc: "Growth, immunity, nutrition & more",               delay: "reveal-delay-2" },
  { num: "04", icon: "💪", name: "Men's Health",     desc: "Energy, hormones, stress & performance",           delay: "reveal-delay-1" },
  { num: "05", icon: "⚡", name: "Energy & Vitality",desc: "Fatigue, stamina, focus & productivity",           delay: "reveal-delay-2" },
  { num: "06", icon: "😴", name: "Sleep & Stress",   desc: "Better sleep, less stress, more calm",             delay: "reveal-delay-3" },
];

export default function Topics() {
  return (
    <section className="topics-section" id="topics">
      {/* Background video — green leaves, very subtle on light bg */}
      <video
        className="topics-video-bg"
        autoPlay muted loop playsInline
        aria-hidden="true"
      >
        <source src="/images/brands/leaves-bg.mp4" type="video/mp4" />
      </video>
      <div className="topics-video-overlay" aria-hidden="true" />

      <div className="topics-inner">
        <div className="topics-header">
          <div>
            <div className="section-tag reveal">Explore</div>
            <h2 className="section-title reveal reveal-delay-1">
              Health Topics That
              <br />
              Matter Most
            </h2>
            <p className="section-sub reveal reveal-delay-2">
              Dive into expert guides on the topics most important to you and
              your family.
            </p>
          </div>
          <a href="#" className="btn-ghost reveal" style={{ flexShrink: 0 }}>
            View All Topics ↗
          </a>
        </div>

        <div className="topics-grid">
          {TOPICS.map(({ num, icon, name, desc, delay }) => (
            <div className={`topic-card reveal ${delay}`} key={name}>
              {/* Decorative large background number */}
              <div className="topic-card-num">{num}</div>

              <div className="topic-icon-wrap">{icon}</div>
              <div className="topic-name">{name}</div>
              <div className="topic-desc">{desc}</div>
              <span className="topic-learn">Explore topic →</span>
              <span className="topic-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
