const ITEMS = [
  "Gut Health",
  "Skin Health",
  "Kids Nutrition",
  "Men's Health",
  "Sleep & Stress",
  "Energy & Vitality",
  "Science Backed",
  "Indian Formulations",
  "Expert Reviewed",
  "No Hype, Just Facts",
];

export default function Marquee() {
  // Duplicate items for seamless infinite scroll
  const all = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {all.map((item, i) => (
          <div className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
