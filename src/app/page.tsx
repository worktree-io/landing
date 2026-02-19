import Link from "next/link";
import { GITHUB_URL } from "@/lib/github-url";
import { INSTALL_CMD } from "@/lib/install-cmd";

/* Nav */
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
            color: "#68687a",
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

/* GitHub comment mockup */
function GitHubMockup() {
  return (
    <div
      style={{
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #30363d",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
        fontSize: 14,
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.5)",
      }}
    >
      {/* Repo bar */}
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
        <span style={{ color: "#58a6ff", fontSize: 13, fontWeight: 600 }}>
          acme-corp
        </span>
        <span style={{ color: "#8b949e" }}>/</span>
        <span style={{ color: "#58a6ff", fontSize: 13, fontWeight: 600 }}>
          payment-service
        </span>
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
          Issue #142
        </span>
      </div>

      {/* Issue title */}
      <div
        style={{
          background: "#0d1117",
          padding: "12px 16px",
          borderBottom: "1px solid #30363d",
        }}
      >
        <div style={{ color: "#e6edf3", fontWeight: 600, fontSize: 15 }}>
          Fix auth token refresh race condition
        </div>
        <div style={{ color: "#8b949e", fontSize: 12, marginTop: 4 }}>
          Opened 2 hours ago by{" "}
          <span style={{ color: "#58a6ff" }}>@dev-alice</span>
        </div>
      </div>

      {/* Bot comment */}
      <div style={{ background: "#0d1117" }}>
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
              background: "linear-gradient(135deg, #c8ff3e 0%, #4ade80 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: 11,
              fontWeight: 800,
              color: "#000",
            }}
          >
            W
          </div>
          <div>
            <span style={{ color: "#e6edf3", fontWeight: 600, fontSize: 13 }}>
              worktree-bot
            </span>
            <span style={{ color: "#8b949e", fontSize: 12, marginLeft: 6 }}>
              commented just now
            </span>
          </div>
          <div
            style={{
              marginLeft: "auto",
              background: "rgba(200,255,62,0.08)",
              border: "1px solid rgba(200,255,62,0.2)",
              borderRadius: 4,
              padding: "1px 7px",
              fontSize: 11,
              color: "#c8ff3e",
              fontWeight: 600,
            }}
          >
            bot
          </div>
        </div>

        <div style={{ padding: "14px 16px 16px 52px" }}>
          <p
            style={{
              color: "#8b949e",
              fontSize: 13,
              marginBottom: 12,
              lineHeight: 1.6,
            }}
          >
            A workspace is ready for this issue.
          </p>
          <Link
            href="/open?owner=acme-corp&repo=payment-service&issue=142"
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
              <path
                d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Open workspace
          </Link>
        </div>
      </div>
    </div>
  );
}

/* Hero */
function Hero() {
  return (
    <section
      className="dot-bg"
      style={{
        padding: "80px 24px 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,255,62,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Copy */}
        <div>
          <div
            className="anim-fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(200,255,62,0.08)",
              border: "1px solid rgba(200,255,62,0.2)",
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
                background: "#c8ff3e",
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
                color: "#c8ff3e",
                textTransform: "uppercase",
              }}
            >
              Early preview
            </span>
          </div>

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
            Open issues as <span style={{ color: "#c8ff3e" }}>workspaces.</span>
          </h1>

          <p
            className="anim-fade-up d-200"
            style={{
              fontSize: "1.0625rem",
              color: "#68687a",
              lineHeight: 1.7,
              maxWidth: 420,
              marginBottom: 36,
            }}
          >
            Click any link in a GitHub issue comment. Your editor opens with a
            local workspace, pointed at that issue. No cloning. No context
            switching.
          </p>

          <div
            className="anim-fade-up d-300"
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <a href="#install" className="btn-accent">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v9M3 7l4 4 4-4M1 12h12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Mockup */}
        <div className="anim-fade-up d-400">
          <GitHubMockup />
          <div
            style={{
              marginTop: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
              paddingLeft: 4,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M8 3l5 4-5 4"
                stroke="#3e3e50"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-syne, sans-serif)",
                fontSize: "0.75rem",
                color: "#3e3e50",
              }}
            >
              GitHub Action posts this comment automatically on every new issue
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* How it works */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Issue opens",
      body: `A GitHub Action runs and posts an "Open workspace" link as a comment on every new issue.`,
      detail: "One-time setup per repo",
    },
    {
      n: "02",
      title: "Click the link",
      body: "The link routes here. If Worktree is installed, the page triggers the daemon via a custom URL scheme.",
      detail: "worktree://open?...",
    },
    {
      n: "03",
      title: "Workspace opens",
      body: "The daemon creates a local worktree directory and opens it in your configured editor. Instantly.",
      detail: "code . · idea . · custom commands",
    },
  ];

  return (
    <section style={{ padding: "80px 24px", borderTop: "1px solid #1c1c24" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <p
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c8ff3e",
              marginBottom: 12,
            }}
          >
            How it works
          </p>
          <h2
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.025em",
              color: "#ebebef",
            }}
          >
            Three steps. Zero friction.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.n}
              style={{
                background: i === 1 ? "#0d0d10" : "transparent",
                border: "1px solid #1c1c24",
                borderRadius: 10,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="step-num"
                style={{
                  position: "absolute",
                  top: -8,
                  right: 16,
                  pointerEvents: "none",
                }}
              >
                {step.n}
              </div>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "0.7rem",
                    color: "#c8ff3e",
                    fontWeight: 500,
                    marginBottom: 14,
                    letterSpacing: "0.04em",
                  }}
                >
                  /{step.n}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne, sans-serif)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    letterSpacing: "-0.02em",
                    color: "#ebebef",
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#68687a",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {step.body}
                </p>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "0.75rem",
                    color: "#3e3e50",
                    background: "#141418",
                    border: "1px solid #1c1c24",
                    borderRadius: 4,
                    padding: "4px 10px",
                    display: "inline-block",
                  }}
                >
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Editor support */
function EditorSection() {
  const commands = [
    { editor: "VS Code", cmd: "code ." },
    { editor: "JetBrains IDEs", cmd: "idea ." },
    { editor: "Zed", cmd: "zed ." },
    { editor: "Neovim", cmd: "nvim ." },
    { editor: "Custom", cmd: "open -a 'My Editor' ." },
  ];

  return (
    <section
      style={{
        padding: "80px 24px",
        borderTop: "1px solid #1c1c24",
        background: "#0d0d10",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c8ff3e",
              marginBottom: 12,
            }}
          >
            Editor agnostic
          </p>
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
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#68687a",
              lineHeight: 1.7,
              maxWidth: 380,
            }}
          >
            Worktree reads a config file to decide which editor to launch. Any
            command that opens a directory works. Chain commands, set env vars,
            do whatever you need.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {commands.map((c, i) => (
            <div
              key={c.editor}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                border: `1px solid ${i === 0 ? "rgba(200,255,62,0.2)" : "#1c1c24"}`,
                borderRadius: 6,
                background: i === 0 ? "rgba(200,255,62,0.04)" : "transparent",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-syne, sans-serif)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: i === 0 ? "#ebebef" : "#68687a",
                }}
              >
                {c.editor}
              </span>
              <code
                style={{
                  fontFamily: "var(--font-jetbrains-mono, monospace)",
                  fontSize: "0.8125rem",
                  color: i === 0 ? "#c8ff3e" : "#3e3e50",
                  background: "#141418",
                  border: "1px solid #1c1c24",
                  borderRadius: 4,
                  padding: "2px 10px",
                }}
              >
                {c.cmd}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Install */
function InstallSection() {
  return (
    <section
      id="install"
      style={{ padding: "80px 24px", borderTop: "1px solid #1c1c24" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#c8ff3e",
            marginBottom: 12,
          }}
        >
          Get started
        </p>
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {/* macOS */}
          <div
            style={{
              border: "1px solid rgba(200,255,62,0.25)",
              borderRadius: 10,
              overflow: "hidden",
              background: "rgba(200,255,62,0.03)",
            }}
          >
            <div
              style={{
                padding: "14px 18px",
                borderBottom: "1px solid rgba(200,255,62,0.12)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#c8ff3e">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-syne, sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#c8ff3e",
                }}
              >
                macOS
              </span>
            </div>
            <div style={{ padding: 18 }}>
              <div className="code-block" style={{ marginBottom: 12 }}>
                <span className="prompt">$ </span>{INSTALL_CMD}
              </div>
              <a
                href="#"
                className="btn-accent"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Download .dmg
              </a>
            </div>
          </div>

          {/* Linux */}
          <div
            style={{
              border: "1px solid #1c1c24",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "14px 18px",
                borderBottom: "1px solid #1c1c24",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#68687a">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 17.93V18a1 1 0 0 0-1-1H8a3 3 0 0 1-3-3v-.5l3.5-3.5A1 1 0 0 0 9 9V7.5L7.5 6H6a1 1 0 0 1-1-1v-.07A8 8 0 0 1 12 4a8.07 8.07 0 0 1 2 .26V5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5.8A8 8 0 0 1 19.93 11H19a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.92A8 8 0 0 1 11 19.93z" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-syne, sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#ebebef",
                }}
              >
                Linux
              </span>
            </div>
            <div style={{ padding: 18 }}>
              <div className="code-block" style={{ marginBottom: 12 }}>
                <span className="prompt">$ </span>{INSTALL_CMD}
              </div>
              <a
                href="#"
                className="btn-ghost"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Download .tar.gz
              </a>
            </div>
          </div>

          {/* Windows */}
          <div
            style={{
              border: "1px solid #1c1c24",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "14px 18px",
                borderBottom: "1px solid #1c1c24",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#68687a">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-syne, sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#ebebef",
                }}
              >
                Windows
              </span>
            </div>
            <div style={{ padding: 18 }}>
              <div className="code-block" style={{ marginBottom: 12 }}>
                <span className="prompt">$ </span>{INSTALL_CMD}
              </div>
              <a
                href="#"
                className="btn-ghost"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Download .msi
              </a>
            </div>
          </div>
        </div>

        {/* After install note */}
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
              color: "#c8ff3e",
              background: "rgba(200,255,62,0.1)",
              border: "1px solid rgba(200,255,62,0.2)",
              borderRadius: 4,
              padding: "2px 8px",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            after
          </span>
          <div>
            <div
              style={{
                fontFamily: "var(--font-syne, sans-serif)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#ebebef",
                marginBottom: 6,
              }}
            >
              Run the setup wizard
            </div>
            <div className="code-block" style={{ display: "inline-block" }}>
              <span className="prompt">$ </span>worktree setup
            </div>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "#68687a",
                marginTop: 8,
                lineHeight: 1.6,
              }}
            >
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
              URL scheme and lets you choose your editor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Footer */
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1c1c24", padding: "24px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "GitHub", href: GITHUB_URL },
            { label: "MIT License", href: "#" },
            { label: "Docs", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              style={{
                fontFamily: "var(--font-syne, sans-serif)",
                fontSize: "0.8rem",
                color: "#3e3e50",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* Page */
export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", background: "#070708", color: "#ebebef" }}
    >
      <Nav />
      <Hero />
      <HowItWorks />
      <EditorSection />
      <InstallSection />
      <Footer />
    </div>
  );
}
