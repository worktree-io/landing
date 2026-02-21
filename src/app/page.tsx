import React from "react";
import Link from "next/link";
import { CopyButton } from "./copy-button";
import { GITHUB_URL } from "@/lib/github-url";
import { INSTALL_CMD } from "@/lib/install-cmd";

const RUNNER_URL = "https://github.com/worktree-io/runner/releases/latest/download";

/* Nav */
function Nav() {
  return (
    <header className="nav-header">
      <div className="nav-inner">
        <span className="nav-brand">Worktree</span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
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

/* Terminal result mockup shown below the GitHub comment */
function WorkspaceResult() {
  return (
    <div className="terminal">
      {/* Terminal title bar */}
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

/* GitHub comment mockup */
function GitHubMockup() {
  return (
    <div className="gh-mockup">
      {/* Repo bar */}
      <div className="gh-repo-bar">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8V1.5Z" />
        </svg>
        <span className="gh-repo-name">centy-io</span>
        <span className="gh-slash">/</span>
        <span className="gh-repo-name">centy-daemon</span>
        <span className="gh-issue-pill">Issue #31</span>
      </div>

      {/* Issue title */}
      <div className="gh-issue-header">
        <div className="gh-issue-title">
          Cannot close issue - &quot;No issue found&quot; error despite file existing
        </div>
        <div className="gh-issue-meta">
          Opened 2 hours ago by{" "}
          <span className="gh-author">@bluedotiya</span>
        </div>
      </div>

      {/* Bot comment */}
      <div className="gh-comment-wrap">
        <div className="gh-comment-head">
          <div className="gh-avatar">W</div>
          <div className="gh-commenter">
            <span className="gh-commenter-name">worktree-bot</span>
            <span className="gh-commenter-time">commented just now</span>
          </div>
          <div className="gh-bot-pill">bot</div>
        </div>

        <div className="gh-comment-body">
          <p className="gh-comment-text">A workspace is ready for this issue.</p>
          <Link
            href="/open?owner=centy-io&repo=centy-daemon&issue=31"
            className="gh-open-btn anim-glow"
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
    <section className="hero-section dot-bg">
      <div aria-hidden className="hero-gradient" />
      <div className="hero-grid hero-grid-inner">
        {/* Copy */}
        <div className="hero-copy">
          <div className="hero-badge anim-fade-up">
            <span className="hero-badge-dot" />
            <span className="hero-badge-label">Early preview</span>
          </div>

          <h1 className="hero-title anim-fade-up d-100">
            Open issues as <span className="hero-title-accent">workspaces.</span>
          </h1>

          <p className="hero-subtitle anim-fade-up d-200">
            A GitHub Action posts an &ldquo;Open workspace&rdquo; link on every
            new issue. Click it — Worktree creates an isolated git worktree on
            your machine and opens it in your editor. No extra clone. No context
            switching.
          </p>

          <div className="hero-cta anim-fade-up d-300">
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
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Mockup */}
        <div className="anim-fade-up d-400">
          <div className="hero-mockup-caption">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M8 3l5 4-5 4"
                stroke="#3e3e50"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hero-mockup-caption-text">
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

/* How it works */
function HowItWorks() {
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

  function StepCard({ step, delayClass }: { step: typeof setupSteps[0] | typeof flowSteps[0]; delayClass: string }) {
    return (
      <div className={`step-card anim-fade-up ${delayClass}`}>
        <div className="step-icon-wrap">{step.icon}</div>
        <div className="step-num-label">/{step.n}</div>
        <h3 className="step-card-title">{step.title}</h3>
        <p className="step-card-body">{step.body}</p>
        <div className="step-pills">
          {Array.isArray(step.detail) ? (
            step.detail.map((d) => (
              <div key={d} className="step-pill">{d}</div>
            ))
          ) : (
            <div className="step-pill">{step.detail}</div>
          )}
        </div>
      </div>
    );
  }

  const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );

  return (
    <section className="how-section">
      <div className="section-inner">
        <div className="how-header">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-title">
            Set up once. Works for every issue.
          </h2>
        </div>

        {/* Setup group */}
        <div className="how-setup-group">
          <p className="group-label">Set up once</p>
          <div className="steps-grid-2">
            <StepCard step={setupSteps[0]} delayClass={delayClasses[0]} />
            <div className="step-connector">
              <ArrowIcon />
            </div>
            <StepCard step={setupSteps[1]} delayClass={delayClasses[1]} />
          </div>
        </div>

        {/* Per-issue group */}
        <div className="how-group">
          <p className="group-label">Every issue</p>
          <div className="steps-grid-3">
            <StepCard step={flowSteps[0]} delayClass={delayClasses[2]} />
            <div className="step-connector">
              <ArrowIcon />
            </div>
            <StepCard step={flowSteps[1]} delayClass={delayClasses[3]} />
            <div className="step-connector">
              <ArrowIcon />
            </div>
            <StepCard step={flowSteps[2]} delayClass={delayClasses[4]} />
          </div>
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
    <section className="editor-section">
      <div className="editor-grid section-inner">
        <div className="editor-text">
          <p className="section-eyebrow">Editor agnostic</p>
          <h2 className="section-title section-title--mb16">
            Your editor. Your rules.
          </h2>
          <p className="editor-subtitle">
            Worktree reads a config file to decide which editor to launch. Any
            command that opens a directory works. Chain commands, set env vars,
            do whatever you need.
          </p>
        </div>

        <div className="editor-list">
          {commands.map((c, i) => (
            <div
              key={c.editor}
              className={`editor-item ${i === 0 ? "editor-item--active" : "editor-item--default"}`}
            >
              <span className={`editor-item-name ${i === 0 ? "editor-item-name--active" : "editor-item-name--default"}`}>
                {c.editor}
              </span>
              <code className={`editor-item-cmd ${i === 0 ? "editor-item-cmd--active" : "editor-item-cmd--default"}`}>
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
    <section id="install" className="install-section">
      <div className="section-inner">
        <p className="section-eyebrow">Get started</p>
        <h2 className="section-title install-title">Install Worktree</h2>

        <div className="install-grid">
          {/* macOS */}
          <div className="install-card-mac">
            <div className="install-card-head install-card-head--mac">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#a78bfa">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="install-os-name install-os-name--mac">macOS</span>
            </div>
            <div className="install-card-body">
              <div className="code-block code-block--mb6">
                <span className="prompt">$ </span>{INSTALL_CMD}
              </div>
              <p className="install-hint">
                Requires Rust / Cargo — or download a binary directly above.
              </p>
              <a
                href={`${RUNNER_URL}/worktree-macos-aarch64.tar.gz`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent btn-accent--full"
              >
                Apple Silicon .tar.gz
              </a>
              <a
                href={`${RUNNER_URL}/worktree-macos-x86_64.tar.gz`}
                target="_blank"
                rel="noopener noreferrer"
                className="install-link-secondary"
              >
                Intel Mac
              </a>
            </div>
          </div>

          {/* Linux */}
          <div className="install-card-default">
            <div className="install-card-head install-card-head--default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#9090a8">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 17.93V18a1 1 0 0 0-1-1H8a3 3 0 0 1-3-3v-.5l3.5-3.5A1 1 0 0 0 9 9V7.5L7.5 6H6a1 1 0 0 1-1-1v-.07A8 8 0 0 1 12 4a8.07 8.07 0 0 1 2 .26V5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5.8A8 8 0 0 1 19.93 11H19a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.92A8 8 0 0 1 11 19.93z" />
              </svg>
              <span className="install-os-name install-os-name--default">Linux</span>
            </div>
            <div className="install-card-body">
              <div className="code-block code-block--mb6">
                <span className="prompt">$ </span>{INSTALL_CMD}
              </div>
              <p className="install-hint">
                Requires Rust / Cargo — or download a binary directly above.
              </p>
              <a
                href={`${RUNNER_URL}/worktree-linux-x86_64.tar.gz`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent btn-accent--full"
              >
                x86_64 .tar.gz
              </a>
              <a
                href={`${RUNNER_URL}/worktree-linux-aarch64.tar.gz`}
                target="_blank"
                rel="noopener noreferrer"
                className="install-link-secondary"
              >
                ARM64
              </a>
            </div>
          </div>

          {/* Windows */}
          <div className="install-card-default">
            <div className="install-card-head install-card-head--default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#9090a8">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              <span className="install-os-name install-os-name--default">Windows</span>
            </div>
            <div className="install-card-body">
              <div className="code-block code-block--mb6">
                <span className="prompt">$ </span>{INSTALL_CMD}
              </div>
              <p className="install-hint">
                Requires Rust / Cargo — or download a binary directly above.
              </p>
              <a
                href={`${RUNNER_URL}/worktree-windows-x86_64.zip`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent btn-accent--full"
              >
                Download .zip
              </a>
            </div>
          </div>
        </div>

        {/* After install note */}
        <div className="install-note">
          <span className="install-note-tag">after</span>
          <div className="install-note-content">
            <div className="install-note-title">Run the setup wizard</div>
            <div className="code-block code-block-inline">
              <span className="prompt">$ </span>worktree setup
            </div>
            <p className="install-note-body">
              Registers the{" "}
              <code className="inline-code">worktree://</code>{" "}
              URL scheme and lets you choose your editor. You can also{" "}
              <a href="#hooks" className="hooks-link">configure hooks</a>{" "}
              to run scripts when a workspace opens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Hooks */
const HOOKS_TOML = `[hooks]
"pre:open"  = "npm install"
"post:open" = "notify-send 'Worktree' '{{repo}}#{{issue}} is ready'"`;

function HooksSection() {
  const vars = [
    { name: "{{owner}}", desc: "GitHub username or org that owns the repo" },
    { name: "{{repo}}", desc: "Repository name" },
    { name: "{{issue}}", desc: "Issue number" },
    { name: "{{branch}}", desc: "Branch name, e.g. issue-42" },
    { name: "{{worktree}}", desc: "Absolute path to the worktree directory" },
  ];

  const flowSteps = [
    { label: "pre:open", note: "runs first", accent: true },
    { label: "editor", note: "launches", accent: false },
    { label: "post:open", note: "runs after", accent: true },
  ];

  return (
    <section id="hooks" className="hooks-section">
      <div className="section-inner">
        {/* Header */}
        <div className="hooks-header">
          <p className="section-eyebrow">Configuration</p>
          <h2 className="section-title">Run scripts when a workspace opens.</h2>
          <p className="section-body">
            The{" "}
            <code className="inline-code">[hooks]</code>{" "}
            section in your config file lets you run bash scripts before and
            after the editor launches. Variables are injected with Mustache
            syntax.
          </p>
        </div>

        {/* Execution order flow */}
        <div className="hooks-flow-scroll">
          <div className="hooks-flow-inner">
            {flowSteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div
                  className={`flow-step ${step.accent ? "flow-step--accent" : "flow-step--default"}`}
                >
                  <code className={`flow-step-label ${step.accent ? "flow-step-label--accent" : "flow-step-label--default"}`}>
                    {step.label}
                  </code>
                  <span className="flow-step-note">{step.note}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flow-arrow">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Two-column layout: TOML block | Variables */}
        <div className="hooks-grid">
          {/* TOML config block */}
          <div className="hooks-toml-col">
            <p className="group-label">Config snippet</p>
            <div className="hooks-toml-block">
              {/* Header */}
              <div className="hooks-toml-header">
                <code className="hooks-toml-filename">
                  ~/.config/worktree/config.toml
                </code>
                <CopyButton text={HOOKS_TOML} />
              </div>
              {/* TOML */}
              <pre className="hooks-toml-pre">
                <span className="hooks-toml-kw">[hooks]</span>{"\n"}
                <span className="hooks-toml-key">&quot;pre:open&quot;</span>
                {"  = "}
                <span className="hooks-toml-value">&quot;npm install&quot;</span>{"\n"}
                <span className="hooks-toml-key">&quot;post:open&quot;</span>
                {" = "}
                <span className="hooks-toml-value">&quot;echo ready&quot;</span>
              </pre>
            </div>

            {/* Failure behaviour note */}
            <div className="hooks-failure-note">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="hooks-failure-icon"
              >
                <circle cx="7" cy="7" r="5.5" stroke="#3e3e50" strokeWidth="1.2" />
                <path d="M7 6.5v3M7 4.5v.5" stroke="#3e3e50" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <p className="hooks-failure-text">
                A non-zero exit code from either hook shows a warning but does
                not stop the workspace from opening.
              </p>
            </div>
          </div>

          {/* Mustache variables */}
          <div className="hooks-vars-col">
            <p className="group-label">Available variables</p>
            <div className="hooks-vars-table">
              {vars.map((v, i) => (
                <div
                  key={v.name}
                  className={`hooks-var-row ${i % 2 === 0 ? "hooks-var-row--even" : "hooks-var-row--odd"} ${i < vars.length - 1 ? "hooks-var-row--bordered" : ""}`}
                >
                  <code className="hooks-var-name">{v.name}</code>
                  <span className="hooks-var-desc">{v.desc}</span>
                </div>
              ))}
            </div>

            {/* Practical example tip */}
            <div className="hooks-tip">
              <div className="hooks-tip-header">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="5.5" stroke="#a78bfa" strokeWidth="1.2" />
                  <path d="M6.5 5v4M6.5 3.5v.5" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                <span className="hooks-tip-label">Tip</span>
              </div>
              <p className="hooks-tip-body">
                Use{" "}
                <code className="inline-code inline-code--em80">pre:open</code>{" "}
                to install dependencies or configure git before the editor
                launches:
              </p>
              <pre className="hooks-tip-pre">
                <span className="hooks-toml-kw">[hooks]</span>{"\n"}
                <span className="hooks-toml-key">&quot;pre:open&quot;</span>
                {" = "}
                <span className="hooks-toml-value">&quot;npm install&quot;</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* GitHub Action setup */
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

function ActionSection() {
  return (
    <section className="action-section">
      <div className="section-inner">
        <div className="action-intro">
          <p className="section-eyebrow">GitHub Action</p>
          <h2 className="section-title section-title--mb16">One file. Done.</h2>
          <p className="action-body">
            Add this workflow to your repo. The Action posts an{" "}
            <span className="action-accent">&ldquo;Open workspace&rdquo;</span> comment
            on every new issue — no secrets, no config.
          </p>
        </div>

        <div className="action-code-wrap">
          {/* Code block */}
          <div className="action-code-block">
            {/* Header row */}
            <div className="action-code-header">
              <div className="action-code-file">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="11"
                    height="11"
                    rx="2"
                    stroke="#a78bfa"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M4 5h5M4 7.5h3"
                    stroke="#a78bfa"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <code className="action-code-filename">
                  .github/workflows/worktree.yml
                </code>
              </div>
              <CopyButton text={WORKFLOW_YAML} />
            </div>

            {/* YAML */}
            <pre className="action-pre">{WORKFLOW_YAML}</pre>
          </div>

          {/* Caption */}
          <div className="action-caption">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="action-caption-icon"
            >
              <circle cx="7" cy="7" r="5.5" stroke="#3e3e50" strokeWidth="1.2" />
              <path
                d="M7 6.5v3M7 4.5v.5"
                stroke="#3e3e50"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <p className="action-caption-text">
              Commit this file to{" "}
              <code className="action-caption-code">
                .github/workflows/
              </code>{" "}
              in your repo. GitHub will run it automatically — no further setup
              needed.
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
    <footer className="site-footer">
      <div className="footer-inner section-inner">
        <span className="site-footer-brand">Worktree</span>
        <div className="footer-nav">
          {[
            { label: "GitHub", href: GITHUB_URL },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="site-footer-link"
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
    <div className="page-bg">
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
