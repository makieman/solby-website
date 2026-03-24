import SectionWrapper from "@/components/SectionWrapper";
import { WovenLightBackground } from "@/components/ui/woven-light-hero";
import SEO from "@/components/SEO";

const CookiePolicy = () => (
  <>
    <SEO title="Cookie Policy" url="/cookies" noIndex={true} />
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <WovenLightBackground className="absolute inset-0 opacity-75" overlayClassName="absolute top-0 right-0 h-full w-1/2 opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-solby-black/80 via-solby-blue-dark/75 to-solby-black/85" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <SectionWrapper>
          <h1 className="heading-xl text-white mb-2">Cookie Policy</h1>
          <p className="text-sm text-white/50">Last updated: January 1, 2025</p>
        </SectionWrapper>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom max-w-3xl mx-auto space-y-8">
        {[
          { t: "What Are Cookies?", p: "Cookies are small text files stored on your device when you visit a website. They help us provide a better experience by remembering your preferences and understanding how you use our site." },
          { t: "Essential Cookies", p: "These cookies are necessary for the website to function properly. They enable core features such as security, network management, and accessibility. You cannot opt out of essential cookies." },
          { t: "Analytics Cookies", p: "We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience. These cookies collect anonymous usage data such as pages visited and time spent." },
          { t: "Marketing Cookies", p: "Marketing cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. These cookies are only set with your consent." },
          { t: "How to Opt Out", p: "You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies. Please note that disabling certain cookies may affect the functionality of our website. You can also use the cookie consent banner to manage your preferences." },
          { t: "Contact Us", p: "If you have questions about our cookie practices, please contact us at info@solby.io." },
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

export default CookiePolicy;
