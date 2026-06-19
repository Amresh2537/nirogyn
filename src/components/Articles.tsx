import Link from "next/link";
import OptionalImage from "./OptionalImage";
import { getPublishedPosts } from "@/lib/posts";

export default async function Articles() {
  const allPosts = await getPublishedPosts();
  
  // Get 4 posts from different categories
  const selectedPosts = getPostsFromDifferentCategories(allPosts, 4);

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
      </div>

      <div className="articles-grid">
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

        <div className="articles-list">
          {selectedPosts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} className="article-mini reveal" key={post.id}>
              <div className="mini-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="mini-content">
                <div className="mini-cat">{post.category || "Wellness"}</div>
                <div className="mini-title">{post.title}</div>
                <div className="mini-read">{post.readTime || "Read article"}</div>
              </div>
              <div className="mini-thumb">
                {post.featuredImage ? (
                  <OptionalImage
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    fill
                    sizes="60px"
                  />
                ) : null}
              </div>
            </Link>
          ))}

          {selectedPosts.length === 0 && (
            <div className="article-mini reveal" style={{ pointerEvents: "none" }}>
              <div className="mini-num">00</div>
              <div className="mini-content">
                <div className="mini-cat">Blog</div>
                <div className="mini-title">No published articles yet</div>
                <div className="mini-read">Please check back soon</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Link href="/blog" className="btn-ghost reveal">
          Explore All Articles ↗
        </Link>
      </div>
    </section>
  );
}

// Helper function to get posts from different categories
function getPostsFromDifferentCategories(posts: any[], count: number) {
  // Group posts by category
  const categorizedPosts: { [key: string]: any[] } = {};
  
  posts.forEach(post => {
    const category = post.category || "Uncategorized";
    if (!categorizedPosts[category]) {
      categorizedPosts[category] = [];
    }
    categorizedPosts[category].push(post);
  });

  // Get one post from each category (preferring the most recent)
  const selectedPosts: any[] = [];
  const categories = Object.keys(categorizedPosts);
  
  // Shuffle categories for variety or sort by category name for consistency
  // For variety, shuffle: categories.sort(() => Math.random() - 0.5);
  categories.sort(); // Sort alphabetically for consistent results
  
  for (const category of categories) {
    if (selectedPosts.length >= count) break;
    
    // Get the most recent post from this category
    const categoryPosts = categorizedPosts[category];
    const mostRecent = categoryPosts.sort((a, b) => {
      return new Date(b.date || b.publishedAt || 0).getTime() - 
             new Date(a.date || a.publishedAt || 0).getTime();
    })[0];
    
    selectedPosts.push(mostRecent);
  }

  return selectedPosts;
}