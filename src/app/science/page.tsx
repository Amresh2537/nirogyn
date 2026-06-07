import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScienceGrid from "@/components/ScienceGrid";

export const metadata = {
  title: "Science — Nirogyn",
  description: "Research, evidence, and science-backed health information.",
};

export default function Science() {

  return (
    <div className="ip-wrap">
      <Navbar />
      
      <main style={{ paddingTop: "120px", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem" }}>
          
          {/* Breadcrumb */}
          <div className="ip-breadcrumb">
            <span>Science</span>
          </div>

          {/* Header */}
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem", color: "#182d18" }}>
            Science
          </h1>
          
          <p style={{ fontSize: "1.1rem", color: "#178b77", fontWeight: 600, marginBottom: "2rem" }}>
            Research, evidence, and health information you can verify.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3140", marginBottom: "3rem" }}>
            Every claim on Nirogyn traces back to peer-reviewed research. Explore the evidence base, research library, and scientific terminology that inform our content across all five pillars.
          </p>

          {/* Science Items Grid */}
          <ScienceGrid />

          <p style={{ fontSize: "0.85rem", color: "#8a929f", borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "2rem" }}>
            © 2026 Nirogyn Healthcare Pvt. Ltd. · nirogyn.com · FDA · FSSAI · GMP · CE · ISO 9001:2015
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
