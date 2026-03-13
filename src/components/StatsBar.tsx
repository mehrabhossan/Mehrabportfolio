import { ShieldCheck, Clock, Monitor, Server, Activity } from "lucide-react";
import { stats } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheck size={14} />,
  clock: <Clock size={14} />,
  monitor: <Monitor size={14} />,
  server: <Server size={14} />,
  activity: <Activity size={14} />,
};

const StatsBar = () => {
  const items = [...stats, ...stats]; // duplicate for infinite scroll

  return (
    <div className="w-full bg-secondary/50 border-y border-border overflow-hidden py-3">
      <div className="ticker-scroll flex items-center gap-10 whitespace-nowrap w-max">
        {items.map((stat, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-mono">
            <span className="text-primary">{iconMap[stat.icon]}</span>
            <span className="text-muted-foreground">{stat.label}</span>
            {i < items.length - 1 && (
              <span className="text-border ml-6">│</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
