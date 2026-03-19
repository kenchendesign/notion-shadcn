import { SidebarNav } from "@/components/sidebar-nav";
import { Separator } from "@/components/ui/separator";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <aside className="w-56 shrink-0 border-r border-border bg-sidebar flex flex-col">
        <div className="px-5 py-4 border-b border-border">
          <p className="text-sm font-semibold text-foreground">notion-shadcn</p>
          <p className="text-xs text-muted-foreground mt-0.5">Component gallery</p>
        </div>
        <SidebarNav />
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl px-10 py-10">{children}</div>
      </main>
    </div>
  );
}
