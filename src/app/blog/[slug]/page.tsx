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

  return (
    <div className={styles.postPage}>
      <main>
        <div className={styles.postBackRow}>
          <Link href="/blog" className={styles.postBackLink}>
            ← Back to all articles
          </Link>
        </div>

        <section className={styles.postHero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.postHeroInner}>
            <div className={styles.postMeta}>
              <time dateTime={post.createdAt}>
                {new Date(post.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
              {post.category && (
                <>
                  <span className={styles.metaDot}>·</span>
                  <span>{post.category}</span>
                </>
              )}
              {post.readTime && (
                <>
                  <span className={styles.metaDot}>·</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>

            <h1 className={styles.postTitle}>
              {post.title}
            </h1>

            {post.excerpt && (
              <p className={styles.postExcerpt}>
                {post.excerpt}
              </p>
            )}
          </div>
        </section>

        {post.featuredImage && (
          <div className={styles.featuredWrap}>
            <OptionalImage
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              width={1400}
              height={600}
              className={styles.featuredImage}
              priority
            />
          </div>
        )}

        <article className={styles.postBodySection}>
          <div
            className={styles.bodyProse}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {relatedPosts.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.relatedInner}>
              <h2 className={styles.relatedTitle}>Related in {post.category || "Wellness"}</h2>
              <div className={styles.postsGrid}>
                {relatedPosts.map((item) => (
                  <Link key={item.id} href={`/blog/${item.slug}`} className={styles.postCard}>
                    {item.featuredImage ? (
                      <OptionalImage
                        src={item.featuredImage}
                        alt={item.featuredImageAlt || item.title}
                        width={800}
                        height={450}
                        className={styles.postImage}
                      />
                    ) : (
                      <div className={styles.postImageFallback}>🌿</div>
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

        <section className={styles.commentsSection}>
          <div className={styles.commentsCard}>
            <h2 className={styles.commentsTitle}>
              Leave a comment
            </h2>
            <form className={styles.commentsForm} action="#" method="post">
              <div className={styles.commentsGrid}>
                <div>
                  <label htmlFor="name" className={styles.inputLabel}>
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className={styles.inputControl}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={styles.inputLabel}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className={styles.inputControl}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="comment" className={styles.inputLabel}>
                  Comment *
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  placeholder="Write your comment here..."
                  className={styles.inputControl}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  Post comment
                </button>
              </div>
              <p className={styles.commentsNote}>
                Your email address will not be published. Required fields are marked *
              </p>
            </form>
          </div>
        </section>

        <div className={styles.disclaimerBar}>
          Powered by Nirogyn · Not a substitute for medical advice
        </div>
      </main>

      <Footer />
    </div>
  );
}