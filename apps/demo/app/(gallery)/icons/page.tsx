import { IconGrid } from "./icon-grid";

export default function IconsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Icons</h1>
        <p className="text-muted-foreground mt-1">
          NDS icon library — 551 icons × 4 variants.
        </p>
      </div>
      <IconGrid />
    </div>
  );
}
