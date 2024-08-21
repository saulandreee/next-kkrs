import { cn } from "@/lib/utils";
import React from "react";

export default function Section({ className, wrapperClassName, children, ...props }) {
  return (
    <section
      className={cn("w-full lg:px-4", className)}
      {...props}
    >
      <div className={cn("w-full max-w-[1280px] px-2 mx-auto", wrapperClassName)}>{children}</div>
    </section>
  );
}
