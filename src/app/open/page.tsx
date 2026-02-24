"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { type IssueParams, buildWorktreeUrl } from "./issue-card";
import { NoParamsView } from "./no-params-view";
import { OpeningView } from "./opening-view";
import { InstallView } from "./install-view";
import { GITHUB_URL } from "@/lib/github-url";

type Phase =
  | "loading"    // reading URL params
  | "opening"    // scheme triggered, awaiting user confirmation
  | "success"    // user confirmed it opened
  | "install"    // user says it didn't open → show install guide
  | "no-params"; // no valid params in URL

function OpenNav() {
  return (
    <header className="open-nav">
      <Link href="/" className="open-nav-brand">Worktree</Link>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="open-nav-link">
        GitHub
      </a>
    </header>
  );
}

function OpenFooter() {
  return (
    <footer className="open-footer">
      <span className="open-footer-text">Worktree — open source</span>
      <span className="open-footer-sep">·</span>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="open-footer-link">
        GitHub
      </a>
    </footer>
  );
}

export default function OpenPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [params, setParams] = useState<IssueParams | null>(null);
  const schemeTriggered = useRef(false);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const ownerVal = sp.get("owner");
    const repoVal = sp.get("repo");
    const issueVal = sp.get("issue");
    const owner = (ownerVal !== null ? ownerVal : "").trim();
    const repo = (repoVal !== null ? repoVal : "").trim();
    const issue = (issueVal !== null ? issueVal : "").trim();

    if (!owner || !repo || !issue) {
      setPhase("no-params");
      return;
    }

    const p = { owner, repo, issue };
    setParams(p);
    setPhase("opening");

    if (schemeTriggered.current) return;
    schemeTriggered.current = true;
    window.location.href = buildWorktreeUrl(p);
  }, []);

  function handleRetry() {
    if (!params) return;
    schemeTriggered.current = false;
    setPhase("opening");
    window.location.href = buildWorktreeUrl(params);
  }

  return (
    <div className="open-page">
      <OpenNav />
      <main className="open-main">
        <div className="open-content">
          {phase === "no-params" && <NoParamsView />}
          {phase === "loading" && (
            <div className="loading-center">
              <div className="spinner-lg anim-spin" />
            </div>
          )}
          {(phase === "opening" || phase === "success") && params && (
            <OpeningView
              phase={phase}
              params={params}
              onSuccess={() => setPhase("success")}
              onInstall={() => setPhase("install")}
              onRetry={handleRetry}
            />
          )}
          {phase === "install" && (
            <InstallView params={params} onRetry={handleRetry} />
          )}
        </div>
      </main>
      <OpenFooter />
    </div>
  );
}
