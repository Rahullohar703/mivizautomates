
const Footer = () => (
  <footer className="relative border-t border-foreground/5 py-12">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="section-container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold tracking-tight text-foreground">Mivizhub</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#system" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="#cta" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <a href="https://www.linkedin.com/in/rahullohar703/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      <span className="text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Mivizhub
      </span>
    </div>
  </footer>
);

export default Footer;
