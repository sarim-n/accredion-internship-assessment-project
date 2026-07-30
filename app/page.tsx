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
import { LeadCaptureSection } from '@/components/sections/lead-capture-section';
import { PreFooterCTA } from '@/components/sections/pre-footer-cta';

export default function Home() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* 1. Home */}
      <HeroSection />

      {/* 2. Track Record (Success Metrics) */}
      <StatsSection />

      {/* 3. Proven Partnerships (Trusted By) */}
      <PartnersSection />

      {/* 4. The Accredian Edge (Why Choose Us) */}
      <AccredianEdgeSection />

      {/* 5. Domain Expertise */}
      <DomainExpertiseSection />

      {/* 6. Tailored Course Segmentation */}
      <CourseSegmentationSection />

      {/* 7. Who Should Join */}
      <WhoShouldJoinSection />

      {/* 8. How We Deliver Results That Matter */}
      <CATFrameworkSection />
      <HowItWorksSection />

      {/* 9. FAQ */}
      <FAQsSection />

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* 11. ⭐ Lead Capture Form */}
      <LeadCaptureSection />

      {/* 12. Contact Us / Final CTA */}
      <PreFooterCTA />
    </div>
  );
}
