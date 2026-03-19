export default function OverviewPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-semibold">Notion shadcn Theme</h1>
        <p className="mt-1">
          A theme that brings the Notion product look and feel to shadcn/ui.
        </p>
      </div>

      <p>
        This repository contains official theme tokens, styles, and example components used in Notion projects.
        It's optimized for Notion's own surfaces and for apps built with Notion's agents and system of record,
        but it's also available for anyone who wants to build Notion‑adjacent experiences.
      </p>

      <div>
        <h2 className="font-semibold mb-2">Intended use</h2>
        <p className="mb-3">This theme is designed for:</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Notion‑owned products and experiments.</li>
          <li>First‑ and third‑party apps that integrate with Notion, including agents and tooling that use Notion as a system of record.</li>
        </ul>
        <p className="mt-3">
          You're welcome to use it in other projects, but please don't repackage it as a standalone theme library, template pack, or design kit.
        </p>
      </div>
    </div>
  );
}
