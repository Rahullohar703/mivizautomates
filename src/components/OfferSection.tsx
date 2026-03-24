import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const deliverables = [
  "Content & ad engine setup",
  "Lead acquisition system",
  "CRM & follow-up automation",
  "Workflow automation",
  "Referral system",
  "Analytics dashboard",
];

const OfferSection = () => (
  <section className="section-spacing relative overflow-hidden">
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <p className="text-mono-label mb-4">The Offer</p>
        <h2 className="heading-section mb-6">
          Install your <span className="text-gradient">growth system.</span>
        </h2>
        <p className="text-body">
          This is a system installation, not ongoing marketing services.
          We build it, hand it over, and you own it.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05, ease }}
        className="glass-card max-w-md mx-auto relative"
      >
        {/* Glow behind card */}
        <div className="absolute -inset-px rounded-[24px] bg-gradient-to-b from-primary/20 via-transparent to-cyan/10 -z-10 blur-xl opacity-50" />
        
        <p className="text-mono-label !text-primary mb-6">Deliverables</p>
        <ul className="space-y-3 mb-8">
          {deliverables.map((d) => (
            <li key={d} className="flex items-center gap-3 text-sm text-foreground/80">
              <span className="w-6 h-6 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-primary" />
              </span>
              {d}
            </li>
          ))}
        </ul>
        <div className="pt-6 border-t border-foreground/5">
          <p className="text-sm text-muted-foreground font-mono text-center">
            Implementation starts with a strategy call.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
