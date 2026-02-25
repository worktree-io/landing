import { ExternalLink, GitBranch, Network, Zap } from "lucide-react";

const BENEFITS = [
  {
    icon: <Network size={16} color="#a78bfa" strokeWidth={1.5} />,
    title: "Zero context switching",
    body: "Each issue gets its own isolated worktree. Bounce between three issues in flight — no stashing, no conflicts, no lost state.",
  },
  {
    icon: <ExternalLink size={16} color="#a78bfa" strokeWidth={1.5} />,
    title: "One click from GitHub",
    body: "No terminal dance. The GitHub Action posts an \u201cOpen workspace\u201d button on every issue \u2014 click it, and your editor opens on the right code.",
  },
  {
    icon: <GitBranch size={16} color="#a78bfa" strokeWidth={1.5} />,
    title: "Main stays pristine",
    body: "Work never touches your main branch until you're ready to PR. Each worktree is fully isolated — merge when it's done, delete when it's not.",
  },
  {
    icon: <Zap size={16} color="#a78bfa" strokeWidth={1.5} />,
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
