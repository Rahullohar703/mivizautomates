import { motion } from "framer-motion";
import { useMemo } from "react";

const ease = [0.2, 0, 0, 1] as const;

const FloatingDots = () => {
  const dots = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
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
            opacity: [0.1, 0.3, 0.1],
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
    {/* Dramatic radial gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% 50%, hsl(221 83% 53% / 0.15) 0%, transparent 70%)",
      }}
    />
    <FloatingDots />

    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="heading-display mb-6 !text-white">
          Stop relying on referrals.
          <br />
          Install a growth system.
        </h2>
        <p className="text-body max-w-[500px] mx-auto mb-10 !text-zinc-400">
          Build a system that consistently generates and converts project inquiries.
        </p>
        <a
          href="https://calendly.com/mivizhub/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg !px-10 !py-5"
        >
          Book a strategy call
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
