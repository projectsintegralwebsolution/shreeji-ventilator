import React from 'react';
import dynamic from 'next/dynamic';
import { HeroSlider } from '@/components/home/HeroSlider';
import { FeatureCards } from '@/components/home/FeatureCards';
import { AboutIntro } from '@/components/home/AboutIntro';
import { HowItWorks } from '@/components/home/HowItWorks';
import { TechSpecsComparison } from '@/components/home/TechSpecsComparison';
import { IndustryApplications } from '@/components/home/IndustryApplications';
import { ClientLogos } from '@/components/home/ClientLogos';
import { Testimonials } from '@/components/home/Testimonials';
import { CertificationsSection } from '@/components/home/CertificationsSection';

const AwardVideoSection = dynamic(() => import('@/components/home/AwardVideoSection').then(m => m.AwardVideoSection), { ssr: true });
const CFMCalculator = dynamic(() => import('@/components/home/CFMCalculator').then(m => m.CFMCalculator), { ssr: true });
const ProductGrid = dynamic(() => import('@/components/home/ProductGrid').then(m => m.ProductGrid), { ssr: true });
const FAQAccordion = dynamic(() => import('@/components/home/FAQAccordion').then(m => m.FAQAccordion), { ssr: true });

export const revalidate = 3600;

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSlider />
      <FeatureCards />
      <AboutIntro />
      <AwardVideoSection />
      <CFMCalculator />
      <ProductGrid />
      <HowItWorks />
      <TechSpecsComparison />
      <IndustryApplications />
      <ClientLogos />
      <Testimonials />
      <CertificationsSection />
      <FAQAccordion />
    </div>
  );
}
