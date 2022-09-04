# Purpose

To show behavior of node versioning with yarn workspaces.

# Details

- Using yarn workspaces we can reference a local package from the filesystem if the desired version matches the local version.
- Likewise we can use yarn workspaces to reference a published package from npm if the desired version mathces the remote/npm version.

## Versions available

### Local
- @dfs-demo/component-a v 0.3.0 is available locally

### Remote (npm)
@dfs-demo/component-a has the following versions that can be tested https://www.npmjs.com/package/@dfs-demo/component-a
  - 3.0.0
  - 2.5.5
  - 2.5.0
  - 2.0.0

# Setup

1. Clone project
2. Run `yarn install`

## Validate Local
1. Run `yarn workspace app start`
   1. You should see `Component-A 0.3.0 (local)` logged out (amongst some other things), this uses the local filesystem.
2. Update to a remote, run `yarn workspace app add @dfs-demo/component-a@2.0.0`
    1. Run `yarn workspace app start` again and see if output is different

## Notes
- Installing with a wildcard `*` will prefer local, i.e. `yarn workspace app add @dfs-demo/component-a@*`
- Installing using a specific local version will use workspaces, specific remote version will use npm, and mismatch will error as expected.