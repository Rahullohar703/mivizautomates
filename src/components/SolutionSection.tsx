import { motion } from "framer-motion";
import { FileText, Target, MessageSquare, CalendarCheck, UserCheck } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const steps = [
  { id: "01", label: "Content Engine", desc: "Generate consistent attention", icon: FileText },
  { id: "02", label: "Lead Capture", desc: "Automated lead collection", icon: Target },
  { id: "03", label: "Automated Follow-Up", desc: "Nurture without manual effort", icon: MessageSquare },
  { id: "04", label: "Consultation Booking", desc: "Calendar integration", icon: CalendarCheck },
  { id: "05", label: "Client Acquisition", desc: "Convert to paying clients", icon: UserCheck },
];

const SolutionSection = () => (
  <section id="system" className="section-spacing relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/60 to-muted/40 pointer-events-none" />
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">The Solution</p>
        <h2 className="heading-section mb-6">The Mivizhub Growth System</h2>
        <p className="text-body">
          A complete infrastructure installation. Not marketing services.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease }}
            className="relative flex items-start gap-6 pb-10 last:pb-0"
          >
            {/* Animated beam line */}
            {i < steps.length - 1 && (
              <div className="absolute left-[23px] top-12 bottom-0 w-px overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  style={{
                    background: "linear-gradient(to bottom, hsl(221 83% 53% / 0.3), hsl(221 83% 53% / 0.05))",
                  }}
                  initial={{ scaleY: 0, transformOrigin: "top" }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.3, ease }}
                />
              </div>
            )}
            {/* Step indicator with glow */}
            <motion.div
              className="w-12 h-12 rounded-2xl bg-background border border-primary/10 flex items-center justify-center shrink-0 relative z-10"
              style={{ boxShadow: "var(--shadow-sm), 0 0 20px -5px hsl(221 83% 53% / 0.15)" }}
              whileInView={{ borderColor: "hsl(221 83% 53% / 0.2)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
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
