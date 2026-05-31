"use client";

import { useEffect, useRef, useState } from "react";
import OptionalImage from "./OptionalImage";

const HERO_VIDEOS = [
  "/images/brands/hero-bg.mp4",
  "/images/brands/leaves-bg.mp4",
  "/images/brands/leaf-bg.mp4",
];

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [vidIdx, setVidIdx] = useState(0);
  const [fading, setFading] = useState(false);

  function handleVideoEnd() {
    setFading(true);
    setTimeout(() => {
      setVidIdx((i) => (i + 1) % HERO_VIDEOS.length);
      setFading(false);
    }, 600);
  }

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 18; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = Math.random() * 8 + 4;
      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;
        animation-duration:${Math.random() * 15 + 10}s;
        animation-delay:${Math.random() * -20}s;
        background:${Math.random() > 0.5 ? "var(--sage)" : "var(--gold)"};
      `;
      container.appendChild(p);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <section className="hero" id="home">
      {/* ── VIDEO BACKGROUND — cycles hero-bg → leaves-bg → leaf-bg ── */}
      <video
        key={vidIdx}
        className={`hero-video-bg${fading ? " hero-video-fading" : ""}`}
        autoPlay
        muted
        playsInline
        aria-hidden="true"
        onEnded={handleVideoEnd}
      >
        <source src={HERO_VIDEOS[vidIdx]} type="video/mp4" />
      </video>
      <div className="hero-video-overlay" aria-hidden="true" />

      <div className="particles" ref={particlesRef} />

      {/* ── LEFT CONTENT ── */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          Science · Nutrition · Wellness
        </div>

        <h1 className="hero-headline">
          Better Health.
          <br />
          <em>Backed by Science.</em>
        </h1>

        <p className="hero-sub">
          Evidence-based information to help you understand your body, make
          better choices, and live your healthiest life — built for India, by
          India.
        </p>

        <div className="hero-actions">
          <a href="#topics" className="btn-primary">
            <span>Explore Topics</span>
            <svg
              className="arrow-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </a>
          <a href="#brands" className="btn-ghost">
            Our Brands
            <svg
              className="arrow-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">
              <span className="count-up" data-target="50">0</span>
              <sup>+</sup>
            </div>
            <div className="stat-label">Expert Articles</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <span className="count-up" data-target="6">0</span>
              <sup>+</sup>
            </div>
            <div className="stat-label">Health Topics</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <span className="count-up" data-target="4">0</span>
              <sup>+</sup>
            </div>
            <div className="stat-label">Wellness Brands</div>
          </div>
        </div>
      </div>

      {/* ── RIGHT VISUAL ── */}
      <div className="hero-visual">
        <div className="visual-ring">
          <div className="ring-outer" />
          <div className="ring-mid" />
          <div className="ring-inner" />

          {/* Glow pulse behind image */}
          <div className="ring-glow" />

          {/* Orbiting pills */}
          <div className="orbit-item">🌿</div>
          <div className="orbit-item">💊</div>
          <div className="orbit-item">🧬</div>
          <div className="orbit-item">⚗️</div>

          {/* Main hero image — large floating circle */}
          <div className="ring-center">
            <OptionalImage
              src="/images/hero/hero.jpeg"
              alt="Nirogyn product visual"
              fill
              className="ring-center-img"
              sizes="(max-width:900px) 0px, 320px"
              priority
            />
            {/* Gradient overlay + text badge */}
            <div className="ring-center-overlay">
              <div className="ring-center-badge">
                <small>Science Backed</small>
                Wellness
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
