"use client";

import React, { type JSX } from "react";
import { CalendarDays, Mail, Edit, LogOut } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

// Define the User type
interface User {
  id: string;
  username: string;
  email: string;
  profilePicture?: string;
  createdAt: string;
  updatedAt: string;
  verified: boolean;
}

interface UserProfileCardProps {
  user: User;
}

export default function AuthenticatedCard({
  user,
}: UserProfileCardProps): JSX.Element {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="w-full md:w-md mx-auto">
      <CardHeader className="pt-6 flex flex-col items-center space-y-3">
        <div className="relative">
          <Avatar className="h-24 w-24 border-4 border-background">
            <AvatarImage src={user.profilePicture} alt={user.username} />
            <AvatarFallback className="text-xl">
              {getInitials(user.username)}
            </AvatarFallback>
          </Avatar>
          <span
            className={clsx(
              "absolute bottom-1 right-1 h-4 w-4 rounded-full ring-2 ring-background",
              {
                "bg-green-500": user.verified,
                "bg-gray-400": !user.verified,
              }
            )}
            title={`${user.verified ? "Verified" : "Not verified"}`}
          />
        </div>

        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <Badge variant="secondary" className="font-normal">
            {user.id}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>{user.email}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>
            Joined{" "}
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </span>
        </div>

        <div className="border-t pt-4 mt-4">
          <h3 className="text-sm font-medium mb-2">Account Actions</h3>
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              size="sm"
              className="justify-start"
              onClick={() => console.log("Edit profile clicked")}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="justify-start text-destructive hover:text-destructive"
              onClick={() => console.log("Logout clicked")}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center border-t pt-4">
        <p className="text-xs text-muted-foreground">
          Last updated:{" "}
          {new Date(user.updatedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </p>
      </CardFooter>
    </Card>
  );
}
