const BENEFITS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="4" cy="4" r="1.5" />
        <circle cx="12" cy="4" r="1.5" />
        <circle cx="8" cy="12" r="1.5" />
        <path d="M4 5.5v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5.5" />
        <line x1="8" y1="9.5" x2="8" y2="10.5" />
      </svg>
    ),
    title: "Zero context switching",
    body: "Each issue gets its own isolated worktree. Bounce between three issues in flight — no stashing, no conflicts, no lost state.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
        <path d="M9 2h5v5" />
        <path d="M14 2L7 9" />
      </svg>
    ),
    title: "One click from GitHub",
    body: "No terminal dance. The GitHub Action posts an \u201cOpen workspace\u201d button on every issue \u2014 click it, and your editor opens on the right code.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 2v7a4 4 0 0 0 8 0V2" />
        <line x1="2" y1="2" x2="14" y2="2" />
        <line x1="8" y1="13" x2="8" y2="15" />
        <line x1="5" y1="15" x2="11" y2="15" />
      </svg>
    ),
    title: "Main stays pristine",
    body: "Work never touches your main branch until you're ready to PR. Each worktree is fully isolated — merge when it's done, delete when it's not.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="8,1 10.5,6 16,6.5 12,10.5 13,16 8,13 3,16 4,10.5 0,6.5 5.5,6" />
      </svg>
    ),
    title: "Auto-setup on open",
    body: "Hooks run scripts before and after your editor launches — install deps, set env vars, spin up services. The workspace is ready before you type a line.",
  },
];

export function WhySection() {
  return (
    <section className="why-section">
      <div className="section-inner">
        <div className="why-header">
          <p className="section-eyebrow">Why Worktree?</p>
          <h2 className="section-title why-title">
            Stop juggling branches.{" "}
            <span className="why-title-accent">Start shipping.</span>
          </h2>
        </div>

        <div className="why-grid">
          {BENEFITS.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`why-card anim-fade-up d-${(i + 1) * 100}`}
            >
              <div className="step-icon-wrap why-card-icon">
                {benefit.icon}
              </div>
              <h3 className="why-card-title">{benefit.title}</h3>
              <p className="why-card-body">{benefit.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
