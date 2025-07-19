export const PUBLIC_ROUTES = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export const AUTH_ROUTES = [
  { label: "Login", href: "/auth/login" },
  { label: "Register", href: "/auth/register" },
];

export const LOGOUT_ROUTE = { label: "Logout", href: "#" };

export const PROTECTED_ROUTES = [
  { label: "Dashboard", href: "/dashboard/home" },
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/settings" },
  { label: "Quiz", href: "/quiz" }
];
