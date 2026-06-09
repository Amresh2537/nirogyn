"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Marquee from "./Marquee";

export default function Navbar() {
  const marqueeHeight = 34;
  const navGap = 2;
  const navTop = marqueeHeight + navGap;
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const syncMobileState = () => {
      const mobile = mediaQuery.matches;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };
    syncMobileState();
    mediaQuery.addEventListener("change", syncMobileState);

    return () => mediaQuery.removeEventListener("change", syncMobileState);
  }, []);

  // Hide navbar on scroll down, show it on scroll up.
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (isMobile) {
        setIsVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (currentScrollY <= marqueeHeight + 4) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollYRef.current) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [isMobile]);

  const topics = [
    { label: "EAT", href: "#topics" },
    { label: "MOVE", href: "#ingredients" },
    { label: "MIND", href: "#faq" },
    { label: "SLEEP", href: "#topics" },
    { label: "REPRODUCE", href: "#brands" },
  ];

  const useLightNav = isHovering;

  return (
    <>
      {/* Marquee - always visible */}
      <div className="fixed top-0 left-0 right-0 z-[130]">
        <Marquee />
      </div>

      {/* Navbar - hides on scroll down, shows on scroll up */}
      <nav
        id="mainNav"
        onMouseEnter={() => {
          setIsHovering(true);
          setIsVisible(true);
        }}
        onMouseLeave={() => setIsHovering(false)}
        onFocusCapture={() => setIsVisible(true)}
        className={`
          fixed left-0 right-0 z-[129] grid items-center 
          ${isMobile ? "gap-1.5 px-2 py-2" : "gap-3 px-7 py-4"}
          transition-[transform,opacity,background-color,border-color,backdrop-filter] duration-300 ease-in-out
          ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
          ${isMobile ? "grid-cols-[40px_minmax(0,1fr)_40px]" : "grid-cols-[1fr_auto_1fr]"}
          ${useLightNav
            ? "border-b border-[rgba(16,63,34,0.08)] bg-[#f7f8f7] backdrop-blur-[6px]" 
            : "border-b border-transparent !bg-transparent backdrop-blur-0"
          }
        `}
        style={{
          top: isMobile ? marqueeHeight + 4 : navTop,
          transform: isVisible ? "translateY(0)" : `translateY(calc(-100% - ${navTop}px))`,
        }}
      >
        {/* Left section */}
        <div className={`flex items-center justify-self-start ${isMobile ? "gap-1.5" : "gap-6"}`}>
          <button
            type="button"
            className={`inline-flex h-[40px] w-[40px] flex-col items-center justify-center gap-1 rounded-lg border transition-colors duration-200 ${
              isMobile
                ? "border-[rgba(255,255,255,0.4)] bg-[rgba(8,14,10,0.28)]"
                : useLightNav
                  ? "border-[rgba(16,63,34,0.22)] bg-[rgba(255,255,255,0.86)]"
                  : "border-[rgba(255,255,255,0.4)] bg-[rgba(8,14,10,0.28)]"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobileNavMenu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`h-[1.8px] w-[18px] rounded-[1px] transition-all duration-200 ${
                useLightNav ? "bg-[rgba(31,53,36,0.92)]" : "bg-[rgba(255,255,255,0.92)]"
              } ${isMenuOpen ? "translate-y-[5.7px] rotate-45" : ""}`}
            />
            <span
              className={`h-[1.8px] w-[18px] rounded-[1px] transition-all duration-200 ${
                useLightNav ? "bg-[rgba(31,53,36,0.92)]" : "bg-[rgba(255,255,255,0.92)]"
              } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`h-[1.8px] w-[18px] rounded-[1px] transition-all duration-200 ${
                useLightNav ? "bg-[rgba(31,53,36,0.92)]" : "bg-[rgba(255,255,255,0.92)]"
              } ${isMenuOpen ? "-translate-y-[5.7px] -rotate-45" : ""}`}
            />
          </button>

          {isMobile ? null : topics.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`no-underline px-3 py-1 text-[1.36rem]  tracking-[0.02em] leading-none ${
                useLightNav ? "text-[#1a3c1e]" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/"
          className={`justify-self-center font-bold leading-none tracking-[0.02em] no-underline font-['Playfair_Display',serif] ${
            isMobile ? "text-[1.65rem] text-center" : "text-[2.55rem]"
          } ${useLightNav ? "text-[#1a3c1e]" : "text-white"}`}
        >
          NIROGYN
        </Link>

        {/* Right section */}
        <div className={`flex items-center justify-self-end ${isMobile ? "gap-2" : "gap-5"}`}>
          {!isMobile && (
            <>
              <form
                action="#articles"
                className={`flex items-center gap-0 h-[clamp(45px,3.5vw,32px)] w-[clamp(250px,20vw,360px)] rounded-full overflow-hidden ${
                  isHovering 
                    ? "border-2 border-[rgba(16,63,34,0.8)] bg-white" 
                    : "border-2 border-[rgba(255,255,255,0.78)] bg-black/20"
                }`}
              >
                <input
                  type="search"
                  name="q"
                  placeholder="Search"
                  aria-label="Search"
                  className={`w-full h-full border-none bg-transparent outline-none text-center placeholder:text-center text-[0.9rem] font-medium px-5 ${
                    useLightNav ? "text-black placeholder:text-black/70" : "text-white placeholder:text-white/70"
                  }`}
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className={`w-[54px] h-full border-none bg-transparent text-[1.6rem] font-medium cursor-pointer ${
                    useLightNav ? "text-[#1a3c1e]" : "text-white"
                  }`}
                >
                  ⌕
                </button>
              </form>

              <Link
                href="/ask"
                className={`min-w-[clamp(118px,11vw,164px)] h-[clamp(44px,3.5vw,42px)] rounded-full border-2 border-transparent px-[clamp(16px,1.7vw,27px)] text-[clamp(0.86rem,0.88vw,0.95rem)] font-semibold no-underline inline-flex items-center justify-center whitespace-nowrap cursor-pointer ${
                  isHovering 
                    ? "bg-[#f7f8f7] text-[#1f5a2a]" 
                    : "bg-gradient-to-r from-[#245c2f] to-[#3f874a] text-[#b8f4a2]"
                }`}
              >
                ✦ Ask Niro
              </Link>
            </>
          )}
          {isMobile && <div className="h-[40px] w-[40px]" aria-hidden="true" />}
        </div>

  {/* Mobile Menu */}
{isMenuOpen && (
  <div
    id="mobileNavMenu"
    className="
      absolute
      left-0
      right-0
      top-full
      bg-white
      border-t
      border-black/10
      shadow-2xl
      z-[220]
      overflow-hidden
    "
  >
    <div className="py-6">
      {/* Navigation Items */}
      <div className="flex flex-col">
        {topics.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="
              group
              flex
              items-center
              justify-between
              h-20
              px-8
              border-b
              border-black/10
              no-underline
              transition-all
              duration-300
              hover:bg-black/5
            "
          >
            <span
              className="
                text-[1.45rem]
                font-medium
                tracking-[0.04em]
                text-black
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              {item.label}
            </span>

            <span
              className="
                text-xl
                text-black/70
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              →
            </span>
          </a>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mx-auto mt-8 flex max-w-[420px] flex-col gap-4 px-6">
        <Link
          href="/blog"
          onClick={() => setIsMenuOpen(false)}
          className="
            flex
            h-14
            w-full
            items-center
            justify-center
            rounded-full
            border
            border-black/20
            text-base
            font-medium
            text-black
            no-underline
            transition-all
            duration-300
            hover:bg-black/5
          "
        >
          View Articles
        </Link>

        
      </div>
    </div>
  </div>
)}
      </nav>
    </>
  );
}