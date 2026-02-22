export interface IssueParams {
  owner: string;
  repo: string;
  issue: string;
}

export function buildWorktreeUrl(p: IssueParams): string {
  const q = new URLSearchParams({ owner: p.owner, repo: p.repo, issue: p.issue });
  return `worktree://open?${q.toString()}`;
}

export function IssueCard({ params }: { params: IssueParams }) {
  return (
    <div className="issue-card">
      <div className="issue-card-header">
        <span className="issue-card-repo">
          <span className="issue-card-repo-name">{params.owner}</span>
          <span className="issue-card-slash">/</span>
          <span className="issue-card-repo-name">{params.repo}</span>
        </span>
        <div className="issue-card-badge">#{params.issue}</div>
      </div>
      <div className="issue-card-body">
        <div className="issue-card-url">{buildWorktreeUrl(params)}</div>
      </div>
    </div>
  );
}
