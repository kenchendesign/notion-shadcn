"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sections = [
  { href: "/", label: "Overview" },
  { href: "/buttons", label: "Buttons" },
  { href: "/forms", label: "Forms" },
  { href: "/typography", label: "Typography" },
  { href: "/surfaces", label: "Surfaces" },
  { href: "/feedback", label: "Feedback" },
  { href: "/icons", label: "Icons" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-0.5 px-3 py-4">
      <p className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
        Components
      </p>
      {sections.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className={cn(
            "px-2 py-1.5 rounded-sm text-sm transition-colors",
            pathname === s.href
              ? "bg-accent text-foreground font-medium"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          )}
        >
          {s.label}
        </Link>
      ))}
    </nav>
  );
}
