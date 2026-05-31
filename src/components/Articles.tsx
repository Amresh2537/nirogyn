import Link from "next/link";
import OptionalImage from "./OptionalImage";

/**
 * ARTICLE IMAGE SLOTS
 * Add images to /public/images/articles/ matching the `img` filenames.
 *
 * Featured article background:
 *   /public/images/articles/featured.jpg   (1200×800 px recommended)
 *
 * Mini article thumbnails (60×60 px):
 *   /public/images/articles/article-1.jpg  — Skin health
 *   /public/images/articles/article-2.jpg  — Sleep / Magnesium
 *   /public/images/articles/article-3.jpg  — Kids health
 *   /public/images/articles/article-4.jpg  — Men's health / Ashwagandha
 */
const MINI_ARTICLES = [
  { num: "01", cat: "Gut-Brain Axis", title: "90% of Your Serotonin Is Made in Your Gut",                 read: "8 min read", img: "article-gut", emoji: "🧠", delay: "",              href: "/blog/gut-brain-axis" },
  { num: "02", cat: "Skin Health",    title: "Why Your Diet Is Affecting Your Skin More Than You Think", read: "3 min read", img: "article-1",   emoji: "✨", delay: "reveal-delay-1", href: "#" },
  { num: "03", cat: "Sleep",          title: "Magnesium for Sleep: Does It Actually Work?",               read: "4 min read", img: "article-2",   emoji: "😴", delay: "reveal-delay-2", href: "#" },
  { num: "04", cat: "Kids Health",    title: "Essential Nutrients Every Indian Child Needs",              read: "5 min read", img: "article-3",   emoji: "🧒", delay: "reveal-delay-3", href: "#" },
  { num: "05", cat: "Men's Health",   title: "Ashwagandha for Stress: What Science Actually Says",       read: "4 min read", img: "article-4",   emoji: "💪", delay: "reveal-delay-4", href: "#" },
];

export default function Articles() {
  return (
    <section className="articles-section" id="articles">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "3.5rem",
        }}
      >
        <div>
          <div className="section-tag reveal">Latest</div>
          <h2 className="section-title reveal reveal-delay-1">From Our Blog</h2>
        </div>
        <a href="#" className="btn-ghost reveal">
          View All Articles ↗
        </a>
      </div>

      <div className="articles-grid">
        {/* ── FEATURED ARTICLE ── */}
        <Link href="/blog/gut-brain-axis" className="article-featured reveal" style={{ textDecoration: "none" }}>
          <OptionalImage
            src="/images/blog.jpeg"
            alt="Gut-brain axis serotonin article"
            fill
            sizes="(max-width:900px) 100vw, 55vw"
            className="article-featured-img"
            priority
          />
          <div className="article-cat">Featured · Mental Health</div>
          <h3 className="art-title">
            90% of Your Serotonin Is Made in Your Gut. So Why Are We Treating Anxiety Without Treating the Gut?
          </h3>
          <p className="art-excerpt">
            The organ most responsible for producing the chemicals that govern your mood is not your brain — and almost nobody is treating it.
          </p>
          <div className="art-meta">
            <span>Nirogyn Editorial</span>
            <span className="art-meta-dot" />
            8 min read
            <span className="art-meta-dot" />
            Gut-Brain Axis
          </div>
        </Link>

        {/* ── MINI ARTICLES ── */}
        <div className="articles-list">
          {MINI_ARTICLES.map(({ num, cat, title, read, img, emoji, delay, href }) => (
            <Link href={href} className={`article-mini reveal ${delay}`} key={num}>
              <div className="mini-num">{num}</div>
              <div className="mini-content">
                <div className="mini-cat">{cat}</div>
                <div className="mini-title">{title}</div>
                <div className="mini-read">{read}</div>
              </div>
              {/* IMAGE SLOT — small thumbnail, fallback to emoji */}
              <div className="mini-thumb">
                {/* Emoji renders first (behind), image renders on top */}
                <div className="mini-thumb-emoji">{emoji}</div>
                <OptionalImage
                  src={`/images/articles/${img}.jpg`}
                  alt={title}
                  fill
                  sizes="60px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
