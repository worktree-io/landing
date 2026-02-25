import { Info } from "lucide-react";
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
        <Info size={14} color="#3e3e50" strokeWidth={1.3} className="hooks-failure-icon" />
        <p className="hooks-failure-text">
          A non-zero exit code from either hook shows a warning but does
          not stop the workspace from opening.
        </p>
      </div>
    </div>
  );
}
