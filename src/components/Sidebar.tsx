import { Link, useLocation } from "react-router-dom";
import { BarChart2, Calendar, Home, Medal, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Workout History", path: "/history", icon: Calendar },
    { name: "Personal Records", path: "/records", icon: Medal },
  ];

  return (
    <div 
      className={cn(
        "h-full bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex items-center justify-between border-b">
        {!collapsed && <h1 className="text-xl font-bold">FitTrack</h1>}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <nav className="flex-1 pt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors",
                isActive && "bg-gray-100 text-primary border-r-2 border-primary",
                collapsed && "justify-center"
              )}
            >
              <Icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t">
        {!collapsed && (
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
              U
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium">User</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}