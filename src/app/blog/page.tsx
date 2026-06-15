import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { getPublishedPosts } from "@/lib/posts";
import CategorySelect from "./CategorySelect";
import styles from "./blog-pages.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Nirogyn",
  description:
    "Evidence-based wellness articles on gut health, nutrition, sleep, stress, and more — built for India.",
};

interface BlogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

function pickSearchParam(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = await getPublishedPosts();
  const params = await searchParams;

  const categories = Array.from(
    new Set(posts.map((post) => post.category.trim()).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));

  const requestedCategory = pickSearchParam(params.category).trim();
  const activeCategory = categories.includes(requestedCategory) ? requestedCategory : "all";
  const categoryFilteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category.trim() === activeCategory);

  const query = pickSearchParam(params.q).trim().toLowerCase();
  const visiblePosts =
    query.length === 0
      ? categoryFilteredPosts
      : categoryFilteredPosts.filter((post) => {
          const title = post.title.toLowerCase();
          const excerpt = post.excerpt.toLowerCase();
          const category = post.category.toLowerCase();
          const author = post.author.toLowerCase();
          return (
            title.includes(query) ||
            excerpt.includes(query) ||
            category.includes(query) ||
            author.includes(query)
          );
        });

  return (
    <div className={styles.indexPage}>
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
        {categories.length > 0 && (
          <div className={styles.categoryFilterForm}>
            <CategorySelect
              categories={categories}
              activeCategory={activeCategory}
              className={styles.categorySelect}
            />
          </div>
        )}

        {visiblePosts.length === 0 ? (
          <div className={styles.emptyState}>
            {query
              ? `No articles found for "${query}"${activeCategory === "all" ? "" : ` in ${activeCategory}`}.`
              : activeCategory === "all"
              ? "No articles published yet. Check back soon."
              : `No articles found in ${activeCategory}.`}
          </div>
        ) : (
          <div className={styles.postsGrid}>
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={styles.postCard}
              >
                {post.featuredImage ? (
                  <div className={styles.postImageContainer}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.featuredImage}
                      alt={post.featuredImageAlt || post.title}
                      width={1200}
                      height={630}
                      className={styles.postImage}
                    />
                  </div>
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

      <Footer />
    </div>
  );
}
