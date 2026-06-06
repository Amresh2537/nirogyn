"use client";

import { useState } from "react";
import Link from "next/link";
import Marquee from "./Marquee";

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  const navTextColor = isHovering ? "#1a3c1e" : "#ffffff";
  const mutedTextColor = isHovering ? "#79917c" : "rgba(255,255,255,0.7)";
  const topics = [
    { label: "EAT", href: "#topics" },
    { label: "MOVE", href: "#ingredients" },
    { label: "MIND", href: "#faq" },
    { label: "SLEEP", href: "#topics" },
    { label: "REPRODUCE", href: "#brands" },
  ];

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 120 }}>
        <Marquee />
      </div>

      <nav
        id="mainNav"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          position: "fixed",
          top: "34px",
          left: 0,
          right: 0,
          zIndex: 119,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.75rem 1.15rem",
          background: isHovering ? "#f7f8f7" : "transparent",
          borderBottom: isHovering ? "1px solid rgba(16,63,34,0.08)" : "1px solid transparent",
          backdropFilter: isHovering ? "blur(6px)" : "none",
          transition: "background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease",
        }}
      >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifySelf: "start" }}>
        <button
          aria-label="Open menu"
          type="button"
          style={{
            width: "42px",
            height: "42px",
            border: `1px solid ${isHovering ? "rgba(16,63,34,0.2)" : "rgba(255,255,255,0.45)"}`,
            borderRadius: "8px",
            background: isHovering ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.08)",
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
          }}
        >
          <span style={{ width: "18px", height: "1.7px", borderRadius: "1px", background: navTextColor }} />
          <span style={{ width: "18px", height: "1.7px", borderRadius: "1px", background: navTextColor }} />
          <span style={{ width: "18px", height: "1.7px", borderRadius: "1px", background: navTextColor }} />
        </button>

        {topics.map((item, index) => (
          <div key={item.label} style={{ display: "inline-flex", alignItems: "center" }}>
            <a
              href={item.href}
              style={{
                textDecoration: "none",
                color: navTextColor,
                fontSize: "0.95rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                padding: "0 0.65rem",
                lineHeight: 1,
              }}
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>

      <a
        href="#"
        style={{
          textDecoration: "none",
          justifySelf: "center",
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: "2.3rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          color: navTextColor,
          lineHeight: 1,
        }}
      >
        NIROGYN
      </a>

      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifySelf: "end" }}>
        <form
          action="#articles"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            height: "54px",
            width: "clamp(250px, 20vw, 340px)",
            borderRadius: "999px",
            border: `2px solid ${isHovering ? "rgba(16,63,34,0.8)" : "rgba(255,255,255,0.78)"}`,
            background: isHovering ? "#fff" : "rgba(5,5,5,0.24)",
            overflow: "hidden",
          }}
        >
          <input
            type="search"
            name="q"
            placeholder="Search all products"
            aria-label="Search all products"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              background: "transparent",
              color: navTextColor,
              padding: "0 1.3rem",
              outline: "none",
              fontSize: "1.05rem",
              fontWeight: 500,
            }}
          />
          <button
            type="submit"
            aria-label="Search"
            style={{
              width: "56px",
              height: "100%",
              border: "none",
              background: "transparent",
              color: navTextColor,
              fontSize: "1.45rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            ⌕
          </button>
        </form>

        <Link
          href="/ask"
          style={{
            height: "54px",
            borderRadius: "999px",
            border: "2px solid transparent",
            background:
              `${isHovering ? "linear-gradient(#f7f8f7, #f7f8f7)" : "linear-gradient(rgba(8,14,10,0.2), rgba(8,14,10,0.2))"} padding-box, linear-gradient(90deg, #5676c6 0%, #3d8e88 100%) border-box`,
            color: navTextColor,
            padding: "0 1.4rem",
            fontSize: "1.05rem",
            fontWeight: 500,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          ✦ Ask Niro
        </Link>
      </div>
      </nav>
    </>
  );
}
