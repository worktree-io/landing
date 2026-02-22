import config from "eslint-config-agent";

// The eslint-config-agent rules are designed for agent-generated utility/logic code.
// src/app/ contains UI/design components that have different structural constraints
// (long styled components, inline styles, external links in JSX, etc.).
const uiOverrides = {
  files: ["src/**/*.{ts,tsx}"],
  rules: {
    // Nullish coalescing is idiomatic in React/TS UI code
    "no-restricted-syntax": "off",
  },
};

// URL strings are centralized in these files; all other src files must reference these constants.
const urlConstantsOverride = {
  files: ["src/lib/github-url.ts", "src/lib/runner-url.ts"],
  rules: {
    "default/no-hardcoded-urls": "off",
  },
};

export default [...config, uiOverrides, urlConstantsOverride];
