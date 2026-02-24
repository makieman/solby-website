import SectionWrapper from "@/components/SectionWrapper";

const logos = [
  { name: "Forever Grateful", url: "https://res.cloudinary.com/dzorbbb7s/image/upload/v1748783889/fg_logo_fg-1-removebg-preview_hrmztq.webp" },
  { name: "Bessich Distributors", url: "https://res.cloudinary.com/dzorbbb7s/image/upload/t_bg-remover/v1748885216/bessich-logo_kq6o6u.png" },
  { name: "KENIC", url: "https://res.cloudinary.com/dzorbbb7s/image/upload/v1746453535/kenic-logo_dvkror-removebg-preview_cysox4.png" },
  { name: "Ecobees", url: "https://res.cloudinary.com/dfsd8beyu/image/upload/v1743154263/pw6ahpsoeryur3dzmjmz.png" },
  { name: "Gooseberry Delights", url: "https://res.cloudinary.com/dfsd8beyu/image/upload/v1748595002/duhptacrarycnxhnhpgm.png" },
  { name: "Romani Caterers", url: "https://res.cloudinary.com/dzorbbb7s/image/upload/t_bg-remover/v1748884269/romani0logo_iqrf7y.png" },
  { name: "Afrostyled Craft Centre", url: "https://res.cloudinary.com/dzorbbb7s/image/upload/t_bg-remover/v1748885214/afrostyled-logo_ebxuwu.png" },
];

const ClientLogosSection = () => (
  <section className="section-padding relative">
    <div className="container-custom">
      <SectionWrapper className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">Trusted By</span>
        <h2 className="heading-lg mt-3 text-foreground">Get inspired by companies who have done it</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Leading companies across industries are leveraging Solby to transform their operations and drive innovation.
        </p>
      </SectionWrapper>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {logos.map((logo, i) => (
          <SectionWrapper key={logo.name} delay={i * 0.05}>
            <div className="group bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-16 w-auto object-contain dark:brightness-90"
                loading="lazy"
              />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors relative">
                {logo.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </span>
            </div>
          </SectionWrapper>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-10">
        Join these forward-thinking organizations and experience the power of Solby.
      </p>
    </div>
  </section>
);

export default ClientLogosSection;
