import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, TrendingUp, Clock, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts";

// Mock data for demonstration
const dailyData = [
  { date: "Mon", focusTime: 120, goal: 150 },
  { date: "Tue", focusTime: 145, goal: 150 },
  { date: "Wed", focusTime: 98, goal: 150 },
  { date: "Thu", focusTime: 167, goal: 150 },
  { date: "Fri", focusTime: 143, goal: 150 },
  { date: "Sat", focusTime: 89, goal: 150 },
  { date: "Sun", focusTime: 125, goal: 150 },
];

const weeklyData = [
  { week: "Week 1", focusTime: 780, sessions: 32 },
  { week: "Week 2", focusTime: 845, sessions: 35 },
  { week: "Week 3", focusTime: 723, sessions: 29 },
  { week: "Week 4", focusTime: 912, sessions: 38 },
];

const monthlyData = [
  { month: "Aug", focusTime: 2890, sessions: 118 },
  { month: "Sep", focusTime: 3245, sessions: 134 },
  { month: "Oct", focusTime: 3567, sessions: 145 },
  { month: "Nov", focusTime: 3123, sessions: 128 },
];

const chartConfig = {
  focusTime: {
    label: "Focus Time (min)",
    color: "hsl(var(--primary))",
  },
  goal: {
    label: "Goal",
    color: "hsl(var(--muted-foreground))",
  },
  sessions: {
    label: "Sessions",
    color: "hsl(var(--accent))",
  },
};

export default function Statistics() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("daily");

  const totalFocusTime = monthlyData.reduce((acc, curr) => acc + curr.focusTime, 0);
  const avgDailyTime = Math.round(dailyData.reduce((acc, curr) => acc + curr.focusTime, 0) / dailyData.length);
  const totalSessions = monthlyData.reduce((acc, curr) => acc + curr.sessions, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                className="hover:bg-accent"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold gradient-text">Statistics</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
          <Card className="transition-smooth hover:scale-105 hover:shadow-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Focus Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold gradient-text">{Math.round(totalFocusTime / 60)}h {totalFocusTime % 60}m</div>
              <p className="text-xs text-muted-foreground">Last 4 months</p>
            </CardContent>
          </Card>

          <Card className="transition-smooth hover:scale-105 hover:shadow-glow" style={{ animationDelay: "100ms" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold gradient-text">{avgDailyTime} min</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card className="transition-smooth hover:scale-105 hover:shadow-glow" style={{ animationDelay: "200ms" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold gradient-text">{totalSessions}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <TabsList className="grid w-full md:w-auto grid-cols-3 mb-6">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Focus Time</CardTitle>
                <CardDescription>Your focus time vs daily goal (minutes)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dailyData}>
                      <defs>
                        <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis 
                        dataKey="date" 
                        className="text-xs"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <YAxis 
                        className="text-xs"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="focusTime"
                        stroke="hsl(var(--primary))"
                        fillOpacity={1}
                        fill="url(#colorFocus)"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="goal"
                        stroke="hsl(var(--muted-foreground))"
                        strokeDasharray="5 5"
                        strokeWidth={2}
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Focus Time</CardTitle>
                <CardDescription>Total focus time per week (minutes)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis 
                        dataKey="week" 
                        className="text-xs"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <YAxis 
                        className="text-xs"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar
                        dataKey="focusTime"
                        fill="hsl(var(--primary))"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Sessions</CardTitle>
                <CardDescription>Number of focus sessions per week</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis 
                        dataKey="week" 
                        className="text-xs"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <YAxis 
                        className="text-xs"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="sessions"
                        stroke="hsl(var(--accent))"
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--accent))", r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Focus Time</CardTitle>
                <CardDescription>Total focus time per month (minutes)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData}>
                      <defs>
                        <linearGradient id="colorFocusMonth" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis 
                        dataKey="month" 
                        className="text-xs"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <YAxis 
                        className="text-xs"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="focusTime"
                        stroke="hsl(var(--primary))"
                        fillOpacity={1}
                        fill="url(#colorFocusMonth)"
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Sessions Trend</CardTitle>
                <CardDescription>Number of focus sessions per month</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis 
                        dataKey="month" 
                        className="text-xs"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <YAxis 
                        className="text-xs"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar
                        dataKey="sessions"
                        fill="hsl(var(--accent))"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
