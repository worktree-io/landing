import type { ReactNode } from "react";
import { INSTALL_CMD } from "@/lib/install-cmd";

interface InstallOsCardProps {
  icon: ReactNode;
  osName: string;
  isPrimary?: boolean;
  primaryDownload: { href: string; label: string };
  secondaryDownload?: { href: string; label: string };
}

export function InstallOsCard({ icon, osName, isPrimary, primaryDownload, secondaryDownload }: InstallOsCardProps) {
  const cardClass = isPrimary ? "install-card-mac" : "install-card-default";
  const headClass = `install-card-head ${isPrimary ? "install-card-head--mac" : "install-card-head--default"}`;
  const nameClass = `install-os-name ${isPrimary ? "install-os-name--mac" : "install-os-name--default"}`;

  return (
    <div className={cardClass}>
      <div className={headClass}>
        {icon}
        <span className={nameClass}>{osName}</span>
      </div>
      <div className="install-card-body">
        <div className="code-block code-block--mb6">
          <span className="prompt">$ </span>{INSTALL_CMD}
        </div>
        <p className="install-hint">
          Requires Rust / Cargo — or download a binary directly above.
        </p>
        <a
          href={primaryDownload.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent btn-accent--full"
        >
          {primaryDownload.label}
        </a>
        {secondaryDownload && (
          <a
            href={secondaryDownload.href}
            target="_blank"
            rel="noopener noreferrer"
            className="install-link-secondary"
          >
            {secondaryDownload.label}
          </a>
        )}
      </div>
    </div>
  );
}
