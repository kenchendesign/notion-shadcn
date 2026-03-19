import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

export default function ButtonsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Buttons</h1>
        <p className="text-sm text-muted-foreground mt-1">All button variants and sizes.</p>
      </div>

      <Section title="Variants">
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </Section>

      <Section title="Sizes">
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">+</Button>
        </div>
      </Section>

      <Section title="States">
        <div className="flex flex-wrap gap-2">
          <Button disabled>Disabled default</Button>
          <Button variant="outline" disabled>Disabled outline</Button>
          <Button variant="secondary" disabled>Disabled secondary</Button>
        </div>
      </Section>

      <Section title="Combinations">
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline">Cancel</Button>
          <Button size="sm">Save changes</Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Button variant="ghost" size="sm">Learn more</Button>
          <Button variant="destructive" size="sm">Delete</Button>
        </div>
      </Section>
    </div>
  );
}
