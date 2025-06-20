import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Eye, CalendarRange } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function WorkoutHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data
  const workouts = [
    {
      id: 1,
      date: "Apr 24, 2025",
      name: "Upper Body",
      duration: "65 min",
      exercises: 6,
      type: "strength",
      notes: "Increased bench press weight by 5kg"
    },
    {
      id: 2,
      date: "Apr 22, 2025",
      name: "Lower Body",
      duration: "78 min",
      exercises: 5,
      type: "strength",
      notes: "New squat PR"
    },
    {
      id: 3,
      date: "Apr 20, 2025",
      name: "Core Circuit",
      duration: "45 min",
      exercises: 8,
      type: "hiit",
      notes: "Reduced rest periods"
    },
    {
      id: 4,
      date: "Apr 18, 2025",
      name: "Cardio",
      duration: "35 min",
      exercises: 3,
      type: "cardio",
      notes: "5k run"
    },
    {
      id: 5,
      date: "Apr 16, 2025",
      name: "Full Body",
      duration: "90 min",
      exercises: 10,
      type: "strength",
      notes: "High volume day"
    },
    {
      id: 6,
      date: "Apr 14, 2025",
      name: "Recovery",
      duration: "40 min",
      exercises: 5,
      type: "mobility",
      notes: "Focused on stretching"
    },
    {
      id: 7,
      date: "Apr 12, 2025",
      name: "Upper Body",
      duration: "60 min",
      exercises: 6,
      type: "strength",
      notes: ""
    },
    {
      id: 8,
      date: "Apr 10, 2025",
      name: "Lower Body",
      duration: "75 min",
      exercises: 5,
      type: "strength",
      notes: "Focused on form"
    },
    {
      id: 9,
      date: "Apr 8, 2025",
      name: "HIIT Session",
      duration: "30 min",
      exercises: 6,
      type: "hiit",
      notes: "High intensity interval training"
    },
    {
      id: 10,
      date: "Apr 6, 2025",
      name: "Cardio",
      duration: "45 min",
      exercises: 2,
      type: "cardio",
      notes: "Cycling session"
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "strength":
        return "bg-blue-100 text-blue-800";
      case "cardio":
        return "bg-green-100 text-green-800";
      case "hiit":
        return "bg-orange-100 text-orange-800";
      case "mobility":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredWorkouts = workouts.filter(workout => 
    workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workout.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workout.notes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Workout History</h1>
        <Button>
          <CalendarRange className="mr-2 h-4 w-4" />
          New Workout
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>All Workouts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search workouts..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="cardio">Cardio</SelectItem>
                  <SelectItem value="hiit">HIIT</SelectItem>
                  <SelectItem value="mobility">Mobility</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Workout</TableHead>
                  <TableHead className="hidden md:table-cell">Duration</TableHead>
                  <TableHead className="hidden md:table-cell">Exercises</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="hidden md:table-cell">Notes</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkouts.map((workout) => (
                  <TableRow key={workout.id}>
                    <TableCell className="font-medium">{workout.date}</TableCell>
                    <TableCell>{workout.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{workout.duration}</TableCell>
                    <TableCell className="hidden md:table-cell">{workout.exercises}</TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(workout.type)} variant="outline">
                        {workout.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell max-w-[200px] truncate">
                      {workout.notes || "—"}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}