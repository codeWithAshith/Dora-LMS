'use client'
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const LearningPaths = () => {
    const router = useRouter()
    const [activeContent, setActiveContent] = useState(<p>Welcome to the Learning paths!!!</p>);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '200px', background: '#f0f0f0', padding: '10px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>Here are your enrolled courses</p>)}>My courses</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>Welcome to your course player.</p>)}>My course player</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>Here are your assignments</p>)}>My assignments</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>Start your quiz here</p>)}>Take quiz</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>View your progress report</p>)}>My progress</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={()=> router.push('/viewcontents')}>Back</Button>
                    </li>
                </ul>
            </div>

            <div style={{ flex: 1, padding: '40px' }}>
                <p>{activeContent}</p>
            </div>
        </div>
    );
};

export default LearningPaths;