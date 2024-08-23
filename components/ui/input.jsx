import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, icon, iconPosition = "right", ...props }, ref) => {
  return (
    <div className="relative">
      <input
        type={type}
        className={cn(
          "flex w-full rounded-xl border border-mandy-300 bg-white px-4 py-2.5 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mandy-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mandy-500/80 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      <span className={cn("text-mandy-300 absolute top-2 right-4", iconPosition === "left" ? "right-auto left-4" : "")}>{icon}</span>
    </div>
  );
});
Input.displayName = "Input";

export { Input };
