import type { Metadata } from "next";
import Navbar from "@/app/brands/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Isochia — Gut Health Prebiotic | Nirogyn",
  description:
    "Isochia feeds the beneficial bacteria that modern Indian diets are no longer sustaining. Science-backed gut health prebiotic — FDA Registered · FSSAI · GMP · CE · ISO 9001:2015.",
};

const BULLETS_FOR = [
  "Adults who experience regular bloating, gas, or digestive discomfort after meals",
  "Anyone whose diet has shifted away from traditional Indian whole foods toward processed, packaged, or refined food",
  "People who feel persistently fatigued, mentally foggy, or emotionally flat despite eating reasonably well",
  "Anyone who has taken antibiotics recently — which measurably deplete gut microbiome diversity for months",
  "People with skin issues, low immunity, or sleep problems that have not responded to surface-level treatment",
  "Anyone who wants to support the gut health that EAT, SLEEP, and MIND content on Nirogyn keeps pointing back to",
];

const BENEFITS = [
  { title: "Gut microbiome support", desc: "Selectively feeds beneficial bacterial species that modern Indian diets are depleting" },
  { title: "Digestive comfort", desc: "Reduces bloating and supports smooth, regular digestion" },
  { title: "Gut lining integrity", desc: "Supports SCFA production, particularly butyrate, which fuels the cells lining the colon wall" },
  { title: "Immunity support", desc: "70% of the immune system lives in the gut. A well-fed microbiome is a more resilient immune system" },
  { title: "Gut-brain axis support", desc: "The bacteria Isochia feeds produce the precursors to serotonin and GABA — the molecules that govern mood, calm, and sleep quality" },
  { title: "India-specific formulation", desc: "Designed for the dietary gaps specific to modern Indian eating patterns, not Western ones" },
];

const CERTS = ["FDA Registered", "FSSAI Approved", "GMP Certified", "CE Certified", "ISO 9001:2015"];

export default function IschiaPage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      {/* HERO */}
      <div className="ip-hero" style={{ background: "linear-gradient(135deg, #1a3c1e 0%, #2d5c32 60%, #3a7040 100%)" }}>
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <a href="/brands" style={{ color: "inherit", textDecoration: "none" }}>OUR BRANDS</a>
            <span>·</span>
            <span>ISOCHIA</span>
          </div>
          <div className="ip-hero-tag">Gut Health Prebiotic</div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>Isochia</h1>
          <p className="ip-hero-sub" style={{ fontSize: "1.15rem", color: "rgba(249,245,238,0.85)" }}>
            Your gut is running the show. Most Indians are not feeding it what it needs.
          </p>
          <div className="brand-cert-row">
            {CERTS.map((c) => <span key={c} className="brand-cert-badge">{c}</span>)}
          </div>
        </div>
        <span className="brand-hero-deco">🥤</span>
      </div>

      <div className="ip-body">

        {/* PROBLEM */}
        <div className="brand-section">
          <span className="brand-section-num">01</span>
          <div className="brand-section-label">The Problem It Solves</div>
          <h2 className="ip-section-title">India&apos;s gut health has been quietly deteriorating for 40 years</h2>
          <p className="ip-p">
            The transition from traditional Indian eating to ultra-processed, low-fibre, packaged food
            has stripped the gut microbiome of the bacterial diversity it needs to function. The homemade
            curd that delivered live Lactobacillus cultures daily is gone. The whole grain roti that fed
            butyrate-producing bacteria is gone. The fermented kanji and chaas that replenished the gut
            with every meal — gone.
          </p>
          <p className="ip-p">
            What replaced them cannot do what they did. The gut bacteria that govern digestion, immunity,
            mood, sleep quality, and hormonal health are being starved. And the consequences — chronic
            bloating, low energy, poor immunity, brain fog, disrupted sleep — are being treated as
            individual problems when they share a single address:{" "}
            <strong style={{ color: "var(--forest)" }}>an underfed gut microbiome.</strong>
          </p>
          <div className="brand-pull-quote">
            <p>The traditional Indian thali solved this every single day — automatically, deliciously, and for free. The modern plate stopped. Isochia picks up where it left off.</p>
          </div>
        </div>

        {/* WHAT IT IS */}
        <div className="brand-section">
          <span className="brand-section-num">02</span>
          <div className="brand-section-label">What Isochia Is</div>
          <h2 className="ip-section-title">A prebiotic gut health supplement built for India</h2>
          <p className="ip-p">
            Isochia is a prebiotic gut health supplement formulated to feed the beneficial bacteria that
            most Indian diets are no longer sustaining. While probiotics add bacterial species to the gut,
            prebiotics feed the species already living there — selectively nourishing the Lactobacillus,
            Bifidobacterium, and butyrate-producing bacteria that govern gut wall integrity, immune
            regulation, and the neurotransmitter production that connects the gut to the brain.
          </p>
          <p className="ip-p">
            Isochia does not try to replace what the traditional Indian diet provided. It addresses what
            the modern Indian diet has stopped providing — with the specificity that a depleted gut
            microbiome actually needs.
          </p>
        </div>

        {/* WHO IT IS FOR */}
        <div className="brand-section">
          <span className="brand-section-num">03</span>
          <div className="brand-section-label">Who It Is For</div>
          <h2 className="ip-section-title">Isochia is for you if —</h2>
          <div className="brand-for-chips">
            {BULLETS_FOR.map((b, i) => (
              <span className="brand-for-chip" key={i}>{b}</span>
            ))}
          </div>
        </div>

        {/* KEY BENEFITS */}
        <div className="brand-section">
          <span className="brand-section-num">04</span>
          <div className="brand-section-label">Key Benefits</div>
          <h2 className="ip-section-title">What Isochia supports</h2>
          <div className="brand-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div className="brand-benefit-card" key={i} style={{ borderLeftColor: "#4a8c51" }}>
                <div className="brand-benefit-title">{b.title}</div>
                <div className="brand-benefit-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="brand-cta-box">
          <div>
            <p style={{ color: "var(--lime)", fontWeight: 700, marginBottom: "0.3rem" }}>Ready to feed your gut?</p>
            <p className="brand-cta-text">Available at shop.isochia.com · Also at shop.nirogyn.com</p>
          </div>
          <a href="https://shop.isochia.com" target="_blank" rel="noopener noreferrer" className="brand-cta-link">
            Visit Isochia →
          </a>
        </div>
        <p className="brand-disclaimer" style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "1rem" }}>
          Isochia is a dietary supplement and is not intended to diagnose, treat, cure, or prevent any disease.
          Consult a qualified healthcare professional before use if you are pregnant, breastfeeding, or on medication.
        </p>

      </div>

      <Footer />
    </div>
  );
}
