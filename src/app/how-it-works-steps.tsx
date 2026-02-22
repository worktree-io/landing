import type { ReactNode } from "react";

export interface Step {
  n: string;
  title: string;
  body: string;
  detail: string | string[];
  icon: ReactNode;
}

export const SETUP_STEPS: Step[] = [
  {
    n: "01",
    title: "Install Worktree",
    body: "Install the daemon with cargo, then run the setup wizard to register the URL handler and pick your editor.",
    detail: ["cargo install worktree", "worktree setup"],
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4l6-2 6 2v6l-6 3-6-3V4z" />
        <path d="M8 2v9M2 4l6 3 6-3" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Add GitHub Action",
    body: "Add a four-line workflow to your repo. Every new issue gets an \"Open workspace\" comment from that point on.",
    detail: ".github/workflows/worktree.yml",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="1" width="10" height="13" rx="1.5" />
        <path d="M5 5h4M5 8h4M5 11h2" />
        <path d="M13 5l1.5 1.5L13 8" />
      </svg>
    ),
  },
];

export const FLOW_STEPS: Step[] = [
  {
    n: "03",
    title: "Issue opens",
    body: `The action triggers and posts an "Open workspace" link as a comment. Nothing for you to do.`,
    detail: "worktree-io/action@v1",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h12a1 1 0 011 1v7a1 1 0 01-1 1H5l-3 2V4a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Click the link",
    body: "One click opens this page, which wakes up Worktree running on your machine. No terminal. No manual steps.",
    detail: "worktree://open?...",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9" />
        <path d="M10 2h4v4M14 2L7 9" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Workspace opens",
    body: "The daemon creates a local worktree directory and opens it in your configured editor. Instantly.",
    detail: "code . · idea . · nvim .",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="2" width="14" height="12" rx="2" />
        <path d="M4 6l3 3-3 3M9 12h3" />
      </svg>
    ),
  },
];
