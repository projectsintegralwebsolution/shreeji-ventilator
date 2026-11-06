import React from 'react';
import dynamic from 'next/dynamic';
import { HeroSlider } from '@/components/home/HeroSlider';
import { FeatureCards } from '@/components/home/FeatureCards';
import { AboutIntro } from '@/components/home/AboutIntro';

const AwardVideoSection = dynamic(() => import('@/components/home/AwardVideoSection').then(m => m.AwardVideoSection), { ssr: true });
const CFMCalculator = dynamic(() => import('@/components/home/CFMCalculator').then(m => m.CFMCalculator), { ssr: true });
const ProductGrid = dynamic(() => import('@/components/home/ProductGrid').then(m => m.ProductGrid), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/home/HowItWorks').then(m => m.HowItWorks), { ssr: true });
const TechSpecsComparison = dynamic(() => import('@/components/home/TechSpecsComparison').then(m => m.TechSpecsComparison), { ssr: true });
const IndustryApplications = dynamic(() => import('@/components/home/IndustryApplications').then(m => m.IndustryApplications), { ssr: true });
const ClientLogos = dynamic(() => import('@/components/home/ClientLogos').then(m => m.ClientLogos), { ssr: true });
const Testimonials = dynamic(() => import('@/components/home/Testimonials').then(m => m.Testimonials), { ssr: true });
const CertificationsSection = dynamic(() => import('@/components/home/CertificationsSection').then(m => m.CertificationsSection), { ssr: true });
const FAQAccordion = dynamic(() => import('@/components/home/FAQAccordion').then(m => m.FAQAccordion), { ssr: true });

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
