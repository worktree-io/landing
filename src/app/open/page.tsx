"use client";

import { useEffect, useRef, useState } from "react";
import { type IssueParams, buildWorktreeUrl } from "./issue-card";
import { NoParamsView } from "./no-params-view";
import { OpeningView } from "./opening-view";
import { InstallView } from "./install-view";
import { OpenNav, OpenFooter } from "./open-layout";

type Phase =
  | "loading"    // reading URL params
  | "opening"    // scheme triggered, awaiting user confirmation
  | "success"    // user confirmed it opened
  | "install"    // user says it didn't open → show install guide
  | "no-params"; // no valid params in URL

function get(sp: URLSearchParams, key: string): string {
  const val = sp.get(key);
  return (val !== null ? val : "").trim();
}

function resolveParams(sp: URLSearchParams): IssueParams | null {
  const jiraIssueKey = get(sp, "jira_issue_key");
  if (jiraIssueKey) {
    const host = get(sp, "jira_host");
    const owner = get(sp, "owner");
    const repo = get(sp, "repo");
    if (!host || !owner || !repo) return null;
    return { kind: "jira", host, issueKey: jiraIssueKey, owner, repo };
  }
  const gitlabIssue = get(sp, "gitlab_issue");
  if (gitlabIssue) {
    const owner = get(sp, "owner");
    const repo = get(sp, "repo");
    if (!owner || !repo) return null;
    return { kind: "gitlab", owner, repo, issue: gitlabIssue };
  }
  const owner = get(sp, "owner");
  const repo = get(sp, "repo");
  const issue = get(sp, "issue");
  if (!owner || !repo || !issue) return null;
  return { kind: "github", owner, repo, issue };
}

export default function OpenPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [params, setParams] = useState<IssueParams | null>(null);
  const schemeTriggered = useRef(false);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const p = resolveParams(sp);
    if (!p) { setPhase("no-params"); return; }
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
