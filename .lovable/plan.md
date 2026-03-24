

## Plan: Generalize Content + Modernize Design & Animations

### What Changes

**1. Content Overhaul — Make It Industry-Agnostic**

Every section currently references "construction firms," "architects," "builders," etc. All copy will be rewritten to target businesses in general:

- **Navbar**: Keep brand name "Mivizhub," update nav links
- **HeroSection**: Change headline to something like "Growth systems for ambitious businesses." Update subtext to be universal
- **ProblemSection**: Replace "construction businesses" with "businesses" — keep the pain points (referrals-only, inconsistent marketing, manual follow-ups) which are universal
- **InsightSection**: Already fairly generic, minor tweaks
- **SolutionSection**: Keep the 5-step system, remove "Mivizhub" branding specificity, make descriptions universal
- **BreakdownSection**: Keep the 4 engines, update copy to be industry-agnostic
- **BenefitsSection**: Already mostly generic, minor copy tweaks
- **AudienceSection**: Replace the 4 niche audiences with general business types (e.g., Service Businesses, E-commerce, SaaS, Agencies) with new icons and descriptions
- **ProcessSection**: Update "How we install the system" descriptions to be universal
- **FounderSection**: Remove architecture/construction references, make it about business growth expertise
- **FAQSection**: Rewrite all Q&As to be industry-agnostic
- **OfferSection**: Update deliverables copy
- **CTASection**: Generic CTA copy
- **Footer**: Keep structure, update if needed

**2. Visual & Animation Modernization**

The current design uses subtle animations and muted cards. The upgrade will include:

- **Dark-mode hero with gradient mesh**: Replace the dot-grid + simple diagram hero with a bold dark gradient hero section featuring animated gradient mesh/aurora background, larger typography, and a glowing CTA button
- **Bento grid layout** for the Breakdown section instead of a plain 2-col grid — with varied card sizes and glassmorphism effects
- **Animated gradient borders** on cards using CSS conic-gradient trick for eye-catching hover states
- **Larger, bolder typography** with gradient text effects on key headings
- **Floating 3D-like elements** using layered parallax motion effects in the hero
- **Smoother scroll-triggered animations** with staggered reveals and spring physics
- **Accent color pops**: Add a secondary accent (e.g., violet/purple) alongside the blue for more visual interest
- **Updated CSS**: New gradient utilities, animated border classes, aurora background keyframes, and modern glassmorphism tokens
- **Number counters with more visual impact** in the Benefits/Insight sections
- **CTA section**: More dramatic with animated particles and stronger gradient presence

### Technical Details

Files to modify (all 13 section components + CSS + Tailwind config):

| File | Changes |
|------|---------|
| `src/index.css` | Add aurora keyframes, animated gradient border classes, new glassmorphism tokens, gradient mesh background |
| `tailwind.config.ts` | Add new color tokens (violet accent), new animation keyframes |
| `src/components/HeroSection.tsx` | Full redesign — dark aurora hero, new copy, animated gradient text, modernized system diagram |
| `src/components/ProblemSection.tsx` | Generic copy, updated card styling |
| `src/components/InsightSection.tsx` | Minor copy tweaks, enhanced counter animation |
| `src/components/SolutionSection.tsx` | Generic copy, enhanced timeline design |
| `src/components/BreakdownSection.tsx` | Generic copy, bento-grid layout with animated borders |
| `src/components/BenefitsSection.tsx` | Generic copy, bolder stat presentation |
| `src/components/AudienceSection.tsx` | Complete rewrite — new general business audiences |
| `src/components/ProcessSection.tsx` | Generic copy, enhanced step animations |
| `src/components/FounderSection.tsx` | Generic "About" copy |
| `src/components/FAQSection.tsx` | All new generic Q&As |
| `src/components/OfferSection.tsx` | Generic deliverables |
| `src/components/CTASection.tsx` | Enhanced dramatic CTA with aurora effect |
| `src/components/Navbar.tsx` | Updated nav link labels |
| `src/components/Footer.tsx` | Minor copy updates |

This is a large change touching all content sections and styling. The structure and component architecture stays the same — only content and visual treatment changes.

