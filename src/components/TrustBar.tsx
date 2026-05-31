const TRUST_ITEMS = [
  { icon: "🔬", label: "Evidence Based Research" },
  { icon: "👨‍⚕️", label: "Medically Reviewed" },
  { icon: "🇮🇳", label: "Made for India" },
  { icon: "✅", label: "Honest & Transparent" },
  { icon: "🌿", label: "No Hype. Just Science." },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {TRUST_ITEMS.map(({ icon, label }) => (
        <div className="trust-item" key={label}>
          <span className="trust-icon">{icon}</span>
          {label}
        </div>
      ))}
    </div>
  );
}
