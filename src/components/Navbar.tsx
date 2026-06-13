"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  solid?: boolean;
}

export default function Navbar({ solid = false }: NavbarProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const forceSolid = solid || !isHomePage;
  const navTop = 0;
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const syncMobileState = () => {
      const mobile = mediaQuery.matches;
      setIsMobile(mobile);
      if (!mobile) {
        // Don't auto-close menu on desktop when resizing
        // setIsMenuOpen(false);
      }
    };
    syncMobileState();
    mediaQuery.addEventListener("change", syncMobileState);

    return () => mediaQuery.removeEventListener("change", syncMobileState);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (forceSolid) {
        setIsScrolled(true);
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      const hasScrolledPastHero = currentScrollY > 4;

      setIsScrolled(hasScrolledPastHero);

      if (isMobile) {
        setIsVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 4) {
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
  }, [forceSolid, isMobile]);

  // Close menu on outside click
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element) || !target.closest("#mainNav")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  // Desktop nav items (visible on desktop)
  const desktopTopics = [
    { label: "EAT", href: "/blog?category=Eat" },
    { label: "MOVE", href: "/blog?category=Move" },
    { label: "MIND", href: "/blog?category=Mind" },
    { label: "SLEEP", href: "/blog?category=Sleep" },
    { label: "REPRODUCE", href: "/blog?category=Reproduce" },
  ];

  // Mobile dropdown items (includes all items)
  const mobileTopics = [
    { label: "EAT", href: "/blog?category=Eat" },
    { label: "MOVE", href: "/blog?category=Move" },
    { label: "MIND", href: "/blog?category=Mind" },
    { label: "SLEEP", href: "/blog?category=Sleep" },
    { label: "REPRODUCE", href: "/blog?category=Reproduce" },
    { label: "SCIENCE", href: "#science" },
    { label: "KNOW YOUR INGREDIENTS", href: "/blog" },
  ];

  const useLightNav = forceSolid || isHovering || isScrolled || isMenuOpen;

  return (
    <>
      {/* Navbar */}
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
          ${
            forceSolid
              ? "border-b border-[rgba(16,63,34,0.08)] bg-white backdrop-blur-[6px]"
              : useLightNav
              ? "border-b border-[rgba(16,63,34,0.08)] bg-[#f7f8f7] backdrop-blur-[6px]"
              : "border-b border-transparent !bg-transparent backdrop-blur-0"
          }
        `}
        style={{
          top: navTop,
          transform: forceSolid
            ? "translateY(0)"
            : isVisible
            ? "translateY(0)"
            : `translateY(calc(-100% - ${navTop}px))`,
        }}
      >
        {/* Left section */}
        <div
          className={`flex items-center justify-self-start ${
            isMobile ? "gap-1.5" : "gap-6"
          }`}
        >
          {/* Hamburger button */}
          <div className="relative">
            <button
              type="button"
              className={`inline-flex h-[40px] w-[40px] flex-col items-center justify-center gap-1 rounded-lg border transition-colors duration-200 ${
                useLightNav
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
                  useLightNav
                    ? "bg-[rgba(31,53,36,0.92)]"
                    : "bg-[rgba(255,255,255,0.92)]"
                } ${isMenuOpen ? "translate-y-[5.7px] rotate-45" : ""}`}
              />
              <span
                className={`h-[1.8px] w-[18px] rounded-[1px] transition-all duration-200 ${
                  useLightNav
                    ? "bg-[rgba(31,53,36,0.92)]"
                    : "bg-[rgba(255,255,255,0.92)]"
                } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`h-[1.8px] w-[18px] rounded-[1px] transition-all duration-200 ${
                  useLightNav
                    ? "bg-[rgba(31,53,36,0.92)]"
                    : "bg-[rgba(255,255,255,0.92)]"
                } ${isMenuOpen ? "-translate-y-[5.7px] -rotate-45" : ""}`}
              />
            </button>

            {/* Dropdown Menu - Works on both mobile and desktop */}
            {isMenuOpen && (
              <div
                id="mobileNavMenu"
                className="absolute left-0 top-[calc(100%+8px)] z-[220]"
                style={{ width: "260px" }}
              >
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: "#f7f8f7",
                    border: "0.5px solid rgba(16,63,34,0.12)",
                    boxShadow:
                      "0 8px 24px rgba(16,63,34,0.10), 0 2px 6px rgba(16,63,34,0.06)",
                  }}
                >
                  {/* Dropdown label */}
                  <div
                    style={{
                      padding: "12px 18px 10px",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(31,53,36,0.45)",
                      fontWeight: 600,
                      borderBottom: "0.5px solid rgba(16,63,34,0.08)",
                    }}
                  >
                    Topics
                  </div>

                  {/* Nav items */}
                  {mobileTopics.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-between no-underline transition-colors duration-150 hover:bg-[rgba(16,63,34,0.05)]"
                      style={{
                        padding: "11px 18px",
                        color: "#1a3c1e",
                        fontSize: item.label === "KNOW YOUR INGREDIENTS" ? "0.82rem" : "0.88rem",
                        fontWeight: 400,
                        letterSpacing: "0.06em",
                        borderBottom: "0.5px solid rgba(16,63,34,0.06)",
                      }}
                    >
                      {item.label}
                      <span
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        style={{ fontSize: "0.78rem", color: "rgba(31,53,36,0.35)" }}
                      >
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop nav links - Only show original 5 items */}
          {!isMobile && (
            <>
              {desktopTopics.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`no-underline px-3 py-1 text-[1.1rem] tracking-[0.02em] leading-none font-normal ${
                    useLightNav ? "text-[#1a3c1e]" : "text-white"
                  }`}
                  style={{
                    fontSize: "1.1rem",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </>
          )}
        </div>

        {/* Logo */}
        <Link
          href="/"
          className={`nirogyn-logo justify-self-center font-light leading-none tracking-[0.08em] no-underline font-['Josefin_Sans',sans-serif] ${
            isMobile ? "text-[1.65rem] text-center" : "text-[2.55rem]"
          } ${useLightNav ? "text-[#1a3c1e]" : "text-white"}`}
        >
          NIROGYN
        </Link>

        {/* Right section */}
        <div
          className={`flex items-center justify-self-end ${
            isMobile ? "gap-2" : "gap-5"
          }`}
        >
          {!isMobile && (
            <>
              <form
                action="/blog"
                method="get"
                className={`relative flex items-center h-[clamp(45px,3.5vw,32px)] w-[clamp(250px,20vw,360px)] rounded-full overflow-hidden ${
                  useLightNav
                    ? "border-2 border-[rgba(16,63,34,0.8)] bg-white"
                    : "border-2 border-[rgba(255,255,255,0.78)] bg-black/20"
                }`}
              >
                <input
                  type="search"
                  name="q"
                  placeholder="Search"
                  aria-label="Search"
                  className={`w-full h-full border-none bg-transparent outline-none text-center placeholder:text-center text-[1.2rem] !mr-[10rem] font-medium px-5 pr-[50px] ${
                    useLightNav
                      ? "text-black placeholder:text-black/70"
                      : "text-white placeholder:text-white/70"
                  }`}
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className={`absolute right-[15px] top-1/2 -translate-y-1/2 border-none bg-transparent text-[1.6rem] leading-none font-medium cursor-pointer ${
                    useLightNav ? "text-[#1a3c1e]" : "text-white"
                  }`}
                >
                  ⌕
                </button>
              </form>

              <Link
                href="/ask"
                className={`min-w-[clamp(118px,11vw,164px)] h-[clamp(44px,3.5vw,42px)] rounded-full border-2 border-transparent px-[clamp(16px,1.7vw,27px)] text-[clamp(0.86rem,0.88vw,0.95rem)] font-semibold no-underline inline-flex items-center justify-center whitespace-nowrap cursor-pointer ${
                  useLightNav
                    ? "bg-[#f7f8f7] text-[#1f5a2a]"
                    : "bg-gradient-to-r from-[#245c2f] to-[#3f874a] text-[#b8f4a2]"
                }`}
              >
                ✦ Ask Niro
              </Link>
            </>
          )}
          {isMobile && (
            <div className="h-[40px] w-[40px]" aria-hidden="true" />
          )}
        </div>
      </nav>
      {solid && <div aria-hidden="true" className="h-[56px] md:h-[72px]" />}
    </>
  );
}