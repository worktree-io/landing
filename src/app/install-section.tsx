import { InstallOsCard } from "./install-os-card";
import { RUNNER_URL } from "@/lib/runner-url";

export function InstallSection() {
  return (
    <section id="install" className="install-section">
      <div className="section-inner">
        <p className="section-eyebrow">Get started</p>
        <h2 className="section-title install-title">Install Worktree</h2>

        <div className="install-grid">
          <InstallOsCard
            isPrimary
            osName="macOS"
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="#a78bfa"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>}
            primaryDownload={{ href: `${RUNNER_URL}/worktree-macos-aarch64.tar.gz`, label: "Apple Silicon .tar.gz" }}
            secondaryDownload={{ href: `${RUNNER_URL}/worktree-macos-x86_64.tar.gz`, label: "Intel Mac" }}
          />
          <InstallOsCard
            osName="Linux"
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="#9090a8"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 17.93V18a1 1 0 0 0-1-1H8a3 3 0 0 1-3-3v-.5l3.5-3.5A1 1 0 0 0 9 9V7.5L7.5 6H6a1 1 0 0 1-1-1v-.07A8 8 0 0 1 12 4a8.07 8.07 0 0 1 2 .26V5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5.8A8 8 0 0 1 19.93 11H19a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.92A8 8 0 0 1 11 19.93z" /></svg>}
            primaryDownload={{ href: `${RUNNER_URL}/worktree-linux-x86_64.tar.gz`, label: "x86_64 .tar.gz" }}
            secondaryDownload={{ href: `${RUNNER_URL}/worktree-linux-aarch64.tar.gz`, label: "ARM64" }}
          />
          <InstallOsCard
            osName="Windows"
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="#9090a8"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>}
            primaryDownload={{ href: `${RUNNER_URL}/worktree-windows-x86_64.zip`, label: "Download .zip" }}
          />
        </div>

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
