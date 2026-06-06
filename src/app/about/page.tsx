import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — Science-Backed Wellness for India | Nirogyn",
  description:
    "Nirogyn is India's science-backed wellness education platform. Five pillars. Zero compromise. Built for Indian bodies, Indian diets, and Indian lives.",
};

const PILLARS = [
  { name: "EAT", desc: "Gut health · Fibre · Nutrition · Indian food science", color: "var(--lime)" },
  { name: "SLEEP", desc: "Sleep biology · Circadian rhythm · Gut-sleep axis", color: "#5bc8e8" },
  { name: "MOVE", desc: "Movement science · Exercise · Sedentary India", color: "#e87c5b" },
  { name: "MIND", desc: "Gut-brain axis · Stress · Mental health · Focus", color: "var(--gold)" },
  { name: "REPRODUCE", desc: "PCOS · Testosterone · Fertility · Hormonal health", color: "#e85b75" },
];

const BELIEFS = [
  "We believe that an informed Indian makes a healthier Indian. Not an India full of supplement stacks and biohacking protocols — an India that understands what its food does, what its body needs, and what the science actually says versus what someone is trying to sell it.",
  "We believe that gut health, sleep science, movement, mental health, and reproductive wellness are not separate conversations. They are one conversation — about a human body that is deeply interconnected, running on biology that does not care about wellness categories.",
  "We believe that science is not finished until it has been communicated clearly. A clinical trial sitting in a journal is not knowledge until someone translates it into language a 28-year-old in Bengaluru can act on. That translation is what Nirogyn does. Every day. For every Indian who deserves to know what is actually happening inside their body.",
];

const BRANDS_LIST = [
  {
    name: "Isochia",
    cat: "Gut Health Prebiotic",
    desc: "India's gut health prebiotic brand. Built for a gut microbiome that is fibre-depleted, antibiotic-stressed, and running on the wrong fuel.",
    href: "/brands/isochia",
  },
  {
    name: "Captain Gummies",
    cat: "Children's Daily Nutrition",
    desc: "Science-backed nutrition for children. Because the health habits that last a lifetime are built in the first decade of it.",
    href: "/brands/captain-gummies",
  },
  {
    name: "PowerShilla",
    cat: "Strength · Stamina · Performance",
    desc: "Strength, stamina, and performance support for Indian bodies that demand more — at the gym, at the desk, and everywhere in between.",
    href: "/brands/powershila",
  },
  {
    name: "Pretty Energy",
    cat: "Women's Clean Energy",
    desc: "Clean, sustained energy for women. Formulated around the hormonal reality of how women actually function — not how the energy drink industry assumes they do.",
    href: "/brands/pretty-energy",
  },
];

export default function AboutPage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero">
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <span>ABOUT US</span>
          </div>
          <div className="ip-hero-tag">About Us</div>
          <h1>Science-Backed Wellness<br />for India</h1>
          <p className="ip-hero-sub">
            India deserves wellness content built for India. Not borrowed from other countries.
            Not translated from other diets. Written from scratch — for Indian bodies, Indian food,
            and Indian lives.
          </p>
        </div>
      </div>

      <div className="ip-body">

        {/* WHO WE ARE */}
        <div className="ip-tag-label">Who We Are</div>
        <h2 className="ip-section-title">Nirogyn is India&apos;s science-backed wellness education platform</h2>
        <p className="ip-lead">
          We are not neutral observers of the Indian health crisis. We are inside it — researching it,
          translating it, and writing about it every day with the seriousness it deserves and the
          clarity it has been missing.
        </p>
        <p className="ip-p">
          Every article on Nirogyn is grounded in peer-reviewed research. Every claim has a named source.
          Every recommendation is specific — not &apos;eat more vegetables&apos;, but why a specific vegetable,
          what it does in the body, and what happens when you do not eat it.
        </p>
        <p className="ip-p">
          We educate first. When our own products genuinely serve what the science recommends, we say so.
          That is the only time we mention them.
        </p>

        <div className="ip-divider" />

        {/* THE PROBLEM */}
        <div className="ip-tag-label">The Problem We Are Solving</div>
        <h2 className="ip-section-title">India carries the weight of some of the world&apos;s most serious health crises</h2>
        <p className="ip-p">
          Over 101 million people living with diabetes. A gut health collapse driven by 40 years of
          dietary transition. A silent testosterone decline in men. A PCOS epidemic affecting 1 in 5
          Indian women. A mental health crisis where 83% of those who need care never receive it.
        </p>
        <p className="ip-p">
          And yet — the wellness conversation happening in India is largely borrowed. It is translated
          from British brands, American influencers, and global research that was never designed with
          an Indian body, an Indian gut microbiome, or an Indian lifestyle in mind.
        </p>
        <p className="ip-p">
          The traditional Indian thali was one of the most gut-intelligent meals ever assembled.
          Fermented curd. Prebiotic-rich dal. Whole grains. Seasonal vegetables. A daily probiotic
          dose built into every meal. Indians had the answer — and then, in the span of one generation,
          quietly replaced it with maida, packaged food, and polished white rice.
          Nobody told them what was being lost. <strong style={{ color: "var(--forest)" }}>Nirogyn is here to say it.</strong>
        </p>

        <div className="ip-divider" />

        {/* WHAT WE BELIEVE */}
        <div className="ip-tag-label">What We Believe</div>
        <h2 className="ip-section-title">Three convictions that drive everything we publish</h2>
        <div className="about-belief-list" style={{ marginTop: "1.5rem" }}>
          {BELIEFS.map((b, i) => (
            <div className="about-belief" key={i}>
              <p>{b}</p>
            </div>
          ))}
        </div>

        <div className="ip-divider" />

        {/* FIVE PILLARS */}
        <div className="ip-tag-label">The Five Pillars</div>
        <h2 className="ip-section-title">The architecture of a human life</h2>
        <p className="ip-p">
          Everything Nirogyn publishes maps to one of five pillars — the five foundational areas of
          human health that determine how you feel, how you function, and how long you thrive.
        </p>
        <div className="about-pillars-grid">
          {PILLARS.map((p) => (
            <div className="about-pillar" key={p.name} style={{ borderTop: `3px solid ${p.color}` }}>
              <div className="about-pillar-name">{p.name}</div>
              <div className="about-pillar-desc">{p.desc}</div>
            </div>
          ))}
        </div>
        <p className="ip-p" style={{ marginTop: "1rem" }}>
          These five pillars are not categories for sorting articles. They are the architecture of a
          human life — and the five areas where the gap between what Indians know and what the science
          says is widest, most consequential, and most within reach of changing.
        </p>

        <div className="ip-divider" />

        {/* OUR STANDARD */}
        <div className="ip-tag-label">Our Standard</div>
        <h2 className="ip-section-title">Every article passes two tests before it is published</h2>
        <div className="write-standard" style={{ marginTop: "1.5rem" }}>
          <div className="write-standard-item">
            <strong>For the researcher</strong>
            If a researcher reads it, they should find nothing to correct.
          </div>
          <div className="write-standard-item">
            <strong>For the first-time reader</strong>
            If someone reading about this topic for the first time reads it, they should find nothing they cannot understand.
          </div>
        </div>
        <p className="ip-p" style={{ marginTop: "1rem" }}>
          We do not publish content that cannot be sourced. We do not make claims we cannot defend.
          We do not write articles whose only purpose is to sell something. When we get something
          wrong — and every publication eventually does — we correct it, attribute the correction, and move on.
        </p>
        <div className="about-belief" style={{ marginTop: "1rem" }}>
          <p>
            <strong style={{ color: "var(--forest)" }}>This is what it means to be science-backed.</strong> Not a logo
            on a product. A standard applied to every word.
          </p>
        </div>

        <div className="ip-divider" />

        {/* BRANDS */}
        <div className="ip-tag-label">The Brands Under Nirogyn Healthcare Pvt. Ltd.</div>
        <h2 className="ip-section-title">Education platform. Purpose-built wellness brands.</h2>
        <p className="ip-p">
          Nirogyn is the education platform. Under Nirogyn Healthcare Pvt. Ltd., we have built a
          family of targeted wellness brands — each one addressing a specific health gap that the
          science identifies and our content explores.
        </p>
        <div className="brands-ov-grid">
          {BRANDS_LIST.map((b) => (
            <a key={b.name} href={b.href} className="brands-ov-card">
              <div className="bov-cat">{b.cat}</div>
              <div className="bov-name">{b.name}</div>
              <div className="bov-hook">{b.desc}</div>
              <span className="bov-link">Explore {b.name} →</span>
            </a>
          ))}
        </div>

        <div className="ip-divider" />

        {/* FINAL WORD */}
        <div
          style={{
            background: "var(--forest)", borderRadius: "24px",
            padding: "3rem", textAlign: "center",
          }}
        >
          <p style={{ color: "rgba(249,245,238,0.7)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "620px", margin: "0 auto" }}>
            Wellness in India has been over-promised and under-explained for too long.
            Nirogyn is the correction to that. We are not the loudest voice in this space.
            We intend to be the most trusted one — because every article, every claim, and
            every recommendation earns that trust through the only currency that matters
            in health communication.
          </p>
          <p style={{ color: "var(--lime)", fontSize: "1.1rem", fontWeight: 700, marginTop: "1.5rem" }}>
            The truth. Sourced. Explained. Written for you.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginTop: "1.5rem" }}>
            {["FDA Registered Facility", "FSSAI Approved", "GMP Certified", "CE Certified", "ISO 9001:2015"].map((b) => (
              <span key={b} className="brand-cert-badge">{b}</span>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
