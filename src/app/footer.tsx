import { GITHUB_URL } from "@/lib/github-url";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner section-inner">
        <span className="site-footer-brand">Worktree</span>
        <div className="footer-nav">
          {[
            { label: "GitHub", href: GITHUB_URL },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="site-footer-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
