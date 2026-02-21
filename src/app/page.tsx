import Link from "next/link";
import { CopyButton } from "./copy-button";
import { GITHUB_URL } from "@/lib/github-url";
import { INSTALL_CMD } from "@/lib/install-cmd";

const RUNNER_URL = "https://github.com/worktree-io/runner/releases/latest/download";

/* ─── shared styles ───────────────────────────────────────────────────── */
const sectionLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-syne, sans-serif)",
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#a78bfa",
  marginBottom: 12,
};

const pillStyle: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono, monospace)",
  fontSize: "0.75rem",
  color: "#9090a8",
  background: "#141418",
  border: "1px solid #1c1c24",
  borderRadius: 4,
  padding: "4px 10px",
  display: "inline-block",
};

const groupLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-syne, sans-serif)",
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#9090a8",
  marginBottom: 14,
};

/* ─── static data ─────────────────────────────────────────────────────── */
const setupSteps = [
  {
    n: "01",
    title: "Install Worktree",
    body: "Install the daemon with cargo, then run the setup wizard to register the URL handler and pick your editor.",
    detail: ["cargo install worktree", "worktree setup"],
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4l6-2 6 2v6l-6 3-6-3V4z" />
        <path d="M8 2v9M2 4l6 3 6-3" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Add GitHub Action",
    body: "Add a four-line workflow to your repo. Every new issue gets an \"Open workspace\" comment from that point on.",
    detail: ".github/workflows/worktree.yml",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="1" width="10" height="13" rx="1.5" />
        <path d="M5 5h4M5 8h4M5 11h2" />
        <path d="M13 5l1.5 1.5L13 8" />
      </svg>
    ),
  },
];

const flowSteps = [
  {
    n: "03",
    title: "Issue opens",
    body: `The action triggers and posts an "Open workspace" link as a comment. Nothing for you to do.`,
    detail: "worktree-io/action@v1",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h12a1 1 0 011 1v7a1 1 0 01-1 1H5l-3 2V4a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Click the link",
    body: "One click opens this page, which wakes up Worktree running on your machine. No terminal. No manual steps.",
    detail: "worktree://open?...",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9" />
        <path d="M10 2h4v4M14 2L7 9" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Workspace opens",
    body: "The daemon creates a local worktree directory and opens it in your configured editor. Instantly.",
    detail: "code . · idea . · nvim .",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="2" width="14" height="12" rx="2" />
        <path d="M4 6l3 3-3 3M9 12h3" />
      </svg>
    ),
  },
];

const delayClasses = ["d-100", "d-200", "d-300", "d-400", "d-500"];

const editorCommands = [
  { editor: "VS Code", cmd: "code ." },
  { editor: "JetBrains IDEs", cmd: "idea ." },
  { editor: "Zed", cmd: "zed ." },
  { editor: "Neovim", cmd: "nvim ." },
  { editor: "Custom", cmd: "open -a 'My Editor' ." },
];

/* ─── TOML / YAML snippets ────────────────────────────────────────────── */
const HOOKS_TOML = `[hooks]
"pre:open"  = "npm install"
"post:open" = "notify-send 'Worktree' '{{repo}}#{{issue}} is ready'"`;

const WORKFLOW_YAML = `name: Worktree
on:
  issues:
    types: [opened]

jobs:
  comment:
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - uses: worktree-io/action@v1`;

/* ─── platform icons ──────────────────────────────────────────────────── */
const macOSIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#a78bfa">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const linuxIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#9090a8">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 17.93V18a1 1 0 0 0-1-1H8a3 3 0 0 1-3-3v-.5l3.5-3.5A1 1 0 0 0 9 9V7.5L7.5 6H6a1 1 0 0 1-1-1v-.07A8 8 0 0 1 12 4a8.07 8.07 0 0 1 2 .26V5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5.8A8 8 0 0 1 19.93 11H19a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.92A8 8 0 0 1 11 19.93z" />
  </svg>
);

const windowsIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#9090a8">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);

/* ─── Nav ─────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #1c1c24",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(7, 7, 8, 0.85)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontWeight: 800,
            fontSize: "1.05rem",
            letterSpacing: "-0.02em",
            color: "#ebebef",
          }}
        >
          Worktree
        </span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "#9090a8",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          GitHub
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

/* ─── WorkspaceResult ─────────────────────────────────────────────────── */
function WorkspaceResult() {
  return (
    <div
      style={{
        marginTop: 12,
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #1c1c24",
        background: "#0d0d10",
        fontFamily: "var(--font-jetbrains-mono, monospace)",
        fontSize: "0.8125rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* Terminal title bar */}
      <div
        style={{
          background: "#141418",
          borderBottom: "1px solid #1c1c24",
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
          <div
            key={color}
            style={{ width: 10, height: 10, borderRadius: "50%", background: color, opacity: 0.8 }}
          />
        ))}
        <span style={{ color: "#3e3e50", fontSize: "0.7rem", marginLeft: 6 }}>
          terminal
        </span>
      </div>
      <div style={{ padding: "14px 16px", lineHeight: 1.9 }}>
        <div style={{ color: "#9090a8" }}>
          <span style={{ color: "#a78bfa" }}>$</span> worktree open
        </div>
        <div style={{ color: "#4ade80" }}>
          {"  "}✓ Fetching issue #31
        </div>
        <div style={{ color: "#4ade80" }}>
          {"  "}✓ Creating worktree{"   "}
          <span style={{ color: "#9090a8" }}>~/worktrees/centy-daemon/issue-31</span>
        </div>
        <div style={{ color: "#4ade80" }}>
          {"  "}✓ Opening VS Code
        </div>
      </div>
    </div>
  );
}

/* ─── GitHubMockup sub-components ────────────────────────────────────── */
function GHRepoBar() {
  return (
    <div
      style={{
        background: "#161b22",
        borderBottom: "1px solid #30363d",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e">
        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8V1.5Z" />
      </svg>
      <span style={{ color: "#58a6ff", fontSize: 13, fontWeight: 600 }}>centy-io</span>
      <span style={{ color: "#8b949e" }}>/</span>
      <span style={{ color: "#58a6ff", fontSize: 13, fontWeight: 600 }}>centy-daemon</span>
      <span
        style={{
          marginLeft: "auto",
          background: "rgba(31,111,235,0.15)",
          color: "#58a6ff",
          border: "1px solid rgba(88,166,255,0.3)",
          borderRadius: 12,
          padding: "1px 8px",
          fontSize: 11,
          fontWeight: 600,
        }}
      >
        Issue #31
      </span>
    </div>
  );
}

function GHIssueHeader() {
  return (
    <div
      style={{
        background: "#0d1117",
        padding: "12px 16px",
        borderBottom: "1px solid #30363d",
      }}
    >
      <div style={{ color: "#e6edf3", fontWeight: 600, fontSize: 15 }}>
        Cannot close issue - &quot;No issue found&quot; error despite file existing
      </div>
      <div style={{ color: "#8b949e", fontSize: 12, marginTop: 4 }}>
        Opened 2 hours ago by{" "}
        <span style={{ color: "#58a6ff" }}>@bluedotiya</span>
      </div>
    </div>
  );
}

function BotCommentHeader() {
  return (
    <div
      style={{
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        borderBottom: "1px solid #21262d",
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: 11,
          fontWeight: 800,
          color: "#fff",
        }}
      >
        W
      </div>
      <div>
        <span style={{ color: "#e6edf3", fontWeight: 600, fontSize: 13 }}>worktree-bot</span>
        <span style={{ color: "#8b949e", fontSize: 12, marginLeft: 6 }}>commented just now</span>
      </div>
      <div
        style={{
          marginLeft: "auto",
          background: "rgba(167,139,250,0.08)",
          border: "1px solid rgba(167,139,250,0.2)",
          borderRadius: 4,
          padding: "1px 7px",
          fontSize: 11,
          color: "#a78bfa",
          fontWeight: 600,
        }}
      >
        bot
      </div>
    </div>
  );
}

function BotCommentBody() {
  return (
    <div style={{ padding: "14px 16px 16px 52px" }}>
      <p style={{ color: "#8b949e", fontSize: 13, marginBottom: 12, lineHeight: 1.6 }}>
        A workspace is ready for this issue.
      </p>
      <Link
        href="/open?owner=centy-io&repo=centy-daemon&issue=31"
        className="anim-glow"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          background: "#238636",
          color: "#fff",
          border: "1px solid rgba(240,246,252,0.1)",
          padding: "6px 14px",
          borderRadius: 6,
          textDecoration: "none",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Open workspace
      </Link>
    </div>
  );
}

function GHBotComment() {
  return (
    <div style={{ background: "#0d1117" }}>
      <BotCommentHeader />
      <BotCommentBody />
    </div>
  );
}

function GitHubMockup() {
  return (
    <div
      style={{
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #30363d",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
        fontSize: 14,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.5)",
      }}
    >
      <GHRepoBar />
      <GHIssueHeader />
      <GHBotComment />
    </div>
  );
}

/* ─── Hero sub-components ─────────────────────────────────────────────── */
function HeroBadge() {
  return (
    <div
      className="anim-fade-up"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(167,139,250,0.08)",
        border: "1px solid rgba(167,139,250,0.2)",
        borderRadius: 20,
        padding: "4px 12px",
        marginBottom: 28,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#a78bfa",
          display: "inline-block",
          animation: "pulse-dot 1.6s ease-in-out infinite",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-syne, sans-serif)",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: "#a78bfa",
          textTransform: "uppercase",
        }}
      >
        Early preview
      </span>
    </div>
  );
}

function HeroCopy() {
  return (
    <div>
      <HeroBadge />
      <h1
        className="anim-fade-up d-100"
        style={{
          fontFamily: "var(--font-syne, sans-serif)",
          fontWeight: 800,
          fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          color: "#ebebef",
          marginBottom: 20,
        }}
      >
        Open issues as <span style={{ color: "#a78bfa" }}>workspaces.</span>
      </h1>
      <p
        className="anim-fade-up d-200"
        style={{
          fontSize: "1.0625rem",
          color: "#9090a8",
          lineHeight: 1.7,
          maxWidth: 420,
          marginBottom: 36,
        }}
      >
        A GitHub Action posts an &ldquo;Open workspace&rdquo; link on every
        new issue. Click it — Worktree creates an isolated git worktree on
        your machine and opens it in your editor. No extra clone. No context
        switching.
      </p>
      <div className="anim-fade-up d-300" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="#install" className="btn-accent">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v9M3 7l4 4 4-4M1 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="dot-bg" style={{ padding: "80px 24px 100px", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="hero-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <HeroCopy />
        <div className="anim-fade-up d-400">
          <div style={{ marginBottom: 6, display: "flex", alignItems: "center", gap: 8, paddingLeft: 4 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 3l5 4-5 4" stroke="#3e3e50" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.75rem", color: "#3e3e50" }}>
              GitHub Action posts this comment automatically on every new issue
            </span>
          </div>
          <GitHubMockup />
          <WorkspaceResult />
        </div>
      </div>
    </section>
  );
}

/* ─── HowItWorks sub-components ──────────────────────────────────────── */
function StepDetail({ detail }: { detail: string | string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-start" }}>
      {Array.isArray(detail) ? (
        detail.map((d) => <div key={d} style={pillStyle}>{d}</div>)
      ) : (
        <div style={pillStyle}>{detail}</div>
      )}
    </div>
  );
}

function StepCard({ step, delayClass }: { step: typeof setupSteps[0] | typeof flowSteps[0]; delayClass: string }) {
  return (
    <div
      className={`anim-fade-up ${delayClass}`}
      style={{ background: "#0d0d10", border: "1px solid #1c1c24", borderRadius: 10, padding: "28px 24px" }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          background: "rgba(167,139,250,0.08)",
          border: "1px solid rgba(167,139,250,0.15)",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        {step.icon}
      </div>
      <div
        style={{
          fontFamily: "var(--font-jetbrains-mono, monospace)",
          fontSize: "0.7rem",
          color: "#a78bfa",
          fontWeight: 500,
          marginBottom: 8,
          letterSpacing: "0.04em",
        }}
      >
        /{step.n}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-syne, sans-serif)",
          fontWeight: 700,
          fontSize: "1.05rem",
          letterSpacing: "-0.02em",
          color: "#ebebef",
          marginBottom: 8,
        }}
      >
        {step.title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "#9090a8", lineHeight: 1.7, marginBottom: 16 }}>
        {step.body}
      </p>
      <StepDetail detail={step.detail} />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/* ─── HowItWorks ──────────────────────────────────────────────────────── */
function HowItWorks() {
  return (
    <section style={{ padding: "80px 24px", borderTop: "1px solid #1c1c24" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <p style={sectionLabelStyle}>How it works</p>
          <h2
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.025em",
              color: "#ebebef",
            }}
          >
            Set up once. Works for every issue.
          </h2>
        </div>
        <div>
          <p style={groupLabelStyle}>Set up once</p>
          <div className="steps-grid-2">
            <StepCard step={setupSteps[0]} delayClass={delayClasses[0]} />
            <div className="step-connector"><ArrowIcon /></div>
            <StepCard step={setupSteps[1]} delayClass={delayClasses[1]} />
          </div>
        </div>
        <div style={{ marginTop: 40 }}>
          <p style={groupLabelStyle}>Every issue</p>
          <div className="steps-grid-3">
            <StepCard step={flowSteps[0]} delayClass={delayClasses[2]} />
            <div className="step-connector"><ArrowIcon /></div>
            <StepCard step={flowSteps[1]} delayClass={delayClasses[3]} />
            <div className="step-connector"><ArrowIcon /></div>
            <StepCard step={flowSteps[2]} delayClass={delayClasses[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── EditorSection sub-components ───────────────────────────────────── */
function EditorSectionCopy() {
  return (
    <div>
      <p style={sectionLabelStyle}>Editor agnostic</p>
      <h2
        style={{
          fontFamily: "var(--font-syne, sans-serif)",
          fontWeight: 700,
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          letterSpacing: "-0.025em",
          color: "#ebebef",
          marginBottom: 16,
        }}
      >
        Your editor. Your rules.
      </h2>
      <p style={{ fontSize: "0.9375rem", color: "#9090a8", lineHeight: 1.7, maxWidth: 380 }}>
        Worktree reads a config file to decide which editor to launch. Any
        command that opens a directory works. Chain commands, set env vars,
        do whatever you need.
      </p>
    </div>
  );
}

function EditorCommandRow({ editor, cmd, isFirst }: { editor: string; cmd: string; isFirst: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        border: `1px solid ${isFirst ? "rgba(167,139,250,0.2)" : "#1c1c24"}`,
        borderRadius: 6,
        background: isFirst ? "rgba(167,139,250,0.04)" : "transparent",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-syne, sans-serif)",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: isFirst ? "#ebebef" : "#9090a8",
        }}
      >
        {editor}
      </span>
      <code
        style={{
          fontFamily: "var(--font-jetbrains-mono, monospace)",
          fontSize: "0.8125rem",
          color: isFirst ? "#a78bfa" : "#3e3e50",
          background: "#141418",
          border: "1px solid #1c1c24",
          borderRadius: 4,
          padding: "2px 10px",
        }}
      >
        {cmd}
      </code>
    </div>
  );
}

/* ─── EditorSection ───────────────────────────────────────────────────── */
function EditorSection() {
  return (
    <section
      style={{
        padding: "80px 24px",
        borderTop: "1px solid #1c1c24",
        background: "#0d0d10",
      }}
    >
      <div className="editor-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <EditorSectionCopy />
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {editorCommands.map((c, i) => (
            <EditorCommandRow key={c.editor} editor={c.editor} cmd={c.cmd} isFirst={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── InstallSection sub-components ──────────────────────────────────── */
function PlatformCard({
  title,
  titleColor,
  icon,
  featured,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  titleColor: string;
  icon: React.ReactNode;
  featured?: boolean;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div
      style={{
        border: `1px solid ${featured ? "rgba(167,139,250,0.25)" : "#1c1c24"}`,
        borderRadius: 10,
        overflow: "hidden",
        background: featured ? "rgba(167,139,250,0.03)" : undefined,
      }}
    >
      <div
        style={{
          padding: "14px 18px",
          borderBottom: `1px solid ${featured ? "rgba(167,139,250,0.12)" : "#1c1c24"}`,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {icon}
        <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "0.875rem", color: titleColor }}>
          {title}
        </span>
      </div>
      <div style={{ padding: 18 }}>
        <div className="code-block" style={{ marginBottom: 6 }}>
          <span className="prompt">$ </span>{INSTALL_CMD}
        </div>
        <p style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.7rem", color: "#3e3e50", marginBottom: 12 }}>
          Requires Rust / Cargo — or download a binary directly above.
        </p>
        <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ width: "100%", justifyContent: "center" }}>
          {primaryLabel}
        </a>
        {secondaryHref && (
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textAlign: "center", marginTop: 8, fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.75rem", color: "#3e3e50", textDecoration: "none" }}
          >
            {secondaryLabel}
          </a>
        )}
      </div>
    </div>
  );
}

function AfterInstallNote() {
  return (
    <div
      style={{
        marginTop: 24,
        padding: "18px 22px",
        background: "#0d0d10",
        border: "1px solid #1c1c24",
        borderRadius: 8,
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono, monospace)",
          fontSize: "0.75rem",
          color: "#a78bfa",
          background: "rgba(167,139,250,0.1)",
          border: "1px solid rgba(167,139,250,0.2)",
          borderRadius: 4,
          padding: "2px 8px",
          flexShrink: 0,
          marginTop: 2,
        }}
      >
        after
      </span>
      <div>
        <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.875rem", fontWeight: 600, color: "#ebebef", marginBottom: 6 }}>
          Run the setup wizard
        </div>
        <div className="code-block" style={{ display: "inline-block" }}>
          <span className="prompt">$ </span>worktree setup
        </div>
        <p style={{ fontSize: "0.8125rem", color: "#9090a8", marginTop: 8, lineHeight: 1.6 }}>
          Registers the{" "}
          <code
            style={{
              fontFamily: "var(--font-jetbrains-mono, monospace)",
              fontSize: "0.75rem",
              color: "#ebebef",
              background: "#141418",
              border: "1px solid #1c1c24",
              borderRadius: 3,
              padding: "0 5px",
            }}
          >
            worktree://
          </code>{" "}
          URL scheme and lets you choose your editor. You can also{" "}
          <a
            href="#hooks"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.75rem", color: "#a78bfa", textDecoration: "none" }}
          >
            configure hooks
          </a>{" "}
          to run scripts when a workspace opens.
        </p>
      </div>
    </div>
  );
}

/* ─── InstallSection ──────────────────────────────────────────────────── */
function InstallSection() {
  return (
    <section id="install" style={{ padding: "80px 24px", borderTop: "1px solid #1c1c24" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={sectionLabelStyle}>Get started</p>
        <h2
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            letterSpacing: "-0.025em",
            color: "#ebebef",
            marginBottom: 40,
          }}
        >
          Install Worktree
        </h2>
        <div className="install-grid">
          <PlatformCard
            featured
            title="macOS"
            titleColor="#a78bfa"
            icon={macOSIcon}
            primaryHref={`${RUNNER_URL}/worktree-macos-aarch64.tar.gz`}
            primaryLabel="Apple Silicon .tar.gz"
            secondaryHref={`${RUNNER_URL}/worktree-macos-x86_64.tar.gz`}
            secondaryLabel="Intel Mac"
          />
          <PlatformCard
            title="Linux"
            titleColor="#ebebef"
            icon={linuxIcon}
            primaryHref={`${RUNNER_URL}/worktree-linux-x86_64.tar.gz`}
            primaryLabel="x86_64 .tar.gz"
            secondaryHref={`${RUNNER_URL}/worktree-linux-aarch64.tar.gz`}
            secondaryLabel="ARM64"
          />
          <PlatformCard
            title="Windows"
            titleColor="#ebebef"
            icon={windowsIcon}
            primaryHref={`${RUNNER_URL}/worktree-windows-x86_64.zip`}
            primaryLabel="Download .zip"
          />
        </div>
        <AfterInstallNote />
      </div>
    </section>
  );
}

/* ─── HooksSection sub-components ────────────────────────────────────── */
const hooksFlowSteps = [
  { label: "pre:open", note: "runs first", accent: true },
  { label: "editor", note: "launches", accent: false },
  { label: "post:open", note: "runs after", accent: true },
];

const hooksVars = [
  { name: "{{owner}}", desc: "GitHub username or org that owns the repo" },
  { name: "{{repo}}", desc: "Repository name" },
  { name: "{{issue}}", desc: "Issue number" },
  { name: "{{branch}}", desc: "Branch name, e.g. issue-42" },
  { name: "{{worktree}}", desc: "Absolute path to the worktree directory" },
];

function HooksSectionHeader() {
  return (
    <div style={{ maxWidth: 620, marginBottom: 48 }}>
      <p style={sectionLabelStyle}>Configuration</p>
      <h2
        style={{
          fontFamily: "var(--font-syne, sans-serif)",
          fontWeight: 700,
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          letterSpacing: "-0.025em",
          color: "#ebebef",
          marginBottom: 16,
        }}
      >
        Run scripts when a workspace opens.
      </h2>
      <p style={{ fontSize: "0.9375rem", color: "#9090a8", lineHeight: 1.7 }}>
        The{" "}
        <code
          style={{
            fontFamily: "var(--font-jetbrains-mono, monospace)",
            fontSize: "0.85em",
            color: "#ebebef",
            background: "#141418",
            border: "1px solid #1c1c24",
            borderRadius: 3,
            padding: "0 5px",
          }}
        >
          [hooks]
        </code>{" "}
        section in your config file lets you run bash scripts before and
        after the editor launches. Variables are injected with Mustache
        syntax.
      </p>
    </div>
  );
}

function HooksFlowDiagram() {
  return (
    <div style={{ overflowX: "auto", marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 0, width: "max-content" }}>
        {hooksFlowSteps.map((step, i) => (
          <>
            <div
              key={step.label}
              style={{
                padding: "14px 20px",
                border: `1px solid ${step.accent ? "rgba(167,139,250,0.3)" : "#1c1c24"}`,
                borderRadius: 8,
                background: step.accent ? "rgba(167,139,250,0.06)" : "#0d0d10",
                flexShrink: 0,
              }}
            >
              <code style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.8125rem", fontWeight: 600, color: step.accent ? "#a78bfa" : "#ebebef", display: "block", marginBottom: 4 }}>
                {step.label}
              </code>
              <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.7rem", color: "#3e3e50" }}>
                {step.note}
              </span>
            </div>
            {i < hooksFlowSteps.length - 1 && (
              <div key={`arrow-${i}`} style={{ padding: "0 12px", color: "#2c2c3a", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

function HooksTomlCard() {
  return (
    <div
      style={{
        border: "1px solid rgba(167,139,250,0.2)",
        borderRadius: 10,
        overflow: "hidden",
        background: "rgba(167,139,250,0.03)",
      }}
    >
      <div
        style={{
          padding: "10px 16px",
          borderBottom: "1px solid rgba(167,139,250,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <code style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.75rem", color: "#a78bfa" }}>
          ~/.config/worktree/config.toml
        </code>
        <CopyButton text={HOOKS_TOML} />
      </div>
      <pre style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.8125rem", lineHeight: 1.65, color: "#ebebef", padding: "20px 24px", overflowX: "auto", margin: 0 }}>
        <span style={{ color: "#a78bfa" }}>[hooks]</span>{"\n"}
        <span style={{ color: "#9090a8" }}>&quot;pre:open&quot;</span>
        {"  = "}
        <span style={{ color: "#4ade80" }}>&quot;npm install&quot;</span>{"\n"}
        <span style={{ color: "#9090a8" }}>&quot;post:open&quot;</span>
        {" = "}
        <span style={{ color: "#4ade80" }}>&quot;echo ready&quot;</span>
      </pre>
    </div>
  );
}

function HooksConfigBlock() {
  return (
    <div>
      <p style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9090a8", marginBottom: 12 }}>
        Config snippet
      </p>
      <HooksTomlCard />
      <div style={{ marginTop: 14, display: "flex", alignItems: "flex-start", gap: 10, paddingLeft: 2 }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
          <circle cx="7" cy="7" r="5.5" stroke="#3e3e50" strokeWidth="1.2" />
          <path d="M7 6.5v3M7 4.5v.5" stroke="#3e3e50" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <p style={{ fontSize: "0.8125rem", color: "#3e3e50", lineHeight: 1.6 }}>
          A non-zero exit code from either hook shows a warning but does
          not stop the workspace from opening.
        </p>
      </div>
    </div>
  );
}

function HooksMustacheVars() {
  return (
    <div
      style={{
        border: "1px solid #1c1c24",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      {hooksVars.map((v, i) => (
        <div
          key={v.name}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 16,
            padding: "12px 16px",
            borderBottom: i < hooksVars.length - 1 ? "1px solid #1c1c24" : undefined,
            background: i % 2 === 0 ? "transparent" : "#0a0a0d",
          }}
        >
          <code
            style={{
              fontFamily: "var(--font-jetbrains-mono, monospace)",
              fontSize: "0.78125rem",
              color: "#a78bfa",
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.15)",
              borderRadius: 4,
              padding: "1px 7px",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            {v.name}
          </code>
          <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.8125rem", color: "#9090a8", lineHeight: 1.5, paddingTop: 2 }}>
            {v.desc}
          </span>
        </div>
      ))}
    </div>
  );
}

function HooksTip() {
  return (
    <div
      style={{
        marginTop: 16,
        padding: "16px 18px",
        background: "rgba(167,139,250,0.04)",
        border: "1px solid rgba(167,139,250,0.15)",
        borderRadius: 8,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <circle cx="6.5" cy="6.5" r="5.5" stroke="#a78bfa" strokeWidth="1.2" />
          <path d="M6.5 5v4M6.5 3.5v.5" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.75rem", fontWeight: 700, color: "#a78bfa", letterSpacing: "0.04em" }}>
          Tip
        </span>
      </div>
      <p style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.8125rem", color: "#9090a8", lineHeight: 1.65, marginBottom: 10 }}>
        Use{" "}
        <code style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.8em", color: "#ebebef", background: "#141418", border: "1px solid #1c1c24", borderRadius: 3, padding: "0 4px" }}>
          pre:open
        </code>{" "}
        to install dependencies or configure git before the editor launches:
      </p>
      <pre style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.75rem", color: "#9090a8", background: "#0d0d10", border: "1px solid #1c1c24", borderRadius: 6, padding: "10px 14px", overflowX: "auto", margin: 0 }}>
        <span style={{ color: "#a78bfa" }}>[hooks]</span>{"\n"}
        <span style={{ color: "#9090a8" }}>&quot;pre:open&quot;</span>
        {" = "}
        <span style={{ color: "#4ade80" }}>&quot;npm install&quot;</span>
      </pre>
    </div>
  );
}

function HooksVarsSection() {
  return (
    <div>
      <p style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9090a8", marginBottom: 12 }}>
        Available variables
      </p>
      <HooksMustacheVars />
      <HooksTip />
    </div>
  );
}

/* ─── HooksSection ────────────────────────────────────────────────────── */
function HooksSection() {
  return (
    <section id="hooks" style={{ padding: "80px 24px", borderTop: "1px solid #1c1c24" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <HooksSectionHeader />
        <HooksFlowDiagram />
        <div className="hooks-grid">
          <HooksConfigBlock />
          <HooksVarsSection />
        </div>
      </div>
    </section>
  );
}

/* ─── ActionSection sub-components ───────────────────────────────────── */
function ActionSectionHeader() {
  return (
    <div style={{ maxWidth: 620, marginBottom: 36 }}>
      <p style={sectionLabelStyle}>GitHub Action</p>
      <h2
        style={{
          fontFamily: "var(--font-syne, sans-serif)",
          fontWeight: 700,
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          letterSpacing: "-0.025em",
          color: "#ebebef",
          marginBottom: 16,
        }}
      >
        One file. Done.
      </h2>
      <p style={{ fontSize: "0.9375rem", color: "#9090a8", lineHeight: 1.7 }}>
        Add this workflow to your repo. The Action posts an{" "}
        <span style={{ color: "#ebebef" }}>"Open workspace"</span> comment
        on every new issue — no secrets, no config.
      </p>
    </div>
  );
}

function ActionCodeBlockCard() {
  return (
    <div
      style={{
        border: "1px solid rgba(167,139,250,0.2)",
        borderRadius: 10,
        overflow: "hidden",
        background: "rgba(167,139,250,0.03)",
      }}
    >
      <div
        style={{
          padding: "10px 16px",
          borderBottom: "1px solid rgba(167,139,250,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <rect x="1" y="1" width="11" height="11" rx="2" stroke="#a78bfa" strokeWidth="1.2" />
            <path d="M4 5h5M4 7.5h3" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <code style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.75rem", color: "#a78bfa", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            .github/workflows/worktree.yml
          </code>
        </div>
        <CopyButton text={WORKFLOW_YAML} />
      </div>
      <pre style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.8125rem", lineHeight: 1.65, color: "#ebebef", padding: "20px 24px", overflowX: "auto", margin: 0 }}>
        {WORKFLOW_YAML}
      </pre>
    </div>
  );
}

function ActionCaption() {
  return (
    <div style={{ marginTop: 14, display: "flex", alignItems: "flex-start", gap: 10, paddingLeft: 2 }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
        <circle cx="7" cy="7" r="5.5" stroke="#3e3e50" strokeWidth="1.2" />
        <path d="M7 6.5v3M7 4.5v.5" stroke="#3e3e50" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <p style={{ fontSize: "0.8125rem", color: "#3e3e50", lineHeight: 1.6 }}>
        Commit this file to{" "}
        <code style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", fontSize: "0.75rem" }}>
          .github/workflows/
        </code>{" "}
        in your repo. GitHub will run it automatically — no further setup
        needed.
      </p>
    </div>
  );
}

/* ─── ActionSection ───────────────────────────────────────────────────── */
function ActionSection() {
  return (
    <section
      id="action"
      style={{ padding: "80px 24px", borderTop: "1px solid #1c1c24", background: "#0d0d10" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <ActionSectionHeader />
        <div style={{ maxWidth: 620 }}>
          <ActionCodeBlockCard />
          <ActionCaption />
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1c1c24", padding: "24px" }}>
      <div className="footer-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontWeight: 800,
            fontSize: "0.875rem",
            letterSpacing: "-0.02em",
            color: "#2e2e3c",
          }}
        >
          Worktree
        </span>
        <div className="footer-nav">
          {[
            { label: "GitHub", href: GITHUB_URL },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "0.8rem", color: "#3e3e50", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#070708", color: "#ebebef" }}>
      <Nav />
      <Hero />
      <HowItWorks />
      <EditorSection />
      <InstallSection />
      <ActionSection />
      <HooksSection />
      <Footer />
    </div>
  );
}
