import Link from "next/link";

export function GitHubMockup() {
  return (
    <div className="gh-mockup">
      <div className="gh-repo-bar">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8V1.5Z" />
        </svg>
        <span className="gh-repo-name">centy-io</span>
        <span className="gh-slash">/</span>
        <span className="gh-repo-name">centy-daemon</span>
        <span className="gh-issue-pill">Issue #31</span>
      </div>

      <div className="gh-issue-header">
        <div className="gh-issue-title">
          Cannot close issue - &quot;No issue found&quot; error despite file existing
        </div>
        <div className="gh-issue-meta">
          Opened 2 hours ago by{" "}
          <span className="gh-author">@bluedotiya</span>
        </div>
      </div>

      <div className="gh-comment-wrap">
        <div className="gh-comment-head">
          <div className="gh-avatar">W</div>
          <div className="gh-commenter">
            <span className="gh-commenter-name">worktree-bot</span>
            <span className="gh-commenter-time">commented just now</span>
          </div>
          <div className="gh-bot-pill">bot</div>
        </div>

        <div className="gh-comment-body">
          <p className="gh-comment-text">A workspace is ready for this issue.</p>
          <Link
            href="/open?owner=centy-io&repo=centy-daemon&issue=31"
            className="gh-open-btn anim-glow"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Open workspace
          </Link>
        </div>
      </div>
    </div>
  );
}
