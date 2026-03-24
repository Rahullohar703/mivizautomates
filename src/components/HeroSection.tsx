import { motion } from "framer-motion";

const ease = [0.2, 0, 0, 1] as const;

const nodes = [
  { label: "Content/Ads", x: 125, y: 50 },
  { label: "Leads", x: 375, y: 50 },
  { label: "Automation", x: 375, y: 220 },
  { label: "Clients", x: 125, y: 220 },
];

const connections = [
  { d: "M200 65 L300 65", delay: 0 },
  { d: "M400 100 L400 190", delay: 0.5 },
  { d: "M300 235 L200 235", delay: 1 },
];

const SystemDiagram = () => (
  <div className="relative w-full max-w-2xl mx-auto aspect-[5/3]">
    {/* Glow behind diagram */}
    <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
    <svg viewBox="0 0 500 285" fill="none" className="w-full h-full relative z-10">
      {/* Glowing connection lines */}
      {connections.map((conn, i) => (
        <g key={i}>
          {/* Glow layer */}
          <motion.path
            d={conn.d}
            stroke="hsl(221,83%,53%)"
            strokeWidth="6"
            strokeDasharray="6 4"
            opacity={0.15}
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: conn.delay }}
          />
          {/* Main line */}
          <motion.path
            d={conn.d}
            stroke="hsl(221,83%,53%)"
            strokeWidth="2"
            strokeDasharray="6 4"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: conn.delay }}
          />
        </g>
      ))}
      {/* Nodes with glow */}
      {nodes.map((node, i) => (
        <motion.g
          key={node.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.12, ease }}
        >
          {/* Node glow */}
          <rect
            x={node.x - 67}
            y={node.y - 27}
            width="134"
            height="54"
            rx="16"
            fill="hsl(221,83%,53%)"
            opacity="0.06"
          />
          <rect
            x={node.x - 65}
            y={node.y - 25}
            width="130"
            height="50"
            rx="14"
            fill="white"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
            style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))" }}
          />
          <text
            x={node.x}
            y={node.y + 5}
            textAnchor="middle"
            className="text-xs font-medium"
            fill="hsl(240,5%,26%)"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500 }}
          >
            {node.label}
          </text>
        </motion.g>
      ))}
      {/* Animated traveling dot */}
      <motion.circle
        r="4"
        fill="hsl(221,83%,53%)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M200,65 L300,65 L400,65 L400,100 L400,190 L400,235 L300,235 L200,235"
        />
      </motion.circle>
      {/* Glow for traveling dot */}
      <motion.circle
        r="10"
        fill="hsl(221,83%,53%)"
        opacity={0.2}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0.2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M200,65 L300,65 L400,65 L400,100 L400,190 L400,235 L300,235 L200,235"
        />
      </motion.circle>
    </svg>
  </div>
);

const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
    {/* Dot grid background */}
    <div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
    {/* Gradient orbs */}
    <motion.div
      className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(circle, hsl(221 83% 53% / 0.08) 0%, transparent 70%)",
      }}
      animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(circle, hsl(221 83% 53% / 0.06) 0%, transparent 70%)",
      }}
      animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="section-container relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 inline-flex"
        >
          <span className="badge-shine inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-mono-label !text-primary">Growth Infrastructure</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
          className="text-4xl md:text-6xl font-semibold tracking-tighter text-shimmer mb-6"
          style={{ lineHeight: 1.1, letterSpacing: "-0.03em" }}
        >
          Growth systems for design
          <br />
          and construction firms.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-body max-w-[600px] mx-auto mb-10"
        >
          Install a system that consistently generates project inquiries,
          captures leads, and automates follow-ups.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <a href="https://calendly.com/mivizhub/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a strategy call</a>
          <a href="#system" className="btn-secondary">See how the system works</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
        >
          <SystemDiagram />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
