import { motion } from "framer-motion";
import { ArrowRight, Zap, LayoutGrid, TrendingUp } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const benefits = [
  { label: "Consistent lead flow", icon: ArrowRight, stat: "3×", statLabel: "more leads" },
  { label: "Instant response time", icon: Zap, stat: "<5m", statLabel: "response" },
  { label: "Fully automated operations", icon: LayoutGrid, stat: "100%", statLabel: "automated" },
  { label: "Scalable growth engine", icon: TrendingUp, stat: "∞", statLabel: "potential" },
];

const BenefitsSection = () => (
  <section className="section-spacing relative overflow-hidden">
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
          What happens when your business runs on <span className="text-gradient">systems.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="glow-card group"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl md:text-4xl font-bold tracking-tighter text-gradient">{b.stat}</span>
              <span className="text-xs text-muted-foreground font-mono">{b.statLabel}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
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
