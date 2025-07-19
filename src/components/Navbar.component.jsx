"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, LogOut, Settings } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { UserProvider } from "@/context/usercontext";

const PUBLIC_ROUTES = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const AUTH_ROUTES = [
  { label: "Login", href: "/auth/login" },
  { label: "Register", href: "/auth/register" },
];

const LOGGED_IN_ROUTES = [
  { label: "Dashboard", href: "/profile" },
];

const NavbarComponent = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user ? JSON.parse(user) : null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    router.push("/auth/login");
    router.refresh();
  };

  const renderLinks = (routes) =>
    routes.map(({ label, href }) => (
      <Link
        key={href}
        href={href}
        className={`text-sm font-medium hover:text-primary transition ${pathname === href ? "text-primary" : "text-muted-foreground"
          }`}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    ));

  return (
    <header className="w-full border-b bg-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-400 inline-block text-transparent bg-clip-text"
        >
          DORA <span className="text-gray-900">LMS</span>
        </Link>

        {/* Middle Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {loggedInUser
            ? renderLinks(LOGGED_IN_ROUTES)
            : renderLinks(PUBLIC_ROUTES)}
        </nav>

        {/* Right Nav */}
        <div className="hidden md:flex items-center space-x-4">
          {loggedInUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarFallback>
                    {loggedInUser.username?.[0]?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => {
                    router.push("/settings");
                  }}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            renderLinks(AUTH_ROUTES)
          )}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[260px] sm:w-[300px]">
              <DialogTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </DialogTitle>
              <div className="mt-4 space-y-4 flex flex-col mx-3">
                {loggedInUser ? (
                  <>
                    {renderLinks(LOGGED_IN_ROUTES)}
                    <Button
                      variant="ghost"
                      className="text-left justify-start"
                      onClick={() => {
                        router.push("/settings");
                        setOpen(false);
                      }}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-left justify-start"
                      onClick={() => {
                        handleLogout();
                        setOpen(false);
                      }}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    {renderLinks(PUBLIC_ROUTES)}
                    <hr />
                    {renderLinks(AUTH_ROUTES)}
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
