import { Hero } from "@/components/hero";
import { IntroductionSection } from "@/components/sections/introduction";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PartnersSection } from "@/components/sections/partners";
import { ThrustAreasSection } from "@/components/sections/thrust-areas";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <IntroductionSection />
      <TestimonialsSection />
      <PartnersSection />
      <ThrustAreasSection />
      <ServicesSection />
    </div>
  );
}

