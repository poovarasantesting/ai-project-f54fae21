import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function RecentWorkouts() {
  // Mock data
  const workouts = [
    {
      id: 1,
      date: "Apr 24, 2025",
      name: "Upper Body",
      duration: "65 min",
      exercises: 6,
      type: "strength",
    },
    {
      id: 2,
      date: "Apr 22, 2025",
      name: "Lower Body",
      duration: "78 min",
      exercises: 5,
      type: "strength",
    },
    {
      id: 3,
      date: "Apr 20, 2025",
      name: "Core Circuit",
      duration: "45 min",
      exercises: 8,
      type: "hiit",
    },
    {
      id: 4,
      date: "Apr 18, 2025",
      name: "Cardio",
      duration: "35 min",
      exercises: 3,
      type: "cardio",
    },
    {
      id: 5,
      date: "Apr 16, 2025",
      name: "Full Body",
      duration: "90 min",
      exercises: 10,
      type: "strength",
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
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Workout</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Exercises</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {workouts.map((workout) => (
          <TableRow key={workout.id}>
            <TableCell className="font-medium">{workout.date}</TableCell>
            <TableCell>{workout.name}</TableCell>
            <TableCell>{workout.duration}</TableCell>
            <TableCell>{workout.exercises}</TableCell>
            <TableCell>
              <Badge className={getTypeColor(workout.type)} variant="outline">
                {workout.type}
              </Badge>
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
  );
}