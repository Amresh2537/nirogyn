import OptionalImage from "./OptionalImage";

/**
 * INGREDIENT IMAGE SLOTS
 * Add images to /public/images/ingredients/ matching the `img` filenames below.
 * Recommended: 128×128 px PNG with transparent background.
 *
 * Files:
 *   /public/images/ingredients/ashwagandha.png
 *   /public/images/ingredients/vitamin-d3.png
 *   /public/images/ingredients/lutein.png
 *   /public/images/ingredients/chia-seeds.png
 *   /public/images/ingredients/magnesium-citrate.png
 *   /public/images/ingredients/psyllium-husk.png
 */
const INGREDIENTS = [
  { emoji: "🌿", img: "ashwagandha",      name: "Ashwagandha",       desc: "Stress, energy & hormonal balance",             tag: "Adaptogen", delay: "" },
  { emoji: "☀️", img: "vitamin-d3",       name: "Vitamin D3",        desc: "Immunity, bones & mood support",                tag: "Vitamin",   delay: "reveal-delay-1" },
  { emoji: "👁️", img: "lutein",           name: "Lutein",            desc: "Eye health & vision support",                   tag: "Carotenoid",delay: "reveal-delay-2" },
  { emoji: "🌱", img: "chia-seeds",       name: "Chia Seeds",        desc: "Fiber, omega-3 & heart health",                 tag: "Superfood", delay: "reveal-delay-3" },
  { emoji: "🪨", img: "magnesium-citrate",name: "Magnesium Citrate", desc: "Sleep, muscle function & stress support",       tag: "Mineral",   delay: "reveal-delay-4" },
  { emoji: "🌾", img: "psyllium-husk",    name: "Psyllium Husk",     desc: "Digestive health, regularity & cholesterol",    tag: "Fiber",     delay: "reveal-delay-5" },
];

export default function Ingredients() {
  return (
    <section className="ingredients-section" id="ingredients">

      <div className="ingredients-inner">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "1rem",
          }}
        >
          <div>
            <div className="section-tag reveal">Deep Dives</div>
            <h2 className="section-title reveal reveal-delay-1">
              Science-Backed
              <br />
              Ingredients
            </h2>
            <p className="section-sub reveal reveal-delay-2">
              Learn about key ingredients — benefits, dosage, sources, and side
              effects.
            </p>
          </div>
          <a
            href="#"
            className="btn-ghost reveal"
            style={{
              color: "rgba(249,245,238,0.7)",
              borderColor: "rgba(255,255,255,0.2)",
              flexShrink: 0,
            }}
          >
            All Ingredients ↗
          </a>
        </div>

        <div className="ingredients-grid">
          {INGREDIENTS.map(({ emoji, img, name, desc, tag, delay }) => (
            <div className={`ingredient-card reveal-top ${delay}`} key={name}>
              <div className="ing-img-wrap">
                <span className="ing-emoji-fallback">{emoji}</span>
                <OptionalImage
                  src={`/images/ingredients/${img}.jpeg`}
                  alt={name}
                  fill
                  sizes="82px"
                />
              </div>
              <div className="ing-name">{name}</div>
              <div className="ing-desc">{desc}</div>
              <span className="ing-tag">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
