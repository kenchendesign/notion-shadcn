import { Section } from "@/components/section";
import { Separator } from "@/components/ui/separator";

export default function TypographyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Typography</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Notion text scale and content block styles.
        </p>
      </div>

      <Section title="Notion text scale">
        <div className="space-y-2">
          {[
            { label: "title-xl (26px)", cls: "", style: { fontSize: "var(--notion-text-title-xl)", fontWeight: 600 } },
            { label: "title-lg (22px)", cls: "", style: { fontSize: "var(--notion-text-title-lg)", fontWeight: 600 } },
            { label: "title (20px)", cls: "", style: { fontSize: "var(--notion-text-title)", fontWeight: 600 } },
            { label: "title-sm (17px)", cls: "", style: { fontSize: "var(--notion-text-title-sm)", fontWeight: 500 } },
            { label: "body-lg (16px)", cls: "", style: { fontSize: "var(--notion-text-body-lg)" } },
            { label: "body (14px)", cls: "", style: { fontSize: "var(--notion-text-body)" } },
            { label: "body-sm (13px)", cls: "", style: { fontSize: "var(--notion-text-body-sm)" } },
            { label: "caption (12px)", cls: "", style: { fontSize: "var(--notion-text-caption)", color: "var(--text-color-secondary)" } },
            { label: "caption-sm (10px)", cls: "", style: { fontSize: "var(--notion-text-caption-sm)", color: "var(--text-color-tertiary)" } },
          ].map(({ label, style }) => (
            <div key={label} className="flex items-baseline gap-4">
              <span className="text-xs text-muted-foreground w-36 shrink-0 font-mono">{label}</span>
              <span style={style}>The quick brown fox</span>
            </div>
          ))}
        </div>
      </Section>

      <Separator />

      <Section title="Content block styles">
        <div className="space-y-3 max-w-xl">
          <h1 className="content-page-title text-foreground">Page Title</h1>
          <h2 className="content-h1 text-foreground">Heading 1</h2>
          <h3 className="content-h2 text-foreground">Heading 2</h3>
          <h4 className="content-h3 text-foreground">Heading 3</h4>
          <p className="content-text-block text-foreground">
            Regular text block — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Notion uses a clean, readable type system built around Inter and system fonts.
          </p>
          <p className="content-text-block-bold text-foreground">
            Bold text block — Important information stands out clearly.
          </p>
          <p className="content-simple-table-text text-muted-foreground">
            Table text — 14px/20px, used in databases and structured content.
          </p>
        </div>
      </Section>

      <Separator />

      <Section title="Semantic text colors">
        <div className="space-y-1.5 text-sm">
          <p style={{ color: "var(--text-color-primary)" }}>Primary — Main text color</p>
          <p style={{ color: "var(--text-color-secondary)" }}>Secondary — Supporting text</p>
          <p style={{ color: "var(--text-color-tertiary)" }}>Tertiary — Subtle / placeholder</p>
          <p style={{ color: "var(--text-color-disabled)" }}>Disabled — Non-interactive text</p>
        </div>
      </Section>

      <Section title="Color text">
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
          {["red", "orange", "yellow", "green", "teal", "blue", "purple", "pink", "brown"].map((c) => (
            <span key={c} style={{ color: `var(--text-color-${c}-primary)` }} className="capitalize">
              {c}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
}
