import type { Metadata } from "next";
import Navbar from "@/app/privacy/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Nirogyn Healthcare Pvt. Ltd.",
  description:
    "How Nirogyn collects, uses, and protects your personal data. Compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act).",
};

export default function PrivacyPage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero">
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <span>PRIVACY POLICY</span>
          </div>
          <div className="ip-hero-tag">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="ip-hero-sub">Nirogyn Healthcare Pvt. Ltd.</p>
        </div>
      </div>

      <div className="ip-body">
        <div className="legal-meta">
          <strong>Effective Date:</strong> June 2026 &nbsp;·&nbsp; <strong>Last Updated:</strong> June 2026<br />
          <strong>Applies to:</strong> nirogyn.com<br />
          <strong>Governed by:</strong> Digital Personal Data Protection Act, 2023 (DPDP Act) and DPDP Rules, 2025 (India)
        </div>

        <p className="ip-lead">
          Nirogyn Healthcare Pvt. Ltd. (&lsquo;Nirogyn&rsquo;, &lsquo;we&rsquo;, &lsquo;our&rsquo;, &lsquo;us&rsquo;) is committed to protecting your
          privacy. nirogyn.com is a content-only educational wellness platform. We do not offer user accounts,
          login functionality, or e-commerce. The only personal data we collect is your email address —
          and only when you voluntarily choose to subscribe to our newsletter.
        </p>

        <div className="legal-section">
          <h2>1. Who We Are — Data Fiduciary</h2>
          <p>Under the Digital Personal Data Protection Act, 2023, Nirogyn Healthcare Pvt. Ltd. is the Data Fiduciary responsible for processing your personal data.</p>
          <ul style={{ marginTop: "0.75rem" }}>
            <li><strong>Company:</strong> Nirogyn Healthcare Pvt. Ltd.</li>
            <li><strong>Website:</strong> nirogyn.com</li>
            <li><strong>Privacy contact:</strong> <a href="mailto:care@nirogyn.com" style={{ color: "var(--forest)" }}>care@nirogyn.com</a></li>
            <li><strong>Grievance Officer:</strong> Write to care@nirogyn.com for all privacy concerns. We respond within 72 hours on working days.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>2. What Personal Data We Collect</h2>
          <p>We collect only one type of personal data — and only when you actively provide it.</p>
          <p style={{ marginTop: "0.75rem" }}><strong>Data you provide voluntarily:</strong></p>
          <ul style={{ marginTop: "0.4rem" }}>
            <li>Email address — collected only when you subscribe to the Nirogyn newsletter. Entirely optional.</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}><strong>Data collected automatically:</strong></p>
          <ul style={{ marginTop: "0.4rem" }}>
            <li>Technical data — IP address, browser type, device type, pages visited, and time spent, collected through standard analytics tools for the sole purpose of improving the website</li>
            <li>Cookie data — basic cookie identifiers to remember your preferences</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}><strong>What we do NOT collect:</strong></p>
          <ul style={{ marginTop: "0.4rem" }}>
            <li>We do not collect names, phone numbers, or any personal identifier beyond your email address</li>
            <li>We do not have user accounts or login functionality</li>
            <li>We do not collect health records, financial data, or any sensitive personal information</li>
            <li>We do not collect data from children under 18</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. Why We Collect Your Email — Purpose of Processing</h2>
          <p>We collect your email address for one purpose only: to send you new wellness articles, health insights, and content updates from nirogyn.com, as you have requested by subscribing. We will not use your email address for any other purpose — including advertising, third-party promotions, or profiling — without obtaining your separate, explicit consent.</p>
        </div>

        <div className="legal-section">
          <h2>4. Legal Basis — Consent</h2>
          <p>Under the DPDP Act, 2023, we process your email address on the basis of your free, informed, specific, and unambiguous consent, given at the point of subscription.</p>
          <p style={{ marginTop: "0.75rem" }}>You may withdraw your consent and unsubscribe at any time by:</p>
          <ul style={{ marginTop: "0.4rem" }}>
            <li>Clicking the &lsquo;Unsubscribe&rsquo; link in any newsletter email we send you</li>
            <li>Writing to us at <a href="mailto:care@nirogyn.com" style={{ color: "var(--forest)" }}>care@nirogyn.com</a></li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>Once you unsubscribe, we will stop sending you emails and remove your address from our mailing list within 7 working days.</p>
        </div>

        <div className="legal-section">
          <h2>5. How We Store and Protect Your Email</h2>
          <p>Your email address is stored securely using industry-standard measures. We use a reputable third-party email service provider to manage our newsletter subscription list, contractually bound to process your data only for newsletter delivery. We do not share your email address with any third party for commercial, marketing, or advertising purposes.</p>
        </div>

        <div className="legal-section">
          <h2>6. Cookies</h2>
          <p>nirogyn.com uses minimal cookies to ensure the website functions correctly and to understand anonymous usage patterns.</p>
          <ul style={{ marginTop: "0.75rem" }}>
            <li><strong>Essential cookies</strong> — required for the website to load and function properly</li>
            <li><strong>Analytics cookies</strong> — anonymised, aggregated data to understand how visitors navigate the site. No personal identity is associated with analytics data</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>No cookies are used to track your behaviour for advertising or profiling purposes. You can manage or disable cookies through your browser settings at any time.</p>
        </div>

        <div className="legal-section">
          <h2>7. How Long We Keep Your Data</h2>
          <ul>
            <li>Email address (newsletter) — retained for as long as you remain subscribed. Removed within 7 working days of unsubscription.</li>
            <li>Analytics data — anonymised and not linked to any personal identity. Retained for website improvement purposes only.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>8. Data Sharing</h2>
          <p>We do not sell, rent, or trade your email address or any personal data to any third party. Ever. The only third party that processes your email address is our newsletter service provider, operating under a strict data processing agreement with Nirogyn.</p>
        </div>

        <div className="legal-section">
          <h2>9. Your Rights as a Data Principal</h2>
          <p>Under the DPDP Act, 2023, you have the following rights:</p>
          <ul style={{ marginTop: "0.75rem" }}>
            <li><strong>Right to information</strong> — you may ask us what data we hold about you and how it is used</li>
            <li><strong>Right to correction</strong> — you may ask us to correct any inaccurate data</li>
            <li><strong>Right to erasure</strong> — you may ask us to delete your email address from our records at any time</li>
            <li><strong>Right to withdraw consent</strong> — unsubscribe at any time via newsletter link or by writing to care@nirogyn.com</li>
            <li><strong>Right to grievance redressal</strong> — write to care@nirogyn.com. If unresolved, you may approach the Data Protection Board of India</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>All requests will be addressed within 72 hours on working days.</p>
        </div>

        <div className="legal-section">
          <h2>10. Children&apos;s Privacy</h2>
          <p>nirogyn.com is intended for users aged 18 and above. We do not knowingly collect email addresses or any data from children under 18. If we become aware that a child has subscribed to our newsletter, we will delete the email address immediately.</p>
        </div>

        <div className="legal-section">
          <h2>11. Third-Party Links</h2>
          <p>nirogyn.com may contain links to third-party websites including product brand websites under Nirogyn Healthcare Pvt. Ltd. Nirogyn is not responsible for the privacy practices of those websites. We recommend reviewing their privacy policies independently.</p>
        </div>

        <div className="legal-section">
          <h2>12. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Material changes will be communicated via our newsletter (if you are subscribed) and noted on nirogyn.com with a revised effective date. Continued use of the website after updates are posted constitutes acceptance of the revised policy.</p>
        </div>

        <div className="legal-section">
          <h2>13. Contact</h2>
          <div className="legal-meta">
            <strong>Privacy Contact — Nirogyn Healthcare Pvt. Ltd.</strong><br />
            Email: <a href="mailto:care@nirogyn.com" style={{ color: "var(--forest)" }}>care@nirogyn.com</a><br />
            Website: nirogyn.com<br />
            Response time: Within 72 hours on working days
          </div>
        </div>

        <div className="ip-divider" />
        <p className="ip-p" style={{ fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center" }}>
          Compliant with the Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025 (India)<br />
          © 2026 Nirogyn Healthcare Pvt. Ltd. &nbsp;·&nbsp; FDA · FSSAI · GMP · CE · ISO 9001:2015
        </p>
      </div>

      <Footer />
    </div>
  );
}
