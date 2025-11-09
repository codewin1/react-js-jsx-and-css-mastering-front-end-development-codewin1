import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, RotateCcw } from "lucide-react";

export function FocusTimer() {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const progress = ((25 * 60 - time) / (25 * 60)) * 100;

  return (
    <Card className="p-8 md:p-12 relative overflow-hidden transition-smooth hover:shadow-glow">
      {/* Progress background */}
      <div
        className="absolute inset-0 gradient-primary opacity-10 transition-all duration-1000"
        style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
      />

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">
            Focus Session
          </h3>
          <div className="text-6xl md:text-8xl font-bold gradient-text mb-8 tabular-nums">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={toggleTimer}
            size="lg"
            className="transition-smooth hover:scale-105 hover:shadow-glow"
          >
            {isActive ? (
              <>
                <Pause className="mr-2 h-5 w-5" />
                Pause
              </>
            ) : (
              <>
                <Play className="mr-2 h-5 w-5" />
                Start
              </>
            )}
          </Button>
          <Button
            onClick={resetTimer}
            size="lg"
            variant="outline"
            className="transition-smooth hover:scale-105"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Reset
          </Button>
        </div>
      </div>
    </Card>
  );
}
