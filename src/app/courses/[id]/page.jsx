"use client"

import {useParams} from 'next/navigation';

export default function Page() {
    const params = useParams();
    const courseId = params.id;
    return (
        <div style={{ padding: 20 }}>
          <h1>📘 Course Details</h1>
          <p>Course ID: {courseId}</p>
        </div>
      );
  }
  