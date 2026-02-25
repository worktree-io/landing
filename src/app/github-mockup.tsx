import Link from "next/link";
import { ArrowRight, BookMarked } from "lucide-react";

export function GitHubMockup() {
  return (
    <div className="gh-mockup">
      <div className="gh-repo-bar">
        <BookMarked size={16} color="#8b949e" strokeWidth={1.5} />
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
            <ArrowRight size={13} strokeWidth={1.5} />
            Open workspace
          </Link>
        </div>
      </div>
    </div>
  );
}
