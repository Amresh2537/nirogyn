"use client";

import Link from "next/link";

const scienceItems = [
  {
    title: "Research Library",
    description: "Key studies behind Nirogyn's five pillars — curated, dated, and explained in plain language.",
    href: "/science/research-library"
  },
  {
    title: "The Evidence Base",
    description: "The research landscape that every Nirogyn article is built on.",
    href: "/science/evidence-base"
  },
  {
    title: "Under The Microscope",
    description: "Common health claims examined against clinical evidence.",
    href: "/science/under-microscope"
  },
  {
    title: "Biomarker Lexicon",
    description: "Every scientific term used across Nirogyn — defined in plain language.",
    href: "/science/biomarker-lexicon"
  }
];

export default function ScienceGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
      {scienceItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              padding: "2rem",
              borderRadius: "8px",
              border: "1px solid rgba(126,200,90,0.2)",
              backgroundColor: "rgba(126,200,90,0.04)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#178b77";
              e.currentTarget.style.backgroundColor = "rgba(126,200,90,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(126,200,90,0.2)";
              e.currentTarget.style.backgroundColor = "rgba(126,200,90,0.04)";
            }}
          >
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.75rem" }}>
              {item.title}
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#2a3140", marginBottom: 0 }}>
              {item.description}
            </p>
            <p style={{ fontSize: "0.85rem", color: "#178b77", fontWeight: 600, marginTop: "auto", paddingTop: "1rem" }}>
              Explore →
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
