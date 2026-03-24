import { motion } from "framer-motion";
import { ArrowRight, Zap, LayoutGrid, TrendingUp } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const benefits = [
  { label: "Consistent project inquiries", icon: ArrowRight, stat: "3×", statLabel: "more inquiries" },
  { label: "Faster lead response", icon: Zap, stat: "<5m", statLabel: "response time" },
  { label: "Organized operations", icon: LayoutGrid, stat: "100%", statLabel: "automated" },
  { label: "Scalable growth", icon: TrendingUp, stat: "∞", statLabel: "potential" },
];

const BenefitsSection = () => (
  <section className="section-spacing relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/60 to-muted/40 pointer-events-none" />
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">Results</p>
        <h2 className="heading-section">
          What happens when your business runs on systems.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease }}
            className="glow-card group"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-semibold tracking-tighter text-primary">{b.stat}</span>
              <span className="text-xs text-muted-foreground font-mono">{b.statLabel}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <b.icon className="w-5 h-5 text-primary" />
              </span>
              <span className="heading-card !text-lg">{b.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
