import type { ReactNode } from "react";
import {
  CommentIcon,
  InstallIcon,
  LinkIcon,
  TerminalIcon,
  WorkflowIcon,
} from "./how-it-works-icons";

export interface Step {
  n: string;
  title: string;
  body: string;
  detail: string | string[];
  icon: ReactNode;
}

const CRATE_NAME = "worktree-io";
const INSTALL_CMD = `cargo install ${CRATE_NAME}`;
const SETUP_CMD = "worktree setup";

export const SETUP_STEPS: Step[] = [
  {
    n: "01",
    title: "Install Worktree",
    body: "Install the daemon with cargo, then run the setup wizard to register the URL handler and pick your editor.",
    detail: [INSTALL_CMD, SETUP_CMD],
    icon: InstallIcon,
  },
  {
    n: "02",
    title: "Add GitHub Action",
    body: 'Add a four-line workflow to your repo. Every new issue gets an "Open workspace" comment from that point on.',
    detail: ".github/workflows/worktree.yml",
    icon: WorkflowIcon,
  },
];

export const FLOW_STEPS: Step[] = [
  {
    n: "03",
    title: "Issue opens",
    body: `The action triggers and posts an "Open workspace" link as a comment. Nothing for you to do.`,
    detail: "worktree-io/comment-action@v1",
    icon: CommentIcon,
  },
  {
    n: "04",
    title: "Click the link",
    body: "One click opens this page, which wakes up Worktree running on your machine. No terminal. No manual steps.",
    detail: "worktree://open?...",
    icon: LinkIcon,
  },
  {
    n: "05",
    title: "Workspace opens",
    body: "The daemon creates a local worktree directory and opens it in your configured editor. Instantly.",
    detail: "code . · idea . · nvim .",
    icon: TerminalIcon,
  },
];
