const VARS = [
  { name: "{{owner}}", desc: "GitHub username or org that owns the repo" },
  { name: "{{repo}}", desc: "Repository name" },
  { name: "{{issue}}", desc: "Issue number" },
  { name: "{{branch}}", desc: "Branch name, e.g. issue-42" },
  { name: "{{worktree}}", desc: "Absolute path to the worktree directory" },
];

export function HooksVarsCol() {
  return (
    <div className="hooks-vars-col">
      <p className="group-label">Available variables</p>
      <div className="hooks-vars-table">
        {VARS.map((v, i) => (
          <div
            key={v.name}
            className={`hooks-var-row ${i % 2 === 0 ? "hooks-var-row--even" : "hooks-var-row--odd"} ${i < VARS.length - 1 ? "hooks-var-row--bordered" : ""}`}
          >
            <code className="hooks-var-name">{v.name}</code>
            <span className="hooks-var-desc">{v.desc}</span>
          </div>
        ))}
      </div>

      <div className="hooks-tip">
        <div className="hooks-tip-header">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="#a78bfa" strokeWidth="1.2" />
            <path d="M6.5 5v4M6.5 3.5v.5" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span className="hooks-tip-label">Tip</span>
        </div>
        <p className="hooks-tip-body">
          Use{" "}
          <code className="inline-code inline-code--em80">pre:open</code>{" "}
          to install dependencies or configure git before the editor
          launches:
        </p>
        <pre className="hooks-tip-pre">
          <span className="hooks-toml-kw">[hooks]</span>{"\n"}
          <span className="hooks-toml-key">&quot;pre:open&quot;</span>
          {" = "}
          <span className="hooks-toml-value">&quot;npm install&quot;</span>
        </pre>
      </div>
    </div>
  );
}
