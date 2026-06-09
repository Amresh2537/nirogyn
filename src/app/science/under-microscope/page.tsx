import Navbar from "@/app/science/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Under The Microscope — Nirogyn",
  description: "Common health claims examined against clinical evidence.",
};

export default function UnderTheMicroscope() {
  const claims = [
    {
      num: "01",
      claim: "Ghee is bad for the heart.",
      verdict: "Incomplete — and the replacement may be worse.",
      explanation: "Ghee contains butyric acid, a short-chain fatty acid with documented anti-inflammatory properties and a direct role in maintaining the gut lining. The refined vegetable oils that replaced ghee in Indian cooking are high in linoleic acid, which when heated repeatedly generates 4-hydroxynonenal — a compound linked to cardiovascular and neurological damage. The epidemiological correlation between India's rise in refined oil consumption and cardiovascular disease is documented but rarely discussed.",
      term: "4-Hydroxynonenal (4-HNE)",
      termDef: "A toxic compound produced when vegetable oils are heated at high temperatures. Associated with oxidative stress and cardiovascular risk."
    },
    {
      num: "02",
      claim: "You need 8 glasses of water a day.",
      verdict: "Unsupported — hydration is individual, not universal.",
      explanation: "The 8-glasses rule has no peer-reviewed basis. Hydration needs vary with body weight, activity level, ambient temperature, and dietary water content. In healthy adults, the kidneys regulate fluid balance through antidiuretic hormone (ADH) secretion. Thirst is a reliable indicator of hydration status. Forcing intake beyond thirst in healthy individuals has no documented clinical benefit.",
      term: "Antidiuretic Hormone (ADH)",
      termDef: "A pituitary hormone that signals the kidneys to retain water when the body's fluid levels drop — the primary hydration regulation mechanism."
    },
    {
      num: "03",
      claim: "Eating curd at night causes cold and mucus.",
      verdict: "Not supported — the mechanism does not exist.",
      explanation: "No clinical evidence links dairy intake timing to mucus production or respiratory infection. Mucus secretion is triggered by pathogens and inflammatory signals — not food timing. Traditionally fermented curd contains live Lactobacillus cultures that support gut microbiome diversity. Restricting it based on this belief removes a valuable daily probiotic source from the Indian diet.",
      term: "Goblet Cells",
      termDef: "Mucus-secreting cells in the respiratory and digestive tract. Stimulated by pathogens and inflammatory signals — not by food."
    },
    {
      num: "04",
      claim: "Protein is the most important macronutrient.",
      verdict: "Partially true — but absorption depends on what surrounds it.",
      explanation: "Protein digestion requires a functioning gut lining for amino acid absorption. That lining is maintained by butyrate — produced when gut bacteria ferment dietary fibre. A low-fibre, high-protein diet depletes butyrate-producing bacteria and weakens the absorption infrastructure. Protein intake can increase while actual amino acid bioavailability decreases. Protein and fibre are co-dependent.",
      term: "Amino Acid Bioavailability",
      termDef: "The proportion of ingested amino acids actually absorbed. Determined by protein quantity, gut lining integrity, and microbiome health."
    },
    {
      num: "05",
      claim: "Stress is just in your head.",
      verdict: "Clinically incorrect — stress is a whole-body hormonal event.",
      explanation: "Psychological stress activates the HPA axis, triggering cortisol secretion from the adrenal cortex. Chronic cortisol elevation increases intestinal permeability, disrupts the gut microbiome, suppresses immunity, and elevates inflammatory markers. In men, sustained cortisol suppresses testosterone production. Stress is not a mental state. It is a measurable hormonal cascade with organ-level consequences.",
      term: "HPA Axis",
      termDef: "The hypothalamic-pituitary-adrenal system. The body's stress response pathway — when activated chronically, it damages gut health, immunity, and hormonal balance."
    },
    {
      num: "06",
      claim: "Haldi cures everything.",
      verdict: "Partially supported — with a critical bioavailability caveat.",
      explanation: "Curcumin, the active compound in turmeric, inhibits NF-κB — a key inflammatory signalling pathway — and has shown anti-inflammatory effects in clinical trials. However, curcumin's oral bioavailability is below 1% when consumed alone. Piperine from black pepper increases absorption by up to 2,000% by blocking its intestinal breakdown. Traditional Indian cooking combining turmeric and black pepper in the same dish is an empirically derived absorption enhancer — now pharmacologically validated.",
      term: "NF-κB (Nuclear Factor kappa B)",
      termDef: "A protein complex that switches on inflammatory gene expression. Curcumin's anti-inflammatory effect works primarily through its inhibition."
    },
    {
      num: "07",
      claim: "You can catch up on lost sleep over the weekend.",
      verdict: "False — sleep debt is not reversible by oversleeping.",
      explanation: "Sleep performs two critical biological functions: synaptic homeostasis and glymphatic clearance — the flushing of metabolic waste, including amyloid beta, from the brain. Both are time-dependent and cannot be recovered. Chronic partial sleep deprivation reduces slow-wave sleep proportion and impairs hippocampal neurogenesis. Research shows that cognitive deficits from two weeks of 6-hour sleep are not restored by a recovery weekend.",
      term: "Glymphatic System",
      termDef: "The brain's waste-clearance mechanism. Activates during deep sleep to flush toxic metabolic byproducts — including proteins linked to neurodegeneration."
    },
    {
      num: "08",
      claim: "A calorie is a calorie — weight management is just about eating less.",
      verdict: "Reductive — the source and gut metabolism of calories both determine outcome.",
      explanation: "Identical caloric intakes from different macronutrients produce different hormonal responses. Refined carbohydrates trigger greater insulin secretion than fat or fibre, promoting fat storage and appetite dysregulation. Additionally, gut microbiome composition influences energy extraction — individuals with a higher Firmicutes:Bacteroidetes ratio extract more energy from the same food intake. Two people eating identically can have meaningfully different metabolic outcomes based on their microbiome alone.",
      term: "Firmicutes:Bacteroidetes Ratio",
      termDef: "A key gut microbiome metric. An elevated ratio increases energy extraction from food and is associated with metabolic syndrome. Lowered by increasing dietary fibre."
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
            <span>Under The Microscope</span>
          </div>

          {/* Header */}
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem", color: "#182d18" }}>
            Under The Microscope
          </h1>
          
          <p style={{ fontSize: "1.1rem", color: "#178b77", fontWeight: 600, marginBottom: "2rem" }}>
            Common health claims examined against clinical evidence.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "3rem" }}>
            India runs on health beliefs repeated so often they feel like facts. Some are right. Some are incomplete. Some are wrong in ways that matter.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "3rem" }}>
            Each entry below gives you the claim, the verdict, the biological mechanism behind it, and one science term defined simply. No jargon without explanation. No verdict without evidence.
          </p>

          {/* Claims */}
          {claims.map((item) => (
            <section key={item.num} style={{ marginBottom: "2.5rem", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "2rem" }}>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#178b77", minWidth: "3rem" }}>
                  {item.num}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0e121d", marginBottom: "0.75rem" }}>
                    {item.claim}
                  </h2>
                  
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "#2a3140", marginBottom: "1rem" }}>
                    <strong>Verdict</strong> — {item.verdict}
                  </p>
                  
                  <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#2a3140", marginBottom: "1.5rem" }}>
                    {item.explanation}
                  </p>

                  <div style={{ backgroundColor: "rgba(126,200,90,0.08)", padding: "1rem", borderRadius: "6px", borderLeft: "3px solid #178b77" }}>
                    <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#178b77", marginBottom: "0.5rem" }}>
                      {item.term}:
                    </p>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#2a3140", margin: 0 }}>
                      {item.termDef}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Footer Note */}
          <section style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "2rem", marginTop: "3rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "1rem" }}>
              Under The Microscope is updated as new research becomes available. If you believe a verdict is outdated or incorrectly represented, write to us at <a href="mailto:care@nirogyn.com" style={{ color: "#178b77", textDecoration: "none", fontWeight: 600 }}>care@nirogyn.com</a>.
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
