"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PUBLIC_ROUTES, AUTH_ROUTES, PROTECTED_ROUTES } from "@/lib/routes";
import { useState } from "react";
import { DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const NavbarComponent = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Render the links based on routes
  const renderLinks = (routes) =>
    routes.map(({ label, href }) => (
      <Link
        key={href}
        href={href}
        className={`text-sm font-medium hover:text-primary transition ${
          pathname === href ? "text-primary" : "text-muted-foreground"
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {renderLinks(PUBLIC_ROUTES)}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {session ? (
            <>
              {renderLinks(PROTECTED_ROUTES)}
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={session.user?.image}
                  alt={session.user?.name}
                />
                <AvatarFallback>
                  {session.user?.name?.[0] || "U"}
                </AvatarFallback>
              </Avatar>
              <Button onClick={() => signOut()} size="sm">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>{renderLinks(AUTH_ROUTES)}</>
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
                {renderLinks(PUBLIC_ROUTES)}

                {session ? (
                  <>
                    <hr />
                    {renderLinks(PROTECTED_ROUTES)}
                    <Button
                      variant="ghost"
                      className="text-left justify-start"
                      onClick={() => {
                        signOut();
                        setOpen(false);
                      }}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
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
