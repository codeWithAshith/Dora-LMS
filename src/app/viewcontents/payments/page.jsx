'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Payments = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background p-6 w-full">
      <div className="text-center">
        <h1>This is payment page</h1>
        <Button style={{ marginRight: '10px' }} onClick={()=> router.push('/viewcontents')}>View invoice</Button>
      </div>
    </div>
  );
};

export default Payments;
