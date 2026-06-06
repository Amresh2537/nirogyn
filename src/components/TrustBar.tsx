const TRUST_ITEMS = [
  { icon: "🛡", title: "Expert-Backed", sub: "Trusted by health professionals" },
  { icon: "🧪", title: "Evidence-Based", sub: "Science you can rely on" },
  { icon: "◷", title: "Easy to Understand", sub: "Simple, clear & actionable" },
  { icon: "◎", title: "For the Whole Family", sub: "Health for every stage of life" },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {TRUST_ITEMS.map(({ icon, title, sub }) => (
        <div className="trust-item" key={title}>
          <span className="trust-icon">{icon}</span>
          <div className="trust-copy">
            <div className="trust-title">{title}</div>
            <div className="trust-sub">{sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
