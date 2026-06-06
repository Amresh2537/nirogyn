import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found — Nirogyn" };
  return {
    title: `${post.title} | Nirogyn`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

export default async function DynamicBlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <div className="blog-page">
        {/* Reading progress bar */}
        <div className="blog-read-progress" aria-hidden="true" />

        {/* Nav */}
        <nav className="blog-nav">
          <Link href="/blog" className="blog-nav-back">← All Articles</Link>
          <span className="blog-nav-logo">Nirogyn</span>
        </nav>

        {/* Hero */}
        <header className="blog-hero">
          <div className="blog-hero-inner">
            <div className="blog-hero-tags">
              {post.category && <span className="blog-tag">{post.category}</span>}
              {post.featured && <span className="blog-tag">Featured</span>}
            </div>
            <h1 className="blog-title">{post.title}</h1>
            <div className="blog-meta">
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
                  day: "numeric", month: "long", year: "numeric",
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Body — render HTML exactly as authored */}
        <article className="blog-body">
          <div
            className="blog-container blog-cms-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Footer */}
        <div className="blog-footer-line">
          Powered by Nirogyn · Not a substitute for medical advice
        </div>
      </div>
      <Footer />
    </>
  );
}
