'use client'
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const InstructorPanel = () => {
    const router = useRouter()
    const [activeContent, setActiveContent] = useState(<p>Welcome to the Instructor panel!!!</p>);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '200px', background: '#f0f0f0', padding: '10px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(
                            <><Button style={{ marginBottom: '10px' }}>Create Course</Button><ul>
                                <li>Course 1</li>
                                <li>Course 2</li>
                                <li>Course 3</li>
                            </ul></>
                        )}>Courses</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>Students List will be displayed here.</p>)}>Manage students</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<><Button style={{ marginBottom: '10px' }}>New quiz</Button><ul>
                            <li>Quiz Result 1</li>
                            <li>Quiz Result 2</li>
                        </ul></>)}>Manage quiz</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>Wohoo! your total earnings for today is $100....!</p>)}>Total earnings</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => router.push('/viewcontents')}>Back</Button>
                    </li>
                </ul>
            </div>

            <div style={{ flex: 1, padding: '40px' }}>
                <p>{activeContent}</p>
            </div>
        </div>
    );
};

export default InstructorPanel;