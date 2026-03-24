import { motion } from "framer-motion";
import { Search, Cog, Rocket, BarChart3 } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const steps = [
  { num: "01", title: "Strategy & Architecture", desc: "Audit your current systems and design a growth architecture tailored to your business.", icon: Search },
  { num: "02", title: "Automation Setup", desc: "Install CRM, follow-up sequences, and booking systems.", icon: Cog },
  { num: "03", title: "Lead Generation Systems", desc: "Deploy content engine and lead capture infrastructure.", icon: Rocket },
  { num: "04", title: "Optimization", desc: "Monitor, test, and refine for maximum conversion.", icon: BarChart3 },
];

const ProcessSection = () => (
  <section id="process" className="section-spacing relative overflow-hidden">
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">Implementation</p>
        <h2 className="heading-section">
          How we <span className="text-gradient">install</span> the system.
        </h2>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute top-7 left-0 right-0 h-px overflow-hidden">
          <motion.div
            className="h-full w-full"
            style={{
              background: "linear-gradient(90deg, hsl(var(--primary) / 0.05), hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.05))",
            }}
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease }}
          />
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative"
            >
              <div className="relative mb-4">
                <motion.div
                  className="w-14 h-14 rounded-2xl border border-primary/20 flex items-center justify-center relative z-10"
                  style={{
                    background: "hsl(var(--card))",
                    boxShadow: "0 0 30px -8px hsl(var(--primary) / 0.3)",
                  }}
                  whileHover={{ rotate: 5, scale: 1.08, transition: { duration: 0.2 } }}
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary z-20"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                />
              </div>
              <span className="text-mono-label !text-primary mb-2 block">{step.num}</span>
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
