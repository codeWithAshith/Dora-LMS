"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const GlobalError = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background p-6 w-full">
      <Alert variant="destructive" className="max-w-lg text-center">
        <AlertTitle className="text-red-600 text-xl font-semibold">
          Oops! Something went wrong.
        </AlertTitle>
        <AlertDescription className="text-gray-700 mt-2">
          {error?.message || "An unexpected error occurred. Please try again."}
        </AlertDescription>
      </Alert>

      <div className="mt-6 flex gap-4">
        <Button variant="default" onClick={reset}>
          Retry
        </Button>
        <Button variant="outline" onClick={() => router.push("/")}>
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default GlobalError;
