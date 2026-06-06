import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — Nirogyn Healthcare Pvt. Ltd.",
  description:
    "Write to us at care@nirogyn.com — content feedback, suggestions, partnerships, media, privacy enquiries. A real person reads every message.",
};

const CARDS = [
  {
    icon: "📝",
    title: "Content Feedback",
    desc: "Found an error? Disagree with a claim? Read something that helped you? Tell us.",
  },
  {
    icon: "💡",
    title: "Content Suggestions",
    desc: "A topic you want us to cover. A question nobody is answering. A gap you noticed.",
  },
  {
    icon: "🤝",
    title: "Partnerships & Collaborations",
    desc: "Researchers, institutions, or brands that share Nirogyn's commitment to science-backed wellness.",
  },
  {
    icon: "📰",
    title: "Media & Press",
    desc: "Journalists, editors, and content creators. We respond to media enquiries promptly.",
  },
  {
    icon: "⚖️",
    title: "Privacy & Legal",
    desc: "Data privacy requests, Terms questions, and legal enquiries. Handled with full seriousness.",
  },
  {
    icon: "💼",
    title: "Careers",
    desc: "Tell us who you are and what you want to build with Nirogyn.",
  },
];

export default function ContactPage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero">
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <span>CONTACT US</span>
          </div>
          <div className="ip-hero-tag">Contact Us</div>
          <h1>We are here.<br />Write to us.</h1>
          <p className="ip-hero-sub">
            Nirogyn is a small, focused team. There is no automated response sitting between you and us.
            When you write to us, a real person reads it and responds.
          </p>
          <a
            href="mailto:care@nirogyn.com"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              marginTop: "2rem", background: "var(--lime)", color: "var(--forest)",
              fontWeight: 700, fontSize: "1rem", padding: "0.9rem 2rem",
              borderRadius: "100px", textDecoration: "none",
              transition: "background 0.25s, transform 0.25s",
            }}
          >
            care@nirogyn.com →
          </a>
          <p style={{ color: "rgba(249,245,238,0.45)", fontSize: "0.8rem", marginTop: "0.8rem" }}>
            We respond within 72 hours on working days.
          </p>
        </div>
      </div>

      <div className="ip-body">

        <div className="ip-tag-label">What Would You Like to Write About?</div>
        <h2 className="ip-section-title" style={{ marginBottom: "1.5rem" }}>Every message finds the right person</h2>

        <div className="contact-grid">
          {CARDS.map((c) => (
            <div className="contact-card" key={c.title}>
              <span className="contact-card-icon">{c.icon}</span>
              <span className="contact-card-title">{c.title}</span>
              <span className="contact-card-desc">{c.desc}</span>
            </div>
          ))}
        </div>

        <div className="ip-divider" />

        <div className="ip-tag-label">What Happens When You Write to Us</div>
        <p className="ip-p">
          Every message is read by a member of the Nirogyn team. We do not use automated ticketing
          systems or outsourced support queues.
        </p>
        <div className="brand-bullets" style={{ marginTop: "1rem" }}>
          <div className="brand-bullet">
            <div className="brand-bullet-dot" />
            <p>
              <strong style={{ color: "var(--forest)" }}>For content corrections</strong> — our editorial team will
              review the claim, check the source, and update the article if warranted. We will write back to confirm.
            </p>
          </div>
          <div className="brand-bullet">
            <div className="brand-bullet-dot" />
            <p>
              <strong style={{ color: "var(--forest)" }}>For partnership or media enquiries</strong> — if it is not
              the right fit, we will say so directly and respectfully. If it is, we move quickly.
            </p>
          </div>
        </div>

        <div className="about-belief" style={{ marginTop: "2rem" }}>
          <p>
            We built Nirogyn because we believe Indians deserve to be taken seriously when it comes
            to their health. The same standard applies to every person who takes the time to write to us.
          </p>
        </div>

        <div className="ip-divider" />

        <div className="ip-tag-label">Registered Office</div>
        <div className="legal-meta">
          <strong>Nirogyn Healthcare Pvt. Ltd.</strong><br />
          India<br />
          <a href="https://nirogyn.com" style={{ color: "var(--forest)" }}>nirogyn.com</a>
        </div>

      </div>

      <Footer />
    </div>
  );
}
