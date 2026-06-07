"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "./Marquee";

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navTextColor = isHovering ? "#1a3c1e" : "#ffffff";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const syncMobileState = () => setIsMobile(mediaQuery.matches);
    syncMobileState();
    mediaQuery.addEventListener("change", syncMobileState);

    return () => mediaQuery.removeEventListener("change", syncMobileState);
  }, []);

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
          gridTemplateColumns: isMobile ? "42px 1fr 42px" : "1fr auto 1fr",
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
        {isMobile && <div style={{ width: "42px", height: "42px" }} aria-hidden="true" />}

        {!isMobile && topics.map((item) => (
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

      <Link
        href="/"
        style={{
          textDecoration: "none",
          justifySelf: "center",
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: isMobile ? "2rem" : "2.3rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          color: navTextColor,
          lineHeight: 1,
        }}
      >
        NIROGYN
      </Link>

      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifySelf: "end" }}>
        {!isMobile && (
          <>
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
              `${isHovering ? "linear-gradient(#f7f8f7, #f7f8f7)" : "linear-gradient(rgba(8,14,10,0.2), rgba(8,14,10,0.2))"} padding-box, linear-gradient(90deg, #3f9f58 0%, #7ec85a 100%) border-box`,
            color: isHovering ? "#2f8a46" : "#9fef7b",
            padding: "0 1.4rem",
            fontSize: "1.05rem",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          ✦ Ask Niro
        </Link>
          </>
        )}
        {isMobile && <div style={{ width: "42px", height: "42px" }} aria-hidden="true" />}
      </div>
      </nav>
    </>
  );
}
