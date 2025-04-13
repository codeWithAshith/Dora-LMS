"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const handleLogin = (provider) => () => {
    signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome back!</h1>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Sign in to access your courses and dashboard.
        </p>

        <div className="space-y-4">
          <Button
            onClick={handleLogin("github")}
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" />
            Continue with GitHub
          </Button>
          <Button
            onClick={handleLogin("google")}
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
