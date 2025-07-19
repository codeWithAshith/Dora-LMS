"use client";

import { useState, useEffect } from "react";
// import axios from "axios";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ For now, ignore user_id check so we always show dummy data.
    /*
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      setLoading(false);
      return;
    }
    */

    const dummyNotifications = [
      {
        id: 1,
        message: "Your course 'React Basics' has a new lesson.",
        from: "Dora LMS",
      },
      {
        id: 2,
        message: "You earned a badge for a 7-day streak!",
        from: "Achievements",
      },
      {
        id: 3,
        message: "Your assignment in 'JavaScript Advanced' is due tomorrow.",
        from: "Instructor",
      },
    ];

    /*
    axios
      .get(`/api/notifications?user_id=${userId}`)
      .then((res) => setNotifications(res.data ?? []))
      .catch(console.error)
      .finally(() => setLoading(false));
    */

    setNotifications(dummyNotifications);
    setLoading(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Notifications</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : notifications.length === 0 ? (
        <p className="text-gray-500">You have no new notifications.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((note) => (
            <li
              key={note.id}
              className="bg-white shadow rounded p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-gray-700">{note.message}</p>
                <span className="text-sm text-gray-500">From: {note.from}</span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                View
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
