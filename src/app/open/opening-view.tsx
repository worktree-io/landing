"use client";

import type { IssueParams } from "./issue-card";
import { IssueCard } from "./issue-card";

type OpeningPhase = "opening" | "success";

interface OpeningViewProps {
  phase: OpeningPhase;
  params: IssueParams;
  onSuccess: () => void;
  onInstall: () => void;
  onRetry: () => void;
}

interface ConfirmActionsProps {
  onSuccess: () => void;
  onInstall: () => void;
  onRetry: () => void;
}

function ConfirmActions({ onSuccess, onInstall, onRetry }: ConfirmActionsProps) {
  return (
    <div className="anim-fade-up d-300">
      <div className="confirm-section">
        <p className="confirm-question">Did your editor open?</p>
        <div className="confirm-actions">
          <button onClick={onSuccess} className="btn-accent btn--flex1">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1.5 6.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Yes, it opened
          </button>
          <button onClick={onInstall} className="btn-ghost btn--flex1">
            No, install Worktree
          </button>
        </div>
      </div>
      <button onClick={onRetry} className="retry-btn">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M1 5.5A4.5 4.5 0 0 1 9.7 3M10 5.5A4.5 4.5 0 0 1 1.3 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M10 1.5V3.5H8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 9.5V7.5H3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Try again
      </button>
    </div>
  );
}

export function OpeningView({ phase, params, onSuccess, onInstall, onRetry }: OpeningViewProps) {
  return (
    <div className="phase-content">
      <div className="status-row anim-fade-up">
        {phase === "opening" ? (
          <>
            <div className="spinner-sm anim-spin" />
            <div className="status-info">
              <div className="status-label status-label--opening">Opening workspace</div>
              <div className="status-detail">Launching Worktree daemon…</div>
            </div>
          </>
        ) : (
          <>
            <div className="status-icon-success">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l3.5 3.5L12 3" stroke="#3effa0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="status-info">
              <div className="status-label status-label--success">Workspace opened</div>
              <div className="status-detail">Your editor should be in focus</div>
            </div>
          </>
        )}
      </div>

      <IssueCard params={params} />

      {phase === "opening" && (
        <ConfirmActions onSuccess={onSuccess} onInstall={onInstall} onRetry={onRetry} />
      )}

      {phase === "success" && (
        <div className="anim-fade-up">
          <p className="close-tab-text">You can close this tab.</p>
        </div>
      )}
    </div>
  );
}
