import SectionWrapper from "@/components/SectionWrapper";
import { Marquee } from "@/components/ui/marquee";

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
      <SectionWrapper className="text-center section-heading-spacing">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20">Trusted By</span>
        <h2 className="heading-lg mt-3 text-foreground">Get inspired by companies who have done it</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Leading companies across industries are leveraging Solby to transform their operations and drive innovation.
        </p>
      </SectionWrapper>

      <div className="mt-8 flex w-full relative py-8">
        {/* Left fade out effect */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-background to-transparent md:w-32" />
        {/* Right fade out effect */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-background to-transparent md:w-32" />

        <Marquee speed={40} pauseOnHover className="py-4 overflow-hidden w-full">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex shrink-0 items-center justify-center mx-8"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-10 w-auto sm:h-12 lg:h-14 object-contain dark:brightness-90 opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-10">
        Join these forward-thinking organizations and experience the power of Solby.
      </p>
    </div>
  </section>
);

export default ClientLogosSection;
