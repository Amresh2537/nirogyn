"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

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
    a: "Every article on Nirogyn is grounded in peer-reviewed research with named sources. We do not publish claims we cannot defend, and we do not write generic advice without a biological mechanism behind it. Our content is reviewed for accuracy before publication. That said, Nirogyn content is educational — it is not a substitute for personalised medical advice. Always consult a qualified healthcare professional for your specific health situation.",
  },
  {
    q: "I eat reasonably well. Why do I still feel tired and bloated all the time?",
    a: "This is one of the most common questions we hear — and the answer is almost never what people expect. Eating well and absorbing well are two different things. If your gut microbiome is depleted — through low fibre, stress, antibiotics, or ultra-processed food — your body cannot extract what it needs from even a decent diet. Explore our EAT pillar for the science behind this, starting with gut health and fibre awareness.",
  },
  {
    q: "I sleep 7–8 hours but wake up exhausted. What is Nirogyn's take on this?",
    a: "Hours of sleep and quality of sleep are not the same number. If your gut microbiome is disrupted, it produces less serotonin — the precursor to melatonin — and less GABA, the molecule that allows your brain to properly switch off. No sleep hygiene routine fixes a gut chemistry problem. Our SLEEP pillar covers the gut-sleep axis in depth — it is the angle most sleep content completely misses.",
  },
  {
    q: "Does Nirogyn cover women's health specifically?",
    a: "Yes — and directly. Our REPRODUCE pillar covers PCOS, endometriosis, perimenopause, fertility, and hormonal health for women with scientific depth and zero shame. We also cover how the menstrual cycle affects energy, sleep, movement, and nutrition across all five pillars. Women's health on Nirogyn is not a subcategory. It is a full, ongoing, science-backed conversation.",
  },
  {
    q: "Does Nirogyn cover men's health too?",
    a: "Equally. Testosterone decline in Indian men is real, accelerating, and almost entirely absent from Indian wellness content. Nirogyn covers male hormonal health, fertility, performance, and reproductive wellness with the same directness and scientific rigour as women's health. Both conversations matter. Both deserve equal space.",
  },
  {
    q: "How is Nirogyn different from other wellness websites?",
    a: "Three things set Nirogyn apart. First, every article is India-specific — written for Indian bodies, Indian diets, and Indian cultural realities, not adapted from Western content. Second, every claim is sourced — no unnamed studies, no invented facts, no marketing language dressed as science. Third, Nirogyn covers all five pillars as a connected system — because the gut, sleep, movement, mental health, and hormonal health are not separate conversations. They are the same conversation.",
  },
  {
    q: "Can I trust the product brands under Nirogyn?",
    a: "All brands under Nirogyn Healthcare Pvt. Ltd. — Isochia, Captain Gummies, PowerShilla, and Pretty Energy — are manufactured to the highest quality standards available: FDA Registered Facility, FSSAI Approved, GMP Certified, CE Certified, and ISO 9001:2015. We do not ask for your trust. We earn it through independent verification from the world's most respected regulatory bodies.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero">
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <span>FAQ</span>
          </div>
          <div className="ip-hero-tag">Frequently Asked Questions</div>
          <h1>10 questions.<br />Pick your 5.</h1>
          <p className="ip-hero-sub">
            These are the questions real Indians ask about Nirogyn, wellness, and the science behind
            how their bodies actually work. Every answer is written to inform — not to sell.
          </p>
        </div>
      </div>

      <div className="ip-body">
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

        <div className="ip-divider" />
        <p className="ip-p" style={{ textAlign: "center", color: "var(--text-muted)" }}>
          More questions? Write to us at{" "}
          <a href="mailto:care@nirogyn.com" style={{ color: "var(--forest)", fontWeight: 600 }}>
            care@nirogyn.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
}
