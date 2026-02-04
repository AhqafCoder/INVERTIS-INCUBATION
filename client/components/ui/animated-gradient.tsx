"use client";
import { cn } from "@/lib/utils";

export const AnimatedGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50",
        className
      )}
    >
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px]" />
      <div className="relative">{children}</div>
    </div>
  );
};
