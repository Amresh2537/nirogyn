import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { getPublishedIngredients } from "@/lib/ingredients";
import styles from "../blog/blog-pages.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ingredients — Nirogyn",
  description:
    "Explore the science behind every ingredient we use — from traditional wisdom to modern research.",
};

export default async function IngredientsPage() {
  const ingredients = await getPublishedIngredients();

  return (
    <div className={styles.indexPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.heroKicker}>Nirogyn Ingredients</p>
          <h1 className={styles.heroTitle}>Explore Our Ingredients</h1>
          <p className={styles.heroSubtitle}>
            Discover the science behind every ingredient we use. From traditional wisdom to modern
            research — understand what goes into our products and why it matters for your wellness.
          </p>
        </div>
      </section>

      <section className={styles.postsSection}>
        {ingredients.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No ingredients published yet. Check back soon!</p>
          </div>
        ) : (
          <div className={styles.postsGrid}>
            {ingredients.map((ingredient) => (
              <Link
                key={ingredient.id}
                href={`/ingredients/${ingredient.slug}`}
                className={styles.postCard}
              >
                {ingredient.featuredImage ? (
                  <div className={styles.postImageContainer}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ingredient.featuredImage}
                      alt={ingredient.featuredImageAlt || ingredient.title}
                      width={1200}
                      height={630}
                      className={styles.postImage}
                    />
                  </div>
                ) : (
                  <div className={styles.postImageFallback}>🌿</div>
                )}
                <div className={styles.postContent}>
                  {ingredient.category && (
                    <span className={styles.postCategory}>{ingredient.category}</span>
                  )}
                  <h2 className={styles.postCardTitle}>{ingredient.title}</h2>
                  {ingredient.excerpt && (
                    <p className={styles.postCardExcerpt}>{ingredient.excerpt}</p>
                  )}
                  <div className={styles.postMeta}>
                    <span>{ingredient.author}</span>
                    {ingredient.readTime && (
                      <>
                        <span className={styles.metaDot}>·</span>
                        <span>{ingredient.readTime}</span>
                      </>
                    )}
                    <span className={styles.metaDot}>·</span>
                    <span>
                      {new Date(ingredient.createdAt).toLocaleDateString("en-IN", {
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
