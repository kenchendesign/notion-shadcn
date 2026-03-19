import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

export default function FormsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Forms</h1>
        <p className="text-sm text-muted-foreground mt-1">Inputs, selects, checkboxes, and switches.</p>
      </div>

      <Section title="Text inputs">
        <div className="space-y-3 max-w-sm">
          <div className="space-y-1.5">
            <Label htmlFor="text">Page title</Label>
            <Input id="text" placeholder="Untitled" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" placeholder="Can't touch this" disabled />
          </div>
        </div>
      </Section>

      <Section title="Select">
        <div className="space-y-1.5 max-w-sm">
          <Label>Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select status…" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="not-started">Not started</SelectItem>
              <SelectItem value="in-progress">In progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Section>

      <Section title="Checkboxes">
        <div className="space-y-2">
          {["Show comments", "Notify followers", "Lock page"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <Checkbox id={`chk-${i}`} defaultChecked={i === 0} />
              <Label htmlFor={`chk-${i}`} className="font-normal cursor-pointer">
                {label}
              </Label>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Switches">
        <div className="space-y-3">
          {[
            { label: "Dark mode", checked: true },
            { label: "Email notifications", checked: false },
            { label: "Public sharing", checked: true },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center justify-between max-w-xs">
              <Label htmlFor={`sw-${i}`} className="font-normal cursor-pointer">
                {item.label}
              </Label>
              <Switch id={`sw-${i}`} defaultChecked={item.checked} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Example form">
        <div className="space-y-4 max-w-sm border border-border rounded-md p-5">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Ken Chen" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="workspace">Workspace</Label>
            <Select>
              <SelectTrigger id="workspace">
                <SelectValue placeholder="Choose workspace…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="font-normal cursor-pointer text-muted-foreground">
              I agree to the terms of service
            </Label>
          </div>
          <div className="flex gap-2 pt-1">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Continue</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
