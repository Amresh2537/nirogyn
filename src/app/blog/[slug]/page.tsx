import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/blog/Navbar";
import Footer from "@/components/Footer";
import OptionalImage from "@/components/OptionalImage";
import { getPostBySlug } from "@/lib/posts";

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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f2f0eb]">
        {post.featuredImage && (
          <div className="relative h-[clamp(300px,45vw,580px)] w-full overflow-hidden">
            <OptionalImage
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              width={1400}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.12)] to-[rgba(0,0,0,0.52)]" />
          </div>
        )}

        <div className="relative z-[2] mx-auto mt-[-72px] max-w-[860px] px-6 max-sm:mt-[-48px]">
          <div className="bg-[#f2f0eb] px-10 pb-8 pt-9 max-sm:px-5 max-sm:py-6">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="text-[11px] font-semibold tracking-[0.1em] text-[#7a6e60]">
                {new Date(post.createdAt)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                  .toUpperCase()}
              </span>
              {post.category && (
                <>
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#7a6e60]" />
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-[#7a6e60]">
                    {post.category.toUpperCase()}
                  </span>
                </>
              )}
            </div>

            <h1
              className="mb-[18px] font-['Josefin_Sans',sans-serif] text-[clamp(1.6rem,3vw,2.4rem)] font-semibold uppercase leading-[1.3] tracking-[0.06em] text-[#1a2218]"
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="m-0 max-w-[640px] text-[0.95rem] leading-[1.75] text-[#4a4a42]">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>

        <article className="mx-auto max-w-[860px] px-16 pb-12 pt-8 max-sm:px-5">
          <div
            className="text-[0.95rem] leading-[1.8] text-[#3a3a32] [&_a]:text-[#3f874a] [&_h2]:mt-8 [&_h2]:font-['Josefin_Sans',sans-serif] [&_h2]:text-[1.1rem] [&_h2]:uppercase [&_h2]:tracking-[0.05em] [&_h2]:text-[#1a2218] [&_h2]:mb-3 [&_p]:mb-[1.2rem]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <section className="mx-auto max-w-[860px] border-t border-[rgba(26,34,24,0.15)] px-16 pb-16 pt-10 max-sm:px-5">
          <h2 className="mb-5 font-['Josefin_Sans',sans-serif] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1a2218]">
            Leave a comment
          </h2>
          <form className="flex flex-col gap-3.5" action="#" method="post">
            <div className="flex gap-3.5 max-sm:flex-col">
              <input
                className="flex-1 rounded-[2px] border border-[rgba(26,34,24,0.22)] bg-white px-4 py-[11px] text-[0.88rem] text-[#1a2218] outline-none focus:border-[rgba(26,34,24,0.55)]"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="flex-1 rounded-[2px] border border-[rgba(26,34,24,0.22)] bg-white px-4 py-[11px] text-[0.88rem] text-[#1a2218] outline-none focus:border-[rgba(26,34,24,0.55)]"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              className="resize-y rounded-[2px] border border-[rgba(26,34,24,0.22)] bg-white px-4 py-[11px] text-[0.88rem] text-[#1a2218] outline-none focus:border-[rgba(26,34,24,0.55)]"
              name="comment"
              placeholder="Share your thoughts..."
              rows={4}
              required
            />
            <button
              className="w-fit rounded-[2px] bg-[#1a2218] px-8 py-3 font-['Josefin_Sans',sans-serif] text-[11px] font-semibold uppercase tracking-[0.1em] text-[#b8f4a2]"
              type="submit"
            >
              Post comment
            </button>
          </form>
        </section>

        <div className="mx-auto max-w-[860px] px-16 pb-10 text-[0.78rem] text-[#6f746c] max-sm:px-5">
          Powered by Nirogyn · Not a substitute for medical advice
        </div>
      </div>
      <Footer />
    </>
  );
}
