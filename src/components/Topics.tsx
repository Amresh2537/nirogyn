"use client";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const TOPIC_CARDS = [
  { num: "01", title: "Gut Health", desc: "Digestion, bloating, constipation & more", tag: "Digestive Care" },
  { num: "02", title: "Skin Health", desc: "Acne, glow, aging & skin nutrition", tag: "Dermatology" },
  { num: "03", title: "Kids Health", desc: "Growth, immunity, nutrition & more", tag: "Paediatrics" },
  { num: "04", title: "Men's Health", desc: "Energy, hormones, stress & performance", tag: "Men's Care" },
  { num: "05", title: "Energy & Vitality", desc: "Fatigue, stamina, focus & productivity", tag: "Performance" },
  { num: "06", title: "Sleep & Stress", desc: "Better sleep, less stress, more calm", tag: "Wellness" },
];

type TopicCardItem = (typeof TOPIC_CARDS)[number];

function TopicCard({ topic }: { topic: TopicCardItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#fff",
        padding: "1.75rem 2rem",
        cursor: "pointer",
        minHeight: "160px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Left-to-right fill */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#103f22",
          transform: hovered ? "translateX(0%)" : "translateX(-100%)",
          transition: "transform 0.55s cubic-bezier(0.77, 0, 0.175, 1)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Tag + Number */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: hovered ? "rgba(255,255,255,0.45)" : "#4a7055",
              transition: "color 0.5s",
            }}
          >
            {topic.tag}
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 500,
              color: hovered ? "rgba(255,255,255,0.25)" : "#c2d4c4",
              transition: "color 0.5s",
              letterSpacing: "0.05em",
            }}
          >
            {topic.num}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.4rem, 2vw, 1.85rem)",
            fontWeight: 500,
            lineHeight: 1.15,
            color: hovered ? "#ffffff" : "#103f22",
            margin: "0 0 0.6rem",
            transition: "color 0.5s",
          }}
        >
          {topic.title}
        </h3>

        {/* Desc */}
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.6,
            color: hovered ? "rgba(255,255,255,0.5)" : "#7a8e7c",
            margin: 0,
            transition: "color 0.5s",
          }}
        >
          {topic.desc}
        </p>
      </div>

      {/* Bottom arrow */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "1.25rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background: hovered ? "rgba(255,255,255,0.12)" : "#edf4ee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
            transition: "background 0.5s, transform 0.4s",
          }}
        >
          <ArrowUpRight
            size={15}
            style={{
              color: hovered ? "#a8d5b2" : "#2b5e38",
              transition: "color 0.5s",
            }}
          />
        </div>
      </div>
    </article>
  );
}

export default function Topics() {
  return (
    <section
      id="topics"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#f6f9f5",
        padding: "6rem 2.5rem",
      }}
    >
      {/* Subtle bg glow */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 55% 45% at 8% 5%, rgba(43,94,56,0.07), transparent)",
        }}
      />

      <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 4.4rem)",
                fontWeight: 500,
                lineHeight: 1.02,
                color: "#103f22",
                margin: 0,
              }}
            >
              Health matters
              <br />
              <em style={{ fontStyle: "italic", color: "#2b5e38" }}>that matter most</em>
            </h2>
          </div>
          <p
            style={{
              maxWidth: "320px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#627264",
              margin: 0,
              textAlign: "right",
            }}
          >
            Expert-backed insights, wellness guides, and practical health advice for every stage of life.
          </p>
        </div>

        {/* Grid — 1px green lines as gaps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "#d8e6d9",
          }}
        >
          {TOPIC_CARDS.map((topic) => (
            <TopicCard key={topic.title} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}