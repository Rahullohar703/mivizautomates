import { motion } from "framer-motion";
import { Briefcase, ShoppingCart, Code2, Users } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const audiences = [
  {
    title: "Service Businesses",
    desc: "Generate a consistent pipeline of qualified leads and automate client onboarding for consulting, coaching, agencies, and professional services.",
    icon: Briefcase,
  },
  {
    title: "E-Commerce Brands",
    desc: "Scale customer acquisition with automated marketing funnels, retargeting systems, and post-purchase engagement workflows.",
    icon: ShoppingCart,
  },
  {
    title: "SaaS & Tech Companies",
    desc: "Build repeatable demand generation and trial-to-paid conversion systems that compound over time.",
    icon: Code2,
  },
  {
    title: "Agencies & Studios",
    desc: "Unify your sales and delivery pipeline with end-to-end lead generation, proposal automation, and client management systems.",
    icon: Users,
  },
];

const AudienceSection = () => (
  <section id="who" className="section-spacing">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-mono-label mb-4">Who This Is For</p>
        <h2 className="heading-section">
          Built for businesses that <span className="text-gradient">build.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
            className="glow-card group"
          >
            <motion.div
              className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
              whileHover={{ rotate: 5, scale: 1.1, transition: { duration: 0.2 } }}
            >
              <a.icon className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 className="heading-card mb-2">{a.title}</h3>
            <p className="text-body-sm">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
