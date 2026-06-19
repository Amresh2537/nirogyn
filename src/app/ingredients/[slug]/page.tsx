import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import OptionalImage from "@/components/OptionalImage";
import { getIngredientBySlug, getPublishedIngredients } from "@/lib/ingredients";
import styles from "../../blog/blog-pages.module.css";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

function addLeadParagraphClass(content: string): string {
  return content.replace(/<p(\s[^>]*)?>/, (match) => {
    if (/class=/.test(match)) {
      return match.replace(/class=("|')(.*?)\1/, (_full, quote: string, classNames: string) => {
        if (classNames.split(/\s+/).includes(styles.storyLeadParagraph)) {
          return `class=${quote}${classNames}${quote}`;
        }

        return `class=${quote}${classNames} ${styles.storyLeadParagraph}${quote}`;
      });
    }

    return `<p class="${styles.storyLeadParagraph}"${match.slice(2)}`;
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ingredient = await getIngredientBySlug(slug);
  if (!ingredient) return { title: "Ingredient Not Found — Nirogyn" };

  return {
    title: `${ingredient.seoTitle || ingredient.title} | Nirogyn Ingredients`,
    description: ingredient.seoDescription || ingredient.excerpt,
  };
}

export default async function IngredientDetailPage({ params }: Props) {
  const { slug } = await params;
  const ingredient = await getIngredientBySlug(slug);
  if (!ingredient) notFound();

  const allIngredients = await getPublishedIngredients();
  const sameCategory = allIngredients.filter(
    (item) => item.slug !== ingredient.slug && item.category.trim() === ingredient.category.trim()
  );
  const fallbackIngredients = allIngredients.filter(
    (item) => item.slug !== ingredient.slug && item.category.trim() !== ingredient.category.trim()
  );
  const relatedIngredients = [...sameCategory, ...fallbackIngredients].slice(0, 4);
  const articleHeadings = Array.from(
    ingredient.content.matchAll(/<h[23][^>]*>(.*?)<\/h[23]>/gi)
  )
    .map((entry) => stripHtml(entry[1] ?? ""))
    .filter(Boolean)
    .slice(0, 6);

  return (
    <div className={styles.postPage}>
      <main className={styles.storyMain}>
        <section className={styles.storyHero}>
          <div className={styles.storyGlow} aria-hidden="true" />
          <div className={styles.storyHeroGrid}>
            <div className={styles.storyCopy}>
              <Link href="/ingredients" className={styles.storyBackLink}>
                Back to all ingredients
              </Link>

              <p className={styles.storyEyebrow}>Nirogyn Ingredients</p>
              <h1 className={styles.storyTitle}>{ingredient.title}</h1>

              {ingredient.excerpt && <p className={styles.storyExcerpt}>{ingredient.excerpt}</p>}

              <div className={styles.storyMetaRow}>
                <span className={styles.storyMetaPill}>{formatDate(ingredient.createdAt)}</span>
                {ingredient.category && (
                  <span className={styles.storyMetaPill}>{ingredient.category}</span>
                )}
                {ingredient.readTime && (
                  <span className={styles.storyMetaPill}>{ingredient.readTime}</span>
                )}
                <span className={styles.storyMetaPill}>By {ingredient.author}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.storyBodyShell} ${styles.postLayout}`}>
          <div className={styles.storyRailColumn}>
            {articleHeadings.length > 0 && (
              <aside className={styles.storyRail}>
                <p className={styles.storyRailTitle}>In this article</p>
                <ul className={styles.storyRailList}>
                  {articleHeadings.map((heading) => (
                    <li key={heading}>{heading}</li>
                  ))}
                </ul>
              </aside>
            )}

            <div className={styles.storyMediaWrap}>
              {ingredient.featuredImage ? (
                <OptionalImage
                  src={ingredient.featuredImage}
                  alt={ingredient.featuredImageAlt || ingredient.title}
                  width={1200}
                  height={630}
                  className={styles.storyMediaImage}
                  priority
                />
              ) : (
                <div className={styles.storyMediaFallback}>
                  <span>🌿</span>
                </div>
              )}
            </div>
          </div>

          <div className={styles.storyBodyMain}>
            <article className={styles.storyArticleCard}>
              {ingredient.content ? (
                <div
                  className={styles.storyProse}
                  dangerouslySetInnerHTML={{
                    __html: addLeadParagraphClass(ingredient.content),
                  }}
                />
              ) : (
                <p className={styles.storyExcerpt}>
                  Detailed information about {ingredient.title} coming soon. Check back for updates
                  on benefits, uses, and scientific research.
                </p>
              )}
            </article>
          </div>
        </section>

        {relatedIngredients.length > 0 && (
          <section className={styles.storyRelatedSection}>
            <div className={styles.storyRelatedInner}>
              <h2 className={styles.storyRelatedTitle}>
                Related in {ingredient.category || "Ingredients"}
              </h2>
              <div className={styles.storyRelatedGrid}>
                {relatedIngredients.map((item) => (
                  <Link
                    key={item.id}
                    href={`/ingredients/${item.slug}`}
                    className={styles.postCard}
                  >
                    {item.featuredImage ? (
                      <div className={styles.postImageContainer}>
                        <OptionalImage
                          src={item.featuredImage}
                          alt={item.featuredImageAlt || item.title}
                          width={1200}
                          height={630}
                          className={styles.postImage}
                        />
                      </div>
                    ) : (
                      <div className={styles.postImageFallback}>🌿</div>
                    )}
                    <div className={styles.postContent}>
                      {item.category && (
                        <span className={styles.postCategory}>{item.category}</span>
                      )}
                      <h3 className={styles.postCardTitle}>{item.title}</h3>
                      {item.excerpt && (
                        <p className={styles.postCardExcerpt}>{item.excerpt}</p>
                      )}
                      <div className={styles.postMeta}>
                        <span>{item.author}</span>
                        {item.readTime && (
                          <>
                            <span className={styles.metaDot}>·</span>
                            <span>{item.readTime}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.storyCommentsSection}>
          <div className={styles.storyCommentsCard}>
            <h2 className={styles.storyCommentsTitle}>Leave a comment</h2>
            <form className={styles.storyCommentsForm} action="#" method="post">
              <div className={styles.storyCommentsGrid}>
                <div>
                  <label htmlFor="name" className={styles.storyInputLabel}>
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className={styles.storyInputControl}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={styles.storyInputLabel}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className={styles.storyInputControl}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="comment" className={styles.storyInputLabel}>
                  Comment *
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  placeholder="Share your thoughts about this ingredient..."
                  className={styles.storyInputControl}
                  required
                />
              </div>
              <div>
                <button type="submit" className={styles.storySubmitButton}>
                  Post comment
                </button>
              </div>
              <p className={styles.storyCommentsNote}>
                Your email address will not be published. Required fields are marked *
              </p>
            </form>
          </div>
        </section>

        <div className={styles.storyDisclaimerBar}>
          Powered by Nirogyn · Not a substitute for medical advice
        </div>
      </main>

      <Footer />
    </div>
  );
}
