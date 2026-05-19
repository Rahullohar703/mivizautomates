import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const ProblemSection = React.lazy(() => import("@/components/ProblemSection"));
const InsightSection = React.lazy(() => import("@/components/InsightSection"));
const SolutionSection = React.lazy(() => import("@/components/SolutionSection"));
const BreakdownSection = React.lazy(() => import("@/components/BreakdownSection"));
const BenefitsSection = React.lazy(() => import("@/components/BenefitsSection"));
const AudienceSection = React.lazy(() => import("@/components/AudienceSection"));
const ProcessSection = React.lazy(() => import("@/components/ProcessSection"));
const FounderSection = React.lazy(() => import("@/components/FounderSection"));
const FAQSection = React.lazy(() => import("@/components/FAQSection"));
const OfferSection = React.lazy(() => import("@/components/OfferSection"));
const CTASection = React.lazy(() => import("@/components/CTASection"));

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <Suspense fallback={<div className="h-24" />}>
        <ProblemSection />
        <InsightSection />
        <SolutionSection />
        <BreakdownSection />
        <BenefitsSection />
        <AudienceSection />
        <ProcessSection />
        <FounderSection />
        <FAQSection />
        <OfferSection />
        <CTASection />
      </Suspense>
    </main>
    <Footer />
  </>
);

export default Index;
