import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { PartnersSection } from '@/components/sections/partners-section';
import { AccredianEdgeSection } from '@/components/sections/accredian-edge-section';
import { DomainExpertiseSection } from '@/components/sections/domain-expertise-section';
import { CourseSegmentationSection } from '@/components/sections/course-segmentation-section';
import { WhoShouldJoinSection } from '@/components/sections/who-should-join-section';
import { CATFrameworkSection } from '@/components/sections/cat-framework-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { FAQsSection } from '@/components/sections/faqs-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { PreFooterCTA } from '@/components/sections/pre-footer-cta';

export default function Home() {
  return (
    <div className="relative bg-white">
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <AccredianEdgeSection />
      <DomainExpertiseSection />
      <CourseSegmentationSection />
      <WhoShouldJoinSection />
      <CATFrameworkSection />
      <HowItWorksSection />
      <FAQsSection />
      <TestimonialsSection />
      <PreFooterCTA />
    </div>
  );
}
