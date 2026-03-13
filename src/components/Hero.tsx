import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import myselfPhoto from "@/assets/myself.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center noc-grid-bg overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="w-32 h-40 mx-auto mb-6 rounded-xl overflow-hidden ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
            <img src={myselfPhoto} alt="Mehrab Hossan Mahin" className="w-full h-full object-cover object-top" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border noc-border-glow bg-secondary/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-noc-green animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              System Online — All Services Operational
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Network Operations Engineer</span>
            <br />
            <span className="text-primary font-mono text-2xl sm:text-3xl lg:text-4xl font-medium">
              ISP & Infrastructure Specialist
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-4">
            3+ years building and maintaining resilient ISP infrastructure.
            Currently pursuing BSE in Computer Science.
          </p>

          <p className="text-sm font-mono text-muted-foreground/70 mb-10">
            ~ Designing networks that never sleep ~
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors noc-glow"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-muted-foreground animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
