import { motion } from "framer-motion";
import { FileText, Target, MessageSquare, CalendarCheck, UserCheck } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const steps = [
  { id: "01", label: "Content Engine", desc: "Generate consistent attention across channels", icon: FileText },
  { id: "02", label: "Lead Capture", desc: "Automated lead collection and qualification", icon: Target },
  { id: "03", label: "Automated Follow-Up", desc: "Nurture prospects without manual effort", icon: MessageSquare },
  { id: "04", label: "Consultation Booking", desc: "Seamless calendar integration and scheduling", icon: CalendarCheck },
  { id: "05", label: "Client Acquisition", desc: "Convert qualified leads into paying clients", icon: UserCheck },
];

const SolutionSection = () => (
  <section id="system" className="section-spacing relative overflow-hidden">
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">The Solution</p>
        <h2 className="heading-section mb-6">
          The <span className="text-gradient">Growth System</span>
        </h2>
        <p className="text-body">
          A complete infrastructure installation. Not marketing services — a system you own.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
            className="relative flex items-start gap-6 pb-10 last:pb-0"
          >
            {i < steps.length - 1 && (
              <div className="absolute left-[23px] top-12 bottom-0 w-px overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  style={{
                    background: "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.05))",
                  }}
                  initial={{ scaleY: 0, transformOrigin: "top" }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.3, ease }}
                />
              </div>
            )}
            <motion.div
              className="w-12 h-12 rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 relative z-10"
              style={{
                background: "hsl(var(--card))",
                boxShadow: "0 0 20px -5px hsl(var(--primary) / 0.3)",
              }}
            >
              <step.icon className="w-5 h-5 text-primary" />
            </motion.div>
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-mono-label text-primary">{step.id}</span>
                <h3 className="heading-card !text-lg">{step.label}</h3>
              </div>
              <p className="text-body-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
