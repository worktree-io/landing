export function EditorSection() {
  const commands = [
    { editor: "VS Code", cmd: "code ." },
    { editor: "JetBrains IDEs", cmd: "idea ." },
    { editor: "Zed", cmd: "zed ." },
    { editor: "Neovim", cmd: "nvim ." },
    { editor: "Custom", cmd: "open -a 'My Editor' ." },
  ];

  return (
    <section className="editor-section">
      <div className="editor-grid section-inner">
        <div className="editor-text">
          <p className="section-eyebrow">Editor agnostic</p>
          <h2 className="section-title section-title--mb16">
            Your editor. Your rules.
          </h2>
          <p className="editor-subtitle">
            Worktree reads a config file to decide which editor to launch. Any
            command that opens a directory works. Chain commands, set env vars,
            do whatever you need.
          </p>
        </div>

        <div className="editor-list">
          {commands.map((c, i) => (
            <div
              key={c.editor}
              className={`editor-item ${i === 0 ? "editor-item--active" : "editor-item--default"}`}
            >
              <span className={`editor-item-name ${i === 0 ? "editor-item-name--active" : "editor-item-name--default"}`}>
                {c.editor}
              </span>
              <code className={`editor-item-cmd ${i === 0 ? "editor-item-cmd--active" : "editor-item-cmd--default"}`}>
                {c.cmd}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
