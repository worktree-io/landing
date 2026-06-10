# API Versioning Policy

## Overview

The primary "API surface" of this site is the `/open` URL scheme bridge. External consumers (GitHub Action comments, CI scripts, integrations) construct `/open?...` URLs. Breaking changes to accepted parameters must not invalidate old links.

## Current version: v1

The current URL scheme lives at `/open`. It is treated as v1.

### v1 parameter sets

**GitHub issue**
```
/open?owner=<owner>&repo=<repo>&issue=<number>
```

**GitLab issue**
```
/open?owner=<owner>&repo=<repo>&gitlab_issue=<number>
```

**Jira issue**
```
/open?owner=<owner>&repo=<repo>&jira_issue_key=<key>&jira_host=<host>
```

## Versioning convention

New versions live at a new path prefix — not as a query parameter.

| Version | Path        | Status  |
| ------- | ----------- | ------- |
| v1      | `/open`     | Current |
| v2+     | `/v2/open`  | Future  |

### Rules

1. **Never remove or rename params from an existing version.** Old links must keep working.
2. **Introduce a new path for breaking changes.** Use `/v2/open` (or `/v3/open`, etc.) when dropping, renaming, or reinterpreting existing params.
3. **New optional params are non-breaking.** They may be added to an existing version without a version bump.
4. **Old version routes stay alive indefinitely.** Do not delete `/open` when `/v2/open` ships.

## Adding a new version

1. Create `src/app/v2/open/` with its own `page.tsx` that implements the new param set.
2. Add the new param set to this document under a new `## v<N> parameter sets` section.
3. Update the version table above.
4. Keep the old route untouched — do not modify it.
