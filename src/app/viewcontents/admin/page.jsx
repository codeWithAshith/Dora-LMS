'use client'
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const AdminPage = () => {
    const router = useRouter()
    const [activeContent, setActiveContent] = useState(<p>Welcome back admin!!!</p>);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '200px', background: '#f0f0f0', padding: '10px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>All courses will be listed here</p>)}>All courses</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>All users with course subscription will be listed here</p>)}>All users</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>All instructers with their courses wil be listed here</p>)}>All instructors</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>Reports page</p>)}>Reports</Button>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Button onClick={() => setActiveContent(<p>To view or modify settings</p>)}>Settings</Button>
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

export default AdminPage;