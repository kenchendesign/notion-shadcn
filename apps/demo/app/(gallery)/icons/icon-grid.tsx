"use client";

import { useState, useMemo } from "react";
import { Icon, ICON_SIZE } from "notion-shadcn/icons";
import type { LoadedIconFunction, IconSize } from "notion-shadcn/icons";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type IconEntry = {
  name: string;
  variant: string;
  icon: LoadedIconFunction;
};

export function IconGrid({ icons }: { icons: IconEntry[] }) {
  const [search, setSearch] = useState("");
  const [size, setSize] = useState<IconSize>("default");

  const filtered = useMemo(() => {
    if (!search.trim()) return icons;
    const q = search.toLowerCase();
    return icons.filter((e) => e.name.toLowerCase().includes(q) || e.variant.toLowerCase().includes(q));
  }, [icons, search]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Search icons…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
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

      <p className="text-xs text-muted-foreground">{filtered.length} icons</p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-1">
        {filtered.map((entry) => (
          <div
            key={`${entry.name}-${entry.variant}`}
            className="flex flex-col items-center gap-1.5 p-2.5 rounded-sm hover:bg-accent cursor-default group"
            title={`${entry.name} (${entry.variant})`}
          >
            <div className="text-foreground" style={{ width: ICON_SIZE[size], height: ICON_SIZE[size] }}>
              <Icon icon={entry.icon} size={size} color="primary" />
            </div>
            <span className="text-[10px] text-muted-foreground text-center leading-tight truncate w-full text-center group-hover:text-foreground">
              {entry.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
