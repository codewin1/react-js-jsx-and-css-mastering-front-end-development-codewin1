import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delay?: number;
}

export function StatsCard({ icon: Icon, label, value, delay = 0 }: StatsCardProps) {
  return (
    <Card
      className="p-6 transition-smooth hover:scale-105 hover:shadow-glow animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl gradient-primary">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold gradient-text">{value}</p>
        </div>
      </div>
    </Card>
  );
}
