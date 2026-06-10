# API Versioning Policy

## Overview

The primary "API surface" of this site is the `/open` URL scheme bridge. External consumers (GitHub Action comments, CI scripts, integrations) construct `/open?...` URLs. Breaking changes to accepted parameters must not invalidate old links.

## Current version: v1 (unversioned)

All existing `/open` URLs are treated as **v1**. The `v` query parameter is optional and defaults to `1`.

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

| Version | Path             | Status  |
| ------- | ---------------- | ------- |
| v1      | `/open`          | Current |
| v2+     | `/open?v=2&...`  | Future  |

### Rules

1. **Never remove or rename params from an existing version.** Old links must keep working.
2. **Introduce a new version for breaking changes.** Add `v=2` (or higher) when dropping, renaming, or reinterpreting existing params.
3. **New optional params are non-breaking.** They may be added to an existing version without a version bump.
4. **The `v` param must be a positive integer string.** Unknown values return an error state with a clear message.

## Adding a new version

1. Extend the `resolveParams` function in `src/app/open/page.tsx` with a branch for the new version.
2. Add the new param set to this document under a new `## v<N> parameter sets` section.
3. Keep the old version branch intact — do not delete it.
4. Update the version table above.
