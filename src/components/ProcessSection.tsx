import { motion } from "framer-motion";
import { Search, Cog, Rocket, BarChart3 } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const steps = [
  { num: "01", title: "Strategy & Architecture", desc: "Audit your current systems and design the growth architecture.", icon: Search },
  { num: "02", title: "Automation Setup", desc: "Install CRM, follow-up sequences, and booking systems.", icon: Cog },
  { num: "03", title: "Lead Generation Systems", desc: "Deploy content engine and lead capture infrastructure.", icon: Rocket },
  { num: "04", title: "Optimization", desc: "Monitor, test, and refine for maximum conversion.", icon: BarChart3 },
];

const ProcessSection = () => (
  <section id="process" className="section-spacing relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/60 to-muted/40 pointer-events-none" />
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">Implementation</p>
        <h2 className="heading-section">How we install the system.</h2>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Animated connecting beam */}
        <div className="hidden md:block absolute top-7 left-0 right-0 h-px overflow-hidden">
          <motion.div
            className="h-full w-full"
            style={{
              background: "linear-gradient(90deg, hsl(221 83% 53% / 0.05), hsl(221 83% 53% / 0.3), hsl(221 83% 53% / 0.05))",
            }}
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
          />
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease }}
              className="relative"
            >
              {/* Step indicator with pulsing dot */}
              <div className="relative mb-4">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-background border border-primary/10 flex items-center justify-center relative z-10"
                  style={{ boxShadow: "var(--shadow-sm), 0 0 20px -8px hsl(221 83% 53% / 0.2)" }}
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </motion.div>
                {/* Pulsing dot */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary z-20"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
              <span className="text-mono-label text-primary mb-2 block">{step.num}</span>
              <h3 className="heading-card !text-lg mb-2">{step.title}</h3>
              <p className="text-body-sm !text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
