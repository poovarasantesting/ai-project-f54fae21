import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Dashboard from "@/pages/Dashboard";
import WorkoutHistory from "@/pages/WorkoutHistory";
import PersonalRecords from "@/pages/PersonalRecords";
import Layout from "@/components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<WorkoutHistory />} />
          <Route path="/records" element={<PersonalRecords />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}