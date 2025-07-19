"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { UserProvider } from "@/context/usercontext";

const LoginPage = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/login");
        const json = await res.json();
        setUsers(json.data || []);
        console.log(json);
      } catch (err) {
        console.error("Error fetching users", err);
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, []);

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    if (loadingUsers) return;

    setLoadingLogin(true);

    const matchedUser = users.find(
      (u) => u.email_id === email && u.password === password
    );

    if (!matchedUser) {
      alert("Invalid email or password");
    } else {
      // alert(`Welcome, ${matchedUser.username}`);
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      setUsers(matchedUser);  
      await router.push("/profile");
      
    }

    setLoadingLogin(false);
  };

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

        <form onSubmit={handleCredentialsLogin} className="space-y-4 mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loadingLogin}>
            {loadingLogin ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <div className="space-y-4">
          <Button
            onClick={handleLogin("github")}
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            Continue with GitHub
          </Button>
          <Button
            onClick={handleLogin("google")}
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle className="w-5 h-5" aria-hidden="true" />
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
