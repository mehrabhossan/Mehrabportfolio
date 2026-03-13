import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
        <Terminal size={14} className="text-primary" />
        <span>© {new Date().getFullYear()} NOC Engineer Portfolio</span>
      </div>
      <p className="text-xs font-mono text-muted-foreground/50">
        Status: <span className="text-noc-green">● All systems operational</span>
      </p>
    </div>
  </footer>
);

export default Footer;
