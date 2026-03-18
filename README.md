  <img src="./assets/notion-logo.svg" alt="Notion logo" width="64" />

# Notion shadcn Theme

A theme that brings the Notion product look and feel to shadcn/ui.

This repository contains official theme tokens, styles, and example components used in Notion projects. It’s optimized for Notion’s own surfaces and for apps built with Notion’s agents and system of record, but it’s also available for anyone who wants to build Notion‑adjacent experiences.

## Usage

1. Install the package:

   ```bash
   pnpm add @notion/shadcn-theme
   ```

2. Wrap your app with the provided theme provider and globals:

   ```tsx
   import { NotionThemeProvider } from "@notion/shadcn-theme";

   export function App() {
     return (
       <NotionThemeProvider>
         {/* your app */}
       </NotionThemeProvider>
     );
   }
   ```

3. Use shadcn/ui components as usual. The Notion theme will handle tokens, colors, and typography.

## Intended use

This theme is designed for:

- Notion‑owned products and experiments.
- First‑ and third‑party apps that integrate with Notion, including agents and tooling that use Notion as a system of record.

You’re welcome to use it in other projects, but please don’t repackage it as a standalone theme library, template pack, or design kit.

## License

MIT. See the LICENSE file for details.
