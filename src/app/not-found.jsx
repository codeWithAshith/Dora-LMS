"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6 text-center w-full">
      <Alert variant="destructive" className="max-w-lg w-full">
        <AlertTitle className="text-4xl font-bold">404</AlertTitle>
        <AlertDescription className="text-lg">
          Oops! The page you're looking for doesn't exist.
        </AlertDescription>
      </Alert>
      <Link href="/">
        <Button className="my-6 bg-slate-900 text-white cursor-pointer">
          Go to Home
        </Button>
      </Link>
    </div>
  );
}
