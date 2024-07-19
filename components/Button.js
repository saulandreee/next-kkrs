import React from "react";
import { Button as ShadButton } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function Button({ isLoading, children, ...props }) {
  return (
    <ShadButton {...props}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </ShadButton>
  );
}
