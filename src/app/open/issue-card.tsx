export type IssueParams =
  | { kind: "github"; owner: string; repo: string; issue: string }
  | { kind: "gitlab"; owner: string; repo: string; issue: string }
  | { kind: "jira"; host: string; issueKey: string; owner: string; repo: string };

export function buildWorktreeUrl(p: IssueParams): string {
  if (p.kind === "jira") {
    const q = new URLSearchParams({
      jira_host: p.host,
      jira_issue_key: p.issueKey,
      owner: p.owner,
      repo: p.repo,
    });
    return `worktree://open?${q.toString()}`;
  }
  if (p.kind === "gitlab") {
    const q = new URLSearchParams({ owner: p.owner, repo: p.repo, issue: p.issue, gitlab: "true" });
    return `worktree://open?${q.toString()}`;
  }
  const q = new URLSearchParams({ owner: p.owner, repo: p.repo, issue: p.issue });
  return `worktree://open?${q.toString()}`;
}

export function IssueCard({ params }: { params: IssueParams }) {
  const badge = params.kind === "jira" ? params.issueKey : `#${params.issue}`;
  return (
    <div className="issue-card">
      <div className="issue-card-header">
        <span className="issue-card-repo">
          <span className="issue-card-repo-name">{params.owner}</span>
          <span className="issue-card-slash">/</span>
          <span className="issue-card-repo-name">{params.repo}</span>
        </span>
        <div className="issue-card-badge">{badge}</div>
      </div>
      <div className="issue-card-body">
        <div className="issue-card-url">{buildWorktreeUrl(params)}</div>
      </div>
    </div>
  );
}
