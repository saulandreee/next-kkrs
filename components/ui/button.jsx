import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-mandy-500 whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mandy-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-mandy-950 dark:focus-visible:ring-mandy-300",
  {
    variants: {
      variant: {
        default: "bg-mandy-500 text-mandy-50 hover:bg-mandy-500/90 ",
        destructive: "bg-red-500 text-mandy-50 hover:bg-red-500/90 ",
        outline: "border-2 border-mandy-500 bg-white hover:bg-pourri-300 hover:text-mandy-600 ",
        secondary: "bg-pourri-500 text-mandy-900 hover:bg-pourri-600/80 ",
        ghost: "hover:bg-mandy-100 hover:text-mandy-500",
        link: "text-mandy-500 underline-offset-4 hover:underline ",
      },
      size: {
        default: "h-9 px-3 py-1.5 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
