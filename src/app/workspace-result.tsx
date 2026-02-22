export function WorkspaceResult() {
  return (
    <div className="terminal">
      <div className="terminal-titlebar">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="terminal-label">terminal</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-line-muted">
          <span className="terminal-line-prompt">$</span> worktree open
        </div>
        <div className="terminal-line-success">
          {"  "}✓ Fetching issue #31
        </div>
        <div className="terminal-line-success">
          {"  "}✓ Creating worktree{"   "}
          <span className="terminal-line-path">~/worktrees/centy-daemon/issue-31</span>
        </div>
        <div className="terminal-line-success">
          {"  "}✓ Opening VS Code
        </div>
      </div>
    </div>
  );
}
