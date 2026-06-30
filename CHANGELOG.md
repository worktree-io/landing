# Changelog

All notable changes to the [worktree.io](https://worktree.io) landing site and URL scheme bridge will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Add API versioning for the `/open` URL scheme (#27)
- Auto-close the `/open` page after 10 seconds, with a persistent toggle to disable it (#26)
- Set up a CI/CD pipeline to deploy the site to Cloudflare Pages (#25)
- Add support for GitLab issue URLs (#24)
- Add logo and favicon (#18)
- Add a Hooks section documenting `pre:open` and `post:open` config options (#11)
- Add mobile-responsive layout and mobile e2e tests (#8)
- Add a GitHub Action setup section to the landing page (#7)

### Changed

- Replace inline SVG icons with the `lucide-react` icon library (#22)
- Update download buttons to link to GitHub releases (#5)

### Fixed

- Use path-based versioning (`/v2/open`) instead of a query parameter (`?v=2`) (#28)
- Fix incorrect GitHub Action reference: `worktree-io/action` to `worktree-io/comment-action` (#16)
