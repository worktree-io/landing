import { GitHubMockup } from "./github-mockup";
import { WorkspaceResult } from "./workspace-result";
import { GITHUB_URL } from "@/lib/github-url";

export function Hero() {
  return (
    <section className="hero-section dot-bg">
      <div aria-hidden className="hero-gradient" />
      <div className="hero-grid hero-grid-inner">
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
