"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GITHUB_URL } from "@/lib/github-url";
import { INSTALL_CMD } from "@/lib/install-cmd";

type Phase =
  | "loading"    // reading URL params
  | "opening"    // scheme triggered, awaiting user confirmation
  | "success"    // user confirmed it opened
  | "install"    // user says it didn't open → show install guide
  | "no-params"; // no valid params in URL

interface IssueParams {
  owner: string;
  repo: string;
  issue: string;
}

/* ─── helpers ─────────────────────────────────────────────────────────── */
function buildWorktreeUrl(p: IssueParams): string {
  const q = new URLSearchParams({ owner: p.owner, repo: p.repo, issue: p.issue });
  return `worktree://open?${q.toString()}`;
}

/* ─── sub-components ──────────────────────────────────────────────────── */
function IssueCard({ params }: { params: IssueParams }) {
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

function InstallGuide() {
  return (
    <div className="install-guide anim-fade-up">
      <div className="install-guide-body">
        {/* Step 1: Install */}
        <div className="guide-step">
          <div className="guide-step-label">1 — Install</div>
          <div className="code-block">
            <span className="prompt">$ </span>
            {INSTALL_CMD}
          </div>
        </div>

        {/* Step 2: Setup */}
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

/* ─── main page ──────────────────────────────────────────────────────────*/
export default function OpenPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [params, setParams] = useState<IssueParams | null>(null);
  const schemeTriggered = useRef(false);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const owner = sp.get("owner")?.trim() ?? "";
    const repo = sp.get("repo")?.trim() ?? "";
    const issue = sp.get("issue")?.trim() ?? "";

    if (!owner || !repo || !issue) {
      setPhase("no-params");
      return;
    }

    const p = { owner, repo, issue };
    setParams(p);
    setPhase("opening");

    // Trigger the custom URL scheme once
    if (schemeTriggered.current) return;
    schemeTriggered.current = true;
    // window.location.href doesn't navigate away for custom URL schemes —
    // the browser hands off to the registered handler and stays on the page.
    window.location.href = buildWorktreeUrl(p);
  }, []);

  /* ── retry: re-trigger the scheme ── */
  function handleRetry() {
    if (!params) return;
    schemeTriggered.current = false;
    setPhase("opening");
    window.location.href = buildWorktreeUrl(params);
  }

  return (
    <div className="open-page">
      {/* Nav */}
      <header className="open-nav">
        <Link href="/" className="open-nav-brand">Worktree</Link>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="open-nav-link"
        >
          GitHub
        </a>
      </header>

      {/* Main content */}
      <main className="open-main">
        <div className="open-content">

          {/* ── NO PARAMS ─────────────────────────────────────────── */}
          {phase === "no-params" && (
            <div className="no-params-center anim-fade-up">
              <div className="no-params-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 6v5M10 14h.01M19 10A9 9 0 1 1 1 10a9 9 0 0 1 18 0Z"
                    stroke="#9090a8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h1 className="no-params-title">No issue specified</h1>
              <p className="no-params-body">
                This page is meant to be opened from a GitHub issue comment.
                The link should include{" "}
                <code className="inline-code">?owner=…&repo=…&issue=…</code>{" "}
                parameters.
              </p>
              <Link href="/" className="btn-ghost">
                ← Back to home
              </Link>
            </div>
          )}

          {/* ── LOADING ──────────────────────────────────────────── */}
          {phase === "loading" && (
            <div className="loading-center">
              <div className="spinner-lg anim-spin" />
            </div>
          )}

          {/* ── OPENING ──────────────────────────────────────────── */}
          {(phase === "opening" || phase === "success") && params && (
            <div className="phase-content">
              {/* Status row */}
              <div className="status-row anim-fade-up">
                {phase === "opening" ? (
                  <>
                    <div className="spinner-sm anim-spin" />
                    <div className="status-info">
                      <div className="status-label status-label--opening">
                        Opening workspace
                      </div>
                      <div className="status-detail">
                        Launching Worktree daemon…
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="status-icon-success">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 7l3.5 3.5L12 3"
                          stroke="#3effa0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="status-info">
                      <div className="status-label status-label--success">
                        Workspace opened
                      </div>
                      <div className="status-detail">
                        Your editor should be in focus
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Issue card */}
              <IssueCard params={params} />

              {/* Confirmation / feedback */}
              {phase === "opening" && (
                <div className="anim-fade-up d-300">
                  <div className="confirm-section">
                    <p className="confirm-question">Did your editor open?</p>
                    <div className="confirm-actions">
                      <button
                        onClick={() => setPhase("success")}
                        className="btn-accent btn--flex1"
                      >
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path
                            d="M1.5 6.5l3.5 3.5 6.5-7"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Yes, it opened
                      </button>
                      <button
                        onClick={() => setPhase("install")}
                        className="btn-ghost btn--flex1"
                      >
                        No, install Worktree
                      </button>
                    </div>
                  </div>

                  <button onClick={handleRetry} className="retry-btn">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path
                        d="M1 5.5A4.5 4.5 0 0 1 9.7 3M10 5.5A4.5 4.5 0 0 1 1.3 8"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                      <path d="M10 1.5V3.5H8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 9.5V7.5H3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Try again
                  </button>
                </div>
              )}

              {phase === "success" && (
                <div className="anim-fade-up">
                  <p className="close-tab-text">You can close this tab.</p>
                </div>
              )}
            </div>
          )}

          {/* ── INSTALL ──────────────────────────────────────────── */}
          {phase === "install" && (
            <div className="phase-content">
              {/* Header */}
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

              {/* Issue context if available */}
              {params && <IssueCard params={params} />}

              {/* Install guide */}
              <InstallGuide />

              {/* Try again link */}
              {params && (
                <div className="install-try-again">
                  <button
                    onClick={handleRetry}
                    className="btn-ghost btn-accent--full"
                  >
                    I installed it — try opening again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="open-footer">
        <span className="open-footer-text">Worktree — open source</span>
        <span className="open-footer-sep">·</span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="open-footer-link"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
