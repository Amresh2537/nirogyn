import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Nirogyn",
  description:
    "Evidence-based wellness articles on gut health, nutrition, sleep, stress, and more — built for India.",
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Navbar />
      <div className="blog-listing-page">
        {/* Hero */}
        <header className="blog-listing-hero">
          <div className="blog-listing-hero-inner">
            <div className="blog-tag" style={{ marginBottom: "1.2rem" }}>From Our Blog</div>
            <h1 className="blog-listing-title">Wellness, Grounded in Science</h1>
            <p className="blog-listing-sub">
              Evidence-based articles on gut health, nutrition, sleep, stress, and more — written for India.
            </p>
          </div>
        </header>

        {/* Articles Grid */}
        <section className="blog-listing-section">
          <div className="blog-listing-container">
            {posts.length === 0 ? (
              <div className="blog-listing-empty">
                <p>No articles published yet. Check back soon.</p>
              </div>
            ) : (
              <div className="blog-listing-grid">
                {posts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="blog-listing-card">
                    {post.featuredImage && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="blog-listing-card-img"
                      />
                    )}
                    {!post.featuredImage && (
                      <div className="blog-listing-card-img-placeholder">
                        <span>🌿</span>
                      </div>
                    )}
                    <div className="blog-listing-card-body">
                      {post.category && (
                        <div className="blog-listing-cat">{post.category}</div>
                      )}
                      <h2 className="blog-listing-card-title">{post.title}</h2>
                      {post.excerpt && (
                        <p className="blog-listing-card-excerpt">{post.excerpt}</p>
                      )}
                      <div className="blog-listing-card-meta">
                        <span>{post.author}</span>
                        {post.readTime && (
                          <>
                            <span className="blog-meta-dot" />
                            <span>{post.readTime}</span>
                          </>
                        )}
                        <span className="blog-meta-dot" />
                        <span>
                          {new Date(post.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric", month: "short", year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
