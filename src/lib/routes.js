// routes.js

export const PUBLIC_ROUTES = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/pages/about" },
  { label: "Contact", href: "/pages/contact" },
  { label: "FAQ", href: "/pages/faq" },
];

export const AUTH_ROUTES = [
  { label: "Login", href: "/auth/login" },
  { label: "Register", href: "/auth/register" },
];

export const PROTECTED_ROUTES = [
  { label: "Dashboard", href: "/dashboard/home" },
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/settings" },
];
