import * as React from "react";
import { cva } from "class-variance-authority";

const avatarVariants = cva(
  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
);

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={avatarVariants({ className })} {...props} />
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={`aspect-square h-full w-full ${className}`}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex h-full w-full items-center justify-center bg-muted text-muted-foreground ${className}`}
    {...props}
  >
    {children}
  </div>
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
