import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-foreground/5">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Mivizhub" className="h-12 w-12 rounded-lg" />
          <span className="text-xl font-semibold tracking-tight text-foreground">Mivizhub</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#system" className="text-sm text-muted-foreground hover:text-foreground transition-colors">System</a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a>
          <a href="#who" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Who It's For</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="https://calendly.com/mivizhub/30min" target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !px-5 !text-sm">Book a call</a>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="md:hidden overflow-hidden bg-background/90 backdrop-blur-2xl border-b border-foreground/5"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              <a href="#system" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">System</a>
              <a href="#process" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Process</a>
              <a href="#who" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Who It's For</a>
              <a href="#about" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">About</a>
              <a href="https://calendly.com/mivizhub/30min" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="btn-primary text-center !text-sm mt-2">Book a call</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
