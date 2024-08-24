import { cn } from "@/lib/utils";
import React from "react";

export default function Section({ className, wrapperClassName, children, ...props }) {
  return (
    <section
      className={cn("w-full lg:px-4 relative z-[1]", className)}
      {...props}
    >
      <div className={cn("w-full max-w-full lg:max-w-[1280px] px-2 md:px-4 lg:px-6 mx-auto", wrapperClassName)}>{children}</div>
    </section>
  );
}
