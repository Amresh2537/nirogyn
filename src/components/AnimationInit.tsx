"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function countUp(el: HTMLElement, target: number, duration = 1600) {
  const start = Date.now();
  const step = () => {
    const progress = Math.min((Date.now() - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target).toString();
    if (progress < 1) requestAnimationFrame(step);
  };
  step();
}

export default function AnimationInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll reveal — re-observe on every route change
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    // Count-up numbers
    const counters = document.querySelectorAll<HTMLElement>(".count-up");
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = Number((e.target as HTMLElement).dataset.target ?? 0);
            countUp(e.target as HTMLElement, target);
            countObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => countObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
