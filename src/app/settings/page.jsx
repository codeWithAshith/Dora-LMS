"use client";

import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

export default function SettingsPage() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("loggedInUser");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleSave = () => {
    alert(`New password: ${password || user.password}`);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Settings</h1>
        <p className="text-gray-500">Loading user data...</p>
      </div>
    );
  }

  const formattedDate = new Date(user.created_at).toLocaleDateString();

  const profileInitial = user.username?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className="container mx-auto px-4 py-4 max-w-xl">
      <h1 className="text-4xl mb-4 text-blue-900 text-center">
        Settings
      </h1>

      <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center space-y-6 border border-blue-100">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-5xl text-white shadow-lg">
            {profileInitial}
          </div>
          {!isEditing && (
            <button
              onClick={handleEdit}
              className="absolute -bottom-2 -right-2 bg-blue-100 hover:bg-blue-200 p-2 rounded-full shadow"
            >
              <Pencil size={18} />
            </button>
          )}
        </div>

        <h2 className="text-2xl font-semibold text-blue-900">
          {user.username}
        </h2>

        <div className="w-full space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Change Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              readOnly={!isEditing}
              className={`w-full border border-blue-200 rounded-lg px-4 py-3 sm:text-sm focus:outline-none transition ${
                isEditing
                  ? "focus:ring-2 focus:ring-blue-400"
                  : "bg-blue-50"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Email ID
            </label>
            <input
              type="email"
              value={user.email_id}
              readOnly
              className="w-full bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Date of Joining
            </label>
            <input
              type="text"
              value={formattedDate}
              readOnly
              className="w-full bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Theme
            </label>
            <select
              value={theme}
              onChange={handleThemeChange}
              disabled={!isEditing}
              className={`w-full border border-blue-200 rounded-lg px-4 py-3 sm:text-sm focus:outline-none transition ${
                isEditing
                  ? "focus:ring-2 focus:ring-blue-400"
                  : "bg-blue-50"
              }`}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        {isEditing && (
          <button
            onClick={handleSave}
            className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}
