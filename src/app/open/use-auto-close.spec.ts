/**
 * Behavioral spec for useAutoClose hook.
 *
 * The hook is exercised end-to-end via the /open page in Playwright tests
 * (tests/screenshots.spec.ts). Unit-level assertions are documented here
 * as a living specification.
 *
 * Key behaviors:
 * - When `active` is true and `autoClose` is true (default), a 10-second
 *   countdown starts and `window.close()` is called on expiry.
 * - The `worktree:auto-close` localStorage key persists the toggle preference.
 * - Setting the toggle to false cancels the countdown timer.
 * - Setting the toggle back to true restarts the countdown from 10 seconds.
 */

// This file is intentionally empty — see the comment above for behavioral spec.
