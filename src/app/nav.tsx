import { ArrowUpRight } from "lucide-react";
import { SpawnIcon } from "./spawn-icon";
import { GITHUB_URL } from "@/lib/github-url";

export function Nav() {
  return (
    <header className="nav-header">
      <div className="nav-inner">
        <span className="nav-brand" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <SpawnIcon size={16} style={{ color: "#a78bfa", flexShrink: 0 }} />
          Worktree
        </span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          GitHub
          <ArrowUpRight size={11} strokeWidth={1.5} />
        </a>
      </div>
    </header>
  );
}
