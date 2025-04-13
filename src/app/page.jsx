'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background p-6 w-full">
      <div className="text-center">
        <h1>Welcome to Dora LMS</h1>
        <p>Your learning journey starts here!</p>
        <Button className="mt-3" style={{ marginRight: '10px' }} onClick={()=> router.push('/viewcontents')}>Get Started</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default Home;
