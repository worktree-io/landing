import { expect, test } from "@playwright/test";

test("home page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot("home.png", { fullPage: true });
});

test("no horizontal scroll overflow", async ({ page }) => {
  await page.goto("/");
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  expect(hasOverflow).toBe(false);
});

const SECTIONS = [
  { name: "hero", selector: ".hero-section" },
  { name: "how-it-works", selector: ".how-section" },
  { name: "why", selector: ".why-section" },
  { name: "editor", selector: ".editor-section" },
  { name: "install", selector: ".install-section" },
  { name: "action", selector: ".action-section" },
  { name: "hooks", selector: ".hooks-section" },
] as const;

for (const section of SECTIONS) {
  test(`section: ${section.name}`, async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(section.selector)).toHaveScreenshot(
      `section-${section.name}.png`
    );
  });
}
