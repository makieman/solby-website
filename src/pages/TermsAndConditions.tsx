import SectionWrapper from "@/components/SectionWrapper";
import { WovenLightBackground } from "@/components/ui/woven-light-hero";
import SEO from "@/components/SEO";

const TermsAndConditions = () => (
  <>
    <SEO title="Terms & Conditions" url="/terms" noIndex={true} />
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <WovenLightBackground className="absolute inset-0 opacity-75" overlayClassName="absolute top-0 right-0 h-full w-1/2 opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-solby-black/80 via-solby-blue-dark/75 to-solby-black/85" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <SectionWrapper>
          <h1 className="heading-xl text-white mb-2">Terms & Conditions</h1>
          <p className="text-sm text-white/50">Last updated: January 1, 2025</p>
        </SectionWrapper>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom max-w-3xl mx-auto space-y-8">
        {[
          { t: "Acceptance of Terms", p: "By accessing or using Solby's services, you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our services immediately." },
          { t: "Use of Service", p: "You may use our services only for lawful purposes and in accordance with these Terms. You agree not to misuse the platform, attempt unauthorized access, or interfere with other users' experience." },
          { t: "Account Registration", p: "To access certain features, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account." },
          { t: "Payment Terms", p: "Subscription fees are billed according to the plan you select. All fees are non-refundable except as required by law. We reserve the right to modify pricing with 30 days' notice." },
          { t: "Intellectual Property", p: "All content, features, and functionality of Solby are owned by Solby and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our software without permission." },
          { t: "Limitation of Liability", p: "Solby shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service, including loss of data, profits, or business opportunities." },
          { t: "Termination", p: "We may terminate or suspend your account at any time for violation of these Terms. Upon termination, your right to use the service ceases immediately, though certain provisions survive termination." },
          { t: "Governing Law", p: "These Terms are governed by and construed in accordance with the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi, Kenya." },
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

export default TermsAndConditions;
