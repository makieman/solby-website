import { Link } from "react-router-dom";
import { Lightbulb, Target, Shield, MapPin, Clock, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We push boundaries to create software that solves real problems for African businesses." },
  { icon: Target, title: "Impact", desc: "Every feature we build is designed to create measurable impact for our customers." },
  { icon: Shield, title: "Integrity", desc: "We operate with transparency and build trust through honest, reliable partnerships." },
];

const positions = [
  { title: "Frontend Developer", department: "Engineering", location: "Nairobi / Remote", type: "Full-time" },
  { title: "Sales Executive", department: "Sales", location: "Nairobi", type: "Full-time" },
];

const Careers = () => (
  <>
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solby-black to-solby-blue-dark" />
      <div className="absolute inset-0 bg-solby-blue/20" />
      <div className="container-custom relative z-10 text-center">
        <SectionWrapper>
          <h1 className="heading-xl text-white mb-4">Join the Solby Team</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Help us build the future of business software in Africa.</p>
        </SectionWrapper>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionWrapper className="text-center mb-12">
          <h2 className="heading-lg text-foreground">Our Values</h2>
        </SectionWrapper>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <SectionWrapper key={v.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <SectionWrapper className="text-center mb-12">
          <h2 className="heading-lg text-foreground">Open Positions</h2>
        </SectionWrapper>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {positions.map((pos, i) => (
            <SectionWrapper key={pos.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{pos.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{pos.department}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="w-3 h-3" />{pos.location}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" />{pos.type}</span>
                </div>
                <a href="mailto:careers@solby.io" className="inline-flex items-center gap-1 text-sm font-semibold text-primary group">
                  Apply Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </SectionWrapper>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Don't see the right role? Send your CV to <a href="mailto:careers@solby.io" className="text-primary hover:underline">careers@solby.io</a> and we'll keep you in mind.
        </p>
      </div>
    </section>
  </>
);

export default Careers;
