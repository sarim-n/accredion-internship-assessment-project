import { HeroSection } from '@/components/sections/hero-section';
import { PartnersSection } from '@/components/sections/partners-section';
import { AccredianEdgeSection } from '@/components/sections/accredian-edge-section';
import { DomainExpertiseSection } from '@/components/sections/domain-expertise-section';
import { CourseSegmentationSection } from '@/components/sections/course-segmentation-section';
import { WhoShouldJoinSection } from '@/components/sections/who-should-join-section';
import { CATFrameworkSection } from '@/components/sections/cat-framework-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { StatsSection } from '@/components/sections/stats-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { LeadCaptureSection } from '@/components/sections/lead-capture-section';
import { FAQsSection } from '@/components/sections/faqs-section';
import { PreFooterCTA } from '@/components/sections/pre-footer-cta';

export default function Home() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trusted By / Company Logos */}
      <PartnersSection />

      {/* 3. Why Choose Us (The Accredian Edge) */}
      <AccredianEdgeSection />

      {/* 4. Features / Enterprise Solutions */}
      <DomainExpertiseSection />
      <CourseSegmentationSection />
      <WhoShouldJoinSection />
      <CATFrameworkSection />
      <HowItWorksSection />

      {/* 5. Success Metrics */}
      <StatsSection />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. ⭐ Premium Lead Capture Form */}
      <LeadCaptureSection />

      {/* 8. FAQ */}
      <FAQsSection />

      {/* 9. Final CTA */}
      <PreFooterCTA />
    </div>
  );
}
