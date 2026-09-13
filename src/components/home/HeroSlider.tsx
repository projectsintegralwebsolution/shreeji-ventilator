"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Wind, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Calculator, Factory } from 'lucide-react';
import { QuoteButton } from '../common/QuoteButton';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      bgImage: "/images/slides/slide-1.jpeg",
      badge: "Priority 1 • Motorized Hybrid Series",
      title: "SIMPOVENT® Motorized Industrial Roof Ventilators",
      subtitle: "Combines 100% natural wind-driven suction with high-torque electric motor power boost for severe heat spikes and continuous industrial smoke extraction.",
      bullets: [
        "High-CFM Powered Extraction Guaranteed Even on Zero-Wind Days",
        "Hindalco 8011 Aluminium Vanes with IP55 Weatherproof Copper Motor",
        "100% Monsoon-Proof & Rainwater Seepage Resistant Integration"
      ],
      ctaPrimary: "Get Instant Quotation",
      ctaPrimaryUrl: "/contact"
    },
    {
      bgImage: "/images/slides/slide-2.png",
      badge: "Heavy-Duty Exhaust Series",
      title: "SIMPOVENT® Industrial Wall & Roof Cone Exhaust Fans",
      subtitle: "High-efficiency cone-type wall and roof exhaust fans engineered for aggressive process fumes, welding smoke, and heavy factory heat evacuation.",
      bullets: [
        "High Volume Air Discharge with Aerodynamic Cone Diffuser",
        "Heavy Gauge Corrosion-Resistant Body & Automatic Weather Shutters",
        "Wall & Roof Mount Options Custom Sized for Manufacturing Plants"
      ],
      ctaPrimary: "Explore Exhaust Fans",
      ctaPrimaryUrl: "/contact"
    },
    {
      bgImage: "/images/slides/slide-3.png",
      badge: "High-Volume Industrial Ventilation",
      title: "SIMPOVENT® Heavy Duty Roof Extractors & Axial Flow Fans",
      subtitle: "Custom engineered rooftop exhaust cowls and high-capacity axial flow systems with built-in protective wire guards and weatherproof housings.",
      bullets: [
        "Direct Drive High-Torque Motor with Dynamically Balanced Impellers",
        "Heavy-Duty Weather Hood, Simpovent® Cowl & Bird Guard Mesh",
        "Direct Factory Supply & Custom Sizing from Vasai Plant"
      ],
      ctaPrimary: "Get Exhaust Fan Quote",
      ctaPrimaryUrl: "/contact"
    },
    {
      bgImage: "/images/slides/slide-4.jpeg",
      badge: "Zero-Power Eco Ventilation",
      title: "SIMPOVENT® Zero-Power Industrial Wind Turbo Ventilators",
      subtitle: "Continuously exhausts trapped heat, humidity, and toxic gases across large factory sheds using 100% natural wind currents — 0 Watts electricity.",
      bullets: [
        "100% Zero Electricity Bills & Zero Operating Cost for Lifetime",
        "Hindalco 8011 Aluminium Curved Vanes & Dual Sealed HCH Bearings",
        "10-Year Comprehensive Structural & Rotor Cage Warranty"
      ],
      ctaPrimary: "Calculate CFM Sizing",
      ctaPrimaryUrl: "/calculator"
    },
    {
      bgImage: "/images/slides/slide-5.jpeg",
      badge: "SIMPOVENT® HVLS Series • PMSM Direct Drive",
      title: "SIMPOVENT® Industrial HVLS PMSM Ceiling Fans (Up to 24 Ft)",
      subtitle: "Permanent Magnet Synchronous Motor direct-drive technology — zero gearbox, zero oil leak risk, whisper-quiet operation, and massive airflow up to 15,500 CMM.",
      bullets: [
        "Massive Air Volume up to 15,500 CMM (547,000 CFM) Across Expansive Sheds",
        "Saves Up to 50% Electricity Compared to Traditional Gearbox Fans",
        "Ultra-Quiet Performance (38-55 dBA) with Triple Redundant Safety Locking"
      ],
      ctaPrimary: "Explore HVLS Fans",
      ctaPrimaryUrl: "/hvls-fan"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative w-full min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] overflow-hidden bg-slate-950 text-white flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="SIMPOVENT Hero Product Slider"
    >
      {/* Sliding Background Images with Gradient Overlay */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === idx ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.bgImage}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          {/* Readable gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d16]/90 via-[#061d16]/65 to-black/30" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Floating Verification Badge */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none hidden sm:block">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/20 text-white shadow-lg">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-black tracking-wider uppercase text-emerald-200">
            SIMPOVENT® • ISO 9001:2015
          </span>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-20 w-full">
        <div className="max-w-2xl space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wide backdrop-blur-md shadow-inner">
            <Factory className="w-3.5 h-3.5 text-emerald-400" />
            <span>{slides[currentSlide].badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-medium drop-shadow">
            {slides[currentSlide].subtitle}
          </p>

          {/* Bullet Points */}
          <div className="space-y-1.5 pt-1">
            {slides[currentSlide].bullets.map((bullet, bIdx) => (
              <div key={bIdx} className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100 font-medium drop-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <QuoteButton
              productName={slides[currentSlide].title}
              className="px-5 py-3 text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              variant="primary"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Get Instant Quotation</span>
              </span>
            </QuoteButton>

            <Link
              href="/calculator"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm border border-white/30 backdrop-blur-md transition-all active:scale-95 shadow-md"
            >
              <Calculator className="w-4 h-4 text-emerald-300" />
              <span>CFM Calculator</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows & Indicators */}
      <div className="absolute bottom-5 right-6 z-30 flex items-center gap-2.5">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-9 h-9 rounded-full bg-slate-900/70 hover:bg-emerald-600 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                currentSlide === idx ? 'w-7 bg-emerald-400' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-9 h-9 rounded-full bg-slate-900/70 hover:bg-emerald-600 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
