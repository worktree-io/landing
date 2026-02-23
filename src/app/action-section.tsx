import { AzureIcon, GithubIcon, IntegrationBlock } from "./integration-block";

const GITHUB_YAML = `name: Worktree
on:
  issues:
    types: [opened]

jobs:
  comment:
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - uses: worktree-io/comment-action@v1`;

const ADO_YAML = `steps:
  - task: WorktreeComment@1`;

const githubCaption = (
  <>
    Commit this file to{" "}
    <code className="action-caption-code">.github/workflows/</code>
    {" "}in your repo. GitHub runs it automatically on every new issue.
  </>
);

const adoCaption = (
  <>
    Add to your pipeline, then connect it via a{" "}
    <span className="action-accent">Work item created</span> service hook in
    your ADO project settings. The task reads{" "}
    <code className="action-caption-code">System.WorkItemId</code> automatically.
  </>
);

export function ActionSection() {
  return (
    <section className="action-section">
      <div className="section-inner">
        <div className="action-intro">
          <p className="section-eyebrow">Integrations</p>
          <h2 className="section-title section-title--mb16">One step. Done.</h2>
          <p className="action-body">
            Drop Worktree into your pipeline. It posts an{" "}
            <span className="action-accent">&ldquo;Open workspace&rdquo;</span> link
            on every new issue or work item — no secrets, no config.
          </p>
        </div>
        <div className="integrations-grid">
          <IntegrationBlock
            chip="GitHub Actions"
            icon={<GithubIcon />}
            filename=".github/workflows/worktree.yml"
            yaml={GITHUB_YAML}
            caption={githubCaption}
          />
          <IntegrationBlock
            chip="Azure DevOps"
            icon={<AzureIcon />}
            filename="azure-pipelines.yml"
            yaml={ADO_YAML}
            caption={adoCaption}
          />
        </div>
      </div>
    </section>
  );
}
