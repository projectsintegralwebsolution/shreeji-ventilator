import React from 'react';
import { HeroSlider } from '@/components/home/HeroSlider';
import { FeatureCards } from '@/components/home/FeatureCards';
import { AboutIntro } from '@/components/home/AboutIntro';
import { AwardVideoSection } from '@/components/home/AwardVideoSection';
import { CFMCalculator } from '@/components/home/CFMCalculator';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ProductGrid } from '@/components/home/ProductGrid';
import { TechSpecsComparison } from '@/components/home/TechSpecsComparison';
import { IndustryApplications } from '@/components/home/IndustryApplications';
import { ClientLogos } from '@/components/home/ClientLogos';
import { Testimonials } from '@/components/home/Testimonials';
import { CertificationsSection } from '@/components/home/CertificationsSection';
import { FAQAccordion } from '@/components/home/FAQAccordion';

export const revalidate = 3600;

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSlider />
      <FeatureCards />
      <AboutIntro />
      <div className="content-visibility-auto">
        <AwardVideoSection />
      </div>
      <div className="content-visibility-auto">
        <CFMCalculator />
      </div>
      <div className="content-visibility-auto">
        <ProductGrid />
      </div>
      <div className="content-visibility-auto">
        <HowItWorks />
      </div>
      <div className="content-visibility-auto">
        <TechSpecsComparison />
      </div>
      <div className="content-visibility-auto">
        <IndustryApplications />
      </div>
      <div className="content-visibility-auto">
        <ClientLogos />
      </div>
      <div className="content-visibility-auto">
        <Testimonials />
      </div>
      <div className="content-visibility-auto">
        <CertificationsSection />
      </div>
      <div className="content-visibility-auto">
        <FAQAccordion />
      </div>
    </div>
  );
}
