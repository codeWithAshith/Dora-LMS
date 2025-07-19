"use client";

import { useState, useEffect } from "react";

export default function MyLearningStreakPage() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // Ideally: fetch streak from backend
    setStreak(5); // mock: 5-day streak
  }, []);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">My Learning Streak</h1>
      <p className="text-lg text-center">
        You’ve maintained a{" "}
        <span className="font-semibold text-blue-600">{streak}-day</span> learning streak! 🎉
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Weekly Progress</h2>
        <div className="bg-gray-50 rounded p-4 shadow-sm">
          {/* fake graph */}
          <div className="flex justify-between items-end h-32">
            {days.map((day, i) => {
              const isCompleted = i < streak;
              return (
                <div key={day} className="flex flex-col items-center">
                  <div
                    className={`w-6 rounded-t transition-all duration-300 ${
                      isCompleted ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    style={{
                      height: isCompleted ? `${40 + i * 10}px` : "20px",
                    }}
                  ></div>
                  <span className="text-xs mt-1">{day}</span>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Blue bars indicate completed learning days.
        </p>
      </div>

      <div className="mt-8 p-4 bg-green-100 rounded shadow-sm">
        <p className="text-green-800 text-center">
          Keep up the great work! Remember, consistency is the key to mastery.
        </p>
      </div>
    </div>
  );
}
