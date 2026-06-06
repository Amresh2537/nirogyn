"use client";
import { useRef } from "react";
import Link from "next/link";
import OptionalImage from "./OptionalImage";
/**
 * BRAND IMAGE SLOTS
 * Add product images to /public/images/brands/ matching the `img` filenames.
 * Recommended: 240×240 px PNG with transparent background.
 *
 * Files:
 *   /public/images/brands/isochia.png
 *   /public/images/brands/captain-gummy.png
 *   /public/images/brands/powershila.png
 *   /public/images/brands/pretty-energy.png
 */
const BRANDS = [
  {
    cls: "isochia",
    img: "isochia",
    emoji: "🥤",
    name: "ISOCHIA",
    desc: "Daily fiber for smooth digestion & gut health. Science-backed, India-formulated.",
    link: "Explore ISOCHIA",
    href: "/brands/isochia",
    delay: "",
  },
  {
    cls: "gummy",
    img: "captain-gummy",
    emoji: "🐻",
    name: "Captain Gummy",
    desc: "Nutrition gummies for kids — made fun, made healthy, made with love.",
    link: "Explore Captain Gummies",
    href: "/brands/captain-gummies",
    delay: "reveal-delay-1",
  },
  {
    cls: "powershila",
    img: "powershila",
    emoji: "⚡",
    name: "POWERSHILA",
    desc: "Strength, stamina & performance support for those who push their limits.",
    link: "Explore PowerShilla",
    href: "/brands/powershila",
    delay: "reveal-delay-3",
  },
  {
    cls: "pretty",
    img: "pretty-energy",
    emoji: "🌸",
    name: "Pretty Energy",
    desc: "Clean energy for her — no jitters, no crash, just radiant focus all day.",
    link: "Explore Pretty Energy",
    href: "/brands/pretty-energy",
    delay: "reveal-delay-4",
  },
];

type Brand = (typeof BRANDS)[0];

function BrandCard({ cls, img, emoji, name, desc, link, href, delay, index }: Brand & { index: number }) {
  const isLeft = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transition = "transform 0.1s ease, box-shadow 0.3s ease";
    el.style.setProperty("--rx", `${(-y * 10).toFixed(1)}deg`);
    el.style.setProperty("--ry", `${(x * 10).toFixed(1)}deg`);
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(.25,.46,.45,.94), box-shadow 0.4s ease";
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={ref}
      className={`brand-card ${cls} ${isLeft ? "reveal-split-left" : "reveal-split-right"} ${delay}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="brand-blob" />
      <div className="brand-img-wrap">
        <span
          className="brand-emoji"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            margin: 0,
          }}
        >
          {emoji}
        </span>
        <OptionalImage
          src={`/images/brands/${img}.png`}
          alt={name}
          fill
          sizes="120px"
        />
      </div>
      <div className="brand-name">{name}</div>
      <p className="brand-desc">{desc}</p>
      <Link href={href} className="brand-link">
        {link} <span className="brand-link-arrow">→</span>
      </Link>
    </div>
  );
}

export default function Brands() {
  return (
    <section className="brands-section" id="brands">
      {/* Animated ambient blobs */}
      <div className="brands-blob-wrap" aria-hidden="true">
        <div className="brands-blob brands-blob-1" />
        <div className="brands-blob brands-blob-2" />
        <div className="brands-blob brands-blob-3" />
        <div className="brands-blob brands-blob-4" />
      </div>
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <div
          className="section-tag reveal"
          style={{ justifyContent: "center" }}
        >
          Our Portfolio
        </div>
        <h2
          className="section-title reveal reveal-delay-1"
          style={{ textAlign: "center" }}
        >
          Our Wellness Brands
        </h2>
        <p
          className="section-sub reveal reveal-delay-2"
          style={{ margin: "0 auto", textAlign: "center" }}
        >
          Thoughtfully crafted products to support your health journey.
        </p>
      </div>

      <div className="brands-grid">
        {BRANDS.map((brand, i) => (
          <BrandCard key={brand.name} {...brand} index={i} />
        ))}
      </div>
    </section>
  );
}
