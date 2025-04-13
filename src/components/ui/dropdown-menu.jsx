// src/components/ui/dropdown-menu.js

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils"; // You might need a utility function for classnames

export const DropdownMenu = ({ children, ...props }) => (
  <DropdownMenuPrimitive.Root {...props}>{children}</DropdownMenuPrimitive.Root>
);

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = ({ children, className, ...props }) => (
  <DropdownMenuPrimitive.Content
    align="end"
    side="bottom"
    className={cn("rounded-md border bg-white shadow-md", className)} // Add your custom styles
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Content>
);

export const DropdownMenuItem = ({ children, className, ...props }) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      "text-sm p-2 cursor-pointer hover:bg-gray-200 rounded-md",
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Item>
);
