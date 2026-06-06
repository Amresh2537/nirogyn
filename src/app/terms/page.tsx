import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Nirogyn Healthcare Pvt. Ltd.",
  description:
    "Terms and Conditions governing use of nirogyn.com. Compliant with the Information Technology Act, 2000 · DPDP Act, 2023 · Indian Contract Act, 1872.",
};

export default function TermsPage() {
  return (
    <div className="ip-wrap">
      <Navbar />

      <div className="ip-hero">
        <div className="ip-hero-inner">
          <div className="ip-breadcrumb">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>NIROGYN</a>
            <span>·</span>
            <span>TERMS & CONDITIONS</span>
          </div>
          <div className="ip-hero-tag">Legal</div>
          <h1>Terms &amp; Conditions</h1>
          <p className="ip-hero-sub">Nirogyn Healthcare Pvt. Ltd.</p>
        </div>
      </div>

      <div className="ip-body">
        <div className="legal-meta">
          <strong>Effective Date:</strong> June 2026 &nbsp;·&nbsp; <strong>Last Updated:</strong> June 2026<br />
          <strong>Applies to:</strong> nirogyn.com<br />
          <strong>Governed by:</strong> Information Technology Act, 2000 · DPDP Act, 2023 · Indian Contract Act, 1872 · Consumer Protection Act, 2019
        </div>

        <p className="ip-lead">
          Welcome to nirogyn.com. These Terms and Conditions (&lsquo;Terms&rsquo;) govern your use of this website.
          By accessing nirogyn.com, you agree to be bound by these Terms. nirogyn.com is a content-only
          educational wellness platform. There are no user accounts, no login facility, and no products
          sold on this website.
        </p>

        <div className="legal-section">
          <h2>1. About Nirogyn</h2>
          <p>nirogyn.com is owned and operated by Nirogyn Healthcare Pvt. Ltd., a company incorporated under the laws of India. It is a science-backed wellness education platform publishing articles, guides, and research-based content across five health pillars — EAT, SLEEP, MOVE, MIND, and REPRODUCE.</p>
          <p style={{ marginTop: "0.75rem" }}>nirogyn.com does not sell any products. Product brands under Nirogyn Healthcare Pvt. Ltd. — Isochia, Captain Gummies, PowerShilla, and Pretty Energy — operate through their own separate websites. Links to those websites may appear on nirogyn.com for informational purposes only.</p>
        </div>

        <div className="legal-section">
          <h2>2. Who May Use This Website</h2>
          <p>nirogyn.com is freely accessible to anyone with internet access. No registration or account is required to read content on this website. The newsletter subscription feature is intended for users aged 18 and above. nirogyn.com is intended for personal, non-commercial use only.</p>
        </div>

        <div className="legal-section">
          <h2>3. Newsletter Subscription</h2>
          <p>nirogyn.com offers an optional newsletter subscription. By subscribing, you provide your email address and consent to receive wellness content updates, new article notifications, and health insights from Nirogyn.</p>
          <ul style={{ marginTop: "0.75rem" }}>
            <li>Subscription is entirely voluntary — all content on nirogyn.com is freely readable without subscribing</li>
            <li>You may unsubscribe at any time — via the unsubscribe link in any newsletter email or by writing to care@nirogyn.com</li>
            <li>We will not use your email for any other purpose — no advertising, no third-party promotions, no selling of your data</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. Content — Educational Purpose Only</h2>
          <div className="legal-alert">
            <p>
              All content on nirogyn.com is provided for general educational and informational purposes only.
              It does not constitute medical advice, medical diagnosis, or medical treatment. Always consult
              a qualified healthcare professional before making changes to your diet, supplement use, or
              health regimen. Never disregard or delay professional medical advice because of something you
              read on nirogyn.com.
            </p>
          </div>
          <p style={{ marginTop: "0.75rem" }}>Nirogyn makes every reasonable effort to ensure content accuracy at the time of publication. All articles are based on peer-reviewed research with named sources. However, health science evolves, and no warranty is made that content reflects the absolute latest research at the moment you read it.</p>
        </div>

        <div className="legal-section">
          <h2>5. Intellectual Property</h2>
          <p>All content on nirogyn.com — including articles, text, graphics, logos, and images — is the intellectual property of Nirogyn Healthcare Pvt. Ltd., protected under the Copyright Act, 1957 and applicable Indian law.</p>
          <p style={{ marginTop: "0.75rem" }}><strong>You may:</strong></p>
          <ul style={{ marginTop: "0.4rem" }}>
            <li>Read and access all content on nirogyn.com freely</li>
            <li>Share links to Nirogyn articles on social media or messaging platforms with attribution to nirogyn.com</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}><strong>You may not:</strong></p>
          <ul style={{ marginTop: "0.4rem" }}>
            <li>Reproduce, republish, distribute, or create derivative works from Nirogyn content without prior written permission</li>
            <li>Scrape or systematically download content using automated tools</li>
            <li>Present Nirogyn content as your own or remove any copyright notices</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>For licensing or collaboration enquiries: <a href="mailto:care@nirogyn.com" style={{ color: "var(--forest)" }}>care@nirogyn.com</a></p>
        </div>

        <div className="legal-section">
          <h2>6. Acceptable Use</h2>
          <p>By using nirogyn.com, you agree not to:</p>
          <ul style={{ marginTop: "0.75rem" }}>
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to any part of the website or its infrastructure</li>
            <li>Use automated tools to scrape, crawl, or extract content without written permission</li>
            <li>Transmit malware, spam, or harmful code through any part of the website</li>
            <li>Interfere with the website&apos;s normal operation</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>7. Third-Party Links</h2>
          <p>nirogyn.com contains links to third-party websites — including research publications, external resources, and product brand websites under Nirogyn Healthcare Pvt. Ltd. These links are for informational purposes only. Nirogyn is not responsible for the content, accuracy, or privacy practices of any third-party website.</p>
        </div>

        <div className="legal-section">
          <h2>8. Disclaimer of Warranties</h2>
          <p>nirogyn.com and all content on it are provided on an &lsquo;as is&rsquo; basis without warranties of any kind. Nirogyn does not warrant that the website will be uninterrupted, error-free, or free from inaccuracies. To the maximum extent permitted by Indian law, Nirogyn disclaims all express and implied warranties.</p>
        </div>

        <div className="legal-section">
          <h2>9. Limitation of Liability</h2>
          <p>To the fullest extent permitted by Indian law, Nirogyn Healthcare Pvt. Ltd. shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of nirogyn.com or reliance on its content — including any health outcomes resulting from actions taken based on information read on this website.</p>
          <p style={{ marginTop: "0.75rem" }}>Since nirogyn.com is a free content platform with no commercial transaction, Nirogyn&apos;s total liability for any claim shall not exceed INR 1,000 (Indian Rupees One Thousand).</p>
        </div>

        <div className="legal-section">
          <h2>10. Health and Medical Disclaimer</h2>
          <p>Nirogyn is not a medical institution and does not provide individual medical advice. Content on nirogyn.com is educational. You should always consult a qualified healthcare professional before acting on any health information, starting or stopping any supplement, or making significant changes to your diet or lifestyle.</p>
        </div>

        <div className="legal-section">
          <h2>11. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. Material changes will be communicated via our newsletter (if you are subscribed) and noted on nirogyn.com. Continued use of the website after changes are posted constitutes acceptance of the updated Terms.</p>
        </div>

        <div className="legal-section">
          <h2>12. Governing Law and Jurisdiction</h2>
          <p>These Terms are governed by the laws of India including the Information Technology Act, 2000, the DPDP Act, 2023, the Indian Contract Act, 1872, and the Consumer Protection Act, 2019. Any dispute shall be subject to the exclusive jurisdiction of courts in India.</p>
        </div>

        <div className="legal-section">
          <h2>13. Contact</h2>
          <div className="legal-meta">
            <strong>Nirogyn Healthcare Pvt. Ltd.</strong><br />
            General / Legal / Privacy: <a href="mailto:care@nirogyn.com" style={{ color: "var(--forest)" }}>care@nirogyn.com</a><br />
            Website: nirogyn.com<br />
            Response time: Within 72 hours on working days
          </div>
        </div>

        <div className="ip-divider" />
        <p className="ip-p" style={{ fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center" }}>
          Compliant with the Information Technology Act, 2000 · DPDP Act, 2023 · Indian Contract Act, 1872 · Consumer Protection Act, 2019<br />
          © 2026 Nirogyn Healthcare Pvt. Ltd. &nbsp;·&nbsp; FDA · FSSAI · GMP · CE · ISO 9001:2015
        </p>
      </div>

      <Footer />
    </div>
  );
}
