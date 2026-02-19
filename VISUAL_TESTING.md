# Visual Testing

This project uses [Playwright](https://playwright.dev/) for screenshot (visual regression) testing of the statically generated pages.

## First-time setup

Install the Playwright browser:

```sh
pnpm exec playwright install chromium
```

## Running tests

```sh
pnpm run test:visual
```

This builds the site, serves it locally, and compares screenshots against the stored baselines. The push is blocked if any test fails.

## Updating baselines

When you make intentional visual changes, update the baseline screenshots:

```sh
pnpm run test:visual:update
```

Review the updated PNGs in `tests/screenshots.spec.ts-snapshots/`, then commit them.

## Adding tests for new pages

Add a new `test` block in `tests/screenshots.spec.ts`:

```ts
test("page name", async ({ page }) => {
  await page.goto("/your-path");
  await expect(page).toHaveScreenshot("your-path.png", { fullPage: true });
});
```

Then run `pnpm run test:visual:update` to generate the baseline.
