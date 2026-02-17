import { Hero } from "@/components/hero";
import { QuickStatsSection } from "@/components/sections/quick-stats";
import { IntroductionSection } from "@/components/sections/introduction";
import { ImpactStatsSection } from "@/components/sections/impact-stats";
import { FundingIncentivesSection } from "@/components/sections/funding-incentives";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PartnersSection } from "@/components/sections/partners";
import { ThrustAreasSection } from "@/components/sections/thrust-areas";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickStatsSection />
      <IntroductionSection />
      <ImpactStatsSection />
      <FundingIncentivesSection />
      <TestimonialsSection />
      <PartnersSection />
      <ThrustAreasSection />
      <ServicesSection />
    </div>
  );
}

