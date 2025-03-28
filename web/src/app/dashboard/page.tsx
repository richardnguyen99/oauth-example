"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Search,
  Plus,
  MoreHorizontal,
  Calendar,
  Star,
  Inbox,
  Users,
  Home,
  Bell,
  User,
  Settings,
  CheckSquare,
  Square,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample data
const workspaces = [
  { id: 1, name: "Personal", icon: Home, color: "bg-blue-500" },
  { id: 2, name: "Work", icon: Users, color: "bg-green-500" },
  { id: 3, name: "Side Projects", icon: Star, color: "bg-purple-500" },
  { id: 4, name: "Home Renovation", icon: Home, color: "bg-orange-500" },
  { id: 5, name: "Travel Plans", icon: Calendar, color: "bg-pink-500" },
];

const tasks = [
  {
    id: 1,
    title: "Complete project proposal",
    completed: false,
    workspace: "Work",
    dueDate: "Today",
    priority: "High",
    tags: ["Work", "Urgent"],
  },
  {
    id: 2,
    title: "Buy groceries",
    completed: true,
    workspace: "Personal",
    dueDate: "Yesterday",
    priority: "Medium",
    tags: ["Shopping"],
  },
  {
    id: 3,
    title: "Schedule team meeting",
    completed: false,
    workspace: "Work",
    dueDate: "Tomorrow",
    priority: "Medium",
    tags: ["Work", "Meeting"],
  },
  {
    id: 4,
    title: "Research new tech stack",
    completed: false,
    workspace: "Side Projects",
    dueDate: "Next week",
    priority: "Low",
    tags: ["Research", "Development"],
  },
  {
    id: 5,
    title: "Call plumber about kitchen sink",
    completed: false,
    workspace: "Home Renovation",
    dueDate: "Today",
    priority: "High",
    tags: ["Home", "Urgent"],
  },
  {
    id: 6,
    title: "Book flights for vacation",
    completed: false,
    workspace: "Travel Plans",
    dueDate: "Next month",
    priority: "Medium",
    tags: ["Travel", "Planning"],
  },
  {
    id: 7,
    title: "Review quarterly reports",
    completed: false,
    workspace: "Work",
    dueDate: "This week",
    priority: "High",
    tags: ["Work", "Finance"],
  },
  {
    id: 8,
    title: "Update resume",
    completed: false,
    workspace: "Personal",
    dueDate: "No date",
    priority: "Low",
    tags: ["Career"],
  },
];

export default function TodoPage() {
  const [activeWorkspace, setActiveWorkspace] = useState(workspaces[0]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would add the task to your state or database
    setNewTask("");
  };

  const toggleTaskCompletion = (taskId: number) => {
    // In a real app, you would update the task in your state or database
    console.log(`Toggling task ${taskId}`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 w-full max-w-[unset]">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <CheckCircle className="h-6 w-6 text-primary" />
              <span>TaskMaster</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search tasks..." className="pl-8 h-9" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-9 w-9 rounded-full"
                >
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-muted/40 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto p-4 hidden md:block">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Workspaces</h2>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <nav className="space-y-1">
            {workspaces.map((workspace) => {
              const Icon = workspace.icon;
              return (
                <button
                  key={workspace.id}
                  className={`flex items-center gap-3 w-full rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeWorkspace.id === workspace.id
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/50 hover:text-accent-foreground"
                  }`}
                  onClick={() => setActiveWorkspace(workspace)}
                >
                  <div
                    className={`h-5 w-5 rounded-md flex items-center justify-center ${workspace.color}`}
                  >
                    <Icon className="h-3 w-3 text-white" />
                  </div>
                  <span>{workspace.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              Smart Lists
            </h3>
            <nav className="space-y-1">
              <Link
                href="#"
                className="flex items-center gap-3 w-full rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground"
              >
                <Inbox className="h-4 w-4 text-blue-500" />
                <span>Inbox</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 w-full rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground"
              >
                <Calendar className="h-4 w-4 text-green-500" />
                <span>Today</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 w-full rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground"
              >
                <Clock className="h-4 w-4 text-orange-500" />
                <span>Upcoming</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className={`h-8 w-8 rounded-md flex items-center justify-center ${activeWorkspace.color}`}
                >
                  <activeWorkspace.icon className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold">{activeWorkspace.name}</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Users className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <span>Edit workspace</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Sort tasks</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500">
                      <span>Delete workspace</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Add Task Form */}
            <form onSubmit={handleAddTask} className="mb-6">
              <div className="flex items-center gap-2 border rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-ring">
                <Plus className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Add a new task..."
                  className="flex-1 border-0 bg-transparent p-0 text-sm outline-none placeholder:text-muted-foreground"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <Button type="submit" size="sm" disabled={!newTask.trim()}>
                  Add
                </Button>
              </div>
            </form>

            {/* Tasks List */}
            <div className="space-y-1">
              {tasks
                .filter((task) => task.workspace === activeWorkspace.name)
                .map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-start gap-3 p-3 rounded-md transition-colors ${
                      task.completed
                        ? "bg-muted/50 text-muted-foreground"
                        : "hover:bg-accent/30"
                    }`}
                  >
                    <button
                      className="mt-0.5 flex-shrink-0 text-muted-foreground hover:text-foreground"
                      onClick={() => toggleTaskCompletion(task.id)}
                    >
                      {task.completed ? (
                        <CheckSquare className="h-5 w-5 text-primary" />
                      ) : (
                        <Square className="h-5 w-5" />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p
                          className={`text-sm font-medium ${
                            task.completed ? "line-through" : ""
                          }`}
                        >
                          {task.title}
                        </p>
                        {task.priority === "High" && (
                          <Badge
                            variant="destructive"
                            className="text-[10px] px-1 py-0 h-4"
                          >
                            High
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">
                          {task.dueDate}
                        </span>
                        {task.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-[10px] px-1 py-0 h-4"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-muted-foreground"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <span>Edit task</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Set due date</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Add to workspace</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">
                          <span>Delete task</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}

              {tasks.filter((task) => task.workspace === activeWorkspace.name)
                .length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-muted p-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">No tasks yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add your first task to get started
                  </p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Task
                  </Button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
