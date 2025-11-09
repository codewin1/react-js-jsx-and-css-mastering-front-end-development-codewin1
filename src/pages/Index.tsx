import { ThemeToggle } from "@/components/ThemeToggle";
import { FocusTimer } from "@/components/FocusTimer";
import { StatsCard } from "@/components/StatsCard";
import { Target, Zap, TrendingUp, Lock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="p-2 rounded-xl gradient-primary">
              <Lock className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold gradient-text">Lock-in</span>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Time to{" "}
            <span className="gradient-text">Lock In</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
            Stay focused, track your productivity, and achieve your goals with deep work sessions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <StatsCard icon={Target} label="Today's Focus" value="2.5h" delay={100} />
          <StatsCard icon={Zap} label="Streak" value="7 days" delay={200} />
          <StatsCard icon={TrendingUp} label="This Week" value="18.5h" delay={300} />
        </div>

        {/* Focus Timer */}
        <div className="max-w-2xl mx-auto mb-16 animate-scale-in" style={{ animationDelay: "400ms" }}>
          <FocusTimer />
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
          <div className="inline-flex flex-col sm:flex-row gap-4 p-8 rounded-2xl gradient-hero backdrop-blur-sm border border-border/20">
            <Button 
              size="lg" 
              className="transition-smooth hover:scale-105 hover:shadow-glow"
              onClick={() => navigate("/statistics")}
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              View Statistics
            </Button>
            <Button size="lg" variant="outline" className="transition-smooth hover:scale-105">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 mt-24">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Built for focused minds. Stay locked in.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
