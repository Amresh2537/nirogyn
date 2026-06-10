const INGREDIENTS = [
  { img: "ashwagandha", name: "Ashwagandha", desc: "Stress, energy & hormonal balance" },
  { img: "vitamin-d3", name: "Vitamin D3", desc: "Immunity, bones & mood support" },
  { img: "lutein", name: "Lutein", desc: "Eye health & vision support" },
  { img: "chia-seeds", name: "Chia Seeds", desc: "Fiber, omega-3 & heart health" },
  { img: "magnesium-citrate", name: "Magnesium Citrate", desc: "Sleep, muscle function & stress support" },
  { img: "psyllium-husk", name: "Psyllium Husk", desc: "Digestive health, regularity & cholesterol support" },
];

export default function Ingredients() {
  return (
    <section className="ingredients-section" id="ingredients">
      <div className="ingredients-inner">
        <div className="ingredients-header-row">
          <div>
            <h2 className="ingredients-title">Learn about Super Ingredients</h2>
            <p className="ingredients-subtitle">
              Learn about key ingredients, their benefits, dosage, sources and side effects.
            </p>
          </div>
          <a href="/blog" className="ingredients-link">Explore All Ingredients →</a>
        </div>

        <div className="ingredients-grid-clean">
          {INGREDIENTS.map(({ img, name, desc }) => (
            <article className="ingredient-clean-card" key={name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/ingredients/${img}.jpeg`} alt={name} className="ingredient-clean-image" />
              <div className="ingredient-clean-body">
                <h3 className="ingredient-clean-title">{name}</h3>
                <p className="ingredient-clean-desc">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
