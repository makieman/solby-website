import SectionWrapper from "@/components/SectionWrapper";
import { WovenLightBackground } from "@/components/ui/woven-light-hero";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => (
  <>
    <SEO title="Privacy Policy" url="/privacy" noIndex={true} />
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <WovenLightBackground className="absolute inset-0 opacity-75" overlayClassName="absolute top-0 right-0 h-full w-1/2 opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-solby-black/80 via-solby-blue-dark/75 to-solby-black/85" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <SectionWrapper>
          <h1 className="heading-xl text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-white/50">Last updated: January 1, 2025</p>
        </SectionWrapper>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom max-w-3xl mx-auto space-y-8">
        {[
          { t: "Information We Collect", p: "We collect information you provide directly, such as your name, email address, phone number, and company details when you register, contact us, or use our services. We also collect usage data, device information, and cookies automatically." },
          { t: "How We Use It", p: "We use your information to provide and improve our services, process transactions, communicate with you, ensure security, and comply with legal obligations. We may also use aggregated data for analytics." },
          { t: "Data Storage & Security", p: "Your data is stored securely on cloud servers with encryption at rest (AES-256) and in transit (TLS 1.3). We implement strict access controls, regular security audits, and maintain compliance with industry best practices." },
          { t: "Cookies", p: "We use essential cookies to ensure our platform works correctly, analytics cookies to understand usage patterns, and marketing cookies (with your consent) to deliver relevant content. You can manage cookie preferences in your browser settings." },
          { t: "Third-Party Services", p: "We may share data with trusted third-party service providers who help us operate our platform, such as payment processors, analytics tools, and email service providers. These providers are bound by strict data protection agreements." },
          { t: "Your Rights", p: "You have the right to access, correct, or delete your personal data. You can also object to processing, request data portability, or withdraw consent at any time. Contact us at info@solby.io to exercise your rights." },
          { t: "Contact Us", p: "If you have questions about this Privacy Policy, please contact us at info@solby.io or write to us at Eldoret Eastern Avenue." },
        ].map(({ t, p }) => (
          <div key={t}>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">{t}</h2>
            <p className="text-muted-foreground leading-relaxed">{p}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
