"use client";

import type { IssueParams } from "./issue-card";
import { IssueCard } from "./issue-card";
import { InstallGuide } from "./install-guide";

interface InstallViewProps {
  params: IssueParams | null;
  onRetry: () => void;
}

export function InstallView({ params, onRetry }: InstallViewProps) {
  return (
    <div className="phase-content">
      <div className="install-phase-header anim-fade-up">
        <div className="not-detected-row">
          <div className="not-detected-dot" />
          <span className="not-detected-label">Worktree not detected</span>
        </div>
        <h1 className="install-phase-title">
          Install Worktree to open this workspace
        </h1>
        {params && (
          <p className="install-phase-body">
            Once installed, come back and click the issue link again.
          </p>
        )}
      </div>

      {params && <IssueCard params={params} />}

      <InstallGuide />

      {params && (
        <div className="install-try-again">
          <button
            onClick={onRetry}
            className="btn-ghost btn-accent--full"
          >
            I installed it — try opening again
          </button>
        </div>
      )}
    </div>
  );
}
