import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

export default function SurfacesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-semibold">Surfaces</h1>
        <p className="text-sm text-muted-foreground mt-1">Cards, badges, separators, and avatars.</p>
      </div>

      <Section title="Cards">
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardHeader>
              <CardTitle>Getting started</CardTitle>
              <CardDescription>Learn how to use notion-shadcn in your project.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Import the theme CSS and start using shadcn components.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline">Read docs</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>415 Icons</CardTitle>
              <CardDescription>NDS icon library with 4 variants each.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Full, small, fill, and fillSmall variants for every icon.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline">Browse icons</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      <Section title="Badges">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge style={{ backgroundColor: "var(--background-color-blue-primary)", color: "var(--text-color-blue-primary)" }}>In progress</Badge>
          <Badge style={{ backgroundColor: "var(--background-color-green-primary)", color: "var(--text-color-green-primary)" }}>Done</Badge>
          <Badge style={{ backgroundColor: "var(--background-color-yellow-primary)", color: "var(--text-color-yellow-primary)" }}>In review</Badge>
          <Badge style={{ backgroundColor: "var(--background-color-red-primary)", color: "var(--text-color-red-primary)" }}>Blocked</Badge>
          <Badge style={{ backgroundColor: "var(--background-color-purple-primary)", color: "var(--text-color-purple-primary)" }}>Backlog</Badge>
        </div>
      </Section>

      <Section title="Separator">
        <div className="space-y-3">
          <div className="text-sm">Above</div>
          <Separator />
          <div className="text-sm">Below</div>
          <div className="flex items-center gap-4 h-5">
            <span className="text-sm">Left</span>
            <Separator orientation="vertical" />
            <span className="text-sm">Right</span>
          </div>
        </div>
      </Section>

      <Section title="Avatars">
        <div className="flex items-center gap-3">
          <Avatar className="size-6">
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
          <Avatar className="size-8">
            <AvatarFallback>KC</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarFallback>Ken</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarFallback>KD</AvatarFallback>
          </Avatar>
        </div>
      </Section>

      <Section title="Background tokens">
        <div className="flex flex-wrap gap-2">
          {["gray", "red", "orange", "yellow", "green", "teal", "blue", "purple", "pink", "brown"].map((c) => (
            <div
              key={c}
              className="px-3 py-1.5 rounded-xs text-xs capitalize"
              style={{
                backgroundColor: `var(--background-color-${c}-primary)`,
                color: `var(--text-color-${c}-primary)`,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Shadows">
        <div className="flex flex-wrap gap-4">
          {["sm", "md", "lg", "diffuse", "scrim"].map((s) => (
            <div
              key={s}
              className="rounded-md bg-card px-4 py-3 text-xs text-muted-foreground"
              style={{ boxShadow: `var(--shadow-${s})` }}
            >
              shadow-{s}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
