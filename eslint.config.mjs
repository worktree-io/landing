import config from "eslint-config-agent";

// URL strings are centralized in these files; all other src files must reference these constants.
const urlConstantsOverride = {
  files: ["src/lib/github-url.ts", "src/lib/runner-url.ts", "src/lib/analytics-script-url.ts", "src/lib/jira-webhook-url.ts"],
  rules: {
    "default/no-hardcoded-urls": "off",
  },
};

// Disallow stray `console.log`/`console.debug`/etc. so debugging leftovers do
// not ship to production. Intentional diagnostics remain available via
// `console.warn` / `console.error`.
const noConsoleOverride = {
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
};

export default [...config, urlConstantsOverride, noConsoleOverride];
