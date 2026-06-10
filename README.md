# worktree-io/landing

The [worktree.io](https://worktree.io) marketing site and URL scheme bridge. When a developer clicks an "Open workspace" link from a GitHub issue comment, they land here. The page extracts the issue parameters from the URL, constructs a `worktree://` deep link, and hands off to the locally running [Worktree runner](https://github.com/worktree-io/runner).

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4

## Development

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key routes

| Route         | Purpose                                                          |
| ------------- | ---------------------------------------------------------------- |
| `/`           | Marketing landing page                                           |
| `/open`       | URL scheme receiver — accepts `?owner`, `?repo`, `?issue` params and triggers `worktree://open?...` |

The `/open` route is the public URL API consumed by the GitHub Action, CLI, and integrations. See [docs/api-versioning.md](docs/api-versioning.md) for the versioning policy and parameter reference.

## License

MIT
