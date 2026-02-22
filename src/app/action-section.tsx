import { CopyButton } from "./copy-button";

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
      - uses: worktree-io/comment-action@v1`;

export function ActionSection() {
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
          <div className="action-code-block">
            <div className="action-code-header">
              <div className="action-code-file">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="1" y="1" width="11" height="11" rx="2" stroke="#a78bfa" strokeWidth="1.2" />
                  <path d="M4 5h5M4 7.5h3" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <code className="action-code-filename">
                  .github/workflows/worktree.yml
                </code>
              </div>
              <CopyButton text={WORKFLOW_YAML} />
            </div>

            <pre className="action-pre">{WORKFLOW_YAML}</pre>
          </div>

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
