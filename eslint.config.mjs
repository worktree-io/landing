import config from "eslint-config-agent";

// Require strict equality (`===`/`!==`) everywhere. Loose `==`/`!=` perform
// implicit type coercion (e.g. `0 == ""`, `null == undefined`), which hides
// type bugs behind surprising truthiness rules. Strict equality keeps comparisons
// predictable and type-safe.
const strictEqualityRule = {
  rules: {
    eqeqeq: ["error", "always"],
  },
};

// URL strings are centralized in these files; all other src files must reference these constants.
const urlConstantsOverride = {
  files: ["src/lib/github-url.ts", "src/lib/runner-url.ts", "src/lib/analytics-script-url.ts", "src/lib/jira-webhook-url.ts"],
  rules: {
    "default/no-hardcoded-urls": "off",
  },
};

export default [...config, strictEqualityRule, urlConstantsOverride];
