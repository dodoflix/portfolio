# Portfolio

Nx monorepo with Next.js frontend and NestJS API.

## Quick Start

```bash
pnpm install
pnpm nx dev web        # http://localhost:4200
pnpm nx serve api      # http://localhost:3000/api
```

## Structure

```
apps/
  web/          → Next.js 16
  api/          → NestJS 11
  web-e2e/      → Playwright
  api-e2e/      → Jest E2E
libs/shared/
  ui/           → React components
  data-access/  → Shared utilities
```

## Commands

```bash
pnpm nx dev web                    # dev server
pnpm nx serve api                  # api server
pnpm nx test <project>             # unit tests
pnpm nx e2e <project>-e2e          # e2e tests
pnpm nx lint <project>             # lint
pnpm nx affected -t test           # test affected
pnpm nx graph                      # dependency graph
pnpm commit                        # conventional commit
```

## Generate

```bash
pnpm nx g @nx/react:component button --project=ui
pnpm nx g @nx/next:page about --project=web
pnpm nx g @nx/nest:module users --project=api
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
