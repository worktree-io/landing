import { Fragment } from "react";
import { HooksConfigCol } from "./hooks-config-col";
import { HooksVarsCol } from "./hooks-vars-col";

const FLOW_STEPS = [
  { label: "pre:open", note: "runs first", accent: true },
  { label: "editor", note: "launches", accent: false },
  { label: "post:open", note: "runs after", accent: true },
];

export function HooksSection() {
  return (
    <section id="hooks" className="hooks-section">
      <div className="section-inner">
        <div className="hooks-header">
          <p className="section-eyebrow">Configuration</p>
          <h2 className="section-title">Run scripts when a workspace opens.</h2>
          <p className="section-body">
            The{" "}
            <code className="inline-code">[hooks]</code>{" "}
            section in your config file lets you run bash scripts before and
            after the editor launches. Variables are injected with Mustache
            syntax.
          </p>
        </div>

        <div className="hooks-flow-scroll">
          <div className="hooks-flow-inner">
            {FLOW_STEPS.map((step, i) => (
              <Fragment key={step.label}>
                <div
                  className={`flow-step ${step.accent ? "flow-step--accent" : "flow-step--default"}`}
                >
                  <code className={`flow-step-label ${step.accent ? "flow-step-label--accent" : "flow-step-label--default"}`}>
                    {step.label}
                  </code>
                  <span className="flow-step-note">{step.note}</span>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <div className="flow-arrow">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="hooks-grid">
          <HooksConfigCol />
          <HooksVarsCol />
        </div>
      </div>
    </section>
  );
}
