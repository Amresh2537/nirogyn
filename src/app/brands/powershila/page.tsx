import type { Metadata } from "next";
import Navbar from "@/app/brands/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PowerShilla — Strength · Stamina · Performance | Nirogyn",
  description:
    "Adaptogenic strength, stamina, and performance support for Indian bodies. Testosterone support, cortisol regulation, faster recovery — FDA Registered · FSSAI · GMP · CE · ISO 9001:2015.",
};

const BULLETS_FOR = [
  "Adults who train regularly but find recovery slow, plateau frequent, or energy inconsistent",
  "Indian men experiencing low energy, declining motivation, or poor muscle response despite regular exercise",
  "Professionals who exercise under high occupational stress — where cortisol is already elevated and recovery is compromised",
  "Anyone who wants to support hormonal health, natural testosterone production, and physical vitality through evidence-based supplementation",
  "Athletes and active individuals seeking an adaptogenic performance foundation alongside their existing training nutrition",
];

const BENEFITS = [
  { title: "Strength support", desc: "Formulated to support the muscular strength and neuromuscular output that training demands" },
  { title: "Stamina and endurance", desc: "Adaptogenic ingredients that support sustained physical performance without stimulant dependency" },
  { title: "Cortisol regulation", desc: "Adaptogens that modulate the HPA axis, reducing the cortisol that undermines both performance and testosterone production" },
  { title: "Testosterone support", desc: "Ingredients with clinical evidence for supporting natural testosterone production in men" },
  { title: "Recovery acceleration", desc: "Supporting the cellular repair and anti-inflammatory processes that make the next session better" },
  { title: "Gut-performance connection", desc: "Formulated with gut health in mind, because performance nutrition means nothing if absorption is compromised" },
];

const CERTS = ["FDA Registered", "FSSAI Approved", "GMP Certified", "CE Certified", "ISO 9001:2015"];

export default function PowershilaPage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero" style={{ background: "linear-gradient(135deg, #1a1a3e 0%, #2e2b7a 60%, #3d3a9e 100%)" }}>
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <a href="/brands" style={{ color: "inherit", textDecoration: "none" }}>OUR BRANDS</a>
            <span>·</span>
            <span>POWERSHILLA</span>
          </div>
          <div className="ip-hero-tag">Strength · Stamina · Performance</div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>PowerShilla</h1>
          <p className="ip-hero-sub" style={{ fontSize: "1.15rem", color: "rgba(249,245,238,0.85)" }}>
            Strength is not built in the gym alone. It is built at the molecular level.
          </p>
          <div className="brand-cert-row">
            {CERTS.map((c) => <span key={c} className="brand-cert-badge">{c}</span>)}
          </div>
        </div>
        <span className="brand-hero-deco">⚡</span>
      </div>

      <div className="ip-body">

        <div className="brand-section">
          <span className="brand-section-num">01</span>
          <div className="brand-section-label">The Problem It Solves</div>
          <h2 className="ip-section-title">India&apos;s fitness culture has a gap nobody is addressing honestly</h2>
          <p className="ip-p">
            Millions of Indians are training harder than ever — in gyms, on tracks, and in living rooms.
            But recovery is poor, performance is inconsistent, and the hormonal and nutritional foundations
            that make physical output sustainable are not being supported.
          </p>
          <p className="ip-p">
            Indian men are experiencing a documented testosterone decline — driven by chronic stress,
            poor sleep, endocrine disruptors, and nutritional gaps. The result is not just a performance
            problem. It is a health problem: poor muscle retention, rising fatigue, declining motivation,
            and a body that cannot keep pace with what the mind is demanding of it.
          </p>
          <p className="ip-p">
            For Indian professionals who exercise, the problem is compounded. Training in the evening
            after a 10-hour workday, on the back of elevated cortisol, inadequate protein absorption,
            and a gut that is not recovering — is not training. It is accumulating stress.{" "}
            <strong style={{ color: "var(--forest)" }}>
              PowerShilla was built for the gap between effort and outcome.
            </strong>
          </p>
          <div className="brand-pull-quote">
            <p>Training harder is not always the answer. Training smarter — with the right nutritional foundation, the right recovery, and the right hormonal environment — is.</p>
          </div>
        </div>

        <div className="brand-section">
          <span className="brand-section-num">02</span>
          <div className="brand-section-label">What PowerShilla Is</div>
          <h2 className="ip-section-title">Not a protein powder. Not a pre-workout. The layer beneath.</h2>
          <p className="ip-p">
            PowerShilla is a strength, stamina, and performance support supplement — rooted in
            adaptogenic science and performance nutrition, and formulated for the specific demands
            of Indian bodies.
          </p>
          <p className="ip-p">
            It delivers the adaptogens that regulate cortisol, the compounds that support testosterone
            production, and the recovery-accelerating ingredients that make the next session better than
            the last. Strength is not just built in the gym. It is built in the recovery window, in the
            hormonal environment, in the mitochondria, and in the gut that absorbs everything else.
            PowerShilla addresses all of it.
          </p>
        </div>

        <div className="brand-section">
          <span className="brand-section-num">03</span>
          <div className="brand-section-label">Who It Is For</div>
          <h2 className="ip-section-title">PowerShilla is for you if —</h2>
          <div className="brand-for-chips">
            {BULLETS_FOR.map((b, i) => (
              <span className="brand-for-chip" key={i}>{b}</span>
            ))}
          </div>
        </div>

        <div className="brand-section">
          <span className="brand-section-num">04</span>
          <div className="brand-section-label">Key Benefits</div>
          <h2 className="ip-section-title">What PowerShilla supports</h2>
          <div className="brand-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div className="brand-benefit-card" key={i} style={{ borderLeftColor: "#6c63ff" }}>
                <div className="brand-benefit-title">{b.title}</div>
                <div className="brand-benefit-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="brand-cta-box">
          <div>
            <p style={{ color: "#a89aff", fontWeight: 700, marginBottom: "0.3rem" }}>Ready to perform at your peak?</p>
            <p className="brand-cta-text">Available at shop.powershilla.com · Also at shop.nirogyn.com</p>
          </div>
          <a href="https://shop.powershilla.com" target="_blank" rel="noopener noreferrer" className="brand-cta-link">
            Visit PowerShilla →
          </a>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "1rem", lineHeight: 1.6 }}>
          PowerShilla is a dietary supplement. If you are a competitive athlete subject to anti-doping regulations,
          please verify all ingredients with your relevant sports authority before use. Consult a healthcare professional
          before use if you have a medical condition or are on medication.
        </p>

      </div>

      <Footer />
    </div>
  );
}
