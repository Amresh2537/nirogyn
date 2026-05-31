"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const nav = document.getElementById("mainNav");

    const onScroll = () => {
      const s = window.scrollY;
      const h = document.body.scrollHeight - window.innerHeight;

      if (barRef.current) {
        barRef.current.style.width = ((s / h) * 100).toFixed(2) + "%";
      }
      if (nav) {
        nav.classList.toggle("scrolled", s > 80);
      }
      if (backRef.current) {
        backRef.current.classList.toggle("visible", s > 400);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress">
        <div className="scroll-progress-bar" ref={barRef} />
      </div>
      <button
        className="back-top"
        ref={backRef}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
