import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ease = [0.2, 0, 0, 1] as const;

const AnimatedCounter = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
};

const InsightSection = () => (
  <section className="section-spacing relative overflow-hidden">
    {/* Gradient divider bg */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-mono-label mb-4">The Insight</p>
        <h2 className="heading-section mb-6">
          Growth doesn't come from marketing.
          <br />
          It comes from systems.
        </h2>
        <p className="text-body max-w-[540px] mx-auto">
          Businesses that grow consistently don't rely on random referrals or
          sporadic ad spend. They rely on repeatable infrastructure.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1, ease }}
        className="mt-16 max-w-lg mx-auto"
      >
        {/* Animated stat */}
        <div className="text-center mb-8">
          <span className="text-5xl md:text-6xl font-semibold tracking-tighter text-primary">
            <AnimatedCounter target={85} />%
          </span>
          <p className="text-sm text-muted-foreground font-mono mt-2">
            of growth comes from systems, not referrals
          </p>
        </div>

        <div className="flex items-center justify-between text-sm font-mono text-muted-foreground">
          <span>Referrals</span>
          <span className="text-primary font-medium">Systems</span>
        </div>
        <div className="mt-3 h-3 rounded-full bg-zinc-100 overflow-hidden relative">
          {/* Glow behind bar */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent 60%, hsl(221 83% 53% / 0.2) 100%)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="h-full rounded-full relative"
            style={{
              background: "linear-gradient(90deg, hsl(221 83% 53%), hsl(221 83% 63%))",
              boxShadow: "0 0 20px hsl(221 83% 53% / 0.4)",
            }}
            initial={{ width: "0%" }}
            whileInView={{ width: "85%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground font-mono text-center">
          0% manual follow-up. 100% infrastructure.
        </p>
      </motion.div>
    </div>
  </section>
);

export default InsightSection;
