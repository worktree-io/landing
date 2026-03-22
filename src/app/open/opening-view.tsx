"use client";

import { Check, RefreshCw } from "lucide-react";
import type { IssueParams } from "./issue-card";
import { IssueCard } from "./issue-card";
import { useAutoClose } from "./use-auto-close";

type OpeningPhase = "opening" | "success";

interface OpeningViewProps {
  phase: OpeningPhase;
  params: IssueParams;
  onSuccess: () => void;
  onInstall: () => void;
  onRetry: () => void;
}

function ConfirmActions({ onSuccess, onInstall, onRetry }: Omit<OpeningViewProps, "phase" | "params">) {
  return (
    <div className="anim-fade-up d-300">
      <div className="confirm-section">
        <p className="confirm-question">Did your editor open?</p>
        <div className="confirm-actions">
          <button onClick={onSuccess} className="btn-accent btn--flex1">
            <Check size={13} strokeWidth={1.8} />
            Yes, it opened
          </button>
          <button onClick={onInstall} className="btn-ghost btn--flex1">
            No, install Worktree
          </button>
        </div>
      </div>
      <button onClick={onRetry} className="retry-btn">
        <RefreshCw size={11} strokeWidth={1.3} />
        Try again
      </button>
    </div>
  );
}

function SuccessFooter({ autoClose, countdown, onToggle }: { autoClose: boolean; countdown: number; onToggle: (v: boolean) => void }) {
  return (
    <div className="anim-fade-up success-footer">
      <p className="close-tab-text">
        {autoClose ? `Closing in ${countdown}\u2026` : "You can close this tab."}
      </p>
      <label className="auto-close-toggle">
        <input type="checkbox" checked={autoClose} onChange={(e) => onToggle(e.target.checked)} className="auto-close-checkbox" />
        Auto-close tab
      </label>
    </div>
  );
}

export function OpeningView({ phase, params, onSuccess, onInstall, onRetry }: OpeningViewProps) {
  const { autoClose, countdown, handleToggle } = useAutoClose(phase === "success");

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
              <Check size={14} color="#3effa0" strokeWidth={2} />
            </div>
            <div className="status-info">
              <div className="status-label status-label--success">Workspace opened</div>
              <div className="status-detail">Your editor should be in focus</div>
            </div>
          </>
        )}
      </div>
      <IssueCard params={params} />
      {phase === "opening" && <ConfirmActions onSuccess={onSuccess} onInstall={onInstall} onRetry={onRetry} />}
      {phase === "success" && <SuccessFooter autoClose={autoClose} countdown={countdown} onToggle={handleToggle} />}
    </div>
  );
}
