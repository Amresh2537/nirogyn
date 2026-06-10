import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/posts";
import styles from "./blog-pages.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Nirogyn",
  description:
    "Evidence-based wellness articles on gut health, nutrition, sleep, stress, and more — built for India.",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className={styles.indexPage}>
      <header className={styles.topNav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.navBackLink}>
            ← Nirogyn.com
          </Link>
          <span className={styles.navLabel}>Blog</span>
          <Link href="/ask" className={styles.navPill}>
            Ask Nirogyn
          </Link>
        </div>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.heroKicker}>
            Evidence-Based Wellness
          </p>
          <h1 className={styles.heroTitle}>
            Wellness, Grounded in Science
          </h1>
          <p className={styles.heroSubtitle}>
            Articles on gut health, nutrition, sleep, stress, and more — written for India.
          </p>
        </div>
      </section>

      <section className={styles.postsSection}>
        {posts.length === 0 ? (
          <div className={styles.emptyState}>
            No articles published yet. Check back soon.
          </div>
        ) : (
          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={styles.postCard}
              >
                {post.featuredImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    className={styles.postImage}
                  />
                ) : (
                  <div className={styles.postImageFallback}>
                    🌿
                  </div>
                )}
                <div className={styles.postContent}>
                  {post.category && (
                    <span className={styles.postCategory}>
                      {post.category}
                    </span>
                  )}
                  <h2 className={styles.postCardTitle}>
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className={styles.postCardExcerpt}>
                      {post.excerpt}
                    </p>
                  )}
                  <div className={styles.postMeta}>
                    <span>{post.author}</span>
                    {post.readTime && (
                      <>
                        <span className={styles.metaDot}>·</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                    <span className={styles.metaDot}>·</span>
                    <span>
                      {new Date(post.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <footer className={styles.pageFooter}>
        © 2026 Nirogyn Healthcare Pvt. Ltd. · nirogyn.com
      </footer>
    </div>
  );
}
