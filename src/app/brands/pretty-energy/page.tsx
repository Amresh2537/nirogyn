import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pretty Energy — Women's Clean Energy | Nirogyn",
  description:
    "Clean, sustained energy formulated for women — around hormonal biology, the menstrual cycle, and PCOS reality. No spike. No crash. — FDA Registered · FSSAI · GMP · CE · ISO 9001:2015.",
};

const BULLETS_FOR = [
  "Women who experience consistent afternoon energy crashes, mental fog, or low motivation that is not explained by poor sleep alone",
  "Women with PCOS, hormonal imbalance, or PMS-related fatigue and mood instability",
  "Working women and professionals managing high cognitive and emotional demands daily",
  "Women who have tried stimulant-based energy drinks and found them too intense, too jittery, or followed by a crash",
  "Women with iron deficiency or B12 deficiency — two of the most common nutritional gaps in Indian women",
  "Any woman who wants energy that supports hormonal health rather than disrupting it",
];

const BENEFITS = [
  { title: "Sustained energy without crash", desc: "Formulated for clean, lasting vitality rather than stimulant-driven spikes" },
  { title: "Hormonal balance support", desc: "Adaptogens and micronutrients that work with the female endocrine system, not against it" },
  { title: "Iron and B-vitamin support", desc: "Addressing the specific deficiencies most responsible for fatigue in Indian women" },
  { title: "Mental clarity and focus", desc: "Supporting the cognitive performance that a full day of demands requires" },
  { title: "Cycle-aware formulation", desc: "Designed with the hormonal fluctuations of the menstrual cycle in mind" },
  { title: "PCOS-considerate", desc: "Formulated without ingredients that worsen insulin resistance or androgenic symptoms" },
];

const CERTS = ["FDA Registered", "FSSAI Approved", "GMP Certified", "CE Certified", "ISO 9001:2015"];

export default function PrettyEnergyPage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero" style={{ background: "linear-gradient(135deg, #3d0e22 0%, #7a1a46 60%, #a02060 100%)" }}>
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <a href="/brands" style={{ color: "inherit", textDecoration: "none" }}>OUR BRANDS</a>
            <span>·</span>
            <span>PRETTY ENERGY</span>
          </div>
          <div className="ip-hero-tag">Women&apos;s Clean Energy</div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>Pretty Energy</h1>
          <p className="ip-hero-sub" style={{ fontSize: "1.15rem", color: "rgba(249,245,238,0.85)" }}>
            Women&apos;s energy has a different biology. It deserves a different formula.
          </p>
          <div className="brand-cert-row">
            {CERTS.map((c) => <span key={c} className="brand-cert-badge">{c}</span>)}
          </div>
        </div>
        <span className="brand-hero-deco">🌸</span>
      </div>

      <div className="ip-body">

        <div className="brand-section">
          <span className="brand-section-num">01</span>
          <div className="brand-section-label">The Problem It Solves</div>
          <h2 className="ip-section-title">The energy crisis facing Indian women has been invisible for too long</h2>
          <p className="ip-p">
            Women manage a physiological load that most energy products were never designed for.
            Hormonal fluctuations across the menstrual cycle alter energy metabolism, cortisol response,
            and neurotransmitter availability every single week. PCOS affects up to 1 in 5 Indian women
            and compounds fatigue, brain fog, and mood instability at a hormonal level. Iron deficiency —
            one of India&apos;s most prevalent nutritional gaps in women — drains energy at the cellular level
            before the day has even begun.
          </p>
          <p className="ip-p">
            And yet, the energy products available to Indian women were largely designed for men —
            high-stimulant, high-caffeine formulas that spike cortisol, disrupt hormonal balance, and
            deliver the exact energy crash that working women cannot afford at 3 PM.
          </p>
          <p className="ip-p">
            <strong style={{ color: "var(--forest)" }}>Pretty Energy was built on one question:</strong> what does
            sustained, clean energy actually look like when it is designed for how a woman&apos;s biology works —
            not how marketing assumes it does?
          </p>
          <div className="brand-pull-quote">
            <p>Women&apos;s energy has a different biology. It always has. Pretty Energy is simply the first formula honest enough to design for it.</p>
          </div>
        </div>

        <div className="brand-section">
          <span className="brand-section-num">02</span>
          <div className="brand-section-label">What Pretty Energy Is</div>
          <h2 className="ip-section-title">Clean energy formulated for how women actually function</h2>
          <p className="ip-p">
            Pretty Energy is a clean energy supplement formulated specifically for women — built around
            hormonal biology, not despite it. It delivers sustained vitality without the spike-and-crash
            pattern of stimulant-heavy formulas. It works with the fluctuating hormonal environment of
            the menstrual cycle rather than ignoring it.
          </p>
          <p className="ip-p">
            And it addresses the nutritional gaps — iron, B vitamins, adaptogens — that are
            disproportionately prevalent in Indian women and disproportionately responsible for the
            fatigue that gets dismissed as stress or attitude. This is not just energy. It is energy
            that understands what it is like to be a woman in India, running a career, a household,
            or both, and needing the biological support to do it without running on empty.
          </p>
        </div>

        <div className="brand-section">
          <span className="brand-section-num">03</span>
          <div className="brand-section-label">Who It Is For</div>
          <h2 className="ip-section-title">Pretty Energy is for you if —</h2>
          <div className="brand-for-chips">
            {BULLETS_FOR.map((b, i) => (
              <span className="brand-for-chip" key={i}>{b}</span>
            ))}
          </div>
        </div>

        <div className="brand-section">
          <span className="brand-section-num">04</span>
          <div className="brand-section-label">Key Benefits</div>
          <h2 className="ip-section-title">What Pretty Energy supports</h2>
          <div className="brand-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div className="brand-benefit-card" key={i} style={{ borderLeftColor: "#d4537e" }}>
                <div className="brand-benefit-title">{b.title}</div>
                <div className="brand-benefit-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="brand-cta-box">
          <div>
            <p style={{ color: "#f9a8c9", fontWeight: 700, marginBottom: "0.3rem" }}>Ready for energy that works with your body?</p>
            <p className="brand-cta-text">Available at shop.prettyenergy.com · Also at shop.nirogyn.com</p>
          </div>
          <a href="https://shop.prettyenergy.com" target="_blank" rel="noopener noreferrer" className="brand-cta-link">
            Visit Pretty Energy →
          </a>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "1rem", lineHeight: 1.6 }}>
          Pretty Energy is a dietary supplement for adult women. If you are pregnant, breastfeeding, or taking
          hormonal medication, consult your healthcare provider before use. Not intended to diagnose, treat,
          cure, or prevent any disease.
        </p>

      </div>

      <Footer />
    </div>
  );
}
