import type { Metadata } from "next";
import Navbar from "@/app/disclaimer/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer — Nirogyn Healthcare Pvt. Ltd.",
  description:
    "Content on nirogyn.com is for educational purposes only and does not constitute medical advice. Read before using this website.",
};

export default function DisclaimerPage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero">
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <span>DISCLAIMER</span>
          </div>
          <div className="ip-hero-tag">Legal</div>
          <h1>Disclaimer</h1>
          <p className="ip-hero-sub">Nirogyn Healthcare Pvt. Ltd.</p>
        </div>
      </div>

      <div className="ip-body">
        <div className="legal-meta">
          <strong>Effective Date:</strong> June 2026 &nbsp;·&nbsp; <strong>Last Updated:</strong> June 2026<br />
          <strong>Applies to:</strong> nirogyn.com and all content published on it
        </div>

        <div className="legal-alert">
          <p>
            The content on nirogyn.com is published for general educational and informational purposes only.
            It does not constitute medical advice, medical diagnosis, or medical treatment of any kind.
            Reading any article on nirogyn.com does not establish a doctor-patient relationship between you
            and Nirogyn Healthcare Pvt. Ltd. Always consult a qualified, licensed healthcare professional
            before making any changes to your diet, exercise routine, supplement use, or medical treatment.
          </p>
        </div>

        <div className="legal-section">
          <h2>1. Not Medical Advice</h2>
          <p>
            All content published on nirogyn.com — including articles, guides, infographics, videos, and
            any other material — is intended solely to provide general health and wellness education. It is
            not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Nirogyn Healthcare Pvt. Ltd. is a wellness education company. It is not a medical institution,
            hospital, clinic, or registered healthcare provider. The individuals who research and write for
            nirogyn.com are not acting as your personal physician, dietitian, or healthcare professional.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Do not use content on nirogyn.com to self-diagnose or self-treat any medical condition.
            Do not disregard professional medical advice or delay seeking it because of something you
            have read on this website.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Accuracy of Content</h2>
          <p>
            Nirogyn makes every reasonable effort to ensure that all content published on nirogyn.com
            is accurate, well-researched, and based on peer-reviewed scientific sources at the time of
            publication. Every article cites named, verifiable sources.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            However, health science is continuously evolving. New research may change or contradict
            information that was accurate when first published. Nirogyn does not warrant that all
            content reflects the absolute latest scientific consensus at the moment you read it.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            If you identify an inaccuracy in any article, please write to us at{" "}
            <a href="mailto:care@nirogyn.com" style={{ color: "var(--forest)", fontWeight: 600 }}>care@nirogyn.com</a>.
            We take content accuracy seriously and will review and update as required.
          </p>
        </div>

        <div className="legal-section">
          <h2>3. Individual Health Varies</h2>
          <p>
            Health and wellness information that applies generally to a population may not apply to your
            specific situation. Every person&apos;s body, medical history, medications, allergies, and health
            conditions are different. Content on nirogyn.com is written for general informational purposes
            and is not tailored to any individual&apos;s personal health circumstances. Always seek personalised
            guidance from a qualified healthcare professional before acting on any health information.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Supplement and Product Information</h2>
          <p>
            Where nirogyn.com references products from Nirogyn Healthcare Pvt. Ltd.&apos;s brand portfolio —
            Isochia, Captain Gummies, PowerShilla, and Pretty Energy — or any third-party supplement,
            product, or ingredient, this information is provided for educational context only. Product
            mentions on nirogyn.com do not constitute a recommendation that any specific product is
            appropriate for you personally. Consult a healthcare professional before starting any new
            supplement, particularly if you are:
          </p>
          <ul style={{ marginTop: "0.75rem" }}>
            <li>Pregnant or breastfeeding</li>
            <li>Under 18 years of age</li>
            <li>Taking prescription or over-the-counter medications</li>
            <li>Managing a chronic medical condition</li>
            <li>Preparing for or recovering from surgery</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>5. No Endorsement of Third-Party Content</h2>
          <p>
            nirogyn.com may contain links to third-party websites, research papers, journals, and external
            resources for reference purposes. The inclusion of any external link does not constitute an
            endorsement, recommendation, or approval by Nirogyn Healthcare Pvt. Ltd. of the content,
            accuracy, or practices of that third-party website. Nirogyn is not responsible for the content,
            availability, or reliability of any third-party website. You access external links entirely
            at your own risk.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. No Liability for Health Outcomes</h2>
          <p>
            Nirogyn Healthcare Pvt. Ltd., its directors, employees, contributors, and affiliates shall
            not be held liable for any health outcomes, injuries, illnesses, or adverse effects arising from:
          </p>
          <ul style={{ marginTop: "0.75rem" }}>
            <li>Actions taken based on content read on nirogyn.com</li>
            <li>Reliance on any article, guide, or recommendation published on this website</li>
            <li>Use or misuse of any product referenced or discussed on nirogyn.com</li>
            <li>Failure to seek appropriate professional medical advice</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>
            To the fullest extent permitted by applicable Indian law, Nirogyn disclaims all liability —
            direct, indirect, incidental, or consequential — arising from your use of this website or
            its content.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Content Is Not a Crisis Resource</h2>
          <p>
            nirogyn.com is an educational wellness platform. It is not designed or equipped to handle
            medical emergencies, mental health crises, or urgent health situations.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            If you are experiencing a medical emergency, please call <strong>112</strong> (India&apos;s national
            emergency number) or proceed to your nearest hospital immediately.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            If you are experiencing a mental health crisis, please contact{" "}
            <strong>iCall (9152987821)</strong> or{" "}
            <strong>Vandrevala Foundation (1860-2662-345)</strong>, which operate helplines in India.
          </p>
        </div>

        <div className="legal-section">
          <h2>8. Changes to This Disclaimer</h2>
          <p>
            Nirogyn Healthcare Pvt. Ltd. reserves the right to update this Disclaimer at any time.
            Changes will be posted on this page with a revised effective date. Continued use of
            nirogyn.com after any update constitutes acceptance of the revised Disclaimer.
          </p>
        </div>

        <div className="legal-section">
          <h2>9. Contact</h2>
          <div className="legal-meta">
            <strong>Nirogyn Healthcare Pvt. Ltd.</strong><br />
            Email: <a href="mailto:care@nirogyn.com" style={{ color: "var(--forest)" }}>care@nirogyn.com</a><br />
            Website: nirogyn.com<br />
            Response time: Within 72 hours on working days
          </div>
        </div>

        <div className="ip-divider" />
        <p className="ip-p" style={{ fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center" }}>
          This Disclaimer is governed by the laws of India. Any dispute arising from the use of nirogyn.com
          shall be subject to the exclusive jurisdiction of the courts of India.<br />
          © 2026 Nirogyn Healthcare Pvt. Ltd. &nbsp;·&nbsp; FDA · FSSAI · GMP · CE · ISO 9001:2015
        </p>
      </div>

      <Footer />
    </div>
  );
}
