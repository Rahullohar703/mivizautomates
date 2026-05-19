import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const FloatingOrb = ({ className, delay = 0, colorGradient }: { className: string; delay?: number; colorGradient: string }) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{ 
      willChange: "transform", 
      transform: "translateZ(0)",
      background: colorGradient
    }}
    animate={{
      y: [-20, 20, -20],
      x: [-15, 15, -15],
      scale: [1, 1.05, 1],
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

    <FloatingOrb className="top-1/4 -left-20 w-[400px] h-[400px]" colorGradient="radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)" delay={0} />
    <FloatingOrb className="bottom-1/4 -right-20 w-[500px] h-[500px]" colorGradient="radial-gradient(circle, hsl(var(--cyan) / 0.08) 0%, transparent 70%)" delay={2} />
    <FloatingOrb className="top-1/2 left-1/2 -translate-x-1/2 w-[350px] h-[350px]" colorGradient="radial-gradient(circle, hsl(var(--violet-glow) / 0.08) 0%, transparent 70%)" delay={4} />

    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

    <div className="section-container relative z-10 pt-28 pb-16 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 inline-flex"
        >
          <span className="badge-shine inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-mono-label !text-primary !text-[11px]">Growth Infrastructure</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="heading-display mb-6"
        >
          <span className="text-gradient">Growth systems</span>
          <br />
          for ambitious businesses.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="text-body max-w-[560px] mx-auto mb-10"
        >
          Install a system that consistently generates leads,
          captures inquiries, and automates follow-ups — so you can focus on what you do best.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="https://calendly.com/mivizhub/30min" target="_blank" rel="noopener noreferrer" className="btn-primary group">
            Book a strategy call
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#system" className="btn-secondary">See how it works</a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-xl mx-auto"
        >
          {[
            { stat: "3×", label: "More qualified leads" },
            { stat: "<5min", label: "Response time" },
            { stat: "100%", label: "Automated pipeline" },
          ].map((item, i) => (
            <motion.div
              key={item.stat}
              className="glass-card !p-4 sm:!p-5 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gradient mb-1">{item.stat}</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground font-mono">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
