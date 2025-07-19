import Link from "next/link";

export default function ProfileLayout({ children }) {
  const tabs = [
    { label: "All Courses", href: "/profile/allcoursespage" },
    { label: "My Courses", href: "/profile/mycourses" },
    { label: "My Learning Streak", href: "/profile/mylearningstreak" },
    { label: "Notifications", href: "/profile/notifications" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 bg-gray-50 shadow flex flex-col p-4">
        <h2 className="text-xl font-bold mb-8">Profile</h2>
        <ul className="space-y-4">
          {tabs.map((tab) => (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className="block p-2 rounded hover:bg-gray-200"
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="ml-64 p-6 flex-1">{children}</main>
    </div>
  );
}
