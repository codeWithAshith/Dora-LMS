"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;

const SheetContent = React.forwardRef(({ side = "right", className = "", ...props }, ref) => {
  const sideStyles = {
    right: "right-0 top-0 h-full w-3/4 sm:w-1/3",
    left: "left-0 top-0 h-full w-3/4 sm:w-1/3",
    top: "top-0 left-0 w-full h-1/2",
    bottom: "bottom-0 left-0 w-full h-1/2",
  };

  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
      <SheetPrimitive.Content
        ref={ref}
        className={`fixed z-50 bg-white shadow-xl transition-all ease-in-out duration-300 ${sideStyles[side]} ${className}`}
        {...props}
      >
        {props.children}
        <SheetClose className="absolute top-4 right-4 text-gray-600 hover:text-black">
          <X className="h-5 w-5" />
        </SheetClose>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
});
SheetContent.displayName = "SheetContent";

export { Sheet, SheetTrigger, SheetClose, SheetContent };
