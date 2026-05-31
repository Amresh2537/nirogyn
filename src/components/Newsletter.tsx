"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletter-section" id="newsletter">
      {/* Subtle leaf video bg */}
      <video
        className="newsletter-video-bg"
        autoPlay muted loop playsInline
        aria-hidden="true"
      >
        <source src="/images/brands/leaf-bg.mp4" type="video/mp4" />
      </video>

      <div className="newsletter-card reveal">

        {/* ── LEFT: Headline + features ── */}
        <div className="nl-left">
          <div className="nl-tag">
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
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="nl-right">
          <div className="nl-count">
            <div className="nl-count-num">
              <span className="count-up" data-target="10000">0</span>
              <span style={{ fontSize: "1.6rem" }}>+</span>
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
            We respect your privacy. No spam, ever. Unsubscribe with one click.
          </p>
        </div>

      </div>
    </section>
  );
}
