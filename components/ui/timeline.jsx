import React from "react";
import { cva } from "class-variance-authority";
import { Check, Circle, Dot, X } from "lucide-react";

import { cn } from "@/lib/utils";

const timelineVariants = cva("grid", {
  variants: {
    positions: {
      left: "[&>li]:grid-cols-[0_min-content_1fr]",
      right: "[&>li]:grid-cols-[1fr_min-content]",
      center: "[&>li]:grid-cols-[1fr_min-content_1fr]",
    },
  },
  defaultVariants: {
    positions: "left",
  },
});

const Timeline = React.forwardRef(({ children, className, positions, ...props }, ref) => {
  return (
    <ul
      className={cn(timelineVariants({ positions }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </ul>
  );
});
Timeline.displayName = "Timeline";

const timelineItemVariants = cva("grid items-center gap-x-6", {
  variants: {
    status: {
      done: "text-inherit",
      default: "text-inherit",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

const TimelineItem = React.forwardRef(({ className, status, ...props }, ref) => (
  <li
    className={cn(timelineItemVariants({ status }), className)}
    ref={ref}
    {...props}
  />
));
TimelineItem.displayName = "TimelineItem";

const timelineDotVariants = cva();

const TimelineDot = React.forwardRef(({ className, status, customIcon, children, ...props }, ref) => (
  <div
    role="status"
    className={cn("timeline-dot", timelineDotVariants({ status }), className)}
    ref={ref}
    {...props}
  >
    {customIcon}
    {children}
  </div>
));
TimelineDot.displayName = "TimelineDot";

const timelineContentVariants = cva("row-start-2 row-end-2 pb-8 text-inherit", {
  variants: {
    side: {
      right: "col-start-3 col-end-4 mr-auto text-left",
      left: "col-start-1 col-end-2 ml-auto text-right",
    },
  },
  defaultVariants: {
    side: "right",
  },
});

const TimelineContent = React.forwardRef(({ className, side, ...props }, ref) => (
  <div
    className={cn(timelineContentVariants({ side }), className)}
    ref={ref}
    {...props}
  />
));
TimelineContent.displayName = "TimelineContent";

const timelineHeadingVariants = cva("row-start-1 row-end-1 line-clamp-1 max-w-full truncate", {
  variants: {
    side: {
      right: "col-start-3 col-end-4 mr-auto text-left",
      left: "col-start-1 col-end-2 ml-auto text-right",
    },
    variant: {
      primary: "text-base font-medium text-inherit",
      secondary: "text-sm font-light text-inherit",
    },
  },
  defaultVariants: {
    side: "right",
    variant: "primary",
  },
});
const TimelineHeading = React.forwardRef(({ className, side, variant, ...props }, ref) => (
  <p
    role="heading"
    aria-level={variant === "primary" ? 2 : 3}
    className={cn(timelineHeadingVariants({ side, variant }), className)}
    ref={ref}
    {...props}
  />
));
TimelineHeading.displayName = "TimelineHeading";

const TimelineLine = React.forwardRef(({ className, done = false, ...props }, ref) => {
  return (
    <hr
      role="separator"
      aria-orientation="vertical"
      className={cn(
        "col-start-2 col-end-3 row-start-2 row-end-2 mx-auto flex h-full min-h-16 w-0.5 justify-center rounded-full",
        done ? "bg-pourri-50" : "bg-mandy-500",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TimelineLine.displayName = "TimelineLine";

export { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineHeading, TimelineLine };
