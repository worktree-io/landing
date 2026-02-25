import config from "eslint-config-agent";

// URL strings are centralized in these files; all other src files must reference these constants.
const urlConstantsOverride = {
  files: ["src/lib/github-url.ts", "src/lib/runner-url.ts", "src/lib/analytics-script-url.ts"],
  rules: {
    "default/no-hardcoded-urls": "off",
  },
};

export default [...config, urlConstantsOverride];
