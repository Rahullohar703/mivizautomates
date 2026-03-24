import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const deliverables = [
  "Content engine setup",
  "Lead acquisition system",
  "CRM automation",
  "Workflow automation",
];

const OfferSection = () => (
  <section className="section-spacing relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/60 to-muted/40 pointer-events-none" />
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <p className="text-mono-label mb-4">The Offer</p>
        <h2 className="heading-section mb-6">Install your growth system.</h2>
        <p className="text-body">
          This is a system installation, not ongoing marketing services.
          We build it, hand it over, and you own it.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05, ease }}
        className="glass-card max-w-md mx-auto"
      >
        <p className="text-mono-label mb-6">Deliverables</p>
        <ul className="space-y-3 mb-8">
          {deliverables.map((d) => (
            <li key={d} className="flex items-center gap-3 text-sm text-foreground/70">
              <span className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-primary" />
              </span>
              {d}
            </li>
          ))}
        </ul>
        <div className="pt-6 border-t border-primary/5">
          <p className="text-sm text-muted-foreground font-mono text-center">
            Implementation available through a strategy call.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
