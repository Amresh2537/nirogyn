"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(3);

  const FAQS = [
    {
      q: "What is Nirogyn and what will I find here?",
      a: "Nirogyn is a science-backed wellness education platform built specifically for India. You will find deeply researched articles across five pillars — EAT, SLEEP, MOVE, MIND, and REPRODUCE — written for Indian bodies, Indian diets, and Indian lives. No generic advice. No content borrowed from other countries. Just honest, sourced wellness science that actually applies to you.",
    },
    {
      q: "Is Nirogyn a supplement brand or a content platform?",
      a: "Nirogyn is a content and education platform first. We publish science-backed wellness content across our five pillars. Nirogyn Healthcare Pvt. Ltd. also builds wellness brands — Isochia, Captain Gummies, PowerShilla, and Pretty Energy — each with their own dedicated website. On Nirogyn.com, you will find education. Where our products are genuinely relevant, we mention them. We never write content just to sell something.",
    },
    {
      q: "Why does Nirogyn focus so much on gut health?",
      a: "Because the science does. The gut microbiome governs digestion, immunity, mood, sleep quality, hormonal health, and cognitive function. It is not one health topic — it is the thread running through almost every health topic. And India has a specific, urgent gut health crisis: a generation that grew up eating fibre-rich traditional food has shifted to processed, low-fibre diets in 30 years. The consequences are only now becoming visible. Nirogyn covers this because no one else in India is covering it with the depth it deserves.",
    },
    {
      q: "Are the articles on Nirogyn medically accurate?",
      a: "Every article on Nirogyn is grounded in peer-reviewed research with named sources. We do not publish claims we cannot defend, and we do not write generic advice without a biological mechanism behind it. Our content is reviewed for accuracy before publication. That said, Nirogyn content is educational — it is not a substitute for personalised medical advice. Always consult a qualified healthcare professional for your specific health needs.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-layout reveal">
        <div className="newsletter-card">

          {/* ── LEFT: Headline + features ── */}
          <div className="nl-left">
            <div className="nl-tag nl-tag-pill">
              <span className="nl-tag-line" />
              Stay Informed
            </div>

            <h2 className="nl-headline">
              Stay Informed.<br />
              <em>Stay Healthy.</em>
            </h2>

            <p className="nl-desc">
              Get expert health tips, new articles, and exclusive offers —
              no spam, unsubscribe anytime.
            </p>

            <ul className="nl-features">
              <li><span className="nl-dot" />Weekly expert-curated health insights</li>
              <li><span className="nl-dot" />New articles from our editorial team</li>
              <li><span className="nl-dot" />Exclusive offers from our wellness brands</li>
              <li><span className="nl-dot" />No spam · Cancel anytime</li>
            </ul>

            <div className="nl-badges">
              <span className="nl-badge">🔬 Science-backed</span>
              <span className="nl-badge">🇮🇳 Built for India</span>
              <span className="nl-badge">🔒 100% Free</span>
            </div>

            <div className="nl-count" style={{ marginTop: "1.6rem" }}>
              <span className="nl-count-icon" aria-hidden="true">👥</span>
              <div className="nl-count-num">
                <span className="count-up" data-target="10000">0</span>+
              </div>
              <div className="nl-count-label">
                <strong>Subscribers</strong>
                already reading Nirogyn
              </div>
            </div>

            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <input
                className="newsletter-input"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button className="newsletter-btn" type="submit">
                Subscribe for Free →
              </button>
            </form>

            <p
              className={`newsletter-success ${submitted ? "show" : ""}`}
              aria-live="polite"
            >
              ✓ You&apos;re subscribed! Welcome to Nirogyn.
            </p>

            <p className="nl-privacy">
              🔒 We respect your privacy. No spam, ever. Unsubscribe with one click.
            </p>
          </div>
        </div>

        {/* ── RIGHT: FAQ ── */}
        <div className="nl-faq-card">
          <div className="nl-faq-head">
            <div className="nl-faq-title">FAQs</div>
            <a href="/faq" className="nl-faq-link">See all FAQs →</a>
          </div>
          <div className="nl-faq-list">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div className={`nl-faq-item${isOpen ? " open" : ""}`} key={faq.q}>
                  <button
                    className="nl-faq-q"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="nl-faq-q-left">
                      <span className="nl-faq-q-badge" aria-hidden="true">?</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="nl-faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className="nl-faq-a">
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="nl-faq-privacy">
            <span className="nl-faq-privacy-icon" aria-hidden="true">🛡</span>
            <p>Your health &amp; privacy are our priority. We&apos;ll never share your information.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
