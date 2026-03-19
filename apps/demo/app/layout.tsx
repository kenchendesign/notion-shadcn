import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "notion-shadcn",
  description: "Notion design system theme for shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
