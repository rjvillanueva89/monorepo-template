# Monorepo Template

A reusable monorepo template by Master Lodi [@pgdureza](https://github.com/pgdureza)

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

`/apps/*`

- `web`: another [Next.js](https://nextjs.org/) app

`/packages/*`

- `ui`: base reusable components
- `utils`: some useful utility functions
- `eslint-config-custom`: `eslint` configurations includes:
  - `eslint`
  - `eslint-config-next`
  - `eslint-config-prettier`
  - `eslint-config-turbo`
  - `eslint-plugin-react`
  - `eslint-plugin-simple-import-sort`
  - `eslint-plugin-tailwindcss`
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `twconfig`: tailwind config for `/apps/*`

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### to start local development

run terminal commands in `root` directory!!

```bash
pnpm turbo dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
