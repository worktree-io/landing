import { INSTALL_CMD } from "@/lib/install-cmd";

export function InstallGuide() {
  return (
    <div className="install-guide anim-fade-up">
      <div className="install-guide-body">
        <div className="guide-step">
          <div className="guide-step-label">1 — Install</div>
          <div className="code-block">
            <span className="prompt">$ </span>
            {INSTALL_CMD}
          </div>
        </div>

        <div className="guide-step">
          <div className="guide-step-label">2 — Setup</div>
          <div className="code-block">
            <span className="prompt">$ </span>
            worktree setup
          </div>
          <p className="guide-step-note">
            Registers the <code className="inline-code">worktree://</code> URL scheme and selects your editor.
          </p>
        </div>
      </div>
    </div>
  );
}
