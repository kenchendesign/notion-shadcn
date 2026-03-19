"use client";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

export default function FeedbackPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Feedback</h1>
        <p className="text-sm text-muted-foreground mt-1">Progress, tabs, and tooltips.</p>
      </div>

      <Section title="Progress">
        <div className="space-y-3 max-w-sm">
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <p className="text-sm text-muted-foreground">Overview content — workspace activity and recent pages.</p>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <p className="text-sm text-muted-foreground">Analytics content — views, edits, and collaborator activity.</p>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <p className="text-sm text-muted-foreground">Settings content — permissions, integrations, and preferences.</p>
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Tooltips">
        <TooltipProvider>
          <div className="flex gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>This is a tooltip</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">Add to page</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Ctrl+Shift+P</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">+</Button>
              </TooltipTrigger>
              <TooltipContent>Add block</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </Section>
    </div>
  );
}
