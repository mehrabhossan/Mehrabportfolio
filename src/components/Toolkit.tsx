import { motion } from "framer-motion";
import { toolkit } from "@/data/portfolio";
import {
  Router,
  Network,
  Code,
  Activity,
  Search,
  Terminal,
  Settings,
  BarChart3,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  router: <Router size={28} />,
  network: <Network size={28} />,
  code: <Code size={28} />,
  activity: <Activity size={28} />,
  search: <Search size={28} />,
  terminal: <Terminal size={28} />,
  settings: <Settings size={28} />,
  "bar-chart": <BarChart3 size={28} />,
};

const Toolkit = () => {
  return (
    <section id="toolkit" className="py-24 noc-grid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">
            // Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Technical Toolkit</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {toolkit.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:noc-border-glow hover:noc-glow transition-all duration-300 group"
            >
              <span className="text-muted-foreground group-hover:text-primary transition-colors">
                {iconMap[tool.icon]}
              </span>
              <span className="text-sm font-semibold text-foreground text-center">{tool.name}</span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
