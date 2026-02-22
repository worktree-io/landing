import { CopyButton } from "./copy-button";

const HOOKS_TOML = `[hooks]
"pre:open"  = "npm install"
"post:open" = "notify-send 'Worktree' '{{repo}}#{{issue}} is ready'"`;

export function HooksConfigCol() {
  return (
    <div className="hooks-toml-col">
      <p className="group-label">Config snippet</p>
      <div className="hooks-toml-block">
        <div className="hooks-toml-header">
          <code className="hooks-toml-filename">
            ~/.config/worktree/config.toml
          </code>
          <CopyButton text={HOOKS_TOML} />
        </div>
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
  );
}
