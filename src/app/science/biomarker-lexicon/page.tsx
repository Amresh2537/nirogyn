import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Biomarker Lexicon — Nirogyn",
  description: "Every scientific term used across Nirogyn — defined in plain language.",
};

export default function BiomarkerLexicon() {
  const terms = [
    {
      letter: "A",
      items: [
        {
          term: "Adenosine",
          pronunciation: "(ad-EN-oh-seen)",
          pillar: "SLEEP",
          definition: "A neuromodulatory molecule produced as a byproduct of cellular energy expenditure. Adenosine accumulates in the brain throughout the day, binding to receptors that progressively increase sleep pressure — the biological drive to sleep. Caffeine works by blocking adenosine receptors, temporarily masking this pressure without reducing the underlying accumulation.",
          matter: "Understanding adenosine explains why caffeine tolerance builds over time and why sleep debt cannot be masked indefinitely."
        },
        {
          term: "Amino Acid Bioavailability",
          pillar: "EAT",
          definition: "The proportion of ingested amino acids that are actually absorbed into the bloodstream and available for protein synthesis. Bioavailability is determined not just by protein quantity but by gut wall integrity, digestive enzyme activity, and the health of the intestinal microbiome. A damaged gut lining reduces amino acid bioavailability regardless of protein intake.",
          matter: "High protein consumption is ineffective if the gut environment required for absorption is compromised — which is why fibre and protein cannot be separated."
        },
        {
          term: "Amyloid Beta",
          pronunciation: "(AM-ih-loid BAY-tah)",
          pillar: "SLEEP",
          definition: "A protein fragment produced during normal neuronal activity that accumulates as metabolic waste in the brain. During deep sleep, the glymphatic system flushes amyloid beta from brain tissue. Chronic accumulation of amyloid beta is associated with neurodegenerative conditions. Its clearance is one of the primary biological reasons deep sleep quality matters.",
          matter: "Chronic sleep deprivation allows amyloid beta to accumulate — a mechanism with long-term neurological consequences that is entirely preventable."
        },
        {
          term: "Androgen",
          pronunciation: "(AN-droh-jen)",
          pillar: "REPRODUCE",
          definition: "A class of hormones that promote the development of male characteristics. Testosterone is the most well-known androgen. In women, excess androgen production — driven by insulin resistance in PCOS — produces symptoms including acne, hair loss, and irregular menstruation. Androgens are produced in the gonads and adrenal glands in both sexes.",
          matter: "PCOS is fundamentally an androgen excess disorder with a metabolic root — not simply a 'period problem'."
        }
      ]
    },
    {
      letter: "B",
      items: [
        {
          term: "Bioavailability",
          pronunciation: "(by-oh-ah-VAY-lah-BIL-ih-tee)",
          pillar: "EAT",
          definition: "The proportion of an ingested substance — whether a nutrient, compound, or medication — that enters circulation and is available for biological activity. Bioavailability is affected by the form of the substance, gut health, food matrix, and co-consumed nutrients. Curcumin from turmeric has less than 1% bioavailability alone. Piperine from black pepper increases it by up to 2,000%.",
          matter: "The bioavailability of a nutrient matters more than its quantity in food. India's traditional spice combinations often reflect empirical bioavailability enhancement."
        },
        {
          term: "Blood-Brain Barrier (BBB)",
          pillar: "MIND",
          definition: "A selective semipermeable membrane formed by specialised endothelial cells lining brain capillaries. The BBB regulates which molecules can pass from the bloodstream into the brain, protecting neural tissue from pathogens and toxins. Butyrate — produced by gut bacteria fermenting dietary fibre — is one of the compounds that crosses the BBB and directly influences neuroinflammation.",
          matter: "The BBB is not impenetrable. Gut-derived molecules including butyrate and inflammatory cytokines can cross it — making gut health directly relevant to brain health."
        },
        {
          term: "Butyrate",
          pronunciation: "(BYOO-tih-rayt)",
          pillar: "EAT · MIND",
          definition: "A short-chain fatty acid (SCFA) produced when gut bacteria ferment dietary fibre. Butyrate is the primary energy source for colonocytes — the cells lining the colon wall. It maintains gut wall integrity, reduces intestinal permeability, crosses the blood-brain barrier, and reduces neuroinflammation through HDAC inhibition. Butyrate-producing bacteria (primarily Faecalibacterium prausnitzii and Roseburia species) decline in low-fibre diets.",
          matter: "Butyrate is perhaps the single most important molecule connecting diet to gut health to brain health. Its production depends entirely on dietary fibre."
        }
      ]
    },
    {
      letter: "G",
      items: [
        {
          term: "GABA (Gamma-Aminobutyric Acid)",
          pronunciation: "(GAH-bah)",
          pillar: "SLEEP · MIND",
          definition: "The primary inhibitory neurotransmitter in the central nervous system. GABA reduces neuronal excitability and is the brain's primary calming molecule — essential for sleep onset, anxiety regulation, and stress recovery. Specific gut bacteria, particularly Lactobacillus rhamnosus, produce GABA and signal its effects to the brain via the vagus nerve. Depletion of these bacteria reduces effective GABA signalling.",
          matter: "GABA deficiency manifests as racing thoughts, difficulty sleeping, and heightened anxiety — all addressable through gut microbiome support, not only through pharmaceuticals."
        },
        {
          term: "Glymphatic System",
          pronunciation: "(gly-FAT-ik)",
          pillar: "SLEEP",
          definition: "The brain's waste-clearance network, driven by cerebrospinal fluid circulation through channels surrounding brain blood vessels. The glymphatic system is most active during slow-wave (deep) sleep, flushing metabolic byproducts — including amyloid beta and tau proteins — from neural tissue. Inadequate deep sleep impairs glymphatic clearance and allows neurotoxic waste to accumulate.",
          matter: "The glymphatic system is why sleep is not optional for brain health. It is the nightly maintenance protocol the brain cannot run without."
        },
        {
          term: "Gut-Brain Axis",
          pillar: "MIND · EAT",
          definition: "The bidirectional communication network connecting the gut and the brain, operating through the vagus nerve, immune signalling, the HPA axis, and gut-derived neurotransmitter precursors. Approximately 80% of vagal fibres carry signals upward — from gut to brain — rather than downward. Gut microbiome composition directly influences mood, cognition, stress response, and sleep quality through this axis.",
          matter: "The gut-brain axis is the mechanistic basis for the connection between diet and mental health — and the reason gut dysbiosis can present as anxiety, brain fog, and low mood."
        }
      ]
    },
    {
      letter: "M",
      items: [
        {
          term: "Microbiome",
          pronunciation: "(my-kroh-BY-ome)",
          pillar: "EAT · MIND · SLEEP · REPRODUCE",
          definition: "The collective term for the trillions of microorganisms — bacteria, fungi, viruses, and archaea — living in and on the human body, primarily in the gut. The gut microbiome contains approximately 39 trillion microbial cells — roughly equal to the number of human cells in the body. It governs digestion, immunity, neurotransmitter production, hormonal metabolism, and inflammatory signalling.",
          matter: "The gut microbiome is not a passive digestive aid. It is a dynamic organ with systemic influence over health outcomes across every pillar Nirogyn covers."
        }
      ]
    },
    {
      letter: "S",
      items: [
        {
          term: "Serotonin",
          pronunciation: "(ser-oh-TOH-nin)",
          pillar: "MIND · SLEEP",
          definition: "A monoamine neurotransmitter produced primarily in gut enterochromaffin cells (90%+) and, in smaller amounts, in the brain. Gut-derived serotonin is involved in gastrointestinal motility, gut-brain axis signalling, mood regulation, and serves as the precursor to melatonin. Gut dysbiosis reduces serotonin production at source.",
          matter: "Serotonin imbalance addressed only at the brain level — as in standard antidepressant pharmacology — misses the 90% of serotonin produced in the gut."
        }
      ]
    },
    {
      letter: "V",
      items: [
        {
          term: "Vagus Nerve",
          pronunciation: "(VAY-gus)",
          pillar: "MIND · EAT",
          definition: "The longest cranial nerve in the body, running from the brainstem through the neck, chest, and into the abdominal organs. Approximately 80% of vagal fibres carry signals upward — from gut to brain — rather than downward. The vagus nerve is the primary physical pathway through which gut microbiome status, gut serotonin and GABA production, and intestinal inflammatory signals reach and influence the brain.",
          matter: "When people speak of a 'gut feeling', they are describing the vagus nerve transmitting real-time gut status to the brain's emotional and decision-making centres."
        }
      ]
    }
  ];

  return (
    <div className="ip-wrap">
      <Navbar />
      
      <main style={{ paddingTop: "120px", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          
          {/* Breadcrumb */}
          <div className="ip-breadcrumb">
            <Link href="/science">Science</Link>
            <span>·</span>
            <span>Biomarker Lexicon</span>
          </div>

          {/* Header */}
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem", color: "#182d18" }}>
            Biomarker Lexicon
          </h1>
          
          <p style={{ fontSize: "1.1rem", color: "#178b77", fontWeight: 600, marginBottom: "2rem" }}>
            Every scientific term used across Nirogyn — defined in plain language.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "3rem" }}>
            Nirogyn uses clinical language because clinical language is precise. 'Gut bacteria produce serotonin' is incomplete. 'Enterochromaffin cells in the gut produce serotonin via the tryptophan hydroxylase 1 pathway' is accurate.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "3rem" }}>
            This lexicon defines every significant scientific term used across Nirogyn's five pillars — so no reader has to pause, search, and lose the thread. Each entry gives you the term, what it is, and why it appears in wellness science.
          </p>

          <p style={{ fontSize: "1rem", color: "#8a929f", fontStyle: "italic", marginBottom: "3rem" }}>
            Terms are listed alphabetically. The pillar most associated with each term is noted alongside it.
          </p>

          {/* Terms by Letter */}
          {terms.map((letterGroup) => (
            <section key={letterGroup.letter} style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#178b77", marginBottom: "1.5rem" }}>
                {letterGroup.letter}
              </h2>

              {letterGroup.items.map((item, idx) => (
                <div key={idx} style={{ marginBottom: "2rem" }}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0e121d" }}>
                      {item.term}
                    </span>
                    {item.pronunciation && (
                      <span style={{ fontSize: "0.9rem", color: "#8a929f", marginLeft: "0.5rem" }}>
                        {item.pronunciation}
                      </span>
                    )}
                    <span style={{ fontSize: "0.85rem", color: "#178b77", fontWeight: 600, marginLeft: "1rem" }}>
                      · {item.pillar}
                    </span>
                  </div>
                  
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "0.75rem" }}>
                    {item.definition}
                  </p>

                  <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#8a929f" }}>
                    <strong>Why it matters:</strong> {item.matter}
                  </p>
                </div>
              ))}
            </section>
          ))}

          {/* Footer Note */}
          <section style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "2rem", marginTop: "3rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#182d18", marginBottom: "1rem" }}>
              About This Lexicon
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "1rem" }}>
              The Biomarker Lexicon is updated as new terms enter Nirogyn's published content. If a term you encountered in a Nirogyn article is not listed here, write to us at <a href="mailto:care@nirogyn.com" style={{ color: "#178b77", textDecoration: "none", fontWeight: 600 }}>care@nirogyn.com</a> and we will add it.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#2a3140" }}>
              <em>Science should be communicable. Every term in this lexicon was included because it appears in Nirogyn content — and because no reader should have to leave the page to understand what they are reading.</em>
            </p>
          </section>

          <p style={{ fontSize: "0.85rem", color: "#8a929f", marginTop: "3rem", borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "2rem" }}>
            © 2026 Nirogyn Healthcare Pvt. Ltd. · nirogyn.com · FDA · FSSAI · GMP · CE · ISO 9001:2015
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
