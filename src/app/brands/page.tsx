import type { Metadata } from "next";
import Navbar from "@/app/brands/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Brands — Nirogyn Healthcare Pvt. Ltd.",
  description:
    "Isochia, Captain Gummies, PowerShilla, Pretty Energy — wellness brands built to fill the gaps the science identifies. FDA Registered · FSSAI · GMP · CE · ISO 9001:2015.",
};

const BRANDS = [
  {
    emoji: "🥤",
    cat: "Gut Health Prebiotic",
    name: "Isochia",
    hook: "Your gut is running the show. Most Indians are not feeding it what it needs.",
    brief:
      "Isochia is Nirogyn's gut health prebiotic brand — formulated to feed the beneficial bacteria that govern digestion, immunity, mood, and energy.",
    href: "/brands/isochia",
  },
  {
    emoji: "🐻",
    cat: "Children's Daily Nutrition",
    name: "Captain Gummies",
    hook: "The first years of a child's gut microbiome determine decades of their health.",
    brief:
      "Captain Gummies makes children's nutrition science-backed, effective, and something kids actually want.",
    href: "/brands/captain-gummies",
  },
  {
    emoji: "⚡",
    cat: "Strength · Stamina · Performance",
    name: "PowerShilla",
    hook: "Strength is not built in the gym alone. It is built at the molecular level.",
    brief:
      "PowerShilla is Nirogyn's strength, stamina, and performance brand — built for Indian bodies that demand more.",
    href: "/brands/powershila",
  },
  {
    emoji: "🌸",
    cat: "Women's Clean Energy",
    name: "Pretty Energy",
    hook: "Women's energy has a different biology. It deserves a different formula.",
    brief:
      "Pretty Energy is clean, sustained energy designed specifically for women — around the hormonal realities of how women actually function.",
    href: "/brands/pretty-energy",
  },
];

const CERTS = ["FDA Registered", "FSSAI Approved", "GMP Certified", "CE Certified", "ISO 9001:2015"];

export default function BrandsPage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero">
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <span>OUR BRANDS</span>
          </div>
          <div className="ip-hero-tag">Our Brands</div>
          <h1>Built to fill the gaps<br />the science identifies</h1>
          <p className="ip-hero-sub">
            Nirogyn Healthcare Pvt. Ltd. builds wellness brands that are as specific as the problems
            they solve. Each brand was created because the science identified a gap — and the gap was
            too important to leave unfilled.
          </p>
          <div className="brand-cert-row" style={{ marginTop: "2rem" }}>
            {CERTS.map((c) => (
              <span key={c} className="brand-cert-badge">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="ip-body-wide">
        <p className="ip-lead" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
          Every brand under Nirogyn is manufactured under the same quality standard. Click any brand
          to explore its full story, science, and dedicated website.
        </p>

        <div className="brands-ov-grid">
          {BRANDS.map((b) => (
            <a key={b.name} href={b.href} className="brands-ov-card">
              <span className="bov-emoji">{b.emoji}</span>
              <div className="bov-cat">{b.cat}</div>
              <div className="bov-name">{b.name}</div>
              <div className="bov-hook" style={{ fontStyle: "italic", color: "var(--forest)", fontWeight: 500 }}>
                &ldquo;{b.hook}&rdquo;
              </div>
              <p className="bov-hook" style={{ fontStyle: "normal", marginTop: "0.5rem" }}>{b.brief}</p>
              <span className="bov-link">Explore {b.name} →</span>
            </a>
          ))}
        </div>

        <div className="ip-divider" />
        <p className="ip-p" style={{ textAlign: "center" }}>
          All Nirogyn brands are available at their individual websites.
          Click a brand above to explore the full story and visit the brand website.
        </p>
      </div>

      <Footer />
    </div>
  );
}
