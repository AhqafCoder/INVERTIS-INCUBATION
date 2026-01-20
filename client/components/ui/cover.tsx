"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const Cover = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "relative inline-block px-2",
        className
      )}
    >
      {children}
    </span>
  );
};
