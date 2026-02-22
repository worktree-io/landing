import Link from "next/link";

export function NoParamsView() {
  return (
    <div className="no-params-center anim-fade-up">
      <div className="no-params-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 6v5M10 14h.01M19 10A9 9 0 1 1 1 10a9 9 0 0 1 18 0Z"
            stroke="#9090a8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
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
