import { cn } from "@/lib/utils";

interface SpaceBackgroundProps {
  className?: string;
}

export function SpaceBackground({ className }: SpaceBackgroundProps) {
  return (
    <div className={cn("space-dots", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
    </div>
  );
}