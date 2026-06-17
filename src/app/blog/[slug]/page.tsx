import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import OptionalImage from "@/components/OptionalImage";
import { getPostBySlug, getPublishedPosts } from "@/lib/posts";
import styles from "../blog-pages.module.css";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

function formatPostDate(value: string): string {
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
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found — Nirogyn" };
  return {
    title: `${post.seoTitle || post.title} | Nirogyn`,
    description: post.seoDescription || post.excerpt,
  };
}

export default async function DynamicBlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getPublishedPosts();
  const sameCategory = allPosts.filter(
    (item) => item.slug !== post.slug && item.category.trim() === post.category.trim()
  );
  const fallbackPosts = allPosts.filter(
    (item) => item.slug !== post.slug && item.category.trim() !== post.category.trim()
  );
  const relatedPosts = [...sameCategory, ...fallbackPosts].slice(0, 4);
  const articleHeadings = Array.from(post.content.matchAll(/<h[23][^>]*>(.*?)<\/h[23]>/gi))
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
              <Link href="/blog" className={styles.storyBackLink}>
                Back to all articles
              </Link>

              <p className={styles.storyEyebrow}>Nirogyn Journal</p>
              <h1 className={styles.storyTitle}>{post.title}</h1>

              {post.excerpt && <p className={styles.storyExcerpt}>{post.excerpt}</p>}

              <div className={styles.storyMetaRow}>
                <span className={styles.storyMetaPill}>{formatPostDate(post.createdAt)}</span>
                {post.category && <span className={styles.storyMetaPill}>{post.category}</span>}
                {post.readTime && <span className={styles.storyMetaPill}>{post.readTime}</span>}
                <span className={styles.storyMetaPill}>By {post.author}</span>
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
              {post.featuredImage ? (
                <OptionalImage
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || post.title}
                  width={1200}
                  height={630}
                  className={styles.storyMediaImage}
                  priority
                />
              ) : (
                <div className={styles.storyMediaFallback}>
                  <span>Featured image unavailable</span>
                </div>
              )}
            </div>
          </div>

          <div className={styles.storyBodyMain}>
            <article className={styles.storyArticleCard}>
              <div
                className={styles.storyProse}
                dangerouslySetInnerHTML={{ __html: addLeadParagraphClass(post.content) }}
              />
            </article>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className={styles.storyRelatedSection}>
            <div className={styles.storyRelatedInner}>
              <h2 className={styles.storyRelatedTitle}>Related in {post.category || "Wellness"}</h2>
              <div className={styles.storyRelatedGrid}>
                {relatedPosts.map((item) => (
                  <Link key={item.id} href={`/blog/${item.slug}`} className={styles.postCard}>
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
                      <div className={styles.postImageFallback}>No image</div>
                    )}
                    <div className={styles.postContent}>
                      {item.category && <span className={styles.postCategory}>{item.category}</span>}
                      <h3 className={styles.postCardTitle}>{item.title}</h3>
                      {item.excerpt && <p className={styles.postCardExcerpt}>{item.excerpt}</p>}
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
                  placeholder="Write your comment here..."
                  className={styles.storyInputControl}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={styles.storySubmitButton}
                >
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