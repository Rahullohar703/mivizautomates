import { motion } from "framer-motion";
import { Ruler, HardHat, Building2, Layers } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const audiences = [
  {
    title: "Architects & Interior Designers",
    desc: "Generate a consistent pipeline of high-value residential and commercial project inquiries, and attract design-conscious clients with automated consultation booking.",
    icon: Ruler,
  },
  {
    title: "Builders & Contractors",
    desc: "Systematize lead generation so your crew stays booked without chasing referrals.",
    icon: HardHat,
  },
  {
    title: "Construction Firms",
    desc: "Scale your operations with automated workflows and organized client management.",
    icon: Building2,
  },
  {
    title: "Design & Build Firms",
    desc: "Unify your design and construction pipeline with end-to-end lead generation and project management systems.",
    icon: Layers,
  },
];

const AudienceSection = () => (
  <section id="who" className="section-spacing">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">Who This Is For</p>
        <h2 className="heading-section">Built for firms that build.</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease }}
            className="glow-card group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
              <a.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="heading-card mb-2">{a.title}</h3>
            <p className="text-body-sm">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
