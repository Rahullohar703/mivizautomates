import { motion } from "framer-motion";
import { Megaphone, Users, Settings, Share2 } from "lucide-react";
import { useCallback, useRef } from "react";

const ease = [0.2, 0, 0, 1] as const;

const systems = [
  {
    id: "Engine_01",
    title: "Content & Ad Engine",
    purpose: "Bring consistent inquiries from every channel.",
    icon: Megaphone,
    specs: [
      "AI-powered content creation",
      "Multi-channel distribution",
      "Paid & organic amplification",
    ],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "Engine_02",
    title: "Lead Acquisition System",
    purpose: "Turn every inquiry into a qualified opportunity.",
    icon: Users,
    specs: [
      "CRM setup & integration",
      "Automated follow-ups & booking",
      "Lead scoring & qualification",
    ],
    span: "",
  },
  {
    id: "Engine_03",
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
    id: "Engine_04",
    title: "Workflow Automation",
    purpose: "Streamline operations and scale efficiently.",
    icon: Settings,
    specs: [
      "Client onboarding automation",
      "Communication workflows",
      "Task & project management",
    ],
    span: "md:col-span-2",
  },
];

const BentoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`bento-card group ${className}`}
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
        <h2 className="heading-section">
          Four core <span className="text-gradient">engines.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {systems.map((sys, i) => (
          <motion.div
            key={sys.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className={sys.span}
          >
            <BentoCard className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <sys.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-mono-label !text-primary">{sys.id}</span>
              </div>
              <h3 className="heading-card mb-2">{sys.title}</h3>
              <p className="text-body-sm mb-6">{sys.purpose}</p>
              <ul className="space-y-2.5 mt-auto">
                {sys.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BreakdownSection;
