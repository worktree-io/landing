import { GITHUB_URL } from "@/lib/github-url";

export function Nav() {
  return (
    <header className="nav-header">
      <div className="nav-inner">
        <span className="nav-brand">Worktree</span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          GitHub
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
