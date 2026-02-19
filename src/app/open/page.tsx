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

function detectPlatform(): "mac" | "linux" | "windows" {
  if (typeof navigator === "undefined") return "mac";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux")) return "linux";
  return "mac";
}

/* ─── sub-components ──────────────────────────────────────────────────── */
function IssueCard({ params }: { params: IssueParams }) {
  return (
    <div
      style={{
        border: "1px solid #1c1c24",
        borderRadius: 8,
        overflow: "hidden",
        background: "#0d0d10",
        marginBottom: 28,
      }}
    >
      <div
        style={{
          padding: "10px 16px",
          borderBottom: "1px solid #1c1c24",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontSize: "0.8125rem",
            color: "#68687a",
          }}
        >
          <span style={{ color: "#ebebef", fontWeight: 600 }}>{params.owner}</span>
          <span style={{ margin: "0 4px" }}>/</span>
          <span style={{ color: "#ebebef", fontWeight: 600 }}>{params.repo}</span>
        </span>
        <div
          style={{
            marginLeft: "auto",
            fontFamily: "var(--font-jetbrains-mono, monospace)",
            fontSize: "0.75rem",
            color: "#a78bfa",
            background: "rgba(167,139,250,0.1)",
            border: "1px solid rgba(167,139,250,0.2)",
            borderRadius: 4,
            padding: "2px 8px",
          }}
        >
          #{params.issue}
        </div>
      </div>
      <div style={{ padding: "12px 16px" }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono, monospace)",
            fontSize: "0.75rem",
            color: "#3e3e50",
          }}
        >
          {buildWorktreeUrl(params)}
        </div>
      </div>
    </div>
  );
}

function InstallGuide() {
  const platform = detectPlatform();

  const platforms: Array<{
    id: "mac" | "linux" | "windows";
    label: string;
    cmd: string;
    prompt: string;
    dl: string;
  }> = [
    {
      id: "mac",
      label: "macOS",
      cmd: INSTALL_CMD,
      prompt: "$",
      dl: "Download .dmg",
    },
    {
      id: "linux",
      label: "Linux",
      cmd: INSTALL_CMD,
      prompt: "$",
      dl: "Download .tar.gz",
    },
    {
      id: "windows",
      label: "Windows",
      cmd: INSTALL_CMD,
      prompt: "$",
      dl: "Download .msi",
    },
  ];

  const current = platforms.find((p) => p.id === platform) ?? platforms[0];

  return (
    <div
      className="anim-fade-up"
      style={{
        border: "1px solid #1c1c24",
        borderRadius: 10,
        overflow: "hidden",
        background: "#0d0d10",
      }}
    >
      {/* Platform tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #1c1c24",
        }}
      >
        {platforms.map((p) => (
          <div
            key={p.id}
            style={{
              flex: 1,
              padding: "10px 0",
              textAlign: "center",
              fontFamily: "var(--font-syne, sans-serif)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: p.id === platform ? "#a78bfa" : "#3e3e50",
              borderBottom:
                p.id === platform
                  ? "2px solid #a78bfa"
                  : "2px solid transparent",
              marginBottom: -1,
            }}
          >
            {p.label}
          </div>
        ))}
      </div>

      <div style={{ padding: 20 }}>
        {/* Step 1: Install */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#a78bfa",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            1 — Install
          </div>
          <div className="code-block">
            <span className="prompt">{current.prompt} </span>
            {current.cmd}
          </div>
        </div>

        {/* Step 2: Setup */}
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#a78bfa",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            2 — Setup
          </div>
          <div className="code-block">
            <span className="prompt">{current.prompt} </span>
            worktree setup
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#68687a",
              marginTop: 8,
              lineHeight: 1.6,
            }}
          >
            Registers the <code
              style={{
                fontFamily: "var(--font-jetbrains-mono, monospace)",
                fontSize: "0.75rem",
                color: "#ebebef",
                background: "#141418",
                border: "1px solid #1c1c24",
                borderRadius: 3,
                padding: "0 5px",
              }}
            >worktree://</code> URL scheme and selects your editor.
          </p>
        </div>

        {/* Download link */}
        <a href="#" className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
          {current.dl}
        </a>
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
    // Use a hidden iframe so we don't navigate away from the page
    try {
      const iframe = document.createElement("iframe");
      iframe.style.cssText = "position:absolute;width:0;height:0;border:none;opacity:0;";
      iframe.src = buildWorktreeUrl(p);
      document.body.appendChild(iframe);
      setTimeout(() => {
        if (document.body.contains(iframe)) document.body.removeChild(iframe);
      }, 3000);
    } catch {
      // fallback: direct navigation (stays on page for custom schemes)
      window.location.href = buildWorktreeUrl(p);
    }
  }, []);

  /* ── retry: re-trigger the scheme ── */
  function handleRetry() {
    if (!params) return;
    schemeTriggered.current = false;
    setPhase("opening");
    try {
      const iframe = document.createElement("iframe");
      iframe.style.cssText = "position:absolute;width:0;height:0;border:none;opacity:0;";
      iframe.src = buildWorktreeUrl(params);
      document.body.appendChild(iframe);
      setTimeout(() => {
        if (document.body.contains(iframe)) document.body.removeChild(iframe);
      }, 3000);
    } catch {
      window.location.href = buildWorktreeUrl(params);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070708",
        color: "#ebebef",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Nav */}
      <header
        style={{
          borderBottom: "1px solid #1c1c24",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontWeight: 800,
            fontSize: "1.05rem",
            letterSpacing: "-0.02em",
            color: "#ebebef",
            textDecoration: "none",
          }}
        >
          Worktree
        </Link>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "#3e3e50",
            textDecoration: "none",
          }}
        >
          GitHub
        </a>
      </header>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 480 }}>

          {/* ── NO PARAMS ─────────────────────────────────────────── */}
          {phase === "no-params" && (
            <div className="anim-fade-up" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1px solid #2c2c3a",
                  background: "#0d0d10",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 6v5M10 14h.01M19 10A9 9 0 1 1 1 10a9 9 0 0 1 18 0Z"
                    stroke="#68687a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-syne, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  letterSpacing: "-0.02em",
                  color: "#ebebef",
                  marginBottom: 10,
                }}
              >
                No issue specified
              </h1>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#68687a",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                This page is meant to be opened from a GitHub issue comment.
                The link should include{" "}
                <code
                  style={{
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "0.8rem",
                    color: "#ebebef",
                    background: "#141418",
                    border: "1px solid #1c1c24",
                    borderRadius: 3,
                    padding: "0 5px",
                  }}
                >
                  ?owner=…&repo=…&issue=…
                </code>{" "}
                parameters.
              </p>
              <Link href="/" className="btn-ghost">
                ← Back to home
              </Link>
            </div>
          )}

          {/* ── LOADING ──────────────────────────────────────────── */}
          {phase === "loading" && (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  border: "2px solid #1c1c24",
                  borderTopColor: "#a78bfa",
                  borderRadius: "50%",
                  margin: "0 auto",
                }}
                className="anim-spin"
              />
            </div>
          )}

          {/* ── OPENING ──────────────────────────────────────────── */}
          {(phase === "opening" || phase === "success") && params && (
            <div>
              {/* Status row */}
              <div
                className="anim-fade-up"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 28,
                }}
              >
                {phase === "opening" ? (
                  <>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        border: "2px solid #1c1c24",
                        borderTopColor: "#a78bfa",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                      className="anim-spin"
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-syne, sans-serif)",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          letterSpacing: "-0.02em",
                          color: "#ebebef",
                        }}
                      >
                        Opening workspace
                      </div>
                      <div
                        style={{
                          fontSize: "0.8125rem",
                          color: "#68687a",
                          marginTop: 2,
                        }}
                      >
                        Launching Worktree daemon…
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        background: "rgba(62,255,160,0.1)",
                        border: "1px solid rgba(62,255,160,0.3)",
                        borderRadius: "50%",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
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
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-syne, sans-serif)",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          letterSpacing: "-0.02em",
                          color: "#3effa0",
                        }}
                      >
                        Workspace opened
                      </div>
                      <div
                        style={{
                          fontSize: "0.8125rem",
                          color: "#68687a",
                          marginTop: 2,
                        }}
                      >
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
                  <div
                    style={{
                      borderTop: "1px solid #1c1c24",
                      paddingTop: 20,
                      marginBottom: 16,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "#68687a",
                        marginBottom: 14,
                        lineHeight: 1.6,
                      }}
                    >
                      Did your editor open?
                    </p>
                    <div style={{ display: "flex", gap: 10 }}>
                      <button
                        onClick={() => setPhase("success")}
                        className="btn-accent"
                        style={{ flex: 1, justifyContent: "center" }}
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
                        className="btn-ghost"
                        style={{ flex: 1, justifyContent: "center" }}
                      >
                        No, install Worktree
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleRetry}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-syne, sans-serif)",
                      fontSize: "0.8rem",
                      color: "#3e3e50",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#68687a")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#3e3e50")}
                  >
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
                <div className="anim-fade-up" style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "#3e3e50",
                      lineHeight: 1.6,
                    }}
                  >
                    You can close this tab.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ── INSTALL ──────────────────────────────────────────── */}
          {phase === "install" && (
            <div>
              {/* Header */}
              <div
                className="anim-fade-up"
                style={{ marginBottom: 24 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#ff5a5a",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-syne, sans-serif)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#ff5a5a",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Worktree not detected
                  </span>
                </div>
                <h1
                  style={{
                    fontFamily: "var(--font-syne, sans-serif)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    letterSpacing: "-0.02em",
                    color: "#ebebef",
                    marginBottom: 8,
                  }}
                >
                  Install Worktree to open this workspace
                </h1>
                {params && (
                  <p
                    style={{ fontSize: "0.8125rem", color: "#68687a", lineHeight: 1.6 }}
                  >
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
                <div style={{ marginTop: 20, textAlign: "center" }}>
                  <button
                    onClick={handleRetry}
                    className="btn-ghost"
                    style={{ width: "100%", justifyContent: "center" }}
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
      <footer
        style={{
          borderTop: "1px solid #1c1c24",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "#2e2e3c" }}>
          Worktree — open source
        </span>
        <span style={{ color: "#1c1c24" }}>·</span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.75rem",
            color: "#3e3e50",
            textDecoration: "none",
            fontFamily: "var(--font-syne, sans-serif)",
          }}
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
