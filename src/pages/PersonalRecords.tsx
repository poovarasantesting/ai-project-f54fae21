import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, Trophy, Calendar, Dumbbell } from "lucide-react";

export default function PersonalRecords() {
  // Mock data
  const strengthRecords = [
    {
      id: 1,
      exercise: "Bench Press",
      value: "100 kg",
      date: "Apr 10, 2025",
      previousValue: "95 kg",
      improvement: "5 kg",
    },
    {
      id: 2,
      exercise: "Squat",
      value: "140 kg",
      date: "Apr 15, 2025",
      previousValue: "130 kg",
      improvement: "10 kg",
    },
    {
      id: 3,
      exercise: "Deadlift",
      value: "160 kg",
      date: "Apr 5, 2025",
      previousValue: "150 kg",
      improvement: "10 kg",
    },
    {
      id: 4,
      exercise: "Overhead Press",
      value: "65 kg",
      date: "Apr 12, 2025",
      previousValue: "60 kg",
      improvement: "5 kg",
    },
    {
      id: 5,
      exercise: "Pull Up",
      value: "15 reps",
      date: "Apr 8, 2025",
      previousValue: "12 reps",
      improvement: "3 reps",
    },
    {
      id: 6,
      exercise: "Barbell Row",
      value: "90 kg",
      date: "Apr 20, 2025",
      previousValue: "85 kg",
      improvement: "5 kg",
    },
  ];

  const cardioRecords = [
    {
      id: 1,
      exercise: "5k Run",
      value: "22:30",
      date: "Apr 18, 2025",
      previousValue: "23:45",
      improvement: "1:15",
    },
    {
      id: 2,
      exercise: "10k Run",
      value: "48:20",
      date: "Apr 2, 2025",
      previousValue: "50:10",
      improvement: "1:50",
    },
    {
      id: 3,
      exercise: "1 Mile Run",
      value: "6:15",
      date: "Apr 14, 2025",
      previousValue: "6:30",
      improvement: "0:15",
    },
    {
      id: 4,
      exercise: "400m Sprint",
      value: "1:05",
      date: "Apr 22, 2025",
      previousValue: "1:10",
      improvement: "0:05",
    },
  ];

  const enduranceRecords = [
    {
      id: 1,
      exercise: "Plank",
      value: "3:30",
      date: "Apr 19, 2025",
      previousValue: "3:00",
      improvement: "0:30",
    },
    {
      id: 2,
      exercise: "Wall Sit",
      value: "2:45",
      date: "Apr 17, 2025",
      previousValue: "2:15",
      improvement: "0:30",
    },
    {
      id: 3,
      exercise: "Jump Rope",
      value: "10:00",
      date: "Apr 11, 2025",
      previousValue: "8:30",
      improvement: "1:30",
    },
  ];

  const renderRecordCard = (record: any) => (
    <Card key={record.id}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{record.exercise}</CardTitle>
          <Badge className="bg-amber-100 text-amber-800 border-amber-200" variant="outline">
            <Trophy className="h-3 w-3 mr-1" /> PR
          </Badge>
        </div>
        <CardDescription className="flex items-center">
          <Calendar className="h-3 w-3 mr-1" /> {record.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{record.value}</div>
        <div className="flex items-center text-sm text-emerald-600 mt-1">
          <ArrowUp className="h-3 w-3 mr-1" />
          <span>+{record.improvement} from {record.previousValue}</span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Personal Records</h1>
      </div>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Card className="md:col-span-3">
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <Dumbbell className="h-5 w-5 mr-2 text-primary" />
              <CardTitle>Your PRs At A Glance</CardTitle>
            </div>
            <CardDescription>
              Track your all-time personal bests across different exercises
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="strength" className="space-y-4">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="strength">Strength</TabsTrigger>
                <TabsTrigger value="cardio">Cardio</TabsTrigger>
                <TabsTrigger value="endurance">Endurance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="strength" className="space-y-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {strengthRecords.map(renderRecordCard)}
                </div>
              </TabsContent>
              
              <TabsContent value="cardio" className="space-y-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {cardioRecords.map(renderRecordCard)}
                </div>
              </TabsContent>
              
              <TabsContent value="endurance" className="space-y-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {enduranceRecords.map(renderRecordCard)}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}