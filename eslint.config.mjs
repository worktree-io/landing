import config from "eslint-config-agent";

// The eslint-config-agent rules are designed for agent-generated utility/logic code.
// src/app/ contains UI/design components that have different structural constraints
// (long styled components, inline styles, external links in JSX, etc.).
const uiOverrides = {
  files: ["src/**/*.{ts,tsx}"],
  rules: {
    // React UI components use inline styles rather than className-based styling
    "jsx-classname/require-classname": "off",
    // UI component files and functions are naturally longer than utility code
    "max-lines": "off",
    // Nullish coalescing and optional chaining are idiomatic in React/TS UI code
    "no-restricted-syntax": "off",
    "no-optional-chaining/no-optional-chaining": "off",
    // Navigation links (e.g. GitHub) are legitimate hardcoded values in UI
    "default/no-hardcoded-urls": "off",
  },
};

export default [...config, uiOverrides];
