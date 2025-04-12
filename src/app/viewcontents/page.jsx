'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ViewContent = () => {
    const router = useRouter()

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-background p-6 w-full">
            <h1>Select what you want to view</h1>
            <Button style={{ marginBottom: '10px' }} onClick={()=> router.push('/viewcontents/learningpaths')}>Learning Pages</Button>
            <Button style={{ marginBottom: '10px' }} onClick={()=> router.push('/viewcontents/instructorpanel')}>Instructor Panel</Button>
            <Button style={{ marginBottom: '10px' }} onClick={()=> router.push('/viewcontents/admin')}>Admin Panel</Button>
            <Button style={{ marginBottom: '10px' }} onClick={()=> router.push('/viewcontents/payments')}>Payment and Subscription</Button>
            <Button style={{ marginBottom: '10px' }} onClick={()=> router.push('/')}>Logout</Button>
        </div>
    );
};

export default ViewContent;