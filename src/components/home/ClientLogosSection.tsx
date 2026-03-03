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
      <SectionWrapper className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">Trusted By</span>
        <h2 className="heading-lg mt-3 text-foreground">Get inspired by companies who have done it</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Leading companies across industries are leveraging Solby to transform their operations and drive innovation.
        </p>
      </SectionWrapper>

      <div className="relative flex flex-col items-center justify-center -mx-4 sm:-mx-6 lg:-mx-8">
        <Marquee pauseOnHover speed={40} className="py-2">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group mx-4 sm:mx-8 bg-card border border-border rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer min-w-[160px] sm:min-w-[200px]"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-12 w-auto sm:h-16 object-contain dark:brightness-90"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>

        {/* Optional reverse row if there are many logos, repeating the same ones just for depth */}
        <Marquee pauseOnHover speed={50} direction="right" className="py-2">
          {[...logos].reverse().map((logo) => (
            <div
              key={`rev-${logo.name}`}
              className="group mx-4 sm:mx-8 bg-card border border-border rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer min-w-[160px] sm:min-w-[200px]"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-12 w-auto sm:h-16 object-contain dark:brightness-90"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>

        {/* Gradient fades for the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background dark:from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background dark:from-background to-transparent" />
      </div>

      <p className="text-center text-sm text-muted-foreground mt-10">
        Join these forward-thinking organizations and experience the power of Solby.
      </p>
    </div>
  </section>
);

export default ClientLogosSection;
