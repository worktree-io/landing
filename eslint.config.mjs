import config from "eslint-config-agent";

// URL strings are centralized in these files; all other src files must reference these constants.
const urlConstantsOverride = {
  files: ["src/lib/github-url.ts", "src/lib/runner-url.ts", "src/lib/analytics-script-url.ts", "src/lib/jira-webhook-url.ts"],
  rules: {
    "default/no-hardcoded-urls": "off",
  },
};

// Enforce `import type` for type-only imports so the TypeScript compiler can
// fully elide them from the emitted JavaScript. Keeps type and value imports
// distinct, avoids accidental runtime imports / side effects, and plays well
// with bundlers and `isolatedModules`.
const typeImportsOverride = {
  files: ["src/**/*.{ts,tsx}"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
  },
};

export default [...config, urlConstantsOverride, typeImportsOverride];
