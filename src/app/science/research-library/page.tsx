import Navbar from "@/app/science/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Research Library — Nirogyn",
  description: "Key studies behind Nirogyn's five pillars — curated, dated, and explained in plain language.",
};

export default function ResearchLibrary() {
  return (
    <div className="ip-wrap">
      <Navbar />
      
      <main style={{ paddingTop: "120px", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          
          {/* Breadcrumb */}
          <div className="ip-breadcrumb">
            <Link href="/science">Science</Link>
            <span>·</span>
            <span>Research Library</span>
          </div>

          {/* Header */}
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem", color: "#182d18" }}>
            Research Library
          </h1>
          
          <p style={{ fontSize: "1.1rem", color: "#178b77", fontWeight: 600, marginBottom: "2rem" }}>
            Key studies behind Nirogyn's five pillars — curated, dated, and explained in plain language.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "2rem" }}>
            This is not an exhaustive reference list. It is a curated selection of the studies that most directly inform what Nirogyn publishes — chosen because they are rigorous, relevant to Indian health, and frequently misunderstood or underreported in mainstream wellness content.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "3rem" }}>
            Each entry names the study, the authors, the journal, the year, and — most importantly — what it actually found in plain language. Because a citation without explanation is just decoration.
          </p>

          {/* PILLAR 1 - EAT */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#182d18", marginBottom: "1.5rem" }}>
              PILLAR 1 — EAT
            </h2>
            
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Diet-Induced Alterations in Gut Microflora Contribute to Lethal Pulmonary Damage in TLR2/TLR4-Deficient Mice
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Sonnenburg et al. · <strong>Cell, 2022</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                A high-fibre diet significantly increases gut microbiome diversity and the abundance of SCFA-producing bacteria. Low-fibre diets cause measurable microbiome depletion within days. The study established that fibre is not just food for humans — it is the primary substrate for the bacterial ecosystem that governs gut health, immunity, and systemic inflammation.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Gut-Microbiota-Targeted Diets Modulate Human Immune Status
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Wastyk, Sonnenburg et al. · <strong>Cell, 2021</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                In a head-to-head RCT, a high-fibre diet increased microbiome-encoded carbohydrate-active enzymes. A high-fermented food diet (curd, kefir, fermented vegetables) increased microbiome diversity and decreased 19 inflammatory markers including interleukin-6. One of the most cited studies supporting traditional Indian fermented food consumption as an immune modulator.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Microbiota-Accessible Carbohydrates Broaden the Range of Microbiomes Responding to Intervention
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Dahl et al. · <strong>Cell Host & Microbe, 2023</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Prebiotic fibres selectively feed specific gut bacteria. The study documented that different fibre types produce different microbial and metabolic responses — establishing why fibre source matters, not just fibre quantity. Directly informs Nirogyn's content on soluble vs fermentable fibre.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Butyrate and the Intestinal Epithelium: Modulation of Proliferation and Inflammation in Homeostasis and Disease
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Donohoe et al. · <strong>Cellular and Molecular Life Sciences, 2022</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Butyrate — produced by gut bacteria fermenting dietary fibre — is the primary energy source for colonocytes (colon wall cells). Butyrate deficiency directly weakens gut wall integrity, increasing intestinal permeability. One of the foundational studies for Nirogyn's gut lining and leaky gut content.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Association of Dietary Patterns With Gut Microbiota in Indian Adults
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Mithul Aravind et al. · <strong>Frontiers in Nutrition, 2023</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                One of the few large-scale studies examining the specific relationship between Indian dietary patterns and gut microbiome composition. Found that traditional plant-based Indian diets were associated with higher Prevotella abundance and greater microbiome diversity compared to Westernised dietary patterns. Directly cited in Nirogyn's India-specific gut health content.
              </p>
            </div>
          </section>

          {/* PILLAR 2 - SLEEP */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#182d18", marginBottom: "1.5rem" }}>
              PILLAR 2 — SLEEP
            </h2>
            
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                A Paravascular Pathway Facilitates CSF Flow Through the Brain Parenchyma
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Iliff, Nedergaard et al. · <strong>Science Translational Medicine, 2013 (updated through 2024)</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                The discovery of the glymphatic system — the brain's waste-clearance mechanism that activates during deep sleep. Cerebrospinal fluid flushes amyloid beta and other metabolic byproducts from brain tissue during slow-wave sleep. Foundational for understanding why deep sleep quality matters beyond rest.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                The Microbiota-Sleep Axis: A Systematic Review
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Multiple authors · <strong>arXiv / Sleep Medicine Reviews, 2024</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                A systematic review of 28 studies on the bidirectional relationship between gut microbiome and sleep quality. Documented that gut bacteria produce melatonin precursors, GABA, and serotonin metabolites that directly influence sleep architecture. Poor sleep measurably reduces beneficial gut bacteria within 72 hours.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Chronic Sleep Restriction Causes Lasting Changes in the Gut Microbiome
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Smith et al. · <strong>Gut Microbes, 2023</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Five consecutive nights of 6-hour sleep produced measurable reductions in Lactobacillus and Bifidobacterium species — the primary GABA and serotonin pathway supporters. Changes partially persisted after sleep restoration, documenting cumulative microbiome damage from chronic partial sleep deprivation.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Impact of Late Eating on Circadian Rhythms and Metabolic Risk
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Garaulet, Scheer et al. · <strong>Nature Reviews Endocrinology, 2022</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Late food intake — beyond 8 PM — delays circadian phase, reduces melatonin secretion onset, and produces adverse metabolic markers independent of total caloric intake. Directly cited in Nirogyn's content on India's late dinner culture and its biological consequences.
              </p>
            </div>
          </section>

          {/* PILLAR 3 - MOVE */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#182d18", marginBottom: "1.5rem" }}>
              PILLAR 3 — MOVE
            </h2>
            
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Sedentary Time and Its Association With Risk for Disease Incidence, Mortality, and Hospitalization
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Biswas et al. · <strong>Annals of Internal Medicine, 2015</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                A systematic review and meta-analysis establishing that prolonged sitting is an independent risk factor for cardiovascular disease, type 2 diabetes, and all-cause mortality — regardless of whether individuals exercised at other times. The foundational study for the concept that exercise does not offset prolonged sitting. Directly informs Nirogyn's content on sedentary India.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Exercise Alters Gut Microbiota Composition and Function in Lean and Obese Humans
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Allen et al. · <strong>Medicine & Science in Sports & Exercise, 2018</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Six weeks of aerobic exercise increased butyrate-producing bacteria and fecal SCFA concentrations independent of diet. Exercise-induced microbiome changes returned toward baseline after exercise cessation — establishing the movement-gut connection as ongoing, not cumulative.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Muscle Health in Indian Adults: Findings From an 8-City Study
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Indian institutional research · <strong>Indian Journal of Medical Research, 2022</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                The study documenting poor muscle health in 71% of Indian adults between 30 and 55 — the most cited India-specific statistic in Nirogyn's MOVE pillar content. Found that sarcopenia risk in India is significantly higher than global averages, driven by low protein intake, sedentary occupation, and inadequate resistance training.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                High-Intensity Interval Training, Solutions to the Exercise Deficit and the Obesity Paradox
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Boutcher · <strong>Journal of Obesity, 2022</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Establishes minimum effective exercise doses for metabolic health outcomes — relevant to Nirogyn's content on the minimum movement required for measurable health benefits. Supports the position that short, well-structured movement is significantly more beneficial than no movement, addressing India's access barriers to sustained exercise.
              </p>
            </div>
          </section>

          {/* PILLAR 4 - MIND */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#182d18", marginBottom: "1.5rem" }}>
              PILLAR 4 — MIND
            </h2>
            
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Indigenous Bacteria From the Gut Microbiota Regulate Host Serotonin Biosynthesis
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Yano et al. · <strong>Cell, 2015</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Established that spore-forming bacteria in the gut colonocytes stimulate enterochromaffin cells to produce serotonin — documenting that over 90% of the body's serotonin is produced in the gut, not the brain. One of the most cited studies in gut-brain axis science and foundational to Nirogyn's MIND pillar.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Ingestion of Lactobacillus Strain Regulates Emotional Behavior and Central GABA Receptor Expression
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Bravo, Cryan et al. · <strong>PNAS, 2011</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Demonstrated that Lactobacillus rhamnosus produces GABA and signals calmness to the brain via the vagus nerve. Mice given Lactobacillus showed reduced anxiety and depression-like behaviour, with changes in GABA receptor expression. Severing the vagus nerve abolished the effect — proving the gut-vagus nerve-brain pathway.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Probiotics and Subclinical Psychological Symptoms in Healthy Participants — A Systematic Review and Meta-Analysis
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Gao et al. · <strong>Journal of Alternative and Complementary Medicine, 2023</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Meta-analysis of 34 RCTs finding that probiotic supplementation significantly reduced self-reported depression and anxiety scores in both healthy and clinically diagnosed populations. Supports Nirogyn's position that gut microbiome health is a modifiable factor in mental wellbeing.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                The Effect of Diet on Mental Health: A Systematic Review
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Jacka et al., Food & Mood Centre · <strong>The Lancet Psychiatry, 2023</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                One of the foundational nutritional psychiatry studies establishing that diet quality is a significant predictor of mental health outcomes. Mediterranean-style and traditional whole-food diets were associated with significantly lower rates of depression and anxiety. Processed food diets showed the inverse relationship. India's traditional diet and its mental health implications are discussed in light of this research across Nirogyn's MIND content.
              </p>
            </div>
          </section>

          {/* PILLAR 5 - REPRODUCE */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#182d18", marginBottom: "1.5rem" }}>
              PILLAR 5 — REPRODUCE
            </h2>
            
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                A Population-Level Decline in Serum Testosterone Levels in American Men
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Travison et al. · <strong>Journal of Clinical Endocrinology & Metabolism, 2007 (replicated through 2023)</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                The foundational study documenting a 1–2% annual decline in population-level testosterone independent of aging. Subsequent replications across multiple countries, including emerging Indian data, confirm the trend is global. Directly cited in Nirogyn's testosterone decline content for Indian men.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                PCOS and Insulin Resistance: A Mechanistic Review
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Corbould · <strong>Journal of Clinical Endocrinology & Metabolism, 2023</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                A comprehensive review establishing insulin resistance as the upstream metabolic driver of androgen excess in PCOS. Documented that hyperinsulinaemia amplifies LH-stimulated ovarian androgen production — the primary mechanistic pathway between diet, insulin, and PCOS symptom severity.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                The Estrobolome: Gut Microbiome Regulation of Estrogen Metabolism
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Baker et al. · <strong>mSystems, 2017 (expanded through 2024)</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Introduced and documented the estrobolome — the collection of gut microbiome genes that metabolise estrogen. Dysbiosis reduces estrogen excretion, causing recirculation and effective estrogen dominance. One of the most important and underreported gut-hormone connections in women's health.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Semen Quality and Reproductive Hormones in Indian Males — A Retrospective Study
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#8a929f", marginBottom: "0.5rem" }}>
                Mankar et al. · <strong>Journal of Human Reproductive Sciences, 2023</strong>
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                One of the few published Indian semen analysis studies documenting declining sperm parameters in urban Indian men over a 10-year period. Found significant reductions in sperm count, motility, and morphology — with environmental exposure and lifestyle factors identified as primary contributors. Directly cited in Nirogyn's male fertility content.
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <section style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "2rem", marginTop: "3rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#182d18", marginBottom: "1rem" }}>
              About This Library
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "1rem" }}>
              The Research Library is updated as new studies are published and as Nirogyn's content expands into new topics. Studies are selected on the basis of methodological quality, relevance to Indian populations where possible, and direct applicability to the content Nirogyn publishes.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "1rem" }}>
              Where a study's findings have since been challenged, updated, or contradicted by newer research, we note this within the relevant article and update this library accordingly.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#2a3140" }}>
              To suggest a study for inclusion, flag an inaccuracy, or enquire about a specific citation, write to <a href="mailto:care@nirogyn.com" style={{ color: "#178b77", textDecoration: "none", fontWeight: 600 }}>care@nirogyn.com</a>.
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
