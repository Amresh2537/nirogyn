import Navbar from "@/app/science/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "The Evidence Base — Nirogyn",
  description: "The research landscape that every Nirogyn article is built on.",
};

export default function EvidenceBase() {
  return (
    <div className="ip-wrap">
      <Navbar />
      
      <main style={{ paddingTop: "120px", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          
          {/* Breadcrumb */}
          <div className="ip-breadcrumb">
            <Link href="/science">Science</Link>
            <span>·</span>
            <span>The Evidence Base</span>
          </div>

          {/* Header */}
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem", color: "#182d18" }}>
            The Evidence Base
          </h1>
          
          <p style={{ fontSize: "1.1rem", color: "#178b77", fontWeight: 600, marginBottom: "2rem" }}>
            The research that every Nirogyn article is built on.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "2rem" }}>
            Every claim on nirogyn.com traces back to a source. Not a wellness blog. Not a brand white paper. Peer-reviewed research — published in indexed scientific journals, produced by named institutions, and available for independent verification.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "3rem" }}>
            This page documents the research landscape that Nirogyn's editorial team works within. It is organised by pillar and updated as new literature emerges. It is not an exhaustive bibliography — it is a map of the science we read, trust, and draw from.
          </p>

          <p style={{ fontSize: "1rem", color: "#178b77", fontWeight: 600, marginBottom: "3rem" }}>
            If you are a researcher, clinician, or journalist and want to discuss a specific source or claim, write to us at <a href="mailto:care@nirogyn.com" style={{ color: "#178b77" }}>care@nirogyn.com</a>.
          </p>

          {/* How We Select Sources */}
          <section style={{ marginBottom: "3rem", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#182d18", marginBottom: "1.5rem" }}>
              How We Select Sources
            </h2>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Peer-reviewed only
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                All primary claims are sourced from studies published in indexed, peer-reviewed journals. We do not cite press releases, brand studies, or non-reviewed publications as primary evidence.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Named and dateable
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                Every source is identified by journal name and year at minimum. We do not write 'research suggests' without naming the research.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                India-specific where available
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                We prioritise Indian population data from ICMR, NHFS, and Indian institutional research where it exists. Where it does not, we note the global source and flag its applicability to Indian populations.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                2022–2026 preferred
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                We favour recent literature. Older foundational studies are cited where they remain the primary reference in their field. Dates are always stated.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.5rem" }}>
                Updated when the science changes
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140" }}>
                When new research contradicts or refines something we have published, we update the article and note the revision. Science is not static. Neither is Nirogyn.
              </p>
            </div>
          </section>

          {/* Research Landscape by Pillar */}
          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#182d18", marginBottom: "1.5rem" }}>
              Research Landscape by Pillar
            </h2>

            {/* EAT */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#182d18", marginBottom: "1rem" }}>
                PILLAR 1 — EAT
              </h3>
              
              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Gut Microbiome Science
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                The foundational microbiome research Nirogyn draws on spans Human Microbiome Project data, the Flemish Gut Flora Project (one of the largest human microbiome studies conducted), and ongoing research from the Sonnenburg Lab at Stanford University. Key areas include microbiome diversity and health outcomes, dysbiosis and systemic inflammation, the role of short-chain fatty acids (SCFAs), and antibiotic-induced microbiome disruption in Indian populations.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Fibre and Gut Bacteria
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                Research on dietary fibre's role in feeding gut bacteria draws from multiple randomised controlled trials published in Gut, Cell Host & Microbe, and Nature Reviews Gastroenterology & Hepatology. The 2022 Sonnenburg et al. study in Cell on high-fibre diets and microbiome diversity is a primary reference. India-specific fibre intake data is sourced from ICMR dietary surveys and NHFS nutritional assessments.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Butyrate and Gut Wall Integrity
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                The role of butyrate in maintaining the intestinal epithelium is sourced from studies in Frontiers in Immunology, Gut, and the Journal of Nutritional Biochemistry. The colonocyte energy substrate research — establishing butyrate as the primary fuel for colon wall cells — is foundational literature cited across multiple Nirogyn articles on gut lining and leaky gut.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                India-Specific Nutrition Data
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                ICMR-NIN Dietary Guidelines for Indians · National Family Health Survey (NHFS) nutritional data · Indian Council of Medical Research reports on micronutrient deficiency · Prevalence data on Vitamin D, iron, B12, and omega-3 deficiency in Indian populations from published Indian institutional research.
              </p>

              <p style={{ fontSize: "0.9rem", color: "#8a929f" }}>
                <strong>Primary journals:</strong> Gut · Cell Host & Microbe · Nature Reviews Gastroenterology & Hepatology · Frontiers in Microbiology · Journal of Nutritional Biochemistry · Cell · The Lancet
              </p>
              <p style={{ fontSize: "0.9rem", color: "#8a929f" }}>
                <strong>India sources:</strong> ICMR · NHFS · Indian Journal of Medical Research · Indian Council of Medical Research Dietary Guidelines
              </p>
            </div>

            {/* SLEEP */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#182d18", marginBottom: "1rem" }}>
                PILLAR 2 — SLEEP
              </h3>
              
              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Sleep Architecture and Biology
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                Sleep stage science, slow-wave sleep function, and REM biology draws from research published in Sleep, Nature Neuroscience, and the Journal of Neuroscience. The foundational work of Matthew Walker (Why We Sleep, supported by UC Berkeley sleep laboratory research) and Maiken Nedergaard's discovery of the glymphatic system (published in Science, 2013, and expanded through 2024) are primary references for Nirogyn's deep sleep content.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                The Gut-Sleep Axis
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                The bidirectional relationship between gut microbiome and sleep quality is an emerging research area. Nirogyn draws from a 2024 systematic review on the microbiota-sleep axis (arXiv) and multiple studies in Frontiers in Psychiatry and Sleep Medicine Reviews documenting how gut bacteria produce tryptophan metabolites and GABA precursors that directly influence sleep architecture.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Circadian Rhythm Science
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                Circadian biology research draws on Nobel Prize-winning work on circadian clock genes (Hall, Rosbash, Young — 2017) and its clinical applications in chronobiology. Chrononutrition research — meal timing and circadian rhythm — is sourced from Cell Metabolism and the Proceedings of the National Academy of Sciences. India-specific sleep data from Fitbit Global Sleep Study and localised academic surveys.
              </p>

              <p style={{ fontSize: "0.9rem", color: "#8a929f" }}>
                <strong>Primary journals:</strong> Sleep · Nature Neuroscience · Cell Metabolism · Science · Frontiers in Psychiatry · Sleep Medicine Reviews · PNAS
              </p>
              <p style={{ fontSize: "0.9rem", color: "#8a929f" }}>
                <strong>India sources:</strong> Fitbit Global Sleep Study · Indian Journal of Sleep Medicine · Wakefit Sleep Study India
              </p>
            </div>

            {/* MOVE */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#182d18", marginBottom: "1rem" }}>
                PILLAR 3 — MOVE
              </h3>
              
              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Exercise Science and Metabolism
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                Movement science content draws from research published in the Journal of Applied Physiology, Medicine & Science in Sports & Exercise, and Cell Metabolism. The metabolic consequences of prolonged sitting are sourced from studies including Biswas et al. (Annals of Internal Medicine, 2015) and subsequent research on LIPL (lipoprotein lipase) suppression in sedentary muscle. Zone 2 cardio and mitochondrial health research draws from Peter Attia's clinical application of work by Iñigo San Millán.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Exercise and Gut Microbiome
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                The relationship between physical activity and gut microbiome diversity is documented in studies published in Gut Microbes, Medicine & Science in Sports & Exercise, and mSystems. Research consistently shows higher microbial diversity and elevated butyrate-producing bacteria in physically active individuals.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Muscle Health in India
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                The 8-city Indian muscle health study documenting poor muscle health in 71% of Indian adults 30–55 is a primary India-specific reference. Sarcopenia prevalence in Indian populations is sourced from the Indian Journal of Medical Research and published geriatric medicine research from AIIMS.
              </p>

              <p style={{ fontSize: "0.9rem", color: "#8a929f" }}>
                <strong>Primary journals:</strong> Journal of Applied Physiology · Medicine & Science in Sports & Exercise · Cell Metabolism · Gut Microbes · Annals of Internal Medicine
              </p>
              <p style={{ fontSize: "0.9rem", color: "#8a929f" }}>
                <strong>India sources:</strong> Indian Journal of Medical Research · AIIMS institutional research · Indian Council of Medical Research
              </p>
            </div>

            {/* MIND */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#182d18", marginBottom: "1rem" }}>
                PILLAR 4 — MIND
              </h3>
              
              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                The Gut-Brain Axis
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                The gut-brain axis is one of the most active research areas in contemporary neuroscience. Nirogyn's content draws from foundational research by John Cryan and Ted Dinan (Gut Microbiota-Brain Axis, multiple publications in Nature Reviews Neuroscience and Biological Psychiatry), Emeran Mayer's research on the enteric nervous system, and the 2025 meta-analysis in Nutrition Reviews covering 23 RCTs on probiotics and clinical depression (SMD −0.96).
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Serotonin and Gut Production
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                The documentation of 90%+ serotonin production in gut enterochromaffin cells draws on research by Yano et al. (Cell, 2015) and subsequent research in Nature Neuroscience on the tryptophan-serotonin pathway. Lactobacillus and GABA production research is sourced from Bravo et al. (PNAS, 2011) and its replications.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Stress Physiology and HPA Axis
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                Cortisol biology and HPA axis research draws from established neuroendocrinology literature published in Psychoneuroendocrinology and Stress. India-specific stress and burnout data is sourced from the Indian Psychiatric Society, LocalCircles occupational health surveys, and published studies on occupational stress in Indian urban professionals.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Nutritional Psychiatry
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                The emerging field of nutritional psychiatry is documented through research from Felice Jacka and the Food & Mood Centre at Deakin University, published in The Lancet Psychiatry and BMC Medicine. India-specific mental health data is sourced from the National Mental Health Survey of India (NMHS) and WHO mental health atlas data.
              </p>

              <p style={{ fontSize: "0.9rem", color: "#8a929f" }}>
                <strong>Primary journals:</strong> Nature Reviews Neuroscience · Biological Psychiatry · Cell · PNAS · Nutrition Reviews · The Lancet Psychiatry · Psychoneuroendocrinology
              </p>
              <p style={{ fontSize: "0.9rem", color: "#8a929f" }}>
                <strong>India sources:</strong> National Mental Health Survey of India (NMHS) · Indian Psychiatric Society · ICMR mental health data
              </p>
            </div>

            {/* REPRODUCE */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#182d18", marginBottom: "1rem" }}>
                PILLAR 5 — REPRODUCE
              </h3>
              
              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                PCOS and Metabolic Research
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                PCOS content draws from research published in the Journal of Clinical Endocrinology & Metabolism, Human Reproduction, and Fertility and Sterility. The insulin resistance — androgen excess pathway in PCOS is sourced from multiple mechanistic studies and the Rotterdam Criteria consensus. India-specific PCOS prevalence data draws from published Indian gynaecological research documenting rates of up to 22% in Indian women.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Testosterone Decline in Men
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                Population-level testosterone decline research draws from Travison et al. (JCEM, 2007) and subsequent replication studies documenting 1–2% annual decline independent of aging. Environmental endocrine disruptor research — BPA, phthalates, and hormonal disruption — is sourced from Environmental Health Perspectives and Endocrinology.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                Fertility Science
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                Male and female fertility research draws from studies published in Human Reproduction, Fertility and Sterility, and the American Journal of Obstetrics and Gynecology. India-specific male fertility decline data is sourced from published semen analysis studies conducted at Indian reproductive medicine centres.
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#0e121d", marginBottom: "0.5rem" }}>
                The Estrobolome and Gut-Hormone Connection
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1rem" }}>
                Research on the estrobolome — gut microbiome genes governing estrogen metabolism — draws from Baker et al. (2017) and subsequent research published in mSystems and the Journal of the Endocrine Society. This is an emerging research area and content citing it is clearly identified as such.
              </p>

              <p style={{ fontSize: "0.9rem", color: "#8a929f" }}>
                <strong>Primary journals:</strong> Journal of Clinical Endocrinology & Metabolism · Human Reproduction · Fertility and Sterility · Environmental Health Perspectives · mSystems
              </p>
              <p style={{ fontSize: "0.9rem", color: "#8a929f" }}>
                <strong>India sources:</strong> Indian Journal of Endocrinology & Metabolism · Published Indian reproductive medicine studies · FOGSI (Federation of Obstetric & Gynaecological Societies of India)
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <section style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "2rem", marginTop: "3rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#182d18", marginBottom: "1rem" }}>
              A Note on This Page
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "1rem" }}>
              The Evidence Base is a living document. As new research is published and as Nirogyn's content expands, this page is updated to reflect the current research landscape we draw from.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#2a3140" }}>
              Individual article citations — study names, authors, and publication years — appear inline within each article. This page provides the broader institutional and journal landscape behind Nirogyn's editorial work.
            </p>
          </section>

          <p style={{ fontSize: "0.85rem", color: "#8a929f", marginTop: "3rem", borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "2rem" }}>
            For specific source queries, corrections, or to share new research relevant to our pillars, write to <a href="mailto:care@nirogyn.com" style={{ color: "#178b77" }}>care@nirogyn.com</a>.<br/>
            © 2026 Nirogyn Healthcare Pvt. Ltd. · nirogyn.com · FDA · FSSAI · GMP · CE · ISO 9001:2015
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
