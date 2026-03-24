import { motion } from "framer-motion";
import { Megaphone, Users, Settings, Share2 } from "lucide-react";
import { useCallback, useRef } from "react";

const ease = [0.2, 0, 0, 1] as const;

const systems = [
  {
    id: "Component_01",
    title: "Content / Ad Engine",
    purpose: "Bring consistent inquiries.",
    icon: Megaphone,
    specs: [
      "AI-powered content creation",
      "Multi-channel distribution",
      "Amplification strategies",
    ],
    span: "md:col-span-2",
  },
  {
    id: "Component_02",
    title: "Lead Acquisition System",
    purpose: "Turn inquiries into clients.",
    icon: Users,
    specs: [
      "CRM setup & integration",
      "WhatsApp automation",
      "Automated follow-ups & booking",
    ],
    span: "",
  },
  {
    id: "Component_03",
    title: "Referral System",
    purpose: "Turn happy clients into growth channels.",
    icon: Share2,
    specs: [
      "Automated referral requests",
      "Incentive & reward tracking",
      "Partner network management",
    ],
    span: "",
  },
  {
    id: "Component_04",
    title: "Workflow System",
    purpose: "Improve efficiency and scalability.",
    icon: Settings,
    specs: [
      "Client onboarding automation",
      "Communication systems",
      "Workflow & task automation",
    ],
    span: "md:col-span-2",
  },
];

const GlowCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glow-card group ${className}`}
      style={{
        background: `radial-gradient(400px circle at var(--glow-x, 50%) var(--glow-y, 50%), hsl(221 83% 53% / 0.04), transparent 40%), hsl(var(--background))`,
      }}
    >
      {children}
    </div>
  );
};

const BreakdownSection = () => (
  <section className="section-spacing">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">System Breakdown</p>
        <h2 className="heading-section">Four core engines.</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {systems.map((sys, i) => (
          <motion.div
            key={sys.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease }}
            className={sys.span}
          >
            <GlowCard className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                  <sys.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-mono-label">{sys.id}</span>
              </div>
              <h3 className="heading-card mb-2">{sys.title}</h3>
              <p className="text-body-sm mb-6">{sys.purpose}</p>
              <ul className="space-y-2.5 mt-auto">
                {sys.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BreakdownSection;
