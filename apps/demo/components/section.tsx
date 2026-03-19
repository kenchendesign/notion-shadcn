import { cn } from "@/lib/utils";

export function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}
