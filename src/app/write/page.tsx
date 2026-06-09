import type { Metadata } from "next";
import Navbar from "@/app/write/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Write for Nirogyn — Freelance Science Writers",
  description:
    "Nirogyn is looking for writers who understand science and care about India. Not a content producer — a writer who can make peer-reviewed research matter to a 28-year-old in Bengaluru.",
};

const QUALITIES = [
  {
    title: "Can read the research",
    desc: "Can read a clinical study and extract what it actually found — not what the headline says it found",
  },
  {
    title: "Writes like a knowledgeable friend",
    desc: "Not a textbook and not an advertisement. Clear, warm, and precise all at once",
  },
  {
    title: "Understands India",
    desc: "Indian diets, Indian cultural habits, Indian health statistics — woven naturally into health science",
  },
  {
    title: "Takes accuracy personally",
    desc: "Does not publish what cannot be sourced. Flags uncertainty rather than papering over it",
  },
  {
    title: "Can explain the mechanism",
    desc: "Can explain butyrate, the vagus nerve, cortisol, or the estrobolome in plain language without losing the science",
  },
  {
    title: "Is genuinely curious",
    desc: "About how the Indian body works — not because it is a niche, but because it matters",
  },
];

export default function WritePage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero">
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <span>WRITE FOR NIROGYN</span>
          </div>
          <div className="ip-hero-tag">Write for Nirogyn</div>
          <h1>Freelance science writers<br />who take India&apos;s health seriously</h1>
          <p className="ip-hero-sub">
            Nirogyn does not have any open positions right now. But we are always looking for one kind
            of person — a writer who understands science and cares about India.
          </p>
        </div>
      </div>

      <div className="ip-body">

        {/* NOT JUST ANY WRITER */}
        <div className="ip-tag-label">The Standard</div>
        <h2 className="ip-section-title">Not a content producer. Not a keyword writer.</h2>
        <p className="ip-lead">
          Nirogyn publishes science-backed wellness content across five pillars — EAT, SLEEP, MOVE,
          MIND, and REPRODUCE. Every article is grounded in peer-reviewed research, named sources,
          and India-specific context that no global wellness brand can provide.
        </p>
        <p className="ip-p">
          We are not looking for volume. We are looking for writers who understand the difference
          between a claim and a mechanism — and who always explain the mechanism.
        </p>

        <div className="write-standard" style={{ marginTop: "2rem" }}>
          {QUALITIES.map((q) => (
            <div className="write-standard-item" key={q.title}>
              <strong>{q.title}</strong>
              {q.desc}
            </div>
          ))}
        </div>

        <div className="ip-divider" />

        {/* WHAT IT INVOLVES */}
        <div className="ip-tag-label">What Writing for Nirogyn Involves</div>
        <h2 className="ip-section-title">Structured. Sourced. India-specific.</h2>
        <p className="ip-p">
          Nirogyn articles follow a structured 8-section framework — from the opening hook that mirrors
          the reader&apos;s lived experience to the science section that explains the biological mechanism
          behind the topic. Every section has a purpose. Every claim has a source.
        </p>
        <p className="ip-p">
          Freelance writers at Nirogyn work from a detailed brief that specifies the topic, the pillar,
          the target audience, the India angle, and the research direction. The brief does the navigation.
          The writer does the craft. Articles are 1,000–1,500 words depending on the type. Quality is
          reviewed before publication. We give specific, honest feedback — and we expect writers to
          engage with it.
        </p>
        <div className="about-belief">
          <p>
            This is not the kind of freelance work where you submit something and never hear back.
            We work closely with the writers who contribute to Nirogyn because the standard we hold
            our content to requires it.
          </p>
        </div>

        <div className="ip-divider" />

        {/* HOW TO REACH US */}
        <div
          style={{
            background: "var(--forest)", borderRadius: "24px",
            padding: "3rem", textAlign: "center",
          }}
        >
          <div style={{ color: "var(--lime)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", marginBottom: "1rem" }}>
            HOW TO REACH US
          </div>
          <a
            href="mailto:care@nirogyn.com"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900,
              color: "var(--cream)", textDecoration: "none",
              display: "block", marginBottom: "1rem",
            }}
          >
            care@nirogyn.com
          </a>
          <p style={{ color: "rgba(249,245,238,0.65)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
            Tell us who you are, what you have written, and why Nirogyn. Send a short note about yourself,
            one or two samples of health or science writing you are proud of, and a line on why Nirogyn
            specifically. No formal pitch required. Just honesty and specificity.
          </p>
          <p style={{ color: "rgba(249,245,238,0.45)", fontSize: "0.82rem", marginTop: "1.5rem" }}>
            We read everything that comes in. If the fit is right, we will respond.
            If it is not the right moment, we will say so — and keep your details for when it is.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}
