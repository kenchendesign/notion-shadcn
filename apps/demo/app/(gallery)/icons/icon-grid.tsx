"use client";

import { useState, useMemo } from "react";
import * as Icons from "notion-shadcn/icons";
import { Icon, ICON_SIZE } from "notion-shadcn/icons";
import type { LoadedIconFunction, IconSize } from "notion-shadcn/icons";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Variant = "default" | "fill" | "small" | "fillSmall";

type IconEntry = {
  name: string;
  variant: Variant;
  icon: LoadedIconFunction;
};

const VARIANT_SUFFIXES: { suffix: string; variant: Variant }[] = [
  { suffix: "FillSmallIcon", variant: "fillSmall" },
  { suffix: "FillIcon", variant: "fill" },
  { suffix: "SmallIcon", variant: "small" },
  { suffix: "Icon", variant: "default" },
];

const SMALL_SIZES = new Set<IconSize>(["xxs", "xs", "sm"]);

const allIcons: IconEntry[] = (
  Object.entries(Icons)
    .map(([key, val]) => {
      if (typeof val !== "function") return null;
      for (const { suffix, variant } of VARIANT_SUFFIXES) {
        if (key.endsWith(suffix)) {
          const name = key.slice(0, key.length - suffix.length);
          if (!name) return null;
          return { name, variant, icon: val as LoadedIconFunction };
        }
      }
      return null;
    })
    .filter((e): e is IconEntry => e !== null)
    .sort((a, b) => a.name.localeCompare(b.name))
);

export function IconGrid() {
  const [search, setSearch] = useState("");
  const [fill, setFill] = useState(false);
  const [size, setSize] = useState<IconSize>("default");

  const isSmall = SMALL_SIZES.has(size);
  const variant: Variant = fill
    ? isSmall ? "fillSmall" : "fill"
    : isSmall ? "small" : "default";

  const filtered = useMemo(() => {
    const byVariant = allIcons.filter((e) => e.variant === variant);
    if (!search.trim()) return byVariant;
    const q = search.toLowerCase();
    return byVariant.filter((e) => e.name.toLowerCase().includes(q));
  }, [search, variant]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Input
          placeholder="Search icons…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <div className="flex items-center gap-2">
          <Switch id="fill" checked={fill} onCheckedChange={setFill} />
          <Label htmlFor="fill" className="font-normal cursor-pointer">Fill</Label>
        </div>
        <Select value={size} onValueChange={(v) => setSize(v as IconSize)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(ICON_SIZE).map(([k, v]) => (
              <SelectItem key={k} value={k}>{k} ({v}px)</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="text-muted-foreground">{filtered.length} icons</p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-1">
        {filtered.map((entry) => (
          <div
            key={entry.name}
            className="flex flex-col items-center gap-1.5 p-2.5 rounded-sm hover:bg-accent cursor-default group"
            title={entry.name}
          >
            <div className="text-foreground" style={{ width: ICON_SIZE[size], height: ICON_SIZE[size] }}>
              <Icon icon={entry.icon} size={size} color="primary" />
            </div>
            <span className="text-muted-foreground text-center leading-tight truncate w-full group-hover:text-foreground">
              {entry.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
