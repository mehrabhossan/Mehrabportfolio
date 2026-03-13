import { motion } from "framer-motion";
import { timeline } from "@/data/portfolio";
import { Briefcase, GraduationCap, Zap } from "lucide-react";

const typeIcons: Record<string, React.ReactNode> = {
  current: <Zap size={16} />,
  previous: <Briefcase size={16} />,
  education: <GraduationCap size={16} />,
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">// Career</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Experience Timeline</h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-12">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div
                  className={`absolute left-4 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    entry.type === "current"
                      ? "border-primary bg-primary/20 text-primary"
                      : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  {typeIcons[entry.type]}
                </div>

                <span className="text-xs font-mono text-primary mb-1 block">{entry.year}</span>
                <h3 className="text-lg font-bold text-foreground">{entry.title}</h3>
                <p className="text-sm font-mono text-muted-foreground mb-2">{entry.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{entry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
