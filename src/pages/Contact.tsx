import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import SectionWrapper from "@/components/SectionWrapper";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      toast.success("Thank you! Your message has been sent.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-solby-black to-solby-blue-dark" />
        <div className="absolute inset-0 bg-solby-blue/20" />
        <div className="container-custom relative z-10 text-center">
          <SectionWrapper>
            <h1 className="heading-xl text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Our team is always here to help.
            </p>
          </SectionWrapper>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <SectionWrapper>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: "name", label: "Full Name", type: "text" },
                  { key: "email", label: "Email Address", type: "email" },
                  { key: "subject", label: "Subject", type: "text" },
                ].map(({ key, label, type }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
                    <input
                      type={type}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground text-sm focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                      maxLength={key === "email" ? 255 : 100}
                    />
                    {errors[key] && <p className="text-xs text-destructive mt-1">{errors[key]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground text-sm focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none"
                    maxLength={1000}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 btn-glow transition-all disabled:opacity-50 group"
                >
                  {loading ? (
                    <span className="animate-spin w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </SectionWrapper>

            {/* Contact Info */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", value: "info@solby.io", href: "mailto:info@solby.io" },
                  { icon: Phone, title: "Phone", value: "+254 115 588872", href: "tel:+254115588872" },
                  { icon: MapPin, title: "Office", value: "Karen Mosque, Langata Road, Nairobi, Kenya" },
                  { icon: Clock, title: "Business Hours", value: "Monday – Friday: 8:00 AM – 6:00 PM EAT" },
                ].map(({ icon: Icon, title, value, href }) => (
                  <div key={title} className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{title}</h3>
                      {href ? (
                        <a href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom text-center">
          <SectionWrapper>
            <h2 className="heading-lg text-foreground mb-2">Ready to get started?</h2>
            <p className="text-muted-foreground mb-6">Join 800+ businesses already using Solby</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 btn-glow">Start Free Trial</Link>
              <Link to="/pricing" className="px-8 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors">View Pricing</Link>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
};

export default Contact;
