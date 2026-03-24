import { motion } from "framer-motion";
import { RefreshCw, Diamond, List, X, TrendingDown, Zap } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const relies = [
  { icon: RefreshCw, label: "Referrals only" },
  { icon: Diamond, label: "Inconsistent marketing" },
  { icon: List, label: "Manual follow-ups" },
];

const leads = [
  { icon: X, label: "Lost leads", color: "text-destructive" },
  { icon: TrendingDown, label: "Slow growth", color: "text-destructive" },
  { icon: Zap, label: "Chaotic workflows", color: "text-destructive" },
];

const ProblemSection = () => (
  <section className="section-spacing relative overflow-hidden">
    {/* Subtle background */}
    <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/60 to-muted/40 pointer-events-none" />
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">The Problem</p>
        <h2 className="heading-section mb-6">
          Most construction businesses grow unpredictably.
        </h2>
        <p className="text-body">
          Growth is left to chance. Projects come from word of mouth, marketing
          is inconsistent, and follow-ups are manual.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease }}
          className="glass-card"
        >
          <p className="text-mono-label mb-6">Most firms rely on</p>
          <ul className="space-y-4">
            {relies.map((r) => (
              <li key={r.label} className="flex items-center gap-3 text-body-sm">
                <span className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                  <r.icon className="w-4 h-4 text-muted-foreground" />
                </span>
                {r.label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="glass-card"
        >
          <p className="text-mono-label mb-6">Which leads to</p>
          <ul className="space-y-4">
            {leads.map((l) => (
              <li key={l.label} className="flex items-center gap-3 text-body-sm">
                <span className="w-9 h-9 rounded-xl bg-destructive/5 flex items-center justify-center shrink-0">
                  <l.icon className="w-4 h-4 text-destructive" />
                </span>
                {l.label}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
