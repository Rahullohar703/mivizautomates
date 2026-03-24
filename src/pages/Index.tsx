import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import InsightSection from "@/components/InsightSection";
import SolutionSection from "@/components/SolutionSection";
import BreakdownSection from "@/components/BreakdownSection";
import BenefitsSection from "@/components/BenefitsSection";
import AudienceSection from "@/components/AudienceSection";
import ProcessSection from "@/components/ProcessSection";
import FounderSection from "@/components/FounderSection";
import FAQSection from "@/components/FAQSection";
import OfferSection from "@/components/OfferSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
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
    </main>
    <Footer />
  </>
);

export default Index;
