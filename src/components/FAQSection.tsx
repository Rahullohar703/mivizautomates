import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ease = [0.2, 0, 0, 1] as const;

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with any growth-focused business — service companies, e-commerce brands, SaaS startups, agencies, and more. Our systems are adaptable to any industry because the fundamentals of lead generation and automation are universal.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients start seeing qualified inquiries within the first 2–4 weeks after the system is installed. The full compound effect — where leads flow consistently without manual effort — typically kicks in within 60–90 days.",
  },
  {
    q: "Do I need to create content myself?",
    a: "No. Our Content & Ad Engine handles content creation, distribution, and amplification using AI-powered workflows. We set up the system, and it runs with minimal input from your side.",
  },
  {
    q: "What's included in the strategy call?",
    a: "The strategy call is a free 30-minute session where we audit your current lead generation process, identify gaps, and map out a custom growth system tailored to your business. No obligation — it's a genuine strategy session.",
  },
  {
    q: "Do you handle CRM and follow-up automation?",
    a: "Yes. Our Lead Acquisition System includes full CRM setup, email automation, follow-up sequences, and booking automation. Every lead is captured, nurtured, and moved through your pipeline automatically.",
  },
  {
    q: "What if I already have a website and social media?",
    a: "Great — we work with what you have. We integrate our systems into your existing digital presence, optimizing and automating what's already there while adding the missing infrastructure for consistent lead generation.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-spacing">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">FAQ</p>
        <h2 className="heading-section">
          Frequently asked <span className="text-gradient">questions.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05, ease }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card !p-0 border-none rounded-2xl overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-sm font-semibold text-foreground hover:no-underline hover:bg-primary/[0.03] transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
