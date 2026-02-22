import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Worktree — Open issues as workspaces",
  description:
    "Click any issue link and your editor opens with a local workspace. No config, no friction.",
  openGraph: {
    title: "Worktree — Open issues as workspaces",
    description:
      "Click any issue link and your editor opens with a local workspace. No config, no friction.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
