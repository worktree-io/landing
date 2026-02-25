import Link from "next/link";
import { GITHUB_URL } from "@/lib/github-url";

export function OpenNav() {
  return (
    <header className="open-nav">
      <Link href="/" className="open-nav-brand">Worktree</Link>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="open-nav-link">
        GitHub
      </a>
    </header>
  );
}

export function OpenFooter() {
  return (
    <footer className="open-footer">
      <span className="open-footer-text">Worktree — open source</span>
      <span className="open-footer-sep">·</span>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="open-footer-link">
        GitHub
      </a>
    </footer>
  );
}
