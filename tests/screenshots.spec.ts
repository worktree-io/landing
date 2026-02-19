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
