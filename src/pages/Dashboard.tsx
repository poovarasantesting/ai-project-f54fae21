import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart } from "@/components/Charts";
import WorkoutSummary from "@/components/WorkoutSummary";
import RecentWorkouts from "@/components/RecentWorkouts";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <WorkoutSummary
          title="Total Workouts"
          value="32"
          change="+2 from last month"
          trend="up"
        />
        <WorkoutSummary
          title="Active Days"
          value="16"
          change="+4 from last month"
          trend="up"
        />
        <WorkoutSummary
          title="Weekly Average"
          value="4.5"
          change="+0.8 from last month"
          trend="up"
        />
        <WorkoutSummary
          title="Workout Streak"
          value="6 days"
          change="Personal best: 12"
          trend="neutral"
        />
      </div>
      
      <Tabs defaultValue="progress" className="space-y-4">
        <TabsList>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="volume">Volume</TabsTrigger>
        </TabsList>
        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Strength Progress</CardTitle>
              <CardDescription>
                View your strength gains over time
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <LineChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="volume" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Workout Volume</CardTitle>
              <CardDescription>
                Total volume lifted by week
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <BarChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Workouts</CardTitle>
          <CardDescription>
            Your last 5 workout sessions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentWorkouts />
        </CardContent>
      </Card>
    </div>
  );
}