"use client"; // For Next.js App Router (omit if using Vite)

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Mail } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <CardHeader className="text-center space-y-2">
          <Alert className="border-destructive bg-destructive/10 text-destructive-foreground flex items-center justify-center">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="ml-2 text-sm sm:text-base">
              Under Maintenance
            </AlertDescription>
          </Alert>
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold">
            We're Working on It!
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-muted-foreground">
            Our site is temporarily down for maintenance. We'll be back soon with improvements.
            Estimated time: 2-3 hours.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm sm:text-base text-muted-foreground space-y-1">
            <p>In the meantime, feel free to reach out if you have any questions.</p>
            <p className="hidden md:block">Check back later for updates!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Get in Touch</AlertDialogTitle>
                  <AlertDialogDescription>
                    Reach out to our team for support or inquiries.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="space-y-2 text-center">
                  <p className="text-sm sm:text-base">
                    Contact our developers at:{" "}
                    <a
                      href="mailto:techteam629@gmail.com"
                      className="text-primary underline"
                      aria-label="Email developers"
                    >
                      techteam629@gmail.com
                    </a>
                  </p>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button className="w-full sm:w-auto">Refresh Page</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}