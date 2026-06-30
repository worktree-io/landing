import config from "eslint-config-agent";

// URL strings are centralized in these files; all other src files must reference these constants.
const urlConstantsOverride = {
  files: ["src/lib/github-url.ts", "src/lib/runner-url.ts", "src/lib/analytics-script-url.ts", "src/lib/jira-webhook-url.ts"],
  rules: {
    "default/no-hardcoded-urls": "off",
  },
};

// Forbid non-null assertions (`value!`). The `!` operator silently tells the
// type checker a value can't be null/undefined without any runtime guarantee,
// so a wrong assumption surfaces as a runtime crash instead of a compile error.
// `eslint-config-agent` does not ship this rule. Prefer an explicit guard,
// optional chaining, or narrowing instead.
const noNonNullAssertion = {
  rules: {
    "@typescript-eslint/no-non-null-assertion": "error",
  },
};

export default [...config, urlConstantsOverride, noNonNullAssertion];
