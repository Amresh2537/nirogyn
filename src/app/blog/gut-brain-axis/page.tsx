import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import OptionalImage from "@/components/OptionalImage";
import { getPublishedPosts } from "@/lib/posts";
import styles from "../blog-pages.module.css";

export const metadata: Metadata = {
  title: "90% of Your Serotonin Is Made in Your Gut | Nirogyn",
  description:
    "Over 90% of the body's serotonin is produced in the gut. So why are we treating anxiety without treating the gut? A deep dive into the gut-brain axis.",
};

const GUT_FOODS = [
  {
    food: "Dal (lentils/legumes)",
    why: "Rich in prebiotic fibre and tryptophan - feeds bacteria that produce serotonin precursors",
  },
  {
    food: "Whole grain roti (jowar, bajra, ragi)",
    why: "Fermentable fibre -> butyrate production -> neuroinflammation reduction",
  },
  {
    food: "Homemade curd / lassi",
    why: "Lactobacillus bacteria produce GABA and modulate the vagus nerve directly",
  },
  {
    food: "Raw onion, garlic, banana, jeera",
    why: "Potent prebiotics - selectively feed Bifidobacterium and Lactobacillus strains",
  },
  {
    food: "Paneer / eggs / milk / nuts",
    why: "Dietary tryptophan - the raw material your gut bacteria convert to serotonin",
  },
  {
    food: "Kanji, idli batter, achaar (traditional ferments)",
    why: "Live cultures that directly supplement a depleted gut microbiome",
  },
];

export default async function GutBrainAxisPage() {
  const allPosts = await getPublishedPosts();
  const relatedPosts = allPosts
    .filter((post) => post.slug !== "gut-brain-axis")
    .filter((post) => post.category.trim() === "Gut-Brain Axis")
    .slice(0, 4);

  return (
    <div className={styles.postPage}>
      <div className={styles.postBackRow}>
        <Link href="/blog" className={styles.postBackLink}>
          ← Back to all articles
        </Link>
      </div>

      <section className={styles.postHero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.postHeroInner}>
          <div className={styles.postMeta}>
            <span>Mental Health</span>
            <span className={styles.metaDot}>|</span>
            <time>May 2026</time>
            <span className={styles.metaDot}>|</span>
            <span>8 min read</span>
          </div>

          <h1 className={styles.postTitle}>
            90% of Your Serotonin Is Made in Your Gut. So Why Are We Treating Anxiety Without Treating the Gut?
          </h1>

          <p className={styles.postExcerpt}>
            A deep dive into the gut-brain axis and why India&apos;s mental health conversation is incomplete without gut health.
          </p>
        </div>
      </section>

      <div className={styles.featuredWrap}>
        <OptionalImage
          src="/images/hero/hero.jpeg"
          alt="Gut brain axis illustration"
          width={1400}
          height={600}
          className={styles.featuredImage}
          priority
        />
      </div>

      <article className={styles.postBodySection}>
        <div className={styles.bodyProse}>
          <p>
            You have been told the story of anxiety wrong. You were told it is a brain problem, a chemical imbalance,
            a misfiring of neurons. You were told the solution lives there too: in therapy, in a prescription,
            or just learning to manage your thoughts.
          </p>
          <p>
            Some of that is right. But it is dangerously incomplete. Because the organ most responsible for producing
            the chemicals that govern your mood, your calm, your ability to sit with stress without breaking,
            is not your brain. It is 1.5 metres of intestine folded inside your abdomen. And almost nobody is treating it.
          </p>
          <p>
            Over 90% of the body&apos;s serotonin is produced in the gut. The gut contains 500 million neurons,
            more than the entire spinal cord. It communicates with the brain via the vagus nerve in a conversation
            so complex that researchers gave it its own name: <strong>the gut-brain axis</strong>. The fuel that keeps
            this axis running is dietary fibre.
          </p>
          <p>
            India has 200 million people living with a mental health condition. 83% receive no treatment.
            We call this a mental health crisis. We should also call it what it partly is: a gut health crisis nobody has named yet.
          </p>

          <h2>Your Gut Is a Brain. Here Is What It Produces.</h2>
          <p>
            The enteric nervous system, the neural network woven into your gut wall, is so complex and functionally independent
            that neuroscientists call it the second brain. Unlike the brain in your skull, this one manufactures mood chemicals
            in quantities most people find genuinely shocking.
          </p>
          <ul>
            <li><strong>Serotonin:</strong> Over 90% is made in the gut, not the brain.</li>
            <li><strong>GABA:</strong> Gut bacteria help produce calming neurotransmitter signals.</li>
            <li><strong>Butyrate:</strong> A key anti-inflammatory metabolite linked to emotional resilience.</li>
          </ul>

          <h2>Three Ways the Gut Controls Your Brain Chemistry</h2>
          <h3>1. The Vagus Nerve</h3>
          <p>
            Approximately 80% of vagal fibres carry signals upward from gut to brain.
            Your brain is listening to your gut far more than it talks to it.
          </p>

          <h3>2. The Tryptophan Pathway</h3>
          <p>
            A diverse, fibre-fed microbiome pushes tryptophan toward serotonin production.
            A depleted gut pushes it toward the kynurenine pathway, linked with anxiety, depression, and brain fog.
          </p>

          <h3>3. The Immune Pathway</h3>
          <p>
            Around 70% of the immune system lives in the gut wall. A disrupted microbiome can trigger chronic
            low-grade inflammation that affects neurotransmitter function and mood regulation.
          </p>

          <h2>What to Eat to Feed Your Mood Chemistry</h2>
          <p>
            You can create the biological conditions that make your brain more responsive by feeding the gut bacteria
            responsible for mood chemistry.
          </p>
        </div>

        <div className="mb-12 mt-8 overflow-x-auto rounded-2xl border border-[rgba(18,35,24,0.12)]">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[rgba(164,188,134,0.16)]">
                <th className="w-[38%] px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#355a3a]">
                  Food
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#355a3a]">
                  Why It Works
                </th>
              </tr>
            </thead>
            <tbody>
              {GUT_FOODS.map((item, idx) => (
                <tr key={item.food} className={idx % 2 === 0 ? "bg-white/70" : "bg-[rgba(255,255,255,0.38)]"}>
                  <td className="border-t border-[rgba(18,35,24,0.09)] px-6 py-4 font-semibold text-[#132418]">
                    {item.food}
                  </td>
                  <td className="border-t border-[rgba(18,35,24,0.09)] px-6 py-4 leading-relaxed text-[#3c4f40]">
                    {item.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.bodyProse}>
          <h2>The Bottom Line</h2>
          <p>
            Mental health is a brain conversation. It is also a gut conversation.
            And it is time India started having both at the same table.
          </p>
          <p>
            Before reaching for another prescription, ask yourself: When did you last eat fibre-rich vegetables?
            When did you last have fermented food? When did you last feed the 500 million neurons in your gut?
          </p>

          <blockquote>
            <p>
              <strong>A note from Nirogyn:</strong> Isochia, Nirogyn&apos;s gut health prebiotic brand,
              is formulated to feed the gut bacteria responsible for serotonin production, GABA synthesis,
              and butyrate generation.
            </p>
            <p>
              <a href="https://shop.nirogyn.com" target="_blank" rel="noopener noreferrer">
                Learn more at shop.nirogyn.com
              </a>
            </p>
          </blockquote>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedInner}>
            <h2 className={styles.relatedTitle}>Related in Gut-Brain Axis</h2>
            <div className={styles.postsGrid}>
              {relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className={styles.postCard}>
                  {post.featuredImage ? (
                    <div className={styles.postImageContainer}>
                      <OptionalImage
                        src={post.featuredImage}
                        alt={post.featuredImageAlt || post.title}
                        width={800}
                        height={450}
                        className={styles.postImage}
                      />
                    </div>
                  ) : (
                    <div className={styles.postImageFallback}>🌿</div>
                  )}
                  <div className={styles.postContent}>
                    {post.category && <span className={styles.postCategory}>{post.category}</span>}
                    <h3 className={styles.postCardTitle}>{post.title}</h3>
                    {post.excerpt && <p className={styles.postCardExcerpt}>{post.excerpt}</p>}
                    <div className={styles.postMeta}>
                      <span>{post.author}</span>
                      {post.readTime && (
                        <>
                          <span className={styles.metaDot}>·</span>
                          <span>{post.readTime}</span>
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
          <h2 className={styles.commentsTitle}>Leave a comment</h2>
          <form className={styles.commentsForm} action="#" method="post">
            <div className={styles.commentsGrid}>
              <div>
                <label htmlFor="name" className={styles.inputLabel}>
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
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
                rows={5}
                placeholder="Share your thoughts..."
                className={styles.inputControl}
                required
              />
            </div>
            <div>
              <button type="submit" className={styles.submitButton}>
                Post comment
              </button>
            </div>
            <p className={styles.commentsNote}>* Required fields</p>
          </form>
        </div>
      </section>

      <div className={styles.disclaimerBar}>
        Powered by Nirogyn - Not a substitute for medical advice
      </div>

      <Footer />
    </div>
  );
}

