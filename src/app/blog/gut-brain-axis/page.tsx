import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "90% of Your Serotonin Is Made in Your Gut | Nirogyn",
  description:
    "Over 90% of the body's serotonin is produced in the gut. So why are we treating anxiety without treating the gut? A deep dive into the gut-brain axis.",
};

const TAGS = [
  "Gut-Brain Axis",
  "Serotonin",
  "Anxiety",
  "Depression",
  "Mental Health",
  "Fibre",
  "India",
];

const GUT_FOODS = [
  {
    food: "Dal (lentils/legumes)",
    why: "Rich in prebiotic fibre and tryptophan — feeds bacteria that produce serotonin precursors",
  },
  {
    food: "Whole grain roti (jowar, bajra, ragi)",
    why: "Fermentable fibre → butyrate production → neuroinflammation reduction",
  },
  {
    food: "Homemade curd / lassi",
    why: "Lactobacillus bacteria produce GABA and modulate the vagus nerve directly",
  },
  {
    food: "Raw onion, garlic, banana, jeera",
    why: "Potent prebiotics — selectively feed Bifidobacterium and Lactobacillus strains",
  },
  {
    food: "Paneer / eggs / milk / nuts",
    why: "Dietary tryptophan — the raw material your gut bacteria convert to serotonin",
  },
  {
    food: "Kanji, idli batter, achaar (traditional ferments)",
    why: "Live cultures that directly supplement a depleted gut microbiome",
  },
];

export default function GutBrainAxisPage() {
  return (
    <div className="blog-page">
      {/* Reading progress bar */}
      <div className="blog-read-progress" aria-hidden="true" />

      {/* ── NAV BAR (simple back link) ── */}
      <nav className="blog-nav">
        <Link href="/" className="blog-nav-back">
          ← nirogyn.com
        </Link>
        <span className="blog-nav-logo">Nirogyn</span>
      </nav>

      {/* ── HERO HEADER ── */}
      <header className="blog-hero">
        <div className="blog-hero-inner">
          <div className="blog-hero-tags">
            {TAGS.map((t) => (
              <span className="blog-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <h1 className="blog-title">
            90% of Your Serotonin Is Made in Your Gut.{" "}
            <em>So Why Are We Treating Anxiety Without Treating the Gut?</em>
          </h1>
          <div className="blog-meta">
            <span>Nirogyn Editorial</span>
            <span className="blog-meta-dot" />
            <span>Mental Health · Gut Health</span>
            <span className="blog-meta-dot" />
            <span>8 min read</span>
            <span className="blog-meta-dot" />
            <span>May 2026</span>
          </div>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="blog-body">
        <div className="blog-container">

          {/* Lead */}
          <p className="blog-lead">
            You have been told the story of anxiety wrong. You were told it is a
            brain problem — a chemical imbalance, a misfiring of neurons. You
            were told the solution lives there too: in therapy, in a
            prescription, in just learning to manage your thoughts.
          </p>
          <p>
            Some of that is right. But it is dangerously incomplete. Because the
            organ most responsible for producing the chemicals that govern your
            mood, your calm, your ability to sit with stress without breaking —
            is not your brain. It is 1.5 metres of intestine folded inside your
            abdomen. And almost nobody is treating it.
          </p>
          <p>
            Over 90% of the body&apos;s serotonin is produced in the gut. The
            gut contains 500 million neurons — more than the entire spinal cord.
            It communicates with the brain via the vagus nerve in a conversation
            so complex that researchers gave it its own name: the{" "}
            <strong>gut-brain axis</strong>. The fuel that keeps this axis
            running? Dietary fibre.
          </p>
          <p>
            India has 200 million people living with a mental health condition.
            83% receive no treatment. We call this a mental health crisis. We
            should also call it what it partly is: a gut health crisis nobody
            has named yet.
          </p>

          <hr className="blog-divider" />

          {/* Section 1 */}
          <h2 className="reveal">Your Gut Is a Brain. Here Is What It Produces.</h2>
          <p>
            The enteric nervous system — the neural network woven into your gut
            wall — is so complex, so functionally independent, that
            neuroscientists call it <em>&apos;the second brain.&apos;</em> But unlike the
            brain in your skull, this one manufactures mood chemicals in
            quantities that most people find genuinely shocking:
          </p>

          <div className="blog-callout-list">
            <div className="blog-callout-item reveal">
              <div className="blog-callout-label">Serotonin</div>
              <p>
                Over 90% is made in the gut, not the brain. Specific gut
                bacteria stimulate an enzyme called{" "}
                <strong>Tryptophan Hydroxylase 1 (TPH1)</strong> that converts
                tryptophan — an amino acid from food — into serotonin inside gut
                wall cells. Less fibre means fewer bacteria, less TPH1 activity,
                and less serotonin. This is the direct dietary pathway to low
                mood.
              </p>
            </div>
            <div className="blog-callout-item reveal reveal-delay-1">
              <div className="blog-callout-label">GABA</div>
              <p>
                The nervous system&apos;s primary &apos;off switch.&apos; It reduces neural
                excitability and is what allows your brain to stop racing at
                night. <strong>Lactobacillus</strong> bacteria in the gut
                produce GABA directly — and signal calm to the brain through the
                vagus nerve. A depleted microbiome means less GABA, more
                activation, more anxiety.
              </p>
            </div>
            <div className="blog-callout-item reveal reveal-delay-2">
              <div className="blog-callout-label">Butyrate</div>
              <p>
                A short-chain fatty acid produced when gut bacteria ferment
                dietary fibre. Butyrate crosses the blood-brain barrier and
                directly reduces neuroinflammation — now considered a core
                biological mechanism in both depression and anxiety. People with
                anxiety disorders consistently show{" "}
                <strong>10–50% lower butyrate levels</strong> than healthy
                controls.
              </p>
            </div>
          </div>

          <hr className="blog-divider" />

          {/* Section 2 */}
          <h2 className="reveal">Three Ways the Gut Controls Your Brain Chemistry</h2>

          <h3>1. The Vagus Nerve — your gut&apos;s direct line to the brain</h3>
          <p>
            The vagus nerve is the longest nerve in the body, running from the
            brainstem to the gut. Here is the part most people do not know:
            approximately <strong>80% of vagal fibres carry signals upward</strong>{" "}
            — from gut to brain, not the other way around. Your brain is
            listening to your gut far more than it talks to it. When gut
            bacteria produce serotonin precursors or GABA, they activate vagal
            sensory endings directly — influencing your emotional regulation,
            stress response, and anxiety levels in real time.
          </p>

          <h3>2. The Tryptophan Pathway — where mood is decided</h3>
          <p>
            Tryptophan, found in dal, paneer, eggs, milk, and nuts, must be
            metabolised by gut bacteria to produce serotonin. Here is the
            critical fork: the gut microbiome determines which direction that
            metabolism goes. A diverse, fibre-fed microbiome pushes tryptophan
            toward serotonin — calm, social, resilient. A depleted, dysbiotic
            gut pushes it toward the <strong>kynurenine pathway</strong> —
            associated with neuroinflammation, depression, and anxiety. This is
            not metaphorical. It is measurable in blood tests and is now
            considered a core mechanism of anxiety disorder pathophysiology.
          </p>

          <h3>3. The Immune Pathway — inflammation as a mood disorder</h3>
          <p>
            Approximately <strong>70% of the immune system</strong> lives in the
            gut. A low-fibre, disrupted microbiome triggers chronic low-grade
            inflammation that crosses the blood-brain barrier via cytokine
            signalling and directly contributes to the development and severity
            of depression and anxiety. This inflammatory model of mental health
            is no longer a fringe theory. It is one of the dominant mechanistic
            frameworks in modern psychiatry — and dietary fibre is the most
            accessible anti-inflammatory intervention available.
          </p>

          <hr className="blog-divider" />

          {/* Section 3 */}
          <h2 className="reveal">Why This Is Especially Critical for India</h2>
          <p>
            India&apos;s dietary shift — from dal, whole grains, and fermented curd
            to white rice, maida, and packaged food — has systematically removed
            the prebiotic fibre that fed the gut bacteria responsible for
            serotonin, GABA, and butyrate production. This did not happen
            overnight. It happened over 40 years, one refined meal at a time.
          </p>
          <p>
            Meanwhile, India is experiencing an accelerating mental health
            crisis that its healthcare system — with just{" "}
            <strong>1 psychiatrist per 150,000 people</strong> — cannot possibly
            address through clinical intervention alone. The gut bacteria that
            produce serotonin precursors and the SCFAs that reduce
            neuroinflammation need dietary fibre to survive. India is not
            feeding them. And India is paying for it in the language of anxiety,
            burnout, and a treatment gap that no number of psychiatrists can
            close if the gut remains broken.
          </p>

          <hr className="blog-divider" />

          {/* Section 4 — food table */}
          <h2 className="reveal">What to Eat to Feed Your Mood Chemistry</h2>
          <p>
            You cannot replace therapy or medication when genuinely needed. But
            you can create the biological conditions that make your brain more
            responsive — by feeding the gut bacteria responsible for your mood
            chemistry. Here is what that looks like in a practical Indian
            context:
          </p>

          <div className="blog-table-wrap reveal">
            <table className="blog-table">
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Why It Works</th>
                </tr>
              </thead>
              <tbody>
                {GUT_FOODS.map(({ food, why }) => (
                  <tr key={food}>
                    <td><strong>{food}</strong></td>
                    <td>{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The consistency of these habits matters more than the quantity. A
            daily dal with whole grain roti, homemade curd, and raw prebiotic
            vegetables is not just a nutritious meal — it is the closest thing
            to a gut-brain supplement protocol that Indian food already
            delivers, naturally, for almost no cost.
          </p>

          <hr className="blog-divider" />

          {/* Conclusion */}
          <h2 className="reveal">The Bottom Line</h2>
          <p>
            India is having the wrong conversation about mental health. Not a
            useless one — awareness matters, destigmatisation matters
            enormously. But it is an incomplete one, because it treats the brain
            as a sealed organ whose chemistry can only be reached from the
            outside in.
          </p>
          <p>
            The science of the gut-brain axis says otherwise. Your serotonin is
            not waiting for a prescription — it is waiting for the fibre that
            feeds the bacteria that makes it. Your GABA is not waiting for a
            meditation app — it is waiting for the Lactobacillus in your
            homemade curd. Your brain&apos;s ability to handle stress is not purely a
            matter of mindset. A very significant part of it is a matter of what
            you ate for lunch.
          </p>
          <p>
            Mental health is a brain conversation. It is also a gut
            conversation. And it is time India started having both at the same
            table.
          </p>

          {/* Nirogyn Note */}
          <div className="blog-brand-note reveal">
            <div className="blog-brand-note-label">A NOTE FROM NIROGYN</div>
            <p>
              <strong>Isochia</strong>, Nirogyn&apos;s gut health prebiotic brand, is
              formulated to feed the gut bacteria responsible for serotonin
              production, GABA synthesis, and butyrate generation — the three
              molecular pathways that connect gut health directly to mood and
              mental resilience.{" "}
              <a
                href="https://shop.nirogyn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more at shop.nirogyn.com
              </a>
              .
            </p>
            <p className="blog-disclaimer">
              This article is for educational purposes only. It is not a
              substitute for professional mental health care. If you are
              experiencing anxiety or depression, please consult a qualified
              psychiatrist or healthcare professional.
            </p>
          </div>

          {/* Footer line */}
          <div className="blog-footer-line">
            © 2026 Nirogyn Healthcare Pvt. Ltd. · nirogyn.com · FDA · FSSAI ·
            GMP · CE · ISO 9001:2015
          </div>
        </div>
      </article>
    </div>
  );
}
