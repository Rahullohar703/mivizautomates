import { motion } from "framer-motion";
import { useMemo } from "react";
import { ArrowRight } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const FloatingDots = () => {
  const dots = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 2,
    })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.05, 0.3, 0.05],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const CTASection = () => (
  <section id="cta" className="section-spacing relative overflow-hidden">
    {/* Aurora effect */}
    <div className="aurora-bg opacity-50" />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
    <FloatingDots />

    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="heading-display mb-6">
          Stop relying on referrals.
          <br />
          <span className="text-gradient">Install a growth system.</span>
        </h2>
        <p className="text-body max-w-[500px] mx-auto mb-10">
          Build a system that consistently generates and converts leads — on autopilot.
        </p>
        <a
          href="https://calendly.com/mivizhub/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg !px-10 !py-5 group"
        >
          Book a strategy call
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
