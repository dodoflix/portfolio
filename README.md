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
├── web/              → Next.js 16
├── api/              → NestJS 11
├── web-e2e/          → Playwright
└── api-e2e/          → Jest E2E

libs/shared/
├── ui/               → Component library
│   └── components/
│       ├── ui/           → Button, Card, Dialog...
│       ├── layout/       → Container, Section...
│       ├── typography/   → Heading, Text...
│       ├── navigation/   → Navbar, Footer...
│       ├── content/      → Hero, ProjectCard...
│       ├── status/       → StatusIcon, BigText...
│       └── utility/      → TypeWriter, FadeIn...
└── data-access/
```

## Usage

```tsx
import { Button, Container, Heading, Hero } from '@portfolio/ui';
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
pnpm dlx shadcn@latest add button           # add shadcn component
pnpm nx g @nx/next:page about --project=web # new page
pnpm nx g @nx/nest:module users --project=api
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
