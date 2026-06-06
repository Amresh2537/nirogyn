"use client";
import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    q: "What is Nirogyn and what will I find here?",
    a: "Nirogyn is a science-backed wellness education platform built specifically for India. You will find deeply researched articles across five pillars — EAT, SLEEP, MOVE, MIND, and REPRODUCE — written for Indian bodies, Indian diets, and Indian lives. No generic advice. No content borrowed from other countries. Just honest, sourced wellness science that actually applies to you.",
  },
  {
    q: "Why does Nirogyn focus so much on gut health?",
    a: "Because the science does. The gut microbiome governs digestion, immunity, mood, sleep quality, hormonal health, and cognitive function. It is not one health topic — it is the thread running through almost every health topic. And India has a specific, urgent gut health crisis: a generation that grew up eating fibre-rich traditional food has shifted to processed, low-fibre diets in 30 years. The consequences are only now becoming visible.",
  },
  {
    q: "I eat reasonably well. Why do I still feel tired and bloated all the time?",
    a: "Eating well and absorbing well are two different things. If your gut microbiome is depleted — through low fibre, stress, antibiotics, or ultra-processed food — your body cannot extract what it needs from even a decent diet. Explore our EAT pillar for the science behind this, starting with gut health and fibre awareness.",
  },
  {
    q: "I sleep 7–8 hours but wake up exhausted. What is the science?",
    a: "Hours of sleep and quality of sleep are not the same number. If your gut microbiome is disrupted, it produces less serotonin — the precursor to melatonin — and less GABA, the molecule that allows your brain to properly switch off. No sleep hygiene routine fixes a gut chemistry problem. Our SLEEP pillar covers the gut-sleep axis in depth.",
  },
  {
    q: "How is Nirogyn different from other wellness websites?",
    a: "Three things. First, every article is India-specific — written for Indian bodies, Indian diets, and Indian cultural realities. Second, every claim is sourced — no unnamed studies, no invented facts, no marketing language dressed as science. Third, Nirogyn covers all five pillars as a connected system — because the gut, sleep, movement, mental health, and hormonal health are not separate conversations. They are the same conversation.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="home-faq-section" style={{ padding: "6rem 4rem" }}>
      <div className="home-faq-inner" style={{ maxWidth: "820px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "0.5rem" }}>
          <div>
            <div className="section-tag reveal" style={{ justifyContent: "flex-start" }}>FAQ</div>
            <h2 className="section-title reveal reveal-delay-1" style={{ color: "var(--cream)" }}>
              Questions real<br />Indians ask
            </h2>
          </div>
          <Link
            href="/faq"
            className="btn-ghost reveal"
            style={{
              color: "rgba(249,245,238,0.75)",
              borderColor: "rgba(255,255,255,0.2)",
              flexShrink: 0,
            }}
          >
            All 10 questions ↗
          </Link>
        </div>
        <p className="section-sub reveal reveal-delay-2" style={{ color: "rgba(249,245,238,0.55)", marginBottom: 0 }}>
          Every answer is written to inform — not to sell.
        </p>

        {/* Accordion */}
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? " open" : ""}`}
            >
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq-q-text">{faq.q}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
