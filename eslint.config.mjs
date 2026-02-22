import config from "eslint-config-agent";

// The eslint-config-agent rules are designed for agent-generated utility/logic code.
// src/app/ contains UI/design components that have different structural constraints
// (long styled components, inline styles, external links in JSX, etc.).
const uiOverrides = {
  files: ["src/**/*.{ts,tsx}"],
  rules: {
    // Nullish coalescing is idiomatic in React/TS UI code
    "no-restricted-syntax": "off",
    // Navigation links (e.g. GitHub) are legitimate hardcoded values in UI
    "default/no-hardcoded-urls": "off",
  },
};

export default [...config, uiOverrides];
