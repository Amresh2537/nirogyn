"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Icon components (simple SVG outlines matching the image style)
function GutIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="12" stroke="#2b5e38" strokeWidth="1.4" fill="none" />
      <path d="M10 10 Q14 8 18 10 Q22 12 18 15 Q14 18 10 15 Q6 12 10 10Z" stroke="#2b5e38" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
function SkinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="11" r="5" stroke="#2b5e38" strokeWidth="1.4" fill="none" />
      <path d="M6 24 Q6 18 14 18 Q22 18 22 24" stroke="#2b5e38" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function SleepIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 7 A8 8 0 1 0 21 19 A6 6 0 0 1 16 7Z" stroke="#2b5e38" strokeWidth="1.4" fill="none" />
    </svg>
  );
}
function EnergyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="16,5 11,15 15,15 12,23 20,12 15,12 18,5" stroke="#2b5e38" strokeWidth="1.4" fill="none" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

const TOPIC_CARDS = [
  {
    title: "Gut Health",
    desc: "Digestion, bloating, constipation, microbiome & more.",
    image: "/images/topics/gut-health.png",
    Icon: GutIcon,
    featured: true,
  },
  {
    title: "Skin Health",
    desc: "Acne, glow, ageing, skin nutrition & more.",
    image: "/images/topics/skin-health.png",
    Icon: SkinIcon,
    featured: false,
  },
  {
    title: "Sleep & Stress",
    desc: "Better sleep, calm mind, stress balance & more.",
    image: "/images/topics/sleep-stress.png",
    Icon: SleepIcon,
    featured: false,
  },
  {
    title: "Energy & Vitality",
    desc: "Fatigue, focus, stamina, daily energy & more.",
    image: "/images/topics/energy-vitality.png",
    Icon: EnergyIcon,
    featured: false,
  },
];

function Divider({ hovered }: { hovered: boolean }) {
  return (
    <div
      style={{
        width: "32px",
        height: "2px",
        background: hovered ? "rgba(255,255,255,0.5)" : "#2b5e38",
        margin: "0.65rem 0",
        transition: "background 0.4s",
        borderRadius: "1px",
      }}
    />
  );
}

function FeaturedCard({ topic }: { topic: (typeof TOPIC_CARDS)[0] }) {
  const [hovered, setHovered] = useState(false);
  const { Icon } = topic;
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        height: "100%",
        minHeight: "260px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background image */}
      <img
        src={topic.image}
        alt={topic.title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.6s ease",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)"
            : "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 100%)",
          transition: "background 0.4s",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Icon top-left */}
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon />
        </div>

        {/* Bottom info */}
        <div style={{ marginTop: "auto" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 500,
              color: "#ffffff",
              margin: "0 0 0.1rem",
              lineHeight: 1.15,
            }}
          >
            {topic.title}
          </h3>
          <Divider hovered={true} />
          <p
            style={{
              fontSize: "13.5px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.8)",
              margin: "0 0 1rem",
            }}
          >
            {topic.desc}
          </p>
          <a
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 500,
              color: "#ffffff",
              textDecoration: "none",
              letterSpacing: "0.01em",
              opacity: hovered ? 1 : 0.85,
              transition: "opacity 0.3s",
            }}
          >
            Read Articles
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

function SmallCard({ topic }: { topic: (typeof TOPIC_CARDS)[0] }) {
  const [hovered, setHovered] = useState(false);
  const { Icon } = topic;
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
      }}
    >
      {/* Image top half */}
      <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
        <img
          src={topic.image}
          alt={topic.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}
        />
        {/* Icon overlay bottom-left of image */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "12px",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon />
        </div>
      </div>

      {/* Text bottom half */}
      <div style={{ padding: "1rem 1.1rem 1.25rem" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
            fontWeight: 500,
            color: "#103f22",
            margin: "0 0 0.1rem",
            lineHeight: 1.2,
          }}
        >
          {topic.title}
        </h3>
        <Divider hovered={false} />
        <p
          style={{
            fontSize: "12.5px",
            lineHeight: 1.6,
            color: "#7a8e7c",
            margin: "0 0 0.85rem",
          }}
        >
          {topic.desc}
        </p>
        <a
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "12.5px",
            fontWeight: 500,
            color: "#103f22",
            textDecoration: "none",
            opacity: hovered ? 0.7 : 1,
            transition: "opacity 0.3s",
          }}
        >
          Read Articles
          <ArrowRight size={13} />
        </a>
      </div>
    </article>
  );
}

export default function Topics() {
  const [featuredCard, ...smallCards] = TOPIC_CARDS;

  return (
    <section
      style={{
        position: "relative",
        background: "#f2ede6",
        padding: "5rem 2.5rem",
        overflow: "hidden",
      }}
    >
      {/* Subtle leaf watermark */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          bottom: "-80px",
          left: "-60px",
          width: "420px",
          height: "420px",
          opacity: 0.06,
          background:
            "radial-gradient(ellipse 70% 70% at 30% 70%, #2b5e38 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2.5fr",
          gap: "3.5rem",
          alignItems: "start",
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingTop: "0.5rem" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#2b5e38",
              margin: 0,
            }}
          >
            Health Topics
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              color: "#103f22",
              margin: 0,
            }}
          >
            Explore
            <br />
            Health Topics
          </h2>

          {/* Short horizontal rule */}
          <div
            style={{
              width: "36px",
              height: "2px",
              background: "#2b5e38",
              borderRadius: "1px",
            }}
          />

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.75,
              color: "#627264",
              margin: 0,
              maxWidth: "260px",
            }}
          >
            Science-backed wellness guides to help you understand your body better and live a healthier life.
          </p>

          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#103f22",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.01em",
              padding: "0.75rem 1.5rem",
              borderRadius: "100px",
              textDecoration: "none",
              width: "fit-content",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#2b5e38")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#103f22")}
          >
            Browse All Articles
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Featured large card */}
          <div style={{ height: "300px" }}>
            <FeaturedCard topic={featuredCard} />
          </div>

          {/* 3 small cards row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            {smallCards.map((topic) => (
              <SmallCard key={topic.title} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}