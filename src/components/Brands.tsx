import Link from "next/link";

const BRANDS = [
  {
    name: "ISOCHIA",
    sub: "NIROGYN",
    desc: "Daily fiber for smooth digestion & gut health.",
    link: "Explore ISOCHIA",
    href: "/brands/isochia",
  },
  {
    name: "Captain Gummy",
    desc: "Nutrition gummies for kids, made fun & healthy.",
    link: "Explore Captain Gummy",
    href: "/brands/captain-gummies",
  },
  {
    name: "POWERSHILA",
    desc: "Strength, stamina & performance support for those who push their limits.",
    link: "Explore PowerShilla",
    href: "/brands/powershila",
  },
  {
    name: "Pretty Energy",
    desc: "Clean energy. No jitters. All day.",
    link: "Explore Pretty Energy",
    href: "/brands/pretty-energy",
    accent: "brand-name-pink",
  },
];

export default function Brands() {
  return (
    <section className="brands-section" id="brands">
      <div className="brands-shell">
        <div className="brands-head-row">
          <div>
            <h2 className="brands-main-title">Our Wellness Brands</h2>
            <p className="brands-main-sub">Thoughtfully crafted products to support your health journey.</p>
          </div>
          <a href="/brands" className="brands-main-link">Explore All Brands →</a>
        </div>

        <div className="brands-grid-clean">
          {BRANDS.map((brand) => (
            <article className="brand-clean-card" key={brand.name}>
              <h3 className={`brand-clean-name ${brand.accent ?? ""}`}>{brand.name}</h3>
              {brand.sub ? <p className="brand-clean-sub">{brand.sub}</p> : <div className="brand-clean-spacer" />}
              <p className="brand-clean-desc">{brand.desc}</p>
              <Link href={brand.href} className="brand-clean-link">{brand.link} →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
