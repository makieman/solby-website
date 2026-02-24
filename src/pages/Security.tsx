import { Shield, Lock, Server, FileCheck, Mail } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const sections = [
  { icon: Lock, title: "Data Encryption", desc: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Your sensitive business information is protected with industry-leading encryption standards at every layer." },
  { icon: Shield, title: "Access Controls", desc: "Role-based access control (RBAC) ensures users only see what they need. Multi-factor authentication (MFA) adds an extra layer of security, and comprehensive audit logs track every action." },
  { icon: Server, title: "Infrastructure", desc: "Our platform is hosted on enterprise-grade cloud infrastructure with regular automated backups, disaster recovery plans, and a 99.9% uptime SLA to keep your business running." },
  { icon: FileCheck, title: "Compliance", desc: "Solby is GDPR-aligned and KRA eTIMS certified. We follow industry best practices for data protection and undergo regular security assessments to maintain the highest standards." },
];

const Security = () => (
  <>
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solby-black to-solby-blue-dark" />
      <div className="absolute inset-0 bg-solby-blue/20" />
      <div className="container-custom relative z-10 text-center">
        <SectionWrapper>
          <h1 className="heading-xl text-white mb-4">Security at Solby</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Your data security is our top priority.</p>
        </SectionWrapper>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <SectionWrapper key={s.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper className="mt-12">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">Responsible Disclosure</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you discover a security vulnerability, please report it responsibly to our security team.
            </p>
            <a href="mailto:security@solby.io" className="text-primary font-semibold hover:underline">security@solby.io</a>
          </div>
        </SectionWrapper>
      </div>
    </section>
  </>
);

export default Security;
