import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  { title: "Buttons", href: "/buttons", desc: "All button variants and sizes" },
  { title: "Forms", href: "/forms", desc: "Inputs, selects, checkboxes, switches" },
  { title: "Typography", href: "/typography", desc: "Headings, body, captions, and Notion content styles" },
  { title: "Surfaces", href: "/surfaces", desc: "Cards, badges, separators, avatars" },
  { title: "Feedback", href: "/feedback", desc: "Progress, tabs, tooltips" },
  { title: "Icons", href: "/icons", desc: "Searchable NDS icon grid — 415 icons × 4 variants" },
];

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">notion-shadcn</h1>
        <p className="text-muted-foreground mt-1">
          Notion design system tokens applied to shadcn/ui components.
        </p>
        <div className="flex gap-2 mt-3">
          <Badge variant="secondary">Tailwind v4</Badge>
          <Badge variant="secondary">shadcn/ui</Badge>
          <Badge variant="secondary">Auto dark mode</Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {sections.map((s) => (
          <a key={s.href} href={s.href}>
            <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.desc}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>

      <div className="rounded-sm border border-border bg-muted/50 p-4 text-sm">
        <p className="font-medium text-foreground mb-1">Installation</p>
        <pre className="text-muted-foreground font-mono text-xs">
{`pnpm add notion-shadcn

# globals.css
@import "notion-shadcn/theme.css";

# React
import { Icon } from "notion-shadcn/icons"
import { addSquareRoundedIcon } from "notion-shadcn/icons"
<Icon icon={addSquareRoundedIcon} size="sm" color="primary" />`}
        </pre>
      </div>
    </div>
  );
}
