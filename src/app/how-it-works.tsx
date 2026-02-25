import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { SETUP_STEPS, FLOW_STEPS, type Step } from "./how-it-works-steps";

const DELAY_CLASSES = ["d-100", "d-200", "d-300", "d-400", "d-500"];

function StepCard({ step, delayClass }: { step: Step; delayClass: string }) {
  return (
    <div className={`step-card anim-fade-up ${delayClass}`}>
      <div className="step-icon-wrap">{step.icon}</div>
      <div className="step-num-label">/{step.n}</div>
      <h3 className="step-card-title">{step.title}</h3>
      <p className="step-card-body">{step.body}</p>
      <div className="step-pills">
        {Array.isArray(step.detail) ? (
          step.detail.map((d) => (
            <div key={d} className="step-pill">{d}</div>
          ))
        ) : (
          <div className="step-pill">{step.detail}</div>
        )}
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="how-section">
      <div className="section-inner">
        <div className="how-header">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-title">
            Set up once. Works for every issue.
          </h2>
        </div>

        <div className="how-setup-group">
          <p className="group-label">Set up once</p>
          <div className="steps-grid-2">
            <StepCard step={SETUP_STEPS[0]} delayClass={DELAY_CLASSES[0]} />
            <div className="step-connector"><ArrowRight size={16} strokeWidth={1.5} /></div>
            <StepCard step={SETUP_STEPS[1]} delayClass={DELAY_CLASSES[1]} />
          </div>
        </div>

        <div className="how-group">
          <p className="group-label">Every issue</p>
          <div className="steps-grid-3">
            {FLOW_STEPS.map((step, i) => (
              <Fragment key={step.n}>
                <StepCard step={step} delayClass={DELAY_CLASSES[i + 2]} />
                {i < FLOW_STEPS.length - 1 && (
                  <div className="step-connector"><ArrowRight size={16} strokeWidth={1.5} /></div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
