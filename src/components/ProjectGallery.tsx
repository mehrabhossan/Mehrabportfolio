import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { Wifi, Shield, Server } from "lucide-react";

const projectIcons: Record<string, React.ReactNode> = {
  "hotel-network": <Wifi size={20} />,
  "ielts-center": <Shield size={20} />,
  "coaching-center": <Server size={20} />,
};

const statusColors: Record<string, string> = {
  deployed: "text-noc-green",
  active: "text-noc-amber",
  completed: "text-noc-cyan",
};

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-24 noc-grid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">// Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Network Design & Deployment
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:noc-border-glow hover:noc-glow transition-all duration-300"
            >
              {/* Card header */}
              <div className="p-6 pb-4 border-b border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary">{projectIcons[project.id]}</span>
                  <span className={`text-xs font-mono uppercase tracking-wider ${statusColors[project.status]}`}>
                    ● {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-xs font-mono text-muted-foreground">{project.subtitle}</p>
              </div>

              {/* Description */}
              <div className="p-6 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="px-6 pb-4 grid grid-cols-3 gap-2">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-lg font-bold font-mono text-primary">{m.value}</p>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="px-6 pb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
