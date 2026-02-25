import Link from "next/link";
import { Info } from "lucide-react";

export function NoParamsView() {
  return (
    <div className="no-params-center anim-fade-up">
      <div className="no-params-icon">
        <Info size={20} color="#9090a8" strokeWidth={1.5} />
      </div>
      <h1 className="no-params-title">No issue specified</h1>
      <p className="no-params-body">
        This page is meant to be opened from a GitHub issue comment.
        The link should include{" "}
        <code className="inline-code">?owner=…&repo=…&issue=…</code>{" "}
        parameters.
      </p>
      <Link href="/" className="btn-ghost">
        ← Back to home
      </Link>
    </div>
  );
}
