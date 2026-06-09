import type { Metadata } from "next";
import Navbar from "@/app/brands/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Captain Gummies — Children's Daily Nutrition | Nirogyn",
  description:
    "Science-formulated children's nutrition gummies for Indian kids. Immunity, brain development, bone growth — FDA Registered · FSSAI · GMP · CE · ISO 9001:2015.",
};

const BULLETS_FOR = [
  "Children aged 3 and above whose daily diet does not reliably cover their nutritional requirements",
  "Children who are picky eaters, leaving consistent gaps in iron, omega-3, vitamin D, and other key nutrients",
  "Children with recurrent illness — where gut health and immune support are the priority",
  "Parents who want a daily nutrition habit that their child will actually maintain without a daily battle",
  "Families whose school lunch or tiffin is largely carbohydrate-based with limited micronutrient diversity",
];

const BENEFITS = [
  { title: "Immune system support", desc: "Formulated to support the immune architecture being built during the most critical developmental years" },
  { title: "Cognitive development", desc: "Omega-3 and key B vitamins for brain development that only happens once" },
  { title: "Bone and muscle growth", desc: "Calcium, vitamin D3, and vitamin K2 working together the way the body actually uses them" },
  { title: "Gut health foundations", desc: "Prebiotic fibre to build the gut microbiome diversity that protects children's health across every system" },
  { title: "Energy and focus", desc: "B-complex vitamins and iron to support the concentration and physical stamina of an active school day" },
  { title: "No artificial colours or flavours", desc: "Formulated without the additives that have no place in a child's daily nutrition" },
];

const CERTS = ["FDA Registered", "FSSAI Approved", "GMP Certified", "CE Certified", "ISO 9001:2015"];

export default function CaptainGummiesPage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero" style={{ background: "linear-gradient(135deg, #3a2a00 0%, #6b4e00 60%, #8a6400 100%)" }}>
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <a href="/brands" style={{ color: "inherit", textDecoration: "none" }}>OUR BRANDS</a>
            <span>·</span>
            <span>CAPTAIN GUMMIES</span>
          </div>
          <div className="ip-hero-tag">Children&apos;s Daily Nutrition</div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>Captain Gummies</h1>
          <p className="ip-hero-sub" style={{ fontSize: "1.15rem", color: "rgba(249,245,238,0.85)" }}>
            The first years of a child&apos;s gut microbiome determine decades of their health.
          </p>
          <div className="brand-cert-row">
            {CERTS.map((c) => <span key={c} className="brand-cert-badge">{c}</span>)}
          </div>
        </div>
        <span className="brand-hero-deco">🐻</span>
      </div>

      <div className="ip-body">

        <div className="brand-section">
          <span className="brand-section-num">01</span>
          <div className="brand-section-label">The Problem It Solves</div>
          <h2 className="ip-section-title">India obsesses over its children&apos;s academic performance. It rarely audits their nutrition.</h2>
          <p className="ip-p">
            The average Indian school lunch — or the biscuits and packaged snacks that replace it — leaves
            children deficient in the nutrients that make learning, immunity, and physical growth possible.
            Iron deficiency quietly reduces focus and cognitive performance in 50% of Indian children.
            Omega-3 gaps compromise the brain development that happens only once. Vitamin D deficiency —
            despite all the sunshine — affects an estimated 70% of Indian children.
          </p>
          <p className="ip-p">
            These are not minor shortfalls. They are the nutritional foundation being laid — or not laid —
            for the next 60 years of a child&apos;s health. And the window to build it is narrow. A child&apos;s
            gut microbiome, immune architecture, and cognitive development follow timelines that do not
            offer second chances.
          </p>
          <p className="ip-p">
            Captain Gummies exists because children deserve nutrition that is built for them — not adult
            supplements in smaller packaging, and not gummies made with artificial fillers dressed up
            in health language.
          </p>
          <div className="brand-pull-quote">
            <p>The window to build a child&apos;s health foundation is narrow. A gut microbiome, immune architecture, and cognitive development follow timelines that do not offer second chances.</p>
          </div>
        </div>

        <div className="brand-section">
          <span className="brand-section-num">02</span>
          <div className="brand-section-label">What Captain Gummies Is</div>
          <h2 className="ip-section-title">Science-formulated nutrition. Actually delicious.</h2>
          <p className="ip-p">
            Captain Gummies is a science-formulated, genuinely delicious daily nutrition gummy for
            children — designed around the specific developmental needs of growing Indian kids. Every
            formulation is built on the question: what is this child&apos;s body actually building right now,
            and what does the science say it needs to build it correctly?
          </p>
          <p className="ip-p">
            The answers drive the ingredients. Not what is cheapest, not what is most marketable —
            what the biology of child development actually requires. Because children will not take
            something that tastes like medicine. And parents cannot afford to give them something
            that does not work.
          </p>
        </div>

        <div className="brand-section">
          <span className="brand-section-num">03</span>
          <div className="brand-section-label">Who It Is For</div>
          <h2 className="ip-section-title">Captain Gummies is for children if —</h2>
          <div className="brand-for-chips">
            {BULLETS_FOR.map((b, i) => (
              <span className="brand-for-chip" key={i}>{b}</span>
            ))}
          </div>
        </div>

        <div className="brand-section">
          <span className="brand-section-num">04</span>
          <div className="brand-section-label">Key Benefits</div>
          <h2 className="ip-section-title">What Captain Gummies supports</h2>
          <div className="brand-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div className="brand-benefit-card" key={i} style={{ borderLeftColor: "var(--gold)" }}>
                <div className="brand-benefit-title">{b.title}</div>
                <div className="brand-benefit-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="brand-cta-box">
          <div>
            <p style={{ color: "var(--gold)", fontWeight: 700, marginBottom: "0.3rem" }}>Ready to upgrade your child&apos;s daily nutrition?</p>
            <p className="brand-cta-text">Available at shop.captaingummies.com · Also at shop.nirogyn.com</p>
          </div>
          <a href="https://shop.captaingummies.com" target="_blank" rel="noopener noreferrer" className="brand-cta-link">
            Visit Captain Gummies →
          </a>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "1rem", lineHeight: 1.6 }}>
          Captain Gummies is a dietary supplement for children. Keep out of reach of children unless being administered by an adult.
          Consult a paediatrician before giving supplements to children under 3 years of age or to children with known medical conditions.
        </p>

      </div>

      <Footer />
    </div>
  );
}
