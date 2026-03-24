import { motion } from "framer-motion";
import { Target, Lightbulb, Wrench } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const values = [
  {
    icon: Target,
    title: "Business-First Thinking",
    desc: "Every strategy starts with a deep understanding of how your business actually wins customers — not generic marketing playbooks.",
  },
  {
    icon: Wrench,
    title: "Hands-On Experience",
    desc: "Our team has built and scaled businesses across industries. We've lived the challenges of inconsistent pipelines, manual follow-ups, and lost leads.",
  },
  {
    icon: Lightbulb,
    title: "Systems Over Tactics",
    desc: "We don't do one-off campaigns. We install repeatable infrastructure — content engines, CRM workflows, and automation — so growth compounds over time.",
  },
];

const FounderSection = () => (
  <section id="about" className="section-spacing">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">About</p>
        <h2 className="heading-section mb-6">
          Built by people who <span className="text-gradient">build.</span>
        </h2>
        <p className="text-body max-w-2xl mx-auto">
          The Mivizhub team comes from diverse business backgrounds. 
          We understand growth because we've built it — from startups to established enterprises. 
          That first-hand experience shapes every system we design: practical, precise, 
          and built for how businesses actually operate.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="glass-card group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <v.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="heading-card mb-2">{v.title}</h3>
            <p className="text-body-sm">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FounderSection;
