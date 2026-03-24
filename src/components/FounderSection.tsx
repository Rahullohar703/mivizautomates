import { motion } from "framer-motion";
import { Target, Lightbulb, Wrench } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const values = [
  {
    icon: Target,
    title: "Industry-First Thinking",
    desc: "Every strategy we design starts with a deep understanding of how construction and design businesses actually win projects — not generic marketing playbooks.",
  },
  {
    icon: Wrench,
    title: "Hands-On Experience",
    desc: "Our founding team has worked inside architecture studios and on construction sites. We've lived the challenges of inconsistent pipelines, manual follow-ups, and lost leads.",
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
        <h2 className="heading-section mb-6">Built by people who build.</h2>
        <p className="text-body max-w-2xl mx-auto">
          The Mivizhub team comes from architecture and construction backgrounds. 
          We understand the industry because we've worked in it — from drafting boards to job sites. 
          That first-hand experience shapes every system we design: practical, precise, 
          and built for how construction businesses actually operate. We're not outside consultants 
          guessing at your problems — we've lived them, and we've engineered the solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease }}
            className="glass-card group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
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
