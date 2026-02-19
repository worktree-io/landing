import { defineConfig, devices } from "@playwright/test";

const { CI } = process.env;

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://localhost:3000",
  },
  webServer: {
    command: "pnpm run build && pnpm exec serve out -l 3000",
    url: "http://localhost:3000",
    reuseExistingServer: !CI,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
